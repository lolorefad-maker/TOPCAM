/**
 * سيرفر متجر TOP CAM (Node.js بدون أي حزم خارجية)
 *
 * - يخدم صفحات المتجر ولوحة الإدارة.
 * - يحفظ الطلبات والكتالوج والإعدادات على السيرفر ليراها الأدمن من أي جهاز.
 * - كل ما يخص الأدمن (قراءة الطلبات، تغيير حالتها، تعديل الكتالوج والإعدادات)
 *   محمي بكلمة سر الأدمن (ADMIN_PASSWORD). إنشاء الطلب فقط متاح للزبائن.
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const crypto = require('crypto');

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = __dirname;
const DATA_DIR = process.env.DATA_DIR || path.join(__dirname, 'data');
try { fs.mkdirSync(DATA_DIR, { recursive: true }); } catch (e) {}

const FILES = {
  deleted: path.join(DATA_DIR, 'deleted_ids.json'),
  catalog: path.join(DATA_DIR, 'catalog.json'),
  orders: path.join(DATA_DIR, 'orders.json'),
  kv: path.join(DATA_DIR, 'kv.json')
};
const KV_NAMES = ['settings', 'banners', 'promo', 'gearUp'];
const ORDER_STATUSES = ['pending', 'approved', 'shipped', 'completed', 'cancelled'];
const STATUS_TEXT = {
  pending: 'قيد المراجعة وبانتظار الموافقة',
  approved: 'تمت الموافقة',
  shipped: 'قيد الشحن والتوصيل',
  completed: 'تم التوصيل بنجاح',
  cancelled: 'ملغي / مرفوض'
};

// ---------- كلمة سر الأدمن ----------
function loadAdminPassword() {
  if (process.env.ADMIN_PASSWORD) return process.env.ADMIN_PASSWORD;
  const f = path.join(DATA_DIR, 'admin_password.txt');
  try {
    const saved = fs.readFileSync(f, 'utf8').trim();
    if (saved) return saved;
  } catch (e) {}
  const generated = crypto.randomBytes(6).toString('hex');
  try { fs.writeFileSync(f, generated, 'utf8'); } catch (e) {}
  console.log(`⚠️  لم يتم تعيين ADMIN_PASSWORD. كلمة سر الأدمن المؤقتة: ${generated}`);
  console.log(`   (على الاستضافة عيّن المتغير ADMIN_PASSWORD ليبقى ثابتاً)`);
  return generated;
}
const ADMIN_PASSWORD = loadAdminPassword();

function isAdmin(req) {
  const given = String(req.headers['x-admin-key'] || '');
  const a = crypto.createHash('sha256').update(given).digest();
  const b = crypto.createHash('sha256').update(ADMIN_PASSWORD).digest();
  return crypto.timingSafeEqual(a, b);
}

// ---------- قراءة وكتابة ملفات البيانات ----------
function readJson(file, fallback) {
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8') || 'null') ?? fallback;
  } catch (e) {
    return fallback;
  }
}
function writeJson(file, data) {
  const tmp = file + '.tmp';
  fs.writeFileSync(tmp, JSON.stringify(data, null, 2), 'utf8');
  fs.renameSync(tmp, file);
}

// أسعار المنتجات الأساسية (من js/data.js) لحساب إجمالي الطلب على السيرفر
let BASE_PRODUCTS = [];
try {
  const sandbox = {};
  vm.runInNewContext(
    fs.readFileSync(path.join(PUBLIC_DIR, 'js', 'data.js'), 'utf8') + '\n;this.__P = (typeof INITIAL_PRODUCTS !== "undefined") ? INITIAL_PRODUCTS : [];',
    sandbox,
    { timeout: 5000 }
  );
  BASE_PRODUCTS = Array.isArray(sandbox.__P) ? sandbox.__P : [];
} catch (e) {
  console.warn('تعذر قراءة js/data.js:', e.message);
}
function seededCatalog() {
  const deleted = new Set(readJson(FILES.deleted, []));
  return BASE_PRODUCTS.filter(p => !deleted.has(p.id));
}
function currentProducts() {
  const cat = readJson(FILES.catalog, null);
  return Array.isArray(cat) && cat.length ? cat : seededCatalog();
}

// ---------- أدوات HTTP ----------
function send(res, status, body, extra) {
  res.writeHead(status, Object.assign({
    'Content-Type': 'application/json; charset=UTF-8',
    'Cache-Control': 'no-cache, no-store, must-revalidate'
  }, extra || {}));
  res.end(JSON.stringify(body));
}
function readBody(req, limit) {
  return new Promise((resolve, reject) => {
    let size = 0;
    const chunks = [];
    req.on('data', c => {
      size += c.length;
      if (size > limit) { reject(new Error('too_large')); req.destroy(); return; }
      chunks.push(c);
    });
    req.on('end', () => {
      try { resolve(JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}')); }
      catch (e) { reject(new Error('bad_json')); }
    });
    req.on('error', reject);
  });
}

// حد بسيط لعدد الطلبات من نفس العنوان (حماية من الإغراق)
const hits = new Map();
function rateLimited(ip) {
  const now = Date.now();
  const list = (hits.get(ip) || []).filter(t => now - t < 10 * 60 * 1000);
  if (list.length >= 15) { hits.set(ip, list); return true; }
  list.push(now);
  hits.set(ip, list);
  return false;
}

const clean = (v, max) => String(v == null ? '' : v).replace(/[\u0000-\u001f]/g, ' ').trim().slice(0, max);

// ---------- إنشاء طلب ----------
function buildOrder(input) {
  const name = clean(input.customerName, 100);
  const phone = clean(input.phone, 30);
  const address = clean(input.address, 300);
  if (!name) return { error: 'الاسم مطلوب' };
  if (phone.replace(/[^0-9]/g, '').length < 7) return { error: 'رقم الهاتف غير صحيح' };
  if (!address) return { error: 'العنوان مطلوب' };
  if (!Array.isArray(input.items) || input.items.length === 0 || input.items.length > 50) {
    return { error: 'السلة فارغة' };
  }

  const products = currentProducts();
  const byId = new Map(products.map(p => [p.id, p]));
  const items = [];
  for (const raw of input.items) {
    const qty = Math.floor(Number(raw.quantity));
    if (!qty || qty < 1 || qty > 100) return { error: 'كمية غير صحيحة' };
    const known = byId.get(raw.id);
    if (known && String(known.availability || '').toLowerCase() === 'sold_out') {
      return { error: 'المنتج غير متوفر حالياً (سولد اوت): ' + clean(known.name, 80) };
    }
    // السعر من السيرفر إن كان المنتج معروفاً، وإلا من الزبون (منتج مضاف حديثاً غير محفوظ)
    const price = known ? Number(known.price) : Number(raw.price);
    if (!isFinite(price) || price < 0 || price > 1000000) return { error: 'سعر غير صحيح' };
    items.push({
      id: clean(raw.id, 40),
      name: clean(known ? known.name : raw.name, 200),
      price,
      quantity: qty,
      image: clean(known ? known.image : raw.image, 300),
      isPreOrder: !!raw.isPreOrder
    });
  }
  const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);
  const shipping = Math.max(0, Number(input.shipping) || 0);

  const orders = readJson(FILES.orders, []);
  let id = clean(input.id, 20);
  if (!/^ORD-\d{5,8}$/.test(id)) id = '';
  const existing = id ? orders.find(o => o.id === id) : null;
  if (existing) {
    // إعادة إرسال نفس الطلب (محاولة ثانية من المتصفح): لا نكرره
    if (existing.phone === phone && existing.customerName === name) return { order: existing, duplicate: true };
    id = '';
  }
  while (!id || orders.some(o => o.id === id)) {
    id = 'ORD-' + (100000 + crypto.randomInt(900000));
  }

  return {
    order: {
      id,
      date: new Date().toISOString(),
      customerName: name,
      phone,
      city: clean(input.city, 80),
      address,
      paymentMethod: clean(input.paymentMethod, 40) || 'cash_on_delivery',
      notes: clean(input.notes, 500),
      status: 'pending',
      statusText: STATUS_TEXT.pending,
      items,
      subtotal,
      shipping,
      total: subtotal + shipping
    }
  };
}

function decrementStock(items) {
  let cat = readJson(FILES.catalog, null);
  if (!Array.isArray(cat) || !cat.length) cat = JSON.parse(JSON.stringify(seededCatalog()));
  if (!cat.length) return;
  let changed = false;
  for (const it of items) {
    const p = cat.find(x => x.id === it.id);
    if (p && typeof p.stock === 'number') {
      p.stock = Math.max(0, p.stock - it.quantity);
      changed = true;
    }
  }
  if (changed) writeJson(FILES.catalog, cat);
}

// ---------- API ----------
async function handleApi(req, res, reqPath) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-admin-key');
  if (req.method === 'OPTIONS') { res.writeHead(204); res.end(); return; }

  const deny = () => send(res, 401, { error: 'غير مصرح. أدخل كلمة سر الأدمن.' });
  const fail = (e) => {
    if (e && e.message === 'too_large') return send(res, 413, { error: 'الحجم كبير جداً' });
    return send(res, 400, { error: 'بيانات غير صحيحة' });
  };

  try {
    // --- عامة (للزبائن) ---
    if (reqPath === '/api/catalog' && req.method === 'GET') {
      const saved = readJson(FILES.catalog, null);
      const isSaved = Array.isArray(saved) && saved.length > 0;
      return send(res, 200, isSaved ? saved : seededCatalog(), { 'X-Catalog-Source': isSaved ? 'saved' : 'seed' });
    }
    if (reqPath === '/api/deleted-ids' && req.method === 'GET') {
      return send(res, 200, readJson(FILES.deleted, []));
    }
    if (reqPath === '/api/kv' && req.method === 'GET') {
      return send(res, 200, readJson(FILES.kv, {}));
    }
    if (reqPath === '/api/orders' && req.method === 'POST') {
      const ip = req.socket.remoteAddress || '';
      if (rateLimited(ip)) return send(res, 429, { error: 'محاولات كثيرة، حاول لاحقاً' });
      const body = await readBody(req, 200 * 1024);
      const built = buildOrder(body);
      if (built.error) return send(res, 400, { error: built.error });
      if (!built.duplicate) {
        const orders = readJson(FILES.orders, []);
        orders.unshift(built.order);
        writeJson(FILES.orders, orders);
        decrementStock(built.order.items);
      }
      return send(res, 201, { success: true, order: built.order });
    }

    // --- للأدمن فقط ---
    if (reqPath === '/api/admin/check' && req.method === 'GET') {
      return isAdmin(req) ? send(res, 200, { ok: true }) : deny();
    }
    if (!isAdmin(req)) return deny();

    if (reqPath === '/api/orders' && req.method === 'GET') {
      return send(res, 200, readJson(FILES.orders, []));
    }
    const orderMatch = reqPath.match(/^\/api\/orders\/(ORD-\d+)$/);
    if (orderMatch && req.method === 'PATCH') {
      const body = await readBody(req, 10 * 1024);
      if (!ORDER_STATUSES.includes(body.status)) return send(res, 400, { error: 'حالة غير صحيحة' });
      const orders = readJson(FILES.orders, []);
      const order = orders.find(o => o.id === orderMatch[1]);
      if (!order) return send(res, 404, { error: 'الطلب غير موجود' });
      order.status = body.status;
      order.statusText = STATUS_TEXT[body.status];
      order.updatedAt = new Date().toISOString();
      writeJson(FILES.orders, orders);
      return send(res, 200, { success: true, order });
    }
    if (orderMatch && req.method === 'DELETE') {
      const orders = readJson(FILES.orders, []);
      const next = orders.filter(o => o.id !== orderMatch[1]);
      if (next.length === orders.length) return send(res, 404, { error: 'الطلب غير موجود' });
      writeJson(FILES.orders, next);
      return send(res, 200, { success: true });
    }

    if (reqPath === '/api/save-catalog' && req.method === 'POST') {
      const body = await readBody(req, 12 * 1024 * 1024);
      const prods = Array.isArray(body.products) ? body.products : [];
      if (!prods.length) return send(res, 400, { error: 'Empty products list' });
      writeJson(FILES.catalog, prods);
      return send(res, 200, { success: true, count: prods.length });
    }

    const kvMatch = reqPath.match(/^\/api\/kv\/(\w+)$/);
    if (kvMatch && req.method === 'PUT') {
      if (!KV_NAMES.includes(kvMatch[1])) return send(res, 404, { error: 'غير موجود' });
      const body = await readBody(req, 6 * 1024 * 1024);
      if (!body || typeof body.value !== 'object' || body.value === null) return send(res, 400, { error: 'قيمة غير صحيحة' });
      const kv = readJson(FILES.kv, {});
      kv[kvMatch[1]] = body.value;
      writeJson(FILES.kv, kv);
      return send(res, 200, { success: true });
    }

    if (reqPath === '/api/deleted-ids' && req.method === 'POST') {
      const body = await readBody(req, 200 * 1024);
      const current = readJson(FILES.deleted, []);
      const add = [];
      if (body.id) add.push(body.id);
      if (Array.isArray(body.ids)) add.push(...body.ids);
      const merged = Array.from(new Set([...current, ...add.map(String)]));
      writeJson(FILES.deleted, merged);
      return send(res, 200, { success: true, count: merged.length, deletedIds: merged });
    }
    if (reqPath === '/api/sync-deleted' && req.method === 'POST') {
      const body = await readBody(req, 200 * 1024);
      const incoming = Array.isArray(body.deletedIds) ? body.deletedIds.map(String) : [];
      const merged = Array.from(new Set([...readJson(FILES.deleted, []), ...incoming]));
      writeJson(FILES.deleted, merged);
      return send(res, 200, { success: true, count: merged.length, deletedIds: merged });
    }
    if (reqPath === '/api/reset-deleted' && req.method === 'POST') {
      writeJson(FILES.deleted, []);
      return send(res, 200, { success: true, count: 0, deletedIds: [] });
    }

    return send(res, 404, { error: 'غير موجود' });
  } catch (e) {
    return fail(e);
  }
}

// ---------- الملفات الثابتة (قائمة بيضاء فقط) ----------
const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webm': 'video/webm',
  '.mp4': 'video/mp4',
  '.ogv': 'video/ogg',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf'
};
const PUBLIC_DIRS = new Set(['css', 'js', 'images', 'videos', 'fonts']);

function isPublicPath(rel) {
  const parts = rel.split('/').filter(Boolean);
  if (parts.some(p => p.startsWith('.') || p === '..')) return false;
  if (parts.length === 1) return /\.(html|ico)$/i.test(parts[0]);
  return PUBLIC_DIRS.has(parts[0]);
}

const server = http.createServer((req, res) => {
  const rawPath = req.url.split('?')[0];
  let reqPath;
  try { reqPath = decodeURIComponent(rawPath); } catch (e) { reqPath = rawPath; }

  if (reqPath.startsWith('/api/')) { handleApi(req, res, reqPath); return; }

  if (reqPath === '/' || reqPath === '') reqPath = '/index.html';

  const filePath = path.join(PUBLIC_DIR, reqPath);
  if (!filePath.startsWith(PUBLIC_DIR + path.sep) || !isPublicPath(path.relative(PUBLIC_DIR, filePath).split(path.sep).join('/'))) {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
    res.end('<h1>404 - الصفحة غير موجودة</h1><p><a href="/">العودة إلى المتجر</a></p>');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
      res.end('<h1>404 - الصفحة غير موجودة</h1><p><a href="/">العودة إلى المتجر</a></p>');
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    const headers = { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' };
    if (ext === '.html' || ext === '.js') {
      headers['Cache-Control'] = 'no-cache, no-store, must-revalidate';
    } else {
      headers['Cache-Control'] = 'public, max-age=86400';
    }
    res.writeHead(200, headers);
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`📸 متجر TOP CAM الأردن لمعدات التصوير والسينما يعمل الآن!`);
  console.log(`🌐 المتجر الرئيسي: http://localhost:${PORT}`);
  console.log(`⚙️  لوحة تحكم الإدارة: http://localhost:${PORT}/admin.html`);
  console.log(`=======================================================`);
});

module.exports = server;

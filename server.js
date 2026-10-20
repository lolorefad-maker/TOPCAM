/**
 * سيرفر محلي خفيف لمتجر الكاميرات (Node.js Built-in HTTP Server)
 * يعمل بدون الحاجة لتثبيت أي حزم خارجية (Zero Dependencies)!
 * يدعم مزامنة البيانات عبر الأجهزة وحذف المنتجات فورياً بين اللابتوب والهاتف.
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname);

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webm': 'video/webm',
  '.mp4': 'video/mp4',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf'
};

const server = http.createServer((req, res) => {
  // التعامل مع مسار الصفحة الرئيسية وفك تشفير الروابط
  let rawPath = req.url.split('?')[0];
  let reqPath;
  try {
    reqPath = decodeURIComponent(rawPath);
  } catch (e) {
    reqPath = rawPath;
  }

  // API Endpoints for Cross-Device Data Synchronization (Laptop <-> Phone)
  if (reqPath.startsWith('/api/')) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
      res.writeHead(204);
      res.end();
      return;
    }

    const DATA_DIR = path.join(__dirname, 'data');
    if (!fs.existsSync(DATA_DIR)) {
      try { fs.mkdirSync(DATA_DIR, { recursive: true }); } catch (e) {}
    }
    const DELETED_FILE = path.join(DATA_DIR, 'deleted_ids.json');
    const CATALOG_FILE = path.join(DATA_DIR, 'catalog.json');

    const getDeletedIds = () => {
      try {
        if (fs.existsSync(DELETED_FILE)) {
          const content = fs.readFileSync(DELETED_FILE, 'utf8');
          return JSON.parse(content || '[]');
        }
      } catch (e) {}
      return [];
    };

    const saveDeletedIds = (ids) => {
      try {
        const unique = Array.from(new Set(ids));
        fs.writeFileSync(DELETED_FILE, JSON.stringify(unique, null, 2), 'utf8');
        return unique;
      } catch (e) {
        return ids;
      }
    };

    if (reqPath === '/api/catalog' && req.method === 'GET') {
      try {
        if (fs.existsSync(CATALOG_FILE)) {
          const content = fs.readFileSync(CATALOG_FILE, 'utf8');
          res.writeHead(200, {
            'Content-Type': 'application/json; charset=UTF-8',
            'Cache-Control': 'no-cache, no-store, must-revalidate'
          });
          res.end(content);
          return;
        }
      } catch (e) {}
      res.writeHead(200, { 'Content-Type': 'application/json; charset=UTF-8' });
      res.end(JSON.stringify([]));
      return;
    }

    if (reqPath === '/api/save-catalog' && req.method === 'POST') {
      let body = '';
      req.on('data', chunk => { body += chunk; });
      req.on('end', () => {
        try {
          const parsed = JSON.parse(body || '{}');
          const prods = Array.isArray(parsed.products) ? parsed.products : [];
          if (prods.length > 0) {
            fs.writeFileSync(CATALOG_FILE, JSON.stringify(prods, null, 2), 'utf8');
            res.writeHead(200, { 'Content-Type': 'application/json; charset=UTF-8' });
            res.end(JSON.stringify({ success: true, count: prods.length }));
            return;
          }
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Empty products list' }));
        } catch (e) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Invalid JSON' }));
        }
      });
      return;
    }

    if (reqPath === '/api/deleted-ids' && req.method === 'GET') {
      const ids = getDeletedIds();
      res.writeHead(200, {
        'Content-Type': 'application/json; charset=UTF-8',
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      });
      res.end(JSON.stringify(ids));
      return;
    }

    if (reqPath === '/api/deleted-ids' && req.method === 'POST') {
      let body = '';
      req.on('data', chunk => { body += chunk; });
      req.on('end', () => {
        try {
          const parsed = JSON.parse(body || '{}');
          const current = getDeletedIds();
          if (parsed.id && !current.includes(parsed.id)) {
            current.push(parsed.id);
          } else if (Array.isArray(parsed.ids)) {
            parsed.ids.forEach(id => {
              if (id && !current.includes(id)) current.push(id);
            });
          }
          const saved = saveDeletedIds(current);
          res.writeHead(200, { 'Content-Type': 'application/json; charset=UTF-8' });
          res.end(JSON.stringify({ success: true, count: saved.length, deletedIds: saved }));
        } catch (e) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Invalid JSON' }));
        }
      });
      return;
    }

    if (reqPath === '/api/sync-deleted' && req.method === 'POST') {
      let body = '';
      req.on('data', chunk => { body += chunk; });
      req.on('end', () => {
        try {
          const parsed = JSON.parse(body || '{}');
          const incoming = Array.isArray(parsed.deletedIds) ? parsed.deletedIds : [];
          const current = getDeletedIds();
          const merged = saveDeletedIds([...current, ...incoming]);
          res.writeHead(200, { 'Content-Type': 'application/json; charset=UTF-8' });
          res.end(JSON.stringify({ success: true, count: merged.length, deletedIds: merged }));
        } catch (e) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Invalid JSON' }));
        }
      });
      return;
    }

    if (reqPath === '/api/reset-deleted' && req.method === 'POST') {
      saveDeletedIds([]);
      res.writeHead(200, { 'Content-Type': 'application/json; charset=UTF-8' });
      res.end(JSON.stringify({ success: true, count: 0, deletedIds: [] }));
      return;
    }
  }

  if (reqPath === '/' || reqPath === '') {
    reqPath = '/index.html';
  }

  const filePath = path.join(PUBLIC_DIR, reqPath);
  const ext = path.extname(filePath).toLowerCase();

  // التحقق من وجود الملف
  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
      res.end(`<h1>404 - الصفحة غير موجودة</h1><p><a href="/">العودة إلى المتجر</a></p>`);
      return;
    }

    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    const headers = { 'Content-Type': contentType };

    if (ext === '.html' || ext === '.js') {
      headers['Cache-Control'] = 'no-cache, no-store, must-revalidate';
      headers['Pragma'] = 'no-cache';
      headers['Expires'] = '0';
    } else {
      headers['Cache-Control'] = 'public, max-age=86400';
    }

    res.writeHead(200, headers);

    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`📸 متجر TOP CAM الأردن لمعدات التصوير والسينما يعمل الآن!`);
  console.log(`🌐 المتجر الرئيسي: http://localhost:${PORT}`);
  console.log(`⚙️  لوحة تحكم الإدارة: http://localhost:${PORT}/admin.html`);
  console.log(`=======================================================`);
});

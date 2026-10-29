// اختبار الحفظ الدائم: node test/persist.test.js
// يشغّل خادم Upstash مزيّفاً (في الذاكرة)، ثم يشغّل السيرفر ويتأكد أن البيانات تبقى بعد إعادة تشغيله.
const http = require('http');
const { spawn } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');
const assert = require('assert');

const MOCK_PORT = 3921, APP_PORT = 3922, PASS = 'persist-pass';
const base = `http://127.0.0.1:${APP_PORT}`;
const A = { 'x-admin-key': PASS, 'Content-Type': 'application/json' };
const J = { 'Content-Type': 'application/json' };
const DEF = require('../data/default_deleted.json');
let passed = 0;
async function t(name, fn) {
  try { await fn(); passed++; console.log('  ok  ' + name); }
  catch (e) { console.log('FAIL  ' + name + '\n      ' + e.message); process.exitCode = 1; }
}

// خادم Upstash مزيّف: POST / مع مصفوفة أمر ["SET",k,v] أو ["GET",k]
const store = new Map();
let mockUp = true;
const mock = http.createServer((req, res) => {
  if (!mockUp) { req.destroy(); return; }
  let body = '';
  req.on('data', c => body += c);
  req.on('end', () => {
    if (req.headers.authorization !== 'Bearer tok') { res.writeHead(401); res.end('{"error":"unauthorized"}'); return; }
    const [cmd, key, val] = JSON.parse(body);
    if (cmd === 'SET') { if (Buffer.byteLength(val) > 1000000) { res.writeHead(413); res.end('{"error":"too large"}'); return; } store.set(key, val); res.end('{"result":"OK"}'); }
    else if (cmd === 'GET') res.end(JSON.stringify({ result: store.has(key) ? store.get(key) : null }));
    else { res.writeHead(400); res.end('{"error":"bad"}'); }
  });
});

function startApp(env) {
  const dataDir = fs.mkdtempSync(path.join(os.tmpdir(), 'topcam-p-'));
  const p = spawn(process.execPath, ['server.js'], {
    cwd: path.join(__dirname, '..'),
    env: Object.assign({}, process.env, { PORT: APP_PORT, DATA_DIR: dataDir, ADMIN_PASSWORD: PASS }, env),
    stdio: 'ignore'
  });
  return p;
}
async function waitUp() {
  for (let i = 0; i < 60; i++) {
    try { const r = await fetch(base + '/api/kv'); if (r.ok) return true; } catch (e) {}
    await new Promise(r => setTimeout(r, 100));
  }
  return false;
}
const stop = (p) => new Promise(res => { p.once('exit', res); p.kill('SIGTERM'); setTimeout(() => { try { p.kill('SIGKILL'); } catch (e) {} }, 3000); });
const call = (p, o) => fetch(base + p, o);

(async () => {
  await new Promise(r => mock.listen(MOCK_PORT, r));
  const env = { UPSTASH_REDIS_REST_URL: `http://127.0.0.1:${MOCK_PORT}`, UPSTASH_REDIS_REST_TOKEN: 'tok' };

  // أول تشغيل
  let app = startApp(env);
  assert.ok(await waitUp(), 'السيرفر لم يقم');

  const bigProducts = [];
  for (let i = 0; i < 60; i++) {
    bigProducts.push({ id: 'BIG-' + i, name: 'منتج كبير ' + i, price: 10 + i, stock: 5, availability: i % 2 ? 'pre_order' : 'none',
      category: i % 2 ? 'filters' : 'cameras', image: 'data:image/jpeg;base64,' + 'A'.repeat(24000) });
  }
  let orderId;
  await t('وضع التخزين يظهر دائماً للأدمن', async () => {
    const s = await (await call('/api/storage', { headers: A })).json();
    assert.equal(s.persistent, true);
    assert.equal(s.mode, 'upstash');
  });
  await t('حفظ كتالوج أكبر من 1MB (يتقسّم لأجزاء)', async () => {
    assert.ok(JSON.stringify(bigProducts).length > 1200000);
    assert.equal((await call('/api/save-catalog', { method: 'POST', headers: A, body: JSON.stringify({ products: bigProducts }) })).status, 200);
  });
  await t('حفظ إعدادات وطلب وحذف', async () => {
    await call('/api/kv/settings', { method: 'PUT', headers: A, body: JSON.stringify({ value: { whatsappNumber: '962791110000', storeAddress: 'عنوان اختبار' } }) });
    const r = await call('/api/orders', { method: 'POST', headers: J, body: JSON.stringify({
      customerName: 'زبون دائم', phone: '0791234567', address: 'عمان', items: [{ id: 'BIG-1', name: 'x', price: 1, quantity: 2 }] }) });
    assert.equal(r.status, 201);
    orderId = (await r.json()).order.id;
    await call('/api/deleted-ids', { method: 'POST', headers: A, body: JSON.stringify({ id: 'GONE-1' }) });
  });
  await new Promise(r => setTimeout(r, 600)); // انتظار الحفظ بالخلفية
  await stop(app);

  // إعادة تشغيل بمجلد بيانات جديد تماماً (مثل Render): كل شيء يجب أن يبقى
  app = startApp(env);
  assert.ok(await waitUp(), 'السيرفر لم يقم بعد إعادة التشغيل');
  await t('الكتالوج الكبير بقي بعد إعادة التشغيل', async () => {
    const r = await call('/api/catalog');
    assert.equal(r.headers.get('x-catalog-source'), 'saved');
    const c = await r.json();
    assert.equal(c.length, 60);
    assert.equal(c.find(p => p.id === 'BIG-1').availability, 'pre_order');
    assert.equal(c[5].image.length, ('data:image/jpeg;base64,' + 'A'.repeat(24000)).length);
  });
  await t('البري اوردر والمخزون بقيا (والطلب خصم المخزون)', async () => {
    const c = await (await call('/api/catalog')).json();
    assert.equal(c.find(p => p.id === 'BIG-1').stock, 3);
    assert.equal(c.filter(p => p.category === 'filters').every(p => p.availability === 'pre_order'), true);
  });
  await t('الطلب بقي ويظهر للأدمن', async () => {
    const list = await (await call('/api/orders', { headers: A })).json();
    assert.ok(list.find(o => o.id === orderId && o.customerName === 'زبون دائم'));
  });
  await t('الإعدادات والمحذوفات بقيت', async () => {
    const kv = await (await call('/api/kv')).json();
    assert.equal(kv.settings.whatsappNumber, '962791110000');
    assert.deepEqual(await (await call('/api/deleted-ids')).json(), [...DEF, 'GONE-1']);
  });
  await t('أي جهاز آخر يرى نفس الكتالوج المعتمد', async () => {
    const a = await (await call('/api/catalog')).json();
    const b = await (await call('/api/catalog')).json();
    assert.equal(a.length, b.length);
  });
  await stop(app);

  // Upstash غير متاح: السيرفر لا يبدأ (حتى لا يكتب فارغاً فوق البيانات)
  await t('إذا تعذّر الوصول لـ Upstash لا يبدأ السيرفر', async () => {
    mockUp = false;
    const p = startApp(env);
    const code = await new Promise(res => { p.once('exit', res); setTimeout(() => { try { p.kill('SIGKILL'); } catch (e) {} res('timeout'); }, 15000); });
    assert.equal(code, 1, 'exit code ' + code);
    mockUp = true;
  });
  await t('لا بيانات اختفت من Upstash بعد المحاولة الفاشلة', async () => {
    assert.ok([...store.keys()].some(k => k.startsWith('topcam:catalog:')));
  });

  mock.close();
  console.log(`\n${passed} اختبار نجح` + (process.exitCode ? ' (وفي إخفاقات)' : ''));
  process.exit(process.exitCode || 0);
})();

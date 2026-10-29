// اختبار واجهة السيرفر: node test/api.test.js  (يشغّل سيرفراً مؤقتاً ببيانات مؤقتة)
const { spawn } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');
const assert = require('assert');

const PORT = 3911;
const PASS = 'test-pass';
const dataDir = fs.mkdtempSync(path.join(os.tmpdir(), 'topcam-'));
const base = `http://127.0.0.1:${PORT}`;
const A = { 'x-admin-key': PASS, 'Content-Type': 'application/json' };
const J = { 'Content-Type': 'application/json' };

const DEF = require('../data/default_deleted.json');
let passed = 0;
async function t(name, fn) {
  try { await fn(); passed++; console.log('  ok  ' + name); }
  catch (e) { console.log('FAIL  ' + name + '\n      ' + e.message); process.exitCode = 1; }
}
const call = (p, o) => fetch(base + p, o);

(async () => {
  const srv = spawn(process.execPath, ['server.js'], {
    cwd: path.join(__dirname, '..'),
    env: Object.assign({}, process.env, { PORT, DATA_DIR: dataDir, ADMIN_PASSWORD: PASS }),
    stdio: 'ignore'
  });
  for (let i = 0; i < 50; i++) {
    try { await call('/api/kv'); break; } catch (e) { await new Promise(r => setTimeout(r, 100)); }
  }

  const order = (over) => Object.assign({
    customerName: 'سارة', phone: '0791234567', city: 'عمان', address: 'الجبيهة',
    items: [{ id: 'CAM-006', name: 'x', price: 1, quantity: 2 }]
  }, over || {});
  let orderId;

  await t('صفحات المتجر والأدمن تفتح', async () => {
    assert.equal((await call('/')).status, 200);
    assert.equal((await call('/admin.html')).status, 200);
    assert.equal((await call('/js/store.js')).status, 200);
  });
  await t('ملفات حساسة غير متاحة', async () => {
    for (const p of ['/server.js', '/package.json', '/data/orders.json', '/data/admin_password.txt', '/clean_push.ps1', '/.gitignore', '/%2e%2e/server.js', '/js/../server.js']) {
      const r = await call(p);
      assert.equal(r.status, 404, p + ' => ' + r.status);
    }
  });
  await t('الكتالوج موحّد من السيرفر قبل أي حفظ (نفس القائمة لكل الأجهزة)', async () => {
    const a = await (await call('/api/catalog')).json();
    const b = await (await call('/api/catalog')).json();
    assert.ok(a.length > 300, 'length ' + a.length);
    assert.equal(a.length, b.length);
    await call('/api/deleted-ids', { method: 'POST', headers: A, body: JSON.stringify({ id: a[0].id }) });
    const c = await (await call('/api/catalog')).json();
    assert.equal(c.length, a.length - 1, 'المحذوف يُستبعد من الكتالوج الموحّد');
    assert.equal((await call('/api/catalog')).headers.get('x-catalog-source'), 'seed');
    await call('/api/reset-deleted', { method: 'POST', headers: A });
  });
  await t('المنتجات المحذوفة افتراضياً لا تظهر (399 ناقص القائمة)', async () => {
    const c = await (await call('/api/catalog')).json();
    assert.equal(c.length, 399 - DEF.length);
    assert.ok(DEF.every(id => !c.find(p => p.id === id)), 'ظهر منتج محذوف');
    const d = await (await call('/api/deleted-ids')).json();
    assert.ok(DEF.every(id => d.includes(id)));
  });
  await t('الأدمن مرفوض بدون كلمة سر', async () => {
    assert.equal((await call('/api/orders')).status, 401);
    assert.equal((await call('/api/admin/check')).status, 401);
    assert.equal((await call('/api/admin/check', { headers: { 'x-admin-key': 'bad' } })).status, 401);
    assert.equal((await call('/api/save-catalog', { method: 'POST', headers: J, body: '{"products":[{"id":"a"}]}' })).status, 401);
    assert.equal((await call('/api/kv/settings', { method: 'PUT', headers: J, body: '{"value":{}}' })).status, 401);
    assert.equal((await call('/api/deleted-ids', { method: 'POST', headers: J, body: '{"id":"x"}' })).status, 401);
    assert.equal((await call('/api/orders/ORD-123456', { method: 'DELETE' })).status, 401);
  });
  await t('كلمة السر الصحيحة تُقبل', async () => {
    assert.equal((await call('/api/admin/check', { headers: A })).status, 200);
  });
  await t('الزبون ينشئ طلباً ويظهر عند الأدمن', async () => {
    const r = await call('/api/orders', { method: 'POST', headers: J, body: JSON.stringify(order()) });
    assert.equal(r.status, 201);
    const body = await r.json();
    orderId = body.order.id;
    assert.match(orderId, /^ORD-\d{5,8}$/);
    assert.equal(body.order.status, 'pending');
    const list = await (await call('/api/orders', { headers: A })).json();
    assert.ok(list.find(o => o.id === orderId), 'الطلب غير موجود عند الأدمن');
  });
  await t('السيرفر يعيد حساب السعر ولا يثق بالزبون', async () => {
    const base0 = await (await call('/api/orders', { headers: A })).json();
    const o = base0.find(x => x.id === orderId);
    assert.notEqual(o.items[0].price, 1, 'سعر الزبون المزوّر مقبول!');
    assert.equal(o.subtotal, o.items[0].price * 2);
    assert.equal(o.total, o.subtotal);
  });
  await t('إعادة إرسال نفس الطلب لا تكرره', async () => {
    const before = (await (await call('/api/orders', { headers: A })).json()).length;
    const r = await call('/api/orders', { method: 'POST', headers: J, body: JSON.stringify(order({ id: orderId })) });
    assert.equal(r.status, 201);
    const after = (await (await call('/api/orders', { headers: A })).json()).length;
    assert.equal(after, before);
  });
  await t('طلبات غير صحيحة تُرفض', async () => {
    const bad = [order({ customerName: '' }), order({ phone: '12' }), order({ address: '' }), order({ items: [] }),
      order({ items: [{ id: 'CAM-006', name: 'x', price: 1, quantity: 0 }] }),
      order({ items: [{ id: 'ZZZ', name: 'x', price: -5, quantity: 1 }] })];
    for (const b of bad) {
      const r = await call('/api/orders', { method: 'POST', headers: J, body: JSON.stringify(b) });
      assert.equal(r.status, 400, JSON.stringify(b).slice(0, 80));
    }
    assert.equal((await call('/api/orders', { method: 'POST', headers: J, body: '{bad' })).status, 400);
  });
  await t('تغيير حالة الطلب (موافقة ثم شحن ثم تسليم ثم إلغاء)', async () => {
    for (const st of ['approved', 'shipped', 'completed', 'cancelled']) {
      const r = await call('/api/orders/' + orderId, { method: 'PATCH', headers: A, body: JSON.stringify({ status: st }) });
      assert.equal(r.status, 200, st);
      const list = await (await call('/api/orders', { headers: A })).json();
      assert.equal(list.find(o => o.id === orderId).status, st);
    }
    assert.equal((await call('/api/orders/' + orderId, { method: 'PATCH', headers: A, body: '{"status":"nope"}' })).status, 400);
    assert.equal((await call('/api/orders/ORD-999999', { method: 'PATCH', headers: A, body: '{"status":"approved"}' })).status, 404);
  });
  await t('حفظ الكتالوج وبري اوردر ظاهر للزبائن', async () => {
    const prods = [
      { id: 'T-1', name: 'منتج بري اوردر', price: 100, stock: 5, availability: 'pre_order' },
      { id: 'T-2', name: 'منتج سولد اوت', price: 50, stock: 0, availability: 'sold_out' }
    ];
    assert.equal((await call('/api/save-catalog', { method: 'POST', headers: A, body: JSON.stringify({ products: prods }) })).status, 200);
    assert.equal((await call('/api/save-catalog', { method: 'POST', headers: A, body: '{"products":[]}' })).status, 400);
    assert.equal((await call('/api/catalog')).headers.get('x-catalog-source'), 'saved');
    const pub = await (await call('/api/catalog')).json();
    assert.equal(pub.length, 2);
    assert.equal(pub[0].availability, 'pre_order');
    assert.equal(pub[1].availability, 'sold_out');
  });
  await t('الطلب يخصم المخزون من الكتالوج ويستخدم سعر الكتالوج', async () => {
    const r = await call('/api/orders', { method: 'POST', headers: J, body: JSON.stringify(order({ items: [{ id: 'T-1', name: 'x', price: 1, quantity: 2, isPreOrder: true }] })) });
    assert.equal(r.status, 201);
    const o = (await r.json()).order;
    assert.equal(o.total, 200);
    assert.equal(o.items[0].isPreOrder, true);
    const pub = await (await call('/api/catalog')).json();
    assert.equal(pub.find(p => p.id === 'T-1').stock, 3);
  });
  await t('منتج سولد اوت لا يُطلب', async () => {
    const r = await call('/api/orders', { method: 'POST', headers: J, body: JSON.stringify(order({ items: [{ id: 'T-2', name: 'x', price: 50, quantity: 1 }] })) });
    assert.equal(r.status, 400);
  });
  await t('الإعدادات والبانرات والعرض المنبثق تُحفظ وتُقرأ', async () => {
    for (const name of ['settings', 'banners', 'promo', 'gearUp']) {
      const v = { marker: name + '-v1', whatsappNumber: '962791111111' };
      assert.equal((await call('/api/kv/' + name, { method: 'PUT', headers: A, body: JSON.stringify({ value: v }) })).status, 200, name);
    }
    const kv = await (await call('/api/kv')).json();
    assert.equal(kv.settings.marker, 'settings-v1');
    assert.equal(kv.banners.marker, 'banners-v1');
    assert.equal(kv.promo.marker, 'promo-v1');
    assert.equal(kv.gearUp.marker, 'gearUp-v1');
    assert.equal((await call('/api/kv/evil', { method: 'PUT', headers: A, body: '{"value":{}}' })).status, 404);
  });
  await t('حذف المنتجات وإعادتها', async () => {
    assert.equal((await call('/api/deleted-ids', { method: 'POST', headers: A, body: '{"id":"T-2"}' })).status, 200);
    assert.deepEqual(await (await call('/api/deleted-ids')).json(), [...DEF, 'T-2']);
    assert.equal((await call('/api/sync-deleted', { method: 'POST', headers: A, body: '{"deletedIds":["T-3"]}' })).status, 200);
    assert.equal((await (await call('/api/deleted-ids')).json()).length, DEF.length + 2);
    assert.equal((await call('/api/reset-deleted', { method: 'POST', headers: A })).status, 200);
    assert.deepEqual(await (await call('/api/deleted-ids')).json(), DEF);
  });
  await t('حذف الطلب', async () => {
    assert.equal((await call('/api/orders/' + orderId, { method: 'DELETE', headers: A })).status, 200);
    const list = await (await call('/api/orders', { headers: A })).json();
    assert.ok(!list.find(o => o.id === orderId));
    assert.equal((await call('/api/orders/' + orderId, { method: 'DELETE', headers: A })).status, 404);
  });
  await t('الحد من الإغراق بالطلبات', async () => {
    let limited = false;
    for (let i = 0; i < 25; i++) {
      const r = await call('/api/orders', { method: 'POST', headers: J, body: JSON.stringify(order()) });
      if (r.status === 429) { limited = true; break; }
    }
    assert.ok(limited);
  });

  srv.kill();
  console.log(`\n${passed} اختبار نجح` + (process.exitCode ? ' (وفي إخفاقات)' : ''));
})();

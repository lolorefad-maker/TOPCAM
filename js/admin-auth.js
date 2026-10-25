// بوابة دخول لوحة الإدارة: كلمة السر يتحقق منها السيرفر (ADMIN_PASSWORD)
// الحماية الفعلية على السيرفر؛ هذه الشاشة فقط تجمع كلمة السر وتحفظها لهذه الجلسة.
(function () {
  var KEY = 'topcam_admin_key';

  function getKey() {
    try { return sessionStorage.getItem(KEY) || ''; } catch (e) { return ''; }
  }

  function check(key) {
    return fetch('/api/admin/check', { headers: { 'x-admin-key': key }, cache: 'no-store' })
      .then(function (r) { return r.ok; })
      .catch(function () { return null; }); // null = تعذر الوصول للسيرفر
  }

  function showGate(message) {
    if (document.getElementById('adminGate')) {
      var m = document.getElementById('adminGateMsg');
      if (m) m.textContent = message || '';
      return;
    }
    var gate = document.createElement('div');
    gate.id = 'adminGate';
    gate.setAttribute('style', 'position:fixed;inset:0;z-index:99999;background:#0b0f19;display:flex;align-items:center;justify-content:center;padding:16px;font-family:Tajawal,Cairo,sans-serif;direction:rtl');
    gate.innerHTML =
      '<form id="adminGateForm" style="background:#111827;border:1px solid #1f2937;border-radius:16px;padding:28px;width:100%;max-width:360px;color:#fff;display:grid;gap:14px">' +
      '<div style="font-size:20px;font-weight:800;color:#facc15">TOP CAM | لوحة الإدارة</div>' +
      '<label style="font-size:13px;color:#9ca3af">كلمة سر الأدمن</label>' +
      '<input id="adminGatePass" type="password" autocomplete="current-password" required style="padding:12px;border-radius:10px;border:1px solid #374151;background:#0b0f19;color:#fff;font-size:15px">' +
      '<div id="adminGateMsg" style="color:#fca5a5;font-size:13px;min-height:18px"></div>' +
      '<button type="submit" style="background:#facc15;color:#111;font-weight:800;border:0;border-radius:10px;padding:12px;font-size:15px;cursor:pointer">دخول</button>' +
      '</form>';
    document.body.appendChild(gate);
    document.getElementById('adminGateMsg').textContent = message || '';
    document.getElementById('adminGatePass').focus();
    document.getElementById('adminGateForm').addEventListener('submit', function (e) {
      e.preventDefault();
      var pass = document.getElementById('adminGatePass').value;
      check(pass).then(function (ok) {
        if (ok) {
          try { sessionStorage.setItem(KEY, pass); } catch (err) {}
          location.reload();
        } else if (ok === null) {
          document.getElementById('adminGateMsg').textContent = 'تعذر الاتصال بالسيرفر.';
        } else {
          document.getElementById('adminGateMsg').textContent = 'كلمة السر غير صحيحة.';
        }
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    var key = getKey();
    if (!key) { showGate(''); return; }
    check(key).then(function (ok) {
      if (ok === false) {
        try { sessionStorage.removeItem(KEY); } catch (e) {}
        showGate('انتهت الجلسة، أدخل كلمة السر مرة أخرى.');
      }
    });
  });

  window.addEventListener('admin_unauthorized', function () {
    showGate('انتهت الجلسة، أدخل كلمة السر مرة أخرى.');
  });

  // زر تسجيل الخروج (يمكن استدعاؤه من اللوحة)
  window.adminLogout = function () {
    try { sessionStorage.removeItem(KEY); } catch (e) {}
    location.reload();
  };
})();

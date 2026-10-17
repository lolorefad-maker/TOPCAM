/**
 * سيرفر محلي خفيف لمتجر الكاميرات (Node.js Built-in HTTP Server)
 * يعمل بدون الحاجة لتثبيت أي حزم خارجية (Zero Dependencies)!
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
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf'
};

const server = http.createServer((req, res) => {
  // التعامل مع مسار الصفحة الرئيسية
  let reqPath = req.url.split('?')[0];
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
    res.writeHead(200, { 'Content-Type': contentType });

    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`📸 متجر العدسة والضوء لمعدات التصوير والسينما يعمل الآن!`);
  console.log(`🌐 المتجر الرئيسي: http://localhost:${PORT}`);
  console.log(`⚙️  لوحة تحكم الإدارة: http://localhost:${PORT}/admin.html`);
  console.log(`=======================================================`);
});

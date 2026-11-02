'use strict';
// Vanta Productions — minimal static file server for Render (no dependencies).
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const PORT = Number(process.env.PORT) || 3000;
const HOST = '0.0.0.0';
const HERE = __dirname;
// This also supports repositories that already uploaded the site into a subfolder.
const nestedSite = path.join(HERE, 'vanta-productions-rebuild');
const rootIndex = path.join(HERE, 'index.html');
const rootIsVanta = fs.existsSync(rootIndex) &&
  fs.readFileSync(rootIndex, 'utf8').includes('Vanta Productions');
const siteRoot = rootIsVanta
  ? HERE
  : (fs.existsSync(path.join(nestedSite, 'index.html')) ? nestedSite : HERE);

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

http.createServer((req, res) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405, { Allow: 'GET, HEAD' });
    res.end('Method Not Allowed');
    return;
  }

  let pathname;
  try {
    pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  } catch {
    res.writeHead(400);
    res.end('Bad Request');
    return;
  }
  if (pathname === '/') pathname = '/index.html';
  if (pathname.includes('\0') || pathname.includes('\\')) {
    res.writeHead(400);
    res.end('Bad Request');
    return;
  }

  const file = path.resolve(siteRoot, '.' + pathname);
  if (!file.startsWith(siteRoot + path.sep)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.stat(file, (err, stat) => {
    if (err || !stat.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 — Page not found');
      return;
    }
    const ext = path.extname(file).toLowerCase();
    const headers = {
      'Content-Type': mimeTypes[ext] || 'application/octet-stream',
      'X-Content-Type-Options': 'nosniff',
      'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=300',
    };
    res.writeHead(200, headers);
    if (req.method === 'HEAD') {
      res.end();
      return;
    }
    fs.createReadStream(file).pipe(res);
  });
}).listen(PORT, HOST, () => {
  console.log(`Vanta Productions serving ${siteRoot} on http://${HOST}:${PORT}`);
});

import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { createReadStream, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "public");
const port = Number(process.env.PORT || 3000);
const host = process.env.HOST || "127.0.0.1";

const types = new Map([
  [".html", "text/html; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".png", "image/png"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".webp", "image/webp"],
  [".svg", "image/svg+xml"]
]);

function safePath(urlPath) {
  const decoded = decodeURIComponent(urlPath.split("?")[0]);
  const clean = decoded === "/" ? "/index.html" : decoded;
  const resolved = path.normalize(path.join(publicDir, clean));
  return resolved.startsWith(publicDir) ? resolved : path.join(publicDir, "index.html");
}

createServer(async (req, res) => {
  let assetPath = safePath(req.url || "/");

  if (!existsSync(assetPath) || assetPath.endsWith(path.sep)) {
    assetPath = path.join(publicDir, "index.html");
  }

  try {
    await readFile(assetPath);
    res.writeHead(200, {
      "Content-Type": types.get(path.extname(assetPath)) || "application/octet-stream"
    });
    createReadStream(assetPath).pipe(res);
  } catch {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Not found");
  }
}).listen(port, host, () => {
  console.log(`Ocean Wave Studio running at http://localhost:${port}`);
});

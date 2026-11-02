
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Find the Vanta website files
const vantaDir = path.join(__dirname, "vanta-productions-rebuild");
const publicDir = existsSync(path.join(vantaDir, "index.html"))
  ? vantaDir
  : __dirname;

// Render configuration
const PORT = Number(process.env.PORT) || 3000;
const HOST = "0.0.0.0";

const types = new Map([
  [".html", "text/html; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".png", "image/png"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".webp", "image/webp"],
  [".svg", "image/svg+xml"],
  [".ico", "image/x-icon"],
  [".woff", "font/woff"],
  [".woff2", "font/woff2"]
]);

createServer(async (req, res) => {
  try {
    const requestUrl = new URL(req.url || "/", "http://localhost");
    const pathname = decodeURIComponent(requestUrl.pathname);

    const relativePath = pathname === "/"
      ? "index.html"
      : pathname.replace(/^\/+/, "");

    const filePath = path.resolve(publicDir, relativePath);

    // Prevent access outside the website folder
    if (!filePath.startsWith(publicDir + path.sep)) {
      res.writeHead(403);
      res.end("Forbidden");
      return;
    }

    const data = await readFile(filePath);

    res.writeHead(200, {
      "Content-Type": types.get(path.extname(filePath))
        || "application/octet-stream"
    });

    res.end(data);
  } catch (error) {
    res.writeHead(
      error.code === "ENOENT" || error.code === "EISDIR" ? 404 : 500,
      { "Content-Type": "text/plain; charset=utf-8" }
    );
    res.end("Unable to serve requested file");
  }
}).listen(PORT, HOST, () => {
  console.log("=================================");
  console.log("VANTA PRODUCTIONS");
  console.log("Server running successfully!");
  console.log(`Port: ${PORT}`);
  console.log(`Website folder: ${publicDir}`);
  console.log("=================================");
});

// Tiny local server for checking the built site:  npm run build && npm run serve
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { join, extname, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const dist = join(dirname(fileURLToPath(import.meta.url)), "..", "dist");
const types = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript", ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg", ".xml": "application/xml", ".txt": "text/plain" };

createServer(async (req, res) => {
  let p = join(dist, decodeURIComponent(req.url.split("?")[0]));
  try {
    if ((await stat(p)).isDirectory()) p = join(p, "index.html");
  } catch {
    try { await stat(p + "/index.html"); p += "/index.html"; } catch { p = join(dist, "404.html"); res.statusCode = 404; }
  }
  try {
    res.setHeader("Content-Type", types[extname(p)] || "application/octet-stream");
    res.end(await readFile(p));
  } catch { res.statusCode = 500; res.end("error"); }
}).listen(4321, () => console.log("Serving dist at http://localhost:4321"));

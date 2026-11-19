// Minimal static server (no dependencies) so the site also runs as a Render Web Service.
const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const port = process.env.PORT || 3000;
const types = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript", ".svg": "image/svg+xml", ".png": "image/png", ".ico": "image/x-icon" };

http.createServer((req, res) => {
  let p = decodeURIComponent((req.url || "/").split("?")[0]);
  if (p === "/" || p === "") p = "/index.html";
  const file = path.normalize(path.join(root, p));
  if (!file.startsWith(root) || path.basename(file) === "server.js" || path.basename(file) === "package.json") {
    res.writeHead(404); return res.end("Not found");
  }
  fs.readFile(file, (err, data) => {
    if (err) {
      fs.readFile(path.join(root, "index.html"), (e2, html) => {
        if (e2) { res.writeHead(500); return res.end("Error"); }
        res.writeHead(200, { "Content-Type": types[".html"] }); res.end(html);
      });
      return;
    }
    res.writeHead(200, { "Content-Type": types[path.extname(file)] || "application/octet-stream" });
    res.end(data);
  });
}).listen(port, () => console.log("Serving on port " + port));

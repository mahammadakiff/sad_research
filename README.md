# RAG Security Review – presentation website

Single-page website presenting the paper *"Security Risks of Retrieval-Augmented Generation Systems and Their Mitigation: A Literature and Market Review"* (A. Alasgarov, M. Aghazada, M. Gulmammadov, Baku Higher Oil School).

- One self-contained `index.html` (HTML, CSS, JS inline). No libraries, CDNs or tracking; works offline.
- Open `index.html` directly in a browser, or deploy as a static site.

## Deploy on Render
**Option A – Static Site (recommended):** Build command `npm run build` (or empty), Publish directory `.`

**Option B – Web Service:** Build command `npm install` (or `npm run build`), Start command `npm start`.
`server.js` is a tiny dependency-free Node server that serves `index.html` on `$PORT`.

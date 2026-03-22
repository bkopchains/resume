/**
 * GitHub Pages serves 404.html for unknown paths. Duplicating the SPA shell
 * lets direct loads like /resumee work with client-side routing.
 * @see https://github.com/rafgraph/spa-github-pages
 */
import { copyFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const dist = join(root, "dist");
const indexHtml = join(dist, "index.html");
const notFound = join(dist, "404.html");

if (!existsSync(indexHtml)) {
  console.error("copy-gh-pages-spa: dist/index.html not found. Run vite build first.");
  process.exit(1);
}
copyFileSync(indexHtml, notFound);

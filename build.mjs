// Builds the static site into ./dist
//   node build.mjs            → production build (clean URLs, for Cloudflare Pages / Netlify)
//   node build.mjs --preview  → relative links ending in index.html (works from any folder)
import { readdir, mkdir, writeFile, rm, cp } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { page } from "./src/layout.mjs";
import { ORDER_BASE, SITE } from "./src/data.mjs";

const root = dirname(fileURLToPath(import.meta.url));
const preview = process.argv.includes("--preview");
const out = join(root, preview ? "preview" : "dist");

await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });
await cp(join(root, "assets"), join(out, "assets"), { recursive: true });

const pageDir = join(root, "src/pages");
const files = (await readdir(pageDir)).filter((f) => f.endsWith(".mjs"));
const built = [];

for (const f of files) {
  const mod = await import(join(pageDir, f));
  const defs = Array.isArray(mod.default) ? mod.default : [mod.default];
  for (const def of defs) {
    const html = page({ ...def, preview });
    const file = def.file || (def.path === "/" ? "index.html" : join(def.path.replace(/^\//, ""), "index.html"));
    await mkdir(join(out, dirname(file)), { recursive: true });
    await writeFile(join(out, file), html);
    built.push(def.path);
  }
}

// Redirects (Cloudflare Pages and Netlify both read this file).
// Everything Owner still handles keeps working after launch.
const ownerRedirects = `# Online ordering, accounts and rewards stay on Owner.com
/menu            ${ORDER_BASE}/menu            302
/menu/*          ${ORDER_BASE}/menu/:splat     302
/login           ${ORDER_BASE}/login           302
/account/*       ${ORDER_BASE}/account/:splat  302
/orders/*        ${ORDER_BASE}/orders/:splat   302
/tags/*          ${ORDER_BASE}/tags/:splat     301
/privacy         ${ORDER_BASE}/privacy         302
/terms           ${ORDER_BASE}/terms           302
/accessibility   ${ORDER_BASE}/accessibility   302
`;
const aliasRedirects = `# Friendly aliases
/katy            /houston                      301
/locations       /page/locations               301
/reservations    /page/locations               301
/reserve         /page/locations               301
/franchise       /page/franchise               301
/press           /page/press                   301
/signature-club  /page/signature-club          301
/rewards         /page/signature-club          301
/about           /story                        301
`;
if (!preview) {
  // Don't redirect Owner paths to themselves before launch.
  const live = ORDER_BASE.replace(/\/$/, "") !== SITE.url;
  await writeFile(join(out, "_redirects"), (live ? ownerRedirects + "\n" : "") + aliasRedirects);
  await writeFile(
    join(out, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${built
      .filter((p) => p !== "/404")
      .map((p) => `  <url><loc>${SITE.url}${p === "/" ? "/" : p.replace(/\/$/, "")}</loc></url>`)
      .join("\n")}\n</urlset>\n`
  );
  await writeFile(join(out, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${SITE.url}/sitemap.xml\n`);
}

console.log(`Built ${built.length} pages → ${out}`);

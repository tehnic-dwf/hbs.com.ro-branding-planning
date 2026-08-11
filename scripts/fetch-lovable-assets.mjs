// Downloads every Lovable CDN asset referenced by a *.asset.json pointer into
// the static build output, so GitHub Pages can serve the images itself.
//
// Usage: node scripts/fetch-lovable-assets.mjs [outDir]
import { readdir, readFile, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const outDir = process.argv[2] || "dist/client";

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else if (entry.name.endsWith(".asset.json")) files.push(full);
  }
  return files;
}

const pointers = await walk("src");
if (pointers.length === 0) {
  console.log("No .asset.json pointers found.");
  process.exit(0);
}

for (const pointer of pointers) {
  const asset = JSON.parse(await readFile(pointer, "utf8"));
  const origin =
    process.env["ASSET_ORIGIN"] || `https://project--${asset.project_id}.lovable.app`;
  const target = path.join(outDir, asset.url.replace(/^\//, ""));
  const res = await fetch(origin + asset.url);
  if (!res.ok) {
    console.error(`Failed ${asset.url}: HTTP ${res.status}`);
    process.exit(1);
  }
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, Buffer.from(await res.arrayBuffer()));
  console.log(`ok ${asset.original_filename}`);
}

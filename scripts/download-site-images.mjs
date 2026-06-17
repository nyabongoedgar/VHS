#!/usr/bin/env node
/**
 * One-time fetch of remote site images into public/images/.
 * Re-run if you add new external URLs to the manifest below.
 */
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const imagesDir = join(root, "public", "images");

/** @type {{ dest: string; url: string }[]} */
const assets = [
  {
    dest: "home-hero.jpg",
    url: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1400&q=85",
  },
  {
    dest: "sectors/global-trade.jpg",
    url: "https://images.unsplash.com/photo-1606185540834-d6e7483ee1a4?auto=format&fit=crop&w=1200&q=85",
  },
  {
    dest: "trade/precious-metals.jpg",
    url: "https://images.unsplash.com/photo-1718752773283-de1f92513671?auto=format&fit=crop&w=1200&q=85",
  },
  {
    dest: "trade/agricultural-produce.jpg",
    url: "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=1200&q=85",
  },
  {
    dest: "trade/construction-materials.jpg",
    url: "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?auto=format&fit=crop&w=1200&q=85",
  },
  {
    dest: "trade/coffee.jpg",
    url: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=85",
  },
  {
    dest: "sectors/hospitality.jpg",
    url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85",
  },
  {
    dest: "sectors/real-estate.jpg",
    url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
  },
  {
    dest: "sectors/education.jpg",
    url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=85",
  },
  {
    dest: "sectors/floriculture.jpg",
    url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=85",
  },
  {
    dest: "sectors/media-advertising.jpg",
    url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=85",
  },
  {
    dest: "sectors/finance-insurance.jpg",
    url: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=85",
  },
  {
    dest: "sectors/recruitment.jpg",
    url: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85",
  },
  {
    dest: "sectors/foundation.jpg",
    url: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1200&q=85",
  },
  {
    dest: "coffee/hero.jpg",
    url: "https://images.unsplash.com/photo-1513530176992-0cf39c4cbed4?auto=format&fit=crop&w=1200&q=85",
  },
  {
    dest: "coffee/robusta.jpg",
    url: "https://images.unsplash.com/photo-1675306408031-a9aad9f23308?auto=format&fit=crop&w=1200&q=85",
  },
];

async function download({ dest, url }) {
  const out = join(imagesDir, dest);
  await mkdir(dirname(out), { recursive: true });
  const res = await fetch(url, { redirect: "follow" });
  if (!res.ok) {
    throw new Error(`${dest}: HTTP ${res.status} for ${url}`);
  }
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 5000) {
    throw new Error(`${dest}: file too small (${buf.length} bytes) — likely an error page`);
  }
  await writeFile(out, buf);
  console.log(`OK  ${dest} (${(buf.length / 1024).toFixed(0)} KB)`);
}

const failures = [];
for (const asset of assets) {
  try {
    await download(asset);
  } catch (err) {
    failures.push(String(err));
    console.error(`FAIL ${asset.dest}: ${err.message}`);
  }
}

if (failures.length) {
  process.exit(1);
}

console.log("\nAll images downloaded.");

import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import QRCode from "qrcode";
import { Resvg } from "@resvg/resvg-js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const cardDir = path.resolve(__dirname, "..");
const rootDir = path.resolve(cardDir, "..");
const fontsDir = path.join(rootDir, "public", "fonts");
const assetsDir = path.join(cardDir, "assets");
const exportDir = path.join(cardDir, "export");

const QR_URL = "https://vathy-holdings.vercel.app/";
const QR_SIZE_MM = 24;
const EXPORT_WIDTH_PX = Math.round((91 / 25.4) * 300); // ~1075
const EXPORT_HEIGHT_PX = Math.round((61 / 25.4) * 300); // ~720

const brandFonts = {
  loadSystemFonts: false,
  fontFiles: [
    path.join(fontsDir, "montserrat-600.woff2"),
    path.join(fontsDir, "cinzel-500.woff2"),
  ],
  defaultFontFamily: "Montserrat",
  serifFamily: "Cinzel",
  sansSerifFamily: "Montserrat",
};

async function ensureDir(dir) {
  await mkdir(dir, { recursive: true });
}

function extractQrPaths(qrSvg) {
  const pathMatches = [...qrSvg.matchAll(/<path[^>]*\/?>/g)];
  if (pathMatches.length === 0) {
    throw new Error("Could not extract QR path from generated SVG");
  }
  return pathMatches.map((match) => match[0]).join("\n    ");
}

async function generateQrMarkup() {
  const qrSvg = await QRCode.toString(QR_URL, {
    type: "svg",
    errorCorrectionLevel: "H",
    margin: 0,
    color: {
      dark: "#0a1628",
      light: "#ffffff",
    },
  });

  await ensureDir(assetsDir);
  await writeFile(path.join(assetsDir, "qr-code.svg"), qrSvg, "utf8");

  const viewBoxMatch = qrSvg.match(/viewBox="0 0 (\d+) (\d+)"/);
  const qrUnits = viewBoxMatch ? Number(viewBoxMatch[1]) : 29;
  const scale = QR_SIZE_MM / qrUnits;

  const paths = extractQrPaths(qrSvg);
  return `<g transform="translate(1, 1) scale(${scale})">\n    ${paths}\n  </g>`;
}

async function composeBackSvg() {
  const template = await readFile(path.join(cardDir, "back.template.svg"), "utf8");
  const qrMarkup = await generateQrMarkup();
  return template.replace("<!-- QR_CODE -->", qrMarkup);
}

function prepareSvgForRender(svg) {
  return svg.replace(
    /url\("\.\.\/public\/fonts\/([^"]+)"\)/g,
    (_, filename) => {
      const fontPath = path.join(fontsDir, filename).replace(/\\/g, "/");
      return `url("file://${fontPath}")`;
    }
  );
}

async function renderToPng(svg, outputPath) {
  const prepared = prepareSvgForRender(svg);
  const resvg = new Resvg(prepared, {
    fitTo: { mode: "width", value: EXPORT_WIDTH_PX },
    font: brandFonts,
  });
  const png = resvg.render().asPng();
  await writeFile(outputPath, png);
}

async function main() {
  await ensureDir(exportDir);

  const backSvg = await composeBackSvg();
  await writeFile(path.join(cardDir, "back.svg"), backSvg, "utf8");

  const frontSvg = await readFile(path.join(cardDir, "front.svg"), "utf8");

  await renderToPng(frontSvg, path.join(exportDir, "front.png"));
  await renderToPng(backSvg, path.join(exportDir, "back.png"));

  console.log("Business card exports written to business-card/export/");
  console.log(`  front.png  (${EXPORT_WIDTH_PX}×${EXPORT_HEIGHT_PX} px)`);
  console.log(`  back.png   (${EXPORT_WIDTH_PX}×${EXPORT_HEIGHT_PX} px)`);
  console.log(`  QR URL:    ${QR_URL}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

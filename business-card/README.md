# Vathy Frontier Holdings — Business Card

Print-ready business card for **Edgar Nyabongo T.**, Principal.

## Files

| File | Description |
|------|-------------|
| `front.svg` | Company side — logo + tagline |
| `back.template.svg` | Back side template (edit this; has QR placeholder) |
| `back.svg` | Composed back with QR (auto-generated) |
| `preview.html` | Browser preview of both sides |
| `assets/qr-code.svg` | Generated QR (auto-created by script) |
| `export/front.png` | 300 DPI print export |
| `export/back.png` | 300 DPI print export |

## Regenerate exports

```bash
pnpm generate:card
```

## Print specifications

| Spec | Value |
|------|-------|
| Trim size | 85 × 55 mm |
| Bleed | 3 mm all sides (artboard 91 × 61 mm) |
| Safe zone | 4 mm inset from trim |
| Export DPI | 300 (~1075 × 720 px with bleed) |
| Stock | 350–400 gsm matte recommended |

Tell your print shop: **85×55 mm, 3 mm bleed, CMYK conversion from PNG if needed.**

## Brand colors

| Token | Hex | Usage |
|-------|-----|-------|
| Navy | `#0a1628` | Background |
| Gold | `#c5a572` | Accent rule, monogram |
| Gold light | `#d4b98a` | Subtitles, one-liner |
| White | `#ffffff` | Name, contact, QR patch |

## Typography

| Element | Font | Weight |
|---------|------|--------|
| VFH monogram, contact, one-liner | **Montserrat** | 600 |
| Name, title, company, tagline | **Cinzel** | 500 |

Font files: `../public/fonts/montserrat-600.woff2`, `../public/fonts/cinzel-500.woff2`

## Pre-print QA checklist

- [ ] QR scans on iPhone and Android from `export/back.png`
- [ ] Name: Edgar Nyabongo T.
- [ ] Title: Principal
- [ ] Phone: +256 702 667 337
- [ ] Email: nyabongoedgar@gmail.com
- [ ] QR opens https://vathy-holdings.vercel.app/
- [ ] No text outside safe zone
- [ ] Fonts render correctly (not Arial/Georgia fallback)

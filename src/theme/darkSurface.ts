import type { SxProps, Theme } from "@mui/material/styles";
import { brand } from "./premiumTheme";

/** Text colors for charcoal / dark backgrounds */
export const onDark = {
  primary: brand.ivory,
  muted: "rgba(240, 236, 228, 0.82)",
  subtle: "rgba(240, 236, 228, 0.68)",
  stat: brand.goldLight,
} as const;

/** Small uppercase labels on dark heroes and dark sections */
export const darkEyebrowSx: SxProps<Theme> = {
  color: onDark.primary,
  fontSize: "0.8125rem",
  fontWeight: 600,
  letterSpacing: "0.22em",
  textTransform: "uppercase",
  textShadow: "0 1px 4px rgba(0, 0, 0, 0.55)",
};

/** Secondary line on dark heroes (subtitle, meta) */
export const darkHeroBodySx: SxProps<Theme> = {
  color: onDark.muted,
  fontWeight: 400,
  lineHeight: 1.75,
};

/** Text link / button on dark hero */
export const darkHeroLinkSx: SxProps<Theme> = {
  color: onDark.primary,
  letterSpacing: "0.06em",
  fontSize: "0.8125rem",
  textShadow: "0 1px 3px rgba(0, 0, 0, 0.45)",
  "&:hover": {
    color: brand.goldLight,
    bgcolor: "rgba(197, 165, 114, 0.1)",
  },
};

/** Footer / dark section heading labels */
export const darkSectionLabelSx: SxProps<Theme> = {
  color: onDark.primary,
  fontSize: "0.6875rem",
  fontWeight: 600,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
};

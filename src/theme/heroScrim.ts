import { brand } from "./premiumTheme";

const scrimBase = "61, 56, 50";

/** Left-weighted scrim — text on left, photo visible on right */
export const heroScrimLeft = `linear-gradient(
  105deg,
  rgba(${scrimBase}, 0.97) 0%,
  rgba(${scrimBase}, 0.9) 26%,
  rgba(${scrimBase}, 0.55) 48%,
  rgba(${scrimBase}, 0.18) 72%,
  rgba(${scrimBase}, 0.08) 100%
)`;

/** Centered text — darker top/bottom band, clearer image in the middle */
export const heroScrimCenter = `linear-gradient(
  180deg,
  rgba(${scrimBase}, 0.92) 0%,
  rgba(${scrimBase}, 0.52) 42%,
  rgba(${scrimBase}, 0.52) 58%,
  rgba(${scrimBase}, 0.92) 100%
)`;

/** Subtle gold accent at bottom-right corner only */
export const heroGoldVignette = `radial-gradient(
  ellipse 70% 60% at 100% 100%,
  rgba(197, 165, 114, 0.1) 0%,
  transparent 55%
)`;

export const heroImageSx = {
  position: "absolute" as const,
  inset: 0,
  backgroundSize: "cover",
  backgroundPosition: "center",
  transform: "scale(1.03)",
};

export const heroGoldTopLine = {
  position: "absolute" as const,
  top: 0,
  left: 0,
  right: 0,
  height: 1,
  bgcolor: brand.gold,
  opacity: 0.55,
  zIndex: 2,
};

export const heroGoldBottomLine = {
  position: "absolute" as const,
  bottom: 0,
  left: 0,
  right: 0,
  height: 1,
  bgcolor: brand.gold,
  opacity: 0.3,
  zIndex: 2,
};

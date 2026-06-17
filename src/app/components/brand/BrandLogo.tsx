import { Box, Typography } from "@mui/material";
import { brand } from "../../../theme/premiumTheme";

type BrandLogoProps = {
  compact?: boolean;
  /** true = ivory text for dark backgrounds (footer, heroes) */
  light?: boolean;
};

export function BrandMonogram({ size = 52 }: { size?: number }) {
  return (
    <Box
      aria-hidden
      sx={{
        width: size,
        height: size,
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: `2px solid ${brand.gold}`,
        borderRadius: 0.5,
        color: brand.goldDark,
        fontFamily: "Montserrat, sans-serif",
        fontWeight: 600,
        fontSize: size > 44 ? "0.875rem" : "0.6875rem",
        letterSpacing: "0.2em",
        bgcolor: "rgba(197, 165, 114, 0.06)",
      }}
    >
      VFH
    </Box>
  );
}

export function BrandLogo({ compact = false, light = false }: BrandLogoProps) {
  const titleColor = light ? brand.ivory : brand.espresso900;
  const subtitleColor = light ? brand.goldLight : brand.goldDark;

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: compact ? 1.5 : 2, minWidth: 0 }}>
      <BrandMonogram size={compact ? 44 : 48} />
      <Box sx={{ minWidth: 0 }}>
        <Typography
          sx={{
            fontFamily: "Cinzel, serif",
            fontWeight: 500,
            letterSpacing: "0.1em",
            color: titleColor,
            fontSize: compact ? "0.9375rem" : { xs: "0.9375rem", sm: "1.125rem", md: "1.3125rem" },
            lineHeight: 1.1,
          }}
        >
          Vathy Frontier
        </Typography>
        <Typography
          sx={{
            fontFamily: "Cinzel, serif",
            fontWeight: 500,
            letterSpacing: "0.24em",
            color: subtitleColor,
            fontSize: compact ? "0.625rem" : { xs: "0.625rem", sm: "0.6875rem" },
            mt: 0.25,
          }}
        >
          Holdings
        </Typography>
      </Box>
    </Box>
  );
}

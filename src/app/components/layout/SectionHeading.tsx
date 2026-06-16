import { Box, Typography } from "@mui/material";
import { brand } from "../../../theme/premiumTheme";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({ eyebrow, title, subtitle, align = "center", light = false }: SectionHeadingProps) {
  return (
    <Box sx={{ textAlign: align, mb: { xs: 5, md: 7 } }}>
      {eyebrow && (
        <Typography
          variant="subtitle2"
          sx={{ color: light ? brand.goldLight : brand.goldDark, mb: 2, display: "block" }}
        >
          {eyebrow}
        </Typography>
      )}
      <Typography
        variant="h3"
        component="h2"
        sx={{
          color: light ? brand.ivory : brand.ink,
          fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.625rem" },
          fontWeight: 400,
          mb: subtitle ? 2 : 0,
          letterSpacing: "0.02em",
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="body1"
          sx={{
            color: light ? "rgba(240,236,228,0.75)" : brand.slate,
            maxWidth: align === "center" ? 680 : "none",
            mx: align === "center" ? "auto" : 0,
            lineHeight: 1.8,
            fontSize: { xs: "0.9375rem", md: "1.0625rem" },
          }}
        >
          {subtitle}
        </Typography>
      )}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mt: 3, justifyContent: align === "center" ? "center" : "flex-start" }}>
        <Box sx={{ width: 48, height: 1, bgcolor: brand.gold }} />
        <Box sx={{ width: 6, height: 6, bgcolor: brand.gold, transform: "rotate(45deg)" }} />
        <Box sx={{ width: 48, height: 1, bgcolor: brand.gold }} />
      </Box>
    </Box>
  );
}

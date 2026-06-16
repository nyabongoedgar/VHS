import { Box, Container, Typography } from "@mui/material";
import { brand } from "../../../theme/premiumTheme";
import {
  heroGoldBottomLine,
  heroGoldTopLine,
  heroGoldVignette,
  heroImageSx,
  heroScrimCenter,
  heroScrimLeft,
} from "../../../theme/heroScrim";
import { darkEyebrowSx, darkHeroBodySx, onDark } from "../../../theme/darkSurface";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  image?: string;
  minHeight?: number | string;
  align?: "left" | "center";
  children?: React.ReactNode;
};

export function PageHero({
  title,
  subtitle,
  image,
  minHeight = { xs: 320, md: 420 },
  align = "center",
  children,
}: PageHeroProps) {
  const scrim = align === "left" ? heroScrimLeft : heroScrimCenter;

  return (
    <Box
      sx={{
        position: "relative",
        minHeight,
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        bgcolor: brand.charcoal900,
        color: brand.ivory,
        py: { xs: 8, md: 10 },
      }}
    >
      {image && (
        <Box
          sx={{
            ...heroImageSx,
            backgroundImage: `url(${image})`,
          }}
        />
      )}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: scrim,
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: heroGoldVignette,
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
      <Box sx={heroGoldTopLine} />
      <Box sx={heroGoldBottomLine} />
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Box sx={{ maxWidth: align === "center" ? 720 : 840, mx: align === "center" ? "auto" : 0, textAlign: align }}>
          {title && (
            <>
              <Typography variant="subtitle2" sx={{ ...darkEyebrowSx, mb: 2, display: "block" }}>
                Vathy Frontier Holdings
              </Typography>
              <Typography variant="h2" component="h1" sx={{ mb: 2, fontSize: { xs: "2rem", sm: "2.75rem", md: "3.25rem" }, fontWeight: 400, color: brand.ivory }}>
                {title}
              </Typography>
              <Box sx={{ width: 72, height: 1, bgcolor: brand.gold, mb: 3, mx: align === "center" ? "auto" : 0 }} />
            </>
          )}
          {subtitle && (
            <Typography
              variant="h6"
              sx={{
                ...darkHeroBodySx,
                fontSize: { xs: "1rem", md: "1.125rem" },
              }}
            >
              {subtitle}
            </Typography>
          )}
          {children}
        </Box>
      </Container>
    </Box>
  );
}

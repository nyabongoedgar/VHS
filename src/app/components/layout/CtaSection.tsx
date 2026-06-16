import { Box, Button, Container, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router";
import { brand } from "../../../theme/premiumTheme";
import { darkEyebrowSx, onDark } from "../../../theme/darkSurface";

type CtaSectionProps = {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonTo?: string;
};

export function CtaSection({ title, subtitle, buttonText, buttonTo = "/contact" }: CtaSectionProps) {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 12 },
        bgcolor: brand.charcoal900,
        color: brand.ivory,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at 50% 0%, ${brand.gold}20 0%, transparent 60%)`,
        }}
      />
      <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, bgcolor: brand.gold, opacity: 0.5 }} />
      <Container maxWidth="md" sx={{ textAlign: "center", position: "relative" }}>
        <Typography variant="subtitle2" sx={{ ...darkEyebrowSx, mb: 2, display: "block" }}>
          Partner With Us
        </Typography>
        <Typography variant="h3" sx={{ mb: 2.5, fontSize: { xs: "1.75rem", md: "2.375rem" }, fontWeight: 400, color: onDark.primary }}>
          {title}
        </Typography>
        <Typography sx={{ color: onDark.muted, mb: 5, lineHeight: 1.8, maxWidth: 560, mx: "auto" }}>
          {subtitle}
        </Typography>
        <Button component={RouterLink} to={buttonTo} variant="contained" color="secondary" size="large">
          {buttonText}
        </Button>
      </Container>
    </Box>
  );
}

import { Link as RouterLink } from "react-router";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { companyProfile } from "../../data/company";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { brand } from "../../../theme/premiumTheme";
import { heroGoldBottomLine, heroGoldTopLine } from "../../../theme/heroScrim";
import { darkEyebrowSx, onDark } from "../../../theme/darkSurface";

const HOME_HERO_IMAGE =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

export function HomeHero() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        minHeight: { xs: "auto", md: "92vh" },
        bgcolor: brand.charcoal900,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          position: "relative",
          order: { xs: 2, md: 1 },
          py: { xs: 8, md: 10 },
          px: { xs: 3, sm: 4, md: 6, lg: 8 },
          borderTop: { xs: `1px solid ${brand.gold}33`, md: "none" },
        }}
      >
        <Box sx={{ ...heroGoldTopLine, display: { xs: "none", md: "block" } }} />
        <Container maxWidth={false} disableGutters sx={{ maxWidth: 560 }}>
          <Typography variant="subtitle2" sx={{ ...darkEyebrowSx, mb: 2, display: "block", textShadow: "none" }}>
            Est. {companyProfile.founded} · {companyProfile.headquarters}
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", sm: "3.25rem", lg: "4.25rem" },
              fontWeight: 400,
              lineHeight: 1.06,
              mb: 2,
              color: brand.ivory,
            }}
          >
            Vathy Frontier
            <Box component="span" sx={{ display: "block", fontStyle: "italic", fontWeight: 500 }}>
              Holdings
            </Box>
          </Typography>
          <Typography
            sx={{
              fontFamily: "Cinzel, serif",
              color: brand.goldLight,
              fontSize: { xs: "1.1rem", md: "1.25rem" },
              mb: 3,
              letterSpacing: "0.04em",
              fontStyle: "italic",
            }}
          >
            {companyProfile.tagline}
          </Typography>
          <Box sx={{ width: 96, height: 1, bgcolor: brand.gold, mb: 3 }} />
          <Typography sx={{ color: onDark.muted, fontSize: { xs: "1rem", md: "1.125rem" }, mb: 5, lineHeight: 1.8 }}>
            {companyProfile.motto}
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Button component={RouterLink} to="/services" variant="contained" color="secondary" size="large" endIcon={<ArrowForwardIcon />}>
              Explore Our Portfolio
            </Button>
            <Button
              component={RouterLink}
              to="/contact"
              variant="outlined"
              size="large"
              sx={{ color: brand.ivory, borderColor: "rgba(197,165,114,0.5)", "&:hover": { borderColor: brand.gold, bgcolor: "rgba(197,165,114,0.1)" } }}
            >
              Get in Touch
            </Button>
          </Stack>
        </Container>
      </Box>

      <Box sx={{ position: "relative", minHeight: { xs: "42vh", sm: "48vh", md: "auto" }, order: { xs: 1, md: 2 }, overflow: "hidden" }}>
        <Box sx={heroGoldTopLine} />
        <Box sx={heroGoldBottomLine} />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: { xs: "none", md: `linear-gradient(90deg, ${brand.charcoal900} 0%, transparent 16%)` },
            zIndex: 1,
            pointerEvents: "none",
          }}
        />
        <Box sx={{ position: "absolute", inset: 0 }}>
          <ImageWithFallback src={HOME_HERO_IMAGE} alt="Global commerce and enterprise" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </Box>
      </Box>
    </Box>
  );
}

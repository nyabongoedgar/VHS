import { Link as RouterLink } from "react-router";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Box, Button, Container, Typography } from "@mui/material";
import { brand, surfaces } from "../../theme/premiumTheme";

export function NotFound() {
  return (
    <Box sx={{ minHeight: "70vh", display: "flex", alignItems: "center", bgcolor: surfaces.muted }}>
      <Container maxWidth="sm" sx={{ textAlign: "center" }}>
        <Typography sx={{ fontSize: "6rem", fontWeight: 700, color: brand.gold, lineHeight: 1, mb: 2 }}>
          404
        </Typography>
        <Typography variant="h4" sx={{ mb: 2, fontFamily: "Cinzel, serif" }}>
          Page Not Found
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 4, lineHeight: 1.7 }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </Typography>
        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2, justifyContent: "center" }}>
          <Button component={RouterLink} to="/" variant="contained" color="secondary" startIcon={<HomeOutlinedIcon />}>
            Go Home
          </Button>
          <Button variant="outlined" startIcon={<ArrowBackIcon />} onClick={() => window.history.back()}>
            Go Back
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

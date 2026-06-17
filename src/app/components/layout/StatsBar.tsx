import { Box, Container, Grid, Typography } from "@mui/material";
import { companyStats } from "../../data/company";
import { brand } from "../../../theme/premiumTheme";
import { darkEyebrowSx, onDark } from "../../../theme/darkSurface";

export function StatsBar() {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        background: `linear-gradient(90deg, ${brand.espresso800} 0%, ${brand.espresso900} 50%, ${brand.espresso800} 100%)`,
        borderTop: `1px solid ${brand.gold}40`,
        borderBottom: `1px solid ${brand.gold}40`,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={0} alignItems="center">
          {companyStats.map((stat, i) => (
            <Grid key={stat.label} size={{ xs: 6, md: 3 }}>
              <Box
                sx={{
                  textAlign: "center",
                  py: { xs: 3, md: 0 },
                  borderRight: { md: i < companyStats.length - 1 ? `1px solid ${brand.gold}33` : "none" },
                }}
              >
                <Typography sx={{ fontSize: { xs: "2.25rem", md: "2.75rem" }, fontWeight: 300, color: onDark.stat, mb: 0.5, fontFamily: "Cinzel, serif" }}>
                  {stat.value}
                </Typography>
                <Typography variant="subtitle2" sx={{ ...darkEyebrowSx, fontSize: "0.625rem", letterSpacing: "0.14em", textShadow: "none", color: onDark.subtle, px: 1 }}>
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

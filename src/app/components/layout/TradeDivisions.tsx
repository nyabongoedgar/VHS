import { Link as RouterLink } from "react-router";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import type { TradeDivision } from "../../data/sectors";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { SectionHeading } from "./SectionHeading";
import { brand, surfaces } from "../../../theme/premiumTheme";

type TradeDivisionsProps = {
  divisions: TradeDivision[];
};

export function TradeDivisions({ divisions }: TradeDivisionsProps) {
  return (
    <Box sx={{ py: { xs: 10, md: 14 }, bgcolor: surfaces.light }}>
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="Global Trade"
          title="Trade Divisions"
          subtitle="Four operating divisions under Global Trade & Commodities — each with dedicated expertise and international standards"
        />
        <Stack spacing={12}>
          {divisions.map((division, index) => (
            <Grid key={division.title} container spacing={6} alignItems="center" direction={index % 2 === 1 ? "row-reverse" : "row"}>
              <Grid size={{ xs: 12, lg: 6 }}>
                <Box sx={{ aspectRatio: "16/10", overflow: "hidden", bgcolor: brand.creamDark, position: "relative" }}>
                  <ImageWithFallback src={division.image} alt={division.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <Box sx={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, bgcolor: brand.gold }} />
                </Box>
              </Grid>
              <Grid size={{ xs: 12, lg: 6 }}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: brand.goldDark,
                    mb: 1.5,
                    display: "block",
                    fontSize: "0.6875rem",
                    letterSpacing: "0.18em",
                    fontWeight: 600,
                    textTransform: "uppercase",
                  }}
                >
                  Division {String(index + 1).padStart(2, "0")}
                </Typography>
                <Typography variant="h4" sx={{ mb: 2, fontFamily: "Cinzel, serif", fontWeight: 500 }}>
                  {division.title}
                </Typography>
                <Typography sx={{ color: "text.secondary", lineHeight: 1.85, mb: 3 }}>
                  {division.summary}
                </Typography>
                <Stack spacing={1.5} sx={{ mb: 4 }}>
                  {division.features.map((feature) => (
                    <Stack key={feature} direction="row" spacing={1.5} alignItems="flex-start">
                      <CheckCircleOutlineIcon sx={{ color: brand.gold, fontSize: 18, mt: 0.35 }} />
                      <Typography variant="body2" color="text.secondary">
                        {feature}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
                <Button component={RouterLink} to={division.link} variant="contained" color="secondary">
                  {division.link === "/coffee-supply" ? "View Details" : "Get a Quote"}
                </Button>
              </Grid>
            </Grid>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

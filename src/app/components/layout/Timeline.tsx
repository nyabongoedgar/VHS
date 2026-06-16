import { Box, Container, Grid, Typography } from "@mui/material";
import { milestones } from "../../data/timeline";
import { SectionHeading } from "./SectionHeading";
import { brand, surfaces } from "../../../theme/premiumTheme";

export function Timeline() {
  return (
    <Box sx={{ py: { xs: 10, md: 12 }, bgcolor: surfaces.muted }}>
      <Container maxWidth="lg">
        <SectionHeading eyebrow="Our Journey" title="Company Timeline" subtitle="Building a multi-sector enterprise — from foundation to growth" />
        <Grid container spacing={0}>
          {milestones.map((item, index) => (
            <Grid key={`${item.year}-${item.title}`} size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  display: "flex",
                  gap: 3,
                  p: { xs: 3, md: 4 },
                  borderLeft: `3px solid ${brand.gold}`,
                  borderBottom: index < milestones.length - 1 ? `1px solid ${brand.gold}22` : "none",
                  bgcolor: brand.paper,
                  height: "100%",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Cinzel, serif",
                    fontSize: "1.5rem",
                    color: brand.goldDark,
                    minWidth: 72,
                    lineHeight: 1.2,
                  }}
                >
                  {item.year}
                </Typography>
                <Box>
                  <Typography variant="h6" sx={{ mb: 1, fontFamily: "Cinzel, serif", fontWeight: 500, color: brand.ink }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: brand.slate, lineHeight: 1.8 }}>
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

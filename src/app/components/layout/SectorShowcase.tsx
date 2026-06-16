import { Link as RouterLink } from "react-router";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Box, Button, Chip, Grid, Stack, Typography } from "@mui/material";
import type { HoldingSector } from "../../data/sectors";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { brand } from "../../../theme/premiumTheme";

type SectorShowcaseProps = {
  sector: HoldingSector;
  index: number;
  showFullDescription?: boolean;
};

export function SectorShowcase({ sector, index, showFullDescription = true }: SectorShowcaseProps) {
  const reverse = index % 2 === 1;

  return (
    <Grid
      id={sector.id}
      container
      spacing={{ xs: 4, md: 6 }}
      alignItems="center"
      direction={reverse ? "row-reverse" : "row"}
      sx={{ mb: { xs: 8, md: 12 } }}
    >
      <Grid size={{ xs: 12, lg: 6 }}>
        <Box sx={{ aspectRatio: "16/10", overflow: "hidden", bgcolor: brand.creamDark, position: "relative" }}>
          <ImageWithFallback src={sector.image} alt={sector.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
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
          Sector {String(index + 1).padStart(2, "0")}
        </Typography>
        <Typography variant="h4" sx={{ mb: 2, fontFamily: "Cinzel, serif", fontWeight: 500, color: brand.ink }}>
          {sector.title}
        </Typography>
        <Typography sx={{ color: brand.slate, lineHeight: 1.85, mb: 3, fontSize: "1.0625rem" }}>
          {showFullDescription ? sector.description : sector.summary}
        </Typography>
        <Stack spacing={1.25} sx={{ mb: 3 }}>
          {sector.highlights.map((item) => (
            <Stack key={item} direction="row" spacing={1.5} alignItems="flex-start">
              <CheckCircleOutlineIcon sx={{ color: brand.gold, fontSize: 18, mt: 0.35 }} />
              <Typography variant="body2" sx={{ color: brand.slate, lineHeight: 1.7 }}>
                {item}
              </Typography>
            </Stack>
          ))}
        </Stack>
        {sector.divisions && (
          <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 3 }}>
            {sector.divisions.map((d) => (
              <Chip
                key={d.title}
                label={d.title}
                variant="outlined"
                sx={{ borderColor: brand.gold, color: brand.ink, borderRadius: 0, fontSize: "0.75rem" }}
                {...(d.link.startsWith("/")
                  ? { component: RouterLink, to: d.link, clickable: true as const }
                  : {})}
              />
            ))}
          </Stack>
        )}
        <Button component={RouterLink} to={`/services#${sector.id}`} endIcon={<ArrowForwardIcon />} sx={{ color: brand.goldDark, letterSpacing: "0.06em" }}>
          Learn More
        </Button>
      </Grid>
    </Grid>
  );
}

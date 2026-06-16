import { Link as RouterLink } from "react-router";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PublicIcon from "@mui/icons-material/Public";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { PageHero } from "./layout/PageHero";
import { SectionHeading } from "./layout/SectionHeading";
import { CtaSection } from "./layout/CtaSection";
import { brand, surfaces } from "../../theme/premiumTheme";
import { darkHeroLinkSx, onDark } from "../../theme/darkSurface";

const coffeeTypes = [
  {
    name: "Arabica",
    description: "Premium quality Arabica beans from high-altitude regions of Uganda",
    characteristics: ["Smooth flavor", "Low acidity", "Complex aroma", "Specialty grade"],
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e",
  },
  {
    name: "Robusta",
    description: "Bold, strong Robusta beans known for their rich body and crema",
    characteristics: ["Strong body", "High caffeine", "Chocolatey notes", "Excellent crema"],
    image: "https://images.unsplash.com/photo-1675306408031-a9aad9f23308",
  },
];

const exportProcess = [
  { step: "01", title: "Farm Selection", description: "We partner with certified farms in Uganda's premier coffee-growing regions" },
  { step: "02", title: "Quality Grading", description: "Each batch undergoes rigorous quality control and grading by experts" },
  { step: "03", title: "Processing", description: "Professional processing, drying, and hulling to preserve bean quality" },
  { step: "04", title: "Export Documentation", description: "Complete handling of all export paperwork and certifications" },
  { step: "05", title: "Logistics", description: "Efficient shipping to European ports including Napoli, Italy" },
  { step: "06", title: "Delivery", description: "Timely delivery with full tracking and insurance coverage" },
];

const certifications = ["Fair Trade Certified", "Organic Certified", "Rainforest Alliance", "UTZ Certified", "ISO 9001 Quality Management"];

const regions = [
  { name: "Mount Elgon", specialty: "High-altitude Arabica" },
  { name: "Rwenzori Mountains", specialty: "Premium Arabica" },
  { name: "Central Region", specialty: "Quality Robusta" },
  { name: "Western Uganda", specialty: "Specialty Arabica" },
];

const whyChoose = [
  { icon: <PublicIcon />, title: "Ideal Growing Conditions", text: "Perfect altitude, rainfall, and soil create exceptional coffee beans" },
  { icon: <WorkspacePremiumOutlinedIcon />, title: "Quality Certified", text: "Multiple international certifications ensuring top standards" },
  { icon: <ShieldOutlinedIcon />, title: "Sustainable Sourcing", text: "Ethical partnerships with local farmers and communities" },
  { icon: <LocalShippingOutlinedIcon />, title: "Reliable Export", text: "Streamlined logistics to European markets including Napoli" },
];

export function CoffeeSupply() {
  return (
    <Box>
      <PageHero
        title="Coffee Supply & Export"
        subtitle="One of our four global trade divisions — specialty beans sourced from certified Ugandan farms and exported to international markets"
        image="https://images.unsplash.com/photo-1513530176992-0cf39c4cbed4"
        align="left"
      >
        <Button
          component={RouterLink}
          to="/services"
          startIcon={<ArrowBackIcon />}
          sx={{ mt: 3, ...darkHeroLinkSx }}
        >
          All Trade Lines
        </Button>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={3} sx={{ mt: 3, color: onDark.muted }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <LocationOnOutlinedIcon fontSize="small" />
            <Typography variant="body2">Uganda → Global Markets</Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <WorkspacePremiumOutlinedIcon fontSize="small" />
            <Typography variant="body2">Specialty Grade</Typography>
          </Stack>
        </Stack>
      </PageHero>

      <Box sx={{ py: { xs: 10, md: 12 }, bgcolor: surfaces.light }}>
        <Container maxWidth="lg">
          <SectionHeading eyebrow="Trade Division" title="Why Ugandan Coffee" subtitle="Uganda is among the world's leading coffee producers, renowned for quality and unique flavor profiles" />
          <Grid container spacing={3}>
            {whyChoose.map((item) => (
              <Grid key={item.title} size={{ xs: 12, sm: 6, lg: 3 }}>
                <Box sx={{ textAlign: "center", p: 2 }}>
                  <Box sx={{ width: 64, height: 64, border: `1px solid ${brand.gold}`, color: brand.goldDark, display: "inline-flex", alignItems: "center", justifyContent: "center", mb: 2, bgcolor: `${brand.gold}0a` }}>
                    {item.icon}
                  </Box>
                  <Typography variant="h6" sx={{ mb: 1, fontFamily: "Cinzel, serif", fontWeight: 500 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                    {item.text}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 10, md: 12 }, bgcolor: surfaces.muted }}>
        <Container maxWidth="lg">
          <SectionHeading title="Coffee Varieties" />
          <Grid container spacing={3}>
            {coffeeTypes.map((coffee) => (
              <Grid key={coffee.name} size={{ xs: 12, lg: 6 }}>
                <Card sx={{ overflow: "hidden", height: "100%" }}>
                  <Box sx={{ aspectRatio: "16/10", bgcolor: brand.creamDark }}>
                    <ImageWithFallback src={coffee.image} alt={coffee.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </Box>
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h5" sx={{ mb: 1.5, fontFamily: "Cinzel, serif", fontWeight: 500 }}>
                      {coffee.name}
                    </Typography>
                    <Typography color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
                      {coffee.description}
                    </Typography>
                    <Stack spacing={1}>
                      {coffee.characteristics.map((char) => (
                        <Stack key={char} direction="row" spacing={1} alignItems="center">
                          <CheckCircleOutlineIcon sx={{ color: brand.gold, fontSize: 18 }} />
                          <Typography variant="body2">{char}</Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 10, md: 12 }, bgcolor: surfaces.light }}>
        <Container maxWidth="lg">
          <SectionHeading title="Export Process" subtitle="From farm to your facility — complete transparency at every step" />
          <Grid container spacing={3}>
            {exportProcess.map((item) => (
              <Grid key={item.step} size={{ xs: 12, sm: 6, lg: 4 }}>
                <Card sx={{ height: "100%" }}>
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="caption" sx={{ color: brand.goldDark, letterSpacing: "0.2em", fontWeight: 600 }}>
                      {item.step}
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 1, mt: 1, fontFamily: "Cinzel, serif", fontWeight: 500 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 10, md: 12 }, bgcolor: surfaces.muted }}>
        <Container maxWidth="lg">
          <SectionHeading title="Growing Regions" subtitle="We source from Uganda's premier coffee-producing areas" />
          <Grid container spacing={3}>
            {regions.map((region) => (
              <Grid key={region.name} size={{ xs: 12, sm: 6, lg: 3 }}>
                <Card sx={{ textAlign: "center" }}>
                  <CardContent sx={{ p: 4 }}>
                    <LocationOnOutlinedIcon sx={{ color: brand.gold, mb: 1 }} />
                    <Typography variant="h6" sx={{ mb: 0.5, fontFamily: "Cinzel, serif", fontWeight: 500 }}>
                      {region.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {region.specialty}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 10, md: 12 }, bgcolor: surfaces.light }}>
        <Container maxWidth="lg">
          <SectionHeading title="Certifications & Standards" />
          <Stack direction="row" flexWrap="wrap" gap={1.5} justifyContent="center">
            {certifications.map((cert) => (
              <Chip key={cert} label={cert} variant="outlined" sx={{ borderColor: brand.gold, fontWeight: 500, px: 1, borderRadius: 0 }} />
            ))}
          </Stack>
        </Container>
      </Box>

      <CtaSection
        title="Discuss Coffee Supply"
        subtitle="Contact our trade team to discuss volumes, pricing, and delivery to your market."
        buttonText="Request a Quote"
      />
    </Box>
  );
}

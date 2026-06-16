import { Link as RouterLink } from "react-router";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import RequestQuoteOutlinedIcon from "@mui/icons-material/RequestQuoteOutlined";
import { Box, Button, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import { companyProfile } from "../data/company";
import { globalTradeSector, holdingSectors } from "../data/sectors";
import { PageHero } from "./layout/PageHero";
import { SectorShowcase } from "./layout/SectorShowcase";
import { TradeDivisions } from "./layout/TradeDivisions";
import { SectionHeading } from "./layout/SectionHeading";
import { brand, surfaces } from "../../theme/premiumTheme";
import { onDark } from "../../theme/darkSurface";

const process = [
  { icon: <RequestQuoteOutlinedIcon />, title: "Consultation", description: "We discuss your requirements and provide detailed quotes" },
  { icon: <Inventory2OutlinedIcon />, title: "Sourcing", description: "We source the highest quality products from trusted suppliers" },
  { icon: <CheckCircleOutlineIcon />, title: "Quality Check", description: "Rigorous quality control and documentation" },
  { icon: <LocalShippingOutlinedIcon />, title: "Delivery", description: "Secure logistics and timely delivery to your destination" },
];

export function Services() {
  return (
    <Box>
      <PageHero
        title="Our Portfolio"
        subtitle={`${companyProfile.shortName} — nine sectors, one standard of excellence`}
      />

      <Box sx={{ py: { xs: 10, md: 14 }, bgcolor: surfaces.light }}>
        <Container maxWidth="lg">
          <SectionHeading
            eyebrow="Sectors"
            title="Portfolio Overview"
            subtitle="Each sector operates with dedicated expertise — select a division below to learn more"
          />
          {holdingSectors.map((sector, index) => (
            <SectorShowcase key={sector.id} sector={sector} index={index} />
          ))}
        </Container>
      </Box>

      {globalTradeSector.divisions && <TradeDivisions divisions={globalTradeSector.divisions} />}

      <Box sx={{ py: { xs: 10, md: 12 }, bgcolor: surfaces.muted }}>
        <Container maxWidth="lg">
          <SectionHeading title="How We Work" subtitle="Our streamlined process ensures quality and reliability at every step" />
          <Grid container spacing={3}>
            {process.map((step, i) => (
              <Grid key={step.title} size={{ xs: 12, sm: 6, lg: 3 }}>
                <Card sx={{ height: "100%", textAlign: "center" }}>
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="caption" sx={{ color: brand.goldDark, letterSpacing: "0.2em", fontWeight: 600 }}>
                      STEP {String(i + 1).padStart(2, "0")}
                    </Typography>
                    <Box sx={{ width: 56, height: 56, border: `1px solid ${brand.gold}`, color: brand.goldDark, display: "inline-flex", alignItems: "center", justifyContent: "center", my: 2, bgcolor: `${brand.gold}0a` }}>
                      {step.icon}
                    </Box>
                    <Typography variant="h6" sx={{ mb: 1, fontFamily: "Cinzel, serif", fontWeight: 500 }}>
                      {step.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                      {step.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 10, md: 12 }, bgcolor: brand.charcoal900, color: brand.ivory, textAlign: "center", position: "relative" }}>
        <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, bgcolor: brand.gold, opacity: 0.5 }} />
        <Container maxWidth="md">
          <HeadsetMicOutlinedIcon sx={{ fontSize: 44, color: onDark.stat, mb: 2 }} />
          <Typography variant="h4" sx={{ mb: 2, fontFamily: "Cinzel, serif", fontWeight: 500, color: onDark.primary }}>
            Need a Custom Solution?
          </Typography>
          <Typography sx={{ color: onDark.muted, mb: 4, lineHeight: 1.8 }}>
            Our team is ready to discuss your requirements across any of our nine portfolio sectors
          </Typography>
          <Button component={RouterLink} to="/contact" variant="contained" color="secondary" size="large">
            Contact Us
          </Button>
        </Container>
      </Box>
    </Box>
  );
}

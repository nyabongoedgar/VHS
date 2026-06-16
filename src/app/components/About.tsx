import { Link as RouterLink } from "react-router";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import GpsFixedOutlinedIcon from "@mui/icons-material/GpsFixedOutlined";
import { Box, Button, Card, CardContent, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import { companyProfile, coreValues } from "../data/company";
import { PageHero } from "./layout/PageHero";
import { SectionHeading } from "./layout/SectionHeading";
import { Timeline } from "./layout/Timeline";
import { CtaSection } from "./layout/CtaSection";
import { brand, surfaces } from "../../theme/premiumTheme";

const valueIcons = [
  <CheckCircleOutlineIcon />,
  <GpsFixedOutlinedIcon />,
  <GroupsOutlinedIcon />,
  <EmojiObjectsOutlinedIcon />,
];

const differentiators = [
  { title: "Multi-Sector Structure", text: "One holding company, nine portfolio sectors — from global trade and commodities to hospitality, real estate, education, and community impact." },
  { title: "Local Knowledge, Global Standards", text: "Deep understanding of Uganda's markets combined with international best practices in trade, logistics, and enterprise management." },
  { title: "Evidence Over Claims", text: "We present our portfolio clearly — named divisions, defined sectors, and a transparent timeline — so partners know exactly what we do." },
  { title: "Built for Long-Term Partnerships", text: "We're not just about transactions. We build lasting relationships, understanding that your success is our success." },
];

export function About() {
  return (
    <Box>
      <PageHero title="About Us" subtitle={companyProfile.tagline} />

      <Box sx={{ py: { xs: 10, md: 12 }, bgcolor: surfaces.light }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="flex-start">
            <Grid size={{ xs: 12, lg: 7 }}>
              <SectionHeading align="left" eyebrow="Our Identity" title="Who We Are" subtitle="" />
              <Typography paragraph sx={{ color: "text.secondary", lineHeight: 1.85 }}>
                {companyProfile.intro}
              </Typography>
              <Typography paragraph sx={{ color: "text.secondary", lineHeight: 1.85 }}>
                {companyProfile.story}
              </Typography>
              <Typography sx={{ color: "text.secondary", lineHeight: 1.85 }}>
                {companyProfile.motto}
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, lg: 5 }}>
              <Paper elevation={0} sx={{ p: { xs: 4, md: 5 }, bgcolor: surfaces.deep, border: `1px solid ${brand.gold}40` }}>
                <Typography variant="subtitle2" sx={{ color: brand.goldDark, mb: 1.5 }}>
                  Purpose
                </Typography>
                <Typography variant="h5" sx={{ mb: 2, fontFamily: "Cinzel, serif", fontWeight: 500 }}>
                  Our Mission
                </Typography>
                <Typography sx={{ color: "text.secondary", lineHeight: 1.85, mb: 5 }}>
                  {companyProfile.mission}
                </Typography>
                <Typography variant="h5" sx={{ mb: 2, fontFamily: "Cinzel, serif", fontWeight: 500 }}>
                  Our Vision
                </Typography>
                <Typography sx={{ color: "text.secondary", lineHeight: 1.85 }}>
                  {companyProfile.vision}
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Timeline />

      <Box sx={{ py: { xs: 10, md: 12 }, bgcolor: surfaces.muted }}>
        <Container maxWidth="lg">
          <SectionHeading title="Our Core Values" subtitle="The principles that guide every decision we make" />
          <Grid container spacing={3}>
            {coreValues.map((value, i) => (
              <Grid key={value.title} size={{ xs: 12, sm: 6, lg: 3 }}>
                <Card sx={{ height: "100%" }}>
                  <CardContent sx={{ textAlign: "center", p: 4 }}>
                    <Box sx={{ width: 64, height: 64, border: `1px solid ${brand.gold}`, color: brand.goldDark, display: "inline-flex", alignItems: "center", justifyContent: "center", mb: 2.5, bgcolor: `${brand.gold}0a` }}>
                      {valueIcons[i]}
                    </Box>
                    <Typography variant="h6" sx={{ mb: 1, fontFamily: "Cinzel, serif", fontWeight: 500 }}>
                      {value.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 10, md: 12 }, bgcolor: surfaces.light }}>
        <Container maxWidth="md">
          <SectionHeading title="What Makes Us Different" />
          <Stack spacing={3}>
            {differentiators.map((item) => (
              <Paper key={item.title} elevation={0} sx={{ p: { xs: 3, md: 4 }, pl: { xs: 3, md: 5 }, borderLeft: `3px solid ${brand.gold}`, bgcolor: brand.paper }}>
                <Typography variant="h6" sx={{ mb: 1, fontFamily: "Cinzel, serif", fontWeight: 500 }}>
                  {item.title}
                </Typography>
                <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  {item.text}
                </Typography>
              </Paper>
            ))}
          </Stack>
          <Box sx={{ textAlign: "center", mt: 6 }}>
            <Button component={RouterLink} to="/services" variant="contained" color="secondary">
              Explore Our Portfolio
            </Button>
          </Box>
        </Container>
      </Box>

      <CtaSection title="Ready to Partner With Us?" subtitle="Across trade, hospitality, real estate, or any of our sectors — we welcome the conversation." buttonText="Contact Us Today" />
    </Box>
  );
}

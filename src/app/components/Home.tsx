import { Link as RouterLink } from "react-router";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PublicIcon from "@mui/icons-material/Public";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import { Box, Button, Container, Divider, Grid, Paper, Stack, Typography } from "@mui/material";
import { companyProfile, coreValues } from "../data/company";
import { featuredSectorIds, getSectorById, holdingSectors } from "../data/sectors";
import { HomeHero } from "./layout/HomeHero";
import { SectionHeading } from "./layout/SectionHeading";
import { SectorCard } from "./layout/SectorCard";
import { SectorShowcase } from "./layout/SectorShowcase";
import { StatsBar } from "./layout/StatsBar";
import { Timeline } from "./layout/Timeline";
import { CtaSection } from "./layout/CtaSection";
import { brand, surfaces } from "../../theme/premiumTheme";

const featuredSectors = featuredSectorIds.map((id) => getSectorById(id)!);

export function Home() {
  return (
    <Box>
      <HomeHero />
      <StatsBar />

      <Box sx={{ py: { xs: 10, md: 14 }, bgcolor: surfaces.light }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid size={{ xs: 12, lg: 6 }}>
              <SectionHeading align="left" eyebrow="Who We Are" title="A Multi-Sector Holding Company" subtitle="" />
              <Typography sx={{ color: "text.secondary", lineHeight: 1.85, mb: 2.5 }}>
                {companyProfile.intro}
              </Typography>
              <Typography sx={{ color: "text.secondary", lineHeight: 1.85, mb: 4 }}>
                {companyProfile.story}
              </Typography>
              <Button component={RouterLink} to="/about" endIcon={<ArrowForwardIcon />} sx={{ color: brand.goldDark, letterSpacing: "0.08em" }}>
                Our Story
              </Button>
            </Grid>
            <Grid size={{ xs: 12, lg: 6 }}>
              <Paper elevation={0} sx={{ p: { xs: 4, md: 5 }, bgcolor: surfaces.deep, border: `1px solid ${brand.gold}40` }}>
                <Typography variant="subtitle2" sx={{ color: brand.goldDark, mb: 1.5 }}>
                  Purpose
                </Typography>
                <Typography variant="h6" sx={{ mb: 1.5, fontFamily: "Cinzel, serif", fontWeight: 500, color: brand.ink }}>
                  Mission
                </Typography>
                <Typography sx={{ color: brand.slate, lineHeight: 1.85, mb: 4, fontSize: "0.9375rem" }}>
                  {companyProfile.mission}
                </Typography>
                <Typography variant="h6" sx={{ mb: 1.5, fontFamily: "Cinzel, serif", fontWeight: 500, color: brand.ink }}>
                  Vision
                </Typography>
                <Typography sx={{ color: brand.slate, lineHeight: 1.85, fontSize: "0.9375rem" }}>
                  {companyProfile.vision}
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Timeline />

      <Box sx={{ py: { xs: 10, md: 14 }, bgcolor: surfaces.light }}>
        <Container maxWidth="lg">
          <SectionHeading
            eyebrow="Our Portfolio"
            title="Featured Sectors"
            subtitle="A closer look at the divisions driving our group — from global trade to hospitality, real estate, and finance."
          />
          {featuredSectors.map((sector, index) => (
            <SectorShowcase key={sector.id} sector={sector} index={index} showFullDescription={false} />
          ))}
        </Container>
      </Box>

      <Box sx={{ py: { xs: 10, md: 12 }, bgcolor: surfaces.muted }}>
        <Container maxWidth="lg">
          <SectionHeading eyebrow="Full Portfolio" title="All Sectors" subtitle="Nine portfolio sectors united by a single commitment to excellence" />
          <Grid container spacing={3}>
            {holdingSectors.map((sector, index) => (
              <Grid key={sector.id} size={{ xs: 12, sm: 6, lg: 4 }}>
                <SectorCard index={index} title={sector.title} summary={sector.summary} icon={sector.icon} />
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: "center", mt: 5 }}>
            <Button component={RouterLink} to="/services" variant="contained" color="secondary" endIcon={<ArrowForwardIcon />}>
              View Full Portfolio
            </Button>
          </Box>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 10, md: 14 }, bgcolor: surfaces.light }}>
        <Container maxWidth="lg">
          <SectionHeading eyebrow="Our Culture" title="Core Values" />
          <Grid container spacing={3}>
            {coreValues.map((value) => (
              <Grid key={value.title} size={{ xs: 12, sm: 6, lg: 3 }}>
                <Paper elevation={0} sx={{ p: 3.5, height: "100%", bgcolor: brand.paper, border: `1px solid ${brand.gold}33` }}>
                  <Typography variant="h6" sx={{ mb: 1.5, fontFamily: "Cinzel, serif", fontWeight: 500 }}>
                    {value.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: brand.slate, lineHeight: 1.75 }}>
                    {value.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 10, md: 14 }, bgcolor: surfaces.muted }}>
        <Container maxWidth="lg">
          <SectionHeading eyebrow="Our Commitment" title="Why Vathy Frontier" />
          <Grid container spacing={4}>
            {[
              { icon: <PublicIcon sx={{ fontSize: 28 }} />, title: "Global Reach", text: "Connecting Uganda's resources and enterprises to international markets." },
              { icon: <ShieldOutlinedIcon sx={{ fontSize: 28 }} />, title: "Integrity First", text: "Transparent operations and ethical practices across every sector we operate in." },
              { icon: <WorkspacePremiumOutlinedIcon sx={{ fontSize: 28 }} />, title: "Long-Term Value", text: "Building partnerships and investments designed to last, not quick transactions." },
            ].map((item, i) => (
              <Grid key={item.title} size={{ xs: 12, md: 4 }}>
                <Box sx={{ textAlign: "center", px: 3, position: "relative" }}>
                  {i > 0 && (
                    <Divider orientation="vertical" sx={{ position: "absolute", left: 0, top: "10%", height: "80%", borderColor: `${brand.gold}44`, display: { xs: "none", md: "block" } }} />
                  )}
                  <Box sx={{ width: 72, height: 72, border: `1px solid ${brand.gold}`, color: brand.goldDark, display: "inline-flex", alignItems: "center", justifyContent: "center", mb: 3, bgcolor: `${brand.gold}0a` }}>
                    {item.icon}
                  </Box>
                  <Typography variant="h6" sx={{ mb: 1.5, fontFamily: "Cinzel, serif", fontWeight: 500 }}>
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    {item.text}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <CtaSection
        title="Ready to Partner With Us?"
        subtitle="Across trade, hospitality, real estate, finance, or any of our nine portfolio sectors — our team welcomes the conversation."
        buttonText="Contact Us Today"
      />
    </Box>
  );
}

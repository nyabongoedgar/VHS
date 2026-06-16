import { useState } from "react";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import SendIcon from "@mui/icons-material/Send";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { PageHero } from "./layout/PageHero";
import { SectionHeading } from "./layout/SectionHeading";
import { holdingSectors } from "../data/sectors";
import { brand, surfaces } from "../../theme/premiumTheme";

const interestOptions = [
  { value: "general", label: "General Inquiry" },
  ...holdingSectors.map((s) => ({ value: s.id, label: s.title })),
  { value: "other", label: "Other" },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    interest: "general",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("https://formsubmit.co/ajax/2b90ad00d41c5f4d4e6d59d77f4b7839", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...formData,
          _subject: `New contact inquiry from ${formData.name}`,
          _replyto: formData.email,
          _template: "table",
        }),
      });
      const data = await response.json();
      if (!response.ok || !data.success) throw new Error("Failed to send message");
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", company: "", interest: "general", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      setError("Something went wrong. Please try again or email us directly at nyabongoedgar@gmail.com.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: <EmailOutlinedIcon />, title: "Email", details: "info@vathyfrontier.com", subdetails: "sales@vathyfrontier.com" },
    { icon: <PhoneOutlinedIcon />, title: "Phone", details: "+256702667337", subdetails: "Available 24/7" },
    { icon: <LocationOnOutlinedIcon />, title: "Location", details: "Kampala, Uganda", subdetails: "East Africa" },
    { icon: <AccessTimeOutlinedIcon />, title: "Business Hours", details: "Mon - Fri: 8AM - 6PM", subdetails: "Sat: 9AM - 1PM EAT" },
  ];

  return (
    <Box>
      <PageHero title="Contact Us" subtitle="Get in touch with our team to discuss your requirements" />

      <Box sx={{ py: 6, bgcolor: surfaces.light }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {contactInfo.map((info) => (
              <Grid key={info.title} size={{ xs: 12, sm: 6, lg: 3 }}>
                <Card sx={{ height: "100%", textAlign: "center" }}>
                  <CardContent>
                    <Box sx={{ width: 48, height: 48, borderRadius: "50%", bgcolor: `${brand.gold}22`, color: brand.goldDark, display: "inline-flex", alignItems: "center", justifyContent: "center", mb: 2 }}>
                      {info.icon}
                    </Box>
                    <Typography variant="h6" sx={{ mb: 1 }}>
                      {info.title}
                    </Typography>
                    <Typography variant="body2">{info.details}</Typography>
                    <Typography variant="caption" color="text.secondary">
                      {info.subdetails}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: surfaces.muted }}>
        <Container maxWidth="md">
          <Paper elevation={0} sx={{ p: { xs: 3, md: 5 }, border: `1px solid ${brand.gold}40`, bgcolor: brand.paper }}>
            <SectionHeading title="Send Us a Message" subtitle="Fill out the form below and our team will get back to you within 24 hours" />
            {submitted && <Alert severity="success" sx={{ mb: 3 }}>Thank you for your message! We&apos;ll get back to you soon.</Alert>}
            {error && <Alert severity="error" sx={{ mb: 3 }}>{error}</Alert>}
            <Box component="form" onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField fullWidth required label="Full Name" name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField fullWidth required type="email" label="Email Address" name="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField fullWidth label="Phone Number" name="phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField fullWidth label="Company Name" name="company" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <FormControl fullWidth required>
                    <InputLabel>Area of Interest</InputLabel>
                    <Select label="Area of Interest" name="interest" value={formData.interest} onChange={(e) => setFormData({ ...formData, interest: e.target.value })}>
                      {interestOptions.map((opt) => (
                        <MenuItem key={opt.value} value={opt.value}>{opt.label}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField fullWidth required multiline rows={6} label="Message" name="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <Button type="submit" variant="contained" color="secondary" size="large" fullWidth disabled={isSubmitting} startIcon={<SendIcon />}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                  <Typography variant="caption" color="text.secondary" sx={{ display: "block", textAlign: "center", mt: 2 }}>
                    By submitting this form, you agree to be contacted by Vathy Frontier Holdings regarding your inquiry.
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: surfaces.light }}>
        <Container maxWidth="md">
          <SectionHeading title="Our Location" subtitle="Based in Kampala, Uganda — Serving Global Markets" />
          <Paper elevation={0} sx={{ p: 6, textAlign: "center", bgcolor: surfaces.deep, border: `1px solid ${brand.gold}40` }}>
            <LocationOnOutlinedIcon sx={{ fontSize: 56, color: brand.gold, mb: 2 }} />
            <Typography variant="h5" sx={{ mb: 1, fontFamily: "Cinzel, serif" }}>
              Vathy Frontier Holdings (U) LTD
            </Typography>
            <Typography color="text.secondary">Kampala, Uganda</Typography>
            <Typography color="text.secondary">East Africa</Typography>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
}

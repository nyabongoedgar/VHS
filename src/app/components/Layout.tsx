import { useEffect, useState } from "react";
import { Link as RouterLink, Outlet, useLocation } from "react-router";
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { BrandLogo } from "./brand/BrandLogo";
import { ScrollToTop } from "./layout/ScrollToTop";
import { brand, surfaces } from "../../theme/premiumTheme";

const navigation = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Portfolio", path: "/services" },
  { name: "Contact", path: "/contact" },
];

export function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: scrolled ? "rgba(247, 244, 238, 0.94)" : "rgba(247, 244, 238, 0.78)",
          borderBottom: `1px solid rgba(197, 165, 114, ${scrolled ? 0.35 : 0.22})`,
          boxShadow: scrolled ? "0 8px 32px rgba(61, 56, 50, 0.07)" : "none",
          transition: "background-color 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
        }}
      >
        <Box sx={{ height: 2, bgcolor: brand.gold, opacity: scrolled ? 0.85 : 0.55, transition: "opacity 0.3s ease" }} />
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: { xs: 68, md: 76 }, justifyContent: "space-between", gap: 2 }}>
            <Link component={RouterLink} to="/" underline="none" aria-label="Vathy Frontier Holdings, home" sx={{ py: 1 }}>
              <BrandLogo light={false} />
            </Link>

            <Stack direction="row" spacing={0.25} alignItems="center" sx={{ display: { xs: "none", md: "flex" } }}>
              {navigation.map((item) => {
                const active = isActive(item.path);
                return (
                  <Button
                    key={item.path}
                    component={RouterLink}
                    to={item.path}
                    sx={{
                      color: active ? brand.espresso900 : brand.slate,
                      fontWeight: active ? 600 : 500,
                      letterSpacing: "0.04em",
                      fontSize: "0.875rem",
                      textTransform: "none",
                      borderRadius: 0,
                      px: 2.25,
                      py: 1.25,
                      minWidth: 0,
                      position: "relative",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: 4,
                        left: "50%",
                        transform: active ? "translateX(-50%) scaleX(1)" : "translateX(-50%) scaleX(0)",
                        width: "55%",
                        height: 2,
                        bgcolor: brand.gold,
                        transition: "transform 0.25s ease",
                      },
                      "&:hover": {
                        color: brand.espresso900,
                        bgcolor: "rgba(197, 165, 114, 0.1)",
                        "&::after": { transform: "translateX(-50%) scaleX(1)" },
                      },
                    }}
                  >
                    {item.name}
                  </Button>
                );
              })}
              <Button
                component={RouterLink}
                to="/contact"
                variant="contained"
                color="secondary"
                size="small"
                sx={{ ml: 1.5, px: 3, py: 1, fontSize: "0.8125rem" }}
              >
                Enquire
              </Button>
            </Stack>

            <IconButton sx={{ display: { md: "none" }, color: brand.espresso900 }} onClick={() => setMobileOpen(true)} aria-label="Open menu">
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: 320,
            bgcolor: brand.paper,
            color: brand.ink,
            borderLeft: "1px solid rgba(197, 165, 114, 0.3)",
          },
        }}
      >
        <Box sx={{ height: 3, bgcolor: brand.gold }} />
        <Box sx={{ p: 2, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <BrandLogo compact light={false} />
          <IconButton onClick={() => setMobileOpen(false)} sx={{ color: brand.espresso900 }} aria-label="Close menu">
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={{ borderColor: "rgba(197, 165, 114, 0.25)" }} />
        <List sx={{ px: 1, py: 2 }}>
          {navigation.map((item) => (
            <ListItemButton
              key={item.path}
              component={RouterLink}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              selected={isActive(item.path)}
              sx={{
                py: 1.75,
                borderRadius: 0,
                borderLeft: "3px solid transparent",
                "&.Mui-selected": {
                  bgcolor: "rgba(197, 165, 114, 0.12)",
                  borderLeftColor: brand.gold,
                  color: brand.espresso900,
                },
                "&:hover": { bgcolor: "rgba(197, 165, 114, 0.08)" },
              }}
            >
              <ListItemText primary={item.name} primaryTypographyProps={{ fontSize: "1rem", letterSpacing: "0.02em" }} />
            </ListItemButton>
          ))}
        </List>
        <Box sx={{ px: 3, pb: 4, mt: 2 }}>
          <Button component={RouterLink} to="/contact" variant="contained" color="secondary" fullWidth size="large" onClick={() => setMobileOpen(false)}>
            Enquire
          </Button>
        </Box>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1 }}>
        <ScrollToTop />
        <Outlet />
      </Box>

      <Box
        component="footer"
        sx={{
          mt: "auto",
          color: brand.ivory,
          background: `linear-gradient(165deg, ${brand.espresso800} 0%, ${brand.espresso900} 55%, #35302b 100%)`,
        }}
      >
        <Box sx={{ height: 2, bgcolor: brand.gold, opacity: 0.7 }} />
        <Container maxWidth="lg" sx={{ py: { xs: 7, md: 9 } }}>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.5fr 1fr 1fr" }, gap: 6, mb: 6 }}>
            <Box>
              <BrandLogo compact light />
              <Typography sx={{ color: "rgba(240,236,228,0.72)", mt: 3, fontSize: "0.875rem", lineHeight: 1.85, maxWidth: 360 }}>
                A diversified holding company delivering excellence across global trade, hospitality, real estate,
                education, floriculture, media, finance, recruitment, and community impact.
              </Typography>
            </Box>

            <Box>
              <Typography variant="subtitle2" sx={{ color: brand.goldLight, mb: 2.5, letterSpacing: "0.16em" }}>
                Navigation
              </Typography>
              <Stack spacing={1.5}>
                {navigation.map((item) => (
                  <Link
                    key={item.path}
                    component={RouterLink}
                    to={item.path}
                    underline="none"
                    sx={{
                      color: "rgba(240,236,228,0.65)",
                      fontSize: "0.875rem",
                      transition: "color 0.2s ease",
                      "&:hover": { color: brand.goldLight },
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </Stack>
            </Box>

            <Box>
              <Typography variant="subtitle2" sx={{ color: brand.goldLight, mb: 2.5, letterSpacing: "0.16em" }}>
                Contact
              </Typography>
              <Stack spacing={1.5} sx={{ color: "rgba(240,236,228,0.65)", fontSize: "0.875rem" }}>
                <Typography variant="body2">info@vathyfrontier.com</Typography>
                <Typography variant="body2">+256 702 667 337</Typography>
                <Typography variant="body2">Kampala, Uganda</Typography>
              </Stack>
            </Box>
          </Box>

          <Divider sx={{ borderColor: "rgba(197, 165, 114, 0.22)", mb: 3 }} />
          <Typography variant="body2" sx={{ textAlign: "center", color: "rgba(240,236,228,0.45)", letterSpacing: "0.06em", fontSize: "0.8125rem" }}>
            © {new Date().getFullYear()} Vathy Frontier Holdings (U) LTD. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

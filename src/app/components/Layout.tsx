import { useState } from "react";
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
import { darkSectionLabelSx, onDark } from "../../theme/darkSurface";

const navigation = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

export function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const navLinks = (
    <>
      {navigation.map((item) => (
        <Button
          key={item.path}
          component={RouterLink}
          to={item.path}
          onClick={() => setMobileOpen(false)}
          sx={{
            color: isActive(item.path) ? brand.goldLight : onDark.muted,
            fontWeight: isActive(item.path) ? 600 : 400,
            letterSpacing: "0.1em",
            fontSize: "0.75rem",
            textTransform: "uppercase",
            borderBottom: isActive(item.path) ? `1px solid ${brand.gold}` : "1px solid transparent",
            borderRadius: 0,
            px: 2,
            py: 1,
            minWidth: 0,
            "&:hover": { color: brand.ivory, bgcolor: "transparent" },
          }}
        >
          {item.name}
        </Button>
      ))}
    </>
  );

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: "rgba(20, 18, 16, 0.94)",
          borderBottom: `1px solid rgba(197, 165, 114, 0.18)`,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: { xs: 72, md: 84 }, justifyContent: "space-between" }}>
            <Link component={RouterLink} to="/" underline="none" aria-label="Vathy Frontier Holdings, home">
              <BrandLogo />
            </Link>

            <Stack direction="row" spacing={0.5} alignItems="center" sx={{ display: { xs: "none", md: "flex" } }}>
              {navLinks}
              <Button
                component={RouterLink}
                to="/contact"
                variant="contained"
                color="secondary"
                size="small"
                sx={{ ml: 2, py: 1, px: 2.5, fontSize: "0.75rem" }}
              >
                Enquire
              </Button>
            </Stack>

            <IconButton
              color="inherit"
              sx={{ display: { md: "none" }, color: mobileOpen ? brand.goldLight : onDark.primary }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{ sx: { width: 300, bgcolor: brand.charcoal900, color: brand.ivory } }}
      >
        <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={() => setMobileOpen(false)} sx={{ color: brand.ivory }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navigation.map((item) => (
            <ListItemButton
              key={item.path}
              component={RouterLink}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              selected={isActive(item.path)}
              sx={{
                "&.Mui-selected": { bgcolor: "rgba(197, 165, 114, 0.12)", color: brand.goldLight },
              }}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          ))}
          <ListItemButton component={RouterLink} to="/contact" onClick={() => setMobileOpen(false)}>
            <ListItemText primary="Enquire" sx={{ color: brand.goldLight }} />
          </ListItemButton>
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1 }}>
        <ScrollToTop />
        <Outlet />
      </Box>

      <Box component="footer" sx={{ bgcolor: brand.charcoal900, color: brand.ivory, mt: "auto" }}>
        <Box sx={{ height: 1, bgcolor: brand.gold, opacity: 0.4 }} />
        <Container maxWidth="lg" sx={{ py: { xs: 7, md: 9 } }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1.5fr 1fr 1fr" },
              gap: 6,
              mb: 6,
            }}
          >
            <Box>
              <BrandLogo compact />
              <Typography sx={{ color: onDark.subtle, mt: 3, fontSize: "0.875rem", lineHeight: 1.85, maxWidth: 360 }}>
                A diversified holding company delivering excellence across global trade, hospitality, real estate,
                education, floriculture, media, finance, recruitment, and community impact.
              </Typography>
            </Box>

            <Box>
              <Typography variant="subtitle2" sx={{ ...darkSectionLabelSx, mb: 2.5 }}>
                Navigation
              </Typography>
              <Stack spacing={1.5}>
                {navigation.map((item) => (
                  <Link
                    key={item.path}
                    component={RouterLink}
                    to={item.path}
                    underline="hover"
                    sx={{ color: onDark.subtle, fontSize: "0.875rem", letterSpacing: "0.04em", "&:hover": { color: onDark.primary } }}
                  >
                    {item.name}
                  </Link>
                ))}
              </Stack>
            </Box>

            <Box>
              <Typography variant="subtitle2" sx={{ ...darkSectionLabelSx, mb: 2.5 }}>
                Contact
              </Typography>
              <Stack spacing={1.5} sx={{ color: onDark.subtle, fontSize: "0.875rem" }}>
                <Typography variant="body2">info@vathyfrontier.com</Typography>
                <Typography variant="body2">+256 702 667 337</Typography>
                <Typography variant="body2">Kampala, Uganda</Typography>
              </Stack>
            </Box>
          </Box>

          <Divider sx={{ borderColor: "rgba(197, 165, 114, 0.18)", mb: 3 }} />
          <Typography variant="body2" sx={{ textAlign: "center", color: onDark.subtle, letterSpacing: "0.06em", fontSize: "0.8125rem" }}>
            © {new Date().getFullYear()} Vathy Frontier Holdings (U) LTD. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

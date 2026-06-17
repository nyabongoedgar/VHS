import { createTheme, alpha } from "@mui/material/styles";

/**
 * Warm espresso + gold — inviting dark accents, never flat black.
 * Navigation uses light surfaces; espresso is for heroes, CTAs, and footer depth.
 */
export const brand = {
  espresso900: "#3d3832",
  espresso800: "#4a4540",
  espresso700: "#5c5650",
  espresso600: "#6e6760",
  gold: "#c5a572",
  goldLight: "#d4b98a",
  goldDark: "#a68b5b",
  ivory: "#f0ece4",
  cream: "#e5e0d6",
  creamDark: "#d9d3c8",
  paper: "#f7f4ee",
  ink: "#2a2622",
  slate: "#6b6560",
  /** @deprecated — use espresso900 */
  charcoal900: "#3d3832",
  /** @deprecated — use espresso800 */
  charcoal800: "#4a4540",
  /** @deprecated — use espresso700 */
  charcoal700: "#5c5650",
  /** @deprecated — use espresso900 */
  navy900: "#3d3832",
  /** @deprecated — use espresso800 */
  navy800: "#4a4540",
  /** @deprecated — use espresso700 */
  navy700: "#5c5650",
};

export const surfaces = {
  light: brand.ivory,
  muted: brand.cream,
  deep: brand.creamDark,
  paper: brand.paper,
  dark: brand.espresso900,
  darkMuted: brand.espresso800,
  nav: alpha(brand.paper, 0.88),
};

export const premiumTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: brand.espresso900,
      light: brand.espresso700,
      dark: "#2f2b27",
      contrastText: brand.ivory,
    },
    secondary: {
      main: brand.gold,
      light: brand.goldLight,
      dark: brand.goldDark,
      contrastText: brand.ink,
    },
    background: {
      default: brand.cream,
      paper: brand.paper,
    },
    text: {
      primary: brand.ink,
      secondary: brand.slate,
    },
    divider: alpha(brand.gold, 0.28),
  },
  typography: {
    fontFamily: '"Montserrat", sans-serif',
    body1: { lineHeight: 1.75, color: brand.ink },
    body2: { lineHeight: 1.7, color: brand.slate },
    h1: {
      fontFamily: '"Cinzel", serif',
      fontWeight: 500,
      letterSpacing: "0.04em",
      color: brand.ink,
    },
    h2: {
      fontFamily: '"Cinzel", serif',
      fontWeight: 500,
      letterSpacing: "0.03em",
      color: brand.ink,
    },
    h3: {
      fontFamily: '"Cinzel", serif',
      fontWeight: 500,
      letterSpacing: "0.02em",
      color: brand.ink,
    },
    h4: {
      fontFamily: '"Cinzel", serif',
      fontWeight: 500,
      color: brand.ink,
    },
    h5: { fontWeight: 600, color: brand.ink },
    h6: { fontWeight: 600, color: brand.ink },
    subtitle1: { letterSpacing: "0.06em", fontWeight: 500 },
    subtitle2: {
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      fontSize: "0.6875rem",
      fontWeight: 600,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
      letterSpacing: "0.05em",
    },
  },
  shape: { borderRadius: 2 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: brand.cream,
          color: brand.ink,
        },
        "#root": {
          minHeight: "100%",
        },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: "12px 28px",
          transition: "all 0.25s ease",
        },
        containedSecondary: {
          color: brand.ink,
          "&:hover": {
            backgroundColor: brand.goldLight,
            transform: "translateY(-1px)",
          },
        },
        outlined: {
          borderWidth: 1,
          "&:hover": {
            borderWidth: 1,
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backdropFilter: "blur(20px) saturate(1.2)",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          backgroundColor: brand.paper,
          border: `1px solid ${alpha(brand.gold, 0.22)}`,
          boxShadow: "none",
          transition: "box-shadow 0.35s ease, border-color 0.35s ease, transform 0.35s ease",
          "&:hover": {
            boxShadow: `0 12px 40px ${alpha(brand.espresso900, 0.08)}`,
            borderColor: alpha(brand.gold, 0.5),
            transform: "translateY(-2px)",
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: { variant: "outlined" },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: brand.ivory,
          borderRadius: 0,
          "& fieldset": {
            borderColor: alpha(brand.gold, 0.35),
          },
          "&:hover fieldset": {
            borderColor: alpha(brand.gold, 0.55),
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          backgroundColor: brand.paper,
        },
      },
    },
  },
});

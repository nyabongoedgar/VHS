import { createTheme, alpha } from "@mui/material/styles";

/** Warm charcoal + gold — no cold navy, no bright white */
export const brand = {
  charcoal900: "#141210",
  charcoal800: "#1e1b18",
  charcoal700: "#2c2824",
  gold: "#c5a572",
  goldLight: "#d4b98a",
  goldDark: "#a68b5b",
  ivory: "#f0ece4",
  cream: "#e5e0d6",
  creamDark: "#d9d3c8",
  paper: "#f7f4ee",
  ink: "#1a1714",
  slate: "#6b6560",
  /** @deprecated use charcoal900 */
  navy900: "#141210",
  /** @deprecated use charcoal800 */
  navy800: "#1e1b18",
  /** @deprecated use charcoal700 */
  navy700: "#2c2824",
};

export const surfaces = {
  light: brand.ivory,
  muted: brand.cream,
  deep: brand.creamDark,
  paper: brand.paper,
  dark: brand.charcoal900,
  darkMuted: brand.charcoal800,
};

export const premiumTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: brand.charcoal900,
      light: brand.charcoal700,
      dark: "#0c0a09",
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
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      fontSize: "0.6875rem",
      fontWeight: 600,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
      letterSpacing: "0.06em",
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
          padding: "14px 32px",
          transition: "all 0.3s ease",
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
          backdropFilter: "blur(16px)",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          backgroundColor: brand.paper,
          border: `1px solid ${alpha(brand.gold, 0.25)}`,
          boxShadow: "none",
          transition: "box-shadow 0.35s ease, border-color 0.35s ease, transform 0.35s ease",
          "&:hover": {
            boxShadow: `0 16px 48px ${alpha(brand.charcoal900, 0.12)}`,
            borderColor: alpha(brand.gold, 0.55),
            transform: "translateY(-3px)",
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

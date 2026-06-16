import { CssBaseline, ThemeProvider } from "@mui/material";
import { premiumTheme } from "../../theme/premiumTheme";

type AppProvidersProps = {
  children: React.ReactNode;
};

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <ThemeProvider theme={premiumTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

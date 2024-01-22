import "@rainbow-me/rainbowkit/styles.css";
import type { AppProps } from "next/app";
import { createTheme } from "@mui/material";
import { useMemo } from "react";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Providers from "./services/Provider";
import { themeSettings } from "./theme";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = useMemo(() => createTheme(themeSettings), []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </ThemeProvider>
  );
}

export default MyApp;

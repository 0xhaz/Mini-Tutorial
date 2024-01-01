import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { Providers } from "./services/Provider.tsx";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { themeSettings } from "./theme.ts";

import "@rainbow-me/rainbowkit/styles.css";

import Navbar from "./components/Navbar.tsx";
import Dashboard from "./scenes/dashboard";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Providers>
          <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
            <Navbar />
            <Dashboard />
          </Box>
        </Providers>
      </ThemeProvider>
    </div>
  );
}

export default App;

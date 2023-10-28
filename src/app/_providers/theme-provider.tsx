"use client";

import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material";

interface Props {
  children: React.ReactNode;
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#107298",
    },
  },
  typography: {
    h1: {
      fontSize: 40,
      fontWeight: 700,
    },
    h2: {
      fontSize: 28,
      fontWeight: 700,
    },
    h3: {
      fontSize: 24,
      fontWeight: 700,
    },
  },
});

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

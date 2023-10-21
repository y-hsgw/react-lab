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
});

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

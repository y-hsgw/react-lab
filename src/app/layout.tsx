import { Box, CssBaseline, GlobalStyles } from "@mui/material";
import type { Metadata } from "next";
import { Header } from "@/app/_components/organisms/header";
import { ThemeProvider } from "./_providers/theme-provider";

export const metadata: Metadata = {
  title: "React Lab",
  description: "Reactの実験・検証を行うアプリケーション",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <ThemeProvider>
          <CssBaseline />
          <GlobalStyles
            styles={{
              code: {
                padding: "1px 0.25rem",
                backgroundColor: "rgb(153 161 179/0.1)",
                borderRadius: 3,
              },
            }}
          />
          <Header />
          <Box component="main" p={2}>
            {children}
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}

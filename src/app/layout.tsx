import { Box, CssBaseline } from "@mui/material";
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
          <Header />
          <Box component={"main"} p={2}>
            {children}
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}

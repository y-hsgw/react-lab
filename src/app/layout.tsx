import { CssBaseline, GlobalStyles, Stack } from "@mui/material";
import type { Metadata } from "next";
import { Header } from "@/app/_components/organisms/header";
import { ThemeProvider } from "./_providers/theme-provider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

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
        <AppRouterCacheProvider>
          <ThemeProvider>
            <CssBaseline />
            <GlobalStyles
              styles={{
                body: {
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "100vh",
                },
                code: {
                  padding: "1px 0.25rem",
                  backgroundColor: "rgb(153 161 179/0.1)",
                  borderRadius: 3,
                },
              }}
            />
            <Header />
            <Stack component="main" p={2} flex={1}>
              {children}
            </Stack>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

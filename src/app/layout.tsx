import { CssBaseline } from "@mui/material";
import type { Metadata } from "next";
import { Header } from "@/app/components/organisms/header";

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
      <CssBaseline />
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

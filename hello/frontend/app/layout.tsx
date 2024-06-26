import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/app/common/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Multimodal Metadata Portal",
  description: "CZB-SF Multimodal Metadata Portal",
};

const CACHE_PROVIDER_OPTIONS = {
  key: "css",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider options={CACHE_PROVIDER_OPTIONS}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

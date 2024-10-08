import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/common/Header";
import { Box, ThemeProvider } from "@mui/material";
import theme from "@/utilities/theme";
import Footer from "@/components/common/Footer";
import { Suspense } from "react";
import Loading from "./loading";
import { SpeedInsights } from "@vercel/speed-insights/next";
import SpotifyPlaylist from "@/components/utilities/SpotifyPlaylist";

export const metadata: Metadata = {
  metadataBase: new URL("https://elims-zone.xyz"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
  keywords: [
    "Elims's Zone",
    "Trần Phi Long",
    "Tran Phi Long",
    "Elims Zone",
    "Elims",
  ],
  authors: [{ name: "Tran Phi Long" }, { name: "Elims" }],
  title: {
    default: "Elims's Zone",
    template: "%s - Elims's Zone",
  },
  description: "Phi Long's websites - created for share knowledge and hobbies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ minHeight: "100vh", margin: 0 }}>
        <ThemeProvider theme={theme}>
          <Suspense fallback={<Loading />}>
            <Header />
            <Box className="text-elims-textColor py-5 min-h-[calc(100vh-160px)]">
              {children}
            </Box>
            <SpeedInsights />
            <SpotifyPlaylist link="https://open.spotify.com/playlist/5iklb65eaqPsfi5jRJyoZA?si=12b8e4edf7e24f6e" />
            <Footer />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}

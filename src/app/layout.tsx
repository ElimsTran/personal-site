import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import { Box, ThemeProvider } from "@mui/material";
import theme from "@/utilities/theme";
import Footer from "@/components/common/Footer";
import { Suspense } from "react";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Elims Zone",
    template: "%s - Elims Zone",
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
            <Footer />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}

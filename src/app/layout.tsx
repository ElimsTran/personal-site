import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import { Box, ThemeProvider } from "@mui/material";
import theme from "@/utilities/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elims's Site",
  description: "Phi Long portfolio",
  icons: {
    icon: "elims.jpg",
  },
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
          <Header />
          <Box className="text-elims-textColor">{children}</Box>
        </ThemeProvider>
      </body>
    </html>
  );
}

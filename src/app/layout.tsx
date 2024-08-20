"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import { Box, ThemeProvider } from "@mui/material";
import theme from "@/utilities/theme";
import Footer from "@/components/common/Footer";
import { Suspense } from "react";
import Loading from "./loading";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Elims Zone",
//   description: "Phi Long portfolio",
//   icons: {
//     icon: "/",
//   },
//   openGraph: {
//     images: "/public/elims.jpg",
//   },
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ minHeight: "100vh", margin: 0 }}>
        <Provider store={store}>
          <Suspense fallback={<Loading />}>
            <ThemeProvider theme={theme}>
              <Header />
              <Box className="text-elims-textColor py-5 min-h-[calc(100vh-160px)]">
                {children}
              </Box>
              <Footer />
            </ThemeProvider>
          </Suspense>
        </Provider>
      </body>
    </html>
  );
}

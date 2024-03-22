import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";

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
      <body
        className={inter.className}
        style={{ minHeight: "100vh", margin: 0 }}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}

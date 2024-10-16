import { Box } from "@mui/material";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box className="text-elims-textColor py-5 min-h-[calc(100vh-160px)]">
      {children}
    </Box>
  );
}

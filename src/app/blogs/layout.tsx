import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

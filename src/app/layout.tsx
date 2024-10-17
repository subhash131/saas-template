import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <body className={`${poppins.className}`}>{children}</body>
    </html>
  );
}

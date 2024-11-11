import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Topnav from "./components/topnav";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Tadam",
  description: "Adam and Tayla's Blog!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-sky-400`}
      >
        <Topnav />
        {children}
      </body>
    </html>
  );
}

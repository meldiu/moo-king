import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Moo-king",
    default: "Moo-king",
  },
  description: "",
  authors: [
    { name: "(Mr Redu) - Eduardo R.", url: "https://github.com/MrRedu" },
    { name: "(MeliColors) - Melissa C.", url: "" },
  ],
  creator: "Meldiu",
  keywords: ["Moo-king", "", ""],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { SanityLive } from "@/sanity/lib/live";
import StickyReserveBar from "@/components/StickyReserveBar";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Ember & Oak Kitchen",
    default: "Ember & Oak Kitchen | Fine Dining & Craft Cocktails",
  },
  description: "Experience elevated comfort food in a warm, inviting atmosphere. Fresh ingredients, handcrafted cocktails, and unforgettable evenings.",
  openGraph: {
    siteName: "Ember & Oak Kitchen",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${playfair.variable} antialiased bg-stone-950 text-white`}>
        <Navbar />
        {children}
        <StickyReserveBar />
        <SanityLive />
      </body>
    </html>
  );
}

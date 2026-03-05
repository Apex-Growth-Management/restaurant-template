import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ember & Oak Kitchen | Fine Dining & Craft Cocktails",
  description: "Experience elevated comfort food in a warm, inviting atmosphere. Fresh ingredients, handcrafted cocktails, and unforgettable evenings.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} antialiased bg-stone-950 text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

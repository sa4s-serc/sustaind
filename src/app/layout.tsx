import type { Metadata } from "next";
import { IBM_Plex_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ibmPlexSans = IBM_Plex_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
});

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SustAInd - Sustainable AI for India",
  description: "Developing environmentally and economically sustainable AI systems for India's future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexSans.variable} ${inter.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

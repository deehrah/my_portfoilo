import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chidera Anselm Nwogwu",
  description: "Web Developer, WordPress Expert & Graphic Designer based in Lagos.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

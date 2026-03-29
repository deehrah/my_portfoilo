import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chidera Anselm Nwogwu | Portfolio",
  description: "Web Administrator, WordPress Developer & Graphic Designer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} scroll-smooth`}>
      <body className="min-h-screen bg-gray-950 text-gray-100 font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <footer className="text-center py-6 text-gray-500 text-sm border-t border-gray-800">
          © {new Date().getFullYear()} Chidera Anselm Nwogwu. All rights reserved.
        </footer>
      </body>
    </html>
  );
}

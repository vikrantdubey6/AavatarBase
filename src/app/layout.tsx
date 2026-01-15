import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AavatarBase | Best Free Online Avatar Generator & Creator",
  description: "Create custom avatars for free with AavatarBase. The best random avatar generator for developers and designers. Choose from 30+ styles, customize backgrounds, and get permanent links. Perfect for placeholders, profiles, and more.",
  keywords: [
    "avatar generator", "avatar maker", "avatar creator", "placeholder avatar",
    "free online avatar generator", "avatars online", "avatares online",
    "make an avatar free online", "avatar generators", "create a avatar free online",
    "random avatar generator", "random avatar", "create an avatar online for free",
    "avatar websites", "make online avatars free", "img avatar", "avatars with url",
    "jira avatar generator", "generic avatar", "simple avatars", "web avatar generator",
    "generate avatar", "create avatars free online", "avatar online for free", "free avater"
  ],
  icons: {
    icon: "/favicon.png",
  },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased selection:bg-indigo-500/30`}>
        <StructuredData />
        <Navbar />
        <div className="min-h-[calc(100vh-64px)]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

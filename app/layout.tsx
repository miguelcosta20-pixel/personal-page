import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Nav } from "@/components/Nav";
import { SocialSidebar } from "@/components/SocialSidebar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Miguel Costa Paulo — SAP BTP & AI Architect",
  description:
    "AI-first SAP Architect with 8+ years designing and delivering scalable AI and cloud solutions across the SAP ecosystem. Deep expertise in SAP AI Core, Generative AI Hub, and SAP BTP.",
  metadataBase: new URL("https://mcpaulo.dev"),
  openGraph: {
    title: "Miguel Costa Paulo — SAP BTP & AI Architect",
    description:
      "AI-first SAP Architect specialising in SAP AI Core, Generative AI Hub, and BTP cloud architecture.",
    type: "website",
    url: "https://mcpaulo.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full">
        <Nav />
        <SocialSidebar />
        <div className="pt-20">{children}</div>
      </body>
    </html>
  );
}

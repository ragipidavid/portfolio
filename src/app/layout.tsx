import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Navigation from "./components/Navigation";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "David Ragipi",
  description:
    "Portfolio of David Ragipi, a software engineer specializing in scalable systems and web development.",
  keywords: [
    "David Ragipi",
    "software engineer",
    "web developer",
    "portfolio",
    "projects",
  ],
  authors: [{ name: "David Ragipi" }],
  creator: "David Ragipi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://davidragipi.com",
    title: "David Ragipi | Software Engineer",
    description:
      "Portfolio of David Ragipi, a software engineer specializing in scalable systems and web development.",
    siteName: "David Ragipi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "David Ragipi | Software Engineer",
    description:
      "Portfolio of David Ragipi, a software engineer specializing in scalable systems and web development.",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://davidragipi.com"),
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
        <div className="min-h-screen bg-background font-mono relative">
          <div className="container mx-auto px-4 md:px-12 py-8 md:py-12 md:pl-40 md:pt-20">
            <div className="absolute left-16 top-30 hidden md:block">
              <Link href="/">
                <Image
                  src="/IMG_3561.jpeg"
                  alt="Decorative left image"
                  width={250}
                  height={250}
                />
              </Link>
            </div>
            {children}
            <Navigation />
          </div>
        </div>
      </body>
    </html>
  );
}

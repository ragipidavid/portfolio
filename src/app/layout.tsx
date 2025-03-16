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
  title: "David Ragipi",
  description: "Portfolio of David Ragipi, a software engineer specializing in scalable systems and web development.",
  keywords: ["David Ragipi", "software engineer", "web developer", "portfolio", "projects"],
  authors: [{ name: "David Ragipi" }],
  creator: "David Ragipi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://davidragipi.com",
    title: "David Ragipi | Software Engineer",
    description: "Portfolio of David Ragipi, a software engineer specializing in scalable systems and web development.",
    siteName: "David Ragipi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "David Ragipi | Software Engineer",
    description: "Portfolio of David Ragipi, a software engineer specializing in scalable systems and web development.",
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
        {children}
      </body>
    </html>
  );
}

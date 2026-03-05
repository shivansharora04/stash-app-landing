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
  title: "Stash — Save anything. Find everything.",
  description:
    "Stash is a universal memory for everything you save online. Save links, screenshots, and posts, then find them instantly with AI search.",
  keywords: [
    "save bookmarks",
    "organize links",
    "AI bookmark manager",
    "universal save",
    "second brain",
    "content organizer",
    "save tweets",
    "save screenshots",
  ],
  authors: [{ name: "Stash" }],
  openGraph: {
    title: "Stash — Save anything. Find everything.",
    description:
      "Stash is a universal memory for everything you save online. Save links, screenshots, and posts, then find them instantly with AI search.",
    url: "https://stash.app",
    siteName: "Stash",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stash — Save anything. Find everything.",
    description:
      "Stash is a universal memory for everything you save online. Save links, screenshots, and posts, then find them instantly with AI search.",
    creator: "@stashapp",
  },
  robots: {
    index: true,
    follow: true,
  },
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

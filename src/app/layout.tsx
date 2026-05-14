import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeScript } from "@shared/ui/ThemeScript";
import { ThemeToggle } from "@shared/ui/ThemeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.startsWith("http")
    ? process.env.NEXT_PUBLIC_SITE_URL
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rick and Morty — Citadel DB",
    template: "%s — Citadel DB",
  },
  description:
    "Character catalog for the Rick and Morty API: search, filters, favorites. Next.js App Router, React Query, TypeScript.",
  openGraph: {
    type: "website",
    title: "Citadel DB — Rick & Morty characters",
    description:
      "Terminal-style character explorer built with Next.js and the Rick and Morty API.",
    siteName: "Citadel DB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Citadel DB — Rick & Morty characters",
    description:
      "Terminal-style character explorer built with Next.js and the Rick and Morty API.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeScript />
        <div className="hud-shell">
          <header className="hud-header">
            <p className="hud-header__brand">
              <strong>CITADEL_DB</strong>
              <span aria-hidden>{' // '}</span>
              <span>PORTAL_INDEX</span>
            </p>
            <ThemeToggle />
          </header>
          <div className="hud-shell__main">{children}</div>
        </div>
      </body>
    </html>
  );
}

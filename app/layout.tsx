import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://bebecreste.ro";
const defaultOgImage = "/homepage/mama-bebe.jpeg";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BebeCrește.ro | Calculator somn copil și planner mese",
    template: "%s | BebeCrește.ro",
  },
  description:
    "Bebe nu doarme sau mesele sunt greu de organizat? Primești repere simple pentru somnul, mesele și rutina copilului.",
  keywords: [
    "calculator somn copil",
    "program somn bebe",
    "calculator somn bebe",
    "planner mese copil",
    "diversificare mese copil",
    "planner mese bebe",
    "rutina bebe",
    "rutine copii",
    "bebe nu doarme",
    "copil nu doarme",
    "copil nu mananca",
    "somn bebelusi",
    "parenting Romania",
  ],
  applicationName: "BebeCrește.ro",
  authors: [{ name: "BebeCrește.ro" }],
  creator: "BebeCrește.ro",
  publisher: "BebeCrește.ro",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "256x256" },
      { url: "/favicon.png", type: "image/png", sizes: "256x256" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "BebeCrește.ro | Calculator somn copil și planner mese",
    description:
      "Bebe nu doarme? Primești repere clare și orientative pentru somnul, mesele și rutina copilului tău.",
    url: siteUrl,
    siteName: "BebeCrește.ro",
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: "Părinte cu bebeluș, pentru BebeCrește.ro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BebeCrește.ro | Calculator somn copil și planner mese",
    description:
      "Bebe nu doarme? Calculator somn copil, planner mese și ghiduri simple pentru părinți.",
    images: [defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className="h-full antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}

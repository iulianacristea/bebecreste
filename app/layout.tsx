import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://bebecreste.ro";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BebeCrește.ro | Somn, mese și rutine pentru copii",
    template: "%s | BebeCrește.ro",
  },
  description:
    "Repere simple pentru părinți: calculator somn bebe, planner mese, diversificare și ghiduri practice pentru rutina copilului.",
  keywords: [
    "program somn bebe",
    "calculator somn bebe",
    "diversificare mese copil",
    "planner mese bebe",
    "rutina bebe",
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
    title: "BebeCrește.ro | Somn, mese și rutine pentru copii",
    description:
      "Calculator somn bebe, planner mese și ghiduri practice pentru părinți cu copii între 0 și 3 ani.",
    url: siteUrl,
    siteName: "BebeCrește.ro",
    locale: "ro_RO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BebeCrește.ro | Somn, mese și rutine pentru copii",
    description:
      "Repere simple pentru somnul, mesele și rutina copilului tău.",
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

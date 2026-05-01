import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BebeCrește.ro - Calculator somn bebe",
  description:
    "Calculator orientativ de somn pentru bebeluși și copii mici. Află următoarea fereastră de somn și ora recomandată de culcare.",
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

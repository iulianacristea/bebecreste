import type { Metadata } from "next";
import { Footer } from "@/src/components/Footer";
import { Navbar } from "@/src/components/Navbar";
import { SleepCalculator } from "@/src/components/SleepCalculator";

export const metadata: Metadata = {
  title: "Calculator somn bebe | Bebe nu doarme?",
  description:
    "Bebe nu doarme? Calculează fereastra de somn, ora de culcare și un program orientativ pentru bebe, în funcție de vârstă și ora trezirii.",
  keywords: [
    "bebe nu doarme",
    "calculator somn bebe",
    "program somn bebe",
    "ferestre de veghe bebe",
    "ora culcare bebe",
    "somn bebelusi",
  ],
  alternates: {
    canonical: "/calculator-somn",
  },
  openGraph: {
    title: "Calculator somn bebe | Bebe nu doarme?",
    description:
      "Bebe nu doarme? Primește repere orientative pentru următoarea fereastră de somn și ora de culcare.",
    url: "/calculator-somn",
    images: [
      {
        url: "/homepage/bebe-doarme.jpeg",
        width: 1200,
        height: 630,
        alt: "Bebeluș dormind liniștit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculator somn bebe | Bebe nu doarme?",
    description:
      "Bebe nu doarme? Calculează următoarea fereastră de somn și ora de culcare.",
    images: ["/homepage/bebe-doarme.jpeg"],
  },
};

export default function CalculatorSomnPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff7f1] text-slate-900">
      <Navbar />

      <section className="relative px-5 pb-16 pt-10 sm:px-8 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(186,230,253,0.72),_transparent_34%),radial-gradient(circle_at_82%_12%,_rgba(254,205,211,0.72),_transparent_30%),linear-gradient(135deg,_#fff7f1_0%,_#f8fbff_48%,_#fff1f7_100%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl">
            <p className="mb-5 inline-flex rounded-full border border-sky-200 bg-white/70 px-4 py-2 text-sm font-semibold text-sky-700 shadow-sm">
              Calculator somn bebe
            </p>
            <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl">
              Calculează următoarea fereastră de somn.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Introdu vârsta, ora trezirii și numărul de somnuri pentru o
              recomandare orientativă, clară și ușor de ajustat după ritmul
              copilului.
            </p>
          </div>

          <SleepCalculator />
        </div>
      </section>

      <Footer />
    </main>
  );
}

import type { Metadata } from "next";
import { Footer } from "@/src/components/Footer";
import { MealPlanner } from "@/src/components/MealPlanner";
import { Navbar } from "@/src/components/Navbar";

export const metadata: Metadata = {
  title: "Planner mese bebe | Idei diversificare pe vârstă",
  description:
    "Generează idei simple pentru mic dejun, prânz, cină și gustări, adaptate vârstei copilului și diversificării.",
  keywords: [
    "planner mese bebe",
    "diversificare mese copil",
    "meniu bebe 6 luni",
    "idei mese bebe",
    "alimente diversificare",
  ],
  alternates: {
    canonical: "/planner-mese",
  },
  openGraph: {
    title: "Planner mese bebe | BebeCrește.ro",
    description:
      "Idei de mese orientative pentru diversificare, în funcție de vârstă și alimente disponibile.",
    url: "/planner-mese",
    images: [
      {
        url: "/homepage/bebe-mananca.jpeg",
        width: 1200,
        height: 630,
        alt: "Copil mic lângă o masă sănătoasă",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Planner mese bebe | BebeCrește.ro",
    description:
      "Primești idei simple de mese pentru bebeluși și copii mici.",
    images: ["/homepage/bebe-mananca.jpeg"],
  },
};

export default function PlannerMesePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff7f1] text-slate-900">
      <Navbar />

      <section className="relative px-5 pb-16 pt-10 sm:px-8 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(186,230,253,0.72),_transparent_34%),radial-gradient(circle_at_82%_12%,_rgba(254,205,211,0.72),_transparent_30%),linear-gradient(135deg,_#fff7f1_0%,_#f8fbff_48%,_#fff1f7_100%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl">
            <p className="mb-5 inline-flex rounded-full border border-rose-200 bg-white/70 px-4 py-2 text-sm font-semibold text-rose-700 shadow-sm">
              Planner mese copii
            </p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl">
              Idei simple de mese pentru bebeluși și copii mici.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Completează câteva detalii și primești un plan orientativ pentru
              mic dejun, prânz, cină și gustare, adaptat ritmului familiei.
            </p>
          </div>

          <MealPlanner />
        </div>
      </section>

      <Footer />
    </main>
  );
}

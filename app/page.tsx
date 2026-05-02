import Link from "next/link";
import type { Metadata } from "next";
import { Features } from "@/src/components/Features";
import { Footer } from "@/src/components/Footer";
import { Hero } from "@/src/components/Hero";
import { HowItWorks } from "@/src/components/HowItWorks";
import { Navbar } from "@/src/components/Navbar";

export const metadata: Metadata = {
  title: "Program somn bebe, mese și rutine pentru copii",
  description:
    "BebeCrește.ro oferă calculator somn bebe, planner mese pentru diversificare și ghiduri simple pentru părinți cu copii 0-3 ani.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BebeCrește.ro | Program somn bebe și planner mese",
    description:
      "Repere orientative pentru somnul, mesele și rutina copilului tău.",
    url: "/",
  },
};

const capabilityCards = [
  {
    title: "Somn mai ușor",
    description:
      "Primești repere orientative pentru ferestrele de somn și ora de culcare.",
    href: "/calculator-somn",
    accent: "bg-sky-50 text-sky-700 ring-sky-100",
  },
  {
    title: "Mese mai simple",
    description:
      "Generezi idei de mese potrivite vârstei și preferințelor copilului.",
    href: "/planner-mese",
    accent: "bg-rose-50 text-rose-700 ring-rose-100",
  },
  {
    title: "Informații utile",
    description: "Citești ghiduri scurte și practice pentru părinți.",
    href: "/blog",
    accent: "bg-emerald-50 text-emerald-700 ring-emerald-100",
  },
];

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://bebecreste.ro/#organization",
        name: "BebeCrește.ro",
        url: "https://bebecreste.ro",
      },
      {
        "@type": "WebSite",
        "@id": "https://bebecreste.ro/#website",
        name: "BebeCrește.ro",
        url: "https://bebecreste.ro",
        inLanguage: "ro-RO",
        publisher: {
          "@id": "https://bebecreste.ro/#organization",
        },
      },
      {
        "@type": "WebApplication",
        name: "Calculator somn bebe BebeCrește",
        url: "https://bebecreste.ro/calculator-somn",
        applicationCategory: "HealthApplication",
        operatingSystem: "Web",
        inLanguage: "ro-RO",
        description:
          "Calculator orientativ pentru program somn bebe, ferestre de veghe și ora de culcare.",
      },
      {
        "@type": "WebApplication",
        name: "Planner mese BebeCrește",
        url: "https://bebecreste.ro/planner-mese",
        applicationCategory: "LifestyleApplication",
        operatingSystem: "Web",
        inLanguage: "ro-RO",
        description:
          "Planner orientativ pentru diversificare mese copil și idei de mese pe vârstă.",
      },
    ],
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#fff7f1] text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <Hero />
      <section
        id="/home"
        className="relative bg-[linear-gradient(135deg,_#fffdfb_0%,_#fff7f1_48%,_#f5fbff_100%)] px-5 py-10 sm:px-8 lg:px-10"
      >
        <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-rose-100/40 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl gap-5 lg:grid-cols-2">
          <HowItWorks />
          <Features />
        </div>
      </section>
      <section className="bg-white px-5 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase text-emerald-700">
              Ce poți face cu BebeCrește
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              Repere clare pentru zile mai liniștite.
            </h2>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {capabilityCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group rounded-[1.5rem] border border-slate-100 bg-white p-5 shadow-lg shadow-slate-100/70 transition duration-300 hover:-translate-y-1 hover:border-rose-100 hover:shadow-xl hover:shadow-rose-100/50 focus:outline-none focus:ring-4 focus:ring-rose-100"
              >
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase ring-1 ${card.accent}`}
                >
                  BebeCrește
                </span>
                <h3 className="mt-4 text-xl font-bold text-slate-950 transition duration-200 group-hover:text-rose-700">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {card.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white px-5 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-rose-100 bg-gradient-to-br from-rose-50 via-white to-sky-50 p-6 text-center shadow-xl shadow-rose-100/45 sm:p-8">
          <p className="text-sm font-semibold uppercase text-rose-700">
            Gata de încercat?
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight text-slate-950">
            Începe cu un pas simplu
          </h2>
          <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-600">
            Alege ce ai nevoie azi: somn mai clar sau idei de mese.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/calculator-somn"
              className="inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-7 py-4 text-base font-semibold text-white shadow-xl shadow-slate-900/15 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-2xl hover:shadow-slate-900/20 focus:outline-none focus:ring-4 focus:ring-slate-300 active:translate-y-0 sm:w-auto"
            >
              Calculator somn
            </Link>
            <Link
              href="/planner-mese"
              className="inline-flex w-full items-center justify-center rounded-full border border-rose-100 bg-white/80 px-7 py-4 text-base font-semibold text-slate-700 shadow-sm shadow-rose-100/60 transition duration-200 hover:-translate-y-0.5 hover:border-rose-200 hover:bg-white hover:shadow-md hover:shadow-rose-100/80 focus:outline-none focus:ring-4 focus:ring-rose-100 active:translate-y-0 sm:w-auto"
            >
              Planner mese
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { EmailCapture } from "@/src/components/EmailCapture";
import { Features } from "@/src/components/Features";
import { Footer } from "@/src/components/Footer";
import { Hero } from "@/src/components/Hero";
import { HowItWorks } from "@/src/components/HowItWorks";
import { MobileStickyCta } from "@/src/components/MobileStickyCta";
import { Navbar } from "@/src/components/Navbar";

export const metadata: Metadata = {
  title: "Program somn bebe, mese și rutine pentru copii",
  description:
    "BebeCrește.ro oferă calculator somn bebe, planner mese pentru diversificare și ghiduri simple pentru părinți cu copii 0-3 ani.",
  alternates: {
    canonical: "https://bebecreste.ro",
  },
  openGraph: {
    title: "BebeCrește.ro | Program somn bebe și planner mese",
    description:
      "Repere orientative pentru somnul, mesele și rutina copilului tău.",
    url: "https://bebecreste.ro",
    siteName: "BebeCrește.ro",
    locale: "ro_RO",
    type: "website",
  },
};

const capabilityCards = [
  {
    title: "Calculator somn copil",
    description:
      "Află când ar putea fi următoarea fereastră de somn și cum poți ajusta ziua copilului.",
    href: "/calculator-somn",
    cta: "Calculează somnul",
    image: "/homepage/bebe-doarme.jpeg",
    imageAlt: "Bebeluș dormind liniștit",
    accent: "bg-sky-50 text-sky-700 ring-sky-100",
  },
  {
    title: "Planner mese copil",
    description:
      "Primești idei simple de mese, adaptate vârstei, preferințelor și alimentelor disponibile.",
    href: "/planner-mese",
    cta: "Planifică mesele",
    image: "/homepage/bebe-mananca.jpeg",
    imageAlt: "Mâncare sănătoasă pentru copil mic",
    accent: "bg-rose-50 text-rose-700 ring-rose-100",
  },
];

const benefitPoints = [
  "Nu mai ghicești programul copilului",
  "Ai idei simple pentru mesele zilnice",
  "Înțelegi mai bine nevoile copilului",
  "Construiești rutine mai liniștite",
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
    <main className="min-h-screen overflow-hidden bg-[#fff7f1] pb-20 text-slate-900 md:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Navbar />
      <Hero />

      <section className="bg-white px-5 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase text-emerald-700">
              Instrumente utile pentru părinți
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              Două repere simple pentru fiecare zi
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Începi cu ce ai nevoie acum: somn mai clar sau idei rapide de
              mese.
            </p>
          </div>

          <div className="mx-auto mt-7 grid max-w-5xl gap-5 md:grid-cols-2">
            {capabilityCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group overflow-hidden rounded-[1.75rem] border border-slate-100 bg-white p-4 shadow-lg shadow-slate-100/70 transition duration-300 hover:-translate-y-1 hover:border-rose-100 hover:shadow-xl hover:shadow-rose-100/50 focus:outline-none focus:ring-4 focus:ring-rose-100"
              >
                <div className="overflow-hidden rounded-[1.35rem] bg-slate-50">
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    width={700}
                    height={420}
                    className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-3">
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

                  <p className="mt-5 text-sm font-bold text-rose-700">
                    → {card.cta}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-4xl rounded-[2rem] border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-rose-50 p-6 shadow-xl shadow-sky-100/35 sm:p-8">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950">
              Mai puțin stres. Mai multă claritate.
            </h2>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {benefitPoints.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3 rounded-2xl border border-white/80 bg-white/75 px-4 py-3 text-sm font-semibold leading-6 text-slate-700 shadow-sm"
                >
                  <span className="mt-0.5 text-emerald-600">✔</span>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <p className="mt-5 text-sm leading-6 text-slate-600">
              Fiecare copil este diferit. Aici găsești repere care te ajută să
              te adaptezi, nu reguli rigide.
            </p>
          </div>
        </div>
      </section>

      <section
        id="cum-functioneaza"
        className="relative bg-[linear-gradient(135deg,_#fffdfb_0%,_#fff7f1_48%,_#f5fbff_100%)] px-5 py-10 sm:px-8 lg:px-10"
      >
        <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-rose-100/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl gap-5 lg:grid-cols-2">
          <HowItWorks />
          <Features />
        </div>
      </section>

      <EmailCapture className="bg-white px-5 py-10 sm:px-8 lg:px-10" />

      <section className="bg-white px-5 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-rose-100 bg-gradient-to-br from-rose-50 via-white to-sky-50 p-6 text-center shadow-xl shadow-rose-100/45 sm:p-8">
          <p className="text-sm font-semibold uppercase text-rose-700">
            Începe de unde ai nevoie
          </p>

          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight text-slate-950">
            Alege un reper rapid pentru ziua de azi
          </h2>

          <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-600">
            Folosește calculatorul de somn pentru programul copilului sau
            plannerul de mese pentru idei rapide. Recomandările sunt
            orientative și ușor de adaptat.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/calculator-somn"
              className="inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-7 py-4 text-base font-semibold text-white shadow-xl shadow-slate-900/15 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-2xl hover:shadow-slate-900/20 focus:outline-none focus:ring-4 focus:ring-slate-300 active:translate-y-0 sm:w-auto"
            >
              Calculează somnul
            </Link>

            <Link
              href="/planner-mese"
              className="inline-flex w-full items-center justify-center rounded-full border border-rose-100 bg-white/80 px-7 py-4 text-base font-semibold text-slate-700 shadow-sm shadow-rose-100/60 transition duration-200 hover:-translate-y-0.5 hover:border-rose-200 hover:bg-white hover:shadow-md hover:shadow-rose-100/80 focus:outline-none focus:ring-4 focus:ring-rose-100 active:translate-y-0 sm:w-auto"
            >
              Planifică mesele
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <MobileStickyCta
        links={[
          { href: "/calculator-somn", label: "Calculează somnul" },
          { href: "/planner-mese", label: "Planifică mesele" },
        ]}
      />
    </main>
  );
}
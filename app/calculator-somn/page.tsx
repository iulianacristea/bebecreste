import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Footer } from "@/src/components/Footer";
import { Navbar } from "@/src/components/Navbar";
import { SleepCalculator } from "@/src/components/SleepCalculator";

export const metadata: Metadata = {
  title: "Calculator somn bebe | Program somn și ferestre de veghe",
  description:
    "Bebe nu doarme? Calculează fereastra de somn, ora de culcare și un program orientativ pentru bebe sau copil mic, în funcție de vârstă și trezire.",
  keywords: [
    "bebe nu doarme",
    "calculator somn copil",
    "calculator somn bebe",
    "program somn bebe",
    "ferestre de veghe bebe",
    "ora culcare bebe",
    "somn bebelusi",
    "program somn copil 1 an",
    "rutina somn bebe",
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
        url: "/sleepcalculator/bebe-doarme.jpeg",
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
    images: ["/sleepcalculator/bebe-doarme.jpeg"],
  },
};

const sleepTimeline = [
  {
    title: "Trezire",
    text: "Pornești de la ora la care copilul s-a trezit dimineața.",
  },
  {
    title: "Fereastră de veghe",
    text: "Calculatorul estimează cât poate sta treaz, în funcție de vârstă.",
  },
  {
    title: "Următorul somn",
    text: "Primești un interval orientativ pentru următorul somn sau seară.",
  },
  {
    title: "Rutina de culcare",
    text: "Folosești ora ca reper blând, ajustat după semnele copilului.",
  },
];

const howItWorksSteps = [
  {
    title: "Introduci vârsta",
    text: "Anii și lunile ajută la alegerea reperelor potrivite etapei copilului.",
  },
  {
    title: "Adaugi ora trezirii",
    text: "Trezirea de dimineață este punctul de pornire pentru ziua de somn.",
  },
  {
    title: "Primești o recomandare",
    text: "Vezi fereastra de somn, ora de culcare și un program orientativ.",
  },
];

const faqItems = [
  {
    question: "Ce este o fereastră de veghe la bebeluși?",
    answer:
      "Fereastra de veghe este perioada în care copilul poate sta treaz între două somnuri. Ea variază în funcție de vârstă, oboseală și ritmul fiecărui copil.",
  },
  {
    question: "Calculatorul de somn înlocuiește sfatul medicului?",
    answer:
      "Nu. Calculatorul oferă repere orientative pentru somn și rutină, dar nu înlocuiește recomandarea pediatrului sau a unui specialist în somnul copilului.",
  },
  {
    question: "Ce fac dacă bebe nu doarme la ora recomandată?",
    answer:
      "Ora este un reper, nu o regulă fixă. Urmărește semnele de oboseală, cât a dormit ziua și cum se simte copilul în acel moment.",
  },
  {
    question: "Pot folosi calculatorul pentru copil de 1-3 ani?",
    answer:
      "Da, calculatorul poate oferi repere orientative și pentru copii mici, inclusiv când au un singur somn de zi sau sunt în tranziție.",
  },
];

export default function CalculatorSomnPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#fff7f1] text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />

      <section className="relative px-5 pb-12 pt-10 sm:px-8 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(186,230,253,0.72),_transparent_34%),radial-gradient(circle_at_82%_12%,_rgba(254,205,211,0.72),_transparent_30%),linear-gradient(135deg,_#fff7f1_0%,_#f8fbff_48%,_#fff1f7_100%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full border border-sky-200 bg-white/75 px-4 py-2 text-sm font-semibold text-sky-700 shadow-sm">
              Calculator somn bebe
            </span>
            <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-tight tracking-tight text-slate-950 sm:text-6xl lg:text-[4.4rem]">
              Bebe nu doarme? Găsește un reper calm pentru următorul somn.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Introdu vârsta, ora trezirii și numărul de somnuri pentru o
              recomandare orientativă, clară și ușor de adaptat după ritmul
              copilului tău.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#calculator"
                className="inline-flex justify-center rounded-full bg-slate-950 px-7 py-4 text-base font-semibold text-white shadow-xl shadow-slate-900/15 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-300 active:translate-y-0"
              >
                Calculează somnul
              </a>
              <Link
                href="/blog/de-ce-nu-doarme-bebe-noaptea"
                className="inline-flex justify-center rounded-full border border-sky-100 bg-white/80 px-7 py-4 text-base font-semibold text-slate-700 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-4 focus:ring-sky-100 active:translate-y-0"
              >
                Citește despre somn
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-white p-3 shadow-2xl shadow-sky-100/50 lg:p-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-sky-50 sm:aspect-[5/6] lg:aspect-[4/5]">
              <Image
                src="/sleepcalculator/bebe-doarme.jpeg"
                alt="Bebeluș dormind liniștit"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 44vw"
                className="object-cover object-center"
              />
            </div>
            <div className="grid gap-3 p-4 sm:grid-cols-3">
              {["Repere blânde", "Fără reguli rigide", "Rutine mai calme"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-sky-50 px-4 py-3 text-center text-sm font-bold text-sky-700"
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-bold uppercase text-emerald-700">
              Calculează rapid
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              Un reper simplu pentru ziua de azi.
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Calculatorul nu promite un program perfect. Te ajută să pornești
              de la o estimare mai clară, apoi să ajustezi după copil.
            </p>
          </div>
          <SleepCalculator />
        </div>
      </section>

      <section className="bg-white px-5 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#f7fbff] p-6 shadow-xl shadow-sky-100/50 sm:p-8 lg:p-10">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-sky-700">
              Timeline de somn
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              Ziua devine mai ușor de urmărit când ai câteva repere.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {sleepTimeline.map((item, index) => (
              <div key={item.title} className="rounded-[1.5rem] bg-white p-5 shadow-sm">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 text-sm font-black text-sky-700">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-lg font-bold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-[2rem] bg-[#fff8f4] p-6 shadow-lg shadow-rose-100/50 sm:p-8">
            <p className="text-xl font-bold leading-8 text-slate-950">
              Somnul copilului nu are nevoie de perfecțiune. Are nevoie de
              observație, răbdare și repere flexibile.
            </p>
            <div className="mt-6 space-y-3">
              {[
                "Creat pentru părinți obosiți",
                "Recomandări orientative",
                "Ton blând, fără presiune",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-full bg-white px-4 py-3 text-sm font-bold text-slate-700 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase text-rose-700">
              Un pic de liniște
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              Când bebe nu doarme, nu înseamnă că faci ceva greșit.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Somnul se schimbă mult în primii ani: pusee, dinți, tranziții de
              somn, oboseală acumulată sau zile foarte agitate. BebeCrește îți
              oferă un reper de pornire, ca să poți lua decizii mai calme în
              mijlocul unei zile reale.
            </p>
            <p className="mt-4 text-sm leading-6 text-slate-500">
              Informațiile nu înlocuiesc sfatul medicului. Dacă există
              îngrijorări persistente legate de somn, respirație, creștere sau
              sănătate, discută cu pediatrul.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#fff7f1] px-5 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-emerald-700">
              Cum funcționează
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              Completezi câteva detalii și primești un reper orientativ.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {howItWorksSteps.map((step, index) => (
              <div key={step.title} className="rounded-[1.5rem] bg-white p-5 shadow-lg shadow-slate-100/70">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-sm font-black text-emerald-700">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-lg font-bold text-slate-950">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-bold uppercase text-sky-700">
            Întrebări frecvente
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
            FAQ despre calculatorul de somn pentru bebe.
          </h2>
          <div className="mt-7 grid gap-4">
            {faqItems.map((item) => (
              <div
                key={item.question}
                className="rounded-[1.5rem] border border-slate-100 bg-white p-5 shadow-lg shadow-slate-100/70"
              >
                <h3 className="text-lg font-bold text-slate-950">
                  {item.question}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

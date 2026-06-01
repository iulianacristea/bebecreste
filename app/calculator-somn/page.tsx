import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { FAQAccordion } from "@/src/components/FAQAccordion";
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
    title: "Calculator somn bebe | Program și ferestre de veghe",
    description:
      "Calculează următoarea fereastră de somn, ora de culcare și un program orientativ pentru bebe sau copil mic.",
    url: "/calculator-somn",
    siteName: "BebeCrește.ro",
    locale: "ro_RO",
    type: "website",
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
    title: "Calculator somn bebe | Program și ferestre de veghe",
    description:
      "Primește repere orientative pentru următorul somn, ora de culcare și rutina zilei.",
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
    title: "Completezi datele copilului",
    text: "Introduci vârsta, ora trezirii și numărul de somnuri.",
    accent: "bg-sky-50 text-sky-700 ring-sky-100",
    icon: "D",
  },
  {
    title: "Primești recomandarea",
    text: "Calculatorul estimează următoarea fereastră de somn și ora de culcare.",
    accent: "bg-rose-50 text-rose-700 ring-rose-100",
    icon: "R",
  },
  {
    title: "Adaptezi după copil",
    text: "Folosești recomandarea ca reper și ajustezi după semnele copilului.",
    accent: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    icon: "A",
  },
];

const tiredSigns = [
  {
    title: "Se freacă la ochi",
    icon: "eyes",
    accent: "from-sky-50 to-white text-sky-700 ring-sky-100",
  },
  {
    title: "Devine agitat",
    icon: "waves",
    accent: "from-rose-50 to-white text-rose-700 ring-rose-100",
  },
  {
    title: "Cască des",
    icon: "moon",
    accent: "from-violet-50 to-white text-violet-700 ring-violet-100",
  },
  {
    title: "Își pierde interesul pentru joacă",
    icon: "toy",
    accent: "from-amber-50 to-white text-amber-700 ring-amber-100",
  },
  {
    title: "Devine mai sensibil",
    icon: "heart",
    accent: "from-pink-50 to-white text-pink-700 ring-pink-100",
  },
  {
    title: "Se liniștește greu",
    icon: "cloud",
    accent: "from-emerald-50 to-white text-emerald-700 ring-emerald-100",
  },
] as const;

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

function TiredSignIcon({ type }: { type: (typeof tiredSigns)[number]["icon"] }) {
  const iconClass = "h-7 w-7";

  if (type === "eyes") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={iconClass} fill="none">
        <path
          d="M4 12s2.8-4 8-4 8 4 8 4-2.8 4-8 4-8-4-8-4Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 10.2a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6Z"
          stroke="currentColor"
          strokeWidth="1.7"
        />
      </svg>
    );
  }

  if (type === "waves") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={iconClass} fill="none">
        <path
          d="M4 8c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2M4 14c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "moon") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={iconClass} fill="none">
        <path
          d="M19.2 15.7A7.2 7.2 0 0 1 8.3 4.8 7.8 7.8 0 1 0 19.2 15.7Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "toy") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={iconClass} fill="none">
        <path
          d="M8 10h8M12 6v8M6.5 4h11A2.5 2.5 0 0 1 20 6.5v9A4.5 4.5 0 0 1 15.5 20h-7A4.5 4.5 0 0 1 4 15.5v-9A2.5 2.5 0 0 1 6.5 4Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "heart") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={iconClass} fill="none">
        <path
          d="M20 8.9c0 5.1-8 9.1-8 9.1s-8-4-8-9.1A4.1 4.1 0 0 1 11 6a4.1 4.1 0 0 1 7 2.9Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={iconClass} fill="none">
      <path
        d="M7.5 17.5h9a4 4 0 0 0 .4-8A5.5 5.5 0 0 0 6.2 8.2 4.7 4.7 0 0 0 7.5 17.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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

      <section
        aria-label="De ce părinții folosesc calculatorul de somn"
        className="bg-white px-5 py-8 sm:px-8 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-3 md:grid-cols-4">
          {[
            "Folosit zilnic de părinți cu copii între 0 și 3 ani",
            "Recomandări orientative și ușor de adaptat",
            "Fără cont și gratuit",
            "Creat de un părinte pentru alți părinți",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-2xl bg-white/70 px-5 py-4 shadow-sm shadow-slate-100 ring-1 ring-slate-100/80 backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-md hover:shadow-sky-100/60 md:rounded-full"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-sm font-black text-emerald-600 ring-1 ring-emerald-100">
                ✓
              </span>
              <p className="text-sm font-semibold leading-6 text-slate-700">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[linear-gradient(135deg,_#fffdfb_0%,_#f7fbff_52%,_#fff7f1_100%)] p-6 shadow-xl shadow-slate-100/80 sm:p-8 lg:p-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase text-sky-700">
              Cum funcționează
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Primești un reper orientativ în doar 3 pași
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Fără reguli rigide sau promisiuni perfecte. Doar un punct de
              pornire mai clar.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {howItWorksSteps.map((step, index) => (
              <div
                key={step.title}
                className="group rounded-3xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-100/70 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-100/60"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-black ring-1 ${step.accent}`}
                >
                  {step.icon}
                </div>
                <p className="mt-6 text-sm font-bold uppercase text-slate-400">
                  Pasul {index + 1}
                </p>
                <h3 className="mt-2 text-xl font-bold text-slate-950">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  {step.text}
                </p>
              </div>
            ))}
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
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[linear-gradient(135deg,_#fff8f4_0%,_#f8fbff_48%,_#fffaf5_100%)] p-6 shadow-xl shadow-rose-100/35 sm:p-8 lg:p-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase text-rose-700">
              Semne că bebe ar putea fi obosit
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Semne că bebe ar putea avea nevoie de somn
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Fiecare copil este diferit, dar aceste semne apar frecvent
              înainte de somn.
            </p>
          </div>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tiredSigns.map((sign) => (
              <div
                key={sign.title}
                className="group rounded-3xl border border-white/80 bg-white p-6 shadow-lg shadow-slate-100/70 ring-1 ring-slate-100/70 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-100/50"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ring-1 transition duration-300 group-hover:scale-105 ${sign.accent}`}
                >
                  <TiredSignIcon type={sign.icon} />
                </div>
                <h3 className="mt-6 text-xl font-bold tracking-tight text-slate-950">
                  {sign.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Poate fi un semnal blând că ritmul zilei se apropie de un
                  moment de odihnă.
                </p>
              </div>
            ))}
          </div>
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

      <section className="bg-white px-5 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-bold uppercase text-sky-700">
            Întrebări frecvente
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
            FAQ despre calculatorul de somn pentru bebe.
          </h2>
          <FAQAccordion items={faqItems} className="mt-7" />
        </div>
      </section>

      <Footer />
    </main>
  );
}

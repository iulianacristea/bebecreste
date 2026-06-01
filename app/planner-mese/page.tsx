import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { FAQAccordion } from "@/src/components/FAQAccordion";
import { Footer } from "@/src/components/Footer";
import { MealPlanner } from "@/src/components/MealPlanner";
import { Navbar } from "@/src/components/Navbar";

export const metadata: Metadata = {
  title: "Planner mese copii | Idei de mese pentru bebe și toddler",
  description:
    "Planner mese copii pentru idei simple de mic dejun, prânz, cină și gustări, adaptate vârstei, alergiilor și alimentelor disponibile.",
  keywords: [
    "planner mese copii",
    "planner mese bebe",
    "diversificare mese copil",
    "meniu bebe 6 luni",
    "idei mese bebe",
    "idei mese copii",
    "retete copii mici",
    "copil mofturos la mancare",
    "alimente diversificare",
  ],
  alternates: {
    canonical: "/planner-mese",
  },
  openGraph: {
    title: "Planner mese copii | Idei simple pentru bebe și toddler",
    description:
      "Generează idei orientative de mese pentru copil, în funcție de vârstă, alergii și ingredientele disponibile acasă.",
    url: "/planner-mese",
    siteName: "BebeCrește.ro",
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: "/mealprep/bebe-mananca.jpeg",
        width: 1200,
        height: 630,
        alt: "Copil mic lângă o masă sănătoasă",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Planner mese copii | Idei simple de mese",
    description:
      "Primești idei simple de mese pentru bebeluși și copii mici, fără presiune.",
    images: ["/mealprep/bebe-mananca.jpeg"],
  },
};

const howItWorksSteps = [
  {
    title: "Completezi câteva detalii",
    text: "Vârsta, eventualele alergii și alimentele pe care le ai deja acasă.",
  },
  {
    title: "Primești idei pentru zi",
    text: "Plannerul propune variante pentru mic dejun, prânz, cină și gustare.",
  },
  {
    title: "Ajustezi după copil",
    text: "Folosești recomandarea ca punct de pornire, nu ca regulă strictă.",
  },
];

const relatedArticles = [
  {
    title: "Idei de mese pentru copil mofturos",
    href: "/blog/idei-de-mese-pentru-copil-mofturos",
    text: "Soluții blânde pentru zilele în care copilul refuză farfuria.",
  },
  {
    title: "Alimente recomandate și de evitat în diversificare",
    href: "/blog/alimente-recomandate-si-de-evitat-in-diversificare",
    text: "Repere simple despre ce poți introduce și ce merită evitat.",
  },
  {
    title: "Cât mănâncă un copil de 1 an",
    href: "/blog/cat-trebuie-sa-manance-copilul-in-varsta-de-un-an",
    text: "Porții, apetit variabil și ritmul meselor după primul an.",
  },
];

const faqItems = [
  {
    question: "Plannerul de mese înlocuiește sfatul medicului?",
    answer:
      "Nu. Plannerul oferă idei orientative și nu înlocuiește recomandările pediatrului, mai ales în caz de alergii, probleme de creștere sau alimentație specială.",
  },
  {
    question: "Pot adapta ideile dacă nu am toate ingredientele?",
    answer:
      "Da. Ideile sunt puncte de pornire. Poți înlocui ingredientele cu alimente deja tolerate de copil și potrivite vârstei.",
  },
  {
    question: "Ce fac dacă cel mic refuză sugestiile?",
    answer:
      "Refuzurile sunt frecvente la copiii mici. Păstrează porțiile mici, oferă un aliment familiar și reîncearcă fără presiune în altă zi.",
  },
];

export default function PlannerMesePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff7f1] text-slate-900">
      <Navbar />

      <section className="relative px-5 pb-12 pt-10 sm:px-8 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(186,230,253,0.72),_transparent_34%),radial-gradient(circle_at_82%_12%,_rgba(254,205,211,0.72),_transparent_30%),linear-gradient(135deg,_#fff7f1_0%,_#f8fbff_48%,_#fff1f7_100%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.88fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full border border-rose-200 bg-white/75 px-4 py-2 text-sm font-semibold text-rose-700 shadow-sm">
              Planner mese copii
            </span>
            <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-tight tracking-tight text-slate-950 sm:text-6xl lg:text-[4.5rem]">
              Idei simple de mese pentru bebeluși și copii mici.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Completează câteva detalii și primești idei orientative pentru
              mic dejun, prânz, cină și gustare, adaptate vârstei, alergiilor
              și alimentelor pe care le ai deja acasă.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#planner"
                className="inline-flex justify-center rounded-full bg-slate-950 px-7 py-4 text-base font-semibold text-white shadow-xl shadow-slate-900/15 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-300 active:translate-y-0"
              >
                Generează idei de mese
              </a>
              <Link
                href="/blog/alimente-de-evitat-in-diversificare"
                className="inline-flex justify-center rounded-full border border-rose-100 bg-white/80 px-7 py-4 text-base font-semibold text-slate-700 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-4 focus:ring-rose-100 active:translate-y-0"
              >
                Vezi alimente de evitat
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-white p-3 shadow-2xl shadow-rose-200/35">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-rose-50 sm:aspect-[5/6] lg:aspect-[4/5]">
              <Image
                src="/mealprep/bebe-mananca.jpeg"
                alt="Copil mic lângă o masă sănătoasă"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 44vw"
                className="object-cover object-center"
              />
            </div>
            <div className="grid gap-3 p-4 sm:grid-cols-3">
              {["Fără presiune", "Idei rapide", "Adaptat vârstei"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-rose-50 px-4 py-3 text-center text-sm font-bold text-rose-700"
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
        id="planner"
        className="bg-white px-5 py-12 sm:px-8 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-bold uppercase text-emerald-700">
              Planificare simplă
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              Construiește o zi de mese pornind de la ce ai deja.
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Rezultatul este orientativ și te ajută să iei o decizie mai
              ușor, mai ales în zilele în care nu mai ai inspirație.
            </p>
          </div>
          <MealPlanner />
        </div>
      </section>

      <section className="bg-white px-5 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#fff8f4] p-6 shadow-xl shadow-rose-100/45 sm:p-8 lg:p-10">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-rose-700">
              Cum funcționează
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              Trei pași simpli pentru mese mai clare.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {howItWorksSteps.map((step, index) => (
              <div key={step.title} className="rounded-[1.5rem] bg-white p-5 shadow-sm">
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
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-[2rem] bg-sky-50 p-6 shadow-lg shadow-sky-100/50 sm:p-8">
            <p className="text-xl font-bold leading-8 text-slate-950">
              Creat pentru zile reale, nu pentru farfurii perfecte.
            </p>
            <div className="mt-6 space-y-3">
              {[
                "Recomandări orientative",
                "Ton blând, fără vină",
                "Adaptabil pentru fiecare copil",
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
              De ce ajută
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              Când ai un copil mic, mesele se schimbă de la o etapă la alta.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Uneori ai nevoie doar de un punct de pornire: o idee simplă de
              mic dejun, o combinație pentru prânz sau o gustare potrivită
              vârstei. Plannerul BebeCrește a fost gândit ca un ajutor calm,
              pentru părinți care vor mai multă claritate și mai puțină
              presiune la masă.
            </p>
            <p className="mt-4 text-sm leading-6 text-slate-500">
              Informațiile nu înlocuiesc sfatul medicului. Dacă există alergii,
              dificultăți de creștere sau îngrijorări legate de alimentație,
              discută cu pediatrul.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#fff7f1] px-5 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-bold uppercase text-emerald-700">
            Ghid SEO pentru părinți
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
            Idei de mese pentru bebeluși, diversificare și copii mici.
          </h2>
          <div className="mt-5 space-y-4 text-base leading-7 text-slate-600">
            <p>
              Plannerul de mese pentru copii te ajută să găsești idei simple
              pentru mic dejun, prânz, cină și gustări, în funcție de vârsta
              copilului și de alimentele disponibile acasă.
            </p>
            <p>
              Poți folosi recomandările ca inspirație pentru diversificare,
              mese după vârsta de 1 an, copii mofturoși sau zile în care vrei
              un meniu mai ușor de organizat. Fiecare sugestie rămâne
              orientativă și trebuie adaptată copilului tău.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase text-rose-700">
                Citește mai departe
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                Articole utile pentru mese mai liniștite.
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-300"
            >
              Toate articolele
            </Link>
          </div>

          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {relatedArticles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="rounded-[1.5rem] border border-slate-100 bg-white p-5 shadow-lg shadow-slate-100/70 transition hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-rose-100"
              >
                <h3 className="text-lg font-bold leading-snug text-slate-950">
                  {article.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {article.text}
                </p>
                <p className="mt-5 text-sm font-bold text-rose-700">
                  Citește articolul →
                </p>
              </Link>
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
            FAQ despre plannerul de mese.
          </h2>
          <FAQAccordion items={faqItems} className="mt-7" />
        </div>
      </section>

      <Footer />
    </main>
  );
}

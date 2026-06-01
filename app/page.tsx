import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { EmailCapture } from "@/src/components/EmailCapture";
import { FAQAccordion } from "@/src/components/FAQAccordion";
import { Footer } from "@/src/components/Footer";
import { Hero } from "@/src/components/Hero";
import { MobileStickyCta } from "@/src/components/MobileStickyCta";
import { Navbar } from "@/src/components/Navbar";

export const metadata: Metadata = {
  title: "BebeCrește | Somn bebe, planner mese și rutine pentru părinți",
  description:
    "Bebe nu doarme sau mesele sunt greu de organizat? BebeCrește oferă calculator de somn, planner de mese și repere blânde pentru părinți.",
  keywords: [
    "calculator somn copil",
    "calculator somn bebe",
    "planner mese copil",
    "planner mese bebe",
    "program somn copil",
    "idei mese copil",
    "rutine copii",
    "bebe nu doarme",
    "copil nu doarme",
  ],
  alternates: {
    canonical: "https://bebecreste.ro",
  },
  openGraph: {
    title: "BebeCrește | Somn bebe, mese și rutine pentru părinți",
    description:
      "Calculator de somn, planner de mese și ghiduri clare pentru părinți care vor mai multă liniște în rutina copilului.",
    url: "https://bebecreste.ro",
    siteName: "BebeCrește.ro",
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: "/homepage/mama-bebe.jpeg",
        width: 1200,
        height: 630,
        alt: "Părinte cu bebeluș, pentru BebeCrește.ro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BebeCrește | Somn bebe, mese și rutine",
    description:
      "Repere simple pentru somnul, mesele și rutina copilului tău.",
    images: ["/homepage/mama-bebe.jpeg"],
  },
};

const capabilityCards = [
  {
    title: "Calculator somn copil",
    description:
      "Află când ar putea fi următoarea fereastră de somn și cum poți ajusta ziua copilului.",
    href: "/calculator-somn",
    cta: "Află următorul somn",
    image: "/homepage/bebe-doarme.jpeg",
    imageAlt: "Bebeluș dormind liniștit",
    accent: "bg-sky-50 text-sky-700 ring-sky-100",
    label: "Somn",
  },
  {
    title: "Planner mese copil",
    description:
      "Primești idei simple de mese, adaptate vârstei, preferințelor și alimentelor disponibile.",
    href: "/planner-mese",
    cta: "Vezi idei de mese",
    image: "/homepage/bebe-mananca.jpeg",
    imageAlt: "Mâncare sănătoasă pentru copil mic",
    accent: "bg-rose-50 text-rose-700 ring-rose-100",
    label: "Mese",
  },
];

const benefitPoints = [
  "Nu mai ghicești programul copilului",
  "Ai idei simple pentru mesele zilnice",
  "Înțelegi mai bine nevoile copilului",
  "Construiești rutine mai liniștite",
];

const aboutValues = [
  {
    title: "Simplu",
    description:
      "Repere clare, ușor de înțeles, pentru momentele în care ai nevoie de un punct de pornire rapid.",
    accent: "bg-sky-50 text-sky-700 ring-sky-100",
  },
  {
    title: "Practic",
    description:
      "Idei și instrumente pentru rutine de somn, mese și organizare, gândite pentru viața reală de acasă.",
    accent: "bg-emerald-50 text-emerald-700 ring-emerald-100",
  },
  {
    title: "Prietenos cu părinții",
    description:
      "Fără presiune și fără reguli rigide, doar sprijin blând pentru zile mai așezate cu copilul tău.",
    accent: "bg-rose-50 text-rose-700 ring-rose-100",
  },
];

const socialProofStats = [
  {
    value: "1.200+",
    label: "Programe de somn generate",
    accent: "text-sky-700",
  },
  {
    value: "800+",
    label: "Planuri de mese create",
    accent: "text-rose-700",
  },
  {
    value: "500+",
    label: "Părinți ajutați",
    accent: "text-emerald-700",
  },
];

const blogPreviewPosts = [
  {
    title: "Idei de mese pentru copil mofturos",
    href: "/blog/idei-de-mese-pentru-copil-mofturos",
    text: "Idei simple pentru mic dejun, prânz, cină și gustări.",
  },
  {
    title: "Cât mănâncă un copil de 1 an",
    href: "/blog/cat-trebuie-sa-manance-copilul-in-varsta-de-un-an",
    text: "Repere despre porții, mese și apetitul copilului.",
  },
  {
    title: "Program de somn pentru bebe de 6 luni",
    href: "/blog/program-de-somn-pentru-bebe-de-6-luni",
    text: "Ferestre de veghe, somnuri de zi și rutină blândă.",
  },
];

const faqItems = [
  {
    question: "Ce este BebeCrește?",
    answer:
      "BebeCrește este un loc cu repere orientative pentru părinți despre somn, mese și rutine în primii ani.",
  },
  {
    question: "Instrumentele sunt gratuite?",
    answer:
      "Da. Calculatorul de somn și plannerul de mese pot fi folosite gratuit, fără cont.",
  },
  {
    question: "Recomandările înlocuiesc sfatul medicului?",
    answer:
      "Nu. Informațiile sunt orientative și nu înlocuiesc sfatul pediatrului sau al unui specialist.",
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
        logo: "https://bebecreste.ro/bebecreste-logo.webp",
        image: "https://bebecreste.ro/homepage/mama-bebe.jpeg",
      },
      {
        "@type": "WebSite",
        "@id": "https://bebecreste.ro/#website",
        name: "BebeCrește.ro",
        url: "https://bebecreste.ro",
        description:
          "Repere simple pentru părinți despre somn, mese și rutine în primii ani, inclusiv atunci când bebe nu doarme.",
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
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "RON",
        },
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
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "RON",
        },
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

      <section className="bg-white px-5 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-rose-100 bg-[#fff8f4] p-6 shadow-xl shadow-rose-100/45 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase text-rose-700">
                Despre BebeCrește
              </p>
              <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl">
                Un proiect creat de părinți pentru părinți.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                BebeCrește ajută părinții să găsească repere orientative pentru
                rutine de somn, mese și organizarea zilei, într-un mod calm și
                ușor de aplicat. Informațiile oferite sunt orientative și nu
                înlocuiesc sfatul medicului.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-3">
              {aboutValues.map((value) => (
                <div
                  key={value.title}
                  className="rounded-[1.5rem] border border-white/85 bg-white p-5 shadow-lg shadow-rose-100/45"
                >
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase ring-1 ${value.accent}`}
                  >
                    {value.title}
                  </span>
                  <p className="mt-4 text-sm font-semibold leading-6 text-slate-700">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 pb-12 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-xl shadow-slate-100/80">
          <div className="grid gap-0 md:grid-cols-3">
            {socialProofStats.map((stat, index) => (
              <div
                key={stat.label}
                className={`p-6 text-center sm:p-8 ${
                  index > 0
                    ? "border-t border-slate-100 md:border-l md:border-t-0"
                    : ""
                }`}
              >
                <p
                  className={`text-4xl font-extrabold tracking-tight sm:text-5xl ${stat.accent}`}
                >
                  {stat.value}
                </p>
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.12em] text-slate-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase text-emerald-700">
              Instrumente utile pentru părinți
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              Două instrumente care îți simplifică ziua
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Începi cu ce ai nevoie acum: somn mai clar și idei rapide de
              mese.
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-5xl gap-5 md:grid-cols-2">
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
                    {card.label}
                  </span>

                  <h3 className="mt-4 text-xl font-bold text-slate-950 transition duration-200 group-hover:text-rose-700">
                    {card.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {card.description}
                  </p>

                  <p className="mt-5 text-sm font-bold text-rose-700">
                    {card.cta} →
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-xl shadow-slate-100/80">
            <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="bg-gradient-to-br from-sky-50 via-white to-rose-50 p-6 sm:p-8">
                <p className="text-sm font-bold uppercase text-emerald-700">
                  Repere pentru fiecare zi
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                  Mai puțin stres. Mai multă claritate.
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  Fiecare copil este diferit. Aici găsești repere care te ajută
                  să te adaptezi, nu reguli rigide.
                </p>
              </div>

              <div className="grid gap-3 bg-white p-4 sm:grid-cols-2 sm:p-6">
                {benefitPoints.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex min-h-24 items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50/70 p-4 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-emerald-100 hover:bg-white hover:shadow-md"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-sm font-black text-emerald-700 ring-1 ring-emerald-100">
                      ✓
                    </span>
                    <span className="pt-1 text-sm font-bold leading-6 text-slate-800">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] bg-[#fff8f4] p-6 shadow-xl shadow-rose-100/45 sm:p-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:p-10">
          <div>
            <p className="text-sm font-bold uppercase text-rose-700">
              Povestea din spatele BebeCrește
            </p>

            <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl">
              BebeCrește a pornit din viața reală de părinte.
            </h2>

            <div className="mt-5 space-y-4 text-base leading-7 text-slate-650">
              <p>
                Sunt mama unei fetițe de 3 ani, Victoria. Odată cu ea am
                descoperit cât de mult se schimbă totul de la o etapă la alta:
                somnul, mesele, rutina și chiar lucrurile aparent simple din
                fiecare zi.
              </p>
              <p>
                Am început să citesc mult despre parenting, somnul bebelușilor
                și alimentația copiilor mici pentru că îmi doream să înțeleg
                mai bine nevoile copilului meu, fără presiune și fără reguli
                imposibil de urmat.
              </p>
              <p>
                Dar de multe ori informațiile găsite online erau prea
                complicate, prea contradictorii sau făcute să te simți că faci
                ceva greșit dacă nu urmezi „programul perfect”.
              </p>
              <p>
                Așa a apărut ideea BebeCrește: un loc simplu, calm și clar,
                unde părinții pot găsi repere orientative pentru somn, mese,
                diversificare, rutine și viața de zi cu zi cu un copil mic.
              </p>
            </div>

            <p className="mt-6 rounded-2xl bg-white/75 p-4 text-base font-semibold leading-7 text-slate-800 shadow-sm shadow-rose-100/40">
              Nu cred în perfecțiune și nici în reguli rigide. Cred că fiecare
              copil este diferit și că părinții au nevoie, înainte de toate, de
              mai multă claritate și mai puțin stres.
            </p>
          </div>

          <div className="rounded-[1.75rem] bg-white p-5 shadow-lg shadow-rose-100/60 sm:p-6">
            <div className="flex min-h-72 flex-col justify-between rounded-[1.35rem] bg-[#f7fbff] p-6">
              <p className="text-xl font-bold leading-8 text-slate-950">
                Creat cu gândul la părinți care vor mai multă claritate și mai
                puțin stres.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  "Creat de o mamă",
                  "Inspirat din viața reală",
                  "Repere blânde, nu reguli rigide",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-full bg-white px-4 py-3 text-sm font-bold text-slate-700 shadow-sm"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                      ✓
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase text-emerald-700">
                Ghiduri utile
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                Citește mai departe
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                Articole clare pentru întrebările reale despre somn, mese și
                rutine.
              </p>
            </div>

            <Link
              href="/blog"
              className="inline-flex rounded-full border border-rose-100 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-rose-50 focus:outline-none focus:ring-4 focus:ring-rose-100"
            >
              Vezi toate articolele
            </Link>
          </div>

          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {blogPreviewPosts.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="rounded-[1.5rem] border border-slate-100 bg-white p-5 shadow-lg shadow-slate-100/70 transition hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-rose-100"
              >
                <h3 className="text-lg font-bold text-slate-950">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {post.text}
                </p>
                <p className="mt-5 text-sm font-bold text-rose-700">
                  Citește articolul →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <EmailCapture className="bg-white px-5 py-10 sm:px-8 lg:px-10" />

      <section className="bg-white px-5 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase text-sky-700">
            Întrebări frecvente
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
            Răspunsuri rapide pentru părinți
          </h2>
          <FAQAccordion items={faqItems} className="mt-7" />
        </div>
      </section>

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
              Află următorul somn
            </Link>

            <Link
              href="/planner-mese"
              className="inline-flex w-full items-center justify-center rounded-full border border-rose-100 bg-white/80 px-7 py-4 text-base font-semibold text-slate-700 shadow-sm shadow-rose-100/60 transition duration-200 hover:-translate-y-0.5 hover:border-rose-200 hover:bg-white hover:shadow-md hover:shadow-rose-100/80 focus:outline-none focus:ring-4 focus:ring-rose-100 active:translate-y-0 sm:w-auto"
            >
              Vezi idei de mese
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <MobileStickyCta
        links={[
          { href: "/calculator-somn", label: "Află următorul somn" },
          { href: "/planner-mese", label: "Vezi idei de mese" },
        ]}
      />
    </main>
  );
}

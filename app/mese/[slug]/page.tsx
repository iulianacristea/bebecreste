import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FAQAccordion } from "@/src/components/FAQAccordion";
import { Footer } from "@/src/components/Footer";
import { Navbar } from "@/src/components/Navbar";
import {
  getAllMealAgePages,
  getMealAgePageBySlug,
  mealDisclaimer,
} from "@/src/lib/mealAgePages";

type MealAgePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const mealSections = [
  {
    key: "breakfastIdeas",
    title: "Mic dejun",
    eyebrow: "Început de zi",
    accent: "text-sky-700 bg-sky-50 ring-sky-100",
  },
  {
    key: "lunchIdeas",
    title: "Prânz",
    eyebrow: "Masă principală",
    accent: "text-emerald-700 bg-emerald-50 ring-emerald-100",
  },
  {
    key: "dinnerIdeas",
    title: "Cină",
    eyebrow: "Seară calmă",
    accent: "text-rose-700 bg-rose-50 ring-rose-100",
  },
  {
    key: "snackIdeas",
    title: "Gustări",
    eyebrow: "Între mese",
    accent: "text-amber-700 bg-amber-50 ring-amber-100",
  },
] as const;

export function generateStaticParams() {
  return getAllMealAgePages().map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({
  params,
}: MealAgePageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getMealAgePageBySlug(slug);

  if (!page) {
    return {};
  }

  return {
    title: page.seoTitle,
    description: page.seoDescription,
    alternates: {
      canonical: `/mese/${page.slug}`,
    },
    openGraph: {
      title: page.seoTitle,
      description: page.seoDescription,
      url: `/mese/${page.slug}`,
      siteName: "BebeCrește.ro",
      locale: "ro_RO",
      type: "article",
      images: [
        {
          url: "/mealprep/bebe-mananca.jpeg",
          width: 1200,
          height: 630,
          alt: `Idei de mese pentru copil de ${page.ageMonths} luni`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.seoTitle,
      description: page.seoDescription,
      images: ["/mealprep/bebe-mananca.jpeg"],
    },
  };
}

export default async function MealAgePage({ params }: MealAgePageProps) {
  const { slug } = await params;
  const page = getMealAgePageBySlug(slug);

  if (!page) {
    notFound();
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((item) => ({
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(254,205,211,0.72),_transparent_34%),radial-gradient(circle_at_82%_12%,_rgba(186,230,253,0.72),_transparent_30%),linear-gradient(135deg,_#fff7f1_0%,_#fffdf8_48%,_#f7fbff_100%)]" />
        <div className="relative mx-auto max-w-6xl">
          <Link
            href="/planner-mese"
            className="inline-flex rounded-full border border-rose-200 bg-white/75 px-4 py-2 text-sm font-semibold text-rose-700 shadow-sm transition hover:bg-white focus:outline-none focus:ring-4 focus:ring-rose-100"
          >
            Planner mese copii
          </Link>

          <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            {page.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            {page.description}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {mealSections.map((section) => (
              <div
                key={section.key}
                className="rounded-[1.5rem] border border-white/80 bg-white/85 p-5 shadow-lg shadow-rose-100/35 backdrop-blur"
              >
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase ring-1 ${section.accent}`}
                >
                  {section.eyebrow}
                </span>
                <p className="mt-3 text-xl font-bold text-slate-950">
                  {section.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-emerald-700">
              Exemple de meniu
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              Idei pentru copil de {page.ageMonths} luni
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Alege una sau două idei și adaptează textura, porția și
              ingredientele la copilul tău.
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {mealSections.map((section) => (
              <div
                key={section.key}
                className="rounded-[2rem] border border-slate-100 bg-white p-5 shadow-xl shadow-slate-100/70"
              >
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase ring-1 ${section.accent}`}
                >
                  {section.eyebrow}
                </span>
                <h3 className="mt-4 text-2xl font-bold text-slate-950">
                  {section.title}
                </h3>
                <div className="mt-5 grid gap-3">
                  {page[section.key].map((idea) => (
                    <div
                      key={idea}
                      className="flex gap-3 rounded-2xl bg-slate-50/80 p-4 text-sm font-semibold leading-6 text-slate-700 ring-1 ring-slate-100"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                      <p>{idea}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-[#fff8f4] p-6 shadow-xl shadow-rose-100/45 sm:p-8 lg:p-10">
          <p className="text-sm font-bold uppercase text-rose-700">
            Alimente de evitat
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-slate-950">
            Repere de siguranță pentru mesele copilului
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {page.foodsToAvoid.map((food) => (
              <div
                key={food}
                className="rounded-[1.5rem] bg-white p-5 text-sm font-semibold leading-6 text-slate-700 shadow-sm"
              >
                {food}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-bold uppercase text-sky-700">FAQ</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
            Întrebări frecvente despre meniul la {page.ageMonths} luni
          </h2>
          <FAQAccordion items={page.faqs} className="mt-7" />
        </div>
      </section>

      <section className="bg-white px-5 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl rounded-[1.5rem] border border-rose-100 bg-rose-50/60 p-5 text-sm leading-6 text-slate-700">
          <p className="font-bold text-slate-950">Disclaimer</p>
          <p className="mt-2">{mealDisclaimer}</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

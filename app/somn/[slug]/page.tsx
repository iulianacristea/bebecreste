import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FAQAccordion } from "@/src/components/FAQAccordion";
import { Footer } from "@/src/components/Footer";
import { Navbar } from "@/src/components/Navbar";
import {
  getAllSleepAgePages,
  getSleepAgePageBySlug,
  medicalDisclaimer,
} from "@/src/lib/sleepAgePages";

type SleepAgePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllSleepAgePages().map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({
  params,
}: SleepAgePageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSleepAgePageBySlug(slug);

  if (!page) {
    return {};
  }

  return {
    title: page.seoTitle,
    description: page.seoDescription,
    alternates: {
      canonical: `/somn/${page.slug}`,
    },
    openGraph: {
      title: page.seoTitle,
      description: page.seoDescription,
      url: `/somn/${page.slug}`,
      siteName: "BebeCrește.ro",
      locale: "ro_RO",
      type: "article",
      images: [
        {
          url: "/sleepcalculator/bebe-doarme.jpeg",
          width: 1200,
          height: 630,
          alt: `Bebeluș dormind liniștit la ${page.ageMonths} luni`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.seoTitle,
      description: page.seoDescription,
      images: ["/sleepcalculator/bebe-doarme.jpeg"],
    },
  };
}

export default async function SleepAgePage({ params }: SleepAgePageProps) {
  const { slug } = await params;
  const page = getSleepAgePageBySlug(slug);

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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(186,230,253,0.72),_transparent_34%),radial-gradient(circle_at_82%_12%,_rgba(254,205,211,0.72),_transparent_30%),linear-gradient(135deg,_#fff7f1_0%,_#f8fbff_48%,_#fff1f7_100%)]" />
        <div className="relative mx-auto max-w-6xl">
          <Link
            href="/calculator-somn"
            className="inline-flex rounded-full border border-sky-200 bg-white/75 px-4 py-2 text-sm font-semibold text-sky-700 shadow-sm transition hover:bg-white focus:outline-none focus:ring-4 focus:ring-sky-100"
          >
            Calculator somn bebe
          </Link>

          <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            {page.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            {page.description}
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-[1.5rem] border border-white/80 bg-white/85 p-5 shadow-lg shadow-sky-100/50 backdrop-blur">
              <p className="text-sm font-bold uppercase text-sky-700">
                Somnuri recomandate
              </p>
              <p className="mt-2 text-3xl font-bold text-slate-950">
                {page.napRecommendation}
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-white/80 bg-white/85 p-5 shadow-lg shadow-rose-100/50 backdrop-blur">
              <p className="text-sm font-bold uppercase text-rose-700">
                Fereastră de veghe
              </p>
              <p className="mt-2 text-3xl font-bold text-slate-950">
                {page.wakeWindow}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase text-emerald-700">
              Exemplu de program zilnic
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              O zi orientativă pentru bebe de {page.ageMonths} luni
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Folosește programul ca punct de pornire. Ora exactă poate varia
              în funcție de trezire, durata somnurilor și semnele copilului.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-100 bg-white p-4 shadow-xl shadow-slate-100/80 sm:p-5">
            <div className="grid gap-3">
              {page.dailySchedule.map((item) => (
                <div
                  key={`${item.time}-${item.label}`}
                  className="grid grid-cols-[5rem_1fr] gap-3 rounded-2xl bg-slate-50/80 p-3 ring-1 ring-slate-100"
                >
                  <div className="flex flex-col items-center justify-center rounded-xl bg-emerald-50 px-2 py-3 text-center ring-1 ring-emerald-100">
                    <span className="text-sm font-bold text-emerald-700">
                      {item.time}
                    </span>
                    <span className="mt-2 h-2 w-2 rounded-full bg-emerald-400" />
                  </div>
                  <div className="rounded-xl bg-white p-3 ring-1 ring-white">
                    <h3 className="text-sm font-bold text-slate-950">
                      {item.label}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-[#fff8f4] p-6 shadow-xl shadow-rose-100/45 sm:p-8 lg:p-10">
          <p className="text-sm font-bold uppercase text-rose-700">
            Recomandări rapide
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-slate-950">
            Cum folosești reperele fără presiune
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              "Urmărește semnele de oboseală, nu doar ceasul.",
              "Ajustează culcarea dacă somnurile de zi au fost foarte scurte.",
              "Păstrează rutina de seară simplă și previzibilă.",
            ].map((recommendation) => (
              <div
                key={recommendation}
                className="rounded-[1.5rem] bg-white p-5 text-sm font-semibold leading-6 text-slate-700 shadow-sm"
              >
                {recommendation}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-bold uppercase text-sky-700">FAQ</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
            Întrebări frecvente despre somnul la {page.ageMonths} luni
          </h2>
          <FAQAccordion items={page.faqs} className="mt-7" />
        </div>
      </section>

      <section className="bg-white px-5 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl rounded-[1.5rem] border border-rose-100 bg-rose-50/60 p-5 text-sm leading-6 text-slate-700">
          <p className="font-bold text-slate-950">Disclaimer medical</p>
          <p className="mt-2">{medicalDisclaimer}</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

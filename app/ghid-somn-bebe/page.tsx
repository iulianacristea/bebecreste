import Image from "next/image";
import type { Metadata } from "next";
import { Footer } from "@/src/components/Footer";
import { Navbar } from "@/src/components/Navbar";
import { SleepGuideSignupForm } from "@/src/components/SleepGuideSignupForm";

export const metadata: Metadata = {
  title: "Ghid gratuit pentru somnul bebelușului",
  description:
    "Primește ghidul gratuit BebeCrește pentru somnul bebelușului: rutine blânde, ferestre de veghe și idei simple pentru seri mai liniștite.",
  alternates: {
    canonical: "/ghid-somn-bebe",
  },
  openGraph: {
    title: "Ghid gratuit pentru somnul bebelușului",
    description:
      "Idei simple pentru rutine mai liniștite, direct pe email.",
    url: "/ghid-somn-bebe",
    images: [
      {
        url: "/sleepcalculator/bebe-doarme.jpeg",
        width: 1200,
        height: 630,
        alt: "Bebeluș dormind liniștit",
      },
    ],
  },
};

const benefits = [
  "Înțelegi mai ușor când apare oboseala.",
  "Primești repere simple pentru ferestrele de veghe.",
  "Ai idei blânde pentru o rutină de seară mai previzibilă.",
];

const guideContents = [
  {
    title: "Rutine de somn pe înțelesul părinților",
    text: "Pași simpli pentru dimineți, somnuri de zi și seară, fără reguli rigide.",
  },
  {
    title: "Ferestre de veghe orientative",
    text: "Repere utile ca să știi când poate fi momentul potrivit pentru următorul somn.",
  },
  {
    title: "Semne de oboseală",
    text: "Indiciile mici care te pot ajuta să reacționezi înainte ca ziua să devină prea agitată.",
  },
];

const medicalDisclaimer =
  "Informațiile din ghid sunt orientative și nu înlocuiesc sfatul medicului pediatru sau al unui specialist. Pentru probleme medicale, alimentație specială, dificultăți persistente de somn sau orice îngrijorare legată de sănătatea copilului, consultă un specialist.";

export default function GhidSomnBebePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff7f1] text-slate-900">
      <Navbar />

      <section className="relative min-h-[680px] px-5 pb-16 pt-10 sm:px-8 lg:px-10">
        <Image
          src="/sleepcalculator/bebe-doarme.jpeg"
          alt="Bebeluș dormind liniștit"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/72 via-slate-900/46 to-rose-900/28" />
        <div className="relative mx-auto flex min-h-[560px] max-w-6xl flex-col justify-end">
          <p className="inline-flex w-fit rounded-full border border-white/30 bg-white/15 px-4 py-2 text-sm font-bold uppercase tracking-[0.12em] text-white shadow-sm backdrop-blur">
            Ghid gratuit
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Somnul bebelușului poate fi mai ușor de înțeles.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/86 sm:text-xl">
            Primește un ghid scurt, blând și practic pentru rutine mai
            liniștite, direct pe email.
          </p>
          <div className="mt-8 grid max-w-4xl gap-3 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-2xl border border-white/20 bg-white/14 p-4 text-sm font-semibold leading-6 text-white shadow-sm backdrop-blur"
              >
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase text-rose-700">
              Primește ghidul
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Lasă emailul și primești ghidul gratuit pentru somnul
              bebelușului.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Ghidul este gândit pentru părinți care vor mai multă claritate,
              mai puțină presiune și repere ușor de aplicat în zile reale.
            </p>
          </div>

          <SleepGuideSignupForm />
        </div>
      </section>

      <section className="bg-white px-5 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-[#fff8f4] p-6 shadow-xl shadow-rose-100/45 sm:p-8 lg:p-10">
          <p className="text-sm font-bold uppercase text-emerald-700">
            Ce primești în ghid
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-slate-950">
            Repere simple pentru somn, fără promisiuni perfecte.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {guideContents.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.5rem] border border-white/80 bg-white p-5 shadow-lg shadow-rose-100/35"
              >
                <h3 className="text-lg font-bold leading-snug text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl rounded-[1.5rem] border border-rose-100 bg-rose-50/60 p-5 text-sm leading-6 text-slate-700">
          <p className="font-bold text-slate-950">Disclaimer</p>
          <p className="mt-2">{medicalDisclaimer}</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/src/components/Footer";
import { Navbar } from "@/src/components/Navbar";

export const metadata: Metadata = {
  title: "Despre BebeCrește",
  description:
    "BebeCrește ajută părinții cu repere simple pentru somn, mese și rutine, într-un ton blând și fără presiune.",
  alternates: {
    canonical: "/despre-noi",
  },
  openGraph: {
    title: "Despre BebeCrește",
    description:
      "Repere simple și orientative pentru părinți despre somn, mese și rutine.",
    url: "/despre-noi",
  },
};

const values = [
  "Repere simple pentru zile reale",
  "Recomandări orientative",
  "Claritate fără presiune",
];

export default function DespreNoiPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff7f1] text-slate-900">
      <Navbar />

      <section className="relative px-5 pb-20 pt-10 sm:px-8 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(186,230,253,0.72),_transparent_34%),radial-gradient(circle_at_82%_12%,_rgba(254,205,211,0.72),_transparent_30%),linear-gradient(135deg,_#fff7f1_0%,_#f8fbff_48%,_#fff1f7_100%)]" />

        <div className="relative mx-auto max-w-5xl">
          <div className="rounded-[2rem] border border-white/75 bg-white/70 p-6 shadow-2xl shadow-rose-200/25 backdrop-blur sm:p-10 lg:p-12">
            <p className="inline-flex rounded-full border border-rose-100 bg-white/75 px-4 py-2 text-sm font-semibold text-rose-700 shadow-sm">
              BebeCrește.ro
            </p>

            <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl">
              Despre BebeCrește
            </h1>

            <div className="mt-6 max-w-3xl space-y-5 text-lg leading-8 text-slate-600">
              <p>
                BebeCrește ajută părinții cu repere simple pentru somn, mese și
                rutine.
              </p>
              <p>
                Recomandările sunt orientative și sunt gândite ca puncte de
                pornire ușor de adaptat la ritmul fiecărui copil.
              </p>
              <p>
                Site-ul este creat pentru părinți care vor mai multă claritate,
                fără presiune.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {values.map((value) => (
                <div
                  key={value}
                  className="rounded-2xl border border-white/80 bg-sky-50/70 px-4 py-4 text-sm font-semibold leading-6 text-slate-700 shadow-sm"
                >
                  {value}
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/calculator-somn"
                className="inline-flex justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/20 focus:outline-none focus:ring-4 focus:ring-slate-300 active:translate-y-0"
              >
                Calculator somn
              </Link>
              <Link
                href="/planner-mese"
                className="inline-flex justify-center rounded-full border border-rose-100 bg-white/85 px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-rose-50 hover:text-slate-950 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-rose-100 active:translate-y-0"
              >
                Planner mese
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

import Link from "next/link";
import { Features } from "@/src/components/Features";
import { Footer } from "@/src/components/Footer";
import { Hero } from "@/src/components/Hero";
import { HowItWorks } from "@/src/components/HowItWorks";
import { Navbar } from "@/src/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff7f1] text-slate-900">
      <Navbar />
      <Hero />
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
      <section className="bg-white px-5 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-rose-100 bg-gradient-to-br from-rose-50 via-white to-sky-50 p-6 text-center shadow-xl shadow-rose-100/45 sm:p-8">
          <p className="text-sm font-semibold uppercase text-rose-700">
            Gata de încercat?
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight text-slate-950">
            Primește rapid un reper pentru următorul somn.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-600">
            Completezi vârsta și ora trezirii, iar calculatorul îți oferă o
            recomandare orientativă pentru ziua copilului.
          </p>
          <Link
            href="/calculator-somn"
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-7 py-4 text-base font-semibold text-white shadow-xl shadow-slate-900/15 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-2xl hover:shadow-slate-900/20 focus:outline-none focus:ring-4 focus:ring-slate-300 active:translate-y-0 sm:w-auto"
          >
            Încearcă calculatorul de somn
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}

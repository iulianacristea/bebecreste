import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,_#fff7f1_0%,_#ffffff_45%,_#eef9ff_100%)] px-5 pb-14 pt-10 sm:px-8 lg:px-10 lg:pb-24 lg:pt-14">

      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-rose-200/30 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">

        <div className="relative z-10">
          <span className="inline-flex rounded-full border border-rose-100 bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-rose-700 shadow-sm backdrop-blur">
            Pentru părinți în primii ani
          </span>

          <h1 className="mt-7 text-5xl font-extrabold leading-[0.95] tracking-tight text-slate-950 sm:text-6xl lg:text-[5.2rem]">
            Află mai ușor
            <span className="block text-rose-600">
              când să doarmă
            </span>
            <span className="block">
              sau ce să
              <span className="text-sky-600"> mănânce</span>
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
            Primești un punct de pornire clar pentru somn și mese — în mai puțin de 30 de secunde, adaptat copilului tău.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/calculator-somn"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-slate-900/20 transition duration-200 hover:-translate-y-1 hover:bg-slate-800 hover:shadow-slate-900/30 focus:outline-none focus:ring-4 focus:ring-slate-300"
            >
              Calculează somnul
            </Link>

            <Link
              href="/planner-mese"
              className="inline-flex items-center justify-center rounded-full border border-rose-100 bg-white/90 px-8 py-4 text-base font-semibold text-slate-700 shadow-md transition duration-200 hover:-translate-y-1 hover:border-rose-200 hover:bg-white hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-rose-100"
            >
              Planifică mesele
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm font-medium text-slate-500">
            <span>Fără cont</span>
            <span className="h-1 w-1 rounded-full bg-slate-300" />
            <span>Gratuit</span>
            <span className="h-1 w-1 rounded-full bg-slate-300" />
            <span>Rezultat în ~30 secunde</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-rose-200/30 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/80 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.12)]">

            <div className="relative h-[540px] w-full lg:h-[720px]">
              <Image
                src="/homepage/mama-bebe2.jpeg"
                alt="Mamă cu bebeluș într-un moment liniștit acasă"
                fill
                priority
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative px-5 pb-16 pt-10 sm:px-8 lg:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(186,230,253,0.72),_transparent_34%),radial-gradient(circle_at_82%_12%,_rgba(254,205,211,0.72),_transparent_30%),linear-gradient(135deg,_#fff7f1_0%,_#f8fbff_48%,_#fff1f7_100%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-10 py-8 md:py-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-16">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-rose-200 bg-white/70 px-4 py-2 text-sm font-semibold text-rose-700 shadow-sm">
              Platformă premium pentru primii ani
            </p>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Rutine mai clare pentru somn, mese și joacă.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              BebeCrește aduce structură blândă în zilele aglomerate: calculezi
              rapid următoarea fereastră de somn și vezi ritmul copilului
              într-un mod calm, românesc și ușor de folosit.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/calculator-somn"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-4 text-base font-semibold text-white shadow-xl shadow-slate-900/15 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-2xl hover:shadow-slate-900/20 focus:outline-none focus:ring-4 focus:ring-slate-300 active:translate-y-0"
              >
                Încearcă calculatorul de somn
              </Link>
              <Link
                href="#rutine"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/75 px-7 py-4 text-base font-semibold text-slate-700 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white hover:shadow-md hover:shadow-slate-200/70 focus:outline-none focus:ring-4 focus:ring-rose-100 active:translate-y-0"
              >
                Explorează rutinele
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-2xl shadow-rose-200/40 backdrop-blur sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase text-sky-700">
                  Somn mai ușor de urmărit
                </p>
                <h2 className="mt-2 text-2xl font-bold text-slate-950">
                  Un reper blând pentru ziua copilului.
                </h2>
              </div>
              <span className="rounded-2xl bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-100">
                rapid
              </span>
            </div>

            <div className="mt-6 grid gap-3">
              {[
                "Vârsta copilului",
                "Ora ultimei treziri",
                "Numărul de somnuri",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-2xl bg-white/85 px-4 py-3 text-sm font-semibold text-slate-700 ring-1 ring-white"
                >
                  <span>{item}</span>
                  <span className="h-2.5 w-2.5 rounded-full bg-sky-300" />
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[1.5rem] bg-gradient-to-br from-emerald-50 to-sky-50 p-5 ring-1 ring-emerald-100">
              <p className="text-sm font-semibold uppercase text-emerald-700">
                Recomandare orientativă
              </p>
              <p className="mt-2 text-3xl font-bold text-slate-950">
                09:30 - 10:15
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Calculatorul complet este pe pagina dedicată, cu rezultate și
                explicații pentru fiecare etapă.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,_#fff7f1_0%,_#ffffff_48%,_#eef9ff_100%)] px-5 pb-14 pt-10 sm:px-8 lg:px-10 lg:pb-24 lg:pt-14">
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-rose-200/30 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:gap-14">
        <div className="relative z-10 max-w-3xl lg:max-w-none">
          <span className="inline-flex rounded-full border border-rose-100 bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-rose-700 shadow-sm backdrop-blur">
            Pentru zilele în care somnul și mesele par greu de așezat
          </span>

          <h1 className="mt-7 text-4xl font-extrabold leading-[1.04] tracking-tight text-slate-950 sm:text-6xl lg:text-[4.9rem]">
            Somnul bebelușului și mesele copilului,
            <span className="block text-rose-600">fără ghicit în fiecare zi</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            Primești repere rapide pentru următorul somn și idei de mese
            potrivite vârstei, ca ziua copilului să fie mai clară și mai calmă.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/calculator-somn"
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-slate-950 px-7 py-4 text-center text-base font-semibold text-white shadow-2xl shadow-slate-900/20 transition duration-200 hover:-translate-y-1 hover:bg-slate-800 hover:shadow-slate-900/30 focus:outline-none focus:ring-4 focus:ring-slate-300 sm:px-8"
            >
              Generează program de somn
            </Link>

            <Link
              href="/planner-mese"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-rose-100 bg-white/90 px-7 py-4 text-center text-base font-semibold text-slate-700 shadow-md transition duration-200 hover:-translate-y-1 hover:border-rose-200 hover:bg-white hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-rose-100 sm:px-8"
            >
              Creează plan de mese
            </Link>
          </div>

          <div className="mt-7 grid max-w-xl gap-3 sm:grid-cols-3">
            {[
              "Când nu știi la ce oră să-l culci",
              "Când rămâi fără idei de mâncare",
              "Când ai nevoie de un reper rapid",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/80 bg-white/75 px-4 py-3 text-sm font-semibold leading-5 text-slate-650 shadow-sm shadow-rose-100/45 backdrop-blur"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm font-medium text-slate-500">
            <span>Fără cont</span>
            <span className="h-1 w-1 rounded-full bg-slate-300" />
            <span>Gratuit</span>
            <span className="h-1 w-1 rounded-full bg-slate-300" />
            <span>Rezultat în aproximativ 30 secunde</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-rose-200/30 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/80 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
            <div className="relative h-[430px] w-full sm:h-[520px] lg:h-[690px]">
              <Image
                src="/homepage/mama-bebe2.jpeg"
                alt="Mamă cu bebeluș într-un moment liniștit acasă"
                fill
                priority
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="absolute inset-x-4 bottom-4 grid gap-3 sm:inset-x-6 sm:bottom-6 sm:grid-cols-2">
              <div className="rounded-[1.35rem] bg-white/92 p-4 shadow-lg shadow-slate-900/10 backdrop-blur">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-sky-700">
                  Somn
                </p>
                <p className="mt-1 text-sm font-bold leading-5 text-slate-900">
                  Program orientativ pentru următoarea fereastră de odihnă
                </p>
              </div>

              <div className="rounded-[1.35rem] bg-white/92 p-4 shadow-lg shadow-slate-900/10 backdrop-blur">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-rose-700">
                  Mese
                </p>
                <p className="mt-1 text-sm font-bold leading-5 text-slate-900">
                  Idei simple când nu mai știi ce să pregătești
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

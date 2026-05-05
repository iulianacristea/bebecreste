import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,_#fff7f1_0%,_#ffffff_45%,_#eef9ff_100%)] px-5 pb-14 pt-12 sm:px-8 lg:px-10 lg:pb-20">

      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-rose-200/30 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_0.95fr]">

        <div>
          <span className="inline-flex rounded-full border border-rose-100 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-wide text-rose-700 shadow-sm">
            Pentru părinți
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Somn și mese mai clare pentru copilul tău
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Primești repere simple pentru somn și mese — în mai puțin de 30 de secunde, adaptate copilului tău.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/calculator-somn"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-slate-900/20 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-slate-300"
            >
              Află următorul somn
            </Link>

            <Link
              href="/planner-mese"
              className="inline-flex items-center justify-center rounded-full border border-rose-100 bg-white/90 px-8 py-4 text-base font-semibold text-slate-700 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-rose-200 hover:bg-white hover:shadow-md focus:outline-none focus:ring-4 focus:ring-rose-100"
            >
              Vezi idei de mese
            </Link>
          </div>

          <p className="mt-5 text-sm font-medium text-slate-500">
            Fără cont • gratuit • rezultat în 30 secunde          </p>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-2xl shadow-rose-100/60">

            <Image
              src="/homepage/mama-bebe.jpeg"
              alt="Părinte cu copil într-un moment liniștit acasă"
              width={900}
              height={700}
              priority
              className="h-[440px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/80 p-4 shadow-lg backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-wide text-rose-600">
                Repere simple pentru fiecare zi
              </p>
              <p className="mt-1 text-base font-bold text-slate-900">
                Mai puțin stres. Mai multă claritate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
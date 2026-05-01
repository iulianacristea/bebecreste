import Link from "next/link";

export function Hero() {
  return (
    <section className="relative px-5 pb-12 pt-8 sm:px-8 lg:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,_rgba(254,205,211,0.5),_transparent_34%),radial-gradient(circle_at_85%_18%,_rgba(186,230,253,0.48),_transparent_32%),linear-gradient(135deg,_#fff8f3_0%,_#fffdfb_46%,_#f6fbff_100%)]" />
      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-start gap-8 py-8 md:py-10 lg:grid-cols-[1fr_0.92fr] lg:gap-10 lg:py-12">
          <div className="max-w-[46rem]">
            <p className="mb-6 inline-flex rounded-full border border-rose-100 bg-white/75 px-4 py-2 text-sm font-semibold text-rose-700 shadow-sm shadow-rose-100/70 backdrop-blur">
              Calculator blând pentru ritmul copilului
            </p>

            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Rutine mai liniștite pentru somn, mese și joacă.
            </h1>

            <p className="mt-4 max-w-[43rem] text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
              BebeCrește te ajută să găsești repere simple pentru ziua
              copilului tău — de la somn la activități, într-un mod blând și
              ușor de folosit.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Program simplu", "Fără stres", "Recomandări blânde"].map(
                (benefit) => (
                  <span
                    key={benefit}
                    className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/75 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm shadow-rose-100/50 backdrop-blur"
                  >
                    <span className="h-2 w-2 rounded-full bg-rose-300" />
                    {benefit}
                  </span>
                ),
              )}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/calculator-somn"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-4 text-base font-semibold text-white shadow-xl shadow-slate-900/15 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-2xl hover:shadow-slate-900/20 focus:outline-none focus:ring-4 focus:ring-slate-300 active:translate-y-0"
              >
                Încearcă calculatorul de somn
              </Link>
              <Link
                href="#cum-functioneaza"
                className="inline-flex items-center justify-center rounded-full border border-rose-100 bg-white/80 px-7 py-4 text-base font-semibold text-slate-700 shadow-sm shadow-rose-100/60 transition duration-200 hover:-translate-y-0.5 hover:border-rose-200 hover:bg-white hover:shadow-md hover:shadow-rose-100/80 focus:outline-none focus:ring-4 focus:ring-rose-100 active:translate-y-0"
              >
                Vezi cum funcționează
              </Link>
            </div>

            <p className="mt-5 text-sm font-semibold text-slate-500">
              Orientativ • Gratuit • Gândit pentru părinți
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-rose-100/25 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/90 bg-white/75 p-3 shadow-2xl shadow-slate-200/60 backdrop-blur-xl sm:p-4">
              <div className="rounded-[1.6rem] border border-slate-100 bg-white p-4 shadow-xl shadow-slate-200/45 sm:p-5">
                <div className="mb-5 flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-200" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-200" />
                  </div>
                  <span className="rounded-full bg-slate-50 px-3 py-1 text-xs font-bold text-slate-500 ring-1 ring-slate-100">
                    previzualizare
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase text-rose-700">
                      Calculator somn bebe
                    </p>
                    <h2 className="mt-2 text-2xl font-bold leading-tight tracking-tight text-slate-950">
                      Următoarea fereastră de somn
                    </h2>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700 ring-1 ring-emerald-100">
                    estimare
                  </span>
                </div>

                <div className="mt-6 grid gap-3">
                  {[
                    ["Vârsta copilului", "6 luni"],
                    ["Ultima trezire", "07:15"],
                    ["Somnuri astăzi", "2 somnuri"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-slate-100 bg-slate-50/70 px-4 py-3.5"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <span className="flex items-center gap-2 text-sm font-semibold text-slate-500">
                          <span className="text-rose-400">{label[0]}</span>
                          {label}
                        </span>
                        <span className="rounded-full bg-white px-3 py-1 text-sm font-bold text-slate-950 shadow-sm ring-1 ring-slate-100">
                          {value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-[1.6rem] border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-rose-50 p-5 shadow-lg shadow-sky-100/50">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-bold uppercase text-sky-700">
                      Recomandare orientativă
                    </p>
                    <span className="rounded-full bg-white/80 px-2.5 py-1 text-xs font-bold text-sky-700 ring-1 ring-sky-100">
                      calm
                    </span>
                  </div>
                  <p className="mt-3 text-4xl font-bold tracking-tight text-slate-950">
                    09:30 - 10:15
                  </p>
                  <div className="mt-4 h-2 rounded-full bg-white ring-1 ring-sky-100">
                    <div className="h-2 w-2/3 rounded-full bg-sky-300" />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    O fereastră estimată pentru următorul somn, pe care o poți
                    ajusta după starea copilului.
                  </p>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-2 text-center">
                  {[
                    ["2h 15m", "veghe"],
                    ["3", "repere"],
                    ["calm", "ritm"],
                  ].map(([value, label]) => (
                    <div
                      key={label}
                      className="rounded-2xl bg-white px-3 py-3 shadow-sm ring-1 ring-slate-100"
                    >
                      <p className="text-base font-bold text-slate-950">
                        {value}
                      </p>
                      <p className="mt-1 text-xs font-semibold text-slate-500">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

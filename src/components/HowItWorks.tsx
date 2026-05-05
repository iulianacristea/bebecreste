const steps = [
  {
    number: "01",
    icon: "V",
    title: "Introduci câteva detalii",
    description: "Vârsta, trezirea sau preferințele ajută la un reper mai util.",
  },
  {
    number: "02",
    icon: "T",
    title: "Alegi instrumentul potrivit",
    description:
      "Sleep Calculator te ajută cu somnul, iar Meal Planner cu ideile de mese.",
  },
  {
    number: "03",
    icon: "R",
    title: "Primești un punct de pornire",
    description:
      "Folosești recomandarea orientativă și o adaptezi la copilul tău.",
  },
];

export function HowItWorks() {
  return (
    <div className="flex h-full flex-col rounded-[2rem] border border-white/85 bg-white/82 p-5 shadow-xl shadow-rose-100/30 backdrop-blur sm:p-6 lg:p-7">
      <div className="min-h-[12rem]">
        <p className="inline-flex min-h-10 items-center rounded-full border border-sky-100 bg-sky-50/70 px-4 py-2 text-sm font-bold uppercase text-sky-700 shadow-sm shadow-sky-100/60">
          Cum funcționează
        </p>
        <h2 className="mt-5 max-w-xl text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-3xl">
          Găsești un reper util în doar 3 pași
        </h2>
        <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
          Fără reguli rigide sau promisiuni perfecte. Primești o direcție
          clară, apoi o ajustezi după ritmul familiei tale.
        </p>
      </div>

      <div className="mt-6 grid flex-1 gap-3">
        {steps.map((step) => (
          <article
            key={step.number}
            className="group flex min-h-[8.25rem] rounded-[1.25rem] border border-slate-100 bg-white/90 p-4 shadow-sm shadow-slate-200/50 transition duration-300 hover:-translate-y-0.5 hover:border-rose-100 hover:bg-white hover:shadow-md hover:shadow-rose-100/50 sm:p-5"
          >
            <div className="flex w-full items-start gap-4">
              <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-50 to-sky-50 text-sm font-bold text-slate-950 ring-1 ring-slate-100 shadow-sm">
                {step.icon}
              </div>
              <div className="min-w-0 flex-1">
                <div className="mb-2 flex items-center gap-2">
                  <span className="inline-flex rounded-full bg-slate-950 px-2.5 py-0.5 text-xs font-bold text-white transition duration-300 group-hover:bg-rose-700">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold leading-snug text-slate-950">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

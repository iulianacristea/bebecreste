const steps = [
  {
    number: "01",
    icon: "V",
    title: "Spui vârsta copilului",
    description: "Alegem recomandarea în funcție de etapa de dezvoltare.",
  },
  {
    number: "02",
    icon: "T",
    title: "Alegi ora trezirii",
    description:
      "Calculatorul estimează următoarea fereastră potrivită de somn.",
  },
  {
    number: "03",
    icon: "R",
    title: "Primești un reper clar",
    description:
      "Vezi intervalul recomandat și o explicație simplă pentru ritmul zilei.",
  },
];

export function HowItWorks() {
  return (
    <div className="h-full rounded-[2rem] border border-white/85 bg-white/80 p-5 shadow-lg shadow-rose-100/35 backdrop-blur sm:p-6">
      <div>
        <p className="inline-flex rounded-full border border-sky-100 bg-white/75 px-4 py-2 text-sm font-semibold uppercase text-sky-700 shadow-sm shadow-sky-100/60 backdrop-blur">
            Cum funcționează
        </p>
        <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
          Primești o recomandare în doar 3 pași
        </h2>
        <p className="mt-3 text-base leading-7 text-slate-600">
          Introduci câteva detalii simple, iar BebeCrește îți oferă un reper
          blând pentru ziua copilului.
        </p>
      </div>

      <div className="mt-6 grid gap-3">
        {steps.map((step) => (
          <article
            key={step.number}
            className="group rounded-[1.25rem] border border-white/85 bg-white/85 p-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-rose-100 hover:bg-white hover:shadow-md hover:shadow-rose-100/50"
          >
            <div className="flex items-start gap-4">
              <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-50 to-sky-50 text-sm font-bold text-slate-950 ring-1 ring-white shadow-sm">
                {step.icon}
              </div>
              <div className="min-w-0">
                <div className="mb-1 inline-flex rounded-full bg-slate-950 px-2.5 py-0.5 text-xs font-bold text-white transition duration-300 group-hover:bg-rose-700">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-slate-950">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">
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

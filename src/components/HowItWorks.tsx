const steps = [
  {
    number: "01",
    title: "Introduci vârsta copilului",
    description:
      "Spui câte luni are copilul, ca recomandarea să țină cont de etapa lui de dezvoltare.",
  },
  {
    number: "02",
    title: "Alegi ora trezirii",
    description:
      "Selectezi ora la care s-a trezit, iar calculatorul estimează următoarea fereastră de somn.",
  },
  {
    number: "03",
    title: "Primești recomandarea orientativă",
    description:
      "Vezi ora următorului somn, ora de culcare și o explicație scurtă pentru ritmul zilei.",
  },
];

export function HowItWorks() {
  return (
    <section id="despre" className="bg-white px-5 py-14 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase text-sky-700">
              Cum funcționează
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Trei pași simpli pentru o recomandare clară.
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-slate-600">
            Calculatorul păstrează lucrurile simple, ca tu să poți lua rapid o
            decizie potrivită pentru ziua copilului.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-[1.75rem] border border-slate-100 bg-[#fbfdff] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-100 hover:bg-white hover:shadow-xl hover:shadow-sky-100/70"
            >
              <div className="mb-6 inline-flex rounded-full bg-sky-100 px-3 py-1 text-sm font-bold text-sky-700 ring-1 ring-sky-200">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-slate-950">
                {step.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

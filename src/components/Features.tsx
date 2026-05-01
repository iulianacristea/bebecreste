const features = [
  {
    title: "Somn",
    description:
      "Ferestre de veghe, culcări orientative și ritmuri zilnice potrivite vârstei.",
    accent: "bg-sky-100 text-sky-700 ring-sky-200",
    icon: "S",
  },
  {
    title: "Mese",
    description:
      "Un spațiu clar pentru programul meselor, diversificare și rutine liniștite.",
    accent: "bg-rose-100 text-rose-700 ring-rose-200",
    icon: "M",
  },
  {
    title: "Joacă",
    description:
      "Idei blânde de conectare și activități adaptate etapelor de dezvoltare.",
    accent: "bg-amber-100 text-amber-700 ring-amber-200",
    icon: "J",
  },
];

export function Features() {
  return (
    <section id="rutine" className="bg-white px-5 py-14 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase text-emerald-700">
            Tot ce urmărești zilnic
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Un tablou simplu pentru ritmul copilului.
          </h2>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-[1.75rem] border border-slate-100 bg-slate-50/70 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-slate-200 hover:bg-white hover:shadow-xl hover:shadow-slate-200/70"
            >
              <div
                className={`mb-6 flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-bold ring-1 ${feature.accent}`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-950">
                {feature.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

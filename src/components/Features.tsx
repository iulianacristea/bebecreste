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
    <div
      id="rutine"
      className="h-full rounded-[2rem] border border-white/85 bg-white/80 p-5 shadow-lg shadow-sky-100/35 backdrop-blur sm:p-6"
    >
      <div>
        <p className="text-sm font-semibold uppercase text-emerald-700">
          Tot ce urmărești zilnic
        </p>
        <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
          Un tablou simplu pentru ritmul copilului.
        </h2>
      </div>

      <div className="mt-6 grid gap-3">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="rounded-[1.25rem] border border-slate-100 bg-slate-50/70 p-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-slate-200 hover:bg-white hover:shadow-md hover:shadow-slate-200/70"
          >
            <div className="flex items-start gap-4">
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-sm font-bold ring-1 ${feature.accent}`}
              >
                {feature.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-950">
                  {feature.title}
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  {feature.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

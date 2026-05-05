import Link from "next/link";

const features = [
  {
    title: "Sleep Calculator",
    description:
      "Află rapid o fereastră orientativă de somn și ajusteaz-o după semnele copilului.",
    href: "/calculator-somn",
    accent: "bg-sky-100 text-sky-700 ring-sky-200",
    icon: "S",
  },
  {
    title: "Meal Planner",
    description:
      "Găsești idei de mese simple, potrivite vârstei, preferințelor și zilelor reale.",
    href: "/planner-mese",
    accent: "bg-rose-100 text-rose-700 ring-rose-200",
    icon: "M",
  },
  {
    title: "Blog parenting",
    description:
      "Ghiduri scurte, calde și orientative despre somn, diversificare și rutine.",
    href: "/blog",
    accent: "bg-amber-100 text-amber-700 ring-amber-200",
    icon: "B",
  },
];

export function Features() {
  return (
    <div
      id="rutine"
      className="flex h-full flex-col rounded-[2rem] border border-white/85 bg-white/82 p-5 shadow-xl shadow-sky-100/30 backdrop-blur sm:p-6 lg:p-7"
    >
      <div className="min-h-[12rem]">
        <p className="inline-flex min-h-10 items-center rounded-full border border-emerald-100 bg-emerald-50/70 px-4 py-2 text-sm font-bold uppercase text-emerald-700 shadow-sm shadow-emerald-100/50">
          Instrumente pentru zile mai clare
        </p>
        <h2 className="mt-5 max-w-xl text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-3xl">
          Alegi reperele potrivite pentru ce ai nevoie azi.
        </h2>
        <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
          Somnul, mesele și rutina se schimbă des în primii ani. BebeCrește te
          ajută să pornești de la informații clare, nu de la ghicit.
        </p>
      </div>

      <div className="mt-6 grid flex-1 gap-3">
        {features.map((feature) => (
          <Link
            key={feature.title}
            href={feature.href}
            className="group flex min-h-[8.25rem] rounded-[1.25rem] border border-slate-100 bg-white/90 p-4 shadow-sm shadow-slate-200/50 transition duration-300 hover:-translate-y-0.5 hover:border-slate-200 hover:bg-white hover:shadow-md hover:shadow-slate-200/70 focus:outline-none focus:ring-4 focus:ring-rose-100 sm:p-5"
          >
            <div className="flex w-full items-start gap-4">
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-sm font-bold ring-1 transition duration-300 group-hover:scale-105 ${feature.accent}`}
              >
                {feature.icon}
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-bold leading-snug text-slate-950">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {feature.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

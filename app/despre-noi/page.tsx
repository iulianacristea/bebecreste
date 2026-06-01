import type { Metadata } from "next";
import { Footer } from "@/src/components/Footer";
import { Navbar } from "@/src/components/Navbar";

export const metadata: Metadata = {
  title: "Despre BebeCrește | Repere blânde pentru părinți",
  description:
    "Află povestea BebeCrește, un proiect creat pentru părinți care caută repere simple despre somn, mese și rutine, fără presiune.",
  alternates: {
    canonical: "/despre-noi",
  },
  openGraph: {
    title: "Despre BebeCrește | Repere pentru părinți",
    description:
      "Un proiect creat pentru părinți care vor mai multă claritate despre somn, mese și rutine în primii ani.",
    url: "/despre-noi",
    siteName: "BebeCrește.ro",
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: "/homepage/mama-bebe.jpeg",
        width: 1200,
        height: 630,
        alt: "Părinte cu bebeluș, pentru BebeCrește.ro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Despre BebeCrește | Repere pentru părinți",
    description:
      "Povestea unui proiect cu repere simple pentru somn, mese și rutine.",
    images: ["/homepage/mama-bebe.jpeg"],
  },
};

export default function DespreNoiPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff7f1] text-slate-900">
      <Navbar />

      <section className="bg-white px-5 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] bg-[#fff8f4] p-6 shadow-xl shadow-rose-100/45 sm:p-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:p-10">
          <div>
            <p className="text-sm font-bold uppercase text-rose-700">
              Povestea din spatele BebeCrește
            </p>

            <h1 className="mt-3 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl">
              BebeCrește a pornit din viața reală de părinte.
            </h1>

            <div className="mt-5 space-y-4 text-base leading-7 text-slate-650">
              <p>
                Sunt mama unei fetițe de 3 ani, Victoria. Odată cu ea am
                descoperit cât de mult se schimbă totul de la o etapă la alta:
                somnul, mesele, rutina și chiar lucrurile aparent simple din
                fiecare zi.
              </p>
              <p>
                Am început să citesc mult despre parenting, somnul bebelușilor
                și alimentația copiilor mici pentru că îmi doream să înțeleg
                mai bine nevoile copilului meu, fără presiune și fără reguli
                imposibil de urmat.
              </p>
              <p>
                Dar de multe ori informațiile găsite online erau prea
                complicate, prea contradictorii sau făcute să te simți că faci
                ceva greșit dacă nu urmezi „programul perfect”.
              </p>
              <p>
                Așa a apărut ideea BebeCrește: un loc simplu, calm și clar,
                unde părinții pot găsi repere orientative pentru somn, mese,
                diversificare, rutine și viața de zi cu zi cu un copil mic.
              </p>
            </div>

            <p className="mt-6 rounded-2xl bg-white/75 p-4 text-base font-semibold leading-7 text-slate-800 shadow-sm shadow-rose-100/40">
              Nu cred în perfecțiune și nici în reguli rigide. Cred că fiecare
              copil este diferit și că părinții au nevoie, înainte de toate, de
              mai multă claritate și mai puțin stres.
            </p>
          </div>

          <div className="rounded-[1.75rem] bg-white p-5 shadow-lg shadow-rose-100/60 sm:p-6">
            <div className="flex min-h-72 flex-col justify-between rounded-[1.35rem] bg-[#f7fbff] p-6">
              <p className="text-xl font-bold leading-8 text-slate-950">
                Creat cu gândul la părinți care vor mai multă claritate și mai
                puțin stres.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  "Creat de o mamă",
                  "Inspirat din viața reală",
                  "Repere blânde, nu reguli rigide",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-full bg-white px-4 py-3 text-sm font-bold text-slate-700 shadow-sm"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                      ✓
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

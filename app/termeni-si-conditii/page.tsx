import { Footer } from "@/src/components/Footer";
import { Navbar } from "@/src/components/Navbar";

export default function TermeniSiConditiiPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff7f1] text-slate-900">
      <Navbar />

      <section className="relative px-5 pb-16 pt-10 sm:px-8 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(186,230,253,0.7),_transparent_34%),radial-gradient(circle_at_84%_10%,_rgba(254,205,211,0.68),_transparent_30%),linear-gradient(135deg,_#fff7f1_0%,_#f8fbff_48%,_#fff1f7_100%)]" />

        <article className="relative mx-auto max-w-4xl rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-2xl shadow-rose-200/30 backdrop-blur sm:p-10">
          <p className="text-sm font-semibold uppercase text-rose-700">
            BebeCrește.ro
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Termeni și condiții
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Bine ai venit pe BebeCrește.ro. Prin utilizarea acestui site, ești
            de acord cu acești termeni.
          </p>

          <div className="mt-10 space-y-8 text-base leading-8 text-slate-600">
            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                1. Introducere
              </h2>
              <p className="mt-3">
                Bine ai venit pe BebeCrește.ro. Prin utilizarea acestui site,
                ești de acord cu acești termeni și condiții. Dacă nu ești de
                acord cu aceștia, te rugăm să nu folosești site-ul.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                2. Scopul serviciului
              </h2>
              <p className="mt-3">
                BebeCrește oferă recomandări orientative pentru somnul, mesele
                și activitățile copiilor. Conținutul este creat pentru a ajuta
                părinții să găsească repere simple și blânde pentru rutina de zi
                cu zi.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                3. Disclaimer medical
              </h2>
              <p className="mt-3">
                Informațiile oferite NU reprezintă sfaturi medicale, diagnostic
                sau tratament. Pentru orice problemă de sănătate, întrebare
                medicală sau situație urgentă, consultă medicul pediatru.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                4. Utilizarea site-ului
              </h2>
              <p className="mt-3">
                Utilizatorii se obligă să folosească site-ul în mod responsabil
                și legal. Nu este permisă folosirea site-ului într-un mod care
                poate afecta funcționarea acestuia, experiența altor utilizatori
                sau drepturile BebeCrește.ro.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                5. Limitarea răspunderii
              </h2>
              <p className="mt-3">
                Nu garantăm exactitatea absolută a recomandărilor. Fiecare copil
                este diferit, iar recomandările trebuie adaptate la context,
                vârstă, ritm și nevoile familiei. Utilizarea site-ului și a
                recomandărilor este pe propria răspundere.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                6. Drepturi de autor
              </h2>
              <p className="mt-3">
                Conținutul site-ului, inclusiv textele, structura, elementele
                vizuale și materialele publicate, aparține BebeCrește și nu
                poate fi copiat, distribuit sau reutilizat fără acordul nostru
                prealabil.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                7. Modificări
              </h2>
              <p className="mt-3">
                Ne rezervăm dreptul de a modifica acești termeni atunci când
                este necesar. Versiunea publicată pe site este cea aplicabilă la
                momentul accesării.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                8. Contact
              </h2>
              <p className="mt-3">
                Pentru întrebări despre acești termeni și condiții, ne poți
                scrie la{" "}
                <a
                  href="mailto:support@bebecreste.ro"
                  className="font-semibold text-sky-700 underline decoration-sky-200 underline-offset-4 transition duration-200 hover:text-sky-900"
                >
                  support@bebecreste.ro
                </a>
                .
              </p>
            </section>
          </div>
        </article>
      </section>

      <Footer />
    </main>
  );
}

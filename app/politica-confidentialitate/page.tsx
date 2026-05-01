import { Footer } from "@/src/components/Footer";
import { Navbar } from "@/src/components/Navbar";

export default function PoliticaConfidentialitatePage() {
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
            Politica de confidențialitate
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Confidențialitatea ta contează. Această pagină explică, pe scurt și
            clar, ce date pot fi folosite atunci când interacționezi cu
            BebeCrește.ro.
          </p>

          <div className="mt-10 space-y-8 text-base leading-8 text-slate-600">
            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                1. Ce date putem colecta
              </h2>
              <p className="mt-3">
                În funcție de modul în care folosești site-ul, putem prelucra
                date pe care le introduci voluntar, precum numele, adresa de
                email sau mesajul trimis prin formularul de contact.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                2. Date salvate local
              </h2>
              <p className="mt-3">
                Unele funcționalități, precum profilul copilului sau istoricul
                ultimelor calcule de somn, pot fi salvate local în browserul
                tău, prin localStorage. Aceste date rămân pe dispozitivul tău și
                nu sunt trimise către un server în versiunea actuală.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                3. Cum folosim datele
              </h2>
              <p className="mt-3">
                Datele introduse sunt folosite pentru a afișa recomandări
                orientative, pentru a răspunde mesajelor trimise prin formular
                și pentru a îmbunătăți experiența pe site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                4. Formularul de contact
              </h2>
              <p className="mt-3">
                Formularul de contact pregătește mesajul introdus, însă
                trimiterea prin email poate fi conectată ulterior. Dacă alegi să
                ne contactezi, folosește doar informațiile pe care vrei să ni le
                transmiți.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                5. Siguranța informațiilor
              </h2>
              <p className="mt-3">
                Ne dorim ca datele tale să fie tratate cu grijă. Totuși, nicio
                metodă de transmitere sau stocare online nu poate fi considerată
                complet lipsită de risc.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                6. Drepturile tale
              </h2>
              <p className="mt-3">
                Ne poți contacta pentru întrebări legate de datele tale sau
                pentru solicitări privind accesul, corectarea ori ștergerea
                informațiilor trimise către noi, acolo unde este aplicabil.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                7. Contact
              </h2>
              <p className="mt-3">
                Pentru întrebări despre confidențialitate, scrie-ne la{" "}
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

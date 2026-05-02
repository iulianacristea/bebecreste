import type { Metadata } from "next";
import { ContactForm } from "@/src/components/ContactForm";
import { Footer } from "@/src/components/Footer";
import { Navbar } from "@/src/components/Navbar";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactează echipa BebeCrește.ro pentru întrebări, sugestii sau feedback despre calculatorul de somn și plannerul de mese.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff7f1] text-slate-900">
      <Navbar />

      <section className="relative px-5 pb-16 pt-10 sm:px-8 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(186,230,253,0.7),_transparent_34%),radial-gradient(circle_at_84%_10%,_rgba(254,205,211,0.68),_transparent_30%),linear-gradient(135deg,_#fff7f1_0%,_#f8fbff_48%,_#fff1f7_100%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-[2rem] border border-white/70 bg-white/60 p-6 shadow-xl shadow-rose-200/25 backdrop-blur sm:p-8 lg:sticky lg:top-28">
            <p className="inline-flex rounded-full border border-rose-100 bg-white/75 px-4 py-2 text-sm font-semibold text-rose-700 shadow-sm">
              BebeCrește.ro
            </p>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Contact
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Ai o întrebare, o sugestie sau vrei să ne spui cum putem
              îmbunătăți BebeCrește?
            </p>

            <div className="mt-8 rounded-[1.5rem] border border-sky-100 bg-sky-50/70 p-5">
              <p className="text-sm font-semibold uppercase text-sky-700">
                Email
              </p>
              <a
                href="mailto:support@bebecreste.ro"
                className="mt-2 inline-flex break-all text-xl font-bold text-slate-950 transition duration-200 hover:text-sky-700 focus:outline-none focus:ring-4 focus:ring-sky-100"
              >
                support@bebecreste.ro
              </a>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Răspundem cât putem de repede.
              </p>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {["Blând", "Simplu", "Pentru părinți"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/80 bg-white/70 px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}

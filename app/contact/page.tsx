import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#fff7f1] px-5 py-16 text-slate-900 sm:px-8 lg:px-10">
      <section className="mx-auto max-w-3xl rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-xl shadow-rose-200/30 transition duration-300 hover:bg-white/90 hover:shadow-2xl hover:shadow-rose-200/40 sm:p-10">
        <p className="text-sm font-semibold uppercase text-rose-700">
          BebeCrește.ro
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">
          Contact
        </h1>
        <p className="mt-6 leading-8 text-slate-600">
          Această pagină va conține informațiile de contact pentru
          BebeCrește.ro. Momentan, conținutul este un placeholder.
        </p>
        <p className="mt-4 leading-8 text-slate-600">
          Pentru moment, poți considera această pagină ca spațiu pregătit pentru
          o adresă de email, formular sau alte detalii de suport.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-slate-950 px-6 py-3 font-semibold text-white shadow-lg shadow-slate-900/15 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/20 focus:outline-none focus:ring-4 focus:ring-slate-300 active:translate-y-0"
        >
          Înapoi acasă
        </Link>
      </section>
    </main>
  );
}

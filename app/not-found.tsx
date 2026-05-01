import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#fff7f1] px-5 py-16 text-slate-900 sm:px-8 lg:px-10">
      <section className="mx-auto flex max-w-3xl flex-col items-start rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-xl shadow-rose-200/30 transition duration-300 hover:bg-white/90 hover:shadow-2xl hover:shadow-rose-200/40 sm:p-10">
        <p className="rounded-full border border-rose-200 bg-white px-4 py-2 text-sm font-semibold text-rose-700">
          BebeCrește.ro
        </p>
        <p className="mt-8 text-sm font-bold uppercase text-sky-700">404</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          Pagina nu a fost găsită
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          Se pare că pagina pe care o cauți nu există sau a fost mutată.
          Întoarce-te la calculatorul de somn și continuă de acolo, în ritmul
          tău.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-slate-950 px-7 py-4 font-semibold text-white shadow-lg shadow-slate-900/15 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/20 focus:outline-none focus:ring-4 focus:ring-slate-300 active:translate-y-0"
        >
          Înapoi la homepage
        </Link>
      </section>
    </main>
  );
}

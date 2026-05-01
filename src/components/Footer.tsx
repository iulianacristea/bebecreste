import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-rose-100 bg-white px-5 py-8 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-bold text-slate-950">BebeCrește.ro</p>
          <p className="mt-2 max-w-xl leading-6">
            Informațiile sunt orientative și nu înlocuiesc sfatul medicului.
          </p>
        </div>

        <nav className="flex flex-wrap gap-4 font-semibold text-slate-600">
          <Link
            href="/termeni-si-conditii"
            className="rounded-full px-2 py-1 transition duration-200 hover:bg-rose-50 hover:text-slate-950 focus:outline-none focus:ring-4 focus:ring-rose-100"
          >
            Termeni și Condiții
          </Link>
          <Link
            href="/politica-confidentialitate"
            className="rounded-full px-2 py-1 transition duration-200 hover:bg-rose-50 hover:text-slate-950 focus:outline-none focus:ring-4 focus:ring-rose-100"
          >
            Politică de Confidențialitate
          </Link>
          <Link
            href="/contact"
            className="rounded-full px-2 py-1 transition duration-200 hover:bg-rose-50 hover:text-slate-950 focus:outline-none focus:ring-4 focus:ring-rose-100"
          >
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}

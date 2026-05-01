import Link from "next/link";

const navigationLinks = [
  { href: "/", label: "Acasă" },
  { href: "/calculator-somn", label: "Calculator somn" },
  { href: "#despre", label: "Despre" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="relative z-20 px-5 pt-6 sm:px-8 lg:px-10">
      <nav className="mx-auto flex max-w-7xl flex-col gap-4 rounded-[1.5rem] border border-white/70 bg-white/70 px-4 py-4 shadow-sm shadow-rose-100/70 backdrop-blur transition duration-300 hover:bg-white/85 hover:shadow-md hover:shadow-rose-100/80 sm:rounded-full md:flex-row md:items-center md:justify-between md:px-6">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-full focus:outline-none focus:ring-4 focus:ring-rose-100"
          aria-label="BebeCrește acasă"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
            BC
          </span>
          <span className="text-base font-bold tracking-tight text-slate-950">
            BebeCrește
          </span>
        </Link>

        <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-600">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 transition duration-200 hover:bg-rose-50 hover:text-slate-950 focus:outline-none focus:ring-4 focus:ring-rose-100"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

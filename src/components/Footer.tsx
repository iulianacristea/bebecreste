import Image from "next/image";
import Link from "next/link";

const navigationLinks = [
  { href: "/calculator-somn", label: "Calculator somn" },
  { href: "/planner-mese", label: "Planner mese" },
  { href: "/blog", label: "Blog" },
  { href: "/despre-noi", label: "Despre noi" },
];

const legalLinks = [
  { href: "/politica-confidentialitate", label: "Politica cookies" },
  { href: "/termeni-si-conditii", label: "Termeni" },
  { href: "/termeni-si-conditii#disclaimer-medical", label: "Disclaimer" },
];

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-slate-600 transition duration-300 hover:text-slate-950 focus:outline-none focus:ring-4 focus:ring-rose-100"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-rose-200 transition duration-300 group-hover:bg-rose-400" />
      <span className="relative">
        {label}
        <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-rose-300 to-sky-300 transition-transform duration-300 group-hover:scale-x-100" />
      </span>
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="bg-white px-5 pb-8 pt-12 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/80 bg-[linear-gradient(135deg,_#fff8f4_0%,_#f8fbff_50%,_#fff7fb_100%)] shadow-[0_24px_80px_rgba(244,114,182,0.14)]">
        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.15fr_0.8fr_0.75fr_0.95fr] lg:p-10">
          <div>
            <Link
              href="/"
              className="inline-flex rounded-full focus:outline-none focus:ring-4 focus:ring-rose-100"
              aria-label="BebeCrește acasă"
            >
              <span className="relative block h-16 w-52">
                <Image
                  src="/bebecreste-logo.webp"
                  alt="BebeCrește"
                  fill
                  sizes="208px"
                  className="object-contain object-left"
                />
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-base leading-7 text-slate-600">
              Repere simple pentru somn, mese și rutine în primii ani.
            </p>
            <p className="mt-5 max-w-sm rounded-2xl bg-white/70 p-4 text-sm leading-6 text-slate-500 shadow-sm ring-1 ring-white/80">
              Informațiile sunt orientative și nu înlocuiesc sfatul medicului.
            </p>
          </div>

          <nav aria-label="Navigare footer" className="flex flex-col gap-3">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.08em] text-rose-700">
              Navigare
            </p>
            {navigationLinks.map((link) => (
              <FooterLink key={link.href} href={link.href} label={link.label} />
            ))}
          </nav>

          <nav aria-label="Linkuri legale" className="flex flex-col gap-3">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.08em] text-sky-700">
              Legal
            </p>
            {legalLinks.map((link) => (
              <FooterLink key={link.href} href={link.href} label={link.label} />
            ))}
          </nav>

          <div className="rounded-[1.75rem] border border-white/80 bg-white/65 p-5 shadow-lg shadow-slate-100/70 backdrop-blur">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-emerald-700">
              BebeCrește
            </p>
            <p className="mt-4 text-2xl font-bold leading-tight tracking-tight text-slate-950">
              Creat cu grijă pentru părinți reali.
            </p>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Un spațiu cald pentru zilele în care ai nevoie de mai multă
              claritate și mai puțină presiune.
            </p>
          </div>
        </div>

        <div className="border-t border-white/80 bg-white/45 px-6 py-5 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-3 text-xs font-semibold text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 BebeCrește.ro</p>
            <Link
              href="/contact"
              className="w-fit rounded-full transition duration-300 hover:text-slate-950 focus:outline-none focus:ring-4 focus:ring-rose-100"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

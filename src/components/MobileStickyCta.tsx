import Link from "next/link";

type MobileStickyCtaLink = {
  href: string;
  label: string;
};

type MobileStickyCtaProps = {
  links: MobileStickyCtaLink[];
};

export function MobileStickyCta({ links }: MobileStickyCtaProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-rose-100 bg-white/92 px-4 py-3 shadow-2xl shadow-slate-900/10 backdrop-blur md:hidden">
      <div
        className={`mx-auto grid max-w-md gap-2 ${
          links.length > 1 ? "grid-cols-2" : "grid-cols-1"
        }`}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-slate-950 px-4 py-2.5 text-center text-sm font-semibold leading-5 text-white shadow-lg shadow-slate-900/15 transition duration-200 active:translate-y-0.5"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

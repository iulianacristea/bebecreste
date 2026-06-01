"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navigationLinks = [
  { href: "/", label: "Acasă" },
  { href: "/calculator-somn", label: "Somn bebe" },
  { href: "/planner-mese", label: "Planner mese" },
  { href: "/blog", label: "Blog" },
  { href: "/despre-noi", label: "Despre noi" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 px-4 sm:px-8 lg:px-10 transition-all duration-500 ease-out ${
        hasScrolled ? "pt-2" : "pt-4"
      }`}
    >
      <nav
        className={`mx-auto max-w-7xl rounded-[1.9rem] border px-4 shadow-[0_18px_55px_rgba(15,23,42,0.08)] backdrop-blur-2xl transition-all duration-500 ease-out md:rounded-full md:px-6 ${
          hasScrolled
            ? "border-white/70 bg-white/85 py-2.5 shadow-[0_14px_40px_rgba(15,23,42,0.07)]"
            : "border-white/75 bg-white/76 py-4 shadow-[0_22px_70px_rgba(244,114,182,0.13)]"
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center rounded-full transition duration-300 hover:opacity-95 focus:outline-none focus:ring-4 focus:ring-rose-100"
            aria-label="BebeCrește acasă"
          >
            <span
              className={`relative block transition-all duration-500 ease-out ${
                hasScrolled
                  ? "h-12 w-44 md:h-[3.25rem] md:w-52"
                  : "h-14 w-48 md:h-16 md:w-56"
              }`}
            >
              <Image
                src="/bebecreste-logo.webp"
                alt="BebeCrește"
                fill
                priority
                sizes="(min-width: 768px) 224px, 192px"
                className="object-contain object-left"
              />
            </span>
          </Link>

          <div className="hidden items-center gap-1 rounded-full bg-white/45 p-1.5 ring-1 ring-white/70 md:flex">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative rounded-full px-4 py-2.5 text-sm font-semibold text-slate-600 transition duration-300 hover:bg-white/55 hover:text-slate-950 focus:outline-none focus:ring-4 focus:ring-rose-100 lg:px-5"
              >
                <span className="relative">
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-rose-300 via-sky-300 to-emerald-300 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                </span>
              </Link>
            ))}
          </div>

          <Link
            href="/calculator-somn"
            className="hidden rounded-full bg-gradient-to-r from-slate-950 to-slate-800 px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(15,23,42,0.18)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(15,23,42,0.22)] focus:outline-none focus:ring-4 focus:ring-slate-300 active:translate-y-0 lg:inline-flex lg:px-6"
          >
            Calculează somnul
          </Link>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/80 bg-white/80 text-slate-950 shadow-sm shadow-rose-100/50 backdrop-blur transition duration-300 hover:bg-rose-50 focus:outline-none focus:ring-4 focus:ring-rose-100 md:hidden"
            aria-label={isMenuOpen ? "Închide meniul" : "Deschide meniul"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
          >
            <span className="relative h-5 w-5">
              <span
                className={`absolute left-0 top-1 h-0.5 w-5 rounded-full bg-slate-950 transition duration-300 ${isMenuOpen ? "translate-y-2 rotate-45" : ""
                  }`}
              />
              <span
                className={`absolute left-0 top-2.5 h-0.5 w-5 rounded-full bg-slate-950 transition duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
              />
              <span
                className={`absolute left-0 top-4 h-0.5 w-5 rounded-full bg-slate-950 transition duration-300 ${isMenuOpen ? "-translate-y-1.5 -rotate-45" : ""
                  }`}
              />
            </span>
          </button>
        </div>

        <div
          className={`grid transition-all duration-300 ease-out md:hidden ${isMenuOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
            }`}
        >
          <div className="overflow-hidden">
            <div className="mt-4 border-t border-rose-100/70 pt-4">
              <div className="flex flex-col gap-2">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition duration-300 hover:bg-white/70 hover:text-slate-950 hover:shadow-sm focus:outline-none focus:ring-4 focus:ring-rose-100"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <Link
                href="/calculator-somn"
                onClick={closeMenu}
                className="mt-3 inline-flex w-full justify-center rounded-full bg-gradient-to-r from-slate-950 to-slate-800 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-slate-300 active:translate-y-0"
              >
                Calculează somnul
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

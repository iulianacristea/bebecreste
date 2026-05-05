"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navigationLinks = [
  { href: "/", label: "Acasă" },
  { href: "/calculator-somn", label: "Somn" },
  { href: "/planner-mese", label: "Mese" },
  { href: "/blog", label: "Blog" },
  { href: "/despre-noi", label: "Despre" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-8 lg:px-10">
      <nav className="mx-auto max-w-7xl rounded-[1.75rem] border border-white/80 bg-white/90 px-4 py-3 shadow-xl shadow-rose-100/45 backdrop-blur-xl md:rounded-full md:px-5">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center rounded-full focus:outline-none focus:ring-4 focus:ring-rose-100"
            aria-label="BebeCrește acasă"
          >
            <span className="relative block h-12 w-44 md:h-14 md:w-52">
              <Image
                src="/bebecreste-logo.webp"
                alt="BebeCrește"
                fill
                priority
                sizes="(min-width: 768px) 208px, 176px"
                className="object-contain object-left"
              />
            </span>
          </Link>

          <div className="hidden items-center rounded-full bg-slate-50/80 p-1 md:flex">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition duration-200 hover:bg-white hover:text-slate-950 hover:shadow-sm focus:outline-none focus:ring-4 focus:ring-rose-100"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            href="/calculator-somn"
            className="hidden rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-slate-300 active:translate-y-0 md:inline-flex"
          >
            Calculează somnul
          </Link>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-rose-100 bg-white/90 text-slate-950 shadow-sm transition duration-200 hover:bg-rose-50 focus:outline-none focus:ring-4 focus:ring-rose-100 md:hidden"
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
            <div className="mt-4 border-t border-rose-100 pt-4">
              <div className="flex flex-col gap-2">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition duration-200 hover:bg-rose-50 hover:text-slate-950 focus:outline-none focus:ring-4 focus:ring-rose-100"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <Link
                href="/calculator-somn"
                onClick={closeMenu}
                className="mt-3 inline-flex w-full justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition duration-200 hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-300"
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
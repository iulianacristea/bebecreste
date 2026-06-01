"use client";

import type { FormEvent } from "react";
import { useState } from "react";

type EmailCaptureProps = {
  className?: string;
  wide?: boolean;
};

export function EmailCapture({ className = "", wide = false }: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function isValidEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isValidEmail(email)) {
      setStatus("error");
      return;
    }

    setEmail("");
    setStatus("success");
  }

  return (
    <section className={className}>
      <div
        className={`mx-auto overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-xl shadow-slate-100/80 ${
          wide ? "max-w-6xl" : "max-w-5xl"
        }`}
      >
        <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
          <div className="bg-gradient-to-br from-rose-50 via-white to-sky-50 p-6 sm:p-8 lg:p-10">
            <p className="text-sm font-bold uppercase text-rose-700">
              Ghid gratuit
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl">
              Primește ghidul gratuit pentru somnul bebelușului
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Idei simple pentru rutine mai liniștite, direct pe email.
            </p>
          </div>

          <div>
            <form
              onSubmit={handleSubmit}
              className="flex h-full flex-col justify-center p-6 sm:p-8 lg:p-10"
            >
              <label
                htmlFor="guide-email"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Email
              </label>
              <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
                <input
                  id="guide-email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setStatus("idle");
                  }}
                  placeholder="email@exemplu.ro"
                  aria-invalid={status === "error"}
                  aria-describedby="guide-email-help guide-email-feedback"
                  required
                  className="w-full rounded-full border border-slate-200 bg-white px-5 py-3.5 text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 hover:border-rose-200 focus:border-rose-300 focus:ring-4 focus:ring-rose-100"
                />
                <button
                  type="submit"
                  className="rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-slate-900/10 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/15 focus:outline-none focus:ring-4 focus:ring-slate-300 active:translate-y-0"
                >
                  Trimite-mi ghidul
                </button>
              </div>

              <p
                id="guide-email-help"
                className="mt-3 text-xs leading-5 text-slate-500"
              >
                Nu trimitem spam. Te poți dezabona oricând.
              </p>

              {status === "success" ? (
                <p
                  id="guide-email-feedback"
                  role="status"
                  className="mt-4 rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm font-semibold leading-6 text-emerald-800"
                >
                  Mulțumim! Îți vom trimite ghidul pe email când conectăm
                  formularul la newsletter.
                </p>
              ) : null}

              {status === "error" ? (
                <p
                  id="guide-email-feedback"
                  role="alert"
                  className="mt-4 rounded-2xl border border-rose-100 bg-rose-50 px-4 py-3 text-sm font-semibold leading-6 text-rose-800"
                >
                  Te rugăm să introduci o adresă de email validă.
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

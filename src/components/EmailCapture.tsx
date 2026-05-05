"use client";

import { useState } from "react";

type EmailCaptureProps = {
  className?: string;
};

export function EmailCapture({ className = "" }: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [isSuccessVisible, setIsSuccessVisible] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setEmail("");
    setIsSuccessVisible(true);
  }

  return (
    <section className={className}>
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-2xl shadow-rose-200/25 backdrop-blur sm:p-8 lg:p-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase text-rose-700">
              Ghid gratuit
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl">
              Primește ghidul gratuit pentru rutine mai liniștite
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Un ghid simplu cu repere pentru somn, mese și activități în
              primii ani.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[1.5rem] border border-rose-100 bg-rose-50/55 p-5 shadow-sm sm:p-6"
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
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setIsSuccessVisible(false);
                }}
                placeholder="email@exemplu.ro"
                required
                className="w-full rounded-2xl border border-white bg-white px-4 py-3.5 text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 hover:border-rose-200 focus:border-rose-300 focus:ring-4 focus:ring-rose-100"
              />
              <button
                type="submit"
                className="rounded-2xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/20 focus:outline-none focus:ring-4 focus:ring-slate-300 active:translate-y-0"
              >
                Vreau ghidul
              </button>
            </div>

            <p className="mt-3 text-xs leading-5 text-slate-500">
              Nu trimitem spam. Te poți dezabona oricând.
            </p>

            {isSuccessVisible ? (
              <p
                role="status"
                className="mt-4 rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm font-semibold leading-6 text-emerald-800"
              >
                Mulțumim! Ghidul este notat ca interes pentru moment. Nu am
                salvat nicio adresă.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";

export function WaitlistForm() {
  const [waitlistName, setWaitlistName] = useState("");
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [waitlistSuccess, setWaitlistSuccess] = useState(false);

  function handleWaitlistSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setWaitlistSuccess(true);
    setWaitlistName("");
    setWaitlistEmail("");
  }

  return (
    <section className="bg-[#fff7f1] px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-white/80 bg-white/75 p-6 shadow-2xl shadow-rose-200/30 backdrop-blur transition duration-300 hover:bg-white/85 hover:shadow-2xl hover:shadow-rose-200/40 md:grid-cols-[0.95fr_1.05fr] md:p-8 lg:p-10">
        <div>
          <p className="text-sm font-semibold uppercase text-rose-700">
            Listă de așteptare
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Primești acces când lansăm următoarele rutine.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
            Lasă-ne numele și emailul tău, iar noi te anunțăm când BebeCrește
            adaugă planuri pentru mese, joacă și urmărirea progresului.
          </p>
        </div>

        <form
          onSubmit={handleWaitlistSubmit}
          className="rounded-[1.5rem] border border-slate-100 bg-white p-5 shadow-sm transition duration-300 hover:shadow-md hover:shadow-slate-200/70"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="waitlist-name"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Nume
              </label>
              <input
                id="waitlist-name"
                type="text"
                value={waitlistName}
                onChange={(event) => {
                  setWaitlistName(event.target.value);
                  setWaitlistSuccess(false);
                }}
                placeholder="Numele tău"
                required
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 hover:border-rose-200 focus:border-rose-300 focus:ring-4 focus:ring-rose-100"
              />
            </div>

            <div>
              <label
                htmlFor="waitlist-email"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Email
              </label>
              <input
                id="waitlist-email"
                type="email"
                value={waitlistEmail}
                onChange={(event) => {
                  setWaitlistEmail(event.target.value);
                  setWaitlistSuccess(false);
                }}
                placeholder="email@exemplu.ro"
                required
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 hover:border-rose-200 focus:border-rose-300 focus:ring-4 focus:ring-rose-100"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-5 w-full rounded-2xl bg-slate-950 px-6 py-4 font-semibold text-white shadow-lg shadow-slate-900/15 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/20 focus:outline-none focus:ring-4 focus:ring-slate-300 active:translate-y-0"
          >
            Intră pe lista de așteptare
          </button>

          {waitlistSuccess && (
            <div
              role="status"
              className="mt-4 rounded-2xl border border-emerald-100 bg-emerald-50 p-4 text-sm font-semibold leading-6 text-emerald-800"
            >
              Mulțumim! Te-am adăugat vizual pe lista de așteptare pentru
              această versiune.
            </div>
          )}

          <p className="mt-4 text-xs leading-5 text-slate-500">
            Formularul este doar demonstrativ momentan. Nu trimitem datele
            către un backend încă.
          </p>
        </form>
      </div>
    </section>
  );
}

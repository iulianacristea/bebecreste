"use client";

import type { FormEvent } from "react";
import { useState } from "react";

export function SleepGuideSignupForm() {
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

    // Pregătit pentru integrare backend: aici se poate apela endpointul de newsletter.
    setEmail("");
    setStatus("success");
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-[2rem] border border-slate-100 bg-white p-5 shadow-xl shadow-slate-100/80 sm:p-7"
    >
      <label
        htmlFor="sleep-guide-email"
        className="block text-sm font-bold text-slate-900"
      >
        Adresa de email
      </label>
      <div className="mt-3 grid gap-3 sm:grid-cols-[1fr_auto]">
        <input
          id="sleep-guide-email"
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
          aria-describedby="sleep-guide-help sleep-guide-feedback"
          className="w-full rounded-full border border-slate-200 bg-white px-5 py-3.5 text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 hover:border-rose-200 focus:border-rose-300 focus:ring-4 focus:ring-rose-100"
        />
        <button
          type="submit"
          className="rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-slate-900/10 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/15 focus:outline-none focus:ring-4 focus:ring-slate-300 active:translate-y-0"
        >
          Trimite-mi ghidul
        </button>
      </div>

      <p id="sleep-guide-help" className="mt-3 text-xs leading-5 text-slate-500">
        Nu trimitem spam. Formularul afișează momentan doar confirmarea.
      </p>

      {status === "success" ? (
        <p
          id="sleep-guide-feedback"
          role="status"
          className="mt-4 rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm font-semibold leading-6 text-emerald-800"
        >
          Mulțumim! Ghidul este rezervat pentru tine. Trimiterea reală pe email
          va fi conectată ulterior.
        </p>
      ) : null}

      {status === "error" ? (
        <p
          id="sleep-guide-feedback"
          role="alert"
          className="mt-4 rounded-2xl border border-rose-100 bg-rose-50 px-4 py-3 text-sm font-semibold leading-6 text-rose-800"
        >
          Te rugăm să introduci o adresă de email validă.
        </p>
      ) : null}
    </form>
  );
}

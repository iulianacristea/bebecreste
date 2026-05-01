"use client";

import { FormEvent, useState } from "react";

type ContactFields = {
  name: string;
  email: string;
  message: string;
};

const initialFields: ContactFields = {
  name: "",
  email: "",
  message: "",
};

export function ContactForm() {
  const [fields, setFields] = useState(initialFields);
  const [submitted, setSubmitted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const hasNameError = submitted && fields.name.trim() === "";
  const hasEmailError = submitted && fields.email.trim() === "";
  const hasMessageError = submitted && fields.message.trim() === "";

  function updateField(field: keyof ContactFields, value: string) {
    setFields((currentFields) => ({
      ...currentFields,
      [field]: value,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);

    if (
      fields.name.trim() === "" ||
      fields.email.trim() === "" ||
      fields.message.trim() === ""
    ) {
      setShowSuccess(false);
      return;
    }

    setShowSuccess(true);
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-white/80 bg-white/85 p-5 shadow-2xl shadow-rose-200/35 backdrop-blur sm:p-7"
    >
      <div>
        <p className="text-sm font-semibold uppercase text-rose-700">
          Scrie-ne
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
          Trimite un mesaj
        </h2>
      </div>

      <div className="mt-6 grid gap-4">
        <div>
          <label
            htmlFor="contact-name"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Nume
          </label>
          <input
            id="contact-name"
            type="text"
            value={fields.name}
            onChange={(event) => updateField("name", event.target.value)}
            aria-invalid={hasNameError}
            aria-describedby={hasNameError ? "contact-name-error" : undefined}
            className={`w-full rounded-2xl border bg-white px-4 py-3.5 text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 focus:ring-4 ${
              hasNameError
                ? "border-rose-300 focus:border-rose-400 focus:ring-rose-100"
                : "border-slate-200 hover:border-sky-200 focus:border-sky-300 focus:ring-sky-100"
            }`}
            placeholder="Numele tău"
          />
          {hasNameError && (
            <p id="contact-name-error" className="mt-2 text-sm text-rose-700">
              Te rugăm să completezi numele.
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            value={fields.email}
            onChange={(event) => updateField("email", event.target.value)}
            aria-invalid={hasEmailError}
            aria-describedby={
              hasEmailError ? "contact-email-error" : undefined
            }
            className={`w-full rounded-2xl border bg-white px-4 py-3.5 text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 focus:ring-4 ${
              hasEmailError
                ? "border-rose-300 focus:border-rose-400 focus:ring-rose-100"
                : "border-slate-200 hover:border-sky-200 focus:border-sky-300 focus:ring-sky-100"
            }`}
            placeholder="nume@email.ro"
          />
          {hasEmailError && (
            <p id="contact-email-error" className="mt-2 text-sm text-rose-700">
              Te rugăm să completezi emailul.
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Mesaj
          </label>
          <textarea
            id="contact-message"
            value={fields.message}
            onChange={(event) => updateField("message", event.target.value)}
            aria-invalid={hasMessageError}
            aria-describedby={
              hasMessageError ? "contact-message-error" : undefined
            }
            rows={6}
            className={`w-full resize-none rounded-2xl border bg-white px-4 py-3.5 text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 focus:ring-4 ${
              hasMessageError
                ? "border-rose-300 focus:border-rose-400 focus:ring-rose-100"
                : "border-slate-200 hover:border-sky-200 focus:border-sky-300 focus:ring-sky-100"
            }`}
            placeholder="Scrie-ne pe scurt cum te putem ajuta."
          />
          {hasMessageError && (
            <p
              id="contact-message-error"
              className="mt-2 text-sm text-rose-700"
            >
              Te rugăm să completezi mesajul.
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full rounded-2xl bg-slate-950 px-6 py-4 font-semibold text-white shadow-lg shadow-slate-900/15 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/20 focus:outline-none focus:ring-4 focus:ring-slate-300 active:translate-y-0"
        >
          Trimite mesajul
        </button>
      </div>

      {showSuccess && (
        <div
          role="status"
          className="mt-5 rounded-2xl border border-emerald-100 bg-emerald-50 p-4 text-sm font-semibold leading-6 text-emerald-800"
        >
          Mesajul a fost pregătit. În curând vom conecta trimiterea prin email.
        </div>
      )}

      <p className="mt-5 text-sm leading-6 text-slate-500">
        Nu oferim sfaturi medicale. Pentru situații urgente sau medicale,
        contactează medicul pediatru.
      </p>
    </form>
  );
}

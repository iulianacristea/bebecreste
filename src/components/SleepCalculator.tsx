"use client";

import { useState } from "react";

type SleepResult = {
  minimumWakeWindow: string;
  maximumWakeWindow: string;
  nextSleepInterval: string;
  bedtime: string;
  explanation: string;
};

type SleepRule = {
  minimumWakeWindowHours: number;
  maximumWakeWindowHours: number;
  bedtimeHour: number;
  explanation: string;
};

type NapCount = "1" | "2" | "3" | "not-sure";

export function SleepCalculator() {
  const [ageYears, setAgeYears] = useState("");
  const [ageMonths, setAgeMonths] = useState("");
  const [wakeTime, setWakeTime] = useState("");
  const [napCount, setNapCount] = useState<NapCount>("not-sure");
  const [result, setResult] = useState<SleepResult | null>(null);
  const [error, setError] = useState("");

  function formatTime(date: Date) {
    return date.toLocaleTimeString("ro-RO", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  function formatWakeWindow(hours: number) {
    if (hours < 1) {
      return `${Math.round(hours * 60)} min`;
    }

    if (Number.isInteger(hours)) {
      return `${hours} h`;
    }

    const fullHours = Math.floor(hours);
    const minutes = Math.round((hours - fullHours) * 60);

    return `${fullHours} h ${minutes} min`;
  }

  function addHours(date: Date, hours: number) {
    return new Date(date.getTime() + hours * 60 * 60 * 1000);
  }

  function getSleepRule(age: number): SleepRule {
    if (age <= 3) {
      return {
        minimumWakeWindowHours: 0.75,
        maximumWakeWindowHours: 1.5,
        bedtimeHour: 19,
        explanation:
          "Pentru 0-3 luni, ferestrele de veghe sunt scurte și pot varia mult de la o zi la alta.",
      };
    }

    if (age <= 6) {
      return {
        minimumWakeWindowHours: 1.5,
        maximumWakeWindowHours: 2.5,
        bedtimeHour: 19,
        explanation:
          "Pentru 4-6 luni, somnul începe să capete mai mult ritm, dar flexibilitatea rămâne importantă.",
      };
    }

    if (age <= 12) {
      return {
        minimumWakeWindowHours: 2.5,
        maximumWakeWindowHours: 4,
        bedtimeHour: 19,
        explanation:
          "Pentru 7-12 luni, mulți bebeluși au 2-3 somnuri pe zi și ferestre de veghe mai previzibile.",
      };
    }

    if (age <= 24) {
      return {
        minimumWakeWindowHours: 4,
        maximumWakeWindowHours: 6,
        bedtimeHour: 20,
        explanation:
          "Pentru 13-24 luni, mulți copii trec spre un singur somn de zi, cu o fereastră de veghe mai lungă.",
      };
    }

    return {
      minimumWakeWindowHours: 5,
      maximumWakeWindowHours: 7,
      bedtimeHour: 20,
      explanation:
        "Pentru 25-36 luni, copiii au de obicei perioade de veghe mai lungi și o rutină de seară constantă ajută mult.",
    };
  }

  function getNapExplanation(count: NapCount) {
    if (count === "1") {
      return "Ai ales 1 somn astăzi, așa că recomandarea privește mai ales echilibrul dintre somnul de zi și o seară liniștită.";
    }

    if (count === "2") {
      return "Cu 2 somnuri astăzi, intervalul poate funcționa ca reper pentru următorul somn sau pentru ajustarea rutinei de seară.";
    }

    if (count === "3") {
      return "Cu 3 somnuri astăzi, urmărește semnele de oboseală și folosește intervalul ca reper flexibil, nu ca oră fixă.";
    }

    return "Dacă nu ești sigur(ă) câte somnuri vor fi astăzi, folosește intervalul ca estimare orientativă și ajustează după semnele copilului.";
  }

  function calculateSleep() {
    const hasYears = ageYears.trim() !== "";
    const hasMonths = ageMonths.trim() !== "";
    const years = hasYears ? Number(ageYears) : 0;
    const months = hasMonths ? Number(ageMonths) : 0;
    const totalMonths = years * 12 + months;

    if ((!hasYears && !hasMonths) || !wakeTime) {
      setResult(null);
      setError("Completează vârsta și ora trezirii.");
      return;
    }

    if (
      !Number.isFinite(years) ||
      !Number.isFinite(months) ||
      !Number.isInteger(years) ||
      !Number.isInteger(months) ||
      years < 0 ||
      months < 0 ||
      months > 11
    ) {
      setResult(null);
      setError(
        "Introdu ani și luni valide. Câmpul luni trebuie să fie între 0 și 11."
      );
      return;
    }

    if (totalMonths < 0 || totalMonths > 36) {
      setResult(null);
      setError("Introdu o vârstă între 0 și 36 de luni.");
      return;
    }

    setError("");

    const sleepRule = getSleepRule(totalMonths);
    const [hours, minutes] = wakeTime.split(":").map(Number);

    const wakeDate = new Date();
    wakeDate.setHours(hours, minutes, 0, 0);

    const minimumNextSleep = addHours(
      wakeDate,
      sleepRule.minimumWakeWindowHours
    );
    const maximumNextSleep = addHours(
      wakeDate,
      sleepRule.maximumWakeWindowHours
    );

    const bedtime = new Date();
    bedtime.setHours(sleepRule.bedtimeHour, 0, 0, 0);

    setResult({
      minimumWakeWindow: formatWakeWindow(sleepRule.minimumWakeWindowHours),
      maximumWakeWindow: formatWakeWindow(sleepRule.maximumWakeWindowHours),
      nextSleepInterval: `${formatTime(minimumNextSleep)} - ${formatTime(
        maximumNextSleep
      )}`,
      bedtime: formatTime(bedtime),
      explanation: `${sleepRule.explanation} ${getNapExplanation(napCount)}`,
    });
  }

  return (
    <div
      id="calculator"
      className="rounded-[2rem] border border-white/80 bg-white/80 p-5 shadow-2xl shadow-rose-200/40 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-2xl hover:shadow-rose-200/50 sm:p-7"
    >
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase text-sky-700">
            Calculator somn
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-950">
            Află următoarea fereastră
          </h2>
        </div>
        <div className="rounded-2xl bg-sky-50 px-3 py-2 text-sm font-semibold text-sky-700 ring-1 ring-sky-100">
          orientativ
        </div>
      </div>

      <form
        className="grid gap-4 sm:grid-cols-2"
        onSubmit={(event) => {
          event.preventDefault();
          calculateSleep();
        }}
      >
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label
              htmlFor="age-years"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Ani
            </label>
            <input
              id="age-years"
              type="number"
              min="0"
              max="3"
              step="1"
              inputMode="numeric"
              value={ageYears}
              onChange={(event) => setAgeYears(event.target.value)}
              placeholder="ex: 1"
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 hover:border-sky-200 focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
            />
          </div>

          <div>
            <label
              htmlFor="age-months"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Luni
            </label>
            <input
              id="age-months"
              type="number"
              min="0"
              max="11"
              step="1"
              inputMode="numeric"
              value={ageMonths}
              onChange={(event) => setAgeMonths(event.target.value)}
              placeholder="ex: 6"
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 hover:border-sky-200 focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="wake-time"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Ora trezirii
          </label>
          <input
            id="wake-time"
            type="time"
            value={wakeTime}
            onChange={(e) => setWakeTime(e.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition duration-200 hover:border-sky-200 focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="nap-count"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Câte somnuri are astăzi?
          </label>
          <select
            id="nap-count"
            value={napCount}
            onChange={(event) => setNapCount(event.target.value as NapCount)}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition duration-200 hover:border-sky-200 focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
          >
            <option value="1">1 somn</option>
            <option value="2">2 somnuri</option>
            <option value="3">3 somnuri</option>
            <option value="not-sure">Nu sunt sigur(ă)</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full rounded-2xl bg-emerald-600 px-6 py-4 font-semibold text-white shadow-lg shadow-emerald-600/20 transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-600/25 focus:outline-none focus:ring-4 focus:ring-emerald-200 active:translate-y-0 sm:col-span-2"
        >
          Calculează
        </button>
      </form>

      {error && (
        <div
          role="alert"
          className="mt-5 rounded-2xl border border-rose-100 bg-rose-50 p-4 text-sm font-semibold leading-6 text-rose-800"
        >
          {error}
        </div>
      )}

      {result && (
        <section
          aria-live="polite"
          className="mt-5 rounded-[1.5rem] border border-emerald-100 bg-gradient-to-br from-emerald-50 to-sky-50 p-4 shadow-sm transition duration-300 hover:shadow-md hover:shadow-emerald-100"
        >
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold uppercase text-emerald-700">
                Recomandare
              </p>
              <h3 className="mt-1 text-lg font-bold text-slate-950">
                Ritmul de azi
              </h3>
            </div>
            <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-slate-600 ring-1 ring-white">
              calcul instant
            </span>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-white/85 p-4 ring-1 ring-white transition duration-200 hover:bg-white hover:shadow-sm">
              <p className="text-xs font-semibold uppercase text-slate-500">
                Fereastră minimă
              </p>
              <p className="mt-2 text-3xl font-bold text-slate-950">
                {result.minimumWakeWindow}
              </p>
            </div>

            <div className="rounded-2xl bg-white/85 p-4 ring-1 ring-white transition duration-200 hover:bg-white hover:shadow-sm">
              <p className="text-xs font-semibold uppercase text-slate-500">
                Fereastră maximă
              </p>
              <p className="mt-2 text-3xl font-bold text-slate-950">
                {result.maximumWakeWindow}
              </p>
            </div>

            <div className="rounded-2xl bg-white/85 p-4 ring-1 ring-white transition duration-200 hover:bg-white hover:shadow-sm sm:col-span-2">
              <p className="text-xs font-semibold uppercase text-slate-500">
                Următorul somn recomandat
              </p>
              <p className="mt-2 break-words text-2xl font-bold text-slate-950 sm:text-3xl">
                {result.nextSleepInterval}
              </p>
            </div>

            <div className="rounded-2xl bg-white/85 p-4 ring-1 ring-white transition duration-200 hover:bg-white hover:shadow-sm sm:col-span-2">
              <p className="text-xs font-semibold uppercase text-slate-500">
                Culcare recomandată
              </p>
              <p className="mt-2 text-3xl font-bold text-slate-950">
                {result.bedtime}
              </p>
            </div>
          </div>

          <div className="mt-3 rounded-2xl bg-white/70 p-4">
            <p className="text-sm font-semibold text-slate-900">
              Explicație scurtă
            </p>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              {result.explanation}
            </p>
          </div>

          <p className="mt-3 text-xs leading-5 text-slate-500">
            Informațiile oferite sunt orientative și nu înlocuiesc sfatul unui
            medic.
          </p>
        </section>
      )}
    </div>
  );
}

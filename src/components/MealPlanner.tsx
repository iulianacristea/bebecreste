"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

type PlannerResult = {
  breakfast: string;
  lunch: string;
  dinner: string;
  snack: string;
  note: string;
};

function getAgeGroup(ageInMonths: number) {
  if (ageInMonths < 6) {
    return "too-young";
  }

  if (ageInMonths <= 8) {
    return "early";
  }

  if (ageInMonths <= 12) {
    return "baby";
  }

  return "toddler";
}

function buildAvailableFoodText(foods: string) {
  const trimmedFoods = foods.trim();

  if (!trimmedFoods) {
    return "folosind alimente simple potrivite vârstei";
  }

  return `pornind de la ce ai acasă: ${trimmedFoods}`;
}

function getAvailableFoodItems(foods: string) {
  return foods
    .split(/[,\n]/)
    .map((food) => food.trim())
    .filter(Boolean);
}

function filterFoodsByKeywords(items: string[], keywords: string[]) {
  return items.filter((item) => {
    const normalizedItem = item.toLocaleLowerCase("ro-RO");

    return keywords.some((keyword) => normalizedItem.includes(keyword));
  });
}

function formatFoodList(items: string[]) {
  if (items.length === 0) {
    return "";
  }

  return items.join(", ");
}

function buildFoodGroups(foods: string) {
  const items = getAvailableFoodItems(foods);
  const proteinFoods = filterFoodsByKeywords(items, [
    "pui",
    "vit",
    "vita",
    "curcan",
    "pește",
    "peste",
    "carne",
  ]);
  const breakfastFoods = filterFoodsByKeywords(items, [
    "banan",
    "măr",
    "mar",
    "pară",
    "para",
    "fruct",
    "iaurt",
    "ovăz",
    "ovaz",
    "cereal",
    "brânz",
    "branz",
  ]);
  const vegetableFoods = filterFoodsByKeywords(items, [
    "morcov",
    "dovlecel",
    "cartof",
    "broccoli",
    "ardei",
    "mazăre",
    "mazare",
    "legum",
  ]);

  return {
    breakfastText: formatFoodList(breakfastFoods),
    proteinText: formatFoodList(proteinFoods),
    vegetableText: formatFoodList(vegetableFoods),
  };
}

function getAgeFoodGuide(ageInMonths: number) {
  if (ageInMonths === 6) {
    return {
      fruit: "banană sau măr",
      vegetables: "dovlecel, păstârnac, morcov sau cartof dulce",
      cereals: "cereale speciale pentru bebeluși",
      protein: "",
      dairy: "lapte matern sau formulă",
      egg: "",
      calories: "aprox. 700-750 kcal/zi",
      meals: "o masă solidă la prânz, restul meselor fiind lapte",
    };
  }

  if (ageInMonths <= 8) {
    return {
      fruit: "mango, pere, caise, prune sau dovleac",
      vegetables: "sparanghel, fasole, mazăre, cartofi sau broccoli",
      cereals: "cereale speciale pentru bebeluși",
      protein: "pui, curcan, pește slab sau porc slab",
      dairy: "iaurt integral sau brânzică de vaci",
      egg: "gălbenuș fiert tare",
      calories: "aprox. 720-800 kcal/zi",
      meals:
        ageInMonths === 7
          ? "mic dejun și prânz; cina se introduce de obicei de la 8 luni"
          : "mic dejun, prânz, cină și o gustare simplă",
    };
  }

  if (ageInMonths <= 10) {
    return {
      fruit: "pepene roșu, pepene galben sau ananas",
      vegetables: "ceapă, sfeclă roșie, conopidă sau spanac",
      cereals: "toate cerealele potrivite vârstei",
      protein: "vită sau pește",
      dairy: "smântână, în cantitate potrivită vârstei",
      egg: "puțin albuș, dacă a fost introdus treptat",
      calories: "aprox. 750-850 kcal/zi",
      meals: "3 mese solide și 1-2 gustări, în funcție de ritmul copilului",
    };
  }

  if (ageInMonths <= 12) {
    return {
      fruit: "citrice, kiwi sau roșii, dacă sunt tolerate",
      vegetables: "toate legumele potrivite copilului",
      cereals: "toate cerealele potrivite vârstei",
      protein: "alimentele introduse anterior",
      dairy: "lapte de capră și preparate, dacă sunt potrivite copilului",
      egg: "ou de găină întreg, introdus treptat",
      calories: "aprox. 800-900 kcal/zi",
      meals: "3 mese solide și până la 2 gustări",
    };
  }

  return {
    fruit: "fructe variate, potrivite copilului",
    vegetables: "legume variate",
    cereals: "cereale, paste, orez sau pâine potrivite vârstei",
    protein: "pui, curcan, vită, pește sau ou",
    dairy: "iaurt, brânză sau alte lactate tolerate",
    egg: "ou, dacă este tolerat",
    calories: "necesarul diferă mult în funcție de copil",
    meals: "3 mese principale și gustări simple, după apetit",
  };
}

function getPlannerResult(
  ageInMonths: number,
  allergies: string,
  isPickyEater: boolean,
  availableFoods: string
): PlannerResult {
  const ageGroup = getAgeGroup(ageInMonths);
  const foodsText = buildAvailableFoodText(availableFoods);
  const { breakfastText, proteinText, vegetableText } =
    buildFoodGroups(availableFoods);
  const breakfastDetail = breakfastText
    ? ` Poți folosi: ${breakfastText}.`
    : "";
  const proteinDetail = proteinText
    ? ` Poți include la masa principală: ${proteinText}.`
    : "";
  const vegetableDetail = vegetableText
    ? ` Merge bine cu legume precum: ${vegetableText}.`
    : "";
  const allergyNote = allergies.trim()
    ? `Evită alimentele menționate la alergii: ${allergies.trim()}.`
    : "Verifică mereu ingredientele noi și introdu-le treptat.";
  const pickyNote = isPickyEater
    ? "Pentru un copil mofturos, păstrează porțiile mici și oferă alimentele fără presiune."
    : "Poți păstra mesele simple, variate și adaptate apetitului copilului.";

  if (ageGroup === "too-young") {
    return {
      breakfast: "Pentru sub 6 luni, discută cu pediatrul înainte de diversificare.",
      lunch: "Laptele rămâne alimentul principal, conform recomandării medicului.",
      dinner: "Nu forța introducerea meselor solide înainte ca bebe să fie pregătit.",
      snack: "Gustările solide nu sunt necesare în această etapă.",
      note: `${allergyNote} ${pickyNote}`,
    };
  }

  if (ageGroup === "early") {
    const guide = getAgeFoodGuide(ageInMonths);

    if (ageInMonths === 6) {
      return {
        breakfast:
          "La 6 luni, micul dejun solid nu este încă necesar. Laptele matern sau formula rămâne baza dimineții.",
        lunch: `O singură masă solidă la prânz: piure fin din ${guide.vegetables}, eventual cu ${guide.cereals}.`,
        dinner:
          "Cina solidă se introduce mai târziu. Seara rămâne simplă, cu lapte și rutină calmă.",
        snack:
          "Gustările nu sunt necesare la 6 luni. Diversificarea începe blând, cu o masă pe zi.",
        note: `${allergyNote} La 6 luni, convenția este o singură masă solidă, de obicei la prânz. ${guide.calories} orientativ. ${pickyNote}`,
      };
    }

    if (ageInMonths === 7) {
      return {
        breakfast: `Mic dejun simplu: fruct moale sau cereale pentru bebeluși. Variante potrivite: ${guide.fruit}. ${breakfastDetail}`,
        lunch: `Prânz cu legume și, dacă au fost introduse, proteină potrivită vârstei: ${guide.protein}.${proteinDetail}${vegetableDetail}`,
        dinner:
          "Cina solidă se introduce de obicei de la 8 luni. Până atunci, păstrează seara simplă.",
        snack:
          "Gustarea nu este obligatorie la 7 luni; poate rămâne lapte, în funcție de rutina copilului.",
        note: `${allergyNote} La 7 luni, se introduce micul dejun, iar prânzul rămâne masa principală. ${guide.meals}. ${pickyNote}`,
      };
    }

    return {
      breakfast: `Mic dejun cu fruct moale, cereale pentru bebeluși sau iaurt integral, dacă a fost introdus. Variante potrivite: ${guide.fruit}.${breakfastDetail}`,
      lunch: `Prânz cu legume și proteină potrivită vârstei: ${guide.protein}.${proteinDetail}${vegetableDetail}`,
      dinner: `Cină simplă cu legume moi sau cereale pentru bebeluși. Legume potrivite: ${guide.vegetables}.`,
      snack: "O gustare mică: fruct moale, iaurt sau câteva lingurițe dintr-un aliment deja acceptat.",
      note: `${allergyNote} La 6-8 luni, mesele sunt mai mult despre explorare decât cantitate. ${pickyNote}`,
    };
  }

  if (ageGroup === "baby") {
    const guide = getAgeFoodGuide(ageInMonths);

    return {
      breakfast: `Mic dejun cu iaurt, fruct sau cereale potrivite vârstei. Fructe potrivite: ${guide.fruit}.${breakfastDetail}`,
      lunch: `Prânz cu legume și proteină: ${guide.protein}. Legume potrivite: ${guide.vegetables}.${proteinDetail}${vegetableDetail}`,
      dinner: `Cină cu cereale, legume sau o combinație ușoară deja acceptată. ${guide.cereals}.`,
      snack:
        ageInMonths <= 9
          ? "O gustare simplă: fruct moale, iaurt sau bucăți potrivite vârstei."
          : "1-2 gustări simple: fruct, iaurt, legume moi sau preparate ușoare de casă.",
      note: `${allergyNote} Între 9 și 12 luni, poți crește treptat textura și varietatea. ${guide.meals}; ${guide.calories} orientativ. ${pickyNote}`,
    };
  }

  const guide = getAgeFoodGuide(ageInMonths);

  return {
    breakfast: `Omletă moale, iaurt cu fruct sau terci cald.${breakfastDetail}`,
    lunch: `Supă cremă, legume cu proteină sau un bol simplu cu cereale și legume.${proteinDetail}${vegetableDetail}`,
    dinner: `Cină ușoară cu legume, paste, orez sau alimente deja acceptate.${proteinDetail}`,
    snack: "Fruct, iaurt, brioșă simplă făcută acasă sau bastonașe moi de legume.",
    note: `${allergyNote} După 12 luni, rutina contează mult: mese previzibile, porții mici și atmosferă calmă. ${guide.meals}. ${pickyNote} ${foodsText}.`,
  };
}

export function MealPlanner() {
  const [ageInMonths, setAgeInMonths] = useState("");
  const [allergies, setAllergies] = useState("");
  const [isPickyEater, setIsPickyEater] = useState("no");
  const [availableFoods, setAvailableFoods] = useState("");
  const [result, setResult] = useState<PlannerResult | null>(null);
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const parsedAge = Number(ageInMonths);

    if (
      ageInMonths.trim() === "" ||
      !Number.isFinite(parsedAge) ||
      !Number.isInteger(parsedAge) ||
      parsedAge < 0 ||
      parsedAge > 48
    ) {
      setResult(null);
      setError("Introdu o vârstă validă, între 0 și 48 de luni.");
      return;
    }

    setError("");
    setResult(
      getPlannerResult(
        parsedAge,
        allergies,
        isPickyEater === "yes",
        availableFoods
      )
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
      <form
        onSubmit={handleSubmit}
        className="rounded-[2rem] border border-white/80 bg-white/85 p-5 shadow-2xl shadow-rose-200/35 backdrop-blur sm:p-7"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase text-rose-700">
              Date pentru masă
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950">
              Construiește un plan simplu
            </h2>
          </div>
          <span className="rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700 ring-1 ring-rose-100">
            fără cont
          </span>
        </div>

        <div className="mt-6 grid gap-4">
          <div>
            <label
              htmlFor="meal-age"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Vârsta copilului în luni
            </label>
            <input
              id="meal-age"
              type="number"
              min="0"
              max="48"
              step="1"
              inputMode="numeric"
              value={ageInMonths}
              onChange={(event) => setAgeInMonths(event.target.value)}
              placeholder="ex: 10"
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 hover:border-rose-200 focus:border-rose-300 focus:ring-4 focus:ring-rose-100"
            />
          </div>

          <div>
            <label
              htmlFor="meal-allergies"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Alergii
            </label>
            <input
              id="meal-allergies"
              type="text"
              value={allergies}
              onChange={(event) => setAllergies(event.target.value)}
              placeholder="ex: ou, lactate, nuci"
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 hover:border-rose-200 focus:border-rose-300 focus:ring-4 focus:ring-rose-100"
            />
          </div>

          <div>
            <label
              htmlFor="picky-eater"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Este mofturos la mâncare?
            </label>
            <select
              id="picky-eater"
              value={isPickyEater}
              onChange={(event) => setIsPickyEater(event.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition duration-200 hover:border-rose-200 focus:border-rose-300 focus:ring-4 focus:ring-rose-100"
            >
              <option value="no">Nu</option>
              <option value="yes">Da</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="available-foods"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Alimente disponibile acasă
            </label>
            <textarea
              id="available-foods"
              value={availableFoods}
              onChange={(event) => setAvailableFoods(event.target.value)}
              rows={4}
              placeholder="ex: banană, iaurt, morcov, orez, dovlecel"
              className="w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 hover:border-rose-200 focus:border-rose-300 focus:ring-4 focus:ring-rose-100"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-slate-950 px-6 py-4 font-semibold text-white shadow-lg shadow-slate-900/15 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/20 focus:outline-none focus:ring-4 focus:ring-slate-300 active:translate-y-0"
          >
            Generează idei de mese
          </button>
        </div>

        {error && (
          <div
            role="alert"
            className="mt-5 rounded-2xl border border-rose-100 bg-rose-50 p-4 text-sm font-semibold leading-6 text-rose-800"
          >
            {error}
          </div>
        )}
      </form>

      <section
        aria-live="polite"
        className="rounded-[2rem] border border-white/80 bg-white/85 p-5 shadow-2xl shadow-sky-100/45 backdrop-blur sm:p-7"
      >
        <p className="text-sm font-semibold uppercase text-emerald-700">
          Idei pentru azi
        </p>
        <h2 className="mt-2 text-2xl font-bold text-slate-950">
          {result ? "Plan orientativ de mese" : "Rezultatul va apărea aici"}
        </h2>

        {result ? (
          <div className="mt-6 grid gap-3">
            {[
              ["Mic dejun", result.breakfast],
              ["Prânz", result.lunch],
              ["Cină", result.dinner],
              ["Gustare", result.snack],
            ].map(([label, text]) => (
              <article
                key={label}
                className="rounded-[1.25rem] border border-slate-100 bg-slate-50/75 p-4 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase text-sky-700">
                  {label}
                </p>
                <p className="mt-2 text-base leading-7 text-slate-700">
                  {text}
                </p>
              </article>
            ))}

            <div className="rounded-[1.25rem] border border-emerald-100 bg-emerald-50/70 p-4">
              <p className="text-sm font-semibold text-emerald-800">
                Notă scurtă
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                {result.note}
              </p>
            </div>
          </div>
        ) : (
          <div className="mt-6 rounded-[1.5rem] border border-dashed border-sky-200 bg-sky-50/60 p-5">
            <p className="text-base leading-7 text-slate-600">
              Completează vârsta, eventualele alergii și ce alimente ai la
              îndemână. Plannerul îți va sugera idei simple pentru mesele zilei.
            </p>
          </div>
        )}

        <p className="mt-5 text-xs leading-5 text-slate-500">
          Informațiile sunt orientative și nu înlocuiesc sfatul medicului.
        </p>
        <Link
          href="/blog/alimente-de-evitat-in-diversificare"
          className="mt-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-rose-100 transition duration-200 hover:-translate-y-0.5 hover:bg-rose-50 hover:text-slate-950 focus:outline-none focus:ring-4 focus:ring-rose-100 active:translate-y-0"
        >
          Vezi alimentele de evitat în diversificare
        </Link>
      </section>
    </div>
  );
}

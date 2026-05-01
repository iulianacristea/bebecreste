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

type AllergyFlags = {
  hasEggAllergy: boolean;
  hasDairyAllergy: boolean;
  hasNutAllergy: boolean;
};

function normalizeText(text: string) {
  return text.toLocaleLowerCase("ro-RO");
}

function hasAny(text: string, keywords: string[]) {
  const normalized = normalizeText(text);
  return keywords.some((keyword) => normalized.includes(keyword));
}

function getAllergyFlags(allergies: string): AllergyFlags {
  return {
    hasEggAllergy: hasAny(allergies, [
      "ou",
      "ouă",
      "oua",
      "egg",
      "gălbenuș",
      "galbenus",
      "albuș",
      "albus",
      "omlet",
    ]),
    hasDairyAllergy: hasAny(allergies, [
      "lactate",
      "lapte",
      "iaurt",
      "brânză",
      "branza",
      "smântână",
      "smantana",
    ]),
    hasNutAllergy: hasAny(allergies, [
      "nuci",
      "arahide",
      "alune",
      "migdale",
      "caju",
    ]),
  };
}

function getAgeGroup(ageInMonths: number) {
  if (ageInMonths < 6) return "too-young";
  if (ageInMonths <= 8) return "early";
  if (ageInMonths <= 12) return "baby";
  return "toddler";
}

function getAvailableFoodItems(foods: string) {
  return foods
    .split(/[,\n]/)
    .map((food) => food.trim())
    .filter(Boolean);
}

function isFoodAllergic(food: string, flags: AllergyFlags) {
  const normalized = normalizeText(food);

  if (
    flags.hasEggAllergy &&
    hasAny(normalized, [
      "ou",
      "ouă",
      "oua",
      "egg",
      "omlet",
      "gălbenuș",
      "galbenus",
      "albuș",
      "albus",
    ])
  ) {
    return true;
  }

  if (
    flags.hasDairyAllergy &&
    hasAny(normalized, [
      "lapte",
      "iaurt",
      "brânză",
      "branza",
      "smântână",
      "smantana",
      "lactate",
    ])
  ) {
    return true;
  }

  if (
    flags.hasNutAllergy &&
    hasAny(normalized, ["nuci", "arahide", "alune", "migdale", "caju"])
  ) {
    return true;
  }

  return false;
}

function filterAllergicFoods(items: string[], flags: AllergyFlags) {
  return items.filter((item) => !isFoodAllergic(item, flags));
}

function filterFoodsByKeywords(items: string[], keywords: string[]) {
  return items.filter((item) => {
    const normalizedItem = normalizeText(item);
    return keywords.some((keyword) => normalizedItem.includes(keyword));
  });
}

function formatFoodList(items: string[]) {
  return items.length ? items.join(", ") : "";
}

function buildFoodGroups(foods: string, flags: AllergyFlags) {
  const safeItems = filterAllergicFoods(getAvailableFoodItems(foods), flags);

  const proteinFoods = filterFoodsByKeywords(safeItems, [
    "pui",
    "vit",
    "vita",
    "curcan",
    "pește",
    "peste",
    "carne",
  ]);

  const breakfastFoods = filterFoodsByKeywords(safeItems, [
    "banan",
    "măr",
    "mar",
    "pară",
    "para",
    "fruct",
    "ovăz",
    "ovaz",
    "cereal",
    "pâine",
    "paine",
  ]);

  const vegetableFoods = filterFoodsByKeywords(safeItems, [
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

function getAgeFoodGuide(ageInMonths: number, flags: AllergyFlags) {
  const dairy = flags.hasDairyAllergy
    ? "alternative fără lactate, potrivite vârstei"
    : "iaurt integral sau brânzică de vaci";

  if (ageInMonths === 6) {
    return {
      vegetables: "dovlecel, păstârnac, morcov sau cartof dulce",
      cereals: "cereale speciale pentru bebeluși",
      protein: "",
      calories: "aprox. 700-750 kcal/zi",
      meals: "o masă solidă la prânz, restul meselor fiind lapte",
    };
  }

  if (ageInMonths <= 8) {
    return {
      vegetables: "sparanghel, fasole, mazăre, cartofi sau broccoli",
      cereals: "cereale speciale pentru bebeluși",
      protein: "pui, curcan, pește slab sau porc slab",
      dairy,
      calories: "aprox. 720-800 kcal/zi",
      meals:
        ageInMonths === 7
          ? "mic dejun și prânz; cina se introduce de obicei de la 8 luni"
          : "mic dejun, prânz, cină și o gustare simplă",
    };
  }

  if (ageInMonths <= 12) {
    return {
      vegetables: "legume variate, potrivite copilului",
      cereals: "cereale, paste moi sau orez potrivite vârstei",
      protein: flags.hasEggAllergy
        ? "pui, curcan, vită sau pește"
        : "pui, curcan, vită, pește sau ou introdus treptat",
      dairy,
      calories: "aprox. 800-900 kcal/zi",
      meals: "3 mese solide și până la 2 gustări",
    };
  }

  return {
    vegetables: "legume variate",
    cereals: "cereale, paste, orez sau pâine potrivite vârstei",
    protein: flags.hasEggAllergy
      ? "pui, curcan, vită sau pește"
      : "pui, curcan, vită, pește sau ou",
    dairy,
    calories: "necesarul diferă mult în funcție de copil",
    meals: "3 mese principale și gustări simple, după apetit",
  };
}

function getBreakfastSuggestion(flags: AllergyFlags, breakfastDetail: string) {
  if (flags.hasEggAllergy && flags.hasDairyAllergy) {
    return `Terci cald cu fruct, pâine moale cu pastă de legume sau fructe potrivite vârstei.${breakfastDetail}`;
  }

  if (flags.hasEggAllergy) {
    return `Terci cald, fructe potrivite vârstei sau pâine moale cu pastă de legume.${breakfastDetail}`;
  }

  if (flags.hasDairyAllergy) {
    return `Omletă moale, terci cald cu fruct sau pâine moale cu pastă de legume.${breakfastDetail}`;
  }

  return `Omletă moale, iaurt cu fruct sau terci cald.${breakfastDetail}`;
}

function getSnackSuggestion(flags: AllergyFlags) {
  if (flags.hasDairyAllergy) {
    return "Fruct, bastonașe moi de legume, pâine moale sau o gustare simplă fără lactate.";
  }

  return "Fruct, iaurt, brioșă simplă făcută acasă sau bastonașe moi de legume.";
}

function getCalorieExplanation(ageInMonths: number, weightKg?: number) {
  let coefficient = 85;
  let range = "1–3 ani: ~80–90 kcal/kg/zi";

  if (ageInMonths >= 6 && ageInMonths <= 12) {
    coefficient = 90;
    range = "6–12 luni: ~80–100 kcal/kg/zi";
  }

  if (weightKg && weightKg > 0) {
    const estimatedCalories = Math.round(weightKg * coefficient);

    return ` Necesar caloric estimat: ${estimatedCalories} kcal/zi, calculat orientativ cu formula: greutate (${weightKg} kg) × ${coefficient} kcal/kg/zi.`;
  }

  return ` Necesar caloric zilnic orientativ: greutate (kg) × coeficient caloric (kcal/kg/zi). În general: ${range}.`;
}

function getPlannerResult(
  ageInMonths: number,
  allergies: string,
  isPickyEater: boolean,
  availableFoods: string,
  weightKg?: number
): PlannerResult {
  const ageGroup = getAgeGroup(ageInMonths);
  const flags = getAllergyFlags(allergies);
  const guide = getAgeFoodGuide(ageInMonths, flags);

  const { breakfastText, proteinText, vegetableText } = buildFoodGroups(
    availableFoods,
    flags
  );

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

  const calorieNote = getCalorieExplanation(ageInMonths, weightKg);

  if (ageGroup === "too-young") {
    return {
      breakfast:
        "Pentru sub 6 luni, discută cu pediatrul înainte de diversificare.",
      lunch:
        "Laptele rămâne alimentul principal, conform recomandării medicului.",
      dinner:
        "Nu forța introducerea meselor solide înainte ca bebe să fie pregătit.",
      snack: "Gustările solide nu sunt necesare în această etapă.",
      note: `${allergyNote} ${pickyNote}${calorieNote}`,
    };
  }

  if (ageGroup === "early") {
    if (ageInMonths === 6) {
      return {
        breakfast:
          "La 6 luni, micul dejun solid nu este încă necesar. Laptele matern sau formula rămâne baza dimineții.",
        lunch: `O singură masă solidă la prânz: piure fin din ${guide.vegetables}, eventual cu ${guide.cereals}.`,
        dinner:
          "Cina solidă se introduce mai târziu. Seara rămâne simplă, cu lapte și rutină calmă.",
        snack:
          "Gustările nu sunt necesare la 6 luni. Diversificarea începe blând, cu o masă pe zi.",
        note: `${allergyNote} La 6 luni, recomandarea orientativă este o singură masă solidă, de obicei la prânz. ${guide.calories}. ${pickyNote}${calorieNote}`,
      };
    }

    return {
      breakfast: getBreakfastSuggestion(flags, breakfastDetail),
      lunch: `Prânz cu legume și proteină potrivită vârstei: ${guide.protein}.${proteinDetail}${vegetableDetail}`,
      dinner:
        ageInMonths === 7
          ? "Cina solidă se introduce de obicei de la 8 luni. Până atunci, păstrează seara simplă."
          : `Cină simplă cu legume moi sau cereale pentru bebeluși. Legume potrivite: ${guide.vegetables}.`,
      snack:
        ageInMonths === 7
          ? "Gustarea nu este obligatorie la 7 luni; poate rămâne lapte, în funcție de rutina copilului."
          : flags.hasDairyAllergy
            ? "O gustare mică: fruct moale, legume moi sau câteva lingurițe dintr-un aliment deja acceptat."
            : "O gustare mică: fruct moale, iaurt sau câteva lingurițe dintr-un aliment deja acceptat.",
      note: `${allergyNote} ${guide.meals}. ${pickyNote}${calorieNote}`,
    };
  }

  if (ageGroup === "baby") {
    return {
      breakfast: getBreakfastSuggestion(flags, breakfastDetail),
      lunch: `Prânz cu legume și proteină: ${guide.protein}. Legume potrivite: ${guide.vegetables}.${proteinDetail}${vegetableDetail}`,
      dinner: `Cină cu cereale, legume sau o combinație ușoară deja acceptată. ${guide.cereals}.`,
      snack: flags.hasDairyAllergy
        ? "1-2 gustări simple: fruct, legume moi sau preparate ușoare de casă fără lactate."
        : "1-2 gustări simple: fruct, iaurt, legume moi sau preparate ușoare de casă.",
      note: `${allergyNote} Între 9 și 12 luni, poți crește treptat textura și varietatea. ${guide.meals}; ${guide.calories}. ${pickyNote}${calorieNote}`,
    };
  }

  return {
    breakfast: getBreakfastSuggestion(flags, breakfastDetail),
    lunch: `Supă cremă, legume cu proteină sau un bol simplu cu cereale și legume.${proteinDetail}${vegetableDetail}`,
    dinner: `Cină ușoară cu legume, paste, orez sau alimente deja acceptate.${proteinDetail}`,
    snack: getSnackSuggestion(flags),
    note: `${allergyNote} După 12 luni, rutina contează mult: mese previzibile, porții mici și atmosferă calmă. ${guide.meals}. ${pickyNote}${calorieNote}`,
  };
}

export function MealPlanner() {
  const [ageInMonths, setAgeInMonths] = useState("");
  const [weightKg, setWeightKg] = useState("");
  const [allergies, setAllergies] = useState("");
  const [isPickyEater, setIsPickyEater] = useState("no");
  const [availableFoods, setAvailableFoods] = useState("");
  const [result, setResult] = useState<PlannerResult | null>(null);
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const parsedAge = Number(ageInMonths);
    const parsedWeight = weightKg.trim() ? Number(weightKg) : undefined;

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

    if (
      parsedWeight !== undefined &&
      (!Number.isFinite(parsedWeight) || parsedWeight <= 0 || parsedWeight > 30)
    ) {
      setResult(null);
      setError("Introdu o greutate validă sau lasă câmpul necompletat.");
      return;
    }

    setError("");
    setResult(
      getPlannerResult(
        parsedAge,
        allergies,
        isPickyEater === "yes",
        availableFoods,
        parsedWeight
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
              placeholder="ex: 13"
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 hover:border-rose-200 focus:border-rose-300 focus:ring-4 focus:ring-rose-100"
            />
          </div>

          <div>
            <label
              htmlFor="meal-weight"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Greutatea copilului în kg{" "}
              <span className="font-normal text-slate-400">(opțional)</span>
            </label>
            <input
              id="meal-weight"
              type="number"
              min="1"
              max="30"
              step="0.1"
              inputMode="decimal"
              value={weightKg}
              onChange={(event) => setWeightKg(event.target.value)}
              placeholder="ex: 10.5"
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
              placeholder="ex: banană, morcov, orez, dovlecel"
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

            <div className="rounded-[1.5rem] border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-sky-50 p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-lg">
                  💡
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                    Notă scurtă
                  </p>
                  <p className="text-xs text-slate-500">
                    Recomandare orientativă pentru ritmul copilului
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-700">
                {result.note}
              </p>

              <div className="mt-5 rounded-2xl border border-emerald-100 bg-white/80 p-4">
                <p className="text-sm font-semibold text-slate-900">
                  Necesar caloric zilnic
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Formula orientativă:
                  <span className="font-semibold text-emerald-700">
                    {" "}
                    greutate (kg) × coeficient caloric (kcal/kg/zi)
                  </span>
                </p>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl bg-emerald-50 p-3">
                    <p className="text-xs font-semibold uppercase text-emerald-700">
                      6–12 luni
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-800">
                      ~80–100 kcal/kg/zi
                    </p>
                  </div>

                  <div className="rounded-xl bg-sky-50 p-3">
                    <p className="text-xs font-semibold uppercase text-sky-700">
                      1–3 ani
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-800">
                      ~80–90 kcal/kg/zi
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-xs leading-5 text-slate-500">
                Valorile sunt orientative și pot varia în funcție de copil, nivelul de
                activitate și recomandările pediatrului.
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
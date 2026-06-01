export type SleepAgeScheduleItem = {
  time: string;
  label: string;
  description: string;
};

export type SleepAgeFaqItem = {
  question: string;
  answer: string;
};

export type SleepAgePage = {
  ageMonths: number;
  slug: string;
  seoTitle: string;
  seoDescription: string;
  title: string;
  description: string;
  napRecommendation: string;
  wakeWindow: string;
  dailySchedule: SleepAgeScheduleItem[];
  faqs: SleepAgeFaqItem[];
};

const medicalDisclaimer =
  "Informațiile de pe BebeCrește.ro sunt orientative și nu înlocuiesc sfatul medicului pediatru sau al unui specialist. Pentru probleme medicale, alimentație specială sau tulburări de somn, consultă un specialist.";

function scheduleForThreeOrFourNaps(ageMonths: number, wakeWindow: string) {
  const hasFourNaps = ageMonths <= 5;

  return [
    {
      time: "07:00",
      label: "Trezire",
      description: "Început de zi, lumină naturală și o rutină blândă.",
    },
    {
      time: ageMonths === 3 ? "08:30" : "09:00",
      label: "Somn 1",
      description: `Primul somn vine după o fereastră de veghe de aproximativ ${wakeWindow}.`,
    },
    {
      time: ageMonths === 3 ? "11:00" : "11:45",
      label: "Somn 2",
      description: "Al doilea somn ajută la păstrarea energiei pentru prânz.",
    },
    {
      time: ageMonths === 3 ? "13:45" : "14:30",
      label: "Somn 3",
      description: "Un somn de după-amiază poate preveni oboseala acumulată.",
    },
    ...(hasFourNaps
      ? [
          {
            time: "16:45",
            label: "Somn 4",
            description:
              "Ultimul somn poate fi mai scurt, ca seara să rămână calmă.",
          },
        ]
      : []),
    {
      time: "19:00 - 20:00",
      label: "Culcare",
      description: "Rutina de seară poate începe cu 20-30 de minute înainte.",
    },
  ];
}

function scheduleForTwoOrThreeNaps(ageMonths: number, wakeWindow: string) {
  const hasThreeNaps = ageMonths <= 8;

  return [
    {
      time: "07:00",
      label: "Trezire",
      description: "Început de zi și expunere la lumină naturală.",
    },
    {
      time: ageMonths <= 6 ? "09:15" : "09:45",
      label: "Somn 1",
      description: `Primul somn poate veni după o fereastră de veghe de aproximativ ${wakeWindow}.`,
    },
    {
      time: ageMonths <= 6 ? "13:00" : "13:30",
      label: "Somn 2",
      description: "Somnul de prânz susține o după-amiază mai echilibrată.",
    },
    ...(hasThreeNaps
      ? [
          {
            time: "16:45",
            label: "Somn 3",
            description:
              "Al treilea somn poate fi scurt și flexibil, în funcție de zi.",
          },
        ]
      : []),
    {
      time: "19:00 - 20:00",
      label: "Culcare",
      description: "Păstrează seara predictibilă, fără să forțezi ora exactă.",
    },
  ];
}

function scheduleForOneOrTwoNaps(ageMonths: number, wakeWindow: string) {
  const hasTwoNaps = ageMonths <= 14;

  return [
    {
      time: "07:00",
      label: "Trezire",
      description: "Ziua începe cu o rutină simplă și lumină naturală.",
    },
    ...(hasTwoNaps
      ? [
          {
            time: "10:00",
            label: "Somn 1",
            description: `Primul somn poate veni după o fereastră de veghe de aproximativ ${wakeWindow}.`,
          },
          {
            time: "14:30",
            label: "Somn 2",
            description:
              "Al doilea somn poate fi ajustat după durata somnului de dimineață.",
          },
        ]
      : [
          {
            time: "12:00",
            label: "Somn de prânz",
            description: `Un singur somn de zi apare adesea după o fereastră de veghe de aproximativ ${wakeWindow}.`,
          },
        ]),
    {
      time: "19:00 - 20:00",
      label: "Culcare",
      description: "Rutina de seară ajută copilul să intre mai ușor în somn.",
    },
  ];
}

function getSleepPattern(ageMonths: number) {
  if (ageMonths === 3) {
    return {
      napRecommendation: "3-5 somnuri pe zi",
      wakeWindow: "1 h 15 min - 1 h 55 min",
      schedule: scheduleForThreeOrFourNaps(ageMonths, "1 h 15 min - 1 h 55 min"),
    };
  }

  if (ageMonths === 4) {
    return {
      napRecommendation: "3-4 somnuri pe zi",
      wakeWindow: "1 h 30 min - 2 h",
      schedule: scheduleForThreeOrFourNaps(ageMonths, "1 h 30 min - 2 h"),
    };
  }

  if (ageMonths === 5) {
    return {
      napRecommendation: "3-4 somnuri pe zi",
      wakeWindow: "1 h 30 min - 2 h 15 min",
      schedule: scheduleForThreeOrFourNaps(ageMonths, "1 h 30 min - 2 h 15 min"),
    };
  }

  if (ageMonths === 6) {
    return {
      napRecommendation: "2-3 somnuri pe zi",
      wakeWindow: "2 h - 2 h 30 min",
      schedule: scheduleForTwoOrThreeNaps(ageMonths, "2 h - 2 h 30 min"),
    };
  }

  if (ageMonths === 7) {
    return {
      napRecommendation: "2-3 somnuri pe zi",
      wakeWindow: "2 h 30 min - 2 h 45 min",
      schedule: scheduleForTwoOrThreeNaps(ageMonths, "2 h 30 min - 2 h 45 min"),
    };
  }

  if (ageMonths === 8) {
    return {
      napRecommendation: "2-3 somnuri pe zi",
      wakeWindow: "aproximativ 3 h",
      schedule: scheduleForTwoOrThreeNaps(ageMonths, "aproximativ 3 h"),
    };
  }

  if (ageMonths <= 10) {
    return {
      napRecommendation: "2 somnuri pe zi",
      wakeWindow: "3 h - 3 h 30 min",
      schedule: scheduleForTwoOrThreeNaps(ageMonths, "3 h - 3 h 30 min"),
    };
  }

  if (ageMonths <= 14) {
    return {
      napRecommendation: "1-2 somnuri pe zi",
      wakeWindow: "3 h - 4 h",
      schedule: scheduleForOneOrTwoNaps(ageMonths, "3 h - 4 h"),
    };
  }

  return {
    napRecommendation: "1 somn pe zi",
    wakeWindow: "5 h - 6 h",
    schedule: scheduleForOneOrTwoNaps(ageMonths, "5 h - 6 h"),
  };
}

function buildFaq(ageMonths: number, napRecommendation: string, wakeWindow: string) {
  return [
    {
      question: `Câte somnuri are nevoie un bebe de ${ageMonths} luni?`,
      answer: `Orientativ, un bebe de ${ageMonths} luni poate avea ${napRecommendation}. Numărul real depinde de durata somnurilor, semnele de oboseală și ritmul fiecărui copil.`,
    },
    {
      question: `Care este fereastra de veghe la ${ageMonths} luni?`,
      answer: `Pentru această vârstă, fereastra de veghe orientativă este ${wakeWindow}. Folosește intervalul ca reper, nu ca regulă fixă.`,
    },
    {
      question: "Ce fac dacă programul nu se potrivește copilului meu?",
      answer:
        "Ajustează programul după semnele copilului, durata somnurilor și cum arată seara. Dacă apar dificultăți persistente sau îngrijorări medicale, discută cu pediatrul sau cu un specialist.",
    },
    {
      question: "Aceste recomandări înlocuiesc sfatul medicului?",
      answer: medicalDisclaimer,
    },
  ];
}

export const sleepAgePages: SleepAgePage[] = Array.from(
  { length: 22 },
  (_, index) => {
    const ageMonths = index + 3;
    const pattern = getSleepPattern(ageMonths);

    return {
      ageMonths,
      slug: `bebe-${ageMonths}-luni`,
      seoTitle: `Somn bebe ${ageMonths} luni | Program și ferestre de veghe`,
      seoDescription: `Ghid orientativ pentru somnul bebelușului de ${ageMonths} luni: câte somnuri sunt recomandate, fereastră de veghe, program zilnic și FAQ.`,
      title: `Somn bebe ${ageMonths} luni: program orientativ și ferestre de veghe`,
      description: `La ${ageMonths} luni, somnul poate varia mult de la o zi la alta. Ghidul de mai jos oferă repere blânde pentru numărul de somnuri, ferestrele de veghe și organizarea unei zile mai clare.`,
      napRecommendation: pattern.napRecommendation,
      wakeWindow: pattern.wakeWindow,
      dailySchedule: pattern.schedule,
      faqs: buildFaq(ageMonths, pattern.napRecommendation, pattern.wakeWindow),
    };
  }
);

export function getAllSleepAgePages() {
  return sleepAgePages;
}

export function getSleepAgePageBySlug(slug: string) {
  return sleepAgePages.find((page) => page.slug === slug);
}

export { medicalDisclaimer };

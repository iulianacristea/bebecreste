"use client";

import { jsPDF } from "jspdf";
import type { FormEvent } from "react";
import { useEffect, useRef, useState } from "react";

type SleepResult = {
  minimumWakeWindow: string;
  maximumWakeWindow: string;
  nextSleepInterval: string;
  nextSleepReminderAt: number;
  bedtime: string;
  napRecommendation: string;
  totalSleepRecommendation: string;
  daySleepRecommendation: string;
  nightSleepRecommendation: string;
  schedule: SleepScheduleItem[];
  ageExplanation: string;
  explanation: string;
};

type SleepScheduleItem = {
  label: string;
  time: string;
  description: string;
};

type SleepRule = {
  minimumWakeWindowHours: number;
  maximumWakeWindowHours: number;
  bedtimeHour: number;
  bedtimeEndHour: number;
  recommendedNapCount: number;
  maximumNapCount: number;
  napCountRecommendation: string;
  totalSleepRecommendation: string;
  daySleepRecommendation: string;
  nightSleepRecommendation: string;
  napDurationHours: number;
  ageExplanation: string;
  explanation: string;
};

type NapCount = "1" | "2" | "3" | "4" | "5" | "6" | "not-sure";

type SleepHistoryItem = {
  id: string;
  calculatedAt: string;
  ageLabel: string;
  wakeTime: string;
  napLabel: string;
  nextSleepInterval: string;
  bedtime: string;
};

type ChildProfile = {
  name: string;
  ageYears: string;
  ageMonths: string;
  napCount: NapCount;
  wakeTime: string;
};

const sleepHistoryStorageKey = "bebecreste:sleep-calculator-history";
const childProfileStorageKey = "bebecreste:child-profile";
const medicalDisclaimer =
  "Informațiile de pe BebeCrește.ro sunt orientative și nu înlocuiesc sfatul medicului pediatru sau al unui specialist. Pentru probleme medicale, alimentație specială sau tulburări de somn, consultă un specialist.";

function readSleepHistory() {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const storedHistory = window.localStorage.getItem(sleepHistoryStorageKey);

    if (!storedHistory) {
      return [];
    }

    const parsedHistory: unknown = JSON.parse(storedHistory);

    if (!Array.isArray(parsedHistory)) {
      return [];
    }

    return parsedHistory
      .filter((item): item is SleepHistoryItem => {
        if (!item || typeof item !== "object") {
          return false;
        }

        const historyItem = item as Record<string, unknown>;

        return (
          typeof historyItem.id === "string" &&
          typeof historyItem.calculatedAt === "string" &&
          typeof historyItem.ageLabel === "string" &&
          typeof historyItem.wakeTime === "string" &&
          typeof historyItem.napLabel === "string" &&
          typeof historyItem.nextSleepInterval === "string" &&
          typeof historyItem.bedtime === "string"
        );
      })
      .slice(0, 3);
  } catch {
    return [];
  }
}

function isNapCount(value: unknown): value is NapCount {
  return (
    value === "1" ||
    value === "2" ||
    value === "3" ||
    value === "4" ||
    value === "5" ||
    value === "6" ||
    value === "not-sure"
  );
}

function readChildProfile() {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const storedProfile = window.localStorage.getItem(childProfileStorageKey);

    if (!storedProfile) {
      return null;
    }

    const parsedProfile: unknown = JSON.parse(storedProfile);

    if (!parsedProfile || typeof parsedProfile !== "object") {
      return null;
    }

    const profile = parsedProfile as Record<string, unknown>;

    if (
      typeof profile.name !== "string" ||
      typeof profile.ageYears !== "string" ||
      typeof profile.ageMonths !== "string" ||
      (typeof profile.wakeTime !== "string" &&
        typeof profile.wakeTime !== "undefined") ||
      !isNapCount(profile.napCount)
    ) {
      return null;
    }

    return {
      name: profile.name,
      ageYears: profile.ageYears,
      ageMonths: profile.ageMonths,
      napCount: profile.napCount,
      wakeTime:
        typeof profile.wakeTime === "string" ? profile.wakeTime : "",
    };
  } catch {
    return null;
  }
}

export function SleepCalculator() {
  const [childName, setChildName] = useState("");
  const [ageYears, setAgeYears] = useState("");
  const [ageMonths, setAgeMonths] = useState("");
  const [wakeTime, setWakeTime] = useState("");
  const [napCount, setNapCount] = useState<NapCount>("not-sure");
  const [result, setResult] = useState<SleepResult | null>(null);
  const [sleepHistory, setSleepHistory] = useState<SleepHistoryItem[]>([]);
  const [error, setError] = useState("");
  const [copyStatus, setCopyStatus] = useState("");
  const [pdfStatus, setPdfStatus] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [emailStatus, setEmailStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const [profileStatus, setProfileStatus] = useState("");
  const [hasSavedProfile, setHasSavedProfile] = useState(false);
  const [reminderStatus, setReminderStatus] = useState("");
  const [isReminderSet, setIsReminderSet] = useState(false);
  const reminderTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setSleepHistory(readSleepHistory());

      const savedProfile = readChildProfile();

      if (savedProfile) {
        setChildName(savedProfile.name);
        setAgeYears(savedProfile.ageYears);
        setAgeMonths(savedProfile.ageMonths);
        setNapCount(savedProfile.napCount);
        setWakeTime(savedProfile.wakeTime);
        setHasSavedProfile(true);
        setProfileStatus("Profil încărcat");
      }
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    return () => {
      if (reminderTimeoutRef.current) {
        window.clearTimeout(reminderTimeoutRef.current);
      }
    };
  }, []);

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

  function getRecommendedNapCount(rule: SleepRule, count: NapCount) {
    if (count !== "not-sure") {
      return Math.min(Number(count), rule.maximumNapCount);
    }

    return rule.recommendedNapCount;
  }

  function getScheduleWakeWindows(
    rule: SleepRule,
    count: number,
    wakeDate?: Date,
    bedtimeStart?: Date,
    hasExplicitNapCount = false
  ) {
    if (hasExplicitNapCount && wakeDate && bedtimeStart && count > 0) {
      const dayLengthHours =
        (bedtimeStart.getTime() - wakeDate.getTime()) / (60 * 60 * 1000);
      const totalNapHours = rule.napDurationHours * count;
      const distributedWakeWindow =
        (dayLengthHours - totalNapHours) / (count + 1);

      if (Number.isFinite(distributedWakeWindow) && distributedWakeWindow > 0) {
        return Array.from({ length: count }, () =>
          Math.max(distributedWakeWindow, rule.minimumWakeWindowHours)
        );
      }
    }

    return Array.from({ length: count }, (_, index) => {
      const progress = count <= 1 ? 1 : index / (count - 1);
      const wakeWindow =
        rule.minimumWakeWindowHours +
        (rule.maximumWakeWindowHours - rule.minimumWakeWindowHours) *
          progress;

      return Math.min(wakeWindow, rule.maximumWakeWindowHours);
    });
  }

  function buildDailySchedule(
    wakeDate: Date,
    bedtimeStart: Date,
    bedtimeEnd: Date,
    rule: SleepRule,
    count: NapCount
  ) {
    const recommendedNapCount = getRecommendedNapCount(rule, count);
    const hasExplicitNapCount = count !== "not-sure";
    const wakeWindows = getScheduleWakeWindows(
      rule,
      recommendedNapCount,
      wakeDate,
      bedtimeStart,
      hasExplicitNapCount
    );
    const protectsWakeWindow =
      count === "not-sure" && rule.maximumWakeWindowHours <= 4;

    const schedule: SleepScheduleItem[] = [
      {
        label: "Dimineață",
        time: formatTime(wakeDate),
        description: "Trezire, lumină naturală și început liniștit de zi.",
      },
    ];

    let currentTime = wakeDate;

    function addNapBlock(
      wakeWindow: number,
      index: number,
      isProtectiveNap: boolean
    ) {
      const napTime = addHours(currentTime, wakeWindow);
      const napDuration = isProtectiveNap
        ? Math.min(rule.napDurationHours, 0.75)
        : rule.napDurationHours;
      const isSingleNapDay = recommendedNapCount === 1;

      schedule.push({
        label: `Somn ${index + 1}`,
        time: formatTime(napTime),
        description:
          isProtectiveNap
            ? "Somn scurt adăugat ca să nu depășească perioada maximă de veghe."
            : isSingleNapDay
            ? "Somnul de zi poate dura aproximativ 2-3 ore, în funcție de copil."
            : hasExplicitNapCount
            ? "Ora este distribuită ca să păstreze ziua echilibrată până la culcare."
            : index === wakeWindows.length - 1
            ? "Ultimul somn poate fi mai scurt, ca seara să rămână calmă."
            : "Folosește ora ca reper și urmărește semnele de oboseală.",
      });

      currentTime = addHours(napTime, napDuration);
    }

    wakeWindows.forEach((wakeWindow, index) => {
      addNapBlock(wakeWindow, index, false);
    });

    while (
      protectsWakeWindow &&
      wakeWindows.length < rule.maximumNapCount &&
      addHours(currentTime, rule.maximumWakeWindowHours) < bedtimeStart
    ) {
      const nextIndex = wakeWindows.length;

      wakeWindows.push(rule.maximumWakeWindowHours);
      addNapBlock(rule.maximumWakeWindowHours, nextIndex, true);
    }

    schedule.push({
      label: "Culcare",
      time: `${formatTime(bedtimeStart)} - ${formatTime(bedtimeEnd)}`,
      description: "Rutina de seară poate începe cu 20-30 de minute înainte.",
    });

    return schedule;
  }

  function getSleepRule(age: number): SleepRule {
    if (age <= 2) {
      return {
        minimumWakeWindowHours: 0.75,
        maximumWakeWindowHours: 1.25,
        bedtimeHour: 19,
        bedtimeEndHour: 20,
        recommendedNapCount: 6,
        maximumNapCount: 6,
        napCountRecommendation: "4-6 somnuri",
        totalSleepRecommendation: "14-17 ore",
        daySleepRecommendation: "somnuri scurte și dese pe parcursul zilei",
        nightSleepRecommendation: "noaptea încă poate fi fragmentată",
        napDurationHours: 0.75,
        ageExplanation:
          "La 0-2 luni, bebelușii au ferestre de veghe foarte scurte și pot avea 4-6 somnuri pe zi. E normal ca zilele să fie foarte flexibile.",
        explanation:
          "Pentru 0-2 luni, folosește fereastra de 45-75 de minute ca reper blând, mai ales dacă apar semne de oboseală.",
      };
    }

    if (age === 3) {
      return {
        minimumWakeWindowHours: 1.25,
        maximumWakeWindowHours: 1.92,
        bedtimeHour: 19,
        bedtimeEndHour: 20,
        recommendedNapCount: 4,
        maximumNapCount: 5,
        napCountRecommendation: "3-5 somnuri",
        totalSleepRecommendation: "14-17 ore",
        daySleepRecommendation: "aprox. 5 ore ziua, împărțite flexibil",
        nightSleepRecommendation: "aprox. 10 ore noaptea",
        napDurationHours: 1,
        ageExplanation:
          "La 3 luni, mulți bebeluși încep să lege mai bine somnul, dar încă au nevoie de 3-5 somnuri de zi.",
        explanation:
          "Pentru 3 luni, fereastra de veghe este de aproximativ 75-115 minute și poate varia în funcție de cum a dormit copilul.",
      };
    }

    if (age === 4) {
      return {
        minimumWakeWindowHours: 1.5,
        maximumWakeWindowHours: 2,
        bedtimeHour: 19,
        bedtimeEndHour: 20,
        recommendedNapCount: 4,
        maximumNapCount: 4,
        napCountRecommendation: "3-4 somnuri",
        totalSleepRecommendation: "14-16 ore",
        daySleepRecommendation: "3-4 somnuri, de durată variabilă",
        nightSleepRecommendation: "noaptea începe să devină mai previzibilă",
        napDurationHours: 1,
        ageExplanation:
          "La 4 luni, ritmul începe să fie mai clar, dar 3-4 somnuri pe zi sunt încă firești.",
        explanation:
          "Pentru 4 luni, o fereastră de 90 de minute până la 2 ore este un reper realist.",
      };
    }

    if (age === 5) {
      return {
        minimumWakeWindowHours: 1.5,
        maximumWakeWindowHours: 2.25,
        bedtimeHour: 19,
        bedtimeEndHour: 20,
        recommendedNapCount: 4,
        maximumNapCount: 4,
        napCountRecommendation: "3-4 somnuri",
        totalSleepRecommendation: "14-16 ore",
        daySleepRecommendation: "3-4 somnuri, ajustate după oboseală",
        nightSleepRecommendation: "somnul de noapte se poate stabiliza treptat",
        napDurationHours: 1,
        ageExplanation:
          "La 5 luni, mulți bebeluși încă au nevoie de 3-4 somnuri, cu ferestre de veghe ușor mai lungi.",
        explanation:
          "Pentru 5 luni, urmărește o fereastră de 90 de minute până la 2 ore și 15 minute.",
      };
    }

    if (age === 6) {
      return {
        minimumWakeWindowHours: 2,
        maximumWakeWindowHours: 2.5,
        bedtimeHour: 19,
        bedtimeEndHour: 20,
        recommendedNapCount: 3,
        maximumNapCount: 3,
        napCountRecommendation: "2-3 somnuri",
        totalSleepRecommendation: "14-15 ore",
        daySleepRecommendation: "aprox. 3,5 ore ziua",
        nightSleepRecommendation: "aprox. 11 ore noaptea",
        napDurationHours: 1.15,
        ageExplanation:
          "La 6 luni, mulți bebeluși au 2-3 somnuri pe zi și aproximativ 14-15 ore de somn în total.",
        explanation:
          "Pentru 6 luni, fereastra de veghe este de aproximativ 2 ore până la 2 ore și 30 de minute.",
      };
    }

    if (age === 7) {
      return {
        minimumWakeWindowHours: 2.5,
        maximumWakeWindowHours: 2.75,
        bedtimeHour: 19,
        bedtimeEndHour: 20,
        recommendedNapCount: 3,
        maximumNapCount: 3,
        napCountRecommendation: "2-3 somnuri",
        totalSleepRecommendation: "14-15 ore",
        daySleepRecommendation: "2-3 somnuri ziua",
        nightSleepRecommendation: "aprox. 11 ore noaptea",
        napDurationHours: 1.15,
        ageExplanation:
          "La 7 luni, 2-3 somnuri sunt frecvente, iar trecerile se fac cel mai bine treptat.",
        explanation:
          "Pentru 7 luni, fereastra de veghe este de aproximativ 2 ore și 30 de minute până la 2 ore și 45 de minute.",
      };
    }

    if (age === 8) {
      return {
        minimumWakeWindowHours: 3,
        maximumWakeWindowHours: 3,
        bedtimeHour: 19,
        bedtimeEndHour: 20,
        recommendedNapCount: 3,
        maximumNapCount: 3,
        napCountRecommendation: "2-3 somnuri",
        totalSleepRecommendation: "14-15 ore",
        daySleepRecommendation: "2-3 somnuri, în funcție de zi",
        nightSleepRecommendation: "aprox. 11 ore noaptea",
        napDurationHours: 1.25,
        ageExplanation:
          "La 8 luni, mulți bebeluși pot sta în jur de 3 ore treji între somnuri.",
        explanation:
          "Pentru 8 luni, folosește 3 ore ca reper pentru următoarea fereastră de somn.",
      };
    }

    if (age <= 10) {
      return {
        minimumWakeWindowHours: 3,
        maximumWakeWindowHours: 3.5,
        bedtimeHour: 19,
        bedtimeEndHour: 20,
        recommendedNapCount: 2,
        maximumNapCount: 2,
        napCountRecommendation: "2 somnuri",
        totalSleepRecommendation: "13-15 ore",
        daySleepRecommendation: "2 somnuri ziua",
        nightSleepRecommendation: "aprox. 11 ore noaptea",
        napDurationHours: 1.5,
        ageExplanation:
          "Între 9 și 10 luni, 2 somnuri pe zi sunt de obicei suficiente pentru un ritm echilibrat.",
        explanation:
          "Pentru 9-10 luni, fereastra de veghe este de aproximativ 3 ore până la 3 ore și 30 de minute.",
      };
    }

    if (age <= 14) {
      return {
        minimumWakeWindowHours: 3,
        maximumWakeWindowHours: 4,
        bedtimeHour: 19,
        bedtimeEndHour: 20,
        recommendedNapCount: 2,
        maximumNapCount: 2,
        napCountRecommendation: "1-2 somnuri",
        totalSleepRecommendation: "12-15 ore",
        daySleepRecommendation: "aprox. 3 ore ziua la 12 luni",
        nightSleepRecommendation: "aprox. 11 ore noaptea",
        napDurationHours: 1.5,
        ageExplanation:
          "Între 11 și 14 luni, copilul poate fi între 1 și 2 somnuri pe zi. Tranziția se face după ritmul lui.",
        explanation:
          "Pentru 11-14 luni, fereastra de veghe este de aproximativ 3-4 ore.",
      };
    }

    if (age < 24) {
      return {
        minimumWakeWindowHours: 5,
        maximumWakeWindowHours: 6,
        bedtimeHour: 19,
        bedtimeEndHour: 20,
        recommendedNapCount: 1,
        maximumNapCount: 1,
        napCountRecommendation: "1 somn",
        totalSleepRecommendation: "aprox. 14 ore",
        daySleepRecommendation: "2-3 ore ziua",
        nightSleepRecommendation: "aprox. 11 ore noaptea",
        napDurationHours: 2,
        ageExplanation:
          "După tranziția la un somn, copilul are de obicei o fereastră mai lungă de veghe înainte de somnul de zi.",
        explanation:
          "Pentru etapa cu un singur somn, un reper util este 5-6 ore de veghe înainte de somnul de zi.",
      };
    }

    if (age < 36) {
      return {
        minimumWakeWindowHours: 5,
        maximumWakeWindowHours: 6,
        bedtimeHour: 19,
        bedtimeEndHour: 20,
        recommendedNapCount: 1,
        maximumNapCount: 1,
        napCountRecommendation: "1 somn",
        totalSleepRecommendation: "aprox. 13 ore",
        daySleepRecommendation: "aprox. 2 ore ziua",
        nightSleepRecommendation: "aprox. 11 ore noaptea",
        napDurationHours: 2,
        ageExplanation:
          "La 2 ani, un singur somn de zi este frecvent, iar culcarea între 19 și 20 poate ajuta ritmul serii.",
        explanation:
          "Pentru 24-35 luni, majoritatea copiilor au un somn de zi de aproximativ 2 ore.",
      };
    }

    return {
      minimumWakeWindowHours: 5,
      maximumWakeWindowHours: 6,
      bedtimeHour: 19,
      bedtimeEndHour: 20,
      recommendedNapCount: 1,
      maximumNapCount: 1,
      napCountRecommendation: "1 somn",
      totalSleepRecommendation: "12-12,5 ore",
      daySleepRecommendation: "1,5-2 ore ziua",
      nightSleepRecommendation: "aprox. 10,5 ore noaptea",
      napDurationHours: 1.75,
      ageExplanation:
        "La 3 ani, unii copii încă au nevoie de somn de zi, iar alții îl reduc treptat. Contează mult cum arată seara.",
      explanation:
        "Pentru 36 de luni, somnul de zi este adesea 1,5-2 ore, iar totalul zilnic se apropie de 12-12,5 ore.",
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

    if (count === "4" || count === "5" || count === "6") {
      return "La vârste mici, 4-6 somnuri pot fi normale. Contează mai mult să prinzi semnele de oboseală decât să forțezi ore fixe.";
    }

    return "Nu e nevoie să știi exact câte somnuri vor fi astăzi. Folosește intervalul ca reper general și ajustează după semnele copilului.";
  }

  function getNapLabel(count: NapCount) {
    if (count === "1") {
      return "1 somn";
    }

    if (count === "2") {
      return "2 somnuri";
    }

    if (count === "3") {
      return "3 somnuri";
    }

    if (count === "4") {
      return "4 somnuri";
    }

    if (count === "5") {
      return "5 somnuri";
    }

    if (count === "6") {
      return "6 somnuri";
    }

    return "Nu sunt sigur";
  }

  function getAgeLabel(years: number, months: number) {
    const parts: string[] = [];

    if (years > 0) {
      parts.push(years === 1 ? "1 an" : `${years} ani`);
    }

    if (months > 0) {
      parts.push(months === 1 ? "1 lună" : `${months} luni`);
    }

    return parts.length > 0 ? parts.join(" și ") : "0 luni";
  }

  function isValidEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  }

  function saveCalculation(historyItem: SleepHistoryItem) {
    const nextHistory = [historyItem, ...sleepHistory].slice(0, 3);

    setSleepHistory(nextHistory);

    try {
      window.localStorage.setItem(
        sleepHistoryStorageKey,
        JSON.stringify(nextHistory)
      );
    } catch {
      // Calculatorul rămâne funcțional chiar dacă istoricul nu poate fi salvat.
    }
  }

  function saveChildProfile() {
    const hasYears = ageYears.trim() !== "";
    const hasMonths = ageMonths.trim() !== "";
    const years = hasYears ? Number(ageYears) : 0;
    const months = hasMonths ? Number(ageMonths) : 0;
    const totalMonths = years * 12 + months;

    if (
      (!hasYears && !hasMonths) ||
      !wakeTime ||
      !Number.isFinite(years) ||
      !Number.isFinite(months) ||
      !Number.isInteger(years) ||
      !Number.isInteger(months) ||
      years < 0 ||
      months < 0 ||
      months > 11 ||
      totalMonths > 36
    ) {
      setProfileStatus(
        "Completează o vârstă validă și ora obișnuită de trezire."
      );
      return;
    }

    const profile: ChildProfile = {
      name: childName.trim(),
      ageYears: ageYears.trim(),
      ageMonths: ageMonths.trim(),
      napCount,
      wakeTime,
    };

    try {
      window.localStorage.setItem(
        childProfileStorageKey,
        JSON.stringify(profile)
      );
      setHasSavedProfile(true);
      setProfileStatus("Profil salvat local pe dispozitivul tău.");
    } catch {
      setProfileStatus("Profilul nu a putut fi salvat.");
      window.setTimeout(() => setProfileStatus(""), 2500);
    }
  }

  function clearChildProfile() {
    try {
      window.localStorage.removeItem(childProfileStorageKey);
      setChildName("");
      setAgeYears("");
      setAgeMonths("");
      setNapCount("not-sure");
      setWakeTime("");
      setHasSavedProfile(false);
      setProfileStatus("Profil șters de pe dispozitiv.");
      window.setTimeout(() => setProfileStatus(""), 2500);
    } catch {
      setProfileStatus("Profilul nu a putut fi șters.");
      window.setTimeout(() => setProfileStatus(""), 2500);
    }
  }

  async function copyResultToClipboard() {
    if (!result) {
      return;
    }

    const textToCopy = [
      "Recomandare somn BebeCrește",
      `Fereastră minimă: ${result.minimumWakeWindow}`,
      `Fereastră maximă: ${result.maximumWakeWindow}`,
      `Următorul somn recomandat: ${result.nextSleepInterval}`,
      `Culcare recomandată: ${result.bedtime}`,
      `Somnuri de zi: ${result.napRecommendation}`,
      `Somn de zi: ${result.daySleepRecommendation}`,
      `Somn de noapte: ${result.nightSleepRecommendation}`,
      `Somn total: ${result.totalSleepRecommendation}`,
      "Program orientativ:",
      ...result.schedule.map(
        (item) => `${item.label}: ${item.time} - ${item.description}`
      ),
      result.ageExplanation,
    ].join("\n");

    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopyStatus("Copiat");
      window.setTimeout(() => setCopyStatus(""), 2000);
    } catch {
      setCopyStatus("Nu s-a putut copia");
      window.setTimeout(() => setCopyStatus(""), 2000);
    }
  }

  function addPdfText(
    document: jsPDF,
    text: string,
    x: number,
    y: number,
    options: {
      maxWidth?: number;
      lineHeight?: number;
      pageBottom?: number;
    } = {}
  ) {
    const maxWidth = options.maxWidth ?? 170;
    const lineHeight = options.lineHeight ?? 7;
    const pageBottom = options.pageBottom ?? 280;
    const lines = document.splitTextToSize(text, maxWidth) as string[];
    let nextY = y;

    lines.forEach((line) => {
      if (nextY > pageBottom) {
        document.addPage();
        nextY = 20;
      }

      document.text(line, x, nextY);
      nextY += lineHeight;
    });

    return nextY;
  }

  function downloadSleepSchedulePdf() {
    if (!result) {
      return;
    }

    try {
      const document = new jsPDF({ unit: "mm", format: "a4" });
      const hasYears = ageYears.trim() !== "";
      const hasMonths = ageMonths.trim() !== "";
      const years = hasYears ? Number(ageYears) : 0;
      const months = hasMonths ? Number(ageMonths) : 0;
      const ageLabel = getAgeLabel(years, months);
      const generatedAt = new Date().toLocaleDateString("ro-RO", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
      const fileNameAge = ageLabel
        .toLowerCase()
        .replace(/[^\p{L}\p{N}]+/gu, "-")
        .replace(/^-|-$/g, "");

      document.setProperties({
        title: "Program de somn BebeCrește",
        subject: "Program orientativ de somn pentru copil",
        creator: "BebeCrește.ro",
      });

      document.setTextColor(15, 23, 42);
      document.setFont("helvetica", "bold");
      document.setFontSize(20);
      document.text("Program de somn BebeCrește", 20, 22);

      document.setFont("helvetica", "normal");
      document.setFontSize(10);
      document.setTextColor(100, 116, 139);
      document.text(`Generat la ${generatedAt}`, 20, 30);

      document.setDrawColor(226, 232, 240);
      document.line(20, 36, 190, 36);

      document.setFont("helvetica", "bold");
      document.setFontSize(12);
      document.setTextColor(15, 23, 42);
      document.text("Date introduse", 20, 47);

      document.setFont("helvetica", "normal");
      document.setFontSize(11);
      let y = 56;
      y = addPdfText(document, `Vârsta copilului: ${ageLabel}`, 20, y);
      y = addPdfText(document, `Ora de trezire: ${wakeTime}`, 20, y);
      y = addPdfText(document, `Somnuri selectate: ${getNapLabel(napCount)}`, 20, y);

      document.setFont("helvetica", "bold");
      document.setFontSize(12);
      document.text("Program generat", 20, y + 6);
      y += 16;

      document.setFont("helvetica", "normal");
      document.setFontSize(11);
      result.schedule.forEach((item) => {
        document.setFont("helvetica", "bold");
        y = addPdfText(document, `${item.time} - ${item.label}`, 20, y);
        document.setFont("helvetica", "normal");
        y = addPdfText(document, item.description, 26, y, {
          maxWidth: 160,
          lineHeight: 6,
        });
        y += 2;
      });

      document.setFont("helvetica", "bold");
      document.setFontSize(12);
      y = addPdfText(document, "Recomandări scurte", 20, y + 6);

      document.setFont("helvetica", "normal");
      document.setFontSize(11);
      [
        `Următorul somn recomandat: ${result.nextSleepInterval}`,
        `Culcare recomandată: ${result.bedtime}`,
        `Fereastră de veghe: ${
          result.minimumWakeWindow === result.maximumWakeWindow
            ? result.maximumWakeWindow
            : `${result.minimumWakeWindow} - ${result.maximumWakeWindow}`
        }`,
        `Somnuri de zi: ${result.napRecommendation}`,
        `Somn total orientativ: ${result.totalSleepRecommendation}`,
        result.explanation,
      ].forEach((recommendation) => {
        y = addPdfText(document, `• ${recommendation}`, 20, y + 1, {
          maxWidth: 170,
          lineHeight: 6,
        });
      });

      document.setFont("helvetica", "bold");
      document.setFontSize(12);
      y = addPdfText(document, "Disclaimer medical", 20, y + 8);

      document.setFont("helvetica", "normal");
      document.setFontSize(10);
      document.setTextColor(71, 85, 105);
      addPdfText(document, medicalDisclaimer, 20, y + 1, {
        maxWidth: 170,
        lineHeight: 5.5,
      });

      document.save(
        `program-somn-bebecreste${fileNameAge ? `-${fileNameAge}` : ""}.pdf`
      );
      setPdfStatus("PDF descărcat");
      window.setTimeout(() => setPdfStatus(""), 2000);
    } catch {
      setPdfStatus("PDF-ul nu a putut fi generat");
      window.setTimeout(() => setPdfStatus(""), 2500);
    }
  }

  function handleEmailScheduleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!result || !isValidEmail(emailAddress)) {
      setEmailStatus("error");
      return;
    }

    // Pregătit pentru integrare backend: aici se poate apela un endpoint intern.
    setEmailStatus("success");
    setEmailAddress("");
  }

  async function scheduleNextSleepReminder() {
    if (!result) {
      return;
    }

    if (!("Notification" in window)) {
      setReminderStatus("Browserul nu suportă notificări.");
      return;
    }

    let permission = Notification.permission;

    if (permission === "default") {
      permission = await Notification.requestPermission();
    }

    if (permission !== "granted") {
      setReminderStatus("Activează notificările ca să poți seta reminderul.");
      return;
    }

    const delay = result.nextSleepReminderAt - Date.now();

    if (delay <= 0) {
      setReminderStatus("Ora recomandată a trecut deja.");
      return;
    }

    if (reminderTimeoutRef.current) {
      window.clearTimeout(reminderTimeoutRef.current);
    }

    reminderTimeoutRef.current = window.setTimeout(() => {
      new Notification("BebeCrește", {
        body: `Se apropie fereastra de somn: ${result.nextSleepInterval}.`,
      });
      setReminderStatus("");
      setIsReminderSet(false);
      reminderTimeoutRef.current = null;
    }, delay);

    setIsReminderSet(true);
    setReminderStatus("Reminder setat pentru următorul somn.");
  }

  function clearNextSleepReminder() {
    if (reminderTimeoutRef.current) {
      window.clearTimeout(reminderTimeoutRef.current);
      reminderTimeoutRef.current = null;
      setIsReminderSet(false);
      setReminderStatus("Reminder anulat.");
      window.setTimeout(() => setReminderStatus(""), 2000);
    }
  }

  function handleWakeTimeChange(value: string) {
    const digitsOnly = value.replace(/\D/g, "").slice(0, 4);

    if (digitsOnly.length <= 2) {
      setWakeTime(digitsOnly);
      return;
    }

    setWakeTime(`${digitsOnly.slice(0, 2)}:${digitsOnly.slice(2)}`);
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

    if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(wakeTime)) {
      setResult(null);
      setError("Introdu ora trezirii în format 24h, de exemplu 07:00.");
      return;
    }

    setError("");

    const sleepRule = getSleepRule(totalMonths);
    const [hours, minutes] = wakeTime.split(":").map(Number);

    const wakeDate = new Date();
    wakeDate.setHours(hours, minutes, 0, 0);

    const bedtimeStart = new Date();
    bedtimeStart.setHours(sleepRule.bedtimeHour, 0, 0, 0);
    const bedtimeEnd = new Date();
    bedtimeEnd.setHours(sleepRule.bedtimeEndHour, 0, 0, 0);
    const recommendedNapCount = getRecommendedNapCount(sleepRule, napCount);
    const hasExplicitNapCount = napCount !== "not-sure";
    const plannedWakeWindows = getScheduleWakeWindows(
      sleepRule,
      recommendedNapCount,
      wakeDate,
      bedtimeStart,
      hasExplicitNapCount
    );
    const effectiveMinimumWakeWindow = hasExplicitNapCount
      ? Math.min(...plannedWakeWindows)
      : sleepRule.minimumWakeWindowHours;
    const effectiveMaximumWakeWindow = hasExplicitNapCount
      ? Math.max(...plannedWakeWindows)
      : sleepRule.maximumWakeWindowHours;
    const effectiveMinimumNextSleep = addHours(
      wakeDate,
      effectiveMinimumWakeWindow
    );
    const effectiveMaximumNextSleep = addHours(
      wakeDate,
      effectiveMaximumWakeWindow
    );
    const schedule = buildDailySchedule(
      wakeDate,
      bedtimeStart,
      bedtimeEnd,
      sleepRule,
      napCount
    );
    const nextSleepInterval =
      effectiveMinimumWakeWindow === effectiveMaximumWakeWindow
        ? formatTime(effectiveMaximumNextSleep)
        : `${formatTime(effectiveMinimumNextSleep)} - ${formatTime(effectiveMaximumNextSleep)}`;
    const bedtimeInterval = `${formatTime(bedtimeStart)} - ${formatTime(
      bedtimeEnd
    )}`;

    const nextResult: SleepResult = {
      minimumWakeWindow: formatWakeWindow(effectiveMinimumWakeWindow),
      maximumWakeWindow: formatWakeWindow(effectiveMaximumWakeWindow),
      nextSleepInterval,
      nextSleepReminderAt: effectiveMinimumNextSleep.getTime(),
      bedtime: bedtimeInterval,
      napRecommendation:
        napCount === "not-sure"
          ? sleepRule.napCountRecommendation
          : getNapLabel(napCount),
      totalSleepRecommendation: sleepRule.totalSleepRecommendation,
      daySleepRecommendation: sleepRule.daySleepRecommendation,
      nightSleepRecommendation: sleepRule.nightSleepRecommendation,
      schedule,
      ageExplanation: sleepRule.ageExplanation,
      explanation: `${sleepRule.explanation} ${getNapExplanation(napCount)}`,
    };

    setResult(nextResult);
    saveCalculation({
      id: `${Date.now()}`,
      calculatedAt: new Date().toISOString(),
      ageLabel: getAgeLabel(years, months),
      wakeTime,
      napLabel: getNapLabel(napCount),
      nextSleepInterval: nextResult.nextSleepInterval,
      bedtime: nextResult.bedtime,
    });
  }

  return (
    <div
      id="calculator"
      className="grid gap-6 md:grid-cols-2 md:items-start"
    >
      <form
        className="rounded-[2rem] border border-slate-100 bg-white p-5 shadow-xl shadow-slate-100/80 sm:p-7"
        onSubmit={(event) => {
          event.preventDefault();
          calculateSleep();
        }}
      >
        <div className="mb-6">
          <div>
            <p className="text-sm font-semibold uppercase text-sky-700">
              Datele copilului
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950">
              Completează pentru o recomandare orientativă
            </h2>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-[1.5rem] border border-sky-100 bg-sky-50/50 p-4 sm:col-span-2">
            <div>
              <div>
                <p className="text-xs font-semibold uppercase text-sky-700">
                  Profil copil
                </p>
                <h3 className="mt-1 text-lg font-bold text-slate-950">
                  {hasSavedProfile && childName.trim()
                    ? `Bună, ${childName.trim()}! Hai să vedem ritmul de azi.`
                    : "Salvează datele pentru data viitoare"}
                </h3>
              </div>
            </div>

            <div className="mt-4 grid gap-3 lg:grid-cols-[1fr_0.75fr]">
              <div>
                <label
                  htmlFor="child-name"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Numele copilului
                </label>
                <input
                  id="child-name"
                  type="text"
                  value={childName}
                  onChange={(event) => setChildName(event.target.value)}
                  placeholder="ex: Sofia"
                  className="w-full rounded-2xl border border-sky-100 bg-white px-4 py-3 text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 hover:border-sky-200 focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
                />
              </div>

              <div>
                <label
                  htmlFor="wake-time"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Ora obișnuită de trezire
                </label>
                <input
                  id="wake-time"
                  type="text"
                  value={wakeTime}
                  onChange={(event) => handleWakeTimeChange(event.target.value)}
                  inputMode="numeric"
                  maxLength={5}
                  placeholder="ex: 07:00"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition duration-200 hover:border-sky-200 focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
                />
              </div>
            </div>

            <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-[0.72fr_0.72fr_1fr]">
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
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 hover:border-sky-200 focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
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
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 hover:border-sky-200 focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
                />
              </div>

              <div>
                <label
                  htmlFor="nap-count"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Somnuri
                </label>
                <select
                  id="nap-count"
                  value={napCount}
                  onChange={(event) =>
                    setNapCount(event.target.value as NapCount)
                  }
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition duration-200 hover:border-sky-200 focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
                >
                  <option value="1">1 somn</option>
                  <option value="2">2 somnuri</option>
                  <option value="3">3 somnuri</option>
                  <option value="4">4 somnuri</option>
                  <option value="5">5 somnuri</option>
                  <option value="6">6 somnuri</option>
                  <option value="not-sure">Nu sunt sigur</option>
                </select>
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={saveChildProfile}
                className="inline-flex flex-1 justify-center rounded-2xl bg-sky-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-700/15 transition duration-200 hover:-translate-y-0.5 hover:bg-sky-800 hover:shadow-xl hover:shadow-sky-700/20 focus:outline-none focus:ring-4 focus:ring-sky-100 active:translate-y-0"
              >
                Salvează profilul
              </button>
              <button
                type="button"
                onClick={clearChildProfile}
                className="inline-flex flex-1 justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-rose-700 shadow-sm ring-1 ring-rose-100 transition duration-200 hover:-translate-y-0.5 hover:bg-rose-50 hover:text-rose-800 focus:outline-none focus:ring-4 focus:ring-rose-100 active:translate-y-0"
              >
                Șterge profilul
              </button>
            </div>

            {profileStatus && (
              <p className="mt-3 text-sm font-semibold text-sky-700">
                {profileStatus}
              </p>
            )}
          </div>

        <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
          <p className="text-sm leading-6 text-slate-500">
            Poți modifica oricând datele. Recomandarea este orientativă și se
            ajustează după semnele copilului.
          </p>

          <button
            type="submit"
            className="w-full rounded-2xl bg-emerald-600 px-6 py-4 font-semibold text-white shadow-lg shadow-emerald-600/20 transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-600/25 focus:outline-none focus:ring-4 focus:ring-emerald-200 active:translate-y-0 sm:w-36"
          >
            Calculează
          </button>
        </div>
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

      <div className="space-y-5 md:sticky md:top-28">
        <section
          aria-live="polite"
          className="rounded-[2rem] border border-slate-100 bg-white p-5 shadow-xl shadow-slate-100/80 transition-all duration-300 sm:p-7"
        >
          <div>
            <p className="text-sm font-semibold uppercase text-emerald-700">
              Recomandarea ta
            </p>
            <h3 className="mt-1 text-2xl font-bold text-slate-950">
              {result ? "Ritmul de azi" : "Așteaptă datele copilului"}
            </h3>
          </div>

          {result ? (
            <div className="mt-5 animate-[fadeIn_0.25s_ease-out]">
              <div className="rounded-[1.5rem] border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-sky-50 p-5 shadow-lg shadow-emerald-100/45">
                <p className="text-sm font-semibold uppercase text-emerald-700">
                  Următorul somn recomandat
                </p>
                <p className="mt-2 break-words text-4xl font-bold tracking-tight text-slate-950">
                  {result.nextSleepInterval}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {result.ageExplanation}
                </p>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-50/80 p-4 ring-1 ring-slate-100">
                  <p className="text-xs font-semibold uppercase text-slate-500">
                    Culcare recomandată
                  </p>
                  <p className="mt-2 text-3xl font-bold text-slate-950">
                    {result.bedtime}
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-50/80 p-4 ring-1 ring-slate-100">
                  <p className="text-xs font-semibold uppercase text-slate-500">
                    Fereastră de veghe
                  </p>
                  <p className="mt-2 text-2xl font-bold text-slate-950">
                    {result.minimumWakeWindow === result.maximumWakeWindow
                      ? result.maximumWakeWindow
                      : `${result.minimumWakeWindow} - ${result.maximumWakeWindow}`}
                  </p>
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-rose-50/70 p-4 ring-1 ring-rose-100">
                  <p className="text-xs font-semibold uppercase text-rose-700">
                    Somnuri de zi
                  </p>
                  <p className="mt-2 text-lg font-bold text-slate-950">
                    {result.napRecommendation}
                  </p>
                </div>
                <div className="rounded-2xl bg-sky-50/70 p-4 ring-1 ring-sky-100">
                  <p className="text-xs font-semibold uppercase text-sky-700">
                    Somn zi
                  </p>
                  <p className="mt-2 text-lg font-bold text-slate-950">
                    {result.daySleepRecommendation}
                  </p>
                </div>
                <div className="rounded-2xl bg-emerald-50/70 p-4 ring-1 ring-emerald-100">
                  <p className="text-xs font-semibold uppercase text-emerald-700">
                    Total zilnic
                  </p>
                  <p className="mt-2 text-lg font-bold text-slate-950">
                    {result.totalSleepRecommendation}
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-2xl bg-slate-50/80 p-4 ring-1 ring-slate-100">
                <p className="text-sm font-semibold text-slate-900">
                  Explicație scurtă
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  {result.explanation}
                </p>
              </div>

              <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                <button
                  type="button"
                  onClick={copyResultToClipboard}
                  className="inline-flex justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-emerald-100 transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-50 hover:text-slate-950 focus:outline-none focus:ring-4 focus:ring-emerald-100 active:translate-y-0"
                >
                  Copiază rezultatul
                </button>
                <button
                  type="button"
                  onClick={downloadSleepSchedulePdf}
                  className="inline-flex justify-center rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-slate-900/10 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/15 focus:outline-none focus:ring-4 focus:ring-slate-300 active:translate-y-0"
                >
                  Descarcă programul PDF
                </button>
                <button
                  type="button"
                  onClick={scheduleNextSleepReminder}
                  className="inline-flex justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-emerald-100 transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-50 hover:text-slate-950 focus:outline-none focus:ring-4 focus:ring-emerald-100 active:translate-y-0"
                >
                  Setează reminder
                </button>
                {isReminderSet && (
                  <button
                    type="button"
                    onClick={clearNextSleepReminder}
                    className="inline-flex justify-center rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-slate-500 shadow-sm ring-1 ring-white transition duration-200 hover:bg-white hover:text-slate-800 focus:outline-none focus:ring-4 focus:ring-emerald-100"
                  >
                    Anulează reminder
                  </button>
                )}
              </div>

              {(copyStatus || pdfStatus || reminderStatus) && (
                <p className="mt-3 text-sm font-semibold text-emerald-700">
                  {[copyStatus, pdfStatus, reminderStatus]
                    .filter(Boolean)
                    .join(" • ")}
                </p>
              )}

              <form
                onSubmit={handleEmailScheduleSubmit}
                className="mt-4 rounded-2xl border border-sky-100 bg-sky-50/60 p-4"
                noValidate
              >
                <label
                  htmlFor="sleep-schedule-email"
                  className="block text-sm font-bold text-slate-900"
                >
                  Trimite-mi programul pe email
                </label>
                <div className="mt-3 grid gap-3 sm:grid-cols-[1fr_auto]">
                  <input
                    id="sleep-schedule-email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    value={emailAddress}
                    onChange={(event) => {
                      setEmailAddress(event.target.value);
                      setEmailStatus("idle");
                    }}
                    placeholder="email@exemplu.ro"
                    aria-invalid={emailStatus === "error"}
                    aria-describedby="sleep-schedule-email-help sleep-schedule-email-feedback"
                    className="w-full rounded-full border border-sky-100 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 hover:border-sky-200 focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
                  />
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-full bg-sky-700 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-sky-700/10 transition duration-200 hover:-translate-y-0.5 hover:bg-sky-800 hover:shadow-lg hover:shadow-sky-700/15 focus:outline-none focus:ring-4 focus:ring-sky-100 active:translate-y-0"
                  >
                    Trimite
                  </button>
                </div>
                <p
                  id="sleep-schedule-email-help"
                  className="mt-2 text-xs leading-5 text-slate-500"
                >
                  Momentan afișăm doar confirmarea, fără trimitere reală.
                </p>

                {emailStatus === "success" ? (
                  <p
                    id="sleep-schedule-email-feedback"
                    role="status"
                    className="mt-3 rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-sm font-semibold leading-6 text-emerald-700"
                  >
                    Programul este pregătit pentru trimitere. Integrarea cu
                    emailul va fi conectată ulterior.
                  </p>
                ) : null}

                {emailStatus === "error" ? (
                  <p
                    id="sleep-schedule-email-feedback"
                    role="alert"
                    className="mt-3 rounded-2xl border border-rose-100 bg-white px-4 py-3 text-sm font-semibold leading-6 text-rose-700"
                  >
                    Te rugăm să introduci o adresă de email validă.
                  </p>
                ) : null}
              </form>

              <div className="mt-4 rounded-2xl bg-white/70 p-4">
                <p className="text-sm font-semibold text-slate-900">
                  Program orientativ pentru zi
                </p>
                <div className="mt-4 grid gap-3">
                  {result.schedule.map((item) => (
                    <div
                      key={`${item.label}-${item.time}`}
                      className="grid grid-cols-[4.5rem_1fr] gap-3 rounded-2xl bg-white/90 p-3 shadow-sm ring-1 ring-white transition duration-200 hover:bg-white hover:shadow-md"
                    >
                      <div className="flex flex-col items-center justify-center rounded-xl bg-emerald-50 px-2 py-3 text-center ring-1 ring-emerald-100">
                        <span className="text-sm font-bold text-emerald-700">
                          {item.time}
                        </span>
                        <span className="mt-2 h-2 w-2 rounded-full bg-emerald-400" />
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-white to-slate-50 p-3 ring-1 ring-slate-100">
                        <p className="text-sm font-bold text-slate-950">
                          {item.label}
                        </p>
                        <p className="mt-1 text-sm leading-6 text-slate-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-3 text-xs leading-5 text-slate-500">
                Informațiile oferite sunt orientative și nu înlocuiesc sfatul
                unui medic.
              </p>
            </div>
          ) : (
            <div className="mt-5 animate-[resultFadeIn_0.5s_ease-out] rounded-[1.75rem] border border-dashed border-sky-200/80 bg-gradient-to-br from-sky-50/80 via-white to-rose-50/70 p-6 shadow-lg shadow-sky-100/45 sm:p-8">
              <div className="mx-auto flex max-w-md flex-col items-center text-center">
                <div className="relative flex h-16 w-16 animate-[resultFloat_4.5s_ease-in-out_infinite] items-center justify-center rounded-3xl bg-white shadow-md shadow-sky-100 ring-1 ring-sky-100">
                  <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-rose-200" />
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-8 w-8 text-sky-700"
                    fill="none"
                  >
                    <path
                      d="M19.25 15.65A7.4 7.4 0 0 1 8.35 4.75 7.9 7.9 0 1 0 19.25 15.65Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <h4 className="mt-6 text-2xl font-bold tracking-tight text-slate-950">
                  Recomandarea va apărea aici
                </h4>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  Completează datele copilului și vei primi:
                </p>

                <ul className="mt-5 grid w-full gap-3 text-left">
                  {[
                    "următoarea fereastră de somn",
                    "ora orientativă de culcare",
                    "explicații simple și ușor de urmărit",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-2xl bg-white/80 px-4 py-3 text-sm font-semibold leading-6 text-slate-700 shadow-sm shadow-sky-100/45 ring-1 ring-white/80"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 max-w-sm text-sm leading-6 text-slate-500">
                  Fiecare copil este diferit. Recomandările sunt orientative.
                </p>
              </div>
            </div>
          )}
        </section>

      </div>
    </div>
  );
}

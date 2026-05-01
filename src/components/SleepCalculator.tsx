"use client";

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

  function getScheduleWakeWindows(rule: SleepRule, count: number) {
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
    const wakeWindows = getScheduleWakeWindows(rule, recommendedNapCount);
    const protectsWakeWindow = rule.maximumWakeWindowHours <= 4;

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

      schedule.push({
        label: `Somn ${index + 1}`,
        time: formatTime(napTime),
        description:
          isProtectiveNap
            ? "Somn scurt adăugat ca să nu depășească perioada maximă de veghe."
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

    const bedtimeStart = new Date();
    bedtimeStart.setHours(sleepRule.bedtimeHour, 0, 0, 0);
    const bedtimeEnd = new Date();
    bedtimeEnd.setHours(sleepRule.bedtimeEndHour, 0, 0, 0);
    const schedule = buildDailySchedule(
      wakeDate,
      bedtimeStart,
      bedtimeEnd,
      sleepRule,
      napCount
    );
    const nextSleepInterval =
      sleepRule.minimumWakeWindowHours === sleepRule.maximumWakeWindowHours
        ? formatTime(maximumNextSleep)
        : `${formatTime(minimumNextSleep)} - ${formatTime(maximumNextSleep)}`;
    const bedtimeInterval = `${formatTime(bedtimeStart)} - ${formatTime(
      bedtimeEnd
    )}`;

    const nextResult: SleepResult = {
      minimumWakeWindow: formatWakeWindow(sleepRule.minimumWakeWindowHours),
      maximumWakeWindow: formatWakeWindow(sleepRule.maximumWakeWindowHours),
      nextSleepInterval,
      nextSleepReminderAt: minimumNextSleep.getTime(),
      bedtime: bedtimeInterval,
      napRecommendation: sleepRule.napCountRecommendation,
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
        className="rounded-[2rem] border border-white/80 bg-white/85 p-5 shadow-2xl shadow-rose-200/35 backdrop-blur sm:p-7"
        onSubmit={(event) => {
          event.preventDefault();
          calculateSleep();
        }}
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase text-sky-700">
              Datele copilului
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950">
              Completează pentru o recomandare orientativă
            </h2>
          </div>
          <div className="rounded-2xl bg-sky-50 px-3 py-2 text-sm font-semibold text-sky-700 ring-1 ring-sky-100">
            orientativ
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-[1.5rem] border border-sky-100 bg-sky-50/60 p-4 sm:col-span-2">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
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
              <span className="w-fit rounded-full bg-white px-3 py-1 text-xs font-semibold text-sky-700 shadow-sm ring-1 ring-sky-100">
                Fără cont
              </span>
            </div>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Datele sunt salvate doar în browserul tău, nu pe server. Le
              folosim doar ca să completăm automat calculatorul data viitoare.
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
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
                  type="time"
                  value={wakeTime}
                  onChange={(e) => setWakeTime(e.target.value)}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition duration-200 hover:border-sky-200 focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
                />
              </div>
            </div>

            <div className="mt-3 grid gap-3 sm:grid-cols-3">
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

            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
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

        <p className="text-sm leading-6 text-slate-500">
          Poți modifica oricând datele. Recomandarea este orientativă și se
          ajustează după semnele copilului.
        </p>

        <button
          type="submit"
          className="w-full rounded-2xl bg-emerald-600 px-6 py-4 font-semibold text-white shadow-lg shadow-emerald-600/20 transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-600/25 focus:outline-none focus:ring-4 focus:ring-emerald-200 active:translate-y-0"
        >
          Calculează
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

      <div className="space-y-5 md:sticky md:top-28">
        <section
          aria-live="polite"
          className="rounded-[2rem] border border-white/80 bg-white/85 p-5 shadow-2xl shadow-sky-100/45 backdrop-blur transition-all duration-300 sm:p-7"
        >
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold uppercase text-emerald-700">
                Recomandarea ta
              </p>
              <h3 className="mt-1 text-2xl font-bold text-slate-950">
                {result ? "Ritmul de azi" : "Așteaptă datele copilului"}
              </h3>
            </div>
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100">
              rezultat
            </span>
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

              {(copyStatus || reminderStatus) && (
                <p className="mt-3 text-sm font-semibold text-emerald-700">
                  {[copyStatus, reminderStatus].filter(Boolean).join(" • ")}
                </p>
              )}

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
            <div className="mt-5 rounded-[1.5rem] border border-dashed border-sky-200 bg-sky-50/60 p-5">
              <p className="text-lg font-bold text-slate-950">
                Rezultatul va apărea aici.
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Completează datele copilului și apasă pe Calculează pentru a
                vedea fereastra de somn, ora de culcare și explicația.
              </p>
            </div>
          )}
        </section>

        {sleepHistory.length > 0 && (
          <section className="rounded-[1.5rem] border border-slate-100 bg-white/75 p-4 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold uppercase text-slate-500">
                  Istoric recent
                </p>
                <h3 className="mt-1 text-lg font-bold text-slate-950">
                  Ultimele 3 calcule
                </h3>
              </div>
              <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 ring-1 ring-sky-100">
                salvat local
              </span>
            </div>

            <div className="mt-4 grid gap-3">
              {sleepHistory.map((item) => (
                <article
                  key={item.id}
                  className="rounded-2xl bg-slate-50/80 p-4 ring-1 ring-slate-100"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-sm font-bold text-slate-950">
                        {item.nextSleepInterval}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {item.ageLabel} • trezire {item.wakeTime} •{" "}
                        {item.napLabel}
                      </p>
                    </div>
                    <p className="text-sm font-semibold text-slate-500">
                      Culcare {item.bedtime}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

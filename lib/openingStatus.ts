import { OPENING_HOURS, TIME_ZONE } from "@app/constants";

export type OpeningStatus = { isOpen: boolean; label: string };

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Turkish suffixes follow how the number is read aloud:
// "20.00" is read "yirmi" → 20.00'ye kadar, "10.00" is read "on" → 10.00'da.
const SUFFIXES: Record<number, { to: string; at: string }> = {
  0: { to: "a", at: "da" }, // sıfır
  1: { to: "e", at: "de" }, // bir
  2: { to: "ye", at: "de" }, // iki
  3: { to: "e", at: "te" }, // üç
  4: { to: "e", at: "te" }, // dört
  5: { to: "e", at: "te" }, // beş
  6: { to: "ya", at: "da" }, // altı
  7: { to: "ye", at: "de" }, // yedi
  8: { to: "e", at: "de" }, // sekiz
  9: { to: "a", at: "da" }, // dokuz
  10: { to: "a", at: "da" }, // on
  20: { to: "ye", at: "de" }, // yirmi
  30: { to: "a", at: "da" }, // otuz
  40: { to: "a", at: "ta" }, // kırk
  50: { to: "ye", at: "de" }, // elli
};

// "20:00" + "to" → "20.00'ye"
const formatTime = (time: string, suffix: "to" | "at") => {
  const [hour, minute] = time.split(":").map(Number);
  const spoken = minute === 0 ? hour : minute; // "10.30" is read "on otuz"
  const key = spoken % 10 === 0 ? spoken : spoken % 10;

  return `${time.replace(":", ".")}'${SUFFIXES[key][suffix]}`;
};

const toMinutes = (time: string) => {
  const [hour, minute] = time.split(":").map(Number);
  return hour * 60 + minute;
};

// Day of week and minutes since midnight in Istanbul, wherever the visitor is.
const getIstanbulTime = (date: Date) => {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const part = (type: string) => parts.find((p) => p.type === type)?.value;

  return {
    day: WEEKDAYS.indexOf(part("weekday") ?? ""),
    minutes: Number(part("hour")) * 60 + Number(part("minute")),
  };
};

export const getOpeningStatus = (date: Date): OpeningStatus => {
  const { day, minutes } = getIstanbulTime(date);
  const today = OPENING_HOURS.find((d) => d.day === day)?.hours;

  if (today && minutes < toMinutes(today.open)) {
    return {
      isOpen: false,
      label: `Kapalı · ${formatTime(today.open, "at")} açılıyor`,
    };
  }

  if (today && minutes < toMinutes(today.close)) {
    return {
      isOpen: true,
      label: `Açık · ${formatTime(today.close, "to")} kadar`,
    };
  }

  // Closed for today: find the next day that opens.
  for (let offset = 1; offset <= 7; offset++) {
    const next = OPENING_HOURS.find((d) => d.day === (day + offset) % 7);

    if (next?.hours) {
      return {
        isOpen: false,
        label: `Kapalı · ${next.name} ${formatTime(next.hours.open, "at")} açılıyor`,
      };
    }
  }

  return { isOpen: false, label: "Kapalı" };
};

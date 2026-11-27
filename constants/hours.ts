import type { OpeningHours } from "@app/types";

export const TIME_ZONE = "Europe/Istanbul";

// Listed from Monday, the way the week is shown on the contact page.
export const OPENING_HOURS: OpeningHours[] = [
  { day: 1, name: "Pazartesi", hours: null },
  { day: 2, name: "Salı", hours: { open: "10:00", close: "20:00" } },
  { day: 3, name: "Çarşamba", hours: { open: "10:00", close: "20:00" } },
  { day: 4, name: "Perşembe", hours: { open: "10:00", close: "20:00" } },
  { day: 5, name: "Cuma", hours: { open: "10:00", close: "20:00" } },
  { day: 6, name: "Cumartesi", hours: { open: "10:00", close: "20:00" } },
  { day: 0, name: "Pazar", hours: null },
];

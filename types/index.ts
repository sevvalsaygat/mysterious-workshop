import type { StaticImageData } from "next/image";

export type OpeningHours = {
  day: number; // 0 = Sunday … 6 = Saturday, same as Date.getDay()
  name: string;
  hours: { open: string; close: string } | null; // "10:00"; null = closed
};

export type Workshop = {
  slug: string; // used in the URL: /workshops/carkta-ilk-adim
  name: string;
  level: string; // "Başlangıç", or an age range for kids
  duration: string; // "4 hafta", "tek gün"
  rhythm: string; // "haftada bir akşam", "4 saat"
  price: number; // per person, in Turkish lira
};

export type Product = {
  slug: string;
  name: string;
  type: "Kase" | "Kupa" | "Tabak" | "Vazo";
  size: string; // "Ø 14 cm", "300 ml"
  image: StaticImageData;
};

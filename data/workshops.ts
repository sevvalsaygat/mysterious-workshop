import type { Workshop } from "@app/types";

export const WORKSHOPS: Workshop[] = [
  {
    slug: "carkta-ilk-adim",
    name: "Çarkta İlk Adım",
    level: "Başlangıç",
    duration: "4 hafta",
    rhythm: "haftada bir akşam",
    price: 7500,
  },
  {
    slug: "elle-sekillendirme",
    name: "Elle Şekillendirme",
    level: "Başlangıç",
    duration: "3 hafta",
    rhythm: "cumartesi sabahları",
    price: 5400,
  },
  {
    slug: "sirlama-atolyesi",
    name: "Sırlama Atölyesi",
    level: "Orta seviye",
    duration: "tek gün",
    rhythm: "4 saat",
    price: 2400,
  },
  {
    slug: "cocuk-atolyesi",
    name: "Çocuk Atölyesi",
    level: "7–12 yaş",
    duration: "tek gün",
    rhythm: "2 saat",
    price: 1200,
  },
];

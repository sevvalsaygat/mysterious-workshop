import type { Product } from "@app/types";

import kumVazo from "@/public/images/urun-kum-vazo.webp";
import sabahKupasi from "@/public/images/urun-sabah-kupasi.webp";
import toprakKase from "@/public/images/urun-toprak-kase.webp";
import zeytinTabagi from "@/public/images/urun-zeytin-tabagi.webp";

// The pieces shown on the home page; the full collection comes with the collection page.
export const FEATURED_PRODUCTS: Product[] = [
  {
    slug: "toprak-kase",
    name: "Toprak Kase",
    type: "Kase",
    size: "Ø 14 cm",
    image: toprakKase,
  },
  {
    slug: "sabah-kupasi",
    name: "Sabah Kupası",
    type: "Kupa",
    size: "300 ml",
    image: sabahKupasi,
  },
  {
    slug: "zeytin-tabagi",
    name: "Zeytin Tabağı",
    type: "Tabak",
    size: "Ø 22 cm",
    image: zeytinTabagi,
  },
  {
    slug: "kum-vazo",
    name: "Kum Vazo",
    type: "Vazo",
    size: "24 cm",
    image: kumVazo,
  },
];

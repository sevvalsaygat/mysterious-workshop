import { Fraunces, Manrope } from "next/font/google";

// Headings: Fraunces (variable, thin 300 is used for the big titles).
// "opsz" adapts the letterforms to the font size (thin and narrow in big titles).
export const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  axes: ["opsz"],
  variable: "--font-fraunces",
  display: "swap",
});

// Body text: Manrope (variable).
export const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
  display: "swap",
});

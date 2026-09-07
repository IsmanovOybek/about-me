export const locales = ["en", "ko", "ru", "uz"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  ko: "KR",
  ru: "RU",
  uz: "UZ",
};

export const localeNames: Record<Locale, string> = {
  en: "English",
  ko: "한국어",
  ru: "Русский",
  uz: "Oʻzbekcha",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

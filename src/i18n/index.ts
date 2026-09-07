import type { Locale } from "./locales";
import type { Dictionary } from "./dictionaries/en";
import { en } from "./dictionaries/en";
import { ko } from "./dictionaries/ko";
import { ru } from "./dictionaries/ru";
import { uz } from "./dictionaries/uz";

export const dictionaries: Record<Locale, Dictionary> = {
  en,
  ko,
  ru,
  uz,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary };
export {
  locales,
  defaultLocale,
  localeLabels,
  localeNames,
  isLocale,
} from "./locales";
export type { Locale } from "./locales";

import { Dictionary, Locale } from "./types";
import { ptDictionary } from "./pt";
import { enDictionary } from "./en";

export function getDictionary(locale: Locale): Dictionary {
  return locale === "en" ? enDictionary : ptDictionary;
}

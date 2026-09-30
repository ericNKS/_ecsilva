"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Dictionary, Locale } from "./types";
import { getDictionary } from "./get-dictionary";

interface I18nContextType {
  locale: Locale;
  dict: Dictionary;
  setLocale: (newLocale: Locale) => void;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({
  children,
  initialLocale = "pt",
}: {
  children: React.ReactNode;
  initialLocale?: Locale;
}) {
  const pathname = usePathname();
  const router = useRouter();

  // Determine current locale from pathname or fallback to initialLocale
  const currentLocale: Locale = pathname?.startsWith("/en") ? "en" : "pt";
  const [locale, setLocaleState] = useState<Locale>(currentLocale);

  useEffect(() => {
    const active = pathname?.startsWith("/en") ? "en" : "pt";
    setLocaleState(active);
    if (typeof document !== "undefined") {
      document.documentElement.lang = active === "en" ? "en" : "pt-BR";
    }
  }, [pathname]);

  const dict = getDictionary(locale);

  const setLocale = (newLocale: Locale) => {
    if (newLocale === locale) return;
    setLocaleState(newLocale);

    const currentHash = typeof window !== "undefined" ? window.location.hash : "";

    if (newLocale === "en") {
      if (!pathname?.startsWith("/en")) {
        router.push(`/en${currentHash}`);
      }
    } else {
      if (pathname?.startsWith("/en")) {
        router.push(`/${currentHash}`);
      }
    }
  };

  return (
    <I18nContext.Provider value={{ locale, dict, setLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}

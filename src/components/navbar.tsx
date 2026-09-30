"use client";

import { useTheme } from "next-themes";
import { Moon, Sun, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";
import { useScrollTo } from "@/hooks/useScrollTo";
import { useI18n } from "@/i18n/context";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const { locale, dict, setLocale } = useI18n();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleScroll = useScrollTo();

  return (
    <nav
      aria-label="Navegação principal"
      className="fixed top-0 w-full z-50 bg-white/85 dark:bg-slate-950/85 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 px-6 py-3.5 lg:px-24 transition-colors"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => handleScroll(e, "#hero")}
          className="text-2xl font-black tracking-tighter text-accent hover:opacity-90 transition-opacity"
        >
          ÉRIC<span className="text-slate-900 dark:text-white transition-colors">.SANTOS</span>
        </a>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#hero"
              onClick={(e) => handleScroll(e, "#hero")}
              className="text-sm font-medium text-slate-700 hover:text-accent dark:text-slate-300 dark:hover:text-accent transition-colors"
            >
              {dict.nav.home}
            </a>
            <a
              href="#sobre"
              onClick={(e) => handleScroll(e, "#sobre")}
              className="text-sm font-medium text-slate-700 hover:text-accent dark:text-slate-300 dark:hover:text-accent transition-colors"
            >
              {dict.nav.about}
            </a>
            <a
              href="#projetos"
              onClick={(e) => handleScroll(e, "#projetos")}
              className="text-sm font-medium text-slate-700 hover:text-accent dark:text-slate-300 dark:hover:text-accent transition-colors"
            >
              {dict.nav.projects}
            </a>
            <a
              href="#contato"
              onClick={(e) => handleScroll(e, "#contato")}
              className="text-sm font-medium text-slate-700 hover:text-accent dark:text-slate-300 dark:hover:text-accent transition-colors"
            >
              {dict.nav.contact}
            </a>
          </div>

          <div className="flex items-center gap-2">
            {/* LinkedIn subtle icon */}
            <a
              href="https://www.linkedin.com/in/eric-ssantos"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil no LinkedIn de Éric Santos"
              title="LinkedIn: /in/eric-ssantos"
              className="p-2 rounded-full text-slate-600 hover:text-accent dark:text-slate-400 dark:hover:text-accent hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Linkedin size={18} />
            </a>

            {/* Language Switcher - Sleek pill toggle */}
            <button
              onClick={() => setLocale(locale === "pt" ? "en" : "pt")}
              aria-label="Alternar idioma entre Português e Inglês"
              title={locale === "pt" ? "Switch to English" : "Mudar para Português"}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border border-slate-200 dark:border-slate-800 bg-slate-100/70 dark:bg-slate-800/70 text-slate-700 dark:text-slate-200 hover:border-accent hover:text-accent dark:hover:border-accent dark:hover:text-accent transition-all cursor-pointer"
            >
              <span className="text-[11px] font-bold text-accent">🌐</span>
              <span className="tracking-wide">{locale === "pt" ? "EN" : "PT"}</span>
            </button>

            {/* Theme Toggle Button - Static attributes to eliminate SSR hydration mismatch */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Alternar tema de cores"
              title="Alternar tema de cores"
              className="p-2 rounded-full text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              {mounted ? (
                theme === "dark" ? <Sun size={18} /> : <Moon size={18} />
              ) : (
                <span className="inline-block w-[18px] h-[18px]" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

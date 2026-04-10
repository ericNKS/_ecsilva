"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useScrollTo } from "@/hooks/useHandleScroll";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleScroll = useScrollTo();

  if (!mounted) return null;

  return (
    <nav className="fixed top-0 w-full z-50 bg-base/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 px-6 py-4 lg:px-24">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-black tracking-tighter text-accent">
          ÉRIC<span className="text-primary">.SANTOS</span>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#hero"
              onClick={(e) => handleScroll(e, "#hero")}
              className="font-medium hover:text-accent transition-colors"
            >
              Home
            </a>
            <a
              href="#projetos"
              onClick={(e) => handleScroll(e, "#projetos")}
              className="font-medium hover:text-accent transition-colors"
            >
              Projetos
            </a>
            <a
              href="#sobre"
              onClick={(e) => handleScroll(e, "#sobre")}
              className="font-medium hover:text-accent transition-colors"
            >
              Sobre
            </a>
            <a
              href="#contato"
              onClick={(e) => handleScroll(e, "#contato")}
              className="font-medium hover:text-accent transition-colors"
            >
              Contato
            </a>
          </div>

          <div className="flex items-center gap-2 bg-surface p-1 rounded-full border border-gray-200 dark:border-gray-800">
            <button
              onClick={() => setTheme("light")}
              className={cn("p-2 rounded-full transition-all", theme === "light" ? "bg-accent text-white" : "text-muted hover:text-primary")}
            >
              <Sun size={18} />
            </button>
            <button
              onClick={() => setTheme("dark")}
              className={cn("p-2 rounded-full transition-all", theme === "dark" ? "bg-accent text-white" : "text-muted hover:text-primary")}
            >
              <Moon size={18} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

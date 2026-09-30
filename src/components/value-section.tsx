"use client";

import { ShieldCheck, Zap, Database } from "lucide-react";
import { useI18n } from "@/i18n/context";

const icons = [Zap, ShieldCheck, Database];

export function ValueSection() {
  const { dict } = useI18n();

  return (
    <section className="py-24 px-6 lg:px-24">
      <div className="flex flex-col items-center mb-16 text-center">
        <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-2">
          {dict.values.badge}
        </span>
        <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          {dict.values.title}
        </h2>
        <p className="text-slate-700 dark:text-slate-300 mt-4 max-w-2xl leading-relaxed text-base lg:text-lg">
          {dict.values.description}
        </p>
        <div className="w-20 h-1 bg-accent rounded-full mt-4" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {dict.values.pillars.map((pillar, i) => {
          const Icon = icons[i % icons.length];
          return (
            <div
              key={i}
              className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl shadow-sm hover:border-accent/60 dark:hover:border-accent/60 hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-accent/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Icon className="text-accent" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">
                {pillar.title}
              </h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm lg:text-base">
                {pillar.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

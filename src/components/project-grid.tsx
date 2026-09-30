"use client";

import { ProjectCard } from "./project-card";
import { useI18n } from "@/i18n/context";

export function ProjectGrid() {
  const { dict } = useI18n();

  return (
    <section id="projetos" className="py-24 px-6 lg:px-24">
      <div className="flex flex-col items-center mb-16 text-center">
        <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-2">
          {dict.projects.badge}
        </span>
        <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-white">
          {dict.projects.title}
        </h2>
        <p className="text-slate-700 dark:text-slate-300 max-w-2xl leading-relaxed text-base lg:text-lg">
          {dict.projects.description}
        </p>
        <div className="w-20 h-1 bg-accent rounded-full mt-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {dict.projects.items.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </section>
  );
}

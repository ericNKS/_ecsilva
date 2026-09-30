"use client";

import { useDownload } from "@/hooks/useDownload";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import { useI18n } from "@/i18n/context";
import { useScrollTo } from "@/hooks/useScrollTo";

export function Hero() {
  const { container } = useHeroAnimation();
  const { download } = useDownload();
  const { dict } = useI18n();
  const handleScroll = useScrollTo();

  return (
    <section
      ref={container}
      className="relative flex min-h-[90vh] flex-col-reverse items-center justify-center gap-12 px-6 py-20 lg:flex-row lg:px-24"
    >
      <div className="flex flex-col space-y-8 text-center lg:w-3/5 lg:text-left">
        <h1 className="animate-title text-4xl font-extrabold tracking-tight lg:text-6xl text-balance leading-tight text-slate-900 dark:text-white">
          {dict.hero.titleLine1}
          <span className="text-accent block mt-2 underline decoration-accent/30">
            {dict.hero.titleHighlight}
          </span>
        </h1>

        <div className="animate-subtitle text-lg text-slate-700 dark:text-slate-300 max-w-2xl lg:text-xl leading-relaxed">
          <p>
            {dict.hero.bioIntro}
            <span className="text-slate-900 dark:text-white font-bold">{dict.hero.name}</span>
            {dict.hero.roleIntro}
          </p>
          <span className="block mt-4 font-medium border-l-4 border-accent pl-4 text-slate-800 dark:text-slate-200">
            {dict.hero.proofHighlight}
          </span>
        </div>

        <div className="animate-cta flex flex-wrap items-center justify-center gap-4 lg:justify-start">
          <a
            href="#projetos"
            onClick={(e) => handleScroll(e, "#projetos")}
            className="cursor-pointer bg-accent text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            {dict.hero.btnProjects}
            <ArrowRight size={20} />
          </a>

          <button
            onClick={() => {
              download(dict.hero.cvUrl, dict.hero.cvFileName);
            }}
            className="cursor-pointer border-2 border-accent text-accent px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:bg-accent hover:text-white transition-all"
          >
            {dict.hero.btnDownloadCv}
            <Download size={20} />
          </button>
        </div>
      </div>

      <div className="animate-image relative w-64 h-64 lg:w-96 lg:h-96">
        <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <Image
          width={1000}
          height={1000}
          src="/me.webp"
          alt="Foto profissional de Éric Santos, Engenheiro Backend especializado em TypeScript e Node.js"
          title="Éric Santos — Engenheiro Backend"
          priority
          sizes="(max-width: 768px) 256px, 384px"
          className="relative w-full h-full object-cover rounded-2xl shadow-2xl border-2 border-accent/20"
        />
      </div>
    </section>
  );
}

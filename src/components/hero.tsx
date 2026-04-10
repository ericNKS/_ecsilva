"use client";

import { useDownload } from "@/hooks/useDownload";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const { container } = useHeroAnimation();
  const { download } = useDownload();
  return (
    <section
      ref={container}
      className="relative flex min-h-[90vh] flex-col-reverse items-center justify-center gap-12 px-6 py-20 lg:flex-row lg:px-24"
    >
      <div className="flex flex-col space-y-8 text-center lg:w-3/5 lg:text-left">
        <h1 className="animate-title text-4xl font-extrabold tracking-tight lg:text-6xl text-balance leading-tight">
          Sua infraestrutura deve impulsionar seu lucro,
          <span className="text-accent block mt-2 underline decoration-accent/30">não devorar sua margem.</span>
        </h1>

        <p className="animate-subtitle text-lg text-muted max-w-2xl lg:text-xl leading-relaxed">
          Sistemas lentos e custos de nuvem fora de controle matam o crescimento. Sou <span className="text-primary font-semibold">Éric Santos</span>, Engenheiro Backend que transforma arquiteturas complexas em motores de eficiência.
          <span className="block mt-4 font-medium border-l-4 border-accent pl-4 text-primary/80">
            Histórico real: Redução de 77% em consumo de memória e bancos de dados 90% mais velozes em produção.
          </span>
        </p>

        <div className="animate-cta flex flex-wrap items-center justify-center gap-4 lg:justify-start">
          <a
            href="https://github.com/ericNKS"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer bg-accent text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity">
            Explorar Projetos
            <ArrowRight size={20} />
          </a>

          <button
            onClick={() => {download('/Curriculo_Eric_santos.pdf', 'Curriculo_Eric_santos.pdf')}}
            className="cursor-pointer border-2 border-accent text-accent px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:bg-accent hover:text-white transition-all">
            Baixar Currículo (PDF)
            <Download size={20} />
          </button>
        </div>
      </div>

      <div className="animate-image relative w-64 h-64 lg:w-96 lg:h-96">
        <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <Image
          width={1000}
          height={1000}
          src="/me.jpeg"
          alt="Éric Santos"
          className="relative w-full h-full object-cover rounded-2xl shadow-2xl border-2 border-accent/20 grayscale hover:grayscale-0 transition-all duration-700"
        />
      </div>
    </section>
  );
}

"use client";

import { useI18n } from "@/i18n/context";
import { useScrollTo } from "@/hooks/useScrollTo";
import { Linkedin, Github, Download, MessageSquare } from "lucide-react";

export function Footer() {
  const { dict } = useI18n();
  const handleScroll = useScrollTo();

  const waUrl = `https://wa.me/${dict.whatsapp.phoneNumber}`;

  return (
    <footer className="py-16 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/80 transition-colors" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand & bio */}
          <div>
            <div className="text-2xl font-black tracking-tighter text-accent mb-4">
              ÉRIC<span className="text-slate-900 dark:text-white transition-colors">.SANTOS</span>
            </div>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
              {dict.footer.roleDescription}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold mb-4 text-slate-900 dark:text-white">{dict.footer.navTitle}</h3>
            <nav aria-label="Rodapé" className="flex flex-col gap-3 text-sm">
              <a
                href="#hero"
                onClick={(e) => handleScroll(e, "#hero")}
                className="text-slate-600 hover:text-accent dark:text-slate-400 dark:hover:text-accent transition-colors"
              >
                {dict.nav.home}
              </a>
              <a
                href="#sobre"
                onClick={(e) => handleScroll(e, "#sobre")}
                className="text-slate-600 hover:text-accent dark:text-slate-400 dark:hover:text-accent transition-colors"
              >
                {dict.nav.about}
              </a>
              <a
                href="#projetos"
                onClick={(e) => handleScroll(e, "#projetos")}
                className="text-slate-600 hover:text-accent dark:text-slate-400 dark:hover:text-accent transition-colors"
              >
                {dict.nav.projects}
              </a>
              <a
                href="#contato"
                onClick={(e) => handleScroll(e, "#contato")}
                className="text-slate-600 hover:text-accent dark:text-slate-400 dark:hover:text-accent transition-colors"
              >
                {dict.nav.contact}
              </a>
            </nav>
          </div>

          {/* Socials & Contact */}
          <div>
            <h3 className="font-bold mb-4 text-slate-900 dark:text-white">{dict.footer.connectTitle}</h3>
            <div className="flex flex-col gap-3 text-sm">
              {/* WhatsApp */}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-accent dark:text-slate-400 dark:hover:text-accent transition-colors flex items-center gap-2"
              >
                <MessageSquare size={16} />
                WhatsApp: {dict.whatsapp.displayPhone}
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/eric-ssantos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-accent dark:text-slate-400 dark:hover:text-accent transition-colors flex items-center gap-2"
              >
                <Linkedin size={16} />
                LinkedIn: /in/eric-ssantos
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/ericNKS"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-accent dark:text-slate-400 dark:hover:text-accent transition-colors flex items-center gap-2"
              >
                <Github size={16} />
                GitHub: github.com/ericNKS
              </a>

              {/* Download CV */}
              <a
                href={dict.hero.cvUrl}
                download={dict.hero.cvFileName}
                className="text-slate-600 hover:text-accent dark:text-slate-400 dark:hover:text-accent transition-colors flex items-center gap-2"
              >
                <Download size={16} />
                {dict.footer.downloadCv}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 text-center text-slate-500 dark:text-slate-400 text-xs">
          <p>© {new Date().getFullYear()} {dict.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

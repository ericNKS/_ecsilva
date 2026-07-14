import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ValueSection } from "@/components/value-section";
import { TechMarquee } from "@/components/tech-marquee";
import { ProjectGrid } from "@/components/project-grid";
import { ContactForm } from "@/components/contact-form";
import { BackgroundBlobs } from "@/components/background-blobs";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <BackgroundBlobs />

      <div className="pt-20">
        <header id="hero"><Hero /></header>
        <section id="sobre" aria-label="Sobre mim"><ValueSection /></section>
        <TechMarquee />
        <section id="projetos" aria-label="Projetos em destaque"><ProjectGrid /></section>
        <section id="contato" aria-label="Formulário de contato"><ContactForm /></section>
      </div>

      <footer className="py-16 border-t" role="contentinfo">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="text-2xl font-black tracking-tighter text-accent mb-4">
                ÉRIC<span className="text-primary">.SANTOS</span>
              </div>
              <p className="text-muted leading-relaxed">
                Engenheiro Backend especializado em TypeScript, Node.js e Go. Transformando arquiteturas complexas em sistemas de alta performance.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Navegação</h3>
              <nav aria-label="Rodapé" className="flex flex-col gap-3">
                <a href="#hero" className="text-muted hover:text-accent transition-colors">Home</a>
                <a href="#sobre" className="text-muted hover:text-accent transition-colors">Sobre Mim</a>
                <a href="#projetos" className="text-muted hover:text-accent transition-colors">Projetos</a>
                <a href="#contato" className="text-muted hover:text-accent transition-colors">Contato</a>
              </nav>
            </div>
            <div>
              <h3 className="font-bold mb-4">Conecte-se</h3>
              <div className="flex flex-col gap-3">
                <a href="https://github.com/ericNKS" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">GitHub</a>
                <a href="https://www.linkedin.com/in/eric-santos/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">LinkedIn</a>
                <a href="/Curriculo_Eric_santos.pdf" download className="text-muted hover:text-accent transition-colors">Baixar Currículo</a>
              </div>
            </div>
          </div>
          <div className="border-t pt-8 text-center text-muted text-sm">
            <p>© {new Date().getFullYear()} Éric Santos — Engenheiro Backend. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

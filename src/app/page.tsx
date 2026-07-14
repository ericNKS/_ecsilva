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

      <footer className="py-12 border-t text-center text-muted">
        <div className="max-w-7xl mx-auto px-6">
          <p>© {new Date().getFullYear()} Éric Santos</p>
        </div>
      </footer>
    </main>
  );
}

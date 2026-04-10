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
        <div id="hero"><Hero /></div>
        <div id="sobre"><ValueSection /></div>
        <TechMarquee />
        <div id="projetos"><ProjectGrid /></div>
        <div id="contato"><ContactForm /></div>
      </div>

      <footer className="py-12 border-t text-center text-muted">
        <div className="max-w-7xl mx-auto px-6">
          <p>© {new Date().getFullYear()} Éric Santos</p>
        </div>
      </footer>
    </main>
  );
}

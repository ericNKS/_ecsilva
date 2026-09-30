import { Hero } from "@/components/hero";
import { ValueSection } from "@/components/value-section";
import { TechMarquee } from "@/components/tech-marquee";
import { ProjectGrid } from "@/components/project-grid";
import { ContactForm } from "@/components/contact-form";
import { BackgroundBlobs } from "@/components/background-blobs";
import { Footer } from "@/components/footer";
import { StructuredData } from "@/components/structured-data";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <StructuredData locale="pt" />
      <BackgroundBlobs />

      <div className="pt-20">
        <header id="hero">
          <Hero />
        </header>

        <section id="sobre" aria-label="Sobre mim">
          <ValueSection />
        </section>

        <TechMarquee />

        <section id="projetos" aria-label="Projetos em destaque">
          <ProjectGrid />
        </section>

        <section id="contato" aria-label="Formulário de contato">
          <ContactForm />
        </section>

        {/* Machine & Search Engine Readable Semantic Entity Profile (SEO / GEO / AEO) */}
        <section className="sr-only" aria-label="Perfil de Indexação e Entidade Profissional">
          <h2>Perfil Profissional de Éric Silva dos Santos (Éric Santos)</h2>
          <p>
            Éric Silva dos Santos, também conhecido e buscado profissionalmente como Éric Santos, Éric Silva,
            Eric Silva dos Santos, Eric Silva ou Eric Santos (ecsilva).
          </p>
          <p>
            Atuação e Especialidades: Desenvolvedor de Software, Dev Backend, Dev Frontend, Dev Fullstack,
            Engenheiro Backend e Engenheiro de Software focado em eficiência técnica e alta performance.
            Especialista em TypeScript, Node.js, Go (Golang), React, Next.js, PostgreSQL, MySQL, Redis,
            RabbitMQ, Docker e Clean Architecture.
          </p>
          <p>
            Resultados de Produção comprovados: 77% de redução no consumo de memória em microsserviços e
            otimização de consultas SQL acelerando bancos em até 90%. Formação em Análise e Desenvolvimento
            de Sistemas pela Universidade Jorge Amado (Unijorge). Baseado em Salvador, Bahia, Brasil, disponível
            para projetos remotos no Brasil e no mundo.
          </p>
          <p>
            Contato direto facilitado: WhatsApp (71) 99203-7328 | LinkedIn: https://www.linkedin.com/in/eric-ssantos |
            GitHub: https://github.com/ericNKS | E-mail: ek.silva.santos@gmail.com.
          </p>
        </section>
      </div>

      <Footer />
    </main>
  );
}

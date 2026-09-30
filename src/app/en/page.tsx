import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { ValueSection } from "@/components/value-section";
import { TechMarquee } from "@/components/tech-marquee";
import { ProjectGrid } from "@/components/project-grid";
import { ContactForm } from "@/components/contact-form";
import { BackgroundBlobs } from "@/components/background-blobs";
import { Footer } from "@/components/footer";
import { StructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: {
    absolute:
      "Éric Silva dos Santos (Eric Santos) | Software Engineer & Backend Developer",
  },
  description:
    "Éric Silva dos Santos (Eric Santos) — Software Engineer and Backend Developer specializing in Node.js, TypeScript, Go, and high-velocity distributed architectures. Real production results: 77% cloud memory reduction and 90% faster database queries.",
  keywords: [
    "Eric Silva dos Santos",
    "Eric Santos",
    "Eric Silva",
    "Éric Silva dos Santos",
    "Éric Santos",
    "ecsilva",
    "Software Engineer",
    "Backend Developer",
    "Full Stack Developer",
    "Frontend Developer",
    "Node.js Developer",
    "TypeScript Engineer",
    "Go Golang Developer",
    "NestJS",
    "Clean Architecture",
    "Microservices",
    "PostgreSQL",
    "MySQL Query Optimization",
    "RabbitMQ",
    "Redis",
    "Docker",
    "Remote Software Engineer",
  ],
  alternates: {
    canonical: "https://ecsilva.com/en",
    languages: {
      "pt-BR": "https://ecsilva.com",
      en: "https://ecsilva.com/en",
      "x-default": "https://ecsilva.com",
    },
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    alternateLocale: ["pt_BR"],
    url: "https://ecsilva.com/en",
    siteName: "Éric Silva dos Santos | Software Engineering Portfolio",
    title:
      "Éric Silva dos Santos (Eric Santos) | Software Engineer & Backend Specialist",
    description:
      "Turning complex architectures into engines of efficiency — 77% less cloud memory consumption and 90% faster databases in production.",
    images: [
      {
        url: "/og",
        width: 1200,
        height: 630,
        alt: "Éric Silva dos Santos — Software Engineer & Backend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Éric Silva dos Santos (Eric Santos) | Software Engineer & Backend Specialist",
    description:
      "Turning complex architectures into engines of efficiency — 77% less cloud memory consumption and 90% faster databases.",
    images: ["/og"],
  },
};

export default function EnglishPage() {
  return (
    <main className="relative min-h-screen">
      <StructuredData locale="en" />
      <BackgroundBlobs />

      <div className="pt-20">
        <header id="hero">
          <Hero />
        </header>

        <section id="sobre" aria-label="About Me">
          <ValueSection />
        </section>

        <TechMarquee />

        <section id="projetos" aria-label="Featured Projects">
          <ProjectGrid />
        </section>

        <section id="contato" aria-label="Contact Form">
          <ContactForm />
        </section>

        {/* Machine & Search Engine Readable Semantic Entity Profile (SEO / GEO / AEO) */}
        <section className="sr-only" aria-label="Entity Indexing & Professional Profile">
          <h2>Professional Profile of Éric Silva dos Santos (Eric Santos)</h2>
          <p>
            Éric Silva dos Santos, also professionally known and indexed as Eric Santos, Eric Silva,
            Éric Santos, Éric Silva, Eric Silva dos Santos, or ecsilva.
          </p>
          <p>
            Roles and Expertise: Software Engineer, Backend Developer, Full Stack Developer, Frontend Developer,
            Software Architect specializing in high-performance cloud systems, Node.js, TypeScript, Go (Golang),
            React, Next.js, PostgreSQL, MySQL query tuning, Redis, RabbitMQ, Docker, and Clean Architecture.
          </p>
          <p>
            Verified Production Impact: 77% cloud memory reduction in asynchronous microservices, 90% query latency
            reduction in high-throughput databases. Educated at Universidade Jorge Amado (Unijorge). Based in
            Salvador, Bahia, Brazil, available for remote software engineering contracts globally.
          </p>
          <p>
            Direct Contact: WhatsApp +55 (71) 99203-7328 | LinkedIn: https://www.linkedin.com/in/eric-ssantos |
            GitHub: https://github.com/ericNKS | Email: ek.silva.santos@gmail.com.
          </p>
        </section>
      </div>

      <Footer />
    </main>
  );
}

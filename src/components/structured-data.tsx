export function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Éric Silva dos Santos",
    url: "https://ecsilva.com",
    image: "https://ecsilva.com/me.png",
    jobTitle: "Engenheiro Backend",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    sameAs: [
      "https://github.com/ericNKS",
      "https://www.linkedin.com/in/eric-santos/",
    ],
    knowsAbout: [
      "Node.js",
      "TypeScript",
      "Go",
      "PostgreSQL",
      "Redis",
      "RabbitMQ",
      "Clean Architecture",
      "Event-Driven Architecture",
      "Microsserviços",
    ],
    description:
      "Engenheiro Backend especializado em transformar arquiteturas complexas em motores de eficiência.",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Éric Santos | Engenheiro Backend",
    url: "https://ecsilva.com",
    author: {
      "@type": "Person",
      name: "Éric Santos",
    },
    inLanguage: "pt-BR",
    description:
      "Portfólio profissional de Éric Santos, Engenheiro Backend especializado em arquiteturas de alta performance.",
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Éric Santos — Engenharia Backend",
    url: "https://ecsilva.com",
    description:
      "Serviços de engenharia backend: otimização de performance, arquitetura de microsserviços, refatoração de sistemas legados.",
    areaServed: "BR",
    serviceType: [
      "Backend Development",
      "System Architecture",
      "Performance Optimization",
      "Database Optimization",
    ],
    provider: {
      "@type": "Person",
      name: "Éric Santos",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
    </>
  );
}

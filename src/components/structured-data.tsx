export function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Éric Silva dos Santos",
    url: "https://ecsilva.com",
    image: "https://ecsilva.com/me.webp",
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
      "MySQL",
      "Redis",
      "RabbitMQ",
      "Clean Architecture",
      "Event-Driven Architecture",
      "Microsserviços",
      "Otimização de Performance",
      "Arquitetura de Software",
    ],
    description:
      "Engenheiro Backend especializado em transformar arquiteturas complexas em motores de eficiência. Redução de 77% em consumo de memória e bancos de dados 90% mais rápidos.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "BR",
    },
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
      "Portfólio profissional de Éric Santos, Engenheiro Backend especializado em TypeScript, Node.js, Go e arquiteturas de alta performance.",
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Éric Santos — Engenharia Backend",
    url: "https://ecsilva.com",
    description:
      "Serviços de engenharia backend: otimização de performance, arquitetura de microsserviços, refatoração de sistemas legados, otimização de bancos de dados PostgreSQL e MySQL.",
    areaServed: "BR",
    serviceType: [
      "Backend Development",
      "System Architecture",
      "Performance Optimization",
      "Database Optimization",
      "Microsserviços",
      "Clean Architecture Consulting",
    ],
    provider: {
      "@type": "Person",
      name: "Éric Santos",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://ecsilva.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Sobre",
        item: "https://ecsilva.com#sobre",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Projetos",
        item: "https://ecsilva.com#projetos",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Contato",
        item: "https://ecsilva.com#contato",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "O que faz um Engenheiro Backend?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Um Engenheiro Backend projeta, desenvolve e otimiza a lógica do servidor, bancos de dados e APIs que sustentam aplicações. É responsável pela performance, segurança e escalabilidade dos sistemas.",
        },
      },
      {
        "@type": "Question",
        name: "Como reduzir custos de infraestrutura cloud?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Através de otimização de código, uso eficiente de memória, implementação de microsserviços e processamento assíncrono. Projetos reais alcançaram redução de 77% no consumo de memória.",
        },
      },
      {
        "@type": "Question",
        name: "Quanto tempo leva para otimizar um banco de dados?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Depende da complexidade do sistema. Uma auditoria inicial identifica gargalos em 1-2 semanas. Implementações completas de otimização podem levar de 2 a 8 semanas, com melhorias de até 90% na velocidade.",
        },
      },
    ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

export function StructuredData({ locale = "pt" }: { locale?: "pt" | "en" }) {
  const isEn = locale === "en";

  const personId = "https://ecsilva.com/#person";
  const websiteId = "https://ecsilva.com/#website";
  const profilePageId = isEn
    ? "https://ecsilva.com/en#profilepage"
    : "https://ecsilva.com/#profilepage";

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. Person Entity (Comprehensive disambiguation for search and AI engines)
      {
        "@type": "Person",
        "@id": personId,
        name: "Éric Silva dos Santos",
        alternateName: [
          "Éric Santos",
          "Éric Silva",
          "Eric Silva dos Santos",
          "Eric Silva",
          "Eric Santos",
          "ecsilva",
        ],
        givenName: "Éric",
        familyName: "Silva dos Santos",
        additionalName: "Santos",
        url: isEn ? "https://ecsilva.com/en" : "https://ecsilva.com",
        image: "https://ecsilva.com/me.webp",
        telephone: "+5571992037328",
        email: "ek.silva.santos@gmail.com",
        jobTitle: isEn
          ? [
              "Backend Engineer",
              "Software Engineer",
              "Full Stack Developer",
              "Frontend Developer",
            ]
          : [
              "Engenheiro Backend",
              "Desenvolvedor de Software",
              "Dev Backend",
              "Dev Frontend",
              "Dev Fullstack",
              "Engenheiro de Software",
            ],
        worksFor: {
          "@type": "Organization",
          name: "Politimax",
          jobTitle: isEn ? "Backend Developer" : "Desenvolvedor Backend",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Salvador",
          addressRegion: "BA",
          addressCountry: "BR",
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Universidade Jorge Amado (Unijorge)",
        },
        knowsLanguage: [
          {
            "@type": "Language",
            name: "Portuguese",
            alternateName: "pt-BR",
          },
          {
            "@type": "Language",
            name: "English",
            alternateName: "en",
          },
        ],
        sameAs: [
          "https://github.com/ericNKS",
          "https://www.linkedin.com/in/eric-ssantos",
          "https://wa.me/5571992037328",
          "https://ecsilva.com",
        ],
        knowsAbout: [
          "Software Engineering",
          "Backend Development",
          "Frontend Development",
          "Full Stack Development",
          "Node.js",
          "TypeScript",
          "JavaScript",
          "Go",
          "Golang",
          "NestJS",
          "Express.js",
          "React",
          "Next.js",
          "Tailwind CSS",
          "PostgreSQL",
          "MySQL",
          "Redis",
          "MongoDB",
          "RabbitMQ",
          "Docker",
          "Clean Architecture",
          "Event-Driven Architecture",
          "Microsserviços",
          "Cloud Cost Optimization",
          "Database Performance",
        ],
        hasOccupation: {
          "@type": "Occupation",
          name: isEn
            ? "Software Engineer & Backend Developer"
            : "Engenheiro de Software & Desenvolvedor Backend",
          occupationalCategory: "15-1252.00",
          skills:
            "Node.js, TypeScript, Go, PostgreSQL, MySQL, Redis, RabbitMQ, Clean Architecture, Microservices",
        },
        description: isEn
          ? "High-impact Backend Engineer and Software Developer specializing in Node.js, TypeScript, and Go. Proven track record in production architectures, achieving 77% memory consumption reduction and 90% faster databases."
          : "Engenheiro Backend e Desenvolvedor Fullstack especializado em Node.js, TypeScript e Go. Transformando arquiteturas complexas em motores de eficiência — 77% menos consumo de memória e bancos 90% mais rápidos.",
      },

      // 2. ProfilePage (Google official recommendation for developer portfolios)
      {
        "@type": "ProfilePage",
        "@id": profilePageId,
        url: isEn ? "https://ecsilva.com/en" : "https://ecsilva.com",
        name: isEn
          ? "Éric Silva dos Santos (Eric Santos) - Portfolio & Engineering Profile"
          : "Éric Silva dos Santos (Éric Santos) - Portfólio & Perfil de Engenharia",
        mainEntity: { "@id": personId },
        about: { "@id": personId },
        inLanguage: isEn ? "en" : "pt-BR",
      },

      // 3. WebSite
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: "https://ecsilva.com",
        name: "Éric Santos | Engenheiro Backend",
        alternateName: [
          "ecsilva",
          "Éric Silva dos Santos Portfólio",
          "Eric Santos Dev",
        ],
        author: { "@id": personId },
        publisher: { "@id": personId },
        inLanguage: ["pt-BR", "en"],
      },

      // 4. ProfessionalService / Consulting
      {
        "@type": "ProfessionalService",
        name: isEn
          ? "Éric Santos — Backend Engineering & Software Architecture"
          : "Éric Santos — Engenharia Backend & Arquitetura de Software",
        url: isEn ? "https://ecsilva.com/en" : "https://ecsilva.com",
        telephone: "+5571992037328",
        provider: { "@id": personId },
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Global / Remote",
        },
        serviceType: [
          "Backend Engineering",
          "Full Stack Software Development",
          "Cloud Cost Optimization",
          "Database Performance Tuning",
          "Microservices & Event-Driven Architecture",
          "Clean Architecture Consulting",
        ],
        description: isEn
          ? "High-performance software engineering services: cloud memory and infrastructure cost optimization, microservices in Node.js and Go, and advanced SQL tuning for PostgreSQL and MySQL."
          : "Serviços de engenharia backend: otimização de performance, arquitetura de microsserviços, refatoração de sistemas legados, otimização de bancos de dados PostgreSQL e MySQL.",
      },

      // 5. BreadcrumbList
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: isEn ? "Home" : "Início",
            item: isEn ? "https://ecsilva.com/en" : "https://ecsilva.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: isEn ? "About" : "Sobre",
            item: isEn
              ? "https://ecsilva.com/en#sobre"
              : "https://ecsilva.com#sobre",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: isEn ? "Projects" : "Projetos",
            item: isEn
              ? "https://ecsilva.com/en#projetos"
              : "https://ecsilva.com#projetos",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: isEn ? "Contact" : "Contato",
            item: isEn
              ? "https://ecsilva.com/en#contato"
              : "https://ecsilva.com#contato",
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
    />
  );
}

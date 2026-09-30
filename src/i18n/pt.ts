import { Dictionary } from "./types";

export const ptDictionary: Dictionary = {
  locale: "pt",
  meta: {
    title: "Éric Silva dos Santos | Engenheiro Backend | Node.js, TypeScript e Go",
    description:
      "Éric Silva dos Santos (Éric Santos) é Engenheiro Backend e Desenvolvedor Fullstack especializado em Node.js, TypeScript, Go e microsserviços. Redução de 77% em memória e bancos 90% mais rápidos.",
    keywords: [
      "Éric Silva dos Santos",
      "Éric Santos",
      "Éric Silva",
      "Eric Silva dos Santos",
      "Eric Silva",
      "Eric Santos",
      "ecsilva",
      "Engenheiro Backend",
      "Desenvolvedor de Software",
      "Dev Backend",
      "Dev Frontend",
      "Dev Fullstack",
      "TypeScript",
      "Node.js",
      "Clean Architecture",
      "Microsserviços",
      "Arquitetura de Software",
      "PostgreSQL",
      "Redis",
      "Go",
      "Desenvolvedor Backend Brasil",
    ],
    ogTitle: "Éric Santos | Engenheiro Backend de Alta Performance",
    ogDescription:
      "Transformo arquiteturas complexas em motores de eficiência — 77% menos consumo de memória, bancos 90% mais rápidos.",
  },
  nav: {
    home: "Home",
    about: "Sobre",
    projects: "Projetos",
    contact: "Contato",
    downloadCv: "Currículo",
  },
  hero: {
    titleLine1: "Engenheiro Backend que transforma arquiteturas complexas",
    titleHighlight: "em motores de eficiência.",
    bioIntro: "Sistemas lentos e custos de nuvem fora de controle matam o crescimento. Sou ",
    name: "Éric Silva dos Santos",
    roleIntro: ", Engenheiro Backend que transforma arquiteturas complexas em motores de eficiência.",
    proofHighlight:
      "Histórico real: Redução de 77% em consumo de memória e bancos de dados 90% mais velozes em produção.",
    btnProjects: "Explorar Projetos",
    btnDownloadCv: "Baixar Currículo (PDF)",
    cvFileName: "Curriculo_Eric_santos.pdf",
    cvUrl: "/Curriculo_Eric_santos.pdf",
  },
  values: {
    badge: "Sobre Mim",
    title: "Engenheiro Backend de Alta Performance",
    description:
      "Especializado em ecossistema TypeScript, Node.js e Go. Transformo sistemas lentos e caros em arquiteturas eficientes e escaláveis.",
    pillars: [
      {
        title: "Redução de Custos Cloud",
        description:
          "Otimização de microsserviços Node.js e processamento assíncrono com RabbitMQ para reduzir consumo de memória em até 77%, permitindo o downgrade de instâncias cloud sem perda de performance.",
      },
      {
        title: "Bancos de Dados 90% Mais Rápidos",
        description:
          "Refatoração avançada de queries SQL, criação de índices otimizados e reestruturação de bancos PostgreSQL e MySQL para acelerar requisições em 90%. Velocidade que retém usuários e conversões.",
      },
      {
        title: "Arquitetura de Software Escalável",
        description:
          "Clean Architecture e Event-Driven Architecture (EDA) em TypeScript e Go para garantir que seu sistema escale horizontalmente sem criar débitos técnicos ou comprometer a manutenibilidade.",
      },
    ],
  },
  projects: {
    badge: "Portfólio",
    title: "Projetos em Destaque",
    description:
      "Cases reais de otimização de performance, microsserviços e arquitetura de software com TypeScript, Go e Node.js.",
    items: [
      {
        title: "MailGo",
        description:
          "Em sistemas de grande escala, o processamento síncrono de tarefas pesadas — como o envio de e-mails — é o vilão que degrada a experiência do usuário e sobrecarrega o servidor. O GoMail foi desenvolvido para eliminar esse gargalo, atuando como um worker resiliente e ultra-rápido.",
        image: "/projects/mailgo-banner.png",
        techs: ["Golang", "Docker", "RabbitMQ", "Gin Gonic"],
        liveUrl: null,
        githubUrl: "https://github.com/ericNKS/MailGo",
      },
      {
        title: "Gerson Barber",
        description:
          "Site moderno para barbearia a domicílio com agendamento via WhatsApp, galeria de cortes e planos mensais. Experiência completa do agendamento ao atendimento, com design responsivo e animações suaves.",
        image: "/projects/gerson-barber-banner.png",
        techs: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        liveUrl: "https://gerson-barber.vercel.app/",
        githubUrl: null,
      },
      {
        title: "LIFE FIT",
        description:
          "Mais do que uma página de academia, a Life Fit é uma prova de conceito de como a tecnologia de ponta pode servir ao propósito de criar uma conexão imediata entre marca e cliente.",
        image: "/projects/life-fit-banner.png",
        techs: ["React", "Next", "Tailwind CSS 4", "GSAP", "Lenis", "Lucide React"],
        liveUrl: "https://life-fit-two.vercel.app/",
        githubUrl: "https://github.com/ericNKS/life-fit",
      },
      {
        title: "Em breve",
        description:
          "Um novo projeto está a caminho para elevar o padrão do meu portfólio.",
        image: "/projects/coming-soon-banner.png",
        techs: [],
        liveUrl: null,
        githubUrl: null,
        isComingSoon: true,
      },
    ],
  },
  contact: {
    title: "Contrate um Engenheiro Backend",
    description:
      "Não espere o sistema cair para agir. Vamos reestruturar sua arquitetura legada ou iniciar seu novo projeto com microsserviços, otimização de banco de dados e Clean Architecture para escalar sem sustos.",
    highlight1: "Previsibilidade de Custos Cloud",
    highlight2: "Performance SQL de Elite",
    nameLabel: "Nome",
    namePlaceholder: "Seu nome",
    emailLabel: "E-mail",
    emailPlaceholder: "seu@email.com",
    messageLabel: "Mensagem",
    messagePlaceholder: "Como posso ajudar?",
    submitButton: "Enviar Mensagem",
    submittingButton: "Enviando...",
  },
  footer: {
    roleDescription:
      "Engenheiro Backend especializado em TypeScript, Node.js e Go. Transformando arquiteturas complexas em sistemas de alta performance.",
    navTitle: "Navegação",
    connectTitle: "Conecte-se",
    downloadCv: "Baixar Currículo",
    copyright: "Éric Santos — Engenheiro Backend. Todos os direitos reservados.",
  },
  whatsapp: {
    phoneNumber: "5571992037328",
    displayPhone: "(71) 99203-7328",
  },
};

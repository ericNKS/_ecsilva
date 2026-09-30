import { Dictionary } from "./types";

export const enDictionary: Dictionary = {
  locale: "en",
  meta: {
    title: "Éric Silva dos Santos | Backend Engineer | Node.js, TypeScript & Go",
    description:
      "Éric Silva dos Santos is a Backend Engineer and Full Stack Developer specialized in Node.js, TypeScript, Go, and microservices architecture. 77% less memory and 90% faster databases.",
    keywords: [
      "Eric Silva dos Santos",
      "Eric Santos",
      "Eric Silva",
      "Éric Silva dos Santos",
      "Éric Santos",
      "ecsilva",
      "Backend Engineer",
      "Software Engineer",
      "Fullstack Developer",
      "Frontend Developer",
      "TypeScript",
      "Node.js",
      "Clean Architecture",
      "Microservices",
      "PostgreSQL",
      "Redis",
      "Go",
      "Remote Software Engineer",
    ],
    ogTitle: "Éric Santos | High-Performance Backend Engineer",
    ogDescription:
      "Turning complex architectures into engines of efficiency — 77% less memory consumption, 90% faster databases.",
  },
  nav: {
    home: "Home",
    about: "About",
    projects: "Projects",
    contact: "Contact",
    downloadCv: "Resume",
  },
  hero: {
    titleLine1: "Backend Engineer transforming complex architectures",
    titleHighlight: "into engines of efficiency.",
    bioIntro: "Slow systems and runaway cloud bills kill growth. I am ",
    name: "Éric Silva dos Santos",
    roleIntro: ", a Backend Engineer turning complex architectures into high-efficiency engines.",
    proofHighlight:
      "Production track record: 77% less memory consumption and databases up to 90% faster.",
    btnProjects: "Explore Projects",
    btnDownloadCv: "Download Resume (PDF)",
    cvFileName: "Resume_Eric_Santos.pdf",
    cvUrl: "/Resume_Eric_Santos.pdf",
  },
  values: {
    badge: "About Me",
    title: "High-Performance Backend Engineer",
    description:
      "Specialized in the TypeScript, Node.js, and Go ecosystems. Turning slow and expensive systems into efficient, scalable architectures.",
    pillars: [
      {
        title: "Cloud Cost Reduction",
        description:
          "Optimization of Node.js microservices and asynchronous processing with RabbitMQ to reduce memory consumption by up to 77%, enabling cloud instance downgrades without sacrificing performance.",
      },
      {
        title: "90% Faster Databases",
        description:
          "Advanced SQL query refactoring, optimized index creation, and restructuring of PostgreSQL and MySQL databases to accelerate requests by 90%. Speed that retains users and conversions.",
      },
      {
        title: "Scalable Software Architecture",
        description:
          "Clean Architecture and Event-Driven Architecture (EDA) in TypeScript and Go to ensure your system scales horizontally without accumulating tech debt or compromising maintainability.",
      },
    ],
  },
  projects: {
    badge: "Portfolio",
    title: "Featured Projects",
    description:
      "Real-world case studies in performance optimization, microservices, and software architecture with TypeScript, Go, and Node.js.",
    items: [
      {
        title: "MailGo",
        description:
          "In large-scale systems, synchronous processing of heavy tasks — such as sending emails — degrades user experience and overloads servers. MailGo was designed to eliminate this bottleneck, acting as a resilient, ultra-fast worker.",
        image: "/projects/mailgo-banner.png",
        techs: ["Golang", "Docker", "RabbitMQ", "Gin Gonic"],
        liveUrl: null,
        githubUrl: "https://github.com/ericNKS/MailGo",
      },
      {
        title: "Gerson Barber",
        description:
          "Modern website for an on-demand barber service with WhatsApp booking, haircut gallery, and monthly subscription tiers. Complete experience from booking to service with responsive design and smooth animations.",
        image: "/projects/gerson-barber-banner.png",
        techs: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        liveUrl: "https://gerson-barber.vercel.app/",
        githubUrl: null,
      },
      {
        title: "LIFE FIT",
        description:
          "More than a gym landing page, Life Fit is a proof of concept of how cutting-edge technology creates an immediate connection between brand and customer.",
        image: "/projects/life-fit-banner.png",
        techs: ["React", "Next", "Tailwind CSS 4", "GSAP", "Lenis", "Lucide React"],
        liveUrl: "https://life-fit-two.vercel.app/",
        githubUrl: "https://github.com/ericNKS/life-fit",
      },
      {
        title: "Coming soon",
        description:
          "A new project is underway to elevate the standard of my portfolio.",
        image: "/projects/coming-soon-banner.png",
        techs: [],
        liveUrl: null,
        githubUrl: null,
        isComingSoon: true,
      },
    ],
  },
  contact: {
    title: "Hire a Backend Engineer",
    description:
      "Don't wait for the system to crash before taking action. Let's restructure your legacy architecture or bootstrap your next project with microservices, database tuning, and Clean Architecture to scale seamlessly.",
    highlight1: "Cloud Cost Predictability",
    highlight2: "Elite SQL Database Performance",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "your@email.com",
    messageLabel: "Message",
    messagePlaceholder: "How can I help?",
    submitButton: "Send Message",
    submittingButton: "Sending...",
  },
  footer: {
    roleDescription:
      "Backend Engineer specialized in TypeScript, Node.js, and Go. Transforming complex architectures into high-performance systems.",
    navTitle: "Navigation",
    connectTitle: "Connect",
    downloadCv: "Download Resume",
    copyright: "Éric Santos — Backend Engineer. All rights reserved.",
  },
  whatsapp: {
    phoneNumber: "5571992037328",
    displayPhone: "(71) 99203-7328",
  },
};

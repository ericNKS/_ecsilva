import { ProjectCard } from "./project-card";

const projects = [
  {
    title: "MailGo",
    description: "Plataforma SaaS de automação de e-mails com foco em entregabilidade e performance. Processamento distribuído com RabbitMQ.",
    image: "/projects/mailGo.webp",
    techs: ["Next.js", "Node.js", "RabbitMQ", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "JustTalk",
    description: "Sistema de chat em tempo real com criptografia ponta a ponta e suporte a múltiplos canais. Escalável via WebSockets.",
    image: "/projects/justTalk.jpg",
    techs: ["React", "Express", "Socket.io", "Redis"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "MyEstoque",
    description: "Gerenciador de inventário corporativo com análise preditiva de estoque e integração com PDVs legados.",
    image: "/projects/MyEstoque.jpg",
    techs: ["Vue.js", "PHP", "Laravel", "MySQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export function ProjectGrid() {
  return (
    <section className="py-24 px-6 lg:px-24">
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Projetos em Destaque</h2>
        <div className="w-20 h-1 bg-accent rounded-full" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </section>
  );
}

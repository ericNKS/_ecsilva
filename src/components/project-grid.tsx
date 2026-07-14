import { ProjectCard } from "./project-card";

const projects = [
  {
    title: "MailGo",
    description: "Em sistemas de grande escala, o processamento síncrono de tarefas pesadas — como o envio de e-mails — é o vilão que degrada a experiência do usuário e sobrecarrega o servidor. O GoMail foi desenvolvido para eliminar esse gargalo, atuando como um worker resiliente e ultra-rápido.",
    image: "/projects/mailgo-banner.png",
    techs: ["Golang", "Docker", "RabbitMQ", "Gin Gonic"],
    liveUrl: null,
    githubUrl: "https://github.com/ericNKS/MailGo",
  },
  {
    title: "Gerson Barber",
    description: "Site moderno para barbearia a domicílio com agendamento via WhatsApp, galeria de cortes e planos mensais. Experiência completa do agendamento ao atendimento, com design responsivo e animações suaves.",
    image: "/projects/gerson-barber-banner.png",
    techs: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://gerson-barber.vercel.app/",
    githubUrl: null,
  },
  {
    title: "LIFE FIT",
    description: "Mais do que uma página de academia, a Life Fit é uma prova de conceito de como a tecnologia de ponta pode servir ao propósito de criar uma conexão imediata entre marca e cliente.",
    image: "/projects/life-fit-banner.png",
    techs: ["React", "Next", "Tailwind CSS 4", "GSAP", "Lenis", "Lucide React"],
    liveUrl: "https://life-fit-two.vercel.app/",
    githubUrl: "https://github.com/ericNKS/life-fit",
  },
  {
    title: "Em breve",
    description: "Um novo projeto está a caminho para elevar o padrão do meu portfólio.",
    image: "/projects/coming-soon-banner.png",
    techs: [],
    liveUrl: null,
    githubUrl: null,
  },
];

export function ProjectGrid() {
  return (
    <section className="py-24 px-6 lg:px-24">
      <div className="flex flex-col items-center mb-16 text-center">
        <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm mb-2">Portfólio</span>
        <h2 className="text-3xl font-bold mb-4">Projetos em Destaque</h2>
        <p className="text-muted max-w-2xl leading-relaxed">
          Cases reais de otimização de performance, microsserviços e arquitetura de software com TypeScript, Go e Node.js.
        </p>
        <div className="w-20 h-1 bg-accent rounded-full mt-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </section>
  );
}

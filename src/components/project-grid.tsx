import { ProjectCard } from "./project-card";

const projects = [
  {
    title: "MailGo",
    description: "Em sistemas de grande escala, o processamento síncrono de tarefas pesadas — como o envio de e-mails — é o vilão que degrada a experiência do usuário e sobrecarrega o servidor. O GoMail foi desenvolvido para eliminar esse gargalo, atuando como um worker resiliente e ultra-rápido.",
    image: "/projects/mailGo.webp",
    techs: ["Golang", "Docker", "RabbitMQ", "Gin Gonic"],
    liveUrl: null,
    githubUrl: "https://github.com/ericNKS/MailGo",
  },
  {
    title: "LIFE FIT",
    description: "Mais do que uma página de academia, a Life Fit é uma prova de conceito de como a tecnologia de ponta pode servir ao propósito de criar uma conexão imediata entre marca e cliente.",
    image: "/projects/life-fit.png",
    techs: ["React", "Next", "Tailwind CSS 4", "GSAP", "Lenis", "Lucide React"],
    liveUrl: "https://life-fit-two.vercel.app/",
    githubUrl: "https://github.com/ericNKS/life-fit",
  },
  {
    title: "Em breve",
    description: "Um novo projeto está a caminho para elevar o padrão do meu portfólio.",
    image: "/coming-soon.jpg",
    techs: [],
    liveUrl: null,
    githubUrl: null,
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

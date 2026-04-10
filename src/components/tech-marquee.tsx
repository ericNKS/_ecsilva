"use client";

const technologies = [
  { name: "Node.js", logo: "/tech-logo/node.png" },
  { name: "Typescript", logo: "/tech-logo/Typescript.png" },
  { name: "Next.js", logo: "/tech-logo/nextjs.png" },
  { name: "React", logo: "/tech-logo/React.png" },
  { name: "PostgreSQL", logo: "/tech-logo/Postgresql.png" },
  { name: "Redis", logo: "/tech-logo/Redis.png" },
  { name: "RabbitMQ", logo: "/tech-logo/Rabbitmq.png" },
  { name: "Go", logo: "/tech-logo/Go.png" },
  { name: "MySQL", logo: "/tech-logo/mysql.svg" },
];

export function TechMarquee() {
  return (
    <section className="py-20 overflow-hidden bg-surface border-y border-gray-200 dark:border-gray-800">
      <div className="flex flex-col items-center mb-10">
        <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm mb-2">Tech Stack</span>
        <h2 className="text-2xl font-bold">Tecnologias que Domino</h2>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="flex animate-marquee whitespace-nowrap py-4 group-hover:[animation-play-state:paused]">
          {[...technologies, ...technologies].map((tech, i) => (
            <div key={i} className="flex items-center gap-4 mx-12 grayscale hover:grayscale-0 transition-all">
              <img src={tech.logo} alt={tech.name} className="h-10 w-auto object-contain" />
              <span className="text-xl font-semibold text-muted">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}

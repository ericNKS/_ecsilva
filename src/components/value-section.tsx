import { ShieldCheck, Zap, Database } from "lucide-react";

const pillars = [
  {
    title: "Redução de Custos Cloud",
    description: "Otimização de microsserviços Node.js e processamento assíncrono com RabbitMQ para reduzir consumo de memória em até 77%, permitindo o downgrade de instâncias cloud sem perda de performance.",
    icon: Zap,
  },
  {
    title: "Bancos de Dados 90% Mais Rápidos",
    description: "Refatoração avançada de queries SQL, criação de índices otimizados e reestruturação de bancos PostgreSQL e MySQL para acelerar requisições em 90%. Velocidade que retém usuários e conversões.",
    icon: ShieldCheck,
  },
  {
    title: "Arquitetura de Software Escalável",
    description: "Clean Architecture e Event-Driven Architecture (EDA) em TypeScript e Go para garantir que seu sistema escale horizontalmente sem criar débitos técnicos ou comprometer a manutenibilidade.",
    icon: Database,
  },
];

export function ValueSection() {
  return (
    <section className="py-24 px-6 lg:px-24">
      <div className="flex flex-col items-center mb-16 text-center">
        <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm mb-2">Sobre Mim</span>
        <h2 className="text-3xl font-bold">Engenheiro Backend de Alta Performance</h2>
        <p className="text-muted mt-4 max-w-2xl leading-relaxed">
          Especializado em ecossistema TypeScript, Node.js e Go. Transformo sistemas lentos e caros em arquiteturas eficientes e escaláveis.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pillars.map((pillar, i) => (
          <div
            key={i}
            className="group bg-surface border p-8 rounded-2xl hover:border-accent transition-colors duration-300"
          >
            <div className="bg-accent/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <pillar.icon className="text-accent" size={28} />
            </div>
            <h3 className="text-xl font-bold mb-4">{pillar.title}</h3>
            <p className="text-muted leading-relaxed">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

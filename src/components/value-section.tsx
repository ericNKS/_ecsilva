import { ShieldCheck, Zap, Database } from "lucide-react";

const pillars = [
  {
    title: "Economia que Viabiliza o Lucro",
    description: "Aplicação de microsserviços e processamento assíncrono para reduzir o consumo de memória em até 77%, permitindo o downgrade de instâncias cloud.",
    icon: Zap,
  },
  {
    title: "Sistemas em Tempo Real",
    description: "Refatoração avançada de queries SQL e reestruturação de bancos de dados para acelerar requisições em 90%. Velocidade que retém usuários.",
    icon: ShieldCheck,
  },
  {
    title: "Arquitetura à Prova de Futuro",
    description: "Clean Architecture e Sistemas Orientados a Eventos (EDA) para garantir que seu código escale horizontalmente sem criar débitos técnicos.",
    icon: Database,
  },
];

export function ValueSection() {
  return (
    <section className="py-24 px-6 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pillars.map((pillar, i) => (
          <div 
            key={i}
            className="group bg-surface border border-gray-200 dark:border-gray-800 p-8 rounded-2xl hover:border-accent transition-colors duration-300"
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

"use client";

import { useContactForm } from "@/hooks/useContactForm";
import { Send, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function ContactForm() {
  const { formData, handleChange } = useContactForm();
  const [loading, setLoading] = useState(false);

  return (
    <section className="py-24 px-6 lg:px-24">
      <div className="max-w-4xl mx-auto bg-surface border rounded-3xl overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-8 lg:p-12 bg-accent text-white flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6 italic">Seu sistema aguenta o próximo pico de tráfego?</h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Não espere o sistema cair para agir. Vamos reestruturar sua arquitetura legada ou iniciar seu novo produto com bases sólidas para escalar sem sustos.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <CheckCircle size={20} className="text-white" />
                </div>
                <span>Previsibilidade de Custos Cloud</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <CheckCircle size={20} className="text-white" />
                </div>
                <span>Performance SQL de Elite</span>
              </div>
            </div>
          </div>

          <form
            action="https://airform.io/ek.silva.santos@gmail.com"
            method="POST"
            onSubmit={() => setLoading(true)}
            className="p-8 lg:p-12 space-y-6"
          >
            <div>
              <label className="block text-sm font-semibold mb-2">Nome</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-base border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">E-mail</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-base border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Mensagem</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-base border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                placeholder="Como posso ajudar?"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={cn(
                "w-full bg-accent text-white py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all",
                loading && "opacity-70 cursor-not-allowed"
              )}
            >
              {loading ? "Enviando..." : "Enviar Mensagem"}
              <Send size={18} className={cn(loading && "animate-pulse")} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

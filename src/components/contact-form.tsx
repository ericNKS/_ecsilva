"use client";

import { useContactForm } from "@/hooks/useContactForm";
import { Send, CheckCircle, MessageSquare, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useI18n } from "@/i18n/context";

export function ContactForm() {
  const { formData, handleChange } = useContactForm();
  const [loading, setLoading] = useState(false);
  const { dict } = useI18n();

  return (
    <section id="contato" className="py-24 px-6 lg:px-24">
      <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left panel: Info and direct links */}
          <div className="p-8 lg:p-12 bg-accent text-white flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6 italic">
              {dict.contact.title}
            </h2>
            <p className="text-white/95 text-lg leading-relaxed mb-8">
              {dict.contact.description}
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle size={20} className="text-white" />
                </div>
                <span className="font-medium text-white/95">{dict.contact.highlight1}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle size={20} className="text-white" />
                </div>
                <span className="font-medium text-white/95">{dict.contact.highlight2}</span>
              </div>
            </div>

            {/* Direct contact shortcuts */}
            <div className="pt-6 border-t border-white/20 flex flex-col gap-3">
              <a
                href={`https://wa.me/${dict.whatsapp.phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/90 hover:text-white transition-opacity text-sm font-medium"
              >
                <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                  <MessageSquare size={16} />
                </div>
                <span>WhatsApp: {dict.whatsapp.displayPhone}</span>
              </a>

              <a
                href="https://www.linkedin.com/in/eric-ssantos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/90 hover:text-white transition-opacity text-sm font-medium"
              >
                <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                  <Linkedin size={16} />
                </div>
                <span>LinkedIn: /in/eric-ssantos</span>
              </a>
            </div>
          </div>

          {/* Right panel: Form */}
          <form
            action="https://airform.io/ek.silva.santos@gmail.com"
            method="POST"
            onSubmit={() => setLoading(true)}
            className="p-8 lg:p-12 space-y-6"
          >
            <div>
              <label
                htmlFor="contact-name"
                className="block text-sm font-semibold mb-2 text-slate-800 dark:text-slate-200"
              >
                {dict.contact.nameLabel}
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                placeholder={dict.contact.namePlaceholder}
              />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="block text-sm font-semibold mb-2 text-slate-800 dark:text-slate-200"
              >
                {dict.contact.emailLabel}
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                placeholder={dict.contact.emailPlaceholder}
              />
            </div>
            <div>
              <label
                htmlFor="contact-message"
                className="block text-sm font-semibold mb-2 text-slate-800 dark:text-slate-200"
              >
                {dict.contact.messageLabel}
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                placeholder={dict.contact.messagePlaceholder}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={cn(
                "w-full bg-accent text-white py-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-accent/90 transition-all cursor-pointer shadow-md shadow-accent/20",
                loading && "opacity-70 cursor-not-allowed"
              )}
            >
              {loading ? dict.contact.submittingButton : dict.contact.submitButton}
              <Send size={18} className={cn(loading && "animate-pulse")} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

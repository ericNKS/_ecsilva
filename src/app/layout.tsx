import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Navbar } from "@/components/navbar";
import { I18nProvider } from "@/i18n/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ecsilva.com"),
  title: {
    default:
      "Éric Silva dos Santos (Éric Santos) | Desenvolvedor de Software & Engenheiro Backend",
    template: "%s | Éric Santos",
  },
  description:
    "Éric Silva dos Santos (Éric Santos) — Engenheiro Backend e Desenvolvedor de Software Full Stack especializado em Node.js, TypeScript, Go e arquiteturas de alta eficiência. 77% menos memória em microsserviços e bancos 90% mais rápidos.",
  keywords: [
    "Éric Silva dos Santos",
    "Éric Santos",
    "Éric Silva",
    "Eric Silva dos Santos",
    "Eric Silva",
    "Eric Santos",
    "ecsilva",
    "desenvolvedor de software",
    "dev backend",
    "dev frontend",
    "dev fullstack",
    "engenheiro backend",
    "engenheiro de software",
    "software engineer",
    "fullstack developer",
    "backend developer",
    "frontend developer",
    "TypeScript",
    "Node.js",
    "NestJS",
    "Go",
    "Golang",
    "Clean Architecture",
    "Microsserviços",
    "Microservices",
    "Arquitetura de Software",
    "PostgreSQL",
    "MySQL",
    "Redis",
    "RabbitMQ",
    "Docker",
    "Desenvolvedor Salvador Bahia",
    "Desenvolvedor Backend Brasil",
    "Programador Remoto",
  ],
  authors: [
    { name: "Éric Silva dos Santos", url: "https://ecsilva.com" },
    { name: "Éric Santos", url: "https://ecsilva.com" },
  ],
  creator: "Éric Silva dos Santos",
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/favicon.ico",
        sizes: "any",
      },
    ],
  },
  openGraph: {
    type: "profile",
    locale: "pt_BR",
    alternateLocale: ["en_US"],
    url: "https://ecsilva.com",
    siteName: "Éric Silva dos Santos | Portfólio de Engenharia de Software",
    title:
      "Éric Silva dos Santos (Éric Santos) | Desenvolvedor de Software & Engenheiro Backend",
    description:
      "Transformo arquiteturas complexas em motores de eficiência — 77% menos consumo de memória e bancos de dados 90% mais rápidos em produção.",
    images: [
      {
        url: "/og",
        width: 1200,
        height: 630,
        alt: "Éric Silva dos Santos — Engenheiro Backend e Desenvolvedor de Software (TypeScript, Node.js, Go)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Éric Silva dos Santos (Éric Santos) | Desenvolvedor de Software & Engenheiro Backend",
    description:
      "Transformo arquiteturas complexas em motores de eficiência — 77% menos consumo de memória e bancos de dados 90% mais rápidos.",
    images: ["/og"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://ecsilva.com",
    languages: {
      "pt-BR": "https://ecsilva.com",
      en: "https://ecsilva.com/en",
      "x-default": "https://ecsilva.com",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#0f172a" />
        <link rel="me" href="https://github.com/ericNKS" />
        <link rel="me" href="https://www.linkedin.com/in/eric-ssantos" />
        <link rel="me" href="https://wa.me/5571992037328" />
        <link rel="alternate" hrefLang="pt-BR" href="https://ecsilva.com" />
        <link rel="alternate" hrefLang="en" href="https://ecsilva.com/en" />
        <link rel="alternate" hrefLang="x-default" href="https://ecsilva.com" />
        <link rel="help" type="text/markdown" href="https://ecsilva.com/llms.txt" />
        <link rel="help" type="text/markdown" href="https://ecsilva.com/llms-full.txt" />
      </head>
      <body className={`${inter.className} max-w-100dvh`}>
        <ThemeProvider>
          <I18nProvider>
            <SmoothScroll>
              <Navbar />
              {children}
            </SmoothScroll>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

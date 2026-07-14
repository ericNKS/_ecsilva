import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Navbar } from "@/components/navbar";
import { StructuredData } from "@/components/structured-data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ecsilva.com"),
  title: {
    default: "Éric Santos | Engenheiro Backend de Alta Performance",
    template: "%s | Éric Santos",
  },
  description:
    "Engenheiro Backend especializado em ecossistema TypeScript, arquiteturas limpas e resilientes. Redução de 77% em consumo de memória e bancos de dados 90% mais rápidos em produção.",
  keywords: [
    "Engenheiro Backend",
    "TypeScript",
    "Node.js",
    "Clean Architecture",
    "Microsserviços",
    "Arquitetura de Software",
    "PostgreSQL",
    "Redis",
    "Go",
    "Éric Santos",
    "Desenvolvedor Backend Brasil",
  ],
  authors: [{ name: "Éric Santos", url: "https://ecsilva.com" }],
  creator: "Éric Santos",
  icons: {
    icon: "/icon.svg",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://ecsilva.com",
    siteName: "Éric Santos | Engenheiro Backend",
    title: "Éric Santos | Engenheiro Backend de Alta Performance",
    description:
      "Transformo arquiteturas complexas em motores de eficiência — 77% menos consumo de memória, bancos 90% mais rápidos.",
    images: [
      {
        url: "/og",
        width: 1200,
        height: 630,
        alt: "Éric Santos — Engenheiro Backend especializado em TypeScript, Node.js e Go",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Éric Santos | Engenheiro Backend de Alta Performance",
    description:
      "Transformo arquiteturas complexas em motores de eficiência — 77% menos consumo de memória, bancos 90% mais rápidos.",
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
        <link rel="me" href="https://www.linkedin.com/in/eric-santos/" />
      </head>
      <body className={`${inter.className} max-w-100dvh`}>
        <ThemeProvider>
          <SmoothScroll>
            <Navbar />
            {children}
          </SmoothScroll>
        </ThemeProvider>
        <StructuredData />
      </body>
    </html>
  );
}

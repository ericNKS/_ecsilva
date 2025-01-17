import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eric Silva dos Santos",
  description: "Meu site pessoal que tem como intuito mostrar meus conhecimentos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <body className="overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

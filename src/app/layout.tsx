import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/layout/Layout";
import StructuredData from "@/components/ui/StructuredData";

export const metadata: Metadata = {
  title: "Castor Cabo Frio | Loja Oficial de Colchões Castor na Região dos Lagos",
  description: "Loja oficial Castor em Cabo Frio. Mais de 30 anos oferecendo os melhores colchões, travesseiros e acessórios. Guru do Sono REM. Av. Júlia Kubitschek, 64, Jardim Flamboyant.",
  keywords: "colchões Castor, Cabo Frio, loja oficial Castor, Sleep Max, Red White, Silver Star, Kingdom Aloe Vera, região dos lagos, sono, conforto",
  authors: [{ name: "Loja Castor Cabo Frio" }],
  openGraph: {
    title: "Castor Cabo Frio | Loja Oficial de Colchões Castor na Região dos Lagos",
    description: "Descubra seu Castor ideal com o Mapa do Sono IA. Loja oficial em Cabo Frio com os melhores colchões da marca.",
    type: "website",
    locale: "pt_BR",
    url: "https://www.lojacastorcabofrio.com.br",
    siteName: "Castor Cabo Frio - Guru do Sono REM",
  },
  twitter: {
    card: "summary_large_image",
    title: "Castor Cabo Frio | Loja Oficial de Colchões Castor na Região dos Lagos",
    description: "Descubra seu Castor ideal com o Mapa do Sono IA. Loja oficial em Cabo Frio.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://www.lojacastorcabofrio.com.br",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <StructuredData />
      </head>
      <body className="font-sans antialiased">
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}

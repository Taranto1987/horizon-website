import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/layout/Layout";
import StructuredData from "@/components/ui/StructuredData";

export const metadata: Metadata = {
  title: "Loja Exclusiva Castor Cabo Frio - Colchões e Travesseiros de Qualidade",
  description: "Há mais de 25 anos oferecendo os melhores colchões Castor em Cabo Frio. Atendimento direto com o dono, entrega grátis e Mapa do Sono IA. Av. Júlia Kubitschek, 64, Jardim Flamboyant.",
  keywords: "colchões Castor, travesseiros, Cabo Frio, sono, conforto, qualidade, Mapa do Sono IA, Loja Exclusiva",
  authors: [{ name: "Loja Exclusiva Castor Cabo Frio" }],
  openGraph: {
    title: "Loja Exclusiva Castor Cabo Frio - Colchões de Qualidade",
    description: "Há mais de 25 anos oferecendo os melhores colchões Castor em Cabo Frio. Atendimento direto com o dono da loja.",
    type: "website",
    locale: "pt_BR",
    url: "https://www.lojacastorcabofrio.com.br",
    siteName: "Loja Exclusiva Castor Cabo Frio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Loja Exclusiva Castor Cabo Frio - Colchões de Qualidade",
    description: "Há mais de 25 anos oferecendo os melhores colchões Castor em Cabo Frio. Atendimento direto com o dono da loja.",
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

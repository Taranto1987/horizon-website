import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/layout/Layout";
import StructuredData from "@/components/ui/StructuredData";

export const metadata: Metadata = {
  title: "Loja Castor Cabo Frio - Colchões e Travesseiros de Qualidade",
  description: "Loja Castor Cabo Frio oferece os melhores colchões, travesseiros e acessórios para o seu sono. Qualidade e conforto garantidos. Av. Júlia Kubitschek, 64, Jardim Flamboyant.",
  keywords: "colchões, travesseiros, Castor, Cabo Frio, sono, conforto, qualidade",
  authors: [{ name: "Loja Castor Cabo Frio" }],
  openGraph: {
    title: "Loja Castor Cabo Frio - Colchões e Travesseiros de Qualidade",
    description: "Loja Castor Cabo Frio oferece os melhores colchões, travesseiros e acessórios para o seu sono.",
    type: "website",
    locale: "pt_BR",
    url: "https://www.lojacastorcabofrio.com.br",
    siteName: "Loja Castor Cabo Frio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Loja Castor Cabo Frio - Colchões e Travesseiros de Qualidade",
    description: "Loja Castor Cabo Frio oferece os melhores colchões, travesseiros e acessórios para o seu sono.",
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

import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/layout/Layout";

export const metadata: Metadata = {
  title: "Loja Castor Cabo Frio - Colchões e Travesseiros",
  description: "Loja Castor Cabo Frio oferece os melhores colchões e travesseiros para seu conforto. Entrega rápida e qualidade garantida.",
  keywords: "colchões, travesseiros, Castor, Cabo Frio, loja de colchões, sono, conforto",
  openGraph: {
    title: "Loja Castor Cabo Frio - Colchões e Travesseiros",
    description: "Loja Castor Cabo Frio oferece os melhores colchões e travesseiros para seu conforto. Entrega rápida e qualidade garantida.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased">
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}

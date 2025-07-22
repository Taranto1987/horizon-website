import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Loja Castor Cabo Frio - Colchões e Travesseiros",
  description: "Loja especializada em colchões, travesseiros e acessórios para o seu sono. Venha conhecer nossa loja em Cabo Frio - RJ. WhatsApp: (22) 99241-0112",
  keywords: "colchões, travesseiros, sono, cabo frio, castor, loja, mattress",
  authors: [{ name: "Loja Castor Cabo Frio" }],
  creator: "Loja Castor Cabo Frio",
  publisher: "Loja Castor Cabo Frio",
  robots: "index, follow",
  openGraph: {
    title: "Loja Castor Cabo Frio - Colchões e Travesseiros",
    description: "Loja especializada em colchões, travesseiros e acessórios para o seu sono.",
    type: "website",
    locale: "pt_BR",
    siteName: "Loja Castor Cabo Frio",
  },
};

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}

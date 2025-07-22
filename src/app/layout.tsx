import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Loja Castor Cabo Frio - Colchões e Produtos para o Sono",
  description: "A melhor loja de colchões em Cabo Frio. Colchões Amazon Prime Gel Pocket®, Silver Star Air Pocket®, Kingdom Látex e muito mais. WhatsApp: (22) 99241-0112",
  keywords: "colchões cabo frio, loja castor, colchão amazon prime gel pocket, colchão silver star, travesseiros cabo frio",
  authors: [{ name: "Loja Castor Cabo Frio" }],
  robots: "index, follow",
  openGraph: {
    title: "Loja Castor Cabo Frio - Colchões e Produtos para o Sono",
    description: "A melhor loja de colchões em Cabo Frio. Entrega rápida e frete grátis!",
    url: "https://www.lojacastorcabofrio.com.br",
    siteName: "Loja Castor Cabo Frio",
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Produtos - Loja Castor Cabo Frio',
  description: 'Confira nossa linha completa de colchões, travesseiros e acessórios Castor. Amazon Prime Gel Pocket, Silver Star Air Pocket, Kingdom Látex e muito mais.',
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
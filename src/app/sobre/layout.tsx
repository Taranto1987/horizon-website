import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre Nós - Loja Castor Cabo Frio',
  description: 'Conheça a história da Loja Castor Cabo Frio, mais de 30 anos oferecendo os melhores colchões e travesseiros para o seu conforto e qualidade do sono.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
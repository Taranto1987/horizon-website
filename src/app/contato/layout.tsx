import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contato - Loja Castor Cabo Frio | Fale Conosco',
  description: 'Entre em contato com a Loja Castor Cabo Frio. WhatsApp (22) 99241-0112, e-mail ou visite nossa loja. Atendimento especializado em colchões.',
  keywords: 'contato Loja Castor, WhatsApp, telefone, endereço, Cabo Frio, atendimento',
};

export default function ContatoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
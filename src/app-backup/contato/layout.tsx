import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contato - Loja Castor Cabo Frio',
  description: 'Entre em contato com a Loja Castor Cabo Frio. Estamos localizados na Av. Júlia Kubitschek, 64, Jardim Flamboyant. Telefone: (22) 99241-0112',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
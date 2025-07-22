import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Página não encontrada - Loja Castor Cabo Frio',
  description: 'A página que você procura não foi encontrada. Retorne à nossa página inicial para encontrar os melhores colchões em Cabo Frio.',
};

export default function NotFound() {
  return (
    <Layout>
      <section className="py-16 min-h-[60vh] flex items-center">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="text-6xl mb-8">😴</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Oops! Página não encontrada
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              A página que você está procurando pode ter sido movida, renomeada ou não existe mais.
              Mas não se preocupe, ainda temos os melhores colchões para você!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="bg-blue-900 text-white px-8 py-4 rounded-full hover:bg-blue-800 transition-colors font-semibold text-lg"
              >
                🏠 Voltar ao Início
              </Link>
              <Link
                href="/produtos"
                className="bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition-colors font-semibold text-lg"
              >
                🛏️ Ver Produtos
              </Link>
              <a
                href="https://wa.me/5522992410112?text=Olá! Preciso de ajuda para navegar no site."
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:bg-gray-50 transition-colors font-semibold text-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                📱 Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Links Populares
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                href="/produtos/amazon-prime-gel-pocket"
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-3xl mb-3">🛏️</div>
                <h3 className="font-semibold text-gray-900">Amazon Prime Gel</h3>
                <p className="text-sm text-gray-600">Colchão premium</p>
              </Link>
              
              <Link
                href="/produtos/silver-star-air-pocket"
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-3xl mb-3">💨</div>
                <h3 className="font-semibold text-gray-900">Silver Star Air</h3>
                <p className="text-sm text-gray-600">Máxima ventilação</p>
              </Link>
              
              <Link
                href="/produtos/kingdom-latex"
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-3xl mb-3">🌿</div>
                <h3 className="font-semibold text-gray-900">Kingdom Látex</h3>
                <p className="text-sm text-gray-600">Látex natural</p>
              </Link>
              
              <Link
                href="/contato"
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-3xl mb-3">📍</div>
                <h3 className="font-semibold text-gray-900">Nossa Loja</h3>
                <p className="text-sm text-gray-600">Como chegar</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
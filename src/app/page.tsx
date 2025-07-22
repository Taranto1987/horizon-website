import Link from 'next/link';
import { products, contactInfo } from '@/data/products';
import FAQ from '@/components/features/FAQ';
import SleepCalculator from '@/components/features/SleepCalculator';

export default function Home() {
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Seu Sono Merece o Melhor
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Colchões e travesseiros de alta qualidade na Loja Castor Cabo Frio
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <Link
              href="/produtos"
              className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Ver Produtos
            </Link>
            <a
              href={`https://wa.me/55${contactInfo.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              💬 Fale Conosco
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Por Que Escolher a Loja Castor?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛏️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Qualidade Castor</h3>
              <p className="text-gray-600">
                Produtos originais Castor com toda a qualidade e durabilidade que você merece.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Entrega Rápida</h3>
              <p className="text-gray-600">
                Entregamos rapidamente em Cabo Frio e região com todo cuidado e agilidade.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Melhor Preço</h3>
              <p className="text-gray-600">
                Oferecemos os melhores preços da região com facilidades de pagamento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Produtos em Destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Foto do {product.name}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">
                      R$ {product.price.toLocaleString('pt-BR')}
                    </span>
                    <a
                      href={`https://wa.me/55${contactInfo.whatsapp.replace(/\D/g, '')}?text=Olá! Gostaria de saber mais sobre o ${product.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      Consultar
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/produtos"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Ver Todos os Produtos
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">O Que Nossos Clientes Dizem</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="font-semibold text-blue-600">M</span>
                </div>
                <div>
                  <h4 className="font-semibold">Maria Silva</h4>
                  <div className="text-yellow-500">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-600">
                &quot;Excelente atendimento e produto de qualidade. Meu colchão Castor é perfeito!&quot;
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="font-semibold text-green-600">J</span>
                </div>
                <div>
                  <h4 className="font-semibold">João Santos</h4>
                  <div className="text-yellow-500">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-600">
                &quot;Entrega rápida e preço justo. Recomendo a Loja Castor para todos!&quot;
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <span className="font-semibold text-purple-600">A</span>
                </div>
                <div>
                  <h4 className="font-semibold">Ana Costa</h4>
                  <div className="text-yellow-500">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-600">
                &quot;Melhor qualidade de sono que já tive. Equipe muito atenciosa!&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sleep Calculator */}
      <SleepCalculator />

      {/* FAQ Section */}
      <FAQ />

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para Melhorar Seu Sono?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Entre em contato conosco e encontre o colchão perfeito para você!
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <a
              href={`https://wa.me/55${contactInfo.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              💬 WhatsApp: {contactInfo.phone}
            </a>
            <Link
              href="/contato"
              className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              📧 Outras Formas de Contato
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

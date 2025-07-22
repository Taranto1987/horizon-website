import Link from 'next/link';
import ProductCarousel from '@/components/ui/ProductCarousel';
import { products } from '@/data/products';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-castor text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Durma melhor hoje com os colchões Castor – Atendimento direto com o dono da loja em Cabo Frio
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100 leading-relaxed">
              Mais de 25 anos de experiência garantindo conforto e qualidade no seu sono
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/produtos" 
                className="bg-white text-castor px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition-colors inline-block"
              >
                Ver Catálogo Completo
              </Link>
              <Link 
                href="/mapa" 
                className="bg-red-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-900 transition-colors inline-block"
              >
                Descubra seu colchão ideal (Mapa do Sono)
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Por que escolher a Loja Exclusiva Castor Cabo Frio */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que escolher a Loja Exclusiva Castor Cabo Frio?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Mais de 25 anos de experiência em proporcionar noites de sono perfeitas para toda a família.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-castor" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Garantia oficial de fábrica</h3>
              <p className="text-gray-600">Produtos certificados com garantia oficial Castor e qualidade comprovada há décadas.</p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-castor" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Entrega rápida</h3>
              <p className="text-gray-600">Entregamos em toda Cabo Frio e região com agilidade e cuidado, montagem incluída.</p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-castor" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Atendimento personalizado via WhatsApp</h3>
              <p className="text-gray-600">Fale diretamente com o dono da loja para um atendimento exclusivo e especializado.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos em Destaque - Carousel */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Produtos em Destaque
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conheça nossa linha premium de colchões Castor, desenvolvidos com tecnologia avançada para o seu conforto.
            </p>
          </div>
          
          <ProductCarousel products={products} />
        </div>
      </section>

      {/* Mapa do Sono IA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
              <div className="mb-6">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🧠</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Tecnologia Mapa do Sono IA
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Nossa inteligência artificial analisa seu perfil único de sono e recomenda o colchão ideal para suas necessidades específicas.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="bg-white w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-3 shadow-sm">
                    <span className="text-2xl">📋</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Questionário Inteligente</h3>
                  <p className="text-gray-600 text-sm">Perguntas sobre posição, peso, problemas de coluna</p>
                </div>
                <div className="text-center">
                  <div className="bg-white w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-3 shadow-sm">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Análise Instantânea</h3>
                  <p className="text-gray-600 text-sm">Resultado em menos de 2 minutos</p>
                </div>
                <div className="text-center">
                  <div className="bg-white w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-3 shadow-sm">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Recomendação Precisa</h3>
                  <p className="text-gray-600 text-sm">Top 3 colchões ideais para você</p>
                </div>
              </div>

              <Link 
                href="/mapa" 
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block text-lg"
              >
                Fazer Teste do Sono Agora
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Avaliações de Clientes */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Avaliações de Clientes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Milhares de clientes satisfeitos em Cabo Frio e região confiam na qualidade Castor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 text-xl">
                  ★★★★★
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;Comprei meu colchão Castor há 2 anos e até hoje durmo como um bebê. A qualidade é excepcional e o atendimento foi perfeito! O dono é muito atencioso.&rdquo;
              </p>
              <div className="font-semibold text-gray-900">Maria Silva</div>
              <div className="text-gray-500 text-sm">Jardim Flamboyant</div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 text-xl">
                  ★★★★★
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;Recomendo a Loja Castor para todos! Produtos de qualidade, preço justo e entrega rápida. Minha família toda dorme melhor agora. Atendimento diferenciado!&rdquo;
              </p>
              <div className="font-semibold text-gray-900">João Santos</div>
              <div className="text-gray-500 text-sm">Centro</div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 text-xl">
                  ★★★★★
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;Excelente atendimento! O proprietário me ajudou a escolher o colchão perfeito para meu problema nas costas. Não troco por nada! Muito profissional.&rdquo;
              </p>
              <div className="font-semibold text-gray-900">Ana Costa</div>
              <div className="text-gray-500 text-sm">Braga</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-castor text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Visite nossa loja em Cabo Frio
          </h2>
          <p className="text-xl mb-8 text-red-100 max-w-2xl mx-auto">
            Nossa equipe está pronta para ajudar você a encontrar o colchão dos seus sonhos. Fale direto com o dono!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contato" 
              className="bg-white text-castor px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition-colors inline-block"
            >
              Como Chegar
            </Link>
            <Link 
              href="/mapa" 
              className="bg-red-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-900 transition-colors inline-block"
            >
              Mapa do Sono IA
            </Link>
            <a 
              href="https://wa.me/5522992410112" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block"
            >
              (22) 99241-0112
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
              Loja Castor Cabo Frio
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 leading-relaxed">
              Há mais de 30 anos oferecendo os melhores colchões e travesseiros para o seu conforto e qualidade do sono. Tradição, qualidade e atendimento especializado em Cabo Frio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/produtos" 
                className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-block"
              >
                Ver Produtos
              </Link>
              <Link 
                href="/mapa" 
                className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors inline-block"
              >
                Mapa do Sono IA
              </Link>
              <a 
                href="https://wa.me/5522992410112" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Destaques
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conheça nossa linha premium de colchões Castor, desenvolvidos com tecnologia avançada para o seu conforto.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-red-100 h-48 flex items-center justify-center">
                <div className="text-red-600 text-6xl">🛏️</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Amazon Prime Gel Pocket®</h3>
                <p className="text-gray-600 mb-4">Tecnologia gel com molas pocket para temperatura ideal e suporte personalizado.</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-red-600">A partir de R$ 1.299</span>
                  <Link href="/produtos" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors">
                    Ver Mais
                  </Link>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-orange-100 h-48 flex items-center justify-center">
                <div className="text-orange-600 text-6xl">🌟</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Silver Star Air Pocket®</h3>
                <p className="text-gray-600 mb-4">Sistema de ventilação avançado com molas pocket independentes.</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-red-600">A partir de R$ 999</span>
                  <Link href="/produtos" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors">
                    Ver Mais
                  </Link>
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-yellow-100 h-48 flex items-center justify-center">
                <div className="text-yellow-600 text-6xl">👑</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Kingdom Látex</h3>
                <p className="text-gray-600 mb-4">Látex natural premium para máximo conforto e durabilidade.</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-red-600">A partir de R$ 1.599</span>
                  <Link href="/produtos" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors">
                    Ver Mais
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que escolher a Castor?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Mais de 30 anos de experiência em proporcionar noites de sono perfeitas para toda a família.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Qualidade Garantida</h3>
              <p className="text-gray-600">Produtos certificados com garantia de fábrica e qualidade comprovada há décadas.</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Entrega Rápida</h3>
              <p className="text-gray-600">Entregamos em toda Cabo Frio e região com agilidade e cuidado.</p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Melhor Preço</h3>
              <p className="text-gray-600">Preços competitivos e condições especiais de pagamento para você.</p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Atendimento Especializado</h3>
              <p className="text-gray-600">Nossa equipe está pronta para ajudar você a encontrar o colchão ideal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Milhares de clientes satisfeitos em Cabo Frio e região confiam na qualidade Castor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;Comprei meu colchão Castor há 2 anos e até hoje durmo como um bebê. A qualidade é excepcional e o atendimento foi perfeito!&rdquo;
              </p>
              <div className="font-semibold text-gray-900">Maria Silva</div>
              <div className="text-gray-500 text-sm">Cliente desde 2022</div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;Recomendo a Loja Castor para todos! Produtos de qualidade, preço justo e entrega rápida. Minha família toda dorme melhor agora.&rdquo;
              </p>
              <div className="font-semibold text-gray-900">João Santos</div>
              <div className="text-gray-500 text-sm">Cliente desde 2021</div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;Excelente atendimento! A equipe me ajudou a escolher o colchão perfeito para meu problema nas costas. Não troco por nada!&rdquo;
              </p>
              <div className="font-semibold text-gray-900">Ana Costa</div>
              <div className="text-gray-500 text-sm">Cliente desde 2023</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Visite nossa loja em Cabo Frio
          </h2>
          <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
            Nossa equipe está pronta para ajudar você a encontrar o colchão dos seus sonhos. Venha nos conhecer!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contato" 
              className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-block"
            >
              Como Chegar
            </Link>
            <Link 
              href="/mapa" 
              className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors inline-block"
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

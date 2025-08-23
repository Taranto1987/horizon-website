import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-4">
              <span className="text-lg font-semibold text-red-600">🛏️ Guru do Sono REM</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
              Castor Cabo Frio
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-red-600">
              Descubra seu Castor Ideal com o Mapa do Sono IA
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 leading-relaxed">
              Dormir bem paga juros diários. Aqui você encontra seu Castor certo.
              <br />
              <strong>Eu vendo solução, não espuma. Seu biotipo define o Castor ideal.</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/mapa" 
                className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-block text-lg"
              >
                🧠 Descobrir meu Castor ideal
              </Link>
              <a 
                href="https://wa.me/5522992410112?text=Olá! Vim do site e gostaria de um orçamento VIP para colchões Castor." 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block text-lg"
              >
                💬 Falar no WhatsApp agora – Orçamento VIP
              </a>
              <Link 
                href="/produtos" 
                className="bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 transition-colors inline-block text-lg"
              >
                Ver Produtos Oficiais
              </Link>
            </div>
            <div className="mt-6 text-sm text-gray-500">
              ⭐ Mais de 500 clientes reais, nota máxima no Google
            </div>
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Linha Oficial Castor
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conheça nossa linha premium de colchões Castor, desenvolvidos com tecnologia avançada para o seu biotipo específico.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-l-4 border-red-600">
              <div className="bg-red-50 h-48 flex items-center justify-center">
                <div className="text-red-600 text-6xl">🛏️</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Amazon Premium Gel Pocket®</h3>
                <p className="text-gray-600 mb-4">Tecnologia gel com molas ensacadas para noites frescas e suporte individualizado.</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-red-600">A partir de R$ 2.899</span>
                  <a 
                    href="https://wa.me/5522992410112?text=Tenho interesse no Amazon Premium Gel Pocket. Gostaria de um orçamento VIP!" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
                  >
                    Orçamento VIP
                  </a>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-l-4 border-red-600">
              <div className="bg-red-50 h-48 flex items-center justify-center">
                <div className="text-red-600 text-6xl">🌟</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Silver Star Air Híbrido®</h3>
                <p className="text-gray-600 mb-4">Sistema de ventilação avançado ideal para casais, com movimento independente.</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-red-600">A partir de R$ 2.999</span>
                  <a 
                    href="https://wa.me/5522992410112?text=Tenho interesse no Silver Star Air Híbrido. Gostaria de um orçamento VIP!" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
                  >
                    Orçamento VIP
                  </a>
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-l-4 border-red-600">
              <div className="bg-red-50 h-48 flex items-center justify-center">
                <div className="text-red-600 text-6xl">🌿</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Kingdom Aloe Vera Pocket®</h3>
                <p className="text-gray-600 mb-4">Luxo máximo com tratamento Aloe Vera e Double Face para dobrar a vida útil.</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-red-600">A partir de R$ 3.299</span>
                  <a 
                    href="https://wa.me/5522992410112?text=Tenho interesse no Kingdom Aloe Vera Pocket. Gostaria de um orçamento VIP!" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
                  >
                    Orçamento VIP
                  </a>
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
              Por que escolher a Castor Cabo Frio?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Mais de 30 anos de experiência, loja oficial Castor na Região dos Lagos. Especialistas em encontrar seu biotipo ideal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Loja Oficial Castor</h3>
              <p className="text-gray-600">Produtos originais com garantia de fábrica e certificação oficial da marca Castor.</p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mapa do Sono IA</h3>
              <p className="text-gray-600">Tecnologia exclusiva para encontrar o colchão ideal para seu biotipo específico.</p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Orçamento VIP 2min</h3>
              <p className="text-gray-600">Atendimento direto no WhatsApp com orçamento personalizado em até 2 minutos.</p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">500+ Clientes VIP</h3>
              <p className="text-gray-600">Mais de 500 clientes satisfeitos com nota máxima no Google. Prova social real.</p>
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
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
            >
              Como Chegar
            </Link>
            <Link 
              href="/mapa" 
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block"
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

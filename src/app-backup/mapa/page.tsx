import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mapa do Sono IA - Loja Castor Cabo Frio',
  description: 'Descubra seu perfil de sono ideal com nossa tecnologia de inteligência artificial. Encontre o colchão perfeito para suas necessidades.',
  keywords: 'mapa do sono, IA, inteligência artificial, colchões personalizados, Castor, Cabo Frio',
};

export default function MapaDoSono() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Mapa do Sono IA
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Descubra seu perfil de sono único com nossa tecnologia de inteligência artificial. 
              Responda algumas perguntas e encontre o colchão ideal para transformar suas noites.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Como funciona?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">📋</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">1. Questionário</h3>
                  <p className="text-gray-600 text-sm">Responda perguntas sobre seus hábitos de sono</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🧠</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">2. Análise IA</h3>
                  <p className="text-gray-600 text-sm">Nossa IA analisa seu perfil único</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">3. Recomendação</h3>
                  <p className="text-gray-600 text-sm">Receba sugestões personalizadas</p>
                </div>
              </div>
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg w-full">
                Criar Meu Mapa do Sono
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Por que criar seu Mapa do Sono?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">💤</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Sono Personalizado</h3>
                  <p className="text-gray-600">Cada pessoa tem necessidades únicas de sono. Nossa IA considera seu peso, posição preferida, problemas de coluna e mais.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Decisão Mais Acertada</h3>
                  <p className="text-gray-600">Evite comprar o colchão errado. Nossa análise direciona você para produtos que realmente atendem suas necessidades.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Rápido e Fácil</h3>
                  <p className="text-gray-600">Em apenas 5 minutos você terá recomendações precisas baseadas em tecnologia avançada.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">✨</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Gratuito</h3>
                  <p className="text-gray-600">Nosso Mapa do Sono é completamente gratuito, sem compromisso. Use quantas vezes quiser!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pronto para descobrir seu sono ideal?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Milhares de clientes já encontraram o colchão perfeito com nosso Mapa do Sono IA.
              Junte-se a eles e transforme suas noites!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg">
                Criar Meu Mapa do Sono
              </button>
              <Link 
                href="/produtos" 
                className="bg-white text-gray-900 border border-gray-300 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-lg"
              >
                Ver Produtos
              </Link>
            </div>
            <p className="text-gray-500 text-sm mt-4">
              Não coletamos dados pessoais • Resultado imediato • Tecnologia Castor
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
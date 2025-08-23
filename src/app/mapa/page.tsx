import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mapa do Sono IA - Castor Cabo Frio | Descubra seu Colchão Ideal',
  description: 'Descubra seu Castor ideal com o Mapa do Sono IA. Tecnologia exclusiva que encontra o colchão perfeito para seu biotipo. Resultados em 5 minutos, totalmente gratuito.',
  keywords: 'mapa do sono, IA Castor, inteligência artificial, colchões personalizados, biotipo, Castor Cabo Frio, guru do sono',
};

export default function MapaDoSono() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              🧠 Mapa do Sono IA
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed text-red-100">
              Descubra seu Castor ideal com nossa tecnologia de inteligência artificial exclusiva.
              <br />
              <strong>Seu biotipo define o colchão perfeito para você.</strong>
            </p>
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto text-gray-900">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Como funciona o Guru do Sono REM?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">📋</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">1. Questionário</h3>
                  <p className="text-gray-600 text-sm">9-15 perguntas sobre seu biotipo e necessidades</p>
                </div>
                <div className="text-center">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🧠</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">2. Análise IA</h3>
                  <p className="text-gray-600 text-sm">IA analisa altura, peso, posição e preferências</p>
                </div>
                <div className="text-center">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">3. Recomendação</h3>
                  <p className="text-gray-600 text-sm">Seu Castor ideal + orçamento VIP direto</p>
                </div>
              </div>
              <Link 
                href="/mapa/questionario"
                className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors text-lg w-full block text-center"
              >
                🚀 Descobrir meu Castor ideal
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Por que usar o Mapa do Sono Castor?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">💤</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Biotipo Personalizado</h3>
                  <p className="text-gray-600">Cada pessoa tem necessidades únicas. Nossa IA considera altura, peso, IMC, posição de dormir, dores existentes e preferências de firmeza.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Decisão Mais Acertada</h3>
                  <p className="text-gray-600">Evite comprar o colchão errado. Nossa análise direciona você para produtos Castor que realmente atendem suas necessidades específicas.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Resultado em 5 minutos</h3>
                  <p className="text-gray-600">Processo rápido e intuitivo com resultado imediato. CTA direto para WhatsApp com seu Castor ideal já selecionado.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">✨</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Totalmente Gratuito</h3>
                  <p className="text-gray-600">Nosso Mapa do Sono é completamente gratuito, sem compromisso. Use quantas vezes quiser! Tecnologia exclusiva Castor Cabo Frio.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pronto para descobrir seu Castor ideal?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Mais de 500 clientes já encontraram seu colchão perfeito com nosso Mapa do Sono IA.
              <br />
              <strong>Junte-se a eles e transforme suas noites!</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/mapa/questionario"
                className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors text-lg"
              >
                🚀 Descobrir meu Castor ideal
              </Link>
              <a 
                href="https://wa.me/5522992410112?text=Olá! Gostaria de saber mais sobre o Mapa do Sono IA da Castor. Podem me ajudar?"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-lg"
              >
                💬 Falar no WhatsApp
              </a>
            </div>
            <p className="text-gray-500 text-sm mt-4">
              Não coletamos dados pessoais • Resultado imediato • Tecnologia Castor Oficial
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
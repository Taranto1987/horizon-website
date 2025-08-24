'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ResultadoMapaDoSono() {
  const router = useRouter();

  // In a real implementation, this would come from the previous questionnaire data
  // For now, we'll show a sample result
  const recommendation = {
    name: "Visitante",
    primaryProduct: "Amazon Prime Gel Pocket®",
    reason: "Baseado em suas respostas, este colchão oferece o equilíbrio perfeito entre suporte e conforto.",
    features: [
      "Sistema de ventilação para controle de temperatura",
      "Suporte adequado para sua altura e peso",
      "Firmeza média ideal para sua posição de dormir",
      "Molas pocket independentes para não incomodar o parceiro"
    ],
    alternatives: [
      {
        name: "Silver Star Air Pocket®",
        reason: "Opção com excelente custo-benefício"
      },
      {
        name: "Kingdom Látex",
        reason: "Para quem busca materiais naturais"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Seu Mapa do Sono está pronto!
            </h1>
            <p className="text-lg text-gray-600">
              Nossa IA analisou suas respostas e encontrou a recomendação perfeita
            </p>
          </div>

          {/* Main Recommendation */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Recomendação Principal
              </h2>
              <div className="bg-purple-100 rounded-lg p-6">
                <h3 className="text-3xl font-bold text-purple-600 mb-2">
                  {recommendation.primaryProduct}
                </h3>
                <p className="text-gray-700 text-lg">
                  {recommendation.reason}
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="mb-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Por que este colchão é ideal para você:
              </h4>
              <div className="space-y-3">
                {recommendation.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="border-t pt-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/5522992410112?text=Olá! Gostaria de saber mais sobre o colchão Amazon Prime Gel Pocket® que foi recomendado no meu Mapa do Sono."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-lg text-center"
                >
                  Falar no WhatsApp
                </a>
                <Link 
                  href="/produtos"
                  className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-lg text-center"
                >
                  Ver Todos os Produtos
                </Link>
              </div>
            </div>
          </div>

          {/* Alternative Recommendations */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Outras opções que podem interessar:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recommendation.alternatives.map((alt, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">{alt.name}</h4>
                  <p className="text-gray-600 text-sm">{alt.reason}</p>
                </div>
              ))}
            </div>
          </div>

          {/* AI Analysis Summary */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Resumo da análise
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl mb-2">📏</div>
                <div className="text-sm font-medium text-gray-700">Altura/Peso</div>
                <div className="text-xs text-gray-600">Analisado</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl mb-2">🛏️</div>
                <div className="text-sm font-medium text-gray-700">Posição</div>
                <div className="text-xs text-gray-600">Considerada</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl mb-2">💰</div>
                <div className="text-sm font-medium text-gray-700">Orçamento</div>
                <div className="text-xs text-gray-600">Respeitado</div>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <div className="text-2xl mb-2">🎯</div>
                <div className="text-sm font-medium text-gray-700">Necessidades</div>
                <div className="text-xs text-gray-600">Atendidas</div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-gradient-to-r from-purple-50 to-purple-50 rounded-lg p-6 md:p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
              Próximos passos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl">📱</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">1. Entre em contato</h4>
                <p className="text-gray-600 text-sm">Fale conosco pelo WhatsApp para tirar dúvidas</p>
              </div>
              <div className="text-center">
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl">🏪</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">2. Visite nossa loja</h4>
                <p className="text-gray-600 text-sm">Teste o colchão em nossa loja em Cabo Frio</p>
              </div>
              <div className="text-center">
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl">🚚</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">3. Receba em casa</h4>
                <p className="text-gray-600 text-sm">Entrega e montagem incluídas</p>
              </div>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="text-center mt-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => router.push('/mapa/questionario')}
                className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
              >
                Refazer Mapa do Sono
              </button>
              <Link 
                href="/contato"
                className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Informações da Loja
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
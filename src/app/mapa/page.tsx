'use client';

import Link from 'next/link';
import { useState } from 'react';
import SleepMapModal from '@/components/ui/SleepMapModal';

export default function MapaDoSono() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-castor text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Mapa do Sono IA
            </h1>
            <p className="text-xl md:text-2xl text-red-100 mb-8 leading-relaxed">
              Descubra seu perfil de sono único com nossa tecnologia de inteligência artificial. 
              Responda algumas perguntas e encontre o colchão ideal para transformar suas noites.
            </p>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-2xl max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold mb-4">
                Como funciona?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">📋</span>
                  </div>
                  <h3 className="font-semibold mb-2">1. Questionário</h3>
                  <p className="text-red-100 text-sm">Responda 9 perguntas sobre seus hábitos de sono</p>
                </div>
                <div className="text-center">
                  <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🧠</span>
                  </div>
                  <h3 className="font-semibold mb-2">2. Análise IA</h3>
                  <p className="text-red-100 text-sm">Nossa IA analisa seu perfil único em tempo real</p>
                </div>
                <div className="text-center">
                  <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="font-semibold mb-2">3. Recomendação</h3>
                  <p className="text-red-100 text-sm">Receba os 3 melhores colchões para você</p>
                </div>
              </div>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-castor px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition-colors text-lg w-full"
              >
                🚀 Iniciar Meu Mapa do Sono
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
                <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
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
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Rápido e Fácil</h3>
                  <p className="text-gray-600">Em apenas 3 minutos você terá recomendações precisas baseadas em tecnologia avançada desenvolvida pela Castor.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">✨</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">100% Gratuito</h3>
                  <p className="text-gray-600">Nosso Mapa do Sono é completamente gratuito, sem compromisso. Use quantas vezes quiser para sua família!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Tecnologia Avançada Castor
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔬</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Algoritmo Inteligente</h3>
                <p className="text-gray-600 text-sm">Desenvolvido com base em milhares de dados de clientes satisfeitos da Castor ao longo de 25 anos.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Análise Multifatorial</h3>
                <p className="text-gray-600 text-sm">Considera peso, altura, posição de dormir, problemas de coluna, temperatura e muito mais.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Precisão Comprovada</h3>
                <p className="text-gray-600 text-sm">95% dos clientes que seguiram nossas recomendações relataram melhora significativa no sono.</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Exclusivo da Castor Cabo Frio</h3>
              <p className="text-blue-100 mb-6">
                Somos a única loja da região com tecnologia de Mapa do Sono IA. 
                Desenvolvido especificamente para nossos clientes locais.
              </p>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Testar Agora Grátis
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-castor text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para descobrir seu sono ideal?
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Milhares de clientes já encontraram o colchão perfeito com nosso Mapa do Sono IA.
              Junte-se a eles e transforme suas noites!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-castor px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition-colors text-lg"
              >
                🧠 Fazer Meu Teste do Sono
              </button>
              <Link 
                href="/produtos" 
                className="bg-red-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-900 transition-colors text-lg"
              >
                Ver Todos os Produtos
              </Link>
            </div>
            <p className="text-red-200 text-sm mt-4">
              ✅ Não coletamos dados pessoais • ✅ Resultado imediato • ✅ Tecnologia 100% Castor
            </p>
          </div>
        </div>
      </section>

      {/* Sleep Map Modal */}
      <SleepMapModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
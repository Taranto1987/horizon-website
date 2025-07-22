import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Mapa do Sono IA - Loja Castor Cabo Frio",
  description: "Descubra o colchão perfeito para você com nossa inteligência artificial. Crie seu mapa do sono personalizado e melhore sua qualidade de vida.",
  keywords: "mapa do sono, inteligência artificial, colchões personalizados, sono, Castor, Cabo Frio",
};

export default function MapaDoSono() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Mapa do Sono IA
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100 leading-relaxed">
              Descubra o colchão perfeito para você através da nossa inteligência artificial personalizada.
            </p>
            <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors">
              Criar Meu Mapa do Sono
            </button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como Funciona
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Em poucos minutos, nossa IA analisa seu perfil de sono e recomenda o colchão ideal para suas necessidades.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-primary-600 text-2xl">📝</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Questionário</h3>
              <p className="text-gray-600">Responda perguntas sobre seus hábitos de sono, preferências e necessidades específicas.</p>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-primary-600 text-2xl">🧠</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Análise IA</h3>
              <p className="text-gray-600">Nossa inteligência artificial processa suas respostas e analisa milhares de dados sobre sono.</p>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-primary-600 text-2xl">🎯</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Recomendação</h3>
              <p className="text-gray-600">Receba recomendações personalizadas de colchões Castor ideais para seu perfil.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefícios do Mapa do Sono IA
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tecnologia avançada para encontrar o colchão que transformará suas noites de sono.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-primary-600 text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Análise Rápida</h3>
              <p className="text-gray-600">Resultado em minutos com base em análise científica do sono.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-primary-600 text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">100% Personalizado</h3>
              <p className="text-gray-600">Recomendações únicas baseadas no seu perfil individual de sono.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-primary-600 text-3xl mb-4">🔬</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Base Científica</h3>
              <p className="text-gray-600">Algoritmo desenvolvido com estudos científicos sobre qualidade do sono.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-primary-600 text-3xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Economia</h3>
              <p className="text-gray-600">Evite compras incorretas e invista no colchão certo desde o início.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-primary-600 text-3xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Qualidade Garantida</h3>
              <p className="text-gray-600">Recomendações apenas de produtos Castor com qualidade comprovada.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-primary-600 text-3xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fácil de Usar</h3>
              <p className="text-gray-600">Interface intuitiva que funciona em qualquer dispositivo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para descobrir seu colchão ideal?
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
            Comece agora seu Mapa do Sono IA e transforme suas noites com o colchão perfeito para você.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors">
              Criar Meu Mapa do Sono
            </button>
            <Link 
              href="/contato" 
              className="bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-800 transition-colors inline-block"
            >
              Falar com Especialista
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
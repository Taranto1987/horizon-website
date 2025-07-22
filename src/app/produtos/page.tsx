import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/ui/ProductCard';
import { PRODUCTS } from '@/data/products';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Produtos - Loja Castor Cabo Frio',
  description: 'Catálogo completo de colchões, travesseiros e acessórios para o sono. Amazon Prime Gel Pocket®, Silver Star Air Pocket®, Kingdom Látex e muito mais.',
  keywords: 'colchões cabo frio, amazon prime gel pocket, silver star air pocket, kingdom látex, travesseiros, protetores',
};

export default function ProdutosPage() {
  const productsByCategory = {
    colchao: PRODUCTS.filter(p => p.category === 'colchao'),
    travesseiro: PRODUCTS.filter(p => p.category === 'travesseiro'),
    protetor: PRODUCTS.filter(p => p.category === 'protetor'),
    acessorio: PRODUCTS.filter(p => p.category === 'acessorio'),
  };

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nossos Produtos
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Descubra nossa linha completa de colchões, travesseiros e acessórios para o sono perfeito
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ⭐ Produtos em Destaque
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nossa seleção especial dos melhores produtos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.filter(product => product.featured).map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                variant="featured"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Colchões */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🛏️ Colchões
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nossa linha premium de colchões com as melhores tecnologias
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsByCategory.colchao.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Travesseiros e Acessórios */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🛌 Travesseiros e Acessórios
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete seu sono perfeito com nossos travesseiros e protetores
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.filter(p => p.category !== 'colchao').map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Product Information */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Por Que Escolher Nossos Produtos?
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-3">🏆</span>
                  Qualidade Premium
                </h3>
                <p className="text-gray-600">
                  Todos os nossos colchões são fabricados com materiais de alta qualidade e passam por rigorosos testes de qualidade.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-3">🛡️</span>
                  Garantia Estendida
                </h3>
                <p className="text-gray-600">
                  Oferecemos garantias de até 12 anos em nossos produtos, demonstrando nossa confiança na durabilidade.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-3">🚚</span>
                  Entrega Rápida
                </h3>
                <p className="text-gray-600">
                  Entrega rápida em Cabo Frio e região. Seu novo colchão chega em até 3 dias úteis.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-3">💳</span>
                  Facilidade de Pagamento
                </h3>
                <p className="text-gray-600">
                  Parcelamos em até 12x sem juros no cartão ou condições especiais à vista.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Encontrou o Produto Ideal?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Entre em contato conosco para mais informações e condições especiais
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5522992410112?text=Olá! Vi os produtos no site e gostaria de mais informações."
              className="bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition-colors font-semibold text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              📱 Fale Conosco no WhatsApp
            </a>
            <a
              href="tel:+5522992410112"
              className="bg-white text-blue-900 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors font-semibold text-lg"
            >
              📞 Ligar Agora
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
import { products, contactInfo } from '../../data';
import type { Product } from '../../types';

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const handleWhatsAppClick = () => {
    const message = `Olá! Gostaria de saber mais sobre o ${product.name}. Pode me dar mais informações sobre preço e condições?`;
    window.open(`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Imagem do produto */}
      <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
        <div className="text-center text-gray-500">
          <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 10.5h.5v2A1.5 1.5 0 0 1 20 14H4a1.5 1.5 0 0 1-1.5-1.5v-2H3v-2A1.5 1.5 0 0 1 4.5 7h15A1.5 1.5 0 0 1 21 8.5v2zM4.5 9A.5.5 0 0 0 4 9.5v1h16v-1a.5.5 0 0 0-.5-.5h-15zM20 12.5v-1H4v1a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5z"/>
          </svg>
          <span className="text-sm">Imagem em breve</span>
        </div>
      </div>

      <div className="p-6">
        {/* Categoria */}
        <div className="flex items-center mb-3">
          <span className="inline-block bg-castor-accent/10 text-castor-accent text-xs font-medium px-3 py-1 rounded-full capitalize">
            {product.category === 'colchao' ? 'Colchão' : product.category}
          </span>
          {product.warranty && (
            <span className="ml-2 text-xs text-gray-500">
              Garantia {product.warranty}
            </span>
          )}
        </div>

        {/* Nome e preço */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        <div className="text-2xl font-bold text-castor-primary mb-4">
          {formatPrice(product.price)}
          <span className="text-sm text-gray-500 font-normal ml-2">
            à vista
          </span>
        </div>

        {/* Descrição */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {product.description}
        </p>

        {/* Características principais */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Destaques:</h4>
          <div className="space-y-1">
            {product.features.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex items-center text-sm text-gray-600">
                <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tamanhos disponíveis */}
        {product.size && (
          <div className="mb-4">
            <div className="text-xs text-gray-500 mb-2">Tamanhos disponíveis:</div>
            <div className="flex flex-wrap gap-1">
              {product.size.map((size) => (
                <span
                  key={size}
                  className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Botões */}
        <div className="flex flex-col gap-2">
          <button
            onClick={handleWhatsAppClick}
            className="btn-secondary w-full flex items-center justify-center space-x-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.89 3.598z"/>
            </svg>
            <span>Consultar Preço</span>
          </button>
          
          <button className="text-castor-primary text-sm font-medium hover:text-castor-secondary transition-colors">
            Ver detalhes completos
          </button>
        </div>
      </div>
    </div>
  );
}

export function ProductsSection() {
  const colchoes = products.filter(p => p.category === 'colchao');
  const acessorios = products.filter(p => p.category !== 'colchao');

  return (
    <section id="produtos" className="py-20 bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossos <span className="text-castor-accent">Produtos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra a linha completa de colchões Castor e acessórios para seu melhor sono. 
            Qualidade premium com garantia estendida e condições especiais.
          </p>
        </div>

        {/* Colchões */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Colchões Premium</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {colchoes.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Acessórios */}
        {acessorios.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Acessórios</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {acessorios.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-castor-primary rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Não encontrou o que procura?
          </h3>
          <p className="text-lg mb-6 text-gray-200">
            Temos toda a linha Castor disponível. Fale conosco e encontre o colchão perfeito para você!
          </p>
          <button
            onClick={() => {
              const message = "Olá! Gostaria de conhecer outros modelos de colchões Castor disponíveis na loja.";
              window.open(`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
            }}
            className="btn-secondary"
          >
            Falar com Especialista
          </button>
        </div>
      </div>
    </section>
  );
}
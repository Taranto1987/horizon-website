'use client';

import { useState } from 'react';
import { products, categories, Product } from '@/data/products';

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 h-48 flex items-center justify-center">
        <div className="text-blue-600 text-6xl">{product.image}</div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
          {product.featured && (
            <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded">
              Destaque
            </span>
          )}
        </div>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{product.description}</p>
        
        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 mb-2">Características:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {product.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-center">
                <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {product.sizes && (
          <div className="mb-4">
            <h4 className="font-semibold text-gray-900 mb-2">Tamanhos:</h4>
            <div className="flex flex-wrap gap-1">
              {product.sizes.map((size) => (
                <span key={size} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                  {size}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold text-blue-600">
              A partir de R$ {product.price.min.toLocaleString('pt-BR')}
            </span>
            {product.price.max && (
              <div className="text-sm text-gray-500">
                até R$ {product.price.max.toLocaleString('pt-BR')}
              </div>
            )}
          </div>
          <a 
            href="https://wa.me/5522992410112" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors text-sm font-medium"
          >
            Consultar
          </a>
        </div>
      </div>
    </div>
  );
};

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const filteredProducts = selectedCategory 
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nossos Produtos
            </h1>
            <p className="text-xl text-blue-100">
              Descubra a linha completa de colchões, travesseiros e acessórios Castor. 
              Qualidade garantida para o seu melhor sono.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedCategory('')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                selectedCategory === '' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Todos ({products.length})
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  selectedCategory === category.id 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Nenhum produto encontrado
              </h3>
              <p className="text-gray-600">
                Tente selecionar uma categoria diferente.
              </p>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedCategory ? categories.find(c => c.id === selectedCategory)?.name : 'Todos os Produtos'}
                </h2>
                <p className="text-gray-600 mt-2">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'produto' : 'produtos'} encontrado{filteredProducts.length === 1 ? '' : 's'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Encontrou o produto ideal?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Entre em contato conosco para mais informações, preços especiais e condições de pagamento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5522992410112" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block"
            >
              Falar no WhatsApp
            </a>
            <a 
              href="tel:22992410112" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
            >
              (22) 99241-0112
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
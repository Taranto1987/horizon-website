'use client';

import Layout from '@/components/layout/Layout';
import Image from 'next/image';
import { useState } from 'react';
import { products, categories, companyInfo } from '@/data/products';

export default function Produtos() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Nossos Produtos
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Descubra nossa linha completa de colchões, travesseiros e acessórios Castor. 
            Qualidade, conforto e tecnologia para o seu melhor sono.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-primary text-white'
                  : 'bg-white text-foreground hover:bg-gray-100'
              }`}
            >
              Todos os Produtos
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-white text-foreground hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                  {product.highlighted && (
                    <div className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 rounded-lg text-sm font-semibold">
                      Destaque
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold">{product.name}</h3>
                    <span className="text-sm text-muted capitalize bg-accent px-2 py-1 rounded">
                      {categories.find(cat => cat.id === product.category)?.name}
                    </span>
                  </div>
                  <p className="text-muted mb-4">{product.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-sm">Características:</h4>
                    <ul className="text-sm text-muted space-y-1">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <a
                      href={`https://wa.me/${companyInfo.whatsapp}?text=Olá! Tenho interesse no ${product.name}. Gostaria de mais informações e preços.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors text-center font-medium flex-1"
                    >
                      Consultar Preço
                    </a>
                    <a
                      href={`https://wa.me/${companyInfo.whatsapp}?text=Olá! Gostaria de saber mais sobre o ${product.name}. Quando posso visitar a loja?`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-200 text-foreground px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors text-center font-medium"
                    >
                      Visitar Loja
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted">Nenhum produto encontrado nesta categoria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Não encontrou o que procurava?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Entre em contato conosco! Temos outros produtos e podemos ajudá-lo a encontrar 
            a solução perfeita para o seu sono.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${companyInfo.whatsapp}?text=Olá! Gostaria de conhecer outros produtos disponíveis na loja.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Falar no WhatsApp
            </a>
            <a
              href="/contato"
              className="bg-primary hover:bg-opacity-90 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Página de Contato
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
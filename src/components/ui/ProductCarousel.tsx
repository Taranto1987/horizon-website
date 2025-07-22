'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Product } from '@/data/products';

interface ProductCarouselProps {
  products: Product[];
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow min-w-[300px] mx-2">
      <div className="bg-gradient-to-br from-red-50 to-red-100 h-48 flex items-center justify-center">
        <div className="text-castor text-6xl">{product.image}</div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
          {product.featured && (
            <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded">
              Destaque
            </span>
          )}
        </div>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex justify-between items-center">
          <div>
            <span className="text-xl font-bold text-castor">
              R$ {product.price.min.toLocaleString('pt-BR')}
            </span>
            <div className="text-xs text-gray-500">
              à vista ou 12x sem juros
            </div>
          </div>
          <Link 
            href={`/produtos/${product.id}`}
            className="bg-castor text-white px-4 py-2 rounded hover:bg-red-700 transition-colors text-sm font-medium"
          >
            Saiba mais
          </Link>
        </div>
      </div>
    </div>
  );
};

const ProductCarousel = ({ products: allProducts }: ProductCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const featuredProducts = allProducts.filter(p => p.featured).slice(0, 6);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredProducts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay, featuredProducts.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredProducts.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ 
          transform: `translateX(-${currentIndex * 100}%)` 
        }}
        onMouseEnter={() => setIsAutoPlay(false)}
        onMouseLeave={() => setIsAutoPlay(true)}
      >
        {featuredProducts.map((product) => (
          <div key={product.id} className="w-full flex-shrink-0">
            <div className="flex justify-center">
              <ProductCard product={product} />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors z-10"
        aria-label="Produto anterior"
      >
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors z-10"
        aria-label="Próximo produto"
      >
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-6 space-x-2">
        {featuredProducts.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-castor' : 'bg-gray-300'
            }`}
            aria-label={`Ir para produto ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
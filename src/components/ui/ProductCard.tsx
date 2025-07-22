import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  variant?: 'default' | 'featured';
}

export default function ProductCard({ product, variant = 'default' }: ProductCardProps) {
  const formatPrice = (price: Product['price']) => {
    if (price.from && price.to) {
      return `R$ ${price.from.toLocaleString()} - R$ ${price.to.toLocaleString()}`;
    }
    if (price.from) {
      return `A partir de R$ ${price.from.toLocaleString()}`;
    }
    return 'Consulte o preço';
  };

  const getCategoryLabel = (category: Product['category']) => {
    const labels = {
      'colchao': 'Colchão',
      'travesseiro': 'Travesseiro',
      'protetor': 'Protetor',
      'acessorio': 'Acessório'
    };
    return labels[category];
  };

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ${
      variant === 'featured' ? 'ring-2 ring-blue-500' : ''
    }`}>
      {/* Product Image */}
      <div className="relative h-64 bg-gray-100">
        {product.images[0] ? (
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <span className="text-6xl">🛏️</span>
          </div>
        )}
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-blue-900 text-white px-2 py-1 rounded-full text-xs font-medium">
            {getCategoryLabel(product.category)}
          </span>
        </div>

        {/* Featured Badge */}
        {product.featured && (
          <div className="absolute top-3 right-3">
            <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              ⭐ Destaque
            </span>
          </div>
        )}

        {/* Stock Status */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="bg-red-500 text-white px-4 py-2 rounded-full font-medium">
              Indisponível
            </span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {product.description}
        </p>

        {/* Features */}
        {product.features && product.features.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-900 mb-2">Principais características:</h4>
            <ul className="text-xs text-gray-600 space-y-1">
              {product.features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-start space-x-1">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Price */}
        <div className="mb-4">
          <span className="text-lg font-bold text-blue-900">
            {formatPrice(product.price)}
          </span>
          {product.warranty && (
            <p className="text-xs text-gray-500 mt-1">
              Garantia: {product.warranty}
            </p>
          )}
        </div>

        {/* Actions */}
        <div className="flex space-x-2">
          <Link
            href={`/produtos/${product.id}`}
            className="flex-1 bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition-colors text-center text-sm font-medium"
          >
            Ver Detalhes
          </Link>
          <a
            href={`https://wa.me/5522992410112?text=Olá! Tenho interesse no ${product.name}. Pode me dar mais informações?`}
            className="flex-1 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors text-center text-sm font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
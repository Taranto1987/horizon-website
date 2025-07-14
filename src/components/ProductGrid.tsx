'use client'

import { castorProducts } from './BiotipoCalculator/calculatorData'

export default function ProductGrid() {
  const handlePriceInquiry = (productName: string) => {
    // WhatsApp integration - opens WhatsApp with pre-filled message
    const message = `Olá! Gostaria de consultar o preço do produto: ${productName}`
    const whatsappUrl = `https://wa.me/5522999999999?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {castorProducts.map((product, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold text-castor-brown mb-2">
            {product.name}
          </h3>
          <p className="text-gray-600 mb-4">
            {product.price}
          </p>
          <button
            onClick={() => handlePriceInquiry(product.name)}
            className="btn-primary w-full"
          >
            Consultar Preço
          </button>
        </div>
      ))}
    </div>
  )
}
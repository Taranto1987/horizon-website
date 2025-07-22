export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Encontre o Colchão Perfeito
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Colchões Castor com tecnologia avançada para o seu melhor sono
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#catalog" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Ver Catálogo
            </a>
            <a 
              href="https://wa.me/5522992410112" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">🚚 Entrega Rápida</h3>
            <p className="text-blue-100">Entregamos em toda região de Cabo Frio</p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">💤 Mapa do Sono IA</h3>
            <p className="text-blue-100">Tecnologia avançada para seu sono</p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">🛡️ Garantia</h3>
            <p className="text-blue-100">Produtos oficiais Castor</p>
          </div>
        </div>
      </div>
    </section>
  )
}
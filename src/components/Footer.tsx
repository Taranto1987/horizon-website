export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Loja Castor Cabo Frio</h3>
            <p className="text-gray-300 mb-2">
              Especialistas em colchões e produtos para uma noite de sono perfeita.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="text-gray-300 space-y-2">
              <p>📍 Av. Júlia Kubitschek, Nº 64</p>
              <p>Jardim Flamboyant, Cabo Frio - RJ</p>
              <p>📱 WhatsApp: (22) 99241-0112</p>
              <p>📱 Instagram: @castorcabofrio</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
            <div className="text-gray-300 space-y-2">
              <a href="#catalog" className="block hover:text-white transition-colors">Catálogo</a>
              <a href="https://g.co/kgs/AJb6386" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">Google Maps</a>
              <a href="https://wa.me/5522992410112" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">WhatsApp</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Loja Castor Cabo Frio. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
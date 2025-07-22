export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">Loja Castor Cabo Frio</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-blue-200 transition-colors">Início</a>
            <a href="#catalog" className="hover:text-blue-200 transition-colors">Catálogo</a>
            <a href="#about" className="hover:text-blue-200 transition-colors">Sobre</a>
            <a href="#contact" className="hover:text-blue-200 transition-colors">Contato</a>
          </nav>
          <div className="flex items-center">
            <a 
              href="https://wa.me/5522992410112" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
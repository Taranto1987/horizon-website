import ProductGrid from '@/components/ProductGrid'
import SalesBot from '@/components/SalesBot'
import BiotipoCalculator from '@/components/BiotipoCalculator'

export default function Home() {
  return (
    <main className="min-h-screen bg-castor-cream">
      <header className="bg-castor-brown text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center">
            Loja Castor Cabo Frio
          </h1>
          <p className="text-center mt-2 text-castor-gold">
            Qualidade e tradição há anos servindo Cabo Frio e região
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-castor-brown mb-6 text-center">
            Nossos Produtos
          </h2>
          <ProductGrid />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-castor-brown mb-6 text-center">
            Calculadora de Biotipo
          </h2>
          <BiotipoCalculator />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-castor-brown mb-6 text-center">
            Atendimento Online
          </h2>
          <SalesBot />
        </section>
      </div>

      <footer className="bg-castor-brown text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Loja Castor Cabo Frio. Todos os direitos reservados.</p>
          <p className="mt-2 text-castor-gold">
            Cabo Frio - RJ | WhatsApp: (22) 99999-9999
          </p>
        </div>
      </footer>
    </main>
  )
}
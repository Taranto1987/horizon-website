import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Catalog from '@/components/Catalog'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Catalog />
      <Footer />
    </main>
  )
}
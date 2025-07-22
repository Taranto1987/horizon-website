import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/layout/Layout';
import { SEOHead } from './components/ui/SEOHead';
import { HeroSection } from './components/ui/HeroSection';
import { ProductsSection } from './components/ui/ProductsSection';
import { AboutSection } from './components/ui/AboutSection';
import { ContactSection } from './components/ui/ContactSection';
import './index.css';

function App() {
  return (
    <HelmetProvider>
      <SEOHead />
      <Layout>
        <HeroSection />
        <ProductsSection />
        <AboutSection />
        <ContactSection />
      </Layout>
    </HelmetProvider>
  );
}

export default App;

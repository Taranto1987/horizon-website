import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/components/ui/use-toast';
import {
  Bot,
  Brain,
  Home,
  Bed,
  Pill as Pillow,
  Box,
  Package,
  PlusCircle,
  MessageSquare as MessageSquareText,
  Mail,
  Info
} from 'lucide-react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import BiotipoCalculator from '@/components/BiotipoCalculator';
import SalesBot from '@/components/SalesBot';
import Footer from '@/components/Footer';
import ProductPage from '@/pages/ProductPage';
import ReviewsSection from '@/components/ReviewsSection';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [showBot, setShowBot] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [calculatorResultData, setCalculatorResultData] = useState(null);

  useEffect(() => {
    const loadPrices = () => {
      toast({
        title: "🔄 Preços Atualizados!",
        description: "Conectado à API oficial Loja Castor - preços em tempo real",
        duration: 3000,
      });
    };
    const timer = setTimeout(loadPrices, 2000);
    return () => clearTimeout(timer);
  }, []);

  const navigateTo = (pageId, product = null) => {
    setCurrentPage(pageId);
    setSelectedProduct(product);
    setCalculatorResultData(null); 
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handleCalculatorResult = (result) => {
    setCalculatorResultData(result);
  };


  const renderPage = () => {
    if (selectedProduct && currentPage.startsWith('produto-')) {
      return <ProductPage product={selectedProduct} onBack={() => navigateTo('produtos')} />;
    }
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero onOpenCalculator={() => { setShowCalculator(true); setCurrentPage('mapa-do-sono'); }} onNavigate={navigateTo} />
            <ReviewsSection />
          </>
        );
      case 'produtos':
        return <ProductGrid onProductSelect={(product) => navigateTo(`produto-${product.id}`, product)} />;
      case 'mapa-do-sono':
        return (
          <section id="calculadora-page" className="py-20 container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                Mapa do Sono IA Castor
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Responda algumas perguntas e nossa Inteligência Artificial montará seu Mapa do Sono Ideal com o colchão Castor perfeito.
              </p>
            </motion.div>
            <div className="max-w-4xl mx-auto">
              <BiotipoCalculator onResult={handleCalculatorResult} 
                onClose={() => { setShowCalculator(false); if(currentPage === 'mapa-do-sono' && !calculatorResultData) navigateTo('home');}}
                onProductSelect={(product) => {
                  setShowCalculator(false);
                  navigateTo(`produto-${product.id}`, product);
                }}
              />
            </div>
          </section>
        );
      case 'guru-thalleszzz':
        return <SalesBot onClose={() => setShowBot(false)} />;
      case 'contato':
        return (
          <section id="contato-page" className="py-20 container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Contato</h1>
              <p className="text-lg text-muted-foreground">Entre em contato conosco para mais informações sobre nossos colchões Castor.</p>
            </div>
          </section>
        );
      case 'sobre-a-loja':
        return (
          <section id="sobre-page" className="py-20 container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Sobre a Loja</h1>
              <p className="text-lg text-muted-foreground">Sua loja exclusiva Castor em Cabo Frio, especialista em saúde do sono e da coluna.</p>
            </div>
          </section>
        );
      default:
        return <Hero onOpenCalculator={() => { setShowCalculator(true); setCurrentPage('mapa-do-sono'); }} onNavigate={navigateTo} />;
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'produtos', label: 'Produtos', icon: Bed },
    { id: 'mapa-do-sono', label: 'Mapa do Sono', icon: Brain },
    { id: 'guru-thalleszzz', label: 'Guru ThallesZzz', icon: MessageSquareText },
    { id: 'contato', label: 'Contato', icon: Mail },
    { id: 'sobre-a-loja', label: 'Sobre a Loja', icon: Info },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header 
        navItems={navItems}
        activePage={currentPage}
        onNavigate={navigateTo}
        onOpenBot={() => { setShowBot(true); setCurrentPage('guru-thalleszzz'); }}
        onOpenCalculator={() => { setShowCalculator(true); setCurrentPage('mapa-do-sono'); }}
      />
      
      <main className="relative pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />

      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
        onClick={() => { setShowBot(true); setCurrentPage('thalles-zzz'); }}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-primary to-primary-accent rounded-full flex items-center justify-center shadow-2xl pulse-glow-castor z-50 hover:scale-110 transition-transform"
        aria-label="Abrir chat com assistente virtual"
      >
        <Bot className="w-8 h-8 text-primary-foreground" />
      </motion.button>

      <AnimatePresence>
        {showBot && currentPage === 'thalles-zzz' && (
          <SalesBot onClose={() => { setShowBot(false); navigateTo('home'); }} />
        )}
        {showCalculator && currentPage === 'calculadora' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
            onClick={() => { setShowCalculator(false); if(currentPage === 'calculadora' && !calculatorResultData) navigateTo('home');}}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-card rounded-2xl p-6 md:p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto glass-effect-castor"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold gradient-text">Mapa do Sono IA Castor</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => { setShowCalculator(false); if(currentPage === 'calculadora' && !calculatorResultData) navigateTo('home');}}
                  className="text-muted-foreground hover:text-foreground"
                  aria-label="Fechar Calculadora do Sono Ideal"
                >
                  ✕
                </Button>
              </div>
              <BiotipoCalculator 
                onResult={handleCalculatorResult} 
                onClose={() => { setShowCalculator(false); if(currentPage === 'calculadora' && !calculatorResultData) navigateTo('home');}}
                onProductSelect={(product) => {
                  setShowCalculator(false);
                  navigateTo(`produto-${product.id}`, product);
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Toaster />
    </div>
  );
};

export default App;



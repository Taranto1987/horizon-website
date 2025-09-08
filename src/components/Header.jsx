import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Menu, X, Sparkles, Bot as BotIcon, Brain as BrainIcon,
  Bed, Home, Pillow, Box, Package, PlusCircle, MessageSquareText
} from 'lucide-react';

const Header = ({ navItems, activePage, onNavigate, onOpenBot, onOpenCalculator }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (pageId) => {
    onNavigate(pageId);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'glass-effect-castor shadow-2xl bg-card/80' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer"
            aria-label="Página Inicial Castor Cabo Frio"
          >
            <div className="castorzinho-icon bg-gradient-to-r from-primary to-primary-accent rounded-xl">
              <Sparkles className="text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold gradient-text">Castor</h1>
              <p className="text-xs text-muted-foreground">Cabo Frio</p>
            </div>
          </motion.div>

          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary ${
                  activePage === item.id ? 'text-primary' : 'text-foreground/80'
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={onOpenCalculator}
              className="text-foreground/80 hover:text-primary"
            >
              <BrainIcon className="w-4 h-4 mr-2" />
              Mapa do Sono IA
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onOpenBot}
              className="text-foreground/80 hover:text-primary"
            >
              <BotIcon className="w-4 h-4 mr-2" />
              Guru ThallesZzz
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-foreground/80"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border py-4"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-3 text-left py-3 px-3 rounded-md text-base font-medium transition-colors hover:bg-primary/10 hover:text-primary ${
                    activePage === item.id ? 'text-primary bg-primary/10' : 'text-foreground/90'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </button>
              ))}
              <div className="flex gap-2 pt-3 px-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => { onOpenCalculator(); setIsMobileMenuOpen(false); }}
                  className="flex-1 button-castor-outline"
                >
                  <BrainIcon className="w-4 h-4 mr-2" />
                  Mapa do Sono IA
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => { onOpenBot(); setIsMobileMenuOpen(false); }}
                  className="flex-1 button-castor-outline"
                >
                  <BotIcon className="w-4 h-4 mr-2" />
                  Guru ThallesZzz
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;



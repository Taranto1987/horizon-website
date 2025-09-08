import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail, Instagram, Facebook, Sparkles, Youtube, Brain } from 'lucide-react'; 
import { MessageSquare as WhatsAppIcon } from 'lucide-react';


const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "5522992410112"; // Número atualizado
  const whatsappMessage = "Olá! Gostaria de mais informações sobre os colchões Castor.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const storeAddress = "Avenida Júlia Kubitschek, 64, Cabo Frio, RJ";
  const googleMapsLink = `https://maps.google.com/?q=${encodeURIComponent(storeAddress)}`;
  const storePhoneNumber = "(22) 99241-0112"; // Número atualizado
  const storeEmail = "contato@lojacastorcabofrio.com.br";


  return (
    <footer className="bg-card border-t border-border/70">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-1 lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-accent rounded-xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <span className="text-2xl font-bold gradient-text">Castor</span>
                <p className="text-sm text-muted-foreground">Cabo Frio</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-5">
              Sua loja exclusiva Castor em Cabo Frio. Especialistas em saúde do sono e da coluna, oferecendo colchões com tecnologia de ponta. Contato Thalles: (22) 99241-0112.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: "https://instagram.com/castorcabofrio", label: "Instagram Castor Cabo Frio" },
                { icon: Facebook, href: "https://facebook.com/castorcabofrio", label: "Facebook Castor Cabo Frio" },
                { icon: Youtube, href: "https://youtube.com/colchoescastoroficial", label: "Youtube Oficial Colchões Castor" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 bg-secondary rounded-full flex items-center justify-center hover:bg-primary/20 transition-all duration-200 hover:scale-110 group"
                >
                  <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-lg font-semibold text-foreground mb-5 block">Navegação Rápida</span>
            <div className="space-y-2.5">
              {[
                'Home',
                'Produtos',
                'Mapa do Sono',
                'Guru ThallesZzz',
                'Contato',
                'Sobre a Loja'
              ].map(item => (
                <p key={item} className="text-muted-foreground text-sm hover:text-primary cursor-pointer transition-colors hover:translate-x-1 duration-200">{item}</p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-lg font-semibold text-foreground mb-5 block">Fale Conosco</span>
            <div className="space-y-3.5">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <a href={googleMapsLink} target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm hover:text-primary transition-colors">{storeAddress}</a>
              </div>
              <a href={`tel:${storePhoneNumber.replace(/\D/g, '')}`} className="flex items-center gap-3 group">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm group-hover:text-primary transition-colors">{storePhoneNumber} (Thalles)</span>
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                <WhatsAppIcon className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm group-hover:text-primary transition-colors">WhatsApp Direto</span>
              </a>
              <a href={`mailto:${storeEmail}`} className="flex items-center gap-3 group">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm group-hover:text-primary transition-colors">{storeEmail}</span>
              </a>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">Seg-Sex: 9h-19h | Sáb: 9h-15h</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="text-lg font-semibold text-foreground mb-5 block">Onde Estamos</span>
            <div className="aspect-video w-full rounded-lg overflow-hidden border border-border shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3701.3094890000003!2d-42.0298099!3d-22.888775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x97b1029e0a0a0a%3A0x2a0a0a0a0a0a0a0a!2sAvenida%20J%C3%BAlia%20Kubitschek%2C%2064%2C%20Cabo%20Frio%2C%20RJ!5e0!3m2!1spt-BR!2sbr!4v1678901234567!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Loja Castor Cabo Frio"
              ></iframe>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="text-lg font-semibold text-foreground mb-5 block">Informações</span>
            <div className="space-y-2.5">
              [
                'Sobre Nós',
                'Política de Privacidade',
                'Termos de Uso',
                'Garantia Castor'
              ].map(item => (
                <p key={item} className="text-muted-foreground text-sm hover:text-primary cursor-pointer transition-colors hover:translate-x-1 duration-200">{item}</p>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-border/70 mt-8 pt-8 text-center"
        >
          <p className="text-muted-foreground/70 text-sm">
            © {currentYear} Exclusiva Castor Cabo Frio. Todos os direitos reservados.
          </p>
          <p className="text-muted-foreground/50 text-xs mt-1">
            Desenvolvido com <Sparkles className="inline w-3 h-3 text-primary/70" /> por Thalles Taranto.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;



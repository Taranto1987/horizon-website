import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, Instagram, Facebook, Youtube } from 'lucide-react';

const Contato = () => {
  const pageTitle = "Entre em Contato Conosco";
  const pageDescription = "Tem dúvidas, sugestões ou quer saber mais sobre os colchões Castor? Nossa equipe em Cabo Frio, liderada por Thalles, está pronta para te atender!";
  
  const whatsappNumber = "552299241012"; // Thalles WhatsApp
  const whatsappMessage = "Olá, Thalles! Gostaria de mais informações sobre os colchões Castor.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const storeAddress = "Avenida Júlia Kubitschek, 64, Cabo Frio, RJ";
  const googleMapsLink = `https://maps.google.com/?q=${encodeURIComponent(storeAddress)}`;
  const storePhoneNumber = "(22) 99241-012"; // Thalles
  const storeEmail = "contato@lojacastorcabofrio.com.br";


  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    toast({
      title: "📧 Mensagem Enviada!",
      description: "Obrigado pelo seu contato, Thalles ou nossa equipe responderá em breve.",
    });
    setFormData({ nome: '', email: '', telefone: '', assunto: '', mensagem: '' });
  };

  const contactInfo = [
    { icon: Phone, text: `${storePhoneNumber} (Thalles)`, href: `tel:${storePhoneNumber.replace(/\D/g, '')}`, label: "Telefone" },
    { icon: Mail, text: storeEmail, href: `mailto:${storeEmail}`, label: "Email" },
    { icon: MapPin, text: storeAddress, href: googleMapsLink, label: "Endereço" },
    { icon: Clock, text: "Seg-Sex: 9h-19h | Sáb: 9h-15h", label: "Horário" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/castorcabofrio", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com/castorcabofrio", label: "Facebook" },
    { icon: Youtube, href: "https://youtube.com/colchoescastoroficial", label: "Youtube" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-12 md:py-16"
    >
      <header className="text-center mb-12 md:mb-16">
        <motion.h1 
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold gradient-text mb-4"
        >
          {pageTitle}
        </motion.h1>
        <motion.p 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
        >
          {pageDescription}
        </motion.p>
      </header>

      <div className="grid lg:grid-cols-2 gap-10 md:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-effect-castor p-6 md:p-8 rounded-2xl shadow-xl"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">Nossos Canais</h2>
          <div className="space-y-5 mb-8">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <item.icon className="w-5 h-5 md:w-6 md:h-6 text-primary mt-1 flex-shrink-0" />
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm md:text-base">
                    <span className="font-medium text-foreground/90">{item.label}:</span> {item.text}
                  </a>
                ) : (
                  <p className="text-muted-foreground text-sm md:text-base"><span className="font-medium text-foreground/90">{item.label}:</span> {item.text}</p>
                )}
              </div>
            ))}
          </div>
          
          <Button 
            onClick={() => window.open(whatsappLink, '_blank')}
            className="w-full button-castor-accent py-3 text-base font-semibold mb-6 shadow-lg"
          >
            <MessageSquare className="w-5 h-5 mr-2" /> Falar com Thalles pelo WhatsApp
          </Button>

          <h3 className="text-xl font-semibold text-foreground mb-3">Siga-nos nas Redes</h3>
          <div className="flex gap-4">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 bg-secondary/70 rounded-full flex items-center justify-center hover:bg-primary/20 transition-all duration-200 hover:scale-110 group"
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-effect-castor p-6 md:p-8 rounded-2xl shadow-xl"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">Envie uma Mensagem</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="nome" className="block text-sm font-medium text-muted-foreground mb-1">Nome Completo</label>
              <input type="text" name="nome" id="nome" value={formData.nome} onChange={handleChange} required className="w-full p-3 rounded-lg bg-secondary/80 border border-border text-foreground focus:ring-1 focus:ring-primary outline-none" />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">E-mail</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="w-full p-3 rounded-lg bg-secondary/80 border border-border text-foreground focus:ring-1 focus:ring-primary outline-none" />
              </div>
              <div>
                <label htmlFor="telefone" className="block text-sm font-medium text-muted-foreground mb-1">Telefone (Opcional)</label>
                <input type="tel" name="telefone" id="telefone" value={formData.telefone} onChange={handleChange} className="w-full p-3 rounded-lg bg-secondary/80 border border-border text-foreground focus:ring-1 focus:ring-primary outline-none" />
              </div>
            </div>
            <div>
              <label htmlFor="assunto" className="block text-sm font-medium text-muted-foreground mb-1">Assunto</label>
              <input type="text" name="assunto" id="assunto" value={formData.assunto} onChange={handleChange} required className="w-full p-3 rounded-lg bg-secondary/80 border border-border text-foreground focus:ring-1 focus:ring-primary outline-none" />
            </div>
            <div>
              <label htmlFor="mensagem" className="block text-sm font-medium text-muted-foreground mb-1">Sua Mensagem</label>
              <textarea name="mensagem" id="mensagem" rows="4" value={formData.mensagem} onChange={handleChange} required className="w-full p-3 rounded-lg bg-secondary/80 border border-border text-foreground focus:ring-1 focus:ring-primary outline-none"></textarea>
            </div>
            <Button type="submit" disabled={isSubmitting} className="w-full button-castor-primary py-3 text-base font-semibold shadow-lg disabled:opacity-70">
              {isSubmitting ? 'Enviando...' : (<><Send className="w-5 h-5 mr-2" /> Enviar Mensagem</>)}
            </Button>
          </form>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-16 md:mt-20"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground text-center mb-6">Localização da Loja</h2>
        <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/30">
          <iframe 
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0!2d0!3d0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${encodeURIComponent(storeAddress)}!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr&q=${encodeURIComponent(storeAddress)}`}
            width="100%" 
            height="100%" 
            style={{ border:0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa da Loja Castor Cabo Frio"
          ></iframe>
        </div>
      </motion.div>

    </motion.div>
  );
};

export default Contato;
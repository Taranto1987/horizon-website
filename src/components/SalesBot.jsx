import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Send, X, ShoppingCart, Calculator, Phone, Gift, Bed, Pill as Pillow, Box } from 'lucide-react';
import ThallesAvatar from '@/assets/images/thalles_avatar.png'; // Importando a imagem do avatar

const SalesBot = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    setTimeout(() => {
      addBotMessage("👋 Olá! Sou o Guru do Sono Castor Cabo Frio, pronto para guiá-lo(a) ao colchão ideal! Temos ofertas exclusivas e unidades limitadas esperando por você – como posso te ajudar a transformar seu sono hoje?", [
        { text: "🛏️ Ver Colchões", action: "show_colchoes" },
        { text: "📦 Ver Camas Box", action: "show_camas_box" },
        { text: "✨ Ver Conjuntos Box", action: "show_conjuntos" },
        { text: "🛋️ Ver Acessórios (Capas, Travesseiros)", action: "show_acessorios"},
        { text: "🧮 Calcular biotipo ideal", action: "calculator" },
        { text: "🌙 Saiba sobre Sono REM", action: "sono_rem_info" },
        { text: "💰 Ofertas especiais", action: "offers" },
        { text: "📞 Falar com vendedor", action: "contact" }
      ]);
    }, 1000);
  }, []);

  const addBotMessage = (text, quickReplies = []) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now(),
        text,
        sender: 'bot',
        quickReplies,
        timestamp: new Date()
      }]);
      setIsTyping(false);
    }, 1500);
  };

  const addUserMessage = (text) => {
    setMessages(prev => [...prev, {
      id: Date.now(),
      text,
      sender: 'user',
      timestamp: new Date()
    }]);
  };

  const handleQuickReply = (action, text) => {
    addUserMessage(text);
    handleBotResponse(action);
  };

  const showProductCategory = (categoryName, products) => {
    let messageText = `🌟 Aqui estão alguns dos nossos ${categoryName} Castor:\n\n`;
    products.forEach(p => {
      messageText += `🔸 ${p.name} - R$ ${p.price.toLocaleString('pt-BR', {minimumFractionDigits: 2})}\n`;
    });
    messageText += "\nQual deles te interessa mais ou quer ver outra categoria?";
    
    const quickReplies = products.map(p => ({ text: `Detalhes: ${p.name}`, action: `details_${p.id}`}));
    quickReplies.push({ text: "⬅️ Voltar ao menu", action: "main_menu" });

    addBotMessage(messageText, quickReplies);
  }

  const handleBotResponse = (action) => {
    if (action.includes('ortobom')) {
        addBotMessage("Trabalhamos exclusivamente com produtos Castor! 😊 Posso te mostrar nossos modelos Castor?", [
            { text: "Sim, mostre os Castor!", action: "products" }
        ]);
        return;
    }

    switch (action) {
      case 'main_menu':
        addBotMessage("Como posso te ajudar agora?", [
            { text: "🛏️ Ver Colchões", action: "show_colchoes" },
            { text: "📦 Ver Camas Box", action: "show_camas_box" },
            { text: "✨ Ver Conjuntos Box", action: "show_conjuntos" },
            { text: "🛋️ Ver Acessórios", action: "show_acessorios"},
            { text: "🧮 Calcular biotipo", action: "calculator" },
            { text: "🌙 Saiba sobre Sono REM", action: "sono_rem_info" },
        ]);
        break;
      case 'sono_rem_info':
        addBotMessage("🌙 **SONO REM - A CHAVE PARA UMA VIDA MELHOR**\n\n✨ O sono REM (Rapid Eye Movement) é a fase mais importante do seu descanso! É quando:\n\n🧠 Seu cérebro consolida memórias\n💪 Seu corpo se regenera completamente\n🎯 Sua criatividade e foco se renovam\n❤️ Seu sistema imunológico se fortalece\n\n⚠️ **ATENÇÃO:** Um colchão inadequado pode DESTRUIR seu sono REM, causando:\n❌ Insônia e cansaço crônico\n❌ Dores nas costas e pescoço\n❌ Baixa produtividade\n❌ Envelhecimento precoce\n\n🎯 **A SOLUÇÃO CASTOR:**\nNossos colchões são cientificamente desenvolvidos para MAXIMIZAR seu sono REM! Tecnologia que garante o alinhamento perfeito da coluna e conforto ideal.\n\n💎 **RESULTADO:** Você acorda renovado, com mais energia e disposição para conquistar seus objetivos!", [
          { text: "🛏️ Quero o colchão ideal para meu sono REM", action: "calculator" },
          { text: "💰 Ver ofertas especiais Castor", action: "offers" },
          { text: "📞 Falar com especialista", action: "contact" }
        ]);
        break;
      case 'show_colchoes':
        showProductCategory("Colchões", [
            {id: 1, name: 'Colchão Castor Bonnel Class', price: 999.90},
            {id: 5, name: 'Colchão Castor Vitagel Pocket', price: 1899.90},
            {id: 8, name: 'Colchão Castor Gold Star Vitagel', price: 2199.90},
        ]);
        break;
      case 'show_camas_box':
         showProductCategory("Camas Box", [
            {id: 3, name: 'Cama Box Baú Castor Híbrido', price: 1499.90},
        ]);
        break;
      case 'show_conjuntos':
         showProductCategory("Conjuntos Box", [
            {id: 2, name: 'Conjunto Box Castor Sleep Max Pocket', price: 2399.90},
            {id: 7, name: 'Conjunto Box Castor Black & White Látex', price: 3499.90},
        ]);
        break;
      case 'show_acessorios':
        showProductCategory("Acessórios", [
            {id: 4, name: 'Travesseiro Castor Viscoelástico NASA', price: 159.90},
            {id: 6, name: 'Capa Protetora Impermeável Castor', price: 89.90},
        ]);
        break;
      case 'calculator':
        addBotMessage("🧮 Ótimo! Nossa calculadora de biotipo vai te ajudar a encontrar o colchão Castor perfeito. Quer abrir agora?", [
          { text: "✅ Sim, abrir calculadora", action: "open_calculator" },
          { text: "❓ Como funciona?", action: "explain_calculator" }
        ]);
        break;
      case 'offers':
        addBotMessage("🔥 **OFERTAS EXCLUSIVAS CASTOR - ÚLTIMAS UNIDADES!** 🔥\n\n⚡ **PROMOÇÃO RELÂMPAGO:**\n💥 Colchão Bonnel Class: R$ 999,90 (era R$ 1.299,90) - ECONOMIZE R$ 300!\n💥 Conjunto Sleep Max: R$ 2.399,90 (era R$ 2.999,90) - ECONOMIZE R$ 600!\n\n🎁 **BÔNUS EXCLUSIVO HOJE:**\n✅ Travesseiro Castor GRÁTIS (valor R$ 159,90)\n✅ Entrega e montagem GRATUITA\n✅ Garantia estendida de 10 anos\n\n💳 **FACILITE SEU PAGAMENTO:**\n🚀 Parcelamos em até 12x SEM JUROS no cartão\n💰 10% de desconto à vista no PIX\n\n⏰ **ATENÇÃO:** Oferta válida apenas HOJE! Não perca essa oportunidade única!", [
          { text: "🛒 QUERO APROVEITAR AGORA!", action: "buy_now" },
          { text: "📋 Ver mais produtos", action: "show_colchoes" },
          { text: "📞 Falar com vendedor", action: "contact" }
        ]);
        break;
      case 'contact':
        addBotMessage("📞 **FALE COM NOSSOS ESPECIALISTAS CASTOR AGORA!**\n\n👨‍💼 **Thalles Taranto - Consultor Especialista:**\n📱 WhatsApp: (22) 99241-0112\n📞 Telefone: (22) 99241-0112\n\n👩‍💼 **Marcela - Atendimento Especializado:**\n📞 Fixo: (22) 3343-7720\n📱 Celular: (22) 98844-7240\n\n🏪 **Nossa Loja:**\n📍 Avenida Júlia Kubitschek, 64, Cabo Frio, RJ\n⏰ Seg-Sex: 9h-19h | Sáb: 9h-15h\n\n🎯 **DICA:** Fale conosco AGORA e garanta as melhores condições!", [
          { text: "📱 WhatsApp Thalles", action: "whatsapp_thalles" },
          { text: "📞 Ligar Marcela", action: "call_marcela" },
          { text: "🗺️ Ver localização", action: "location" }
        ]);
        break;
      case 'open_calculator':
        toast({
          title: "🧮 Abrindo Calculadora",
          description: "Você será redirecionado para nossa calculadora de biotipo Castor.",
          duration: 3000,
        });
        setTimeout(() => {
          onClose();
        }, 2000);
        break;
      case 'buy_now':
         addBotMessage("🚀 **EXCELENTE DECISÃO! VOCÊ ESTÁ A UM PASSO DO MELHOR SONO DA SUA VIDA!** 🚀\n\n🎯 **PARA GARANTIR SUA COMPRA CASTOR:**\n\n1️⃣ **Escolha seu produto ideal** (nossos especialistas te ajudam)\n2️⃣ **Confirme o tamanho** (Solteiro, Casal, Queen, King)\n3️⃣ **Defina a forma de pagamento** (até 12x sem juros!)\n\n💎 **VANTAGENS EXCLUSIVAS CASTOR:**\n✅ Entrega e montagem GRATUITA em toda Região dos Lagos\n✅ Garantia oficial Castor de 10 anos\n✅ Troca grátis em 30 dias se não se adaptar\n✅ Suporte técnico especializado\n\n🎁 **BÔNUS ESPECIAL HOJE:**\n🌟 Travesseiro Castor viscoelástico GRÁTIS (R$ 159,90)\n🌟 Capa protetora impermeável GRÁTIS (R$ 89,90)\n\n⚡ **AÇÃO LIMITADA:** Apenas 3 unidades restantes com esses bônus!", [
            { text: "🛍️ ESCOLHER MEU COLCHÃO AGORA", action: "show_colchoes" },
            { text: "📞 FALAR COM ESPECIALISTA", action: "contact" },
            { text: "🧮 CALCULAR COLCHÃO IDEAL", action: "calculator" }
          ]);
        break;
      default:
        if (action.startsWith('details_')) {
            const productId = parseInt(action.split('_')[1]);
            const productMap = {
                1: {name: 'Colchão Castor Bonnel Class', price: 999.90, features: ['Molas Bonnel', 'Nível Firme', 'Antiácaro'], sizes: ['Solteiro', 'Casal']},
                2: {name: 'Conjunto Box Castor Sleep Max Pocket', price: 2399.90, features: ['Molas Pocket', 'Pillow Top Duplo', 'Malha'], sizes: ['Casal', 'Queen', 'King']},
                3: {name: 'Cama Box Baú Castor Híbrido', price: 1499.90, features: ['Amplo Espaço', 'Pistões a Gás', 'Reforçada'], sizes: ['Solteiro', 'Casal', 'Queen']},
                4: {name: 'Travesseiro Castor Viscoelástico NASA', price: 159.90, features: ['Viscoelástico', 'Automoldável', 'Capa Removível'], sizes: ['Padrão']},
                5: {name: 'Colchão Castor Vitagel Pocket', price: 1899.90, features: ['Gel Infused', 'Molas Pocket', 'Conforto Térmico'], sizes: ['Casal', 'Queen', 'King']},
                6: {name: 'Capa Protetora Impermeável Castor', price: 89.90, features: ['Impermeável', 'Respirável', 'Antiácaro'], sizes: ['Solteiro', 'Casal', 'Queen', 'King']},
                7: {name: 'Conjunto Box Castor Black & White Látex', price: 3499.90, features: ['Látex Natural', 'Molas Pocket', 'Design Moderno'], sizes: ['Queen', 'King']},
                8: {name: 'Colchão Castor Gold Star Vitagel', price: 2199.90, features: ['Vitagel', 'Molas Pocket', 'Pillow Top Alto'], sizes: ['Casal']},
            };
            const product = productMap[productId];
            if (product) {
                addBotMessage(`✨ Detalhes do ${product.name}:\n\nPreço: R$ ${product.price.toLocaleString('pt-BR', {minimumFractionDigits: 2})}\nCaracterísticas: ${product.features.join(', ')}\nTamanhos disponíveis: ${product.sizes.join(', ')}\n\nO que deseja fazer?`, [
                    { text: `🛒 Adicionar ${product.name} ao carrinho`, action: `add_cart_${productId}`},
                    { text: "📏 Ver outros tamanhos", action: `sizes_${productId}`},
                    { text: "⬅️ Voltar ao menu", action: "main_menu" },
                ]);
            } else {
                 addBotMessage("Desculpe, não encontrei detalhes para este produto. 😕", [{ text: "⬅️ Voltar ao menu", action: "main_menu" }]);
            }

        } else if (action.startsWith('add_cart_')) {
            const productId = parseInt(action.split('_')[1]);
             toast({ title: "🛒 Adicionado!", description: `Produto ${productId} adicionado ao carrinho.`, duration: 2000 });
             addBotMessage("Produto adicionado ao carrinho! 🎉 Deseja finalizar a compra ou ver mais produtos Castor?", [
                { text: "🛍️ Finalizar Compra", action: "checkout_not_implemented" },
                { text: "🎁 Ver mais produtos", action: "show_colchoes" }
            ]);

        } else if (action === 'whatsapp_thalles') {
            const whatsappLink = "https://wa.me/5522992410112?text=" + encodeURIComponent("Olá Thalles! Vim do site da Castor e gostaria de saber mais sobre os colchões. Pode me ajudar?");
            window.open(whatsappLink, '_blank');
            addBotMessage("📱 Redirecionando para o WhatsApp do Thalles! Ele é nosso especialista e vai te dar as melhores condições! 🎯", [
                { text: "⬅️ Voltar ao menu", action: "main_menu" }
            ]);

        } else if (action === 'call_marcela') {
            window.open("tel:+552233437720", '_self');
            addBotMessage("📞 Ligando para a Marcela! Ela vai te atender com todo carinho e expertise Castor! 💎", [
                { text: "⬅️ Voltar ao menu", action: "main_menu" }
            ]);

        } else if (action === 'location') {
            const mapsLink = "https://maps.google.com/?q=" + encodeURIComponent("Avenida Júlia Kubitschek, 64, Cabo Frio, RJ");
            window.open(mapsLink, '_blank');
            addBotMessage("🗺️ Abrindo localização da nossa loja! Venha nos visitar e teste nossos colchões Castor pessoalmente! 🏪", [
                { text: "⬅️ Voltar ao menu", action: "main_menu" }
            ]);

        } else {
             addBotMessage("Desculpe, não entendi. 😕 Posso te ajudar com os produtos Castor, calculadora de biotipo, informações sobre sono REM ou ofertas?", [
                { text: "🛏️ Ver produtos Castor", action: "show_colchoes" },
                { text: "🧮 Calcular biotipo", action: "calculator" },
                { text: "🌙 Saiba sobre Sono REM", action: "sono_rem_info" }
            ]);
        }
    }
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    addUserMessage(inputValue);
    
    setTimeout(() => {
      addBotMessage(`Entendi "${inputValue}"! Estou buscando as melhores opções Castor para você... 🎯`, [
        { text: "🛏️ Ver Colchões Castor", action: "show_colchoes" },
        { text: "✨ Ver Conjuntos Castor", action: "show_conjuntos" },
        { text: "💰 Ver ofertas Castor", action: "offers" }
      ]);
    }, 1000);
    setInputValue('');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-card rounded-2xl w-full max-w-md h-[70vh] max-h-[650px] flex flex-col overflow-hidden glass-effect-castor"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-r from-primary to-primary-accent p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center overflow-hidden">
              <img src={ThallesAvatar} alt="Thalles Avatar" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="font-semibold text-primary-foreground">Guru do Sono Rem ThallesZzz</h3>
              <p className="text-xs text-primary-foreground/80">Especialista em colchões Castor</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-primary-foreground hover:bg-primary-foreground/20"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[85%] ${
                  message.sender === 'user'
                    ? 'bg-primary text-primary-foreground rounded-2xl rounded-br-lg'
                    : 'bg-secondary text-secondary-foreground rounded-2xl rounded-bl-lg chat-bubble'
                } p-3 shadow-md`}>
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  
                  {message.quickReplies && message.quickReplies.length > 0 && (
                    <div className="mt-3 grid grid-cols-1 gap-2">
                      {message.quickReplies.map((reply, index) => (
                        <button
                          key={index}
                          onClick={() => handleQuickReply(reply.action, reply.text)}
                          className="block w-full text-left bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-lg px-3 py-2 text-sm text-primary transition-colors duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-accent"
                        >
                          {reply.text}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-start"
            >
              <div className="bg-secondary rounded-2xl rounded-bl-lg p-3 chat-bubble shadow-md">
                <div className="flex items-center gap-1.5">
                  <div className="typing-indicator"></div>
                  <div className="typing-indicator"></div>
                  <div className="typing-indicator"></div>
                </div>
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 border-t border-border bg-card/50">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Digite sua mensagem..."
              className="flex-1 bg-secondary border border-border rounded-lg px-4 py-2.5 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow duration-150"
            />
            <Button
              onClick={handleSendMessage}
              size="icon"
              className="button-castor-primary rounded-lg w-11 h-11 transition-transform duration-150 ease-in-out active:scale-95"
              aria-label="Enviar mensagem"
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SalesBot;


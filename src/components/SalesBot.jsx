import React, { useState, useEffect, useRef, useCallback } from 'react';
import { produtos } from '../data/produtos.ts';

export default function SalesBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [currentInput, setCurrentInput] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [userContext, setUserContext] = useState({
    name: '',
    city: '',
    productType: '',
    size: '',
    comfort: '',
    conversationStep: 'greeting'
  });
  
  const chatContainerRef = useRef(null);
  const recognitionRef = useRef(null);
  const synthRef = useRef(null);

  // Initialize speech recognition
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'pt-BR';
      
      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setCurrentInput(transcript);
        setIsListening(false);
      };
      
      recognitionRef.current.onerror = () => {
        setIsListening(false);
      };
      
      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }

    // Initialize speech synthesis
    if ('speechSynthesis' in window) {
      synthRef.current = window.speechSynthesis;
    }

    // Initial bot message
    if (isOpen && messages.length === 0) {
      const welcomeMessage = {
        id: Date.now(),
        text: "Olá! 👋 Sou o ThallesZzz, seu consultor especialista da Loja Castor Cabo Frio! Estou aqui para te ajudar a encontrar o calçado perfeito. Qual é o seu nome?",
        isBot: true,
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages([welcomeMessage]);
      speakText(welcomeMessage.text);
    }
  }, [isOpen]);

  const speakText = useCallback((text) => {
    if (synthRef.current && 'speechSynthesis' in window) {
      // Cancel any ongoing speech
      synthRef.current.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'pt-BR';
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.volume = 0.8;
      
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      
      synthRef.current.speak(utterance);
    }
  }, []);

  const scrollToBottom = useCallback(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      setIsListening(true);
      recognitionRef.current.start();
    }
  };

  const stopSpeaking = () => {
    if (synthRef.current) {
      synthRef.current.cancel();
      setIsSpeaking(false);
    }
  };

  const generateWhatsAppLink = (productName, size, price) => {
    const message = `Olá! Vim pelo site da Loja Castor Cabo Frio. Tenho interesse no ${productName}, tamanho ${size}, por ${price}. Gostaria de mais informações sobre disponibilidade e formas de pagamento.`;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/5522992410112?text=${encodedMessage}`;
  };

  const getRecommendation = (context) => {
    let filteredProducts = produtos.filter(produto => produto.inStock);
    
    if (context.productType) {
      filteredProducts = filteredProducts.filter(produto => 
        produto.category.toLowerCase().includes(context.productType.toLowerCase()) ||
        produto.name.toLowerCase().includes(context.productType.toLowerCase())
      );
    }
    
    if (context.size) {
      filteredProducts = filteredProducts.filter(produto => 
        produto.sizes.includes(context.size)
      );
    }
    
    if (context.comfort) {
      filteredProducts = filteredProducts.filter(produto => 
        produto.comfort.some(c => c.toLowerCase().includes(context.comfort.toLowerCase()))
      );
    }
    
    return filteredProducts.length > 0 ? filteredProducts[0] : null;
  };

  const generateBotResponse = (userMessage, context) => {
    const lowerMessage = userMessage.toLowerCase();
    
    switch (context.conversationStep) {
      case 'greeting':
        if (lowerMessage.length > 1) {
          const extractedName = userMessage.split(' ')[0];
          setUserContext(prev => ({ 
            ...prev, 
            name: extractedName,
            conversationStep: 'city'
          }));
          return `Prazer em conhecê-lo(a), ${extractedName}! 😊 Para oferecer o melhor atendimento e produtos ideais para a sua região, de qual cidade você é?`;
        }
        return "Por favor, me diga seu nome para eu poder atendê-lo(a) melhor!";
        
      case 'city':
        setUserContext(prev => ({ 
          ...prev, 
          city: userMessage,
          conversationStep: 'product_type'
        }));
        return `Perfeito, ${context.name}! Cabo Frio e região são nosso forte! 🏖️ Agora me diga: que tipo de calçado você está procurando? Temos sapatos sociais, tênis, sandálias, botas, sapatênis, chinelos e mocassins. Qual desperta seu interesse?`;
        
      case 'product_type':
        setUserContext(prev => ({ 
          ...prev, 
          productType: userMessage,
          conversationStep: 'size'
        }));
        return `Excelente escolha! ${userMessage} é uma das nossas especialidades. 👟 Qual é o seu número do calçado? Temos tamanhos variados em estoque.`;
        
      case 'size':
        setUserContext(prev => ({ 
          ...prev, 
          size: userMessage,
          conversationStep: 'comfort'
        }));
        return `Tamanho ${userMessage} anotado! 📏 Agora me conte: que tipo de conforto é mais importante para você? Por exemplo: amortecimento, palmilha anatômica, solado antiderrapante, memory foam, ou algo específico?`;
        
      case 'comfort':
        const updatedContext = { 
          ...context, 
          comfort: userMessage,
          conversationStep: 'recommendation'
        };
        setUserContext(updatedContext);
        
        const recommendation = getRecommendation(updatedContext);
        
        if (recommendation) {
          const whatsappLink = generateWhatsAppLink(recommendation.name, updatedContext.size, recommendation.price);
          
          setUserContext(prev => ({ ...prev, conversationStep: 'upsell' }));
          
          return `🎯 PERFEITO! Encontrei o produto ideal para você!\n\n` +
                 `🔥 **${recommendation.name}**\n` +
                 `💰 **${recommendation.price}**\n` +
                 `📏 **Tamanho: ${updatedContext.size}**\n\n` +
                 `✨ **Benefícios exclusivos:**\n${recommendation.benefits.map(b => `• ${b}`).join('\n')}\n\n` +
                 `🏆 **Ideal para:**\n${recommendation.usage.map(u => `• ${u}`).join('\n')}\n\n` +
                 `🎯 **Tecnologias de conforto:**\n${recommendation.comfort.map(c => `• ${c}`).join('\n')}\n\n` +
                 `🚀 **OFERTA ESPECIAL**: Garantimos o melhor preço de Cabo Frio!\n\n` +
                 `💬 **CLIQUE AQUI PARA FINALIZAR:** [GARANTIR MEU CALÇADO](${whatsappLink})\n\n` +
                 `✅ Entrega rápida • ✅ Garantia total • ✅ Melhor preço da região`;
        } else {
          return `${context.name}, vou verificar nossas opções especiais para você! Entre em contato direto pelo WhatsApp (22) 99241-0112 para consultarmos nosso estoque completo e encontrarmos exatamente o que precisa! 📞`;
        }
        
      case 'upsell':
        const upsellProducts = produtos.filter(p => 
          p.inStock && 
          p.category !== context.productType &&
          p.sizes.includes(context.size)
        ).slice(0, 2);
        
        if (upsellProducts.length > 0) {
          setUserContext(prev => ({ ...prev, conversationStep: 'final' }));
          
          let upsellText = `${context.name}, já que você tem bom gosto, que tal conhecer estas OFERTAS ESPECIAIS? 🔥\n\n`;
          
          upsellProducts.forEach(produto => {
            const whatsappLink = generateWhatsAppLink(produto.name, context.size, produto.price);
            upsellText += `💎 **${produto.name}** - ${produto.price}\n`;
            upsellText += `[🛒 QUERO ESTE TAMBÉM](${whatsappLink})\n\n`;
          });
          
          upsellText += `📞 Ou fale conosco direto: (22) 99241-0112\n`;
          upsellText += `🏪 Loja Castor Cabo Frio - Av. Júlia Kubitschek, 64`;
          
          return upsellText;
        }
        
        setUserContext(prev => ({ ...prev, conversationStep: 'final' }));
        return `${context.name}, foi um prazer atendê-lo(a)! Qualquer dúvida, estou sempre aqui! 💬 Loja Castor Cabo Frio - Seu estilo, nosso compromisso! 👟✨`;
        
      default:
        if (lowerMessage.includes('preço') || lowerMessage.includes('valor') || lowerMessage.includes('custo')) {
          const randomProduct = produtos[Math.floor(Math.random() * produtos.length)];
          const whatsappLink = generateWhatsAppLink(randomProduct.name, 'Consultar', randomProduct.price);
          return `💰 Nossos preços são os melhores de Cabo Frio! Por exemplo: ${randomProduct.name} por ${randomProduct.price}.\n\n[💬 CONSULTAR PREÇOS](${whatsappLink})`;
        }
        
        if (lowerMessage.includes('horário') || lowerMessage.includes('funcionamento')) {
          return `🕐 **Horário de Funcionamento:**\nSegunda a Sábado: 9h às 19h\n📍 Av. Júlia Kubitschek, 64 - Jardim Flamboyant, Cabo Frio`;
        }
        
        if (lowerMessage.includes('endereço') || lowerMessage.includes('localização') || lowerMessage.includes('onde')) {
          return `📍 **Nossa Localização:**\nAv. Júlia Kubitschek, Nº 64\nJardim Flamboyant, Cabo Frio - RJ\n\n📞 WhatsApp: (22) 99241-0112`;
        }
        
        return `Olá! Sou o ThallesZzz da Loja Castor Cabo Frio! 👋 Como posso ajudá-lo(a) hoje? Qual é o seu nome para eu atendê-lo(a) melhor?`;
    }
  };

  const handleSendMessage = () => {
    if (!currentInput.trim()) return;
    
    const userMessage = {
      id: Date.now(),
      text: currentInput,
      isBot: false,
      timestamp: new Date().toLocaleTimeString()
    };
    
    setMessages(prev => [...prev, userMessage]);
    
    // Generate bot response
    setTimeout(() => {
      const botResponse = generateBotResponse(currentInput, userContext);
      const botMessage = {
        id: Date.now() + 1,
        text: botResponse,
        isBot: true,
        timestamp: new Date().toLocaleTimeString()
      };
      
      setMessages(prev => [...prev, botMessage]);
      speakText(botResponse);
    }, 1000);
    
    setCurrentInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const botStyles = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: 1000,
    fontFamily: 'inherit'
  };

  const mascotStyles = {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: '#25D366',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    fontSize: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
    transition: 'all 0.3s ease'
  };

  const chatWindowStyles = {
    position: 'absolute',
    bottom: '70px',
    right: '0',
    width: '350px',
    height: '500px',
    backgroundColor: 'white',
    border: '1px solid #ddd',
    borderRadius: '12px',
    boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
    display: isOpen ? 'flex' : 'none',
    flexDirection: 'column',
    overflow: 'hidden'
  };

  const chatHeaderStyles = {
    backgroundColor: '#2c3e50',
    color: 'white',
    padding: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  };

  const chatBodyStyles = {
    flex: 1,
    padding: '10px',
    overflowY: 'auto',
    backgroundColor: '#f8f9fa'
  };

  const chatFooterStyles = {
    padding: '10px',
    borderTop: '1px solid #eee',
    backgroundColor: 'white',
    display: 'flex',
    gap: '8px',
    alignItems: 'center'
  };

  const inputStyles = {
    flex: 1,
    border: '1px solid #ddd',
    borderRadius: '20px',
    padding: '10px 15px',
    fontSize: '14px',
    outline: 'none',
    fontFamily: 'inherit'
  };

  const micButtonStyles = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    border: 'none',
    backgroundColor: isListening ? '#ff4444' : '#25D366',
    color: 'white',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    fontSize: '16px'
  };

  const sendButtonStyles = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease'
  };

  const messageStyles = (isBot) => ({
    margin: '8px 0',
    padding: '10px 12px',
    borderRadius: '12px',
    backgroundColor: isBot ? '#e3f2fd' : '#25D366',
    color: isBot ? '#333' : 'white',
    maxWidth: '80%',
    alignSelf: isBot ? 'flex-start' : 'flex-end',
    fontSize: '14px',
    lineHeight: '1.4',
    wordWrap: 'break-word'
  });

  return (
    <>
      <div style={botStyles}>
        <button
          style={mascotStyles}
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={(e) => {
            if (!isOpen) {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.backgroundColor = '#128C7E';
            }
          }}
          onMouseLeave={(e) => {
            if (!isOpen) {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.backgroundColor = '#25D366';
            }
          }}
          title="Chat com ThallesZzz - Especialista Castor"
        >
          🦫
        </button>
        
        <div style={chatWindowStyles}>
          <div style={chatHeaderStyles}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '35px',
                height: '35px',
                borderRadius: '50%',
                backgroundColor: '#25D366',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px'
              }}>
                🦫
              </div>
              <div>
                <div style={{ fontWeight: 'bold', fontSize: '14px' }}>ThallesZzz</div>
                <div style={{ fontSize: '12px', opacity: 0.8 }}>
                  {isSpeaking ? '🔊 Falando...' : 'Especialista Castor Cabo Frio'}
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '18px',
                cursor: 'pointer',
                padding: '5px'
              }}
            >
              ✕
            </button>
          </div>
          
          <div style={chatBodyStyles} ref={chatContainerRef}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {messages.map((message) => (
                <div key={message.id} style={messageStyles(message.isBot)}>
                  <div dangerouslySetInnerHTML={{
                    __html: message.text.replace(/\n/g, '<br/>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  }} />
                  <div style={{
                    fontSize: '11px',
                    opacity: 0.7,
                    marginTop: '4px',
                    textAlign: 'right'
                  }}>
                    {message.timestamp}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div style={chatFooterStyles}>
            <input
              type="text"
              style={inputStyles}
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Digite aqui ou toque no microfone para falar"
              disabled={isListening}
            />
            
            <button
              style={micButtonStyles}
              onClick={isListening ? () => setIsListening(false) : startListening}
              title={isListening ? "Parar gravação" : "Clique para falar"}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              {isListening ? '⏹️' : '🎤'}
            </button>
            
            <button
              style={sendButtonStyles}
              onClick={handleSendMessage}
              disabled={!currentInput.trim()}
              title="Enviar mensagem"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              ➤
            </button>
            
            {isSpeaking && (
              <button
                style={{ ...sendButtonStyles, backgroundColor: '#ff4444' }}
                onClick={stopSpeaking}
                title="Parar fala"
              >
                🔇
              </button>
            )}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        
        @media (max-width: 768px) {
          ${chatWindowStyles} {
            width: 300px !important;
            height: 450px !important;
            right: -10px !important;
          }
        }
        
        @media (max-width: 480px) {
          ${chatWindowStyles} {
            width: 280px !important;
            height: 400px !important;
            right: -15px !important;
          }
        }
      `}</style>
    </>
  );
}
'use client';

import { useState, useEffect } from 'react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const AlquimistaAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [showInitialMessage, setShowInitialMessage] = useState(false);

  useEffect(() => {
    // Show initial message after 10 seconds
    const timer = setTimeout(() => {
      setShowInitialMessage(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Initial greeting when chat opens
      const initialMessage: Message = {
        id: '1',
        text: 'Olá! Eu sou o Alquimista, seu assistente virtual da Castor! 🧙‍♂️ Como posso ajudar você a encontrar o colchão dos seus sonhos?',
        isBot: true,
        timestamp: new Date()
      };
      setMessages([initialMessage]);
    }
  }, [isOpen, messages.length]);

  const quickActions = [
    { id: 'catalog', text: '📋 Ver Catálogo', action: () => window.location.href = '/produtos' },
    { id: 'sleep-map', text: '🧠 Mapa do Sono IA', action: () => window.location.href = '/mapa' },
    { id: 'whatsapp', text: '💬 Falar com Especialista', action: () => window.open('https://wa.me/5522992410112', '_blank') },
    { id: 'location', text: '📍 Como Chegar', action: () => window.location.href = '/contato' }
  ];

  const handleSendMessage = () => {
    if (inputText.trim() === '') return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(inputText);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('preço') || input.includes('valor') || input.includes('custo')) {
      return 'Os preços variam de R$ 599 a R$ 2.999 dependendo do modelo. Para condições especiais e descontos, recomendo falar diretamente com nosso especialista no WhatsApp! 💰';
    }
    
    if (input.includes('colchão') || input.includes('produto')) {
      return 'Temos diversos modelos incríveis! Recomendo fazer nosso Mapa do Sono IA para encontrar o modelo perfeito para você. É rápido e gratuito! 🛏️';
    }
    
    if (input.includes('entrega') || input.includes('frete')) {
      return 'Fazemos entrega gratuita em toda Cabo Frio e região! A entrega é feita com cuidado e inclui montagem. 🚚';
    }
    
    if (input.includes('garantia')) {
      return 'Todos nossos colchões têm garantia oficial de fábrica Castor, que varia de 5 a 12 anos dependendo do modelo. Qualidade garantida! ✅';
    }
    
    if (input.includes('horário') || input.includes('funcionamento')) {
      return 'Funcionamos de Segunda a Sexta das 8h às 18h, Sábado das 8h às 17h e Domingo das 9h às 13h. Estamos na Av. Júlia Kubitschek, 64! 🕒';
    }
    
    if (input.includes('dor') || input.includes('coluna') || input.includes('costas')) {
      return 'Para problemas de coluna, recomendo nossos colchões ortopédicos como o Amazon Prime Gel Pocket® ou Kingdom Látex. Nosso Mapa do Sono IA pode ajudar muito! 🏥';
    }

    if (input.includes('casal') || input.includes('king') || input.includes('queen')) {
      return 'Temos colchões em todos os tamanhos: Solteiro, Casal, Queen e King. Para casais, recomendo modelos com molas pocket que reduzem a transferência de movimento! 👫';
    }

    // Default responses
    const defaultResponses = [
      'Interessante! Para uma resposta mais detalhada e personalizada, que tal falar diretamente com nosso especialista? Ele pode ajudar melhor! 😊',
      'Ótima pergunta! Nosso time tem mais de 25 anos de experiência e pode dar orientações específicas. Vamos conversar no WhatsApp? 📱',
      'Posso ajudar com informações básicas, mas para algo mais específico, recomendo nossa consultoria especializada gratuita! 💡'
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setShowInitialMessage(false);
  };

  return (
    <div className="fixed bottom-24 left-6 z-40">
      {/* Initial Message Tooltip */}
      {showInitialMessage && !isOpen && (
        <div className="absolute bottom-16 left-0 bg-white shadow-lg rounded-lg p-4 mb-2 max-w-xs animate-bounce">
          <div className="text-sm font-medium text-gray-800">
            Olá! Sou o Alquimista 🧙‍♂️
          </div>
          <div className="text-xs text-gray-600 mt-1">
            Seu assistente virtual para encontrar o colchão ideal!
          </div>
          <button 
            onClick={() => setShowInitialMessage(false)}
            className="absolute top-1 right-2 text-gray-400 hover:text-gray-600"
          >
            ×
          </button>
          {/* Arrow */}
          <div className="absolute top-full left-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white"></div>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl w-80 h-96 flex flex-col mb-4">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center">
                  <span className="text-sm">🧙‍♂️</span>
                </div>
                <div>
                  <h3 className="font-semibold">Alquimista</h3>
                  <p className="text-xs text-purple-200">Assistente Virtual Castor</p>
                </div>
              </div>
              <button
                onClick={toggleChat}
                className="text-purple-200 hover:text-white"
              >
                ×
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                    message.isBot
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-purple-600 text-white'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          {messages.length <= 1 && (
            <div className="p-3 border-t">
              <p className="text-xs text-gray-500 mb-2">Ações rápidas:</p>
              <div className="grid grid-cols-2 gap-2">
                {quickActions.map((action) => (
                  <button
                    key={action.id}
                    onClick={action.action}
                    className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded transition-colors"
                  >
                    {action.text}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-3 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Digite sua pergunta..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                onClick={handleSendMessage}
                className="bg-purple-600 text-white px-3 py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Assistant Button */}
      <button
        onClick={toggleChat}
        className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        aria-label="Abrir assistente virtual"
      >
        <div className="flex items-center justify-center w-8 h-8">
          <span className="text-xl">🧙‍♂️</span>
        </div>
      </button>
    </div>
  );
};

export default AlquimistaAssistant;
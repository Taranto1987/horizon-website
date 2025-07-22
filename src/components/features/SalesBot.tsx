'use client';

import { useState, useEffect } from 'react';
import { contactInfo } from '@/data/products';

export default function SalesBot() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Show the bot after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const quickMessages = [
    {
      text: "Quero ver colchões",
      message: "Olá! Gostaria de conhecer os colchões disponíveis na loja."
    },
    {
      text: "Preciso de ajuda para escolher",
      message: "Olá! Preciso de ajuda para escolher o colchão ideal para mim."
    },
    {
      text: "Quero saber preços",
      message: "Olá! Gostaria de saber os preços dos colchões e formas de pagamento."
    },
    {
      text: "Informações de entrega",
      message: "Olá! Gostaria de saber sobre prazos e custos de entrega em Cabo Frio."
    }
  ];

  const handleQuickMessage = (message: string) => {
    const whatsappUrl = `https://wa.me/55${contactInfo.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsExpanded(false);
  };

  const handleDirectChat = () => {
    const whatsappUrl = `https://wa.me/55${contactInfo.whatsapp.replace(/\D/g, '')}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Expanded Bot */}
      {isExpanded && (
        <div className="mb-4 bg-white rounded-lg shadow-lg border max-w-sm">
          <div className="bg-green-600 text-white p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 font-bold text-sm">C</span>
                </div>
                <div>
                  <h3 className="font-semibold">Loja Castor</h3>
                  <p className="text-xs text-green-100">Online agora</p>
                </div>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-white hover:text-green-100"
              >
                ✕
              </button>
            </div>
          </div>
          
          <div className="p-4">
            <div className="mb-4">
              <div className="bg-gray-100 rounded-lg p-3 mb-3">
                <p className="text-sm">
                  👋 Olá! Sou o assistente virtual da Loja Castor. 
                  Como posso ajudá-lo hoje?
                </p>
              </div>
              
              <div className="space-y-2">
                {quickMessages.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickMessage(item.message)}
                    className="w-full text-left p-2 text-sm bg-blue-50 hover:bg-blue-100 rounded border border-blue-200 transition-colors"
                  >
                    {item.text}
                  </button>
                ))}
              </div>
            </div>
            
            <button
              onClick={handleDirectChat}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded font-medium transition-colors"
            >
              💬 Conversar no WhatsApp
            </button>
          </div>
        </div>
      )}

      {/* Bot Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        title="Fale conosco no WhatsApp"
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="currentColor"
          className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-45' : ''}`}
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.686"/>
        </svg>
      </button>

      {/* Pulse animation for attention */}
      {!isExpanded && (
        <div className="absolute inset-0 bg-green-600 rounded-full animate-ping opacity-75"></div>
      )}
    </div>
  );
}
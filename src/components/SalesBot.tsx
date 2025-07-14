'use client'

import { useState } from 'react'

export default function SalesBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Olá! Bem-vindo à Loja Castor Cabo Frio! Como posso ajudá-lo hoje?' }
  ])
  const [inputMessage, setInputMessage] = useState('')

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    const newMessages = [...messages, { type: 'user', text: inputMessage }]
    
    // Simple bot responses
    let botResponse = 'Obrigado pela sua mensagem! Para melhor atendimento, entre em contato pelo WhatsApp: (22) 99999-9999'
    
    if (inputMessage.toLowerCase().includes('preço') || inputMessage.toLowerCase().includes('valor')) {
      botResponse = 'Para consultar preços, clique em "Consultar Preço" nos produtos acima ou fale conosco no WhatsApp!'
    } else if (inputMessage.toLowerCase().includes('horário') || inputMessage.toLowerCase().includes('funcionamento')) {
      botResponse = 'Funcionamos de segunda a sexta das 8h às 18h, e sábados das 8h às 14h.'
    } else if (inputMessage.toLowerCase().includes('endereço') || inputMessage.toLowerCase().includes('localização')) {
      botResponse = 'Estamos localizados em Cabo Frio - RJ. Entre em contato para obter o endereço completo!'
    }

    newMessages.push({ type: 'bot', text: botResponse })
    setMessages(newMessages)
    setInputMessage('')
  }

  const openWhatsApp = () => {
    const message = 'Olá! Vim através do site da Loja Castor Cabo Frio.'
    const whatsappUrl = `https://wa.me/5522999999999?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="relative">
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-castor-brown text-white p-4 rounded-full shadow-lg hover:bg-castor-brown/90 transition-colors z-50"
      >
        💬
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 bg-white rounded-lg shadow-xl z-50 border">
          <div className="bg-castor-brown text-white p-4 rounded-t-lg">
            <h3 className="font-semibold">Atendimento Castor</h3>
          </div>
          
          <div className="h-64 overflow-y-auto p-4 space-y-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg ${
                  message.type === 'bot'
                    ? 'bg-gray-100 text-gray-800'
                    : 'bg-castor-brown text-white ml-8'
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>

          <div className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Digite sua mensagem..."
                className="flex-1 border rounded-lg px-3 py-2 text-sm"
              />
              <button
                onClick={handleSendMessage}
                className="bg-castor-brown text-white px-4 py-2 rounded-lg hover:bg-castor-brown/90"
              >
                ➤
              </button>
            </div>
            <button
              onClick={openWhatsApp}
              className="w-full mt-2 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors text-sm"
            >
              Continuar no WhatsApp
            </button>
          </div>
        </div>
      )}

      {/* Desktop version */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-castor-brown mb-4">
          Atendimento Online
        </h3>
        <p className="text-gray-600 mb-4">
          Nossa equipe está pronta para atendê-lo! Clique no botão abaixo para falar conosco pelo WhatsApp.
        </p>
        <button
          onClick={openWhatsApp}
          className="btn-primary"
        >
          Falar no WhatsApp
        </button>
      </div>
    </div>
  )
}
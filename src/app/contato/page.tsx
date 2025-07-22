'use client';

import { useState } from 'react';
import { contactInfo } from '@/data/products';

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    mensagem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Olá! Meu nome é ${formData.nome}
    
Telefone: ${formData.telefone}
Email: ${formData.email}

Mensagem: ${formData.mensagem}`;
    
    const whatsappUrl = `https://wa.me/55${contactInfo.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Entre em Contato
          </h1>
          <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto">
            Estamos prontos para ajudá-lo a encontrar o colchão perfeito. 
            Entre em contato através dos canais abaixo.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Envie sua Mensagem</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone/WhatsApp *
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  required
                  value={formData.telefone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="(22) 99999-9999"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={4}
                  required
                  value={formData.mensagem}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Como podemos ajudá-lo? Conte-nos sobre suas necessidades..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                💬 Enviar via WhatsApp
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-600">
              <p>* Campos obrigatórios</p>
              <p className="mt-2">
                Ao enviar, você será direcionado para o WhatsApp com sua mensagem pronta.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-xl">📱</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">WhatsApp</h3>
                    <p className="text-gray-600">Atendimento rápido e direto</p>
                    <a 
                      href={`https://wa.me/55${contactInfo.whatsapp.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 font-medium"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">E-mail</h3>
                    <p className="text-gray-600">Para dúvidas e orçamentos</p>
                    <a 
                      href="mailto:contato@lojacastorcabofrio.com.br"
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      contato@lojacastorcabofrio.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Endereço</h3>
                    <p className="text-gray-600">Venha nos visitar</p>
                    <p className="font-medium">{contactInfo.address}</p>
                    <a
                      href={contactInfo.googleMaps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center mt-1"
                    >
                      🗺️ Ver no Maps
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-xl">📸</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Instagram</h3>
                    <p className="text-gray-600">Acompanhe nossas novidades</p>
                    <a 
                      href={`https://instagram.com/${contactInfo.instagram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-600 hover:text-pink-700 font-medium"
                    >
                      {contactInfo.instagram}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">Horário de Funcionamento</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium">Segunda a Sexta</span>
                  <span className="text-green-600 font-semibold">8h às 18h</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium">Sábado</span>
                  <span className="text-green-600 font-semibold">8h às 14h</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium">Domingo</span>
                  <span className="text-red-600 font-semibold">Fechado</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-blue-900 text-white rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Atendimento Imediato</h2>
              <p className="mb-6 text-blue-100">
                Precisa de atendimento agora? Use nossos canais de contato direto:
              </p>
              <div className="space-y-3">
                <a
                  href={`https://wa.me/55${contactInfo.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-600 hover:bg-green-700 text-center py-3 px-4 rounded-lg font-medium transition-colors"
                >
                  💬 Abrir WhatsApp
                </a>
                <a
                  href={`tel:${contactInfo.whatsapp.replace(/\D/g, '')}`}
                  className="block w-full bg-white text-blue-900 text-center py-3 px-4 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  📞 Ligar Agora
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
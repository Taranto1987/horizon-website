import Layout from '../components/layout/Layout'
import { useState } from 'react'

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Mensagem enviada com sucesso! Entraremos em contato em breve.')
      setFormData({ nome: '', email: '', telefone: '', assunto: '', mensagem: '' })
      setIsSubmitting(false)
      
      // Clear message after 5 seconds
      setTimeout(() => setSubmitMessage(''), 5000)
    }, 1000)
  }

  return (
    <Layout 
      title="Contato - Loja Castor Cabo Frio"
      description="Entre em contato com a Loja Castor Cabo Frio. Av. Júlia Kubitschek, 64 - Jardim Flamboyant. WhatsApp: (22) 99241-0112."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Entre em Contato
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Estamos aqui para ajudar você a encontrar o colchão perfeito. 
            Entre em contato conosco através dos canais abaixo.
          </p>
        </div>
      </section>

      <div className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Envie sua Mensagem
              </h2>
              
              {submitMessage && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  {submitMessage}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone/WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="(22) 99999-9999"
                  />
                </div>
                
                <div>
                  <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 mb-2">
                    Assunto *
                  </label>
                  <select
                    id="assunto"
                    name="assunto"
                    value={formData.assunto}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="orcamento">Solicitar Orçamento</option>
                    <option value="produto">Dúvidas sobre Produtos</option>
                    <option value="entrega">Informações sobre Entrega</option>
                    <option value="garantia">Garantia e Pós-venda</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Descreva sua necessidade ou dúvida..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-primary ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Informações de Contato
              </h2>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-600 text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Endereço</h3>
                    <p className="text-gray-600">
                      Av. Júlia Kubitschek, Nº 64<br />
                      Jardim Flamboyant<br />
                      Cabo Frio - RJ, 28900-000
                    </p>
                  </div>
                </div>
                
                {/* WhatsApp */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 text-xl">📱</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
                    <a 
                      href="https://wa.me/5522992410112" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 font-medium"
                    >
                      (22) 99241-0112
                    </a>
                    <p className="text-gray-600 text-sm">Atendimento rápido e direto</p>
                  </div>
                </div>
                
                {/* Instagram */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 text-xl">📷</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Instagram</h3>
                    <a 
                      href="https://instagram.com/castorcabofrio" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-700 font-medium"
                    >
                      @castorcabofrio
                    </a>
                    <p className="text-gray-600 text-sm">Acompanhe novidades e promoções</p>
                  </div>
                </div>
                
                {/* Website */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 text-xl">🌐</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Site Oficial</h3>
                    <p className="text-blue-600 font-medium">www.lojacastorcabofrio.com.br</p>
                    <p className="text-gray-600 text-sm">Catálogo completo online</p>
                  </div>
                </div>
              </div>
              
              {/* Opening Hours */}
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="text-xl mr-2">🕒</span>
                  Horário de Funcionamento
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Segunda a Sexta:</span>
                    <span className="font-medium">08:00 às 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sábado:</span>
                    <span className="font-medium">08:00 às 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Domingo:</span>
                    <span className="font-medium">Fechado</span>
                  </div>
                </div>
              </div>

              {/* Quick Contact Buttons */}
              <div className="mt-8 space-y-3">
                <a 
                  href="https://wa.me/5522992410112" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <span>📱</span>
                  <span>Conversar no WhatsApp</span>
                </a>
                <a 
                  href="https://instagram.com/castorcabofrio" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <span>📷</span>
                  <span>Seguir no Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Nossa Localização
          </h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.556789!2d-42.0376!3d-22.8786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDUyJzQzLjAiUyA0MsKwMDInMTUuNCJX!5e0!3m2!1spt-BR!2sbr!4v1635000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Loja Castor Cabo Frio"
            ></iframe>
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-600 mb-4">
              Estamos localizados no Jardim Flamboyant, uma região de fácil acesso em Cabo Frio.
            </p>
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=Av.+Júlia+Kubitschek,+64+-+Jardim+Flamboyant,+Cabo+Frio+-+RJ"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>🗺️</span>
              <span>Como Chegar</span>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
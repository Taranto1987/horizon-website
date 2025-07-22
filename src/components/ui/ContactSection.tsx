import { useState } from 'react';
import { contactInfo } from '../../data';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `Olá! Meu nome é ${formData.name}.
    
Telefone: ${formData.phone}

Mensagem: ${formData.message}

Enviei através do site da Loja Castor Cabo Frio.`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${contactInfo.whatsapp}?text=${encodedMessage}`, '_blank');
    
    // Reset form
    setFormData({ name: '', phone: '', message: '' });
  };

  const handleWhatsAppDirect = () => {
    window.open(`https://wa.me/${contactInfo.whatsapp}?text=Olá! Gostaria de falar sobre os colchões Castor.`, '_blank');
  };

  const handleCallClick = () => {
    window.open(`tel:${contactInfo.phone}`, '_self');
  };

  const handleMapsClick = () => {
    window.open(contactInfo.googleMaps, '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/castorcabofrio', '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Entre em <span className="text-castor-accent">Contato</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para te atender! Visite nossa loja ou entre em contato 
            através dos canais abaixo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Informações da Loja
            </h3>

            {/* Cards de Contato */}
            <div className="space-y-6">
              {/* WhatsApp */}
              <div 
                onClick={handleWhatsAppDirect}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-l-4 border-green-500"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.89 3.598z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                    <p className="text-green-600 font-medium">{contactInfo.phone}</p>
                    <p className="text-sm text-gray-600">Atendimento rápido e direto</p>
                  </div>
                </div>
              </div>

              {/* Telefone */}
              <div 
                onClick={handleCallClick}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-l-4 border-blue-500"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Telefone</h4>
                    <p className="text-blue-600 font-medium">{contactInfo.phone}</p>
                    <p className="text-sm text-gray-600">Ligue diretamente para nós</p>
                  </div>
                </div>
              </div>

              {/* Localização */}
              <div 
                onClick={handleMapsClick}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-l-4 border-red-500"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Nossa Loja</h4>
                    <p className="text-red-600 font-medium">
                      {contactInfo.address}
                    </p>
                    <p className="text-sm text-gray-600">
                      {contactInfo.city} - {contactInfo.state}
                    </p>
                  </div>
                </div>
              </div>

              {/* Instagram */}
              <div 
                onClick={handleInstagramClick}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-l-4 border-pink-500"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Instagram</h4>
                    <p className="text-pink-600 font-medium">{contactInfo.instagram}</p>
                    <p className="text-sm text-gray-600">Siga para novidades e promoções</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Horário de funcionamento */}
            <div className="mt-8 bg-white p-6 rounded-xl shadow-lg">
              <h4 className="font-semibold text-gray-900 mb-4">Horário de Funcionamento</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Segunda a Sexta:</span>
                  <span className="text-gray-900 font-medium">08:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sábado:</span>
                  <span className="text-gray-900 font-medium">08:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Domingo:</span>
                  <span className="text-gray-900 font-medium">Fechado</span>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Envie uma Mensagem
            </h3>

            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-castor-primary focus:border-transparent transition-all duration-200"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone/WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-castor-primary focus:border-transparent transition-all duration-200"
                    placeholder="(22) 99999-9999"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-castor-primary focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Conte-nos como podemos te ajudar..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center space-x-2 text-lg py-4"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.89 3.598z"/>
                  </svg>
                  <span>Enviar via WhatsApp</span>
                </button>
              </div>

              <p className="text-sm text-gray-500 mt-4 text-center">
                Ao enviar, você será redirecionado para o WhatsApp com sua mensagem pronta.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
import Layout from '@/components/layout/Layout';
import { CONTACT_INFO, BUSINESS_HOURS } from '@/constants/contact';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contato - Loja Castor Cabo Frio',
  description: 'Entre em contato conosco. Av. Júlia Kubitschek, 64 - Jardim Flamboyant, Cabo Frio - RJ. WhatsApp: (22) 99241-0112',
  keywords: 'contato loja castor cabo frio, endereço, telefone, whatsapp, como chegar',
};

export default function ContatoPage() {
  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Entre em Contato
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Estamos prontos para ajudar você a encontrar o colchão perfeito
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Informações de Contato
              </h2>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="text-blue-600 text-2xl mt-1">📍</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Endereço</h3>
                    <p className="text-gray-600">
                      {CONTACT_INFO.address.street}, {CONTACT_INFO.address.number}<br />
                      {CONTACT_INFO.address.neighborhood}<br />
                      {CONTACT_INFO.address.city} - {CONTACT_INFO.address.state}
                    </p>
                    {CONTACT_INFO.googleMaps && (
                      <a
                        href={CONTACT_INFO.googleMaps}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 text-sm mt-2 inline-block"
                      >
                        Ver no Google Maps →
                      </a>
                    )}
                  </div>
                </div>

                {/* Phone/WhatsApp */}
                <div className="flex items-start space-x-4">
                  <div className="text-green-500 text-2xl mt-1">📱</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">WhatsApp / Telefone</h3>
                    <p className="text-gray-600 mb-2">{CONTACT_INFO.phone}</p>
                    <div className="space-x-4">
                      <a
                        href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Olá! Vim pelo site e gostaria de mais informações.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors text-sm font-medium inline-block"
                      >
                        Abrir WhatsApp
                      </a>
                      <a
                        href={`tel:+${CONTACT_INFO.whatsapp}`}
                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium inline-block"
                      >
                        Ligar Agora
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="flex items-start space-x-4">
                  <div className="text-pink-500 text-2xl mt-1">📷</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Instagram</h3>
                    <p className="text-gray-600 mb-2">{CONTACT_INFO.instagram}</p>
                    <a
                      href={`https://instagram.com/${CONTACT_INFO.instagram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition-colors text-sm font-medium inline-block"
                    >
                      Seguir no Instagram
                    </a>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start space-x-4">
                  <div className="text-blue-600 text-2xl mt-1">🌐</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Website</h3>
                    <p className="text-gray-600">{CONTACT_INFO.website}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Horário de Funcionamento
              </h2>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">Segunda à Sexta</span>
                    <span className="text-gray-700">{BUSINESS_HOURS.weekdays}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">Sábado</span>
                    <span className="text-gray-700">{BUSINESS_HOURS.saturday}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">Domingo</span>
                    <span className="text-gray-700">{BUSINESS_HOURS.sunday}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-yellow-50 rounded-lg border border-yellow-200">
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">💡 Dica</h3>
                <p className="text-yellow-700 text-sm">
                  Recomendamos agendar sua visita via WhatsApp para garantir atendimento personalizado 
                  e ter certeza de que o produto desejado estará disponível para teste.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como Chegar
            </h2>
            <p className="text-lg text-gray-600">
              Encontre-nos facilmente no coração de Cabo Frio
            </p>
          </div>
          
          {/* Map placeholder - In a real implementation, you would use Google Maps API */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center relative overflow-hidden">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Mapa Interativo</h3>
                <p className="text-gray-600 mb-4">
                  {CONTACT_INFO.address.street}, {CONTACT_INFO.address.number}<br />
                  {CONTACT_INFO.address.neighborhood}, {CONTACT_INFO.address.city} - {CONTACT_INFO.address.state}
                </p>
                {CONTACT_INFO.googleMaps && (
                  <a
                    href={CONTACT_INFO.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium inline-block"
                  >
                    Abrir no Google Maps
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Envie uma Mensagem
              </h2>
              <p className="text-lg text-gray-600">
                Preencha o formulário abaixo e entraremos em contato em breve
              </p>
            </div>
            
            <form className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(22) 99999-9999"
                  />
                </div>
              </div>
              
              <div className="mt-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="seu@email.com"
                />
              </div>
              
              <div className="mt-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Assunto
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Selecione um assunto</option>
                  <option value="colchao">Interesse em colchões</option>
                  <option value="travesseiro">Interesse em travesseiros</option>
                  <option value="protetor">Interesse em protetores</option>
                  <option value="informacoes">Informações gerais</option>
                  <option value="visita">Agendar visita</option>
                  <option value="outros">Outros</option>
                </select>
              </div>
              
              <div className="mt-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Descreva como podemos ajudá-lo..."
                ></textarea>
              </div>
              
              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white py-3 px-6 rounded-md hover:bg-blue-800 transition-colors font-semibold text-lg"
                >
                  Enviar Mensagem
                </button>
                <p className="text-center text-sm text-gray-500 mt-4">
                  * Campos obrigatórios
                </p>
              </div>
            </form>
            
            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">Ou entre em contato diretamente via WhatsApp:</p>
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Olá! Vim pelo site e gostaria de mais informações sobre os produtos.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition-colors font-semibold text-lg inline-block"
              >
                📱 Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
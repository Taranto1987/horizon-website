'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Qual a garantia dos colchões Castor?",
    answer: "Os colchões Castor possuem garantia que varia de 5 a 15 anos, dependendo do modelo. Nossos produtos premium como Kingdom Látex e Gold Star Pocket têm 15 anos de garantia, enquanto modelos como o Ortopédico D33 têm 5 anos."
  },
  {
    question: "Vocês fazem entrega em Cabo Frio?",
    answer: "Sim! Fazemos entrega em toda Cabo Frio e região. A entrega é rápida e cuidadosa, com nossa equipe especializada. Entre em contato para consultar prazo e valor da entrega para sua região."
  },
  {
    question: "Como escolher o colchão ideal para mim?",
    answer: "A escolha do colchão ideal depende de fatores como peso, altura, posição de dormir preferida e problemas de saúde. Nossa equipe está preparada para orientá-lo na escolha perfeita. Agende uma visita ou entre em contato pelo WhatsApp."
  },
  {
    question: "Qual a diferença entre colchões com molas pocket e sem molas?",
    answer: "Colchões com molas pocket oferecem melhor adaptabilidade e distribuição de peso, ideais para casais pois reduzem a transferência de movimento. Colchões sem molas, como os de gel ou espuma, oferecem suporte mais uniforme e são ideais para quem prefere superfície mais firme."
  },
  {
    question: "Os travesseiros têm garantia?",
    answer: "Sim! Nossos travesseiros ViscoSoft têm garantia de 2 anos e os Sleep Flocos têm 1 ano de garantia. Ambos são produtos de alta qualidade que proporcionam o suporte cervical adequado."
  },
  {
    question: "Vocês trabalham com financiamento?",
    answer: "Sim, oferecemos diversas formas de pagamento incluindo parcelamento. Entre em contato conosco para conhecer nossas condições especiais e facilidades de pagamento. Temos opções que cabem no seu orçamento."
  },
  {
    question: "Como posso saber se meu colchão precisa ser trocado?",
    answer: "Sinais de que é hora de trocar: idade superior a 8-10 anos, deformações visíveis, desconforto durante o sono, dores nas costas ao acordar, ou barulhos ao se movimentar. Nossa equipe pode avaliar seu caso e orientar sobre o momento ideal para a troca."
  },
  {
    question: "Qual o horário de funcionamento da loja?",
    answer: "Funcionamos de segunda a sexta das 8h às 18h, e sábados das 8h às 14h. Domingos estamos fechados. Para atendimento via WhatsApp, estamos disponíveis em horário estendido."
  },
  {
    question: "Posso visitar a loja para testar os colchões?",
    answer: "Claro! Recomendamos que você visite nossa loja na Av. Júlia Kubitschek, 64, para testar os colchões e sentir a diferença da qualidade Castor. Nossa equipe estará à disposição para apresentar todos os modelos."
  },
  {
    question: "Vocês têm produtos para pessoas com problemas de coluna?",
    answer: "Sim! Temos modelos específicos como o Ortopédico D33, que oferece suporte firme ideal para pessoas com problemas de coluna. Também temos travesseiros viscoelásticos que proporcionam alinhamento cervical adequado."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Perguntas Frequentes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Esclareça suas dúvidas sobre nossos produtos e serviços. 
            Se não encontrar a resposta que procura, entre em contato conosco!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="font-semibold text-lg pr-4">{faq.question}</h3>
                  <span className="text-2xl text-blue-600 flex-shrink-0">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-900 text-white rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ainda tem dúvidas?</h3>
            <p className="mb-6 text-blue-100">
              Nossa equipe de especialistas está pronta para ajudá-lo!
            </p>
            <a
              href="https://wa.me/5522992410112?text=Olá! Tenho algumas dúvidas sobre os produtos. Podem me ajudar?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              💬 Fale Conosco no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, Search, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div className="border-b border-border/70">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-5 md:py-6 text-left hover:bg-secondary/30 px-2 rounded-md transition-colors"
        aria-expanded={isOpen}
      >
        <span className="text-base md:text-lg font-medium text-foreground">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-primary transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-5 md:pb-6 px-2 text-muted-foreground text-sm md:text-base leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const pageTitle = "Dúvidas Frequentes (FAQ Inteligente)";
  const pageDescription = "Encontre respostas rápidas para as perguntas mais comuns sobre colchões Castor, saúde do sono, e como escolher o produto ideal para você.";
  
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      question: "Qual o melhor colchão Castor para quem tem dor na coluna?",
      answer: "Para dores na coluna, recomendamos colchões Castor com bom suporte ortopédico e alinhamento postural. Modelos como o Castor Light Stress Ortopédico ou o Silver Star Pocket Híbrido são excelentes opções. O ideal é usar nosso Quiz Inteligente para uma recomendação personalizada baseada no seu biotipo e tipo de dor.",
      keywords: ["dor coluna", "ortopédico", "light stress", "silver star"]
    },
    {
      question: "Como escolher a densidade correta do colchão?",
      answer: "A densidade ideal do colchão Castor está relacionada ao seu peso e altura (IMC). Pessoas mais pesadas geralmente precisam de densidades maiores (D33, D45) para suporte adequado, enquanto pessoas mais leves podem optar por densidades menores ou colchões de mola com conforto mais macio. Nossa equipe e o Quiz Inteligente podem te ajudar nessa escolha.",
      keywords: ["densidade", "peso", "altura", "imc", "d33", "d45"]
    },
    {
      question: "Colchão de mola ou espuma: qual o melhor?",
      answer: "Ambos têm suas vantagens! Colchões de mola Castor (Pocket, Tecnopedic) oferecem maior individualidade de movimento e ventilação. Colchões de espuma Castor proporcionam suporte uniforme e são ótimos para quem busca firmeza específica (densidades). A escolha depende da sua preferência pessoal, biotipo e se dorme acompanhado. O Kingdom Pocket Visco, por exemplo, une o melhor dos dois mundos.",
      keywords: ["mola", "espuma", "pocket", "tecnopedic", "viscoelástico", "kingdom"]
    },
    {
      question: "Quanto tempo dura um colchão Castor?",
      answer: "A durabilidade de um colchão Castor varia conforme o modelo e os cuidados de uso, mas em média, um bom colchão pode durar de 7 a 10 anos. Todos os colchões Castor são fabricados com materiais de alta qualidade e tecnologia para garantir uma longa vida útil e suporte contínuo.",
      keywords: ["durabilidade", "vida útil", "garantia"]
    },
    {
      question: "Como limpar e conservar meu colchão Castor?",
      answer: "Recomendamos utilizar uma capa protetora Castor, aspirar o colchão regularmente e virá-lo (se for um modelo que permite) a cada 2-3 meses para desgaste uniforme. Evite derramar líquidos e exposição direta ao sol. Consulte o manual do seu modelo específico para mais dicas.",
      keywords: ["limpeza", "conservação", "capa protetora", "cuidados"]
    },
    {
      question: "A Castor Cabo Frio entrega em minha cidade?",
      answer: "Sim! Realizamos entregas em Cabo Frio e em diversas cidades da Região dos Lagos. Entre em contato conosco para verificar a disponibilidade e condições de entrega para sua localidade.",
      keywords: ["entrega", "frete", "região dos lagos"]
    },
    {
      question: "O que fazer se eu acordar com dor lombar?",
      answer: "Se você acorda com dor lombar, pode ser um sinal de que seu colchão não está oferecendo o suporte adequado. Colchões muito moles ou muito velhos podem causar desalinhamento da coluna. Recomendamos fazer nosso Quiz Inteligente ou procurar um especialista. Modelos como o Castor Light Stress ou Silver Star podem ser indicados.",
      keywords: ["dor lombar", "acordar com dor", "suporte inadequado"]
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.keywords.some(k => k.includes(searchTerm.toLowerCase()))
  );

  const handleSymptomSearch = () => {
    if (!searchTerm.trim()) {
      toast({ title: "Busca por Sintoma", description: "Por favor, digite um sintoma ou dúvida para buscar.", variant: "destructive" });
      return;
    }
    if (filteredFaqs.length > 0) {
      toast({ title: "Busca por Sintoma", description: `Encontramos ${filteredFaqs.length} respostas relacionadas a "${searchTerm}".` });
    } else {
      toast({ title: "Busca por Sintoma", description: `Nenhuma resposta direta encontrada para "${searchTerm}". Tente palavras-chave diferentes ou contate-nos.`, duration: 4000 });
    }
  };


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-12 md:py-16"
    >
      <header className="text-center mb-12 md:mb-16">
        <motion.h1 
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold gradient-text mb-4"
        >
          {pageTitle}
        </motion.h1>
        <motion.p 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
        >
          {pageDescription}
        </motion.p>
      </header>

      <motion.div 
        initial={{ opacity:0, y:30 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:0.6, delay:0.3 }}
        className="mb-10 md:mb-12 max-w-2xl mx-auto"
      >
        <div className="relative">
          <input 
            type="text"
            placeholder="Digite sua dúvida ou sintoma (ex: 'dor lombar', 'colchão firme')..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-4 pr-16 rounded-xl bg-secondary/80 border border-border text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          />
          <Button 
            size="icon" 
            className="absolute right-3 top-1/2 transform -translate-y-1/2 button-castor-primary"
            onClick={handleSymptomSearch}
            aria-label="Buscar dúvida ou sintoma"
          >
            <Search className="w-5 h-5" />
          </Button>
        </div>
      </motion.div>

      <div className="max-w-3xl mx-auto glass-effect-castor p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))
        ) : (
          <p className="text-center text-muted-foreground py-8">
            Nenhuma dúvida encontrada para "{searchTerm}". Tente uma busca diferente ou entre em contato.
          </p>
        )}
      </div>

      <motion.div 
        initial={{ opacity:0, y:30 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:0.6, delay:0.5 }}
        className="text-center mt-12 md:mt-16"
      >
        <MessageSquare className="w-10 h-10 text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-foreground mb-3">Não encontrou sua resposta?</h3>
        <p className="text-muted-foreground max-w-xl mx-auto mb-6">
          Nossa equipe de especialistas em sono está pronta para ajudar! Entre em contato conosco para um atendimento personalizado.
        </p>
        <Button 
          onClick={() => toast({ title: "🚧 Funcionalidade em Desenvolvimento", description: "O chat direto ou formulário de contato será implementado aqui! 🚀"})}
          className="button-castor-primary px-8 py-3 text-base"
        >
          Fale com um Especialista
        </Button>
      </motion.div>

    </motion.div>
  );
};

export default FAQ;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import {
  Sparkles, Bed, MessageSquare, Users as UsersIcon, ArrowLeft, Brain, Info as InfoIcon, User
} from 'lucide-react';
import CalculatorSteps from '@/components/BiotipoCalculator/CalculatorSteps';
import CalculatorProgressBar from '@/components/BiotipoCalculator/CalculatorProgressBar';
import { castorProducts, calculatorStepsData, whatsappNumber } from '@/components/BiotipoCalculator/calculatorData';

const BiotipoCalculator = ({ onResult, onProductSelect }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({
    idadePessoa1: '',
    idadePessoa2: '',
  });
  const [showResult, setShowResult] = useState(false);
  const [recommendation, setRecommendation] = useState(null);

  const activeSteps = calculatorStepsData.filter(step => !step.condition || step.condition(answers));

  const handleAnswer = (stepId, value) => {
    setAnswers(prev => ({ ...prev, [stepId]: value }));
  };

  const nextStep = () => {
    const currentStepData = activeSteps[currentStep];

    if (currentStepData.type === 'idade') {
      const idade = parseInt(answers[currentStepData.id]);
      if (isNaN(idade) || idade < 0 || idade > 120) {
        toast({
          title: "Erro de Validação",
          description: 'Idade deve ser entre 0 e 120 anos.',
          variant: "destructive",
          duration: 3000,
        });
        return;
      }
    } else if (!answers[currentStepData.id]) {
      toast({
        title: "Campo Obrigatório",
        description: "Por favor, selecione uma opção para continuar.",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }

    if (currentStep < activeSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateResult();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getStepLabel = (stepId, value) => {
    const step = calculatorStepsData.find(s => s.id === stepId);
    if (!step || !step.options) return value;
    const option = step.options.find(o => o.value === value);
    return option ? option.label : value;
  };

  const calculateResult = () => {
    let recommendedProductKey = '';
    let recommendationText = "";
    let springRecommendation = "";
    let imcText = "";

    const { numeroPessoas, frequenciaUso, alturaPessoa1, pesoPessoa1, idadePessoa1, alturaPessoa2, pesoPessoa2, idadePessoa2, doresColuna, preferenciaFirmeza, temperaturaSono, condicaoOrtopedica, tipoColchaoAtual } = answers;

    // Lógica de recomendação baseada nas novas especificações
    if (idadePessoa1 <= 12) {
      recommendedProductKey = 'sleep-max-d28';
      recommendationText = "Recomendamos o Sleep Max D28 para uso infantil, ideal para manter a postura alinhada na fase de crescimento.";
    } else if (numeroPessoas === '1') {
      // Lógica para D33/D45 baseada no peso
      if (pesoPessoa1 === 'ate_50' || pesoPessoa1 === '51_60' || pesoPessoa1 === '61_70' || pesoPessoa1 === '71_80' || pesoPessoa1 === '81_90') {
        recommendedProductKey = 'sleep-max-d33';
        recommendationText = "Recomendamos o Sleep Max D33 para conforto equilibrado e bom suporte para a coluna.";
      } else if (pesoPessoa1 === '91_100' || pesoPessoa1 === '101_120' || pesoPessoa1 === '121_150') {
        recommendedProductKey = 'sleep-max-d45';
        recommendationText = "Recomendamos o Sleep Max D45 para maior suporte e durabilidade sem afundar com o tempo.";
      }

      if (preferenciaFirmeza === 'macio') {
        recommendedProductKey = 'fontana';
        recommendationText = "Recomendamos o Colchão Castor Fontana Pocket para uma sensação mais macia e que te abrace.";
      } else if (preferenciaFirmeza === 'firme' || condicaoOrtopedica !== 'nenhuma' || doresColuna !== 'nao') {
        recommendedProductKey = 'technopadic';
        recommendationText = "Recomendamos um Tecnopedic com molas LFK mais firmes para suporte ortopédico adequado.";
      } else if (temperaturaSono === 'calor') {
        recommendedProductKey = 'amazonprimegel';
        recommendationText = "Recomendamos o Colchão Castor Amazon Prime Gel para quem sente muito calor, proporcionando frescor.";
      }

    } else { // Casal
      // Lógica para casal com diferença de peso ou uso diário
      const peso1 = parseFloat(pesoPessoa1.split('_')[0]); // Ex: '51_60' -> 51
      const peso2 = parseFloat(pesoPessoa2.split('_')[0]);
      const pesoDiff = Math.abs(peso1 - peso2);

      if (frequenciaUso === 'diario' || pesoDiff > 20) {
        recommendedProductKey = 'authentic-pocket';
        recommendationText = "Recomendamos um modelo Pocket que suporta pesos diferentes e garante independência de movimentos.";
        springRecommendation = "Para casal com uso diário ou diferença de peso, recomendamos molas ensacadas (Pocket) como as Authentic Pocket. Ideal para evitar transferência de movimento e garantir conforto igual para os dois.";
      } else {
        recommendedProductKey = 'technopadic';
        recommendationText = "Para casal com uso ocasional, o modelo Tecnopedic é funcional e econômico.";
      }

      if (temperaturaSono === 'calor') {
        recommendedProductKey = 'amazonprimegel';
        recommendationText = "Recomendamos o Colchão Castor Amazon Prime Gel para quem sente muito calor, proporcionando frescor.";
      } else if (preferenciaFirmeza === 'macio') {
        recommendedProductKey = 'kingdom';
        recommendationText = "Recomendamos o Colchão Castor Kingdom Pocket Visco para uma sensação mais macia e ultra conforto.";
      } else if (preferenciaFirmeza === 'firme' || condicaoOrtopedica !== 'nenhuma' || doresColuna !== 'nao') {
        recommendedProductKey = 'silverstar';
        recommendationText = "Recomendamos o Colchão Castor Silver Star Pocket Híbrido para quem prefere firmeza e suporte.";
      }
    }

    // Ajustes finais baseados em dores ortopédicas
    if (doresColuna !== 'nao' || condicaoOrtopedica !== 'nenhuma') {
      if (recommendedProductKey !== 'technopadic' && recommendedProductKey !== 'silverstar' && recommendedProductKey !== 'lightstress') {
        recommendedProductKey = 'technopadic'; // Prioriza Tecnopedic para ortopédicos
        recommendationText = "Recomendamos um Tecnopedic com molas LFK mais firmes para suporte ortopédico adequado.";
      }
    }

    // Ajuste baseado na preferência de tipo de colchão atual
    if (tipoColchaoAtual === 'espuma' && recommendedProductKey.includes('pocket')) {
      // Se o usuário prefere espuma e a recomendação é mola, tenta ajustar para espuma se houver uma opção viável
      if (pesoPessoa1 === 'ate_50' || pesoPessoa1 === '51_60' || pesoPessoa1 === '61_70' || pesoPessoa1 === '71_80' || pesoPessoa1 === '81_90') {
        recommendedProductKey = 'sleep-max-d33';
        recommendationText = "Considerando sua preferência por colchões de espuma, recomendamos o Sleep Max D33 para conforto equilibrado e bom suporte.";
      } else if (pesoPessoa1 === '91_100' || pesoPessoa1 === '101_120' || pesoPessoa1 === '121_150') {
        recommendedProductKey = 'sleep-max-d45';
        recommendationText = "Considerando sua preferência por colchões de espuma, recomendamos o Sleep Max D45 para maior suporte e durabilidade.";
      }
    } else if (tipoColchaoAtual === 'mola' && recommendedProductKey.includes('sleep-max')) {
      // Se o usuário prefere mola e a recomendação é espuma, tenta ajustar para mola se houver uma opção viável
      if (preferenciaFirmeza === 'macio') {
        recommendedProductKey = 'fontana';
        recommendationText = "Considerando sua preferência por colchões de mola e maciez, recomendamos o Colchão Castor Fontana Pocket.";
      } else if (preferenciaFirmeza === 'firme' || doresColuna !== 'nao' || condicaoOrtopedica !== 'nenhuma') {
        recommendedProductKey = 'technopadic';
        recommendationText = "Considerando sua preferência por colchões de mola e necessidade de firmeza/suporte ortopédico, recomendamos um Tecnopedic.";
      } else {
        recommendedProductKey = 'authentic-pocket';
        recommendationText = "Considerando sua preferência por colchões de mola, recomendamos um modelo Pocket para bom suporte e conforto.";
      }
    }
    
    const finalRecommendation = {
      recommendedProduct: castorProducts[recommendedProductKey] || castorProducts['technopadic'],
      text: recommendationText,
      springText: springRecommendation,
      imcText: imcText,
      fullAnswers: answers
    };
    
    setRecommendation(finalRecommendation);
    setShowResult(true);
    if (onResult) {
      onResult(finalRecommendation);
    }
    toast({
      title: "🌟 Mapa do Sono IA Concluído!",
      description: `Encontramos uma sugestão de colchão Castor para você: ${finalRecommendation.recommendedProduct.name}`,
      duration: 5000,
    });
  };
  
  const currentStepData = activeSteps[currentStep];
  let currentAnswer;
  if (currentStepData.type === 'idade') {
    currentAnswer = answers[currentStepData.id];
  } else if (currentStepData.type === 'altura' || currentStepData.type === 'peso') {
    currentAnswer = answers[currentStepData.id];
  } else {
    currentAnswer = answers[currentStepData.id];
  }

  if (showResult && recommendation) {
    const { recommendedProduct, text, springText, imcText, fullAnswers } = recommendation;
    
    let detailedAnswers = "Resumo das Respostas do Mapa do Sono IA:\n";
    activeSteps.forEach(step => {
      if (step.type === 'idade') {
        detailedAnswers += `${step.title}: ${fullAnswers[step.id]} anos\n`;
      } else if (step.type === 'altura' || step.type === 'peso') {
        detailedAnswers += `${step.title}: ${getStepLabel(step.id, fullAnswers[step.id])}\n`;
      } else if (fullAnswers[step.id]) {
        detailedAnswers += `${step.title}: ${getStepLabel(step.id, fullAnswers[step.id])}\n`;
      }
    });

    const whatsappMessage = `Olá! Recebi esta recomendação do Mapa do Sono IA:\n\nProduto Recomendado: ${recommendedProduct.name}\n\n${text}\n${springText ? springText + '\n' : ''}${imcText ? imcText + '\n' : ''}\nDetalhes das Respostas:\n${detailedAnswers}\nGostaria de mais informações.`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    const specialistWhatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Gostaria de falar com um especialista da Loja Castor Cabo Frio sobre colchões.")}`;

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center p-4 md:p-6"
      >
        <Sparkles className="w-16 h-16 text-primary mx-auto mb-4" />
        <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-3">Seu Mapa do Sono Ideal está Pronto!</h2>
        <p className="text-muted-foreground mb-6">Com base nas suas respostas, aqui está nossa sugestão:</p>

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-6 text-left shadow-lg">
          <h3 className="text-xl font-semibold text-primary mb-2">{recommendedProduct.name}</h3>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <img 
              src={`https://lojacastor.com.br/media/catalog/product${recommendedProduct.image_path || '/placeholder.jpg'}`} 
              alt={recommendedProduct.name} 
              className="w-full sm:w-1/3 h-auto rounded-lg object-cover shadow-md"
              onError={(e) => { e.target.onerror = null; e.target.src="https://via.placeholder.com/300x200/f0f0f0/c0c0c0?text=Colchao+Castor"; }}
            />
            <div className="flex-1">
              <p className="text-sm text-foreground mb-2">{recommendedProduct.features.join(' • ')}</p>
              {text && <p className="text-sm text-muted-foreground mb-2"><InfoIcon className="inline w-4 h-4 mr-1 text-primary/70" /> {text}</p>}
              {springText && <p className="text-sm text-muted-foreground mb-2"><Brain className="inline w-4 h-4 mr-1 text-primary/70" /> {springText}</p>}
              {imcText && <p className="text-sm text-muted-foreground"><User className="inline w-4 h-4 mr-1 text-primary/70" /> {imcText}</p>}
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          <Button 
            onClick={() => onProductSelect(recommendedProduct)} 
            className="w-full button-castor-primary"
            size="lg"
          >
            <Bed className="w-5 h-5 mr-2" /> Ver Detalhes do {recommendedProduct.name}
          </Button>
          <Button 
            asChild 
            variant="outline" 
            className="w-full button-castor-outline"
            size="lg"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageSquare className="w-5 h-5 mr-2" /> Receber Recomendação no WhatsApp
            </a>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            className="w-full button-castor-outline"
            size="lg"
          >
            <a href={specialistWhatsappLink} target="_blank" rel="noopener noreferrer">
              <UsersIcon className="w-5 h-5 mr-2" /> Falar com um Especialista Castor
            </a>
          </Button>
        </div>
        <Button variant="link" onClick={() => { setShowResult(false); setCurrentStep(0); setAnswers({}); setRecommendation(null); }} className="mt-6 text-primary">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Refazer o Mapa do Sono
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <CalculatorProgressBar currentStep={currentStep} totalSteps={activeSteps.length} />
      <CalculatorSteps
        currentStepData={currentStepData}
        answers={answers}
        handleAnswer={handleAnswer}
        currentAnswer={currentAnswer}
        prevStep={prevStep}
        nextStep={nextStep}
        isFirstStep={currentStep === 0}
        isLastStep={currentStep === activeSteps.length - 1}
      />
    </div>
  );
};

export default BiotipoCalculator;





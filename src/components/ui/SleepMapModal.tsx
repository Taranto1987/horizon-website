'use client';

import { useState } from 'react';

interface Question {
  id: string;
  text: string;
  type: 'radio' | 'select' | 'range';
  options?: string[];
  min?: number;
  max?: number;
  step?: number;
}

interface SleepMapData {
  age: string;
  weight: string;
  height: string;
  sleepPosition: string;
  firmnessPreference: string;
  backProblems: string;
  sleepQuality: string;
  partner: string;
  temperature: string;
}

const questions: Question[] = [
  {
    id: 'age',
    text: 'Qual sua faixa etária?',
    type: 'radio',
    options: ['18-30 anos', '31-45 anos', '46-60 anos', 'Acima de 60 anos']
  },
  {
    id: 'weight',
    text: 'Qual seu peso aproximado?',
    type: 'select',
    options: ['Até 60kg', '61-80kg', '81-100kg', '101-120kg', 'Acima de 120kg']
  },
  {
    id: 'height',
    text: 'Qual sua altura?',
    type: 'select',
    options: ['Até 1,60m', '1,61-1,70m', '1,71-1,80m', '1,81-1,90m', 'Acima de 1,90m']
  },
  {
    id: 'sleepPosition',
    text: 'Qual sua posição preferida para dormir?',
    type: 'radio',
    options: ['De lado', 'De barriga para cima', 'De bruços', 'Mudo de posição frequentemente']
  },
  {
    id: 'firmnessPreference',
    text: 'Que tipo de colchão você prefere?',
    type: 'radio',
    options: ['Bem macio', 'Macio', 'Médio', 'Firme', 'Muito firme']
  },
  {
    id: 'backProblems',
    text: 'Você tem problemas na coluna ou dores nas costas?',
    type: 'radio',
    options: ['Não tenho problemas', 'Dores leves ocasionais', 'Dores frequentes', 'Problemas sérios de coluna']
  },
  {
    id: 'sleepQuality',
    text: 'Como você avalia a qualidade do seu sono atual?',
    type: 'radio',
    options: ['Muito boa', 'Boa', 'Regular', 'Ruim', 'Muito ruim']
  },
  {
    id: 'partner',
    text: 'Você dorme acompanhado(a)?',
    type: 'radio',
    options: ['Sim, regularmente', 'Às vezes', 'Raramente', 'Sempre sozinho(a)']
  },
  {
    id: 'temperature',
    text: 'Como você se sente em relação à temperatura durante o sono?',
    type: 'radio',
    options: ['Sempre com calor', 'Às vezes com calor', 'Temperatura normal', 'Às vezes com frio', 'Sempre com frio']
  }
];

interface SleepMapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SleepMapModal = ({ isOpen, onClose }: SleepMapModalProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<SleepMapData>>({});
  const [showResults, setShowResults] = useState(false);
  const [recommendations, setRecommendations] = useState<string[]>([]);

  if (!isOpen) return null;

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      generateRecommendations();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const generateRecommendations = () => {
    // Simple recommendation logic based on answers
    const recs: string[] = [];
    
    // Check for back problems
    if (answers.backProblems === 'Problemas sérios de coluna' || answers.backProblems === 'Dores frequentes') {
      recs.push('Amazon Prime Gel Pocket®');
      recs.push('Kingdom Látex');
    }
    
    // Check sleep position
    if (answers.sleepPosition === 'De lado') {
      recs.push('Silver Star Air Pocket®');
      recs.push('Evolution Gel Pocket®');
    }
    
    // Check firmness preference
    if (answers.firmnessPreference === 'Firme' || answers.firmnessPreference === 'Muito firme') {
      recs.push('Ortopedic (Espuma D33)');
    }
    
    // Check temperature issues
    if (answers.temperature === 'Sempre com calor' || answers.temperature === 'Às vezes com calor') {
      recs.push('Amazon Prime Gel Pocket®');
      recs.push('Evolution Gel (sem molas)');
    }
    
    // Check for partner
    if (answers.partner === 'Sim, regularmente') {
      recs.push('Silver Star Air Pocket®');
      recs.push('Revolution Pocket®');
    }
    
    // Remove duplicates and limit to 3
    const uniqueRecs = Array.from(new Set(recs)).slice(0, 3);
    
    // Fallback recommendations if none match
    if (uniqueRecs.length === 0) {
      uniqueRecs.push('Amazon Prime Gel Pocket®', 'Silver Star Air Pocket®', 'Kingdom Látex');
    }
    
    setRecommendations(uniqueRecs);
    setShowResults(true);
  };

  const resetTest = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
    setRecommendations([]);
  };

  const currentQuestion = questions[currentStep];
  const isAnswered = answers[currentQuestion?.id as keyof SleepMapData];
  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b p-6 rounded-t-lg">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Mapa do Sono IA</h2>
              <p className="text-gray-600">Descubra seu colchão ideal</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
            >
              ×
            </button>
          </div>
          
          {!showResults && (
            <div className="mt-4">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Pergunta {currentStep + 1} de {questions.length}</span>
                <span>{Math.round(progress)}% concluído</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {!showResults ? (
            /* Question */
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">
                {currentQuestion.text}
              </h3>
              
              <div className="space-y-3">
                {currentQuestion.options?.map((option) => (
                  <label key={option} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name={currentQuestion.id}
                      value={option}
                      checked={answers[currentQuestion.id as keyof SleepMapData] === option}
                      onChange={(e) => handleAnswer(currentQuestion.id, e.target.value)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span className="text-gray-700">{option}</span>
                  </label>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex justify-between pt-6">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Anterior
                </button>
                <button
                  onClick={nextStep}
                  disabled={!isAnswered}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {currentStep === questions.length - 1 ? 'Ver Resultados' : 'Próximo'}
                </button>
              </div>
            </div>
          ) : (
            /* Results */
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Seus Colchões Ideais
                </h3>
                <p className="text-gray-600">
                  Com base nas suas respostas, nossa IA recomenda estes modelos:
                </p>
              </div>

              <div className="space-y-4">
                {recommendations.map((productName, index) => (
                  <div key={productName} className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm font-semibold">
                            #{index + 1}
                          </span>
                          <h4 className="text-lg font-bold text-gray-900">{productName}</h4>
                        </div>
                        <p className="text-gray-600 text-sm">
                          {index === 0 ? 'Melhor compatibilidade com seu perfil' : 
                           index === 1 ? 'Excelente opção alternativa' : 
                           'Boa opção para considerar'}
                        </p>
                      </div>
                      <div className="text-blue-600 text-2xl">
                        {index === 0 ? '🏆' : index === 1 ? '🥈' : '🥉'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="font-semibold text-green-800 mb-2">💡 Dica do Especialista</h4>
                <p className="text-green-700 text-sm">
                  Para garantir a escolha perfeita, recomendamos uma conversa com nosso especialista. 
                  Ele pode oferecer orientações personalizadas e condições especiais.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <a 
                  href="https://wa.me/5522992410112" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block text-center"
                >
                  💬 Falar com Especialista no WhatsApp
                </a>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={resetTest}
                    className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Refazer Teste
                  </button>
                  <button
                    onClick={onClose}
                    className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Ver Produtos
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SleepMapModal;
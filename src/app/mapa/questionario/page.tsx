'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

// Types for questionnaire data
interface QuestionnaireData {
  // Step 1: Basic info
  name: string;
  isCuple: boolean;
  
  // Step 2: Sleep position
  position: string;
  positionPartner?: string;
  
  // Step 3: Current mattress issues
  currentIssues: string[];
  
  // Step 4: Sleep preferences
  firmness: string;
  temperature: string;
  
  // Step 5: Height (NEW)
  height: string;
  heightPartner?: string;
  
  // Step 6: Weight (NEW) 
  weight: string;
  weightPartner?: string;
  
  // Step 7: Back problems
  backProblems: string;
  backProblemsPartner?: string;
  
  // Step 8: Age range
  ageRange: string;
  ageRangePartner?: string;
  
  // Step 9: Budget
  budget: string;
  
  // Step 10: Additional info
  additionalInfo: string;
}

const TOTAL_STEPS = 10;

const HEIGHT_OPTIONS = [
  'até 1,50m',
  '1,51m a 1,60m', 
  '1,61m a 1,70m',
  '1,71m a 1,80m',
  '1,81m a 1,90m',
  'acima de 1,91m'
];

const WEIGHT_OPTIONS = [
  'até 50kg',
  '51kg a 60kg',
  '61kg a 70kg', 
  '71kg a 80kg',
  '81kg a 90kg',
  '91kg a 100kg',
  '101kg a 120kg',
  '121kg a 150kg',
  'acima de 151kg'
];

export default function QuestionarioMapaDoSono() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState<QuestionnaireData>({
    name: '',
    isCuple: false,
    position: '',
    currentIssues: [],
    firmness: '',
    temperature: '',
    height: '',
    weight: '',
    backProblems: '',
    ageRange: '',
    budget: '',
    additionalInfo: ''
  });

  const updateData = (updates: Partial<QuestionnaireData>) => {
    setData(prev => ({ ...prev, ...updates }));
  };

  const nextStep = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Go to results
      handleComplete();
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleComplete = () => {
    // Here we would normally send data to an API
    console.log('Questionnaire Data:', data);
    router.push('/mapa/resultado');
  };

  const renderProgressBar = () => (
    <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
      <div 
        className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
        style={{ width: `${(currentStep / TOTAL_STEPS) * 100}%` }}
      ></div>
      <div className="text-center mt-2 text-sm text-gray-600">
        Etapa {currentStep} de {TOTAL_STEPS}
      </div>
    </div>
  );

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return renderBasicInfo();
      case 2:
        return renderSleepPosition();
      case 3:
        return renderCurrentIssues();
      case 4:
        return renderSleepPreferences();
      case 5:
        return renderHeight();
      case 6:
        return renderWeight();
      case 7:
        return renderBackProblems();
      case 8:
        return renderAgeRange();
      case 9:
        return renderBudget();
      case 10:
        return renderAdditionalInfo();
      default:
        return null;
    }
  };

  const renderBasicInfo = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Vamos começar!</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Como você gostaria de ser chamado(a)?
        </label>
        <input
          type="text"
          value={data.name}
          onChange={(e) => updateData({ name: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Seu nome"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          Você está comprando para:
        </label>
        <div className="space-y-3">
          <label className="flex items-center">
            <input
              type="radio"
              name="tipo"
              checked={!data.isCuple}
              onChange={() => updateData({ isCuple: false })}
              className="mr-3"
            />
            <span>Só para mim (solteiro/individual)</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="tipo"
              checked={data.isCuple}
              onChange={() => updateData({ isCuple: true })}
              className="mr-3"
            />
            <span>Para o casal</span>
          </label>
        </div>
      </div>
    </div>
  );

  const renderSleepPosition = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Posição de dormir</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          {data.isCuple ? 'Qual sua posição preferida para dormir?' : 'Como você prefere dormir?'}
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['De lado', 'De barriga para cima', 'De bruços'].map((position) => (
            <button
              key={position}
              onClick={() => updateData({ position })}
              className={`p-4 border rounded-lg text-center transition-colors ${
                data.position === position
                  ? 'border-blue-600 bg-blue-50 text-blue-600'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              {position}
            </button>
          ))}
        </div>
      </div>
      
      {data.isCuple && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">
            E a posição preferida do seu parceiro(a)?
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {['De lado', 'De barriga para cima', 'De bruços'].map((position) => (
              <button
                key={position}
                onClick={() => updateData({ positionPartner: position })}
                className={`p-4 border rounded-lg text-center transition-colors ${
                  data.positionPartner === position
                    ? 'border-blue-600 bg-blue-50 text-blue-600'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                {position}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderCurrentIssues = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Problemas atuais</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          Quais problemas você tem com seu colchão atual? (Selecione todos que se aplicam)
        </label>
        <div className="space-y-3">
          {[
            'Dores nas costas',
            'Colchão muito mole',
            'Colchão muito duro',
            'Esquenta muito',
            'Afunda demais',
            'Parceiro incomoda',
            'Não tenho problemas'
          ].map((issue) => (
            <label key={issue} className="flex items-center">
              <input
                type="checkbox"
                checked={data.currentIssues.includes(issue)}
                onChange={(e) => {
                  if (e.target.checked) {
                    updateData({ currentIssues: [...data.currentIssues, issue] });
                  } else {
                    updateData({ 
                      currentIssues: data.currentIssues.filter(i => i !== issue) 
                    });
                  }
                }}
                className="mr-3"
              />
              <span>{issue}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSleepPreferences = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Preferências de sono</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          Que tipo de firmeza você prefere?
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['Macio', 'Médio', 'Firme'].map((firmness) => (
            <button
              key={firmness}
              onClick={() => updateData({ firmness })}
              className={`p-4 border rounded-lg text-center transition-colors ${
                data.firmness === firmness
                  ? 'border-blue-600 bg-blue-50 text-blue-600'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              {firmness}
            </button>
          ))}
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          Durante o sono, você geralmente sente:
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['Calor', 'Temperatura normal', 'Frio'].map((temp) => (
            <button
              key={temp}
              onClick={() => updateData({ temperature: temp })}
              className={`p-4 border rounded-lg text-center transition-colors ${
                data.temperature === temp
                  ? 'border-blue-600 bg-blue-50 text-blue-600'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              {temp}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderHeight = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Altura</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          {data.isCuple ? 'Qual sua altura?' : 'Qual sua altura?'}
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {HEIGHT_OPTIONS.map((height) => (
            <button
              key={height}
              onClick={() => updateData({ height })}
              className={`p-4 border rounded-lg text-center transition-colors ${
                data.height === height
                  ? 'border-blue-600 bg-blue-50 text-blue-600'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              {height}
            </button>
          ))}
        </div>
      </div>
      
      {data.isCuple && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Qual a altura do seu parceiro(a)?
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {HEIGHT_OPTIONS.map((height) => (
              <button
                key={height}
                onClick={() => updateData({ heightPartner: height })}
                className={`p-4 border rounded-lg text-center transition-colors ${
                  data.heightPartner === height
                    ? 'border-blue-600 bg-blue-50 text-blue-600'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                {height}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderWeight = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Peso</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          {data.isCuple ? 'Qual seu peso?' : 'Qual seu peso?'}
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {WEIGHT_OPTIONS.map((weight) => (
            <button
              key={weight}
              onClick={() => updateData({ weight })}
              className={`p-4 border rounded-lg text-center transition-colors ${
                data.weight === weight
                  ? 'border-blue-600 bg-blue-50 text-blue-600'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              {weight}
            </button>
          ))}
        </div>
      </div>
      
      {data.isCuple && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Qual o peso do seu parceiro(a)?
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {WEIGHT_OPTIONS.map((weight) => (
              <button
                key={weight}
                onClick={() => updateData({ weightPartner: weight })}
                className={`p-4 border rounded-lg text-center transition-colors ${
                  data.weightPartner === weight
                    ? 'border-blue-600 bg-blue-50 text-blue-600'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                {weight}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderBackProblems = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Problemas de coluna</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          {data.isCuple ? 'Você tem algum problema de coluna?' : 'Você tem algum problema de coluna?'}
        </label>
        <div className="space-y-3">
          {['Não tenho problemas', 'Dores leves ocasionais', 'Dores frequentes', 'Problemas crônicos'].map((problem) => (
            <label key={problem} className="flex items-center">
              <input
                type="radio"
                name="backProblems"
                checked={data.backProblems === problem}
                onChange={() => updateData({ backProblems: problem })}
                className="mr-3"
              />
              <span>{problem}</span>
            </label>
          ))}
        </div>
      </div>
      
      {data.isCuple && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Seu parceiro(a) tem algum problema de coluna?
          </label>
          <div className="space-y-3">
            {['Não tem problemas', 'Dores leves ocasionais', 'Dores frequentes', 'Problemas crônicos'].map((problem) => (
              <label key={problem} className="flex items-center">
                <input
                  type="radio"
                  name="backProblemsPartner"
                  checked={data.backProblemsPartner === problem}
                  onChange={() => updateData({ backProblemsPartner: problem })}
                  className="mr-3"
                />
                <span>{problem}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderAgeRange = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Faixa etária</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          {data.isCuple ? 'Qual sua faixa etária?' : 'Qual sua faixa etária?'}
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['18-30', '31-45', '46-60', '60+'].map((age) => (
            <button
              key={age}
              onClick={() => updateData({ ageRange: age })}
              className={`p-4 border rounded-lg text-center transition-colors ${
                data.ageRange === age
                  ? 'border-blue-600 bg-blue-50 text-blue-600'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              {age}
            </button>
          ))}
        </div>
      </div>
      
      {data.isCuple && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Qual a faixa etária do seu parceiro(a)?
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['18-30', '31-45', '46-60', '60+'].map((age) => (
              <button
                key={age}
                onClick={() => updateData({ ageRangePartner: age })}
                className={`p-4 border rounded-lg text-center transition-colors ${
                  data.ageRangePartner === age
                    ? 'border-blue-600 bg-blue-50 text-blue-600'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                {age}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderBudget = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Orçamento</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          Qual sua faixa de orçamento para o colchão?
        </label>
        <div className="space-y-3">
          {[
            'Até R$ 500',
            'R$ 501 a R$ 1.000',
            'R$ 1.001 a R$ 1.500',
            'R$ 1.501 a R$ 2.500',
            'Acima de R$ 2.500'
          ].map((budgetRange) => (
            <label key={budgetRange} className="flex items-center">
              <input
                type="radio"
                name="budget"
                checked={data.budget === budgetRange}
                onChange={() => updateData({ budget: budgetRange })}
                className="mr-3"
              />
              <span>{budgetRange}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAdditionalInfo = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Informações adicionais</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          Há algo mais que você gostaria de nos contar sobre suas necessidades de sono?
        </label>
        <textarea
          value={data.additionalInfo}
          onChange={(e) => updateData({ additionalInfo: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={4}
          placeholder="Informações adicionais (opcional)"
        />
      </div>
    </div>
  );

  // Check if current step is complete
  const isStepComplete = () => {
    switch (currentStep) {
      case 1:
        return data.name.trim() !== '';
      case 2:
        return data.position !== '' && (!data.isCuple || data.positionPartner !== '');
      case 3:
        return data.currentIssues.length > 0;
      case 4:
        return data.firmness !== '' && data.temperature !== '';
      case 5:
        return data.height !== '' && (!data.isCuple || data.heightPartner !== '');
      case 6:
        return data.weight !== '' && (!data.isCuple || data.weightPartner !== '');
      case 7:
        return data.backProblems !== '' && (!data.isCuple || data.backProblemsPartner !== '');
      case 8:
        return data.ageRange !== '' && (!data.isCuple || data.ageRangePartner !== '');
      case 9:
        return data.budget !== '';
      case 10:
        return true; // Additional info is optional
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mapa do Sono IA
            </h1>
            <p className="text-lg text-gray-600">
              Responda algumas perguntas para encontrarmos o colchão ideal para você
            </p>
          </div>

          {/* Progress Bar */}
          {renderProgressBar()}

          {/* Question Content */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8">
            {renderStep()}
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                currentStep === 1
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-gray-600 text-white hover:bg-gray-700'
              }`}
            >
              Anterior
            </button>
            
            <button
              onClick={nextStep}
              disabled={!isStepComplete()}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                !isStepComplete()
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {currentStep === TOTAL_STEPS ? 'Finalizar' : 'Próximo'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
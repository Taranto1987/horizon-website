'use client';

import { useState } from 'react';
import { contactInfo } from '@/data/products';

interface SleepData {
  height: number;
  weight: number;
  sleepPosition: 'costas' | 'lado' | 'barriga';
  backProblems: boolean;
  partnerMovement: boolean;
  hotSleeper: boolean;
}

export default function SleepCalculator() {
  const [step, setStep] = useState(1);
  const [sleepData, setSleepData] = useState<SleepData>({
    height: 170,
    weight: 70,
    sleepPosition: 'lado',
    backProblems: false,
    partnerMovement: false,
    hotSleeper: false
  });
  const [recommendation, setRecommendation] = useState<string>('');

  const calculateRecommendation = () => {
    let recommendedProduct = '';
    let reasoning = '';

    // Logic based on sleep data
    if (sleepData.backProblems) {
      recommendedProduct = 'Ortopédico (Espuma D33)';
      reasoning = 'Suporte firme ideal para problemas de coluna';
    } else if (sleepData.hotSleeper) {
      recommendedProduct = 'Amazon Prime Gel Pocket® ou Evolution Gel';
      reasoning = 'Tecnologia gel para controle de temperatura';
    } else if (sleepData.partnerMovement) {
      recommendedProduct = 'Silver Star Air Pocket® ou Gold Star Pocket®';
      reasoning = 'Molas pocket independentes reduzem transferência de movimento';
    } else if (sleepData.weight > 90) {
      recommendedProduct = 'Kingdom Látex ou Gold Star Pocket®';
      reasoning = 'Suporte superior para pessoas com maior peso';
    } else if (sleepData.sleepPosition === 'barriga') {
      recommendedProduct = 'Fontana Pocket® ou Light Stress Pocket®';
      reasoning = 'Firmeza equilibrada para quem dorme de barriga';
    } else {
      recommendedProduct = 'Technopadic Híbrido Pocket®';
      reasoning = 'Conforto balanceado para o perfil geral';
    }

    setRecommendation(`${recommendedProduct} - ${reasoning}`);
    setStep(4);
  };

  const handleInputChange = (field: keyof SleepData, value: string | number | boolean) => {
    setSleepData(prev => ({ ...prev, [field]: value }));
  };

  const resetCalculator = () => {
    setStep(1);
    setSleepData({
      height: 170,
      weight: 70,
      sleepPosition: 'lado',
      backProblems: false,
      partnerMovement: false,
      hotSleeper: false
    });
    setRecommendation('');
  };

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">🧠 Mapa do Sono IA</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nossa inteligência artificial irá analisar seu perfil de sono e recomendar 
            o colchão perfeito para você!
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Etapa {step} de 4</span>
              <span className="text-sm text-gray-500">{Math.round((step / 4) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(step / 4) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Step 1: Physical Data */}
          {step === 1 && (
            <div>
              <h3 className="text-xl font-semibold mb-6">Dados Físicos</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Altura: {sleepData.height}cm
                  </label>
                  <input
                    type="range"
                    min="140"
                    max="210"
                    value={sleepData.height}
                    onChange={(e) => handleInputChange('height', parseInt(e.target.value))}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Peso: {sleepData.weight}kg
                  </label>
                  <input
                    type="range"
                    min="40"
                    max="150"
                    value={sleepData.weight}
                    onChange={(e) => handleInputChange('weight', parseInt(e.target.value))}
                    className="w-full"
                  />
                </div>
                <button
                  onClick={() => setStep(2)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors"
                >
                  Próximo →
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Sleep Position */}
          {step === 2 && (
            <div>
              <h3 className="text-xl font-semibold mb-6">Posição Preferida para Dormir</h3>
              <div className="space-y-4">
                {[
                  { value: 'lado', label: '🛌 De lado (mais comum)', desc: 'Durmo principalmente de lado' },
                  { value: 'costas', label: '⬆️ De costas', desc: 'Prefiro dormir de costas' },
                  { value: 'barriga', label: '⬇️ De barriga', desc: 'Durmo de barriga para baixo' }
                ].map((position) => (
                  <button
                    key={position.value}
                    onClick={() => handleInputChange('sleepPosition', position.value)}
                    className={`w-full p-4 text-left border-2 rounded-lg transition-colors ${
                      sleepData.sleepPosition === position.value
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="font-medium">{position.label}</div>
                    <div className="text-sm text-gray-600">{position.desc}</div>
                  </button>
                ))}
                <div className="flex space-x-4 mt-6">
                  <button
                    onClick={() => setStep(1)}
                    className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 py-3 px-6 rounded-lg font-medium transition-colors"
                  >
                    ← Voltar
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors"
                  >
                    Próximo →
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Sleep Preferences */}
          {step === 3 && (
            <div>
              <h3 className="text-xl font-semibold mb-6">Preferências de Sono</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <div className="font-medium">Problemas de coluna?</div>
                    <div className="text-sm text-gray-600">Dores nas costas ou problemas ortopédicos</div>
                  </div>
                  <button
                    onClick={() => handleInputChange('backProblems', !sleepData.backProblems)}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      sleepData.backProblems ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 bg-white rounded-full transition-transform ${
                        sleepData.backProblems ? 'translate-x-6' : 'translate-x-0.5'
                      }`}
                    ></div>
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <div className="font-medium">Incomoda movimento do parceiro?</div>
                    <div className="text-sm text-gray-600">Acordar quando o parceiro se mexe na cama</div>
                  </div>
                  <button
                    onClick={() => handleInputChange('partnerMovement', !sleepData.partnerMovement)}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      sleepData.partnerMovement ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 bg-white rounded-full transition-transform ${
                        sleepData.partnerMovement ? 'translate-x-6' : 'translate-x-0.5'
                      }`}
                    ></div>
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <div className="font-medium">Sente calor durante o sono?</div>
                    <div className="text-sm text-gray-600">Acorda com calor ou suando</div>
                  </div>
                  <button
                    onClick={() => handleInputChange('hotSleeper', !sleepData.hotSleeper)}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      sleepData.hotSleeper ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 bg-white rounded-full transition-transform ${
                        sleepData.hotSleeper ? 'translate-x-6' : 'translate-x-0.5'
                      }`}
                    ></div>
                  </button>
                </div>
              </div>

              <div className="flex space-x-4 mt-6">
                <button
                  onClick={() => setStep(2)}
                  className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 py-3 px-6 rounded-lg font-medium transition-colors"
                >
                  ← Voltar
                </button>
                <button
                  onClick={calculateRecommendation}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-medium transition-colors"
                >
                  🧠 Calcular IA
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Results */}
          {step === 4 && (
            <div className="text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Análise Completa!</h3>
                <p className="text-gray-600">Nossa IA analisou seu perfil e encontrou a recomendação perfeita:</p>
              </div>

              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold text-green-800 mb-2">Recomendação IA:</h4>
                <p className="text-green-700">{recommendation}</p>
              </div>

              <div className="space-y-4">
                <a
                  href={`https://wa.me/55${contactInfo.whatsapp.replace(/\D/g, '')}?text=Olá! Fiz o teste do Mapa do Sono IA e recebi a recomendação: ${recommendation}. Gostaria de saber mais sobre este produto!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-medium transition-colors"
                >
                  💬 Falar sobre esta Recomendação
                </a>
                <button
                  onClick={resetCalculator}
                  className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 py-3 px-6 rounded-lg font-medium transition-colors"
                >
                  🔄 Fazer Novo Teste
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
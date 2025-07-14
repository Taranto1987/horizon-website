'use client'

import { useState } from 'react'
import { biotipoQuestions, getBiotipoResult, type BiotipoQuestion } from './calculatorData'

export default function BiotipoCalculator() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [result, setResult] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(false)

  const handleAnswer = (questionId: string, points: number) => {
    const newAnswers = { ...answers, [questionId]: points }
    setAnswers(newAnswers)

    if (currentQuestion < biotipoQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Calculate result
      const totalPoints = Object.values(newAnswers).reduce((sum, points) => sum + points, 0)
      const biotipoResult = getBiotipoResult(totalPoints)
      setResult(biotipoResult)
      setShowResult(true)
    }
  }

  const resetCalculator = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setResult(null)
    setShowResult(false)
  }

  const shareResult = () => {
    const message = `Meu biotipo é: ${result}. Calculado na Loja Castor Cabo Frio!`
    const whatsappUrl = `https://wa.me/5522999999999?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  if (showResult && result) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-castor-brown mb-4 text-center">
          Resultado da Calculadora de Biotipo
        </h3>
        
        <div className="bg-castor-cream p-6 rounded-lg mb-6">
          <p className="text-lg font-semibold text-castor-brown text-center">
            {result}
          </p>
        </div>

        <div className="text-center space-y-4">
          <p className="text-gray-600">
            Conhecer seu biotipo ajuda a escolher os produtos ideais para suas necessidades!
          </p>
          
          <div className="flex gap-4 justify-center">
            <button
              onClick={resetCalculator}
              className="btn-secondary"
            >
              Refazer Teste
            </button>
            <button
              onClick={shareResult}
              className="btn-primary"
            >
              Compartilhar Resultado
            </button>
          </div>
        </div>
      </div>
    )
  }

  const question = biotipoQuestions[currentQuestion]

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-castor-brown">
            Calculadora de Biotipo
          </h3>
          <span className="text-sm text-gray-500">
            {currentQuestion + 1} de {biotipoQuestions.length}
          </span>
        </div>
        
        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-castor-brown h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / biotipoQuestions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-medium text-gray-800 mb-4">
          {question.question}
        </h4>
        
        <div className="space-y-3">
          {question.options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleAnswer(question.id, option.points)}
              className="w-full text-left p-4 border border-gray-200 rounded-lg hover:border-castor-brown hover:bg-castor-cream transition-colors"
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="text-center text-sm text-gray-500">
        Descubra seu biotipo e encontre os produtos ideais para você!
      </div>
    </div>
  )
}
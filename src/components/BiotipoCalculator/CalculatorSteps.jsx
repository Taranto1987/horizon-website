import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CheckCircle, ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';

const CalculatorSteps = ({
  currentStepData,
  answers,
  handleAnswer,
  prevStep,
  nextStep,
  isFirstStep,
  isLastStep,
}) => {
  if (!currentStepData) return null;

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStepData.id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="calculator-step rounded-2xl p-6 md:p-8 mb-8"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <currentStepData.icon className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
              {currentStepData.title}
            </h2>
            {currentStepData.type !== 'idade' && <p className="text-muted-foreground text-sm md:text-base">Selecione a opção que melhor descreve você ou sua necessidade.</p>}
          </div>

          {currentStepData.type === 'idade' ? (
            <div className="space-y-4">
              <div>
                <Label htmlFor={`idade-${currentStepData.person}`} className="text-sm font-medium text-foreground">Idade ({currentStepData.person}) em anos (ex: 30)</Label>
                <Input 
                  id={`idade-${currentStepData.person}`} 
                  type="number" 
                  placeholder="Ex: 30"
                  value={answers[currentStepData.id] || ''}
                  onChange={(e) => handleAnswer(currentStepData.id, e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>
          ) : (
            <div className="grid gap-3 md:gap-4">
              {currentStepData.options.map((option) => (
                <motion.button
                  key={option.value}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAnswer(currentStepData.id, option.value)}
                  className={`bio-option p-3 md:p-4 rounded-xl border-2 text-left transition-all ${
                    answers[currentStepData.id] === option.value
                      ? 'selected'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-foreground text-sm md:text-base mb-1">
                        {option.label}
                      </div>
                      <div className="text-xs md:text-sm text-muted-foreground">
                        {option.description}
                      </div>
                    </div>
                    {answers[currentStepData.id] === option.value && (
                      <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    )}
                  </div>
                </motion.button>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-between">
        <Button
          onClick={prevStep}
          variant="outline"
          disabled={isFirstStep}
          className="border-border text-muted-foreground hover:bg-secondary"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Anterior
        </Button>

        <Button
          onClick={nextStep}
          disabled={!answers[currentStepData.id]}
          className="button-castor-primary disabled:opacity-50"
        >
          {isLastStep ? (
            <>
              <Sparkles className="w-4 h-4 mr-2" />
              Ver Meu Castor Ideal
            </>
          ) : (
            <>
              Próximo
              <ArrowRight className="w-4 h-4 ml-2" />
            </>
          )}
        </Button>
      </div>
    </>
  );
};

export default CalculatorSteps;





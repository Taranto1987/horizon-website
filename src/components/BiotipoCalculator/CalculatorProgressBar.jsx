import React from 'react';
import { motion } from 'framer-motion';

const CalculatorProgressBar = ({ currentStep, totalSteps }) => {
  const progressPercentage = totalSteps > 0 ? ((currentStep + 1) / totalSteps) * 100 : 0;

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm text-muted-foreground">
          Etapa {currentStep + 1} de {totalSteps}
        </span>
        <span className="text-sm text-primary">
          {Math.round(progressPercentage)}% concluído
        </span>
      </div>
      <div className="w-full bg-secondary rounded-full h-2.5">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progressPercentage}%` }}
          className="bg-gradient-to-r from-primary to-primary-accent h-2.5 rounded-full"
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  );
};

export default CalculatorProgressBar;
import React from "react";

interface StepperProps {
  steps: string[];
  currentStep: number;
}

const StepperPill: React.FC<StepperProps> = ({ steps, currentStep }) => {
  return (
    <div className="flex items-center justify-center gap-4 my-4">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`flex items-center justify-center w-20 h-10 border rounded-full 
            ${index <= currentStep ? "border-secondary" : "border-gray-300"} 
            bg-white hover:bg-primary transition-colors duration-200`}
        >
          <span className="text-center">{step}</span>
        </div>
      ))}
    </div>
  );
};

export default StepperPill;

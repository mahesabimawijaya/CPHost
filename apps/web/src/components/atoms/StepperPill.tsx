import React from "react";

interface StepperProps {
  steps: string[];
  currentStep: number;
}

const StepperPill: React.FC<StepperProps> = ({ steps, currentStep }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="absolute w-[1330px] h-0.5 bg-secondary z-0" />
      <div className="flex items-center justify-between gap-24 relative z-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex items-center justify-center px-8 py-2 border-2 rounded-full uppercase
              ${index <= currentStep ? "border-secondary" : "border-secondary"} 
              bg-white hover:bg-primary transition-colors duration-200 hover:text-white`}
          >
            <span className="text-center">{step}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepperPill;

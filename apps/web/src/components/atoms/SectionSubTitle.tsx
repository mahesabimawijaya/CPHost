import React from "react";

interface SectionSubTitleProps {
  subtitle: string;
}

const SectionSubTitle: React.FC<SectionSubTitleProps> = ({ subtitle }) => {
  return (
    <div>
      <div className="text-center text-primary bg-secondary rounded-full py-2 font-semibold w-48">
        {subtitle}
      </div>
    </div>
  );
};

export default SectionSubTitle;

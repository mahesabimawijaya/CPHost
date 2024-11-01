import React from "react";

interface SectionSubTitleThinProps {
  subtitle: string;
}

const SectionSubTitleThin: React.FC<SectionSubTitleThinProps> = ({
  subtitle,
}) => {
  return (
    <div className="flex items-center justify-center w-52 py-3">
      <span className="flex-grow border-t-2 border-primary"></span>
      <div className="text-center text-primary font-semibold px-4">
        {subtitle}
      </div>
      <span className="flex-grow border-t-2 border-primary"></span>
    </div>
  );
};

export default SectionSubTitleThin;

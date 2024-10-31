import React from "react";

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div>
      <div className="text-5xl font-bold">{title}</div>
    </div>
  );
};

export default SectionTitle;

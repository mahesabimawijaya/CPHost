import React from "react";

interface SectionTitleProps {
  title: string;
  color?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, color }) => {
  return (
    <div>
      <div className={`${color ? `text-${color}` : ``} text-5xl font-bold`}>{title}</div>
    </div>
  );
};

export default SectionTitle;

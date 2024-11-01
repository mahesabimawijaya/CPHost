import React from "react";

interface SectionDescProps {
  desc: string;
}

const SectionDesc: React.FC<SectionDescProps> = ({ desc }) => {
  return (
    <div>
      <div className="text-[#354062] py-4">{desc}</div>
    </div>
  );
};

export default SectionDesc;

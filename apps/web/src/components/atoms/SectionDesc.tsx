import React from "react";

interface SectionDescProps {
  desc: string;
}

const SectionDesc: React.FC<SectionDescProps> = ({ desc }) => {
  return (
    <div>
      <div className="text-[#354062] py-4 w-[550px] leading-loose text-center">
        {desc}
      </div>
    </div>
  );
};

export default SectionDesc;

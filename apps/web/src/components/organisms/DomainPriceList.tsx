import React from "react";
import { IconData } from "../../types/DomainPage"; // Update this if IconData is defined elsewhere
import { baseImageUrl } from "../../utils/helper";

interface DomainPriceListProps {
  headers: string[];
  rows: {
    domainLogo: IconData;
    registerFee: number;
    transferFee: number;
    renewFee: number;
  }[];
}

const DomainPriceList: React.FC<DomainPriceListProps> = ({ headers, rows }) => {
  return (
    <div className="flex justify-center items-center flex-col mt-10">
      <div className="flex">
        {headers.map((header, index) => (
          <div key={index} className="relative flex flex-col items-center">
            <div
              className="bg-primary absolute z-10 text-white text-center px-4 py-2.5 top-[-24px] w-[200px] text-lg font-medium"
              style={{
                clipPath:
                  "polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)",
              }}
            >
              {header}
            </div>
            <div className="bg-third border-secondary border relative w-80 h-10 flex items-center justify-center"></div>
          </div>
        ))}
      </div>
      {rows.map((row, rowIndex) => {
        const domainIcon = baseImageUrl + row.domainLogo.data.attributes.url;
        return (
          <div key={rowIndex} className="flex">
            <div className="bg-third border-secondary border relative w-80 h-14 flex items-center px-8">
              <div className="w-16">
                <img src={domainIcon} alt="Domain logo" className="" />
              </div>
            </div>
            <div className="bg-third border-secondary border relative font-semibold w-80 h-14 flex items-center justify-center">
              ${row.registerFee}
            </div>
            <div className="bg-third border-secondary border relative  font-semibold w-80 h-14 flex items-center justify-center">
              ${row.transferFee}
            </div>
            <div className="bg-third border-secondary border relative font-semibold w-80 h-14 flex items-center justify-center">
              ${row.renewFee}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DomainPriceList;

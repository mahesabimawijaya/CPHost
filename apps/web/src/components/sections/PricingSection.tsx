import { useState } from "react";
import { PlanSection } from "../../types/LandingPage";
import { baseImageUrl } from "../../utils/helper";
import PriceCard from "../molecules/PriceCard";
import SectionSubTitle2 from "../atoms/SectionSubTitle2";

const PricingSection = ({ pricingSection }: { pricingSection: PlanSection }) => {
  const [currPeriod, setCurrPeriod] = useState("Monthly");
  const backgroundImage = baseImageUrl + pricingSection.backgroundImage.data.attributes.url;
  return (
    <section
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full flex justify-center items-center bg-[#F3F7FB] py-[130px]"
    >
      <div className="w-primary h-[1200px] flex flex-col items-center">
        <SectionSubTitle2 text="Pricing Plans" />
        <h1 className="text-5xl font-bold mt-5 leading-tight mb-12 w-[700px] text-center">{pricingSection.title}</h1>
        <div className="flex items-center space-x-1 font-medium rounded-full border border-gray-300 bg-white p-[6px] mb-28">
          {pricingSection.period.map((period, i) => (
            <div
              key={i}
              onClick={() => {
                setCurrPeriod(period.benefit);
              }}
              className={`${currPeriod === period.benefit ? "bg-primary text-white cursor-default" : "cursor-pointer hover:bg-blue-100"} rounded-full py-4 px-7 w-1/2 duration-300`}
            >
              {period.benefit}
            </div>
          ))}
        </div>
        <div id="pricing-container" className="w-full flex justify-center space-x-8 items-center">
          {pricingSection.plans.data.map((plan, i) => (
            <PriceCard plan={plan} period={currPeriod} i={i} key={i} checkout={false} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

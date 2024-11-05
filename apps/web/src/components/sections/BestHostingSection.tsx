import { FaCheck } from "react-icons/fa6";
import { BestHosting } from "../../types/LandingPage";
import { baseImageUrl } from "../../utils/helper";
import SectionTitle from "../atoms/SectionTitle";
import SectionSubTitle2 from "../atoms/SectionSubTitle2";

const BestHostingSection = ({ bestHosting }: { bestHosting: BestHosting }) => {
  return (
    <section className="flex justify-center items-center w-full py-[150px] pb-[400px]">
      <div className="flex items-center w-primary justify-between">
        <div id="best-hosting-left">
          <img src={baseImageUrl + bestHosting.image.data.attributes.url} alt="" />
        </div>
        <div id="best-hosting-right" className="flex flex-col w-[546px] space-y-8">
          <SectionSubTitle2 text={bestHosting.subtitle} />
          <div className="w-[500px] capitalize tracking-wide">
            <SectionTitle title={bestHosting.title} />
          </div>
          <p className="text-gray-600 text-lg">{bestHosting.description}</p>
          <div className="flex flex-wrap text-lg text-gray-600">
            {bestHosting.bestHostingBenefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-2 m-2">
                <FaCheck color="blue" />
                {benefit.benefit}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestHostingSection;

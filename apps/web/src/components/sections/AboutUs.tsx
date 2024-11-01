import { AboutUsSection } from "../../types/LandingPage";
import { baseImageUrl } from "../../utils/helper";
import SectionTitle from "../atoms/SectionTitle";
import StatisticCard from "../molecules/StatisticCard";

const AboutUs = ({ aboutUs }: { aboutUs: AboutUsSection }) => {
  return (
    <section className="w-full h-[1250px] flex justify-center items-center pt-20">
      <div className="w-primary flex items-center justify-between">
        <div id="about-us-left">
          <div className="relative">
            <img src={baseImageUrl + aboutUs.largeImage.data.attributes.url} alt="" />
            <img src={baseImageUrl + aboutUs.mediumImage.data.attributes.url} className="absolute bottom-[-130px] right-[-180px] w-[390px]" alt="" />
            <div className="absolute bg-[#384BFF] text-white text-[22px] px-8 py-4 rounded-full top-[240px] left-[-130px] tracking-wide rotate-[270deg]">Successful Hosting 25k+</div>
          </div>
        </div>
        <div id="about-us-right" className="flex flex-col w-[536px]">
          <SectionTitle text="about us" />
          <h1 className="text-5xl font-bold mt-5 leading-tight mb-10">{aboutUs.title}</h1>
          <p className="text-gray-600 leading-relaxed mb-10">{aboutUs.description}</p>
          <hr />
          <StatisticCard globalCustomers={aboutUs.globalCustomers} successCase={aboutUs.successCase} imgUrl={baseImageUrl + aboutUs.smallImage.data.attributes.url} />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
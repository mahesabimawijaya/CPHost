import { FaArrowRightLong } from "react-icons/fa6";
import { HeroSection } from "../../types/LandingPage";
import PlayButton from "../atoms/PlayButton";
import DomainPill from "../atoms/DomainPill";
import HeroTitle from "../atoms/HeroTitle";
import DomainInput from "../atoms/DomainInput";
import { baseImageUrl } from "../../utils/helper";
import "./../../index.css";

const Hero = ({ hero }: { hero: HeroSection }) => {
  const backgroundImage = baseImageUrl + hero.backgroundImage.data.attributes.url;
  const heroBackgroundImage = baseImageUrl + hero.heroImageBackground.data.attributes.url;
  const heroImage = baseImageUrl + hero.heroImage.data.attributes.url;

  return (
    <section
      id="hero"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full pt-[90px] h-[1074px] pb-[200px] flex items-center justify-center text-white"
    >
      <div className="w-[1240px] flex items-center justify-between">
        <div id="hero-left" className="flex flex-col w-[590px] items-start">
          <HeroTitle title={hero.title} />
          <p className="font-semibold text-[17px] w-[500px] mb-14">{hero.description}</p>
          <div className="flex items-center space-x-6 font-semibold text-[17px] mb-10">
            <button className="bg-[#FFA31A] px-[40px] py-[20px] rounded-full flex items-center gap-4  hover:bg-white hover:text-black duration-200">
              {hero.getStartedButton} <FaArrowRightLong />{" "}
            </button>
            <PlayButton link={hero.youtubeLink} />
            <p className="underline">Watch Video</p>
          </div>
          <div id="domain-pills" className="flex items-center space-x-3 mb-5">
            {hero.domainPricing.slice(0, 3).map((domain, i) => (
              <DomainPill key={i} domain={domain} />
            ))}
          </div>
          <DomainInput domains={hero.domainPricing} />
        </div>
        <div id="hero-right" className="relative">
          <img src={heroBackgroundImage} alt="" className="animate-spin-slow" />
          <img src={heroImage} alt="" className="absolute top-[-50px] left-4" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { Link } from "react-router-dom";
import { ISubHeroSection } from "../../types/AboutUsPage";
import { baseImageUrl } from "../../utils/helper";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const SubHeroSection = ({ subHero }: { subHero: ISubHeroSection }) => {
  const backgroundImage = baseImageUrl + subHero.backgroundImage.data.attributes.url;
  return (
    <section
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "left",
      }}
      className="w-full h-screen flex justify-center"
    >
      <div className="flex w-primary items-center justify-between">
        <div id="sub-hero-left" className="flex flex-col justify-center space-y-7 text-white">
          <h1 className="text-7xl font-bold">{subHero.title}</h1>
          <div className="flex items-center text-lg font-medium space-x-2">
            <Link to={"/"}>Home</Link>
            <MdKeyboardDoubleArrowRight size={28} />
            <p className="text-[#FFA31A]">{subHero.title}</p>
          </div>
        </div>
        <div id="sub-hero-right">
          <img src={baseImageUrl + subHero.image.data.attributes.url} alt="" className="w-[360px]" />
        </div>
      </div>
    </section>
  );
};

export default SubHeroSection;

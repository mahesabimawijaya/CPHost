import { useAppSelector } from "../../lib/redux/hooks";
import { RootState } from "../../lib/redux/store";
import { ISubHeroSection, ITeamSection } from "../../types/AboutUsPage";
import { AboutUsSection, BestHosting, Review } from "../../types/LandingPage";
import Loading from "../atoms/Loading";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import AboutUs from "../sections/AboutUs";
import BestHostingSection from "../sections/BestHostingSection";
import ReviewSection from "../sections/ReviewSection";
import SubHeroSection from "../sections/SubHeroSection";
import TeamSection from "../sections/TeamSection";

const AboutUsPage = () => {
  const { aboutUsPage, error } = useAppSelector((state: RootState) => state.strapi);
  const attributes = aboutUsPage?.data.attributes;
  const subHero = attributes?.subHeroSection;
  const aboutUs = attributes?.aboutUsSection;
  const bestHosting = attributes?.bestHostingSection;
  const review = attributes?.reviewSection;
  const team = attributes?.teamSection;

  console.log(aboutUsPage);

  if (!aboutUsPage) return <Loading />;
  if (error) console.log(error);

  return (
    <>
      <Header />
      <SubHeroSection subHero={subHero as ISubHeroSection} />
      <AboutUs aboutUs={aboutUs as AboutUsSection} />
      <BestHostingSection bestHosting={bestHosting as BestHosting} />
      <TeamSection team={team as ITeamSection} />
      <ReviewSection review={review as Review} />
      <Footer />
    </>
  );
};

export default AboutUsPage;

import { useAppSelector } from "../../lib/redux/hooks";
import { RootState } from "../../lib/redux/store";
import { BestHosting, Faq } from "../../types/LandingPage";
import { IRecommendationSection, ISubHeroSection } from "../../types/ServicePage";
import Loading from "../atoms/Loading";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import BestHostingSection from "../sections/BestHostingSection";
import FaqSection from "../sections/FaqSection";
import RecommendationSection from "../sections/RecommendationSection";
import SubHeroSection from "../sections/SubHeroSection";

const ServicesPage = () => {
  const { servicesPage, error } = useAppSelector((state: RootState) => state.strapi);
  console.log(servicesPage);
  const attributes = servicesPage?.data.attributes;
  const subHero = attributes?.subHeroSection;
  const recommendation = attributes?.recommendationSection;
  const bestHosting = attributes?.bestHostingSection;
  const faq = attributes?.faqSection;

  if (!servicesPage) return <Loading />;
  if (error) console.error(error);

  return (
    <>
      <Header />
      <SubHeroSection subHero={subHero as ISubHeroSection} />
      <RecommendationSection recommendation={recommendation as IRecommendationSection} />
      <BestHostingSection bestHosting={bestHosting as BestHosting} />
      <FaqSection faq={faq as Faq} />
      <Footer />
    </>
  );
};

export default ServicesPage;

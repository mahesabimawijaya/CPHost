import Hero from "../sections/Hero";
import { AboutUsSection, HeroSection, IFeature, PlanSection, ITemplateSection, BestHosting, ContactUs, Review, Faq } from "../../types/LandingPage";
import Loading from "../atoms/Loading";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import Feature from "../sections/Feature";
import AboutUs from "../sections/AboutUs";
import PricingSection from "../sections/PricingSection";
import TemplateSection from "../sections/TemplateSection";
import { useAppSelector } from "../../lib/redux/hooks";
import { RootState } from "../../lib/redux/store";
import BestHostingSection from "../sections/BestHostingSection";
import ContactUsSection from "../sections/ContactUsSection";
import ReviewSection from "../sections/ReviewSection";
import FaqSection from "../sections/FaqSection";

const LandingPage = () => {
  const { landingPage, error } = useAppSelector((state: RootState) => state.strapi);
  const attributes = landingPage?.data.attributes;
  const hero = attributes?.heroSection;
  const features = attributes?.featureSection.features;
  const aboutUs = attributes?.aboutUsSection;
  const pricing = attributes?.pricingSection;
  const template = attributes?.templateSection;
  const bestHosting = attributes?.bestHostingSection;
  const contactUs = attributes?.contactUsSection;
  const review = attributes?.reviewSection;
  const faq = attributes?.faqSection;

  if (!landingPage) return <Loading />;
  if (error) throw new Error("Error fetching header");

  return (
    <>
      <Header />
      <Hero hero={hero as HeroSection} />
      <Feature features={features as IFeature[]} />
      <AboutUs aboutUs={aboutUs as AboutUsSection} />
      <PricingSection pricingSection={pricing as PlanSection} />
      <TemplateSection templateSection={template as ITemplateSection} />
      <BestHostingSection bestHosting={bestHosting as BestHosting} />
      <ContactUsSection contactUs={contactUs as ContactUs} />
      <ReviewSection review={review as Review} />
      <FaqSection faq={faq as Faq} />
      <Footer />
    </>
  );
};

export default LandingPage;

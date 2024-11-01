import Hero from "../sections/Hero";
import { fetchLandingPage } from "../../lib/redux/strapi.slice";
import { AboutUsSection, HeroSection, IFeature, PlanSection } from "../../types/LandingPage";
import Loading from "../atoms/Loading";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import Feature from "../sections/Feature";
import AboutUs from "../sections/AboutUs";
import PricingSection from "../sections/PricingSection";
import { useAppDispatch, useAppSelector } from "../../lib/redux/hooks";
import { RootState } from "../../lib/redux/store";
import { useEffect } from "react";

const LandingPage = () => {
  const { landingPage, error } = useAppSelector((state: RootState) => state.strapi);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchLandingPage());
  }, [dispatch]);

  const hero = landingPage?.data.attributes.heroSection;
  const features = landingPage?.data.attributes.featureSection.features;
  const aboutUs = landingPage?.data.attributes.aboutUsSection;
  const pricing = landingPage?.data.attributes.pricingSection;
  console.log(landingPage);

  if (!landingPage) return <Loading />;
  if (error) throw new Error("Error fetching header");

  return (
    <>
      <Header />
      <Hero hero={hero as HeroSection} />
      <Feature features={features as IFeature[]} />
      <AboutUs aboutUs={aboutUs as AboutUsSection} />
      <PricingSection pricingSection={pricing as PlanSection} />
      <Footer />
    </>
  );
};

export default LandingPage;

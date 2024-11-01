import { useQuery } from "@tanstack/react-query";
import Hero from "../sections/Hero";
import { fetchLandingPage } from "../../api/strapi.service";
import { AboutUsSection, HeroSection, IFeature, PlanSection, RootObject } from "../../types/LandingPage";
import Loading from "../atoms/Loading";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import Feature from "../sections/Feature";
import AboutUs from "../sections/AboutUs";
import PricingSection from "../sections/PricingSection";

const LandingPage = () => {
  const { data, isLoading, error } = useQuery<RootObject>({
    queryKey: ["landing-page"],
    queryFn: fetchLandingPage,
  });
  const hero = data?.data.attributes.heroSection;
  const features = data?.data.attributes.featureSection.features;
  const aboutUs = data?.data.attributes.aboutUsSection;
  const pricing = data?.data.attributes.pricingSection;
  console.log(data);

  if (isLoading) return <Loading />;
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

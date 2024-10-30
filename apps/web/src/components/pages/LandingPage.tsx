import { useQuery } from "@tanstack/react-query";
import Hero from "../sections/Hero";
import { fetchLandingPage } from "../../api/strapi.service";
import { HeroSection, RootObject } from "../../types/LandingPage";
import Loading from "../atoms/Loading";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

const LandingPage = () => {
  const { data, isLoading, error } = useQuery<RootObject>({ queryKey: ["landing-page"], queryFn: fetchLandingPage });
  const hero = data?.data.attributes.heroSection;

  if (isLoading) return <Loading />;
  if (error) throw new Error("Error fetching header");

  return (
    <>
      <Header />
      <Hero hero={hero as HeroSection} />
      <Footer />
    </>
  );
};

export default LandingPage;

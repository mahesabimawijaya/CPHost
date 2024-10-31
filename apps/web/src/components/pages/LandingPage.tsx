import { useQuery } from "@tanstack/react-query";
import Hero from "../sections/Hero";
import { fetchLandingPage } from "../../api/strapi.service";
import { HeroSection, RootObject } from "../../types/LandingPage";
import Loading from "../atoms/Loading";
import Header from "../organisms/Header";

const LandingPage = () => {
  const { data, isLoading, error } = useQuery<RootObject>({
    queryKey: ["landing-page"],
    queryFn: fetchLandingPage,
  });
  const hero = data?.data.attributes.heroSection;
  console.log(data);
  if (isLoading) return <Loading />;
  if (error) throw new Error("Error fetching header");
  return (
    <>
      <Header />
      <Hero hero={hero as HeroSection} />
    </>
  );
};

export default LandingPage;

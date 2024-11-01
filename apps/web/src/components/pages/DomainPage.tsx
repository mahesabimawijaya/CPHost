import { useQuery } from "@tanstack/react-query";
import { fetchDomainPage } from "../../api/strapi.service";
import { IPopularDomainSection, RootObject } from "../../types/DomainPage";
import Loading from "../atoms/Loading";
import Header from "../organisms/Header";
import PopularDomainSection from "../sections/PopularDomainSection";
import DomainPriceListSection from "../sections/DomainPriceListSection";

const DomainPage = () => {
  const { data, isLoading, error } = useQuery<RootObject>({
    queryKey: ["domain-page"],
    queryFn: fetchDomainPage,
  });

  if (isLoading) return <Loading />;
  if (error) return <div>Error fetching data: {error.message}</div>;

  const popularDomain = data?.data?.attributes?.popularDomainSection;

  // console.log("Recommendation:", recommendation);

  return (
    <>
      <Header />
      <PopularDomainSection
        popularDomain={popularDomain as IPopularDomainSection}
      />
      <DomainPriceListSection />
    </>
  );
};

export default DomainPage;

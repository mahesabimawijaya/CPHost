import { fetchDomainPage } from "../../lib/redux/strapi.slice";
import { IPopularDomainSection } from "../../types/DomainPage";
import Loading from "../atoms/Loading";
import Header from "../organisms/Header";
import PopularDomainSection from "../sections/PopularDomainSection";
import DomainPriceListSection from "../sections/DomainPriceListSection";
import { useAppDispatch, useAppSelector } from "../../lib/redux/hooks";
import { RootState } from "../../lib/redux/store";
import { useEffect } from "react";

const DomainPage = () => {
  // const { data, isLoading, error } = useQuery<RootObject>({
  //   queryKey: ["domain-page"],
  //   queryFn: fetchDomainPage,
  // });
  const dispatch = useAppDispatch();
  const { domainPage, error } = useAppSelector((state: RootState) => state.strapi);

  useEffect(() => {
    dispatch(fetchDomainPage());
  }, [dispatch]);

  if (!domainPage) return <Loading />;
  if (error) return <div>Error fetching data: {error}</div>;

  const popularDomain = domainPage?.data?.attributes?.popularDomainSection;
  console.log(domainPage);
  // console.log("Recommendation:", recommendation);

  return (
    <>
      <Header />
      <PopularDomainSection popularDomain={popularDomain as IPopularDomainSection} />
      <DomainPriceListSection />
    </>
  );
};

export default DomainPage;

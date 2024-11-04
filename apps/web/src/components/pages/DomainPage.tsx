import {
  IDomainPriceListSection,
  IPopularDomainSection,
} from "../../types/DomainPage";
import Loading from "../atoms/Loading";
import Header from "../organisms/Header";
import PopularDomainSection from "../sections/PopularDomainSection";
import DomainPriceListSection from "../sections/DomainPriceListSection";
import { useAppSelector } from "../../lib/redux/hooks";
import { RootState } from "../../lib/redux/store";
import Footer from "../organisms/Footer";

const DomainPage = () => {
  const { domainPage, error } = useAppSelector(
    (state: RootState) => state.strapi
  );

  if (!domainPage) return <Loading />;
  if (error) return <div>Error fetching data: {error}</div>;

  const popularDomain = domainPage?.data?.attributes?.popularDomainSection;
  const domainPriceList = domainPage?.data?.attributes?.domainPriceListSection;

  return (
    <>
      <Header />
      <PopularDomainSection
        popularDomain={popularDomain as IPopularDomainSection}
      />
      <DomainPriceListSection
        domainPriceList={domainPriceList as IDomainPriceListSection}
      />
      {/* CONTACT US */}
      {/* WHYCHOOSEUS */}
      {/* CLIENT FEEDBACK */}
      {/* RECOMMENDED */}
      {/* FAQ */}
      <Footer />
    </>
  );
};

export default DomainPage;

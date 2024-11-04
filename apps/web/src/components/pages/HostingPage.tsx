import WhyChooseUsSection from "../sections/WhyChooseUsSection";
import {
  IClientFeedbackSection,
  IRecommendationSection,
  IWhyChooseUsSection,
} from "../../types/HostingPage";
import Loading from "../atoms/Loading";
import Header from "../organisms/Header";
import RecommendationSection from "../sections/RecommendationSection";
import ClientFeedbackSection from "../sections/ClientFeedbackSection";
import { useAppSelector } from "../../lib/redux/hooks";
import { RootState } from "../../lib/redux/store";

const HostingPage = () => {
  const { hostingPage, error } = useAppSelector(
    (state: RootState) => state.strapi
  );

  console.log("Hosting page:", hostingPage);

  if (!hostingPage) return <Loading />;
  if (error) return <div>Error fetching data: {error}</div>;

  const whyChooseUs = hostingPage?.data.attributes.whyChooseUsSection;
  console.log("why choose us:", whyChooseUs);
  const recommendation = hostingPage?.data.attributes.recommendationSection;
  const feedback = hostingPage?.data.attributes.clientFeedbackSection;

  return (
    <>
      <Header />
      <WhyChooseUsSection whyChooseUs={whyChooseUs as IWhyChooseUsSection} />
      <ClientFeedbackSection feedback={feedback as IClientFeedbackSection} />
      <RecommendationSection
        recommendation={recommendation as IRecommendationSection}
      />
    </>
  );
};

export default HostingPage;

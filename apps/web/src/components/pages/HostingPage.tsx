import { useQuery } from "@tanstack/react-query";
import WhyChooseUsSection from "../sections/WhyChooseUsSection";
import { fetchHostingPage } from "../../api/strapi.service";
import { IClientFeedbackSection, IRecommendationSection, IWhyChooseUsSection, RootObject } from "../../types/HostingPage";
import Loading from "../atoms/Loading";
import Header from "../organisms/Header";
import RecommendationSection from "../sections/RecommendationSection";
import ClientFeedbackSection from "../sections/ClientFeedbackSection";
import Footer from "../organisms/Footer";

const HostingPage = () => {
  const { data, isLoading, error } = useQuery<RootObject>({
    queryKey: ["hosting-page"],
    queryFn: fetchHostingPage,
  });

  if (isLoading) return <Loading />;
  if (error) return <div>Error fetching data: {error.message}</div>;

  const whyChooseUs = data?.data?.attributes?.whyChooseUsSection;
  const recommendation = data?.data?.attributes?.recommendationSection;
  const feedback = data?.data?.attributes?.clientFeedbackSection;

  // console.log("Recommendation:", recommendation);

  return (
    <>
      <Header />
      <WhyChooseUsSection whyChooseUs={whyChooseUs as IWhyChooseUsSection} />
      <ClientFeedbackSection feedback={feedback as IClientFeedbackSection} />
      <RecommendationSection recommendation={recommendation as IRecommendationSection} />
      <Footer />
    </>
  );
};

export default HostingPage;

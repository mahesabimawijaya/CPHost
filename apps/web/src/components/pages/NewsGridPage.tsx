import { useAppSelector } from "../../lib/redux/hooks";
import { RootState } from "../../lib/redux/store";
import Loading from "../atoms/Loading";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import NewsGridSection from "../sections/NewsGridSection";
import { INewsGridSection } from "../../types/NewsGridPage";

const NewsGridPage = () => {
  const { newsGridPage, error } = useAppSelector(
    (state: RootState) => state.strapi
  );

  const newsGridSection = newsGridPage?.data.attributes.newsGridSection;

  console.log("News Grid Section:", newsGridSection);

  if (!newsGridPage) return <Loading />;
  if (error) throw new Error("Error fetching header");
  return (
    <>
      <Header />
      <NewsGridSection newsGridSection={newsGridSection as INewsGridSection} />
      <Footer />
    </>
  );
};

export default NewsGridPage;

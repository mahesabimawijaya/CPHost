import { INewsGridSection } from "../../types/NewsGridPage";
import { baseImageUrl } from "../../utils/helper";
import Loading from "../atoms/Loading";
import NewsGridCard from "../molecules/NewsGridCard";

const NewsGridSection = ({
  newsGridSection,
}: {
  newsGridSection: INewsGridSection;
}) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mx-auto max-w-screen-xl py-20">
      {/* NEWS GRID CARD */}
      {newsGridSection?.newsGridCard?.length > 0 ? (
        newsGridSection.newsGridCard.map((card: any) => {
          const newsImage = baseImageUrl + card.image.data.attributes.url;

          const writerImage =
            baseImageUrl + card.writerImage.data.attributes.url;

          return (
            <NewsGridCard
              key={card.id}
              id={card.id}
              image={newsImage}
              title={card.title}
              category={card.category}
              date={card.date}
              writerName={card.writerName}
              writerPos={card.writerPos}
              writerImage={writerImage}
            />
          );
        })
      ) : (
        <Loading />
      )}
    </section>
  );
};

export default NewsGridSection;

import SectionSubTitleThin from "../atoms/SectionSubtitleThin";
import SectionTitle from "../atoms/SectionTitle";
import SectionDesc from "../atoms/SectionDesc";
import NewsGridCard from "../molecules/NewsGridCard";
import { IOurNewsSection } from "../../types/LandingPage";
import { baseImageUrl } from "../../utils/helper";
import Loading from "../atoms/Loading";

const OurNewsSection = ({ ourNews }: { ourNews: IOurNewsSection }) => {
  return (
    <>
      <section className="flex flex-col items-center gap-6 mx-auto py-20  bg-third">
        <SectionSubTitleThin subtitle={ourNews.subtitle} />
        <SectionTitle title={ourNews.title} />
        <SectionDesc desc={ourNews.description} />

        <div className="grid grid-cols-3 gap-8">
          {/* NEWS GRID CARD */}
          {ourNews?.newsGridCard?.length > 0 ? (
            ourNews.newsGridCard.map((card: any) => {
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
        </div>
      </section>
    </>
  );
};

export default OurNewsSection;

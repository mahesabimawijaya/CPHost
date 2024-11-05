import SectionSubTitleThin from "../atoms/SectionSubtitleThin";
import SectionTitle from "../atoms/SectionTitle";
import SectionDesc from "../atoms/SectionDesc";
import NewsGridCard from "../molecules/NewsGridCard";

const OurNewsSection = () => {
  return (
    <>
      <section className="flex flex-col items-center gap-6 mx-auto py-20  bg-third">
        <SectionSubTitleThin subtitle={"Our News"} />
        <SectionTitle title={"Our Latest News"} />
        <SectionDesc
          desc={
            "Aliquam viverra accumsan lectus in dignissim ante interdum eu Sed odio assa rhoncus ac nulla vel iaculis egestas mauris"
          }
        />

        <div className="grid grid-cols-3 gap-8">
          <NewsGridCard />
          <NewsGridCard />
          <NewsGridCard />
        </div>
      </section>
    </>
  );
};

export default OurNewsSection;

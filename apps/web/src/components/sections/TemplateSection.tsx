import SectionDesc from "../atoms/SectionDesc";
import SectionSubTitleThin from "../atoms/SectionSubtitleThin";
import SectionTitle from "../atoms/SectionTitle";
import TemplateCard from "../molecules/TemplateCard";

const TemplateSection = ({}) => {
  return (
    <>
      <section className="flex flex-col items-center gap-4 w-screen mx-auto py-20">
        <SectionSubTitleThin subtitle={"Our Services"} />
        <SectionTitle title={"We Provide Web Templates"} />
        <SectionDesc
          desc="Aliquam viverra accumsan lectus in dignissim ante interdum eu Sed odio
massa rhoncus ac nulla vel iaculis egestas mauris 123"
        />

        {/* card */}
        <TemplateCard />
      </section>
    </>
  );
};

export default TemplateSection;

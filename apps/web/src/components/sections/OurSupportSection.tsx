import { IOurSupportSection } from "../../types/ContactPage";
import { baseImageUrl } from "../../utils/helper";
import SectionDesc from "../atoms/SectionDesc";
import SectionSubTitleThin from "../atoms/SectionSubtitleThin";
import SectionTitle from "../atoms/SectionTitle";
import OurSupportCard from "../molecules/OurSupportCard";

const OurSupportSection = ({
  ourSupport,
}: {
  ourSupport: IOurSupportSection;
}) => {
  return (
    <>
      <section className="flex flex-col items-center gap-4 w-screen mx-auto py-20">
        <SectionSubTitleThin subtitle={ourSupport.subtitle} />
        <SectionTitle title={ourSupport.title} />
        <SectionDesc desc={ourSupport.description} />

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ourSupport.ourSupportCard?.map((card: any) => {
            const img = baseImageUrl + card.icon.data.attributes.url;
            return (
              <OurSupportCard
                key={card.id || `card-${Math.random()}`}
                id={card.id || 0}
                icon={img}
                title={card.title}
                description={card.desc}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default OurSupportSection;

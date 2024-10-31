import WhyChooseUsCard from "../molecules/WhyChooseUsCard";
import { IWhyChooseUsSection } from "../../types/HostingPage";
import SectionSubTitle from "../atoms/SectionSubTitle";
import SectionTitle from "../atoms/SectionTitle";

interface Props {
  whyChooseUs: IWhyChooseUsSection;
}

const WhyChooseUsSection: React.FC<Props> = ({ whyChooseUs }) => {
  const baseImageUrl = import.meta.env.VITE_BASE_CMS_IMAGE_URL;

  return (
    <section className="flex flex-col items-center gap-16 w-screen mx-auto py-20">
      {/* TITLE */}
      <div className="flex-col items-center flex gap-4">
        <SectionSubTitle subtitle={whyChooseUs.subtitle} />
        <SectionTitle title={whyChooseUs.title} />
      </div>

      {/* CARD */}
      <div className="flex flex-wrap gap-4 justify-center">
        {whyChooseUs.whyChooseUsCard.map((card) => {
          const iconUrl = baseImageUrl + card.icon.data.attributes.url;

          return (
            <WhyChooseUsCard
              key={card.id}
              id={card.id}
              title={card.title}
              description={card.description}
              icon={iconUrl}
            />
          );
        })}
      </div>
    </section>
  );
};

export default WhyChooseUsSection;

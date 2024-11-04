import { ITemplateSection } from "../../types/LandingPage";
import { baseImageUrl } from "../../utils/helper";
import SectionDesc from "../atoms/SectionDesc";
import SectionSubTitleThin from "../atoms/SectionSubtitleThin";
import SectionTitle from "../atoms/SectionTitle";
import TemplateCard from "../molecules/TemplateCard";

const TemplateSection = ({
  templateSection,
}: {
  templateSection: ITemplateSection;
}) => {
  return (
    <>
      <section className="flex flex-col items-center gap-4 w-screen mx-auto py-20">
        <SectionSubTitleThin subtitle={"Our Services"} />
        <SectionTitle title={"We Provide Web Templates"} />
        <SectionDesc
          desc="Aliquam viverra accumsan lectus in dignissim ante interdum eu Sed odio
massa rhoncus ac nulla vel iaculis egestas mauris 123"
        />

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {templateSection.templates.data.map((template: any) => {
            const iconImage =
              baseImageUrl + template.attributes.icon.data.attributes.url;

            return (
              <TemplateCard
                key={template.id}
                id={template.id}
                icon={iconImage}
                title={template.attributes.name}
                description={template.attributes.description}
                label={template.attributes.btn.label}
                url={template.attributes.btn.url}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default TemplateSection;

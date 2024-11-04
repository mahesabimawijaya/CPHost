import { IPopularDomainSection } from "../../types/DomainPage";
import { baseImageUrl } from "../../utils/helper";
import SectionDesc from "../atoms/SectionDesc";
import SectionSubTitleThin from "../atoms/SectionSubtitleThin";
import SectionTitle from "../atoms/SectionTitle";
import PopularDomainCard from "../molecules/PopularDomainCard";

function PopularDomainSection({
  popularDomain,
}: {
  popularDomain: IPopularDomainSection;
}) {
  return (
    <section className="flex flex-col items-center gap-4 w-screen mx-auto py-20">
      <SectionSubTitleThin subtitle={popularDomain.subtitle} />
      <SectionTitle title={popularDomain.title} />
      <SectionDesc desc={popularDomain.description} />

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
        {popularDomain.popularDomainCard.map((card) => {
          const domainIcon = baseImageUrl + card.logo.data.attributes.url;

          return (
            <PopularDomainCard
              key={card.id}
              id={card.id}
              logo={domainIcon}
              promo={card.promo}
              price={card.price}
              description={card.description}
              btn={card.btn}
            />
          );
        })}
      </div>
    </section>
  );
}

export default PopularDomainSection;

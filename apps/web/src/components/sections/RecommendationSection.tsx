import { IRecommendationSection } from "../../types/HostingPage";

interface Props {
  recommendation: IRecommendationSection;
}

const RecommendationSection: React.FC<Props> = ({ recommendation }) => {
  const baseImageUrl = import.meta.env.VITE_BASE_CMS_IMAGE_URL;
  const companyLogo =
    baseImageUrl + recommendation.companyLogo.data.attributes.url;

  return (
    <>
      <section className="flex flex-col items-center gap-10 w-screen mx-auto py-20 bg-third">
        <div className="flex gap-2">
          {/* MAIN COMPANY LOGO */}
          <div>
            <img src={companyLogo} alt="" />
          </div>
          <h1 className="text-4xl">{recommendation.title}</h1>
          <h1 className="text-4xl text-primary">
            {recommendation.companyTitle}
          </h1>
        </div>

        {/*  OTHER COMPANY LOGO CAROUSEL */}
        <div className="max-w-5xl overflow-hidden w-full mx-auto">
          <div className="animate-scroll flex gap-24 w-full whitespace-nowrap">
            {recommendation.companyIcon.map((icon) => (
              <div key={icon.id} className="">
                <img
                  src={baseImageUrl + icon.logo.data.attributes.url}
                  alt={
                    icon.logo.data.attributes.alternativeText || "Company Logo"
                  }
                  className="w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default RecommendationSection;

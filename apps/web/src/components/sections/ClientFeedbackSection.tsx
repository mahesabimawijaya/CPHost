import { IClientFeedbackSection } from "../../types/HostingPage";
import SectionSubTitle from "../atoms/SectionSubTitle";
import SectionTitle from "../atoms/SectionTitle";
import ClientFeedbackCard from "../molecules/ClientFeedbackCard";

interface Props {
  feedback: IClientFeedbackSection;
}

const ClientFeedbackSection: React.FC<Props> = ({ feedback }) => {
  const baseImageUrl = import.meta.env.VITE_BASE_CMS_IMAGE_URL;

  return (
    <section className="flex flex-col items-center gap-16 w-screen mx-auto py-20 bg-third">
      {/* TITLE */}
      <div className="flex-col items-center flex gap-4">
        <SectionSubTitle subtitle={feedback.subtitle} />
        <SectionTitle title={feedback.title} />
      </div>

      <div className="flex gap-4">
        {feedback.feedbackCard.map((card) => {
          const imageUrl = baseImageUrl + card.image.data.attributes.url;

          return (
            <ClientFeedbackCard
              key={card.id}
              id={card.id}
              reviewerName={card.reviewerName}
              reviewerJob={card.reviewerJob}
              review={card.review}
              rating={card.rating}
              image={imageUrl}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ClientFeedbackSection;

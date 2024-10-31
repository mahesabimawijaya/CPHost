import { FaQuoteRight, FaRegStar, FaStar } from "react-icons/fa6";

interface ClientFeedbackCard {
  id: number;
  reviewerName: string;
  reviewerJob: string;
  review: string;
  rating: number;
  image: string;
}

const ClientFeedbackCard: React.FC<ClientFeedbackCard> = ({
  reviewerName,
  reviewerJob,
  review,
  rating,
  image,
}) => {
  const maxStars = 5;
  const filledStars = Array(rating).fill(0);
  const emptyStars = Array(maxStars - rating).fill(0);

  return (
    <>
      <div className="flex flex-col gap-4 w-[30rem] px-10 py-10 bg-white rounded-xl">
        <div className="flex gap-1 text-[#FD9216] text-xl">
          {filledStars.map((_, index) => (
            <FaStar key={`filled-${index}`} />
          ))}
          {emptyStars.map((_, index) => (
            <FaRegStar key={`empty-${index}`} />
          ))}
        </div>
        <p className="text-justify h-40 leading-relaxed text-[#354062]">
          {review}
        </p>
        <div className="flex justify-between">
          <div className="flex gap-6">
            <div>
              <img src={image} alt="" />
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold text-2xl">{reviewerName}</h1>{" "}
              <h2 className="text-[#354062]">{reviewerJob}</h2>{" "}
            </div>
          </div>

          <div className="text-secondary text-5xl">
            <FaQuoteRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientFeedbackCard;

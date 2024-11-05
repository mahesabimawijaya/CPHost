import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import { IReviewCard } from "../../types/LandingPage";

const ReviewCard = ({ reviewCard, handleNext, handlePrev }: { reviewCard: IReviewCard; handleNext: () => void; handlePrev: () => void }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => <FaStar key={index} size={20} className={`${index < rating ? "text-green-500" : "text-gray-300"} inline-block mr-2`} />);
  };

  return (
    <div className="overflow-hidden">
      <div className="relative flex-shrink-0 w-[600px] h-[500px] bg-white rounded-2xl px-[45px] py-[80px] mx-2 flex flex-col justify-between transform transition-transform duration-500 ease-in-out">
        <div>
          <p className="text-3xl text-purple-500">“</p>
          <p className="text-gray-600 text-lg">{reviewCard.reviewText}</p>
        </div>
        <div className="mt-4">
          <h4 className="font-semibold text-2xl">{reviewCard.user}</h4>
          <p className="text-gray-500 text-lg">{reviewCard.profession}</p>
          <p className="font-medium text-gray-500 mt-5">Excellent Trustpilot</p>
          <p className="text-green-500 mt-1">{renderStars(reviewCard.rating)}</p>
        </div>
        <button className="absolute right-24 bottom-20 p-2 rounded-full bg-primary shadow-md">
          <FaChevronLeft className="text-white" size={20} onClick={handlePrev} />
        </button>
        {/* Right Arrow */}
        <button className="absolute right-12 bottom-20 p-2 rounded-full bg-white shadow-md hover:bg-gray-100">
          <FaChevronRight size={20} onClick={handleNext} />
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;

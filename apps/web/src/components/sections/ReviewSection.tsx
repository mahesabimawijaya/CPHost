import { useEffect, useState } from "react";
import { Review } from "../../types/LandingPage";
import { baseImageUrl } from "../../utils/helper";
import ReviewCard from "../molecules/ReviewCard";

const ReviewSection = ({ review }: { review: Review }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % review.reviewCard.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? review.reviewCard.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    if (!isHovered) {
      const intervalId = setInterval(handleNext, 3000);
      return () => clearInterval(intervalId);
    }
  }, [isHovered]);

  return (
    <section
      style={{
        backgroundImage: `url(${baseImageUrl + review.backgroundImage.data.attributes.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full h-[1200px] flex justify-center"
    >
      <div className="w-primary flex items-center justify-between">
        <div className="relative w-[610px] flex items-center overflow-hidden">
          <div
            id="review-left"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ transform: `translateX(-${currentIndex * 33.5}%)` }}
            className="flex transition-transform duration-[1500ms] ease-in-out"
          >
            {review.reviewCard.map((reviewCard, i) => (
              <ReviewCard reviewCard={reviewCard} handleNext={handleNext} handlePrev={handlePrev} key={i} />
            ))}
          </div>
        </div>
        <div id="review-right" className="w-[546px] h-[583px]">
          <img src={baseImageUrl + review.image.data.attributes.url} alt="" />
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;

import { BsCalendarFill } from "react-icons/bs";

const RecentPostCard = () => {
  return (
    <div className="flex pb-3 gap-4 items-center border-b border-secondary">
      <div className="w-20 h-20 overflow-hidden">
        <img
          src="https://ex-coders.com/html/cphost/assets/img/news/post-6.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <span className="text-primary">
            <BsCalendarFill />
          </span>
          <h2 className="text-gray-500 font-normal">10/01/2024</h2>
        </div>

        <h1 className="font-bold hover:text-primary w-48 text-wrap">
          Best And Fastest Date Server Ever Ever Ever Ever
        </h1>
      </div>
    </div>
  );
};

export default RecentPostCard;

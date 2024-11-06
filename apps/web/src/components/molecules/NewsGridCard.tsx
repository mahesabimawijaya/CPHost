import React from "react";
import { FaArrowRight } from "react-icons/fa6";

interface NewsGridCardProps {
  id: number;
  image: string;
  title: string;
  category: string;
  date: string;
  writerName: string;
  writerPos: string;
  writerImage: string;
}

const NewsGridCard: React.FC<NewsGridCardProps> = ({
  image,
  title,
  category,
  date,
  writerName,
  writerPos,
  writerImage,
}) => {
  return (
    <>
      <div className="flex flex-col w-[400px] h-full  bg-white shadow-md rounded-xl gap-4 ">
        <div>
          <img src={image} alt="" className="rounded-xl" />
        </div>

        <div className="px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="rounded-full text-primary border border-primary px-3 py-1 font-semibold">
              {category}
            </h1>

            <h1 className="uppercase font-semibold text-gray-600">{date}</h1>
          </div>
          <h1 className="text-2xl capitalize font-bold py-5 border-b border-secondary">
            {title}
          </h1>
          <div className="flex justify-between pt-6 pb-3">
            <div className="flex gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                  src={writerImage}
                  alt=""
                  className="w-full h-full object-cover "
                />
              </div>
              <div>
                <h2 className="font-semibold">{writerName}</h2>
                <h3 className="text-gray-600">{writerPos}</h3>
              </div>
            </div>

            <button className="text-primary bg-third hover:text-white  hover:bg-primary flex items-center justify-center px-4 rounded-md transition duration-200 ease-in ">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsGridCard;

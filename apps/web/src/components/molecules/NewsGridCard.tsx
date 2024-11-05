import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const NewsGridCard = () => {
  return (
    <>
      <div className="flex flex-col w-[400px] h-full  bg-white shadow-md rounded-xl gap-4 ">
        <div>
          <img
            src="https://ex-coders.com/html/cphost/assets/img/news/01.jpg"
            alt=""
            className="rounded-xl"
          />
        </div>

        <div className="px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="rounded-full text-primary border border-primary px-3 py-1 font-semibold">
              Shared Hosting
            </h1>

            <h1 className="uppercase font-semibold text-gray-600">
              MARCH 24, 2024
            </h1>
          </div>
          <h1 className="text-2xl capitalize font-bold py-5 border-b border-secondary">
            Best and fastest data server ever
          </h1>
          <div className="flex justify-between pt-6 pb-3">
            <div className="flex gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                  src="https://ex-coders.com/html/cphost/assets/img/news/01.jpg"
                  alt=""
                  className="w-full h-full object-cover "
                />
              </div>
              <div>
                <h2 className="font-semibold">Admin</h2>
                <h3 className="text-gray-600">Co, Founder</h3>
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

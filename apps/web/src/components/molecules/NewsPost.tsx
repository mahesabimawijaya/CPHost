import React from "react";
import { BiTag } from "react-icons/bi";
import { BsCalendarFill, BsQuote } from "react-icons/bs";
import { FaQuoteRight } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";

const NewsPost = () => {
  return (
    <div className="w-[850px]">
      {/* POST THUMBNAIL */}
      <div className="w-[850px] h-[400px]">
        <img
          src="https://ex-coders.com/html/cphost/assets/img/news/post-6.jpg"
          alt=""
          className="object-cover w-full h-full"
        />
      </div>

      {/* POST DETAIL */}
      <div className="border-b border-secondary flex flex-row gap-6 py-6">
        <div className="flex items-center gap-2 text-sm font-semibold text-gray-600">
          <span className="text-primary">
            <FaPerson />
          </span>
          <h1>By Admin</h1>
        </div>

        <div className="flex items-center gap-2 text-sm font-semibold text-gray-600">
          <span className="text-primary">
            <BsCalendarFill />
          </span>
          <h1>18 Dec, 2024</h1>
        </div>

        <div className="flex items-center gap-2 text-sm font-semibold text-gray-600">
          <span className="text-primary">
            <BiTag />
          </span>
          <h1>Technology</h1>
        </div>
      </div>

      {/* POST CONTENT */}
      <div className="border-b border-secondary py-4 w-">
        <h1 className="font-bold py-2 text-3xl">Title</h1>
        <p className="py-2 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iste
          porro id expedita voluptatibus quis similique nemo facere! Enim vitae
          accusamus officiis eaque. Ex ducimus tempora excepturi voluptatibus
          iste. Minima. Saepe molestiae voluptatibus numquam optio quos
          consequuntur ducimus quaerat illo vitae quia atque, minus tempora
          repellat non similique reiciendis aliquid dolorem quibusdam sed enim
          explicabo. Veritatis quos natus sunt reprehenderit? Incidunt dolorem
          iusto temporibus impedit nam totam perferendis quis quae quibusdam
          facilis placeat, minus est nesciunt sequi modi. Nobis ab nostrum ipsa.
        </p>

        {/* QUOTE SECTION */}
        <div className="flex justify-between bg-third p-6 my-2 border-l-4 border-primary font-semibold text-black italic">
          <p className="w-[700px]">
            sed enim explicabo. Veritatis quos natus sunt reprehenderit?
            Incidunt dolorem iusto temporibus impedit nam totam perferendis quis
            quae quibusdam facilis placeat, minus est nesciunt sequi modi. Nobis
            ab nostrum ipsa.
          </p>
          <div className="text-primary flex items-end text-3xl">
            <FaQuoteRight />
          </div>
        </div>

        {/* CONTENT 2 */}
        <p className="py-2 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iste
          porro id expedita voluptatibus quis similique nemo facere! Enim vitae
          accusamus officiis eaque. Ex ducimus tempora excepturi voluptatibus
          iste. Minima. Saepe molestiae voluptatibus numquam optio quos
          consequuntur ducimus quaerat illo vitae quia atque, minus tempora
          repellat non similique reiciendis aliquid dolorem quibusdam sed enim
          explicabo. Veritatis quos natus sunt reprehenderit? Incidunt dolorem
          iusto temporibus impedit nam totam perferendis quis quae quibusdam.
        </p>

        {/* IMAGE SECTION */}
        <div>
          <img src="" alt="" />
          <img src="" alt="" />
        </div>

        {/* CONTENT 3 */}
        <p className="py-2 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iste
          porro id expedita voluptatibus quis similique nemo facere! Enim vitae
          accusamus officiis eaque. Ex ducimus tempora excepturi voluptatibus
          iste. Minima. Saepe molestiae voluptatibus numquam optio quos
          consequuntur ducimus quaerat illo vitae quia atque, minus tempora.
        </p>
      </div>

      {/* POST TAG */}
      <div className="flex flex-row gap-4 items-center py-3 border-b border-secondary">
        <h1 className="font-semibold">Tags:</h1>

        <h2 className="bg-third px-3 py-2 font-semibold">Reseller</h2>
      </div>
    </div>
  );
};

export default NewsPost;

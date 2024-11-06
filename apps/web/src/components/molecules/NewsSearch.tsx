import { BiSearch } from "react-icons/bi";

const NewsSearch = ({}) => {
  return (
    <div className="bg-third p-6 w-[350px] flex flex-col gap-4">
      <h1 className="border-b-2 border-primary font-bold text-xl pb-4">
        Search
      </h1>
      <div className="flex relative">
        <input type="text" placeholder="Search here" className="p-4 w-full" />
        <button
          className="absolute right-0 bg-primary text-white p-5 flex items-center justify-center"
          style={{ top: "50%", transform: "translateY(-50%)" }}
        >
          <BiSearch />
        </button>
      </div>
    </div>
  );
};

export default NewsSearch;

import { Link } from "react-router-dom";

const AbsolutePlayButton = () => {
  return (
    <Link to={"/"} target="blank" className="absolute top-9 left-16">
      <div className="relative flex items-center justify-center w-20 h-20">
        <button className="relative flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 focus:outline-none">
          <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white">
            <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      </div>
    </Link>
  );
};

export default AbsolutePlayButton;

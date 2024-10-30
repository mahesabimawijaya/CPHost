import { Link } from "react-router-dom";

const PlayButton = ({ link }: { link: string }) => {
  return (
    <Link to={link} target="blank">
      <div className="relative flex items-center justify-center w-20 h-20">
        {/* Main Button with Gradient */}
        <button className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 focus:outline-none">
          {/* Inner Play Icon */}
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white">
            <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      </div>
    </Link>
  );
};

export default PlayButton;

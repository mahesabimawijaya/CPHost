import { Link } from "react-router-dom";
import { ILink } from "../../types/Header";

const LinkDropdown = ({ link }: { link: ILink }) => {
  return (
    <div className="absolute top-[65px] left-[-10px] flex flex-col bg-white shadow-2xl text-black">
      {link.subLink.map((sublink, i) => (
        <Link to={sublink.url} key={i}>
          <p className="px-7 py-3 w-[245px] hover:bg-[#384BFF] hover:text-white duration-300 border-b border-slate-100">{sublink.label}</p>
        </Link>
      ))}
    </div>
  );
};

export default LinkDropdown;

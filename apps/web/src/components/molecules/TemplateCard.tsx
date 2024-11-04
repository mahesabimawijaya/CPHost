import { AiOutlineDoubleRight } from "react-icons/ai";

interface TemplateCardProps {
  id: number;
  icon: string;
  title: string;
  description: string;
  label: string;
  url: string;
}

const TemplateCard: React.FC<TemplateCardProps> = ({
  icon,
  title,
  description,
  label,
  url,
}) => {
  console.log({ icon, title, description, label, url });
  return (
    <div className="flex flex-col gap-4 w-80 h-[21rem] justify-center py-10 px-8 bg-[#F1F5FA] border border-[#CAD3FF] rounded-xl group transition-colors duration-300 hover:bg-blue-600">
      <div className="flex justify-between items-center">
        <div className="flex justify-center border-secondary border rounded-xl w-16 p-2 items-center text-center flip-icon bg-third">
          <img src={icon} alt="icon" />
        </div>
      </div>
      <h1 className="font-bold text-xl group-hover:text-white">{title}</h1>
      <p className="leading-loose text-[#354062] group-hover:text-white">
        {description}
      </p>
      <a
        href={url}
        className="border border-secondary rounded-full py-3 font-semibold flex items-center justify-center gap-2 text-center bg-third text-[#354062] transition-colors duration-300 group-hover:text-[#354062] group-hover:bg-white group-hover:border-0"
      >
        {label}
        <span>
          <AiOutlineDoubleRight />
        </span>
      </a>
    </div>
  );
};

export default TemplateCard;
import { AiOutlineDoubleRight } from "react-icons/ai";

interface PopularDomainCardProps {
  id: number;
  logo: string;
  promo: string;
  price: number;
  description: string;
  btn: string;
}

const PopularDomainCard: React.FC<PopularDomainCardProps> = ({
  logo,
  promo,
  price,
  description,
  btn,
}) => {
  return (
    <>
      <div className="flex flex-col gap-4 w-80 h-[21rem] justify-center py-10 px-8 bg-[#F1F5FA] border border-[#CAD3FF] rounded-xl group transition-colors duration-300 hover:bg-blue-600">
        <div className="flex justify-between items-center">
          <div className="flex justify-center w-18 p-2 items-center text-center">
            <img src={logo} alt="icon" />
          </div>
          <h1 className="font-semibold text-primary group-hover:text-white">
            {promo}
          </h1>
        </div>
        <h1 className="font-bold text-lg text-primary group-hover:text-white">
          ${price}/Yr
        </h1>
        <p className="leading-loose text-[#354062] group-hover:text-white">
          {description}
        </p>
        <button className="border-2 border-secondary rounded-lg py-3 font-semibold flex items-center justify-center gap-2 text-center bg-third text-primary transition-colors duration-300 group-hover:bg-[#FFA31A] group-hover:text-white group-hover:border-0">
          {btn}
          <span>
            <AiOutlineDoubleRight />
          </span>
        </button>
      </div>
    </>
  );
};

export default PopularDomainCard;

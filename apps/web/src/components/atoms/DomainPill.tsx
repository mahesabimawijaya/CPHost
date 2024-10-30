import { RxDividerVertical } from "react-icons/rx";
import { DomainPricing } from "../../types/LandingPage";
import { toRupiah } from "../../utils/helper";

const DomainPill = ({ domain }: { domain: DomainPricing }) => {
  return (
    <div className="bg-white bg-opacity-15 px-[16px] py-[10px] flex items-center space-x-4 rounded-md">
      <span className="font-bold text-[20px]">{domain.name}</span> <RxDividerVertical className="text-[25px]" /> <span className="font-semibold">{toRupiah(domain.price)}</span>
    </div>
  );
};

export default DomainPill;

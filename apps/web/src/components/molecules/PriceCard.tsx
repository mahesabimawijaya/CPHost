import { FaArrowRightLong, FaCheck, FaRegCircleQuestion } from "react-icons/fa6";
import { PlanData } from "../../types/LandingPage";
import { pricingColor, toRupiah } from "../../utils/helper";
import { RxCross2 } from "react-icons/rx";

const PriceCard = ({ plan, period, i }: { plan: PlanData; period: string; i: number }) => {
  return (
    <div className="w-[290px] h-[630px] flex flex-col items-center relative rounded-2xl bg-white border border-gray-300 pt-14 px-8 hover:scale-105 duration-300 cursor-help">
      <div
        className={`bg-${pricingColor[i]} absolute text-white text-center px-4 py-2.5 top-[-24px] w-[200px] text-lg font-medium`}
        style={{ clipPath: "polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)" }}
      >
        {plan.attributes.name}
      </div>
      <div className="text-4xl font-bold mb-1">{toRupiah(period === "Monthly" ? plan.attributes.price : plan.attributes.price * 12 - (plan.attributes.price * 12 * 25) / 100)}</div>
      <div className="text-gray-700 font-medium mb-7">per {period === "Monthly" ? "Month" : "Year"}</div>
      <div className="text-center text-gray-700 leading-relaxed mb-7">{plan.attributes.description}</div>
      <span className="h-[1px] w-full bg-gray-300"></span>
      <div className="flex flex-col mt-8">
        <div className="font-medium text-lg text-gray-600 flex items-center justify-between space-x-3 mb-3">
          <div className="flex items-center space-x-3">
            <FaCheck color="blue" />
            <p className="truncate w-[180px]">{plan.attributes.storage} GB SSD Storage</p>
          </div>
          <FaRegCircleQuestion />
        </div>
        <div className="font-medium text-lg text-gray-600 flex items-center justify-between space-x-3 mb-3">
          <div className="flex items-center space-x-3">
            <FaCheck color="blue" />
            <p className="truncate w-[180px] capitalize">{plan.attributes.backup} Backups</p>
          </div>
          <FaRegCircleQuestion />
        </div>
        <div className="font-medium text-lg text-gray-600 flex items-center justify-between space-x-3 mb-3">
          <div className="flex items-center space-x-3">
            <FaCheck color="blue" />
            <p className="truncate w-[180px] capitalize">{plan.attributes.ssl ? "Unlimited Free SSL" : "Limited Free SSL"}</p>
          </div>
          <FaRegCircleQuestion />
        </div>
        <div className="font-medium text-lg text-gray-600 flex items-center justify-between space-x-3 mb-3">
          <div className="flex items-center space-x-3">
            <FaCheck color="blue" />
            <p className="truncate w-[180px] capitalize">{plan.attributes.monitoring ? "24/7 System Monitoring" : "Working Hour System Monitoring"}</p>
          </div>
          <FaRegCircleQuestion />
        </div>
        <div className="font-medium text-lg text-gray-600 flex items-center justify-between space-x-3 mb-3">
          <div className="flex items-center space-x-3">
            <FaCheck color="blue" />
            <p className="truncate w-[180px] capitalize">{plan.attributes.domain ? "Free Domain" : "Discount Domain"}</p>
          </div>
          <FaRegCircleQuestion />
        </div>
        <div className="font-medium text-lg text-gray-600 flex items-center justify-between space-x-3 mb-8">
          <div className="flex items-center space-x-3">
            <RxCross2 color="red" />
            <p className="truncate w-[180px] capitalize">Dedicated Ip Address</p>
          </div>
          <FaRegCircleQuestion />
        </div>
        <button className="bg-primary flex items-center justify-center gap-3 hover:bg-[#FFA31A] duration-200 text-white py-3 rounded-full font-medium">
          Get Started Now <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};

export default PriceCard;

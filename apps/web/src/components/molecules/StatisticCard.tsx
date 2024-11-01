import AbsolutePlayButton from "../atoms/AbsolutePlayButton";

const StatisticCard = ({ globalCustomers, successCase, imgUrl }: { globalCustomers: number; successCase: number; imgUrl: string }) => {
  return (
    <div className="flex flex-col space-y-14 mt-10 shadow-lg px-[40px] py-[24px]">
      <div className="flex items-center space-x-12">
        <div className="flex flex-col space-y-3">
          <h2 className="text-6xl text-primary font-semibold">{globalCustomers}k</h2>
          <p className="font-medium">Global Customers</p>
        </div>
        <div className="flex flex-col space-y-3">
          <h2 className="text-6xl text-primary font-semibold">{successCase}%</h2>
          <p className="font-medium">Success Case</p>
        </div>
      </div>
      <div className="relative">
        <img src={imgUrl} className="w-[205px] h-[145px]" alt="" />
        <AbsolutePlayButton />
      </div>
    </div>
  );
};

export default StatisticCard;

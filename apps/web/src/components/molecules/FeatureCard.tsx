import { IFeature } from "../../types/LandingPage";
import { baseImageUrl } from "../../utils/helper";

const FeatureCard = ({ feature }: { feature: IFeature }) => {
  return (
    <div className="flex flex-col items-center w-[260px] text-center">
      <div className="bg-gray-100 border border-gray-300 p-2 rounded-md mb-5">
        <img src={baseImageUrl + feature.image.data.attributes.url} alt="" />
      </div>
      <h3 className="text-[24px] font-bold mb-3">{feature.title}</h3>
      <p className="text-gray-500 text-[17px]">{feature.description}</p>
    </div>
  );
};

export default FeatureCard;

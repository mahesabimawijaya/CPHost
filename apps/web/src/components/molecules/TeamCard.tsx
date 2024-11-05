import { IoShareSocialOutline } from "react-icons/io5";
import { ITeamCard } from "../../types/AboutUsPage";
import { baseImageUrl } from "../../utils/helper";

const TeamCard = ({ teamCard }: { teamCard: ITeamCard }) => {
  return (
    <div className="relative w-[261px] h-[296px] mx-4 my-10">
      <img src={baseImageUrl + teamCard.image.data.attributes.url} alt="" className="rounded-2xl" />
      <div className="absolute bottom-[-65px]">
        <img src="/assets/img/team/team-shape.png" alt="" />
        <div className="top-12 left-11 absolute">
          <p className="font-bold text-xl">{teamCard.name}</p>
          <p className="text-gray-600 text-lg">{teamCard.profession}</p>
        </div>
        <div className="bg-primary w-fit p-3 rounded-full text-white absolute top-0 right-12">
          <IoShareSocialOutline size={20} />
        </div>
      </div>
    </div>
  );
};

export default TeamCard;

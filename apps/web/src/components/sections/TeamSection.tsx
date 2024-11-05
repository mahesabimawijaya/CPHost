import { ITeamSection } from "../../types/AboutUsPage";
import SectionSubTitleThin from "../atoms/SectionSubtitleThin";
import SectionTitle from "../atoms/SectionTitle";
import TeamCard from "../molecules/TeamCard";

const TeamSection = ({ team, pt }: { team: ITeamSection; pt?: string }) => {
  return (
    <section className={`flex justify-center w-full pb-[200px] ${pt ? pt : ""}`}>
      <div className="flex flex-col w-primary items-center">
        <SectionSubTitleThin subtitle={team.subtitle} />
        <SectionTitle title={team.title} />
        <p className="text-gray-600 mt-7 text-lg mb-10">{team.description}</p>
        <div className="flex flex-wrap justify-center">
          {team.teamCard.map((card, i) => (
            <TeamCard teamCard={card} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

import { useAppSelector } from "../../lib/redux/hooks";
import { RootState } from "../../lib/redux/store";
import { ISubHeroSection, ITeamSection } from "../../types/TeamPage";
import Loading from "../atoms/Loading";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import SubHeroSection from "../sections/SubHeroSection";
import TeamSection from "../sections/TeamSection";

const TeamPage = () => {
  const { teamPage, error } = useAppSelector((state: RootState) => state.strapi);
  const subHero = teamPage?.data.attributes.subHeroSection;
  const team = teamPage?.data.attributes.teamSection;
  console.log(teamPage);

  if (!teamPage) return <Loading />;
  if (error) console.error(error);

  return (
    <>
      <Header />
      <SubHeroSection subHero={subHero as ISubHeroSection} />
      <TeamSection team={team as ITeamSection} pt="pt-20" />
      <Footer />
    </>
  );
};

export default TeamPage;

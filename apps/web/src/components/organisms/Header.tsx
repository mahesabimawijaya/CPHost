import TopBar from "../molecules/TopBar";
import Navbar from "../molecules/Navbar";
import { NavbarAttributes, ITopBar } from "../../types/Header";
import Loading from "../atoms/Loading";
import { useAppSelector } from "../../lib/redux/hooks";
import { RootState } from "../../lib/redux/store";

const Header = () => {
  const { header, error } = useAppSelector((state: RootState) => state.strapi);

  const topBar = header?.data.attributes.topBar;
  const navbar = header?.data.attributes;

  if (!header) return <Loading />;
  if (error) throw new Error("Error fetching header");

  return (
    <header>
      <TopBar topbar={topBar as ITopBar} />
      <Navbar navbar={navbar as NavbarAttributes} />
    </header>
  );
};

export default Header;

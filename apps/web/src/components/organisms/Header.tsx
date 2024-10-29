import { useQuery } from "@tanstack/react-query";
import { fetchHeader } from "../../api/strapi.service";
import TopBar from "../molecules/TopBar";
import Navbar from "../molecules/Navbar";
import { NavbarAttributes, ITopBar, NavbarResponse } from "../../types/header";
import Loading from "../atoms/Loading";

const Header = () => {
  const { data, isLoading, error } = useQuery<NavbarResponse>({ queryKey: ["navbar"], queryFn: fetchHeader });
  console.log(data);
  const topBar = data?.data.attributes.topBar;
  const navbar = data?.data.attributes;
  if (isLoading) return <Loading />;
  if (error) throw new Error("Error fetching header");
  return (
    <header className="bg-blue-600">
      <TopBar topbar={topBar as ITopBar} />
      <Navbar navbar={navbar as NavbarAttributes} />
    </header>
  );
};

export default Header;

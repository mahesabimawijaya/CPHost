import { useQuery } from "@tanstack/react-query";
import { fetchHeader } from "../../api/strapi.service";
import TopBar from "../molecules/TopBar";
import Navbar from "../molecules/Navbar";

const Header = () => {
  const { data, isLoading, error } = useQuery({ queryKey: ["navbar"], queryFn: fetchHeader });
  console.log(data);
  return (
    <header>
      <TopBar />
      <Navbar />
    </header>
  );
};

export default Header;

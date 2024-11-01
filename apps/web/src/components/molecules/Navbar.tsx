import { Link } from "react-router-dom";
import { NavbarAttributes } from "../../types/Header";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoMenu, IoSearch } from "react-icons/io5";
import LinkDropdown from "./LinkDropdown";

const Navbar = ({ navbar }: { navbar: NavbarAttributes }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const logoUrl = import.meta.env.VITE_BASE_CMS_IMAGE_URL + navbar.logo.data.attributes.url;
  const darkLogoUrl = import.meta.env.VITE_BASE_CMS_IMAGE_URL + navbar.darkLogo.data.attributes.url;
  const links = navbar.link;

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 52) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`${scrolled ? "text-black bg-white fixed top-0 shadow-2xl" : "text-white bg-transparent absolute"} w-full flex justify-center items-center h-[90px] z-10 duration-300`}>
      <div className="flex items-center w-[1240px] font-semibold justify-between">
        <img id="navbar-left" src={scrolled ? darkLogoUrl : logoUrl} className="w-[214px] h-[46px]" alt="logo" />
        <div id="navbar-right" className="flex items-center space-x-12">
          {links.map((link, i) => {
            if (link.subLink.length < 1) {
              return (
                <Link to={link.url} key={i} className="hover:text-[#FFA31A] duration-300 py-5">
                  <p className="text-lg">{link.label}</p>
                </Link>
              );
            } else {
              return (
                <div
                  onMouseEnter={() => setActiveIndex(i)}
                  onMouseLeave={() => setActiveIndex(null)}
                  onClick={() => setActiveIndex(null)}
                  key={i}
                  className="text-lg flex items-center space-x-2 relative py-5 hover:text-[#FFA31A] duration-300 cursor-default"
                >
                  <p className="text-lg">{link.label}</p>
                  <IoIosArrowDown />
                  {activeIndex === i && <LinkDropdown link={link} />}
                </div>
              );
            }
          })}
          <div className="flex items-center space-x-3 text-2xl duration-300">
            <IoSearch className="cursor-pointer" />
            <IoMenu className="text-3xl cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

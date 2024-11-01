import { useQuery } from "@tanstack/react-query";
import { fetchFooter } from "../../api/strapi.service";
import Loading from "../atoms/Loading";
import { RootObject } from "../../types/Footer";
import { baseImageUrl } from "../../utils/helper";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaArrowUp, FaFacebookF, FaLinkedinIn, FaPaperPlane, FaTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  const { data, isLoading, error } = useQuery<RootObject>({ queryKey: ["footer"], queryFn: fetchFooter });
  const backgroundImage = baseImageUrl + data?.data.attributes.backgroundImage.data.attributes.url;
  const logo = baseImageUrl + data?.data.attributes.logo.data.attributes.url;

  if (isLoading) return <Loading />;
  if (error) throw new Error("Error fetching footer");

  return (
    <footer
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full h-[800px] bg-blue-600 flex flex-col justify-between pb-[50px] items-center text-white pt-[150px]"
    >
      <div id="footer-top" className="flex w-[1240px] justify-between">
        <div id="logo-section" className="flex flex-col space-y-6 w-[300px] font-medium text-[17px]">
          <img src={logo} alt="" className="w-[215px]" />
          <p className="leading-loose">{data?.data.attributes.description}</p>
          <div id="phone-number" className="flex items-center space-x-3">
            <img src="/topbar/telephone.png" alt="" className="w-[20px]" />
            <p>{data?.data.attributes.phoneNumber}</p>
          </div>
          <div id="email" className="flex items-center space-x-3">
            <img src="/topbar/email.png" alt="" className="w-[20px]" />
            <p>{data?.data.attributes.email}</p>
          </div>
        </div>
        {data?.data.attributes.link.map((link, i) => (
          <div key={i} id="company-section" className="flex flex-col space-y-6 w-[170px] font-medium text-[17px]">
            <h3 className="text-[26px] font-bold">{link.label}</h3>
            <span className="bg-white h-[3px] w-[130px]"></span>
            {link.subLink.map((sublink, i) => (
              <div key={i} className="flex items-center text-[18px] space-x-2 hover:text-[#FFA31A] hover:scale-105 duration-200">
                <MdKeyboardDoubleArrowRight size={30} />
                <Link to={sublink.url}>{sublink.label}</Link>
              </div>
            ))}
          </div>
        ))}
        <div id="newsletter-section" className="flex flex-col space-y-7 w-[300px] font-medium text-[17px]">
          <h3 className="text-[26px] font-bold">Newsletter</h3>
          <span className="bg-white h-[2px] w-[130px]"></span>
          <p className="leading-loose font-medium text-[17px]">Sign up to seargin weekly newsletter to get the latest updates.</p>
          <div className="flex items-center h-[66px] border border-gray-400 rounded-md pl-5 py-1 pr-1 w-fit">
            <input type="text" name="email" placeholder="Enter email address" className=" bg-transparent focus:outline-none w-[190px] " id="" />
            <button className="bg-[#384BFF] h-full w-[60px] flex justify-center items-center text-2xl rounded">
              <FaPaperPlane />
            </button>
          </div>
          <div className="flex items-center text-lg text-gray-300 space-x-4">
            <div className="border border-gray-400 p-2">
              <FaFacebookF />
            </div>
            <div className="border border-gray-400 p-2">
              <FaTwitter />
            </div>
            <div className="border border-gray-400 p-2">
              <FaLinkedinIn />
            </div>
            <div className="border border-gray-400 p-2">
              <FaYoutube />
            </div>
          </div>
        </div>
      </div>
      <div id="footer-bottom" className="flex items-center w-[1240px] bg-white bg-opacity-15 h-[110px] rounded-xl justify-between px-12">
        <p className="text-[18px]">&copy; All Copyright 2024 by CPHost</p>
        <Link to="/" onClick={() => document.getElementById("topbar")?.scrollIntoView({ behavior: "smooth" })}>
          <button className="w-[73px] h-[73px] border-[6px] border-white flex items-center justify-center rounded-full bg-[#384BFF]">
            <FaArrowUp />
          </button>
        </Link>
        <div className="flex items-center space-x-6">
          {data?.data.attributes.creditCardImages.data.map((cardImage, i) => (
            <div key={i} className="border rounded-md w-[56px] h-[40px] flex justify-center items-center">
              <img src={baseImageUrl + cardImage.attributes.url} alt="" />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

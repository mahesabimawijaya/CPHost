import { Link } from "react-router-dom";
import { ITopBar } from "../../types/Header";

const TopBar = ({ topbar }: { topbar: ITopBar }) => {
  const authenticated = false; //auth logic here

  return (
    <div
      id="topbar"
      className="flex justify-center w-full bg-[#002AAC] text-white h-[52px]"
    >
      <div className="flex items-center w-[1240px] font-semibold justify-between">
        <div id="topbar-left" className="flex items-center space-x-8">
          <div id="email" className="flex items-center space-x-3">
            <img src="/topbar/email.png" alt="email" className="w-[20px]" />
            <p>{topbar.email}</p>
          </div>
          <div id="phone" className="flex items-center space-x-3">
            <img src="/topbar/telephone.png" alt="phone" className="w-[20px]" />
            <p>{topbar.phoneNumber}</p>
          </div>
        </div>
        <p id="topbar-mid" className="text-[17px]">
          {topbar.promoText}
        </p>
        <div id="topbar-right" className="flex items-center space-x-8">
          <div
            id="live-chat"
            className="flex items-center space-x-3 cursor-pointer"
          >
            <img
              src="/topbar/bubble-chat.png"
              alt="live-chat"
              className="w-[20px]"
            />
            <p>{topbar.liveChat}</p>
          </div>
          {authenticated ? (
            <Link to={"/profile"}>
              <div
                id="profile"
                className="flex items-center space-x-3 cursor-pointer"
              >
                <img src="/topbar/user.png" alt="user" className="w-[20px]" />
                <p>Profile</p>
              </div>
            </Link>
          ) : (
            <Link to={"/login"}>
              <div
                id="login"
                className="flex items-center space-x-3 cursor-pointer"
              >
                <img src="/topbar/user.png" alt="user" className="w-[20px]" />
                <p>{topbar.login}</p>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;

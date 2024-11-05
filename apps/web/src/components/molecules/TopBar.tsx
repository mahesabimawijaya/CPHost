import { useState } from "react";
import { ITopBar } from "../../types/Header";
import LoginModal from "../organisms/LoginModal";
import RegisterModal from "../organisms/RegisterModal";
import { useAppDispatch, useAppSelector } from "../../lib/redux/hooks";
import { User } from "../../types/User";
import { logout } from "../../lib/redux/user.slice";

const TopBar = ({ topbar }: { topbar: ITopBar }) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
    setIsRegisterModalOpen(false);
  };

  const openRegisterModal = () => {
    setIsRegisterModalOpen(true);
    setIsLoginModalOpen(false);
  };
  const loggedinUser = useAppSelector((state) => state.auth) as User;
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

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
          {loggedinUser.id ? (
            <div
              id="logout"
              className="flex items-center space-x-3 cursor-pointer"
              onClick={handleLogout}
            >
              <img src="/topbar/user.png" alt="user" className="w-[20px]" />
              <p>Logout</p>
            </div>
          ) : (
            <div
              id="login"
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => setIsLoginModalOpen(true)}
            >
              <img src="/topbar/user.png" alt="user" className="w-[20px]" />
              <p>{topbar.login}</p>
            </div>
          )}
        </div>
      </div>
      {isLoginModalOpen && (
        <LoginModal
          onClose={() => setIsLoginModalOpen(false)}
          onSwitchToRegister={openRegisterModal}
        />
      )}
      {isRegisterModalOpen && (
        <RegisterModal onClose={() => setIsRegisterModalOpen(false)} />
      )}
    </div>
  );
};

export default TopBar;

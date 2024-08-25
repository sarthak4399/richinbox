import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import email_icon from "../../public/email.png";
import Home_icon from "../Assets/Home.png";
import send_icon from "../Assets/send.png";
import inbox_icon from "../Assets/inbox.png";
import stack_icon from "../Assets/stack.png";
import barchart_icon from "../Assets/bar_chart.png";
import Mail_logo from "../Assets/mail_icon.png";
import profile_icon from "../Assets/Profile.png";

const SideBar = ({ onMenuItemClick }) => {
  const router = useRouter();
  const [selectedItem, setSelectedItem] = useState("/");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedIsDarkMode = localStorage.getItem("isDarkMode");
    if (storedIsDarkMode) {
      setIsDarkMode(JSON.parse(storedIsDarkMode));
    }
  }, []);

  const handleMenuItemClick = (path) => {
    setSelectedItem(path);
    onMenuItemClick(path);
    router.push(path);
  };

  const handleDarkModeClick = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("isDarkMode", !isDarkMode);
  };

  const sidebarClasses = isDarkMode ? "bg-white border-[#E0E0E0]" : "bg-[#101113] border-[#343A40]";

  return (
    <div
      className={`dark:bg overflow-y-scroll no-scrollbar h-screen w-[70px] flex flex-col justify-between items-center py-6 border-r-2 left-0 top-0 fixed z-10 ${sidebarClasses}`}
    >
      {/* Mail Logo */}
      <div className="w-[48px] h-[48px] mb-8">
        <Image src={Mail_logo} alt="Mail Logo" className="object-contain" />
      </div>

      {/* Icons */}
      <div className="flex flex-col gap-8 items-center">
        <div
          className={`cursor-pointer transition-transform hover:scale-110 ${
            selectedItem === "/" ? "bg-gray-600 rounded-lg" : ""
          }`}
          onClick={() => handleMenuItemClick("/")}
        >
          <Image src={Home_icon} alt="Home" />
        </div>
        <div
          className={`cursor-pointer transition-transform hover:scale-110 ${
            selectedItem === "/email" ? "bg-gray-600 rounded-lg" : ""
          }`}
          onClick={() => handleMenuItemClick("/email")}
        >
          <Image src={email_icon} alt="Email" />
        </div>
        <div
          className={`cursor-pointer transition-transform hover:scale-110 ${
            selectedItem === "/send" ? "bg-gray-600 rounded-lg" : ""
          }`}
          onClick={() => handleMenuItemClick("/send")}
        >
          <Image src={send_icon} alt="Send" />
        </div>
        <div
          className={`cursor-pointer transition-transform hover:scale-110 ${
            selectedItem === "/inbox" ? "bg-gray-600 rounded-lg" : ""
          }`}
          onClick={() => handleMenuItemClick("/inbox")}
        >
          <Image src={inbox_icon} alt="Inbox" />
        </div>
        <div
          className={`cursor-pointer transition-transform hover:scale-110 ${
            selectedItem === "/stack" ? "bg-gray-600 rounded-lg" : ""
          }`}
          onClick={() => handleMenuItemClick("/stack")}
        >
          <Image src={stack_icon} alt="Stack" />
        </div>
        <div
          className={`cursor-pointer transition-transform hover:scale-110 ${
            selectedItem === "/barchart" ? "bg-gray-600 rounded-lg" : ""
          }`}
          onClick={() => handleMenuItemClick("/barchart")}
        >
          <Image src={barchart_icon} alt="Barchart" />
        </div>
      </div>

      {/* Profile Icon */}
      <div className="mt-auto mb-4 w-[48px] h-[56px]">
        {/* Uncomment and replace the path if you have a profile image */}
        <Image src={profile_icon} alt="Profile" className="cursor-pointer transition-transform hover:scale-110" />
      </div>
    </div>
  );
};

export default SideBar;

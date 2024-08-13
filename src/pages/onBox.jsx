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
import Profile from "../Assets/profile.png";
import No_mssgage_img from "../Assets/No Message illustration.png";
import InboxComponent from "@/Components/inbox_component"; // Adjust the path if needed
import RightSection from "@/Components/RightSection";


const OnBox = () => {
  const router = useRouter();
  const [activeComponent, setActiveComponent] = useState(null);
  const [ isDarkMode, setIsDarkMode ] = useState();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    if (token) {
      localStorage.setItem("authToken", token);
      // Clean the URL by removing the token
      window.history.replaceState({}, document.title, window.location.pathname);
    } else {
      console.log("Token not found in the URL");
    }
  }, []);

  useEffect(() => {
    const storedIsDarkMode = localStorage.getItem("isDarkMode");
    if (storedIsDarkMode) {
      setIsDarkMode(JSON.parse(storedIsDarkMode));

    }
  }, []);

  const handleHomeClick = () => router.push("/home");
  const handleEmailClick = () => router.push("/email");
  const handleSendClick = () => router.push("/send");
  const handleInboxClick = () => setActiveComponent("Inbox");
  const handleStackClick = () => setActiveComponent(null); // Reset or set to another component
  const handleBarchartClick = () => setActiveComponent(null); // Reset or set to another component
  const handleDarkModeClick = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("isDarkMode", !isDarkMode);
  };

  const sidebarClasses = isDarkMode
    ? "bg-dark-sidebarBg border-dark-border"
    : "bg-light-sidebarBg border-light-border";

  const topbarClasses = isDarkMode
    ? "bg-dark-topbarBg border-dark-border"
    : "bg-light-topbarBg border-light-border";

  return (
    <div
      className={`flex h-screen flex-col ${
        isDarkMode ? "bg-dark-bg text-dark-text" : "bg-light-bg text-light-text"
      }`}
    >
      {/* Topbar */}
      <div
        className={`w-full p-4 border-b-2 flex justify-between items-center ${topbarClasses}`}
      >
        <h1 className="font-bold text-xl">OnBox Dashboard</h1>
        <div className="flex items-center">
          <span className="mr-4">Tim's Workspace</span>
          <div
            className="relative w-12 h-6 bg-gray-300 rounded-full flex items-center cursor-pointer"
            onClick={handleDarkModeClick}
          >
            <div
              className={`absolute w-6 h-6 bg-white rounded-full shadow-md transition-transform ${
                isDarkMode ? "transform translate-x-6" : ""
              }`}
            ></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div
          className={`w-[70px] flex flex-col gap-8 p-4 items-center border-r-2 ${sidebarClasses}`}
        >
          {/* Mail Logo */}
          <div className="w-[48px] h-[48px] mb-8">
            <Image src={Mail_logo} alt="Mail Logo" className="object-contain" />
          </div>

          {/* Icons */}
          <div className="flex flex-col gap-8 flex-1 w-full items-center">
            <Image
              src={Home_icon}
              alt="Home"
              className="cursor-pointer transition-transform hover:scale-110"
              onClick={handleHomeClick}
            />
            <Image
              src={email_icon}
              alt="Email"
              className="cursor-pointer transition-transform hover:scale-110"
              onClick={handleEmailClick}
            />
            <Image
              src={send_icon}
              alt="Send"
              className="cursor-pointer transition-transform hover:scale-110"
              onClick={handleSendClick}
            />
            <Image
              src={inbox_icon}
              alt="Inbox"
              className="cursor-pointer transition-transform hover:scale-110"
              onClick={handleInboxClick}
            />
            <Image
              src={stack_icon}
              alt="Stack"
              className="cursor-pointer transition-transform hover:scale-110"
              onClick={handleStackClick}
            />
            <Image
              src={barchart_icon}
              alt="Barchart"
              className="cursor-pointer transition-transform hover:scale-110"
              onClick={handleBarchartClick}
            />
          </div>

          {/* Profile Icon */}
          <div className="mt-auto mb-4 w-[48px] h-[56px]">
            <Image
              src={Profile}
              alt="Profile"
              className="cursor-pointer transition-transform hover:scale-110"
              onClick={handleHomeClick}
            />
          </div>
        </div>

        {/* Main Panel */}
        <div className="flex-1 flex flex-col items-center justify-center">
          {activeComponent === "Inbox" ? (
            <div className="flex-1 w-full p-4 overflow-y-auto max-h-screen">
              <InboxComponent />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center flex-1">
              <Image src={No_mssgage_img} alt="No Message" className="mb-8" />
              <div className="text-center">
                <h1 className="text-3xl font-bold mb-4">
                  It’s the beginning of a legendary sales pipeline
                </h1>
                <p className="text-lg text-gray-500">
                  When you have inbound E-mails, you’ll see them here
                </p>
              </div>
            </div>

          )}

        </div>
        <RightSection />
      </div>
    </div>
  );
};

export default OnBox;

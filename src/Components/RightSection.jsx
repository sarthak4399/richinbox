import React, { useState, useEffect } from "react";
import { IoIosSend } from "react-icons/io";
import { IoMailOpen } from "react-icons/io5";
import mail from "../Assets/mail_icon.png";
import Image from "next/image";
import classNames from 'classnames';

function RightSection() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedIsDarkMode = localStorage.getItem("isDarkMode");
        if (storedIsDarkMode) {
            setIsDarkMode(JSON.parse(storedIsDarkMode));
        }
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDarkMode);
    }, [isDarkMode]);

    return (
        <div
            className={classNames(
                "border-l-2 h-full overflow-y-scroll no-scrollbar px-2",
                {
                    "bg-white dark:bg-black border-[#E0E0E0] dark:border-[#33383F]": true,
                }
            )}
        >
            {/* Lead Details */}
            <div
                className={classNames(
                    "mt-5 text-black dark:text-white rounded-lg py-2 pl-4",
                    {
                        "bg-[#ECEFF3] dark:bg-[#23272C]": true,
                    }
                )}
            >
                Lead Details
            </div>
            <div className="px-6 my-10 space-y-6">
                <div className="flex justify-between text-sm">
                    <div>Name</div>
                    <div className={classNames({ "dark:text-[#B9B9B9]": isDarkMode })}>
                        Orlando
                    </div>
                </div>
                <div className="flex justify-between text-sm">
                    <div>Contact No</div>
                    <div className={classNames({ "dark:text-[#B9B9B9]": isDarkMode })}>
                        +54-9062827869
                    </div>
                </div>
                <div className="flex justify-between text-sm">
                    <div>Email ID</div>
                    <div className={classNames({ "dark:text-[#B9B9B9]": isDarkMode })}>
                        orlando@gmail.com
                    </div>
                </div>
                <div className="flex justify-between text-sm">
                    <div>Linkedin</div>
                    <div className={classNames({ "dark:text-[#B9B9B9]": isDarkMode })}>
                        linkedin.com/in/timvadde/
                    </div>
                </div>
                <div className="flex justify-between text-sm">
                    <div>Company Name</div>
                    <div className={classNames({ "dark:text-[#B9B9B9]": isDarkMode })}>
                        Reachinbox
                    </div>
                </div>
            </div>

            {/* Activities */}
            <div
                className={classNames(
                    "mt-8 text-black dark:text-white rounded-lg py-2 pl-4",
                    {
                        "bg-[#ECEFF3] dark:bg-[#23272C]": true,
                    }
                )}
            >
                Activities
            </div>

            <div className="my-8 px-4">
                <div className={classNames("px-2", { "text-black dark:text-white": !isDarkMode })}>
                    Campaign Name
                </div>
                <div className={classNames("my-4 text-sm px-2", { "text-black dark:text-white": !isDarkMode })}>
                    3 Steps | 5 Days in Sequence
                </div>
                <div className="px-2">
                    <div className="flex my-4 items-center">
                        <div>
                            <Image
                                src={mail}
                                alt="Mail Icon"
                                className={classNames(
                                    "w-12 p-2 rounded-full",
                                    {
                                        "bg-[#EEF1F4] dark:bg-[#23272C]": true,
                                    }
                                )}
                            />
                        </div>
                        <div className="ml-10 space-y-2">
                            <div className={classNames({ "text-black dark:text-white": !isDarkMode })}>
                                Step 1: Email
                            </div>
                            <div className={classNames("text-[#B9B9B9] text-sm flex items-center", { "dark:text-[#B9B9B9]": isDarkMode })}>
                                <IoIosSend className="mr-2" />
                                Sent 3rd, Feb
                            </div>
                        </div>
                    </div>

                    <div className="flex my-4 items-center">
                        <div>
                            <Image
                                src={mail}
                                alt="Mail Icon"
                                className={classNames(
                                    "w-12 p-2 rounded-full",
                                    {
                                        "bg-[#EEF1F4] dark:bg-[#23272C]": true,
                                    }
                                )}
                            />
                        </div>
                        <div className="ml-10 space-y-2">
                            <div className={classNames({ "text-black dark:text-white": !isDarkMode })}>
                                Step 2: Email
                            </div>
                            <div className={classNames("text-[#B9B9B9] text-sm flex items-center", { "dark:text-[#B9B9B9]": isDarkMode })}>
                                <IoMailOpen className="mr-2 text-yellow-500" />
                                Open 5th, Feb
                            </div>
                        </div>
                    </div>

                    <div className="flex my-4 items-center">
                        <div>
                            <Image
                                src={mail}
                                alt="Mail Icon"
                                className={classNames(
                                    "w-12 p-2 rounded-full",
                                    {
                                        "bg-[#EEF1F4] dark:bg-[#23272C]": true,
                                    }
                                )}
                            />
                        </div>
                        <div className="ml-10 space-y-2">
                            <div className={classNames({ "text-black dark:text-white": !isDarkMode })}>
                                Step 3: Email
                            </div>
                            <div className={classNames("text-[#B9B9B9] text-sm flex items-center", { "dark:text-[#B9B9B9]": isDarkMode })}>
                                <IoMailOpen className="mr-2 text-yellow-500" />
                                Open 5th, Feb
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RightSection;

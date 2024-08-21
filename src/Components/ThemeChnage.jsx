import { useEffect, useState } from "react";
import { FaSun, FaMoon ,FaArrowDown } from "react-icons/fa";

function ThemeChange() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(darkMode ? "light" : "dark");
    root.classList.add(darkMode ? "dark" : "light");
  }, [darkMode]);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="mr-10">
      <div
        className="relative w-12 h-6 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 cursor-pointer"
        onClick={handleToggle}
      >
        {/* Icon to show when dark mode is on */}
        <FaMoon
          className={`absolute text-yellow-500 left-1 transition-opacity duration-300 ${
            darkMode ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* Icon to show when light mode is on */}
        <FaSun
          className={`absolute text-yellow-500 right-1 transition-opacity duration-300 ${
            darkMode ? "opacity-0" : "opacity-100"
          }`}
        />
        {/* Slider Circle */}
        <div
          className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
            darkMode ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </div>
    </div>
  );
}

export default ThemeChange;

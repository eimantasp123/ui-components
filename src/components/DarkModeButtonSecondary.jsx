import { useEffect, useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";

const DarkModeToggleSecondary = () => {
  const [isDark, setIsDark] = useState(false);

  // Set dark mode on state change
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <div
      onClick={toggleDarkMode}
      className="relative flex h-8 w-16 select-none items-center rounded-full border border-neutral-400/10 bg-neutral-200 shadow-custom-light dark:border-neutral-600/30 dark:bg-neutral-800"
    >
      <span
        className={`pl-[12px] ${isDark ? "opacity-100" : "opacity-0"} text-[10px] text-neutral-500 transition-opacity duration-300 ease-out`}
      >
        ON
      </span>

      <span
        className={`pl-[8px] ${isDark ? "opacity-0" : "opacity-100"} text-[10px] text-neutral-500 transition-opacity duration-300 ease-out`}
      >
        OFF
      </span>
      <div
        className={`absolute flex items-center justify-center ${isDark ? "left-[33px] rotate-180" : "left-[1px]"} top-1/2 size-7 -translate-y-1/2 overflow-hidden rounded-full border border-neutral-400/10 bg-neutral-300 transition-all duration-300 ease-in-out dark:border-neutral-700/50 dark:bg-neutral-900`}
      >
        <CiDark
          size={16}
          className={`absolute ${isDark ? "opacity-0" : "opacity-100"} text-neutral-800 transition-all duration-500 ease-in-out`}
        />
        <CiLight
          size={16}
          className={`absolute ${isDark ? "opacity-100" : "opacity-0"} text-neutral-400 transition-all duration-500 ease-in-out`}
        />
      </div>
    </div>
  );
};

export default DarkModeToggleSecondary;

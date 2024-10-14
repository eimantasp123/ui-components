import { useEffect, useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";

const DarkModeToggle = () => {
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
      className="shadow-custom-light relative flex h-8 w-16 select-none items-center rounded-full border border-neutral-400/10 bg-neutral-200 dark:border-neutral-600/30 dark:bg-neutral-800"
    >
      {/* Dark mode icon */}
      <CiDark
        size={16}
        className={`absolute ${isDark ? "opacity-0" : "opacity-100 delay-200"} left-[7px] top-1/2 z-20 -translate-y-1/2 text-neutral-800 transition-all duration-500 ease-in-out`}
      />
      <span
        className={`pl-[12px] ${isDark ? "opacity-100" : "opacity-0"} text-[10px] text-neutral-500 transition-opacity duration-300 ease-out`}
      >
        ON
      </span>

      {/* Light mode icon */}
      <CiLight
        size={16}
        className={`absolute ${isDark ? "opacity-100 delay-200" : "opacity-0"} right-[7px] top-1/2 z-20 -translate-y-1/2 text-neutral-400 transition-all duration-500 ease-in-out`}
      />
      <span
        className={`pl-[8px] ${isDark ? "opacity-0" : "opacity-100"} text-[10px] text-neutral-500 transition-opacity duration-300 ease-out`}
      >
        OFF
      </span>
      <div
        className={`toggle-ball relative h-full w-full overflow-hidden border border-neutral-400/10 bg-neutral-300 transition-colors duration-300 ease-in-out dark:border-neutral-700/50 dark:bg-neutral-900`}
      ></div>
    </div>
  );
};

export default DarkModeToggle;

"use client";
import { useState } from "react";
import MobileMenuButton from "./components/MobileMenuButton";
import MobileNavigation from "./components/MobileNavigation";
import Logo from "./components/Logo";

// Header component
export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <header className="shadow-custom-light2 relative -mt-96 flex w-[340px] rounded-full border bg-white">
      <div className="z-20 flex w-full items-center justify-between px-5">
        <Logo />
        <MobileMenuButton
          active={isOpen}
          setActive={() => setIsOpen(!isOpen)}
        />
      </div>

      <div
        className={`shadow-custom-light2 absolute right-0 z-10 flex overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "top-14 h-[400px] w-[100%] rounded-[22px] opacity-100" : "top-0 h-0 w-0 rounded-[100px] opacity-0"} items-center justify-center border bg-white text-black`}
      >
        <div
          className={`absolute ${isOpen ? "opacity-100" : "opacity-0"} left-1/2 top-5 -translate-x-1/2 transition-opacity duration-500 ease-in-out`}
        >
          <MobileNavigation handleMobileClick={() => setIsOpen(!open)} />
        </div>
      </div>
    </header>
  );
}

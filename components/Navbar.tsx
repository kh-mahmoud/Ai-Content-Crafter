'use client'

import { SidebarTrigger } from "./ui/sidebar";
import NavItems from "./NavItems";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 z-10 w-full p-4 transition-colors duration-300 ${
        scrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between">
        <SidebarTrigger className="cursor-pointer" />
        <NavItems />
      </div>
    </nav>
  );
};

export default Navbar;

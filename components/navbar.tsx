/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { navbarLinks } from "../data/navbar-link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [slideNavbar, setSlideNavbar] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 0 ? setSlideNavbar(true) : setSlideNavbar(false);
    });
  }, []);

  return (
    <nav
      className={`navbar fixed  w-full top-0 left-0 z-[9999] py-[0.4rem] bg-main-bg/80 backdrop-blur-sm ${
        slideNavbar && "scrolled"
      }`}
    >
      <div className="flex items-center justify-between max-w-6xl mx-auto px-2">
        <Link
          href="/"
          className="navbar-brand text-2xl font-bold flex-align-center gap-2 hover:!text-primary transition-all duration-300"
        >
          <img src="/logo.png" alt="Logo" className="w-7 h-7" />
          Brian<span className="!text-primary">.</span>
        </Link>

        {/* Toggle Button */}
        <button
          className="p-2 rounded-lg toggle cursor-default sm:cursor-pointer feather-menu hover:bg-hover-bg md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Primary Menu */}
        <ul className="hidden space-x-10 md:flex">
          {navbarLinks.map((link) => (
            <li className="capitalize nav-link" key={link.id}>
              <a href={`#${link.name}`}>{link.name}.</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <ul
          className={`absolute left-0 flex bg-secondary flex-col w-full p-0 overflow-hidden transition-all duration-300 mobile-menu md:hidden top-full max-h-0 ${
            isMenuOpen && "showMenu"
          }`}
        >
          {navbarLinks.map((link) => (
            <li className="capitalize nav-link" key={link.id}>
              <a href={`#${link.name}`}>{link.name}.</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

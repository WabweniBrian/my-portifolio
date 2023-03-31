/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { navbarLinks } from "../data/navbarlink";

const Navbar = ({ slideNavbar }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`navbar fixed  w-full top-0 left-0 z-[9999] py-[0.4rem] bg-main-bg/80 backdrop-blur-sm ${
        slideNavbar && "scrolled"
      }`}
    >
      <div className="flex items-center justify-between max-w-6xl mx-auto px-2">
        <Link href="/">
          <a className="navbar-brand text-2xl font-bold flex-align-center gap-2 hover:!text-primary transition-all duration-300">
            <img src="/logo.png" alt="Logo" className="w-7 h-7" />
            Brian<span className="!text-primary">.</span>
          </a>
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

"use client";

import React from "react";
import { navbarLinks } from "../data/navbar-link";
import Tooltip from "./tooltip";

const LinkDots = () => {
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      showActiveSection();
    });
  }
  const showActiveSection = () => {
    const sections = document.querySelectorAll("section");
    const links = document.querySelectorAll(".dots a");
    sections.forEach((sec) => {
      let top = window.scrollY;
      let height = sec.offsetHeight;
      let offset = sec.offsetTop - 150;
      let id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        links.forEach((link) => {
          link.classList.remove("active");
          if (window !== undefined || document !== null) {
            document
              .querySelector(".dots a[href*=" + id + "]")!
              .classList.add("active");
          }
        });
      }
    });
  };

  return (
    <div className="fixed right-0 pr-2 md:pr-4 h-screen flex-center-center flex-col gap-4 dots z-50">
      {navbarLinks.map((link) => (
        <li
          className="capitalize nav-link list-none group relative"
          key={link.id}
        >
          <a
            href={`#${link.name}`}
            className="before:!hidden cursor-default sm:cursor-pointer"
          >
            <div className="w-3 h-3 bg-[#213632] rounded-full dot" />
          </a>
          <Tooltip content={link.name} position="left" />
        </li>
      ))}
    </div>
  );
};

export default LinkDots;

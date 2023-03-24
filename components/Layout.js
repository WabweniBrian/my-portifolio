import { useState } from "react";
import Meta from "./Meta";
import Navbar from "./Navbar";
import BackToTopButton from "./BackToTopButton";

const Layout = ({ children }) => {
  const [showButton, setShowButton] = useState(false);
  const [slideNavbar, setSlideNavbar] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      window.scrollY > 500 ? setShowButton(true) : setShowButton(false);
      window.scrollY > 0 ? setSlideNavbar(true) : setSlideNavbar(false);
      showActiveSection();
    });
  }

  const showActiveSection = () => {
    const sections = document.querySelectorAll("section");
    const links = document.querySelectorAll(".navbar a");
    sections.forEach((sec) => {
      let top = window.scrollY;
      let height = sec.offsetHeight;
      let offset = sec.offsetTop - 150;
      let id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        links.forEach((link) => {
          link.classList.remove("active");
          document
            .querySelector(".navbar a[href*=" + id + "]")
            .classList.add("active");
        });
      }
    });
  };

  return (
    <>
      <Meta />
      <BackToTopButton showButton={showButton} />
      <Navbar slideNavbar={slideNavbar} />
      {children}
    </>
  );
};

export default Layout;

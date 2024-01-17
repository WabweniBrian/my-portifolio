"use client";

import { useEffect, useState } from "react";
import { FiChevronUp } from "react-icons/fi";

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 500 ? setShowButton(true) : setShowButton(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        window.scrollY > 500 ? setShowButton(true) : setShowButton(false);
      });
    };
  }, []);

  return (
    <button
      className={`fixed bottom-0 right-0 grid mb-4 mr-4 z-[999] cursor-default sm:cursor-pointer rounded-full shadow back-to-top-btn w-9 h-9 place-items-center bg-primary shadow-primary/60 text-white ${
        showButton && "active"
      }`}
      onClick={() => window.scrollTo(0, 0)}
    >
      <FiChevronUp />
    </button>
  );
};

export default BackToTopButton;

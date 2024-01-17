"use client";

import React from "react";
import { FiChevronsDown } from "react-icons/fi";
import Tooltip from "./tooltip";

const ScrollIcon = () => {
  return (
    <>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 group">
        <div
          className="animate-bounce sm:cursor-pointer"
          onClick={() => window.scrollTo(0, window.innerHeight)}
        >
          <FiChevronsDown className="opacity-60 text-3xl" />
        </div>
        <Tooltip content="click me" />
      </div>
    </>
  );
};

export default ScrollIcon;

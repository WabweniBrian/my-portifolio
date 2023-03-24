import React from "react";
import { FiFacebook, FiGithub, FiLinkedin } from "react-icons/fi";
import Tooltip from "./Tooltip";

const SocialIcons = () => {
  return (
    <div className="fixed left-0 pl-2 md:pl-4 h-screen flex-center-center flex-col gap-10 z-50">
      <div className="relative group">
        <a
          href="https://www.github.com/wabweniBrian"
          target="_blank"
          rel="noreferrer"
        >
          <FiGithub />
        </a>
        <Tooltip content="Github" postion="right" />
      </div>
      <div className="group relative">
        <a
          href="https://www.linkedin.com/wabweniBrian"
          target="_blank"
          rel="noreferrer"
        >
          <FiLinkedin />
        </a>
        <Tooltip content="Linkedin" postion="right" />
      </div>
      <div className="group relative">
        <a
          href="https://www.facebook.com/wabzbraize"
          target="_blank"
          rel="noreferrer"
        >
          <FiFacebook />
        </a>
        <Tooltip content="Facebook" postion="right" />
      </div>
    </div>
  );
};

export default SocialIcons;

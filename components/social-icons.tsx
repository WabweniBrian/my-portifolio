import React from "react";
import { FiFacebook, FiGithub, FiLinkedin } from "react-icons/fi";
import Tooltip from "./tooltip";

const SocialIcons = () => {
  return (
    <div className="fixed left-0 z-50 flex-col h-screen gap-10 pl-2 md:pl-4 flex-center-center">
      <div className="relative group">
        <a
          href="https://github.com/WabweniBrian/"
          target="_blank"
          rel="noreferrer"
        >
          <FiGithub />
        </a>
        <Tooltip content="Github" position="right" />
      </div>
      <div className="relative group">
        <a
          href="https://www.linkedin.com/in/wabweni-brian-631079247"
          target="_blank"
          rel="noreferrer"
        >
          <FiLinkedin />
        </a>
        <Tooltip content="Linkedin" position="right" />
      </div>
      <div className="relative group">
        <a
          href="https://www.facebook.com/brian.wabweni"
          target="_blank"
          rel="noreferrer"
        >
          <FiFacebook />
        </a>
        <Tooltip content="Facebook" position="right" />
      </div>
    </div>
  );
};

export default SocialIcons;

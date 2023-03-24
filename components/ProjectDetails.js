/* eslint-disable @next/next/no-img-element */
import React from "react";
import Tooltip from "./Tooltip";
import { FaGithub, FaDesktop, FaPlay } from "react-icons/fa";

const ProjectDetails = ({
  title,
  description,
  techStack,
  github_link,
  live_demo_link,
  video_demo_link,
}) => {
  return (
    <div className="flex-1 basis-[18rem] order-2 md:order-none">
      <h1 className="text-3xl font-semibold text-gradient">{title}</h1>
      <p className="mt-2">{description}</p>
      <p className="text-primary mt-3">Tech Stack:</p>
      <div className="mt-3 flex-align-center gap-3">
        {techStack?.map((stack) => {
          return (
            <div className="group relative" key={stack.id}>
              <img
                src={stack?.image}
                alt={stack?.title}
                className="w-6 sm:cursor-pointer"
              />
              <Tooltip content={stack?.title} />
            </div>
          );
        })}
      </div>
      <div className="mt-4 flex-center-between gap-3">
        <a
          href={github_link}
          target="_blank"
          className="px-4 py-2 rounded-md bg-black hover:bg-black/70 flex-align-center gap-2 hover:text-inherit"
          rel="noreferrer"
        >
          <FaGithub className="hidden sm:block" />
          <span>Source code</span>
        </a>
        <a
          href={live_demo_link}
          target="_blank"
          className="px-4 py-2 rounded-md bg-primary hover:bg-primary/70  flex-align-center gap-2 hover:text-inherit"
          rel="noreferrer"
        >
          <FaDesktop className="hidden sm:block" />
          <span>Live demo</span>
        </a>
        <a
          href={video_demo_link}
          target="_blank"
          className="px-4 py-2 rounded-md bg-red-500 hover:bg-red-500/70  flex-align-center gap-2 hover:text-inherit"
          rel="noreferrer"
        >
          <FaPlay className="hidden sm:block" />
          <span>Watch demo</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;

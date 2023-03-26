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
  videoId,
  openModal,
}) => {
  return (
    <div className="flex-1 basis-[18rem] order-2 md:order-none">
      <h1 className="text-3xl font-semibold text-gradient">{title}</h1>
      <p className="mt-2">{description}</p>
      <p className="mt-3 text-primary">Tech Stack:</p>
      <div className="gap-3 mt-3 flex-align-center">
        {techStack?.map((stack) => {
          return (
            <div className="relative group" key={stack.id}>
              <img
                src={stack?.image}
                alt={stack?.title}
                className="w-6 rounded-md sm:cursor-pointer"
              />
              <Tooltip content={stack?.title} />
            </div>
          );
        })}
      </div>
      <div className="gap-3 mt-4 flex-center-between">
        <a
          href={github_link}
          target="_blank"
          className="gap-2 px-4 py-2 bg-black rounded-md hover:bg-black/70 flex-align-center hover:text-inherit"
          rel="noreferrer"
        >
          <FaGithub className="hidden sm:block" />
          <span>Source code</span>
        </a>
        <a
          href={live_demo_link}
          target="_blank"
          className="gap-2 px-4 py-2 rounded-md bg-primary hover:bg-primary/70 flex-align-center hover:text-inherit"
          rel="noreferrer"
        >
          <FaDesktop className="hidden sm:block" />
          <span>Live demo</span>
        </a>
        <button
          className="gap-2 px-4 py-2 bg-red-500 rounded-md hover:bg-red-500/70 flex-align-center hover:text-inherit"
          onClick={() => openModal(videoId)}
        >
          <FaPlay className="hidden sm:block" />
          <span>Watch demo</span>
        </button>
      </div>
    </div>
  );
};

export default ProjectDetails;

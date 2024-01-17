/* eslint-disable @next/next/no-img-element */
import React from "react";
import Tooltip from "./tooltip";
import { FaGithub, FaDesktop, FaPlay } from "react-icons/fa";

type Techstack = {
  id: string;
  title: string;
  image: string;
};

type Project = {
  title: string;
  description: string;
  techstacks: Techstack[];
  github_link: string;
  live_demo_link: string;
  videoId: string;
};

interface ProjectDetailsProps {
  project: Project;
  openModal: (videoId: string) => void;
}

const ProjectDetails = ({ project, openModal }: ProjectDetailsProps) => {
  return (
    <div className="flex-1 basis-[18rem] order-2 md:order-none">
      <h1 className="text-3xl font-semibold text-gradient">{project.title}</h1>
      <p className="mt-2">{project.description}</p>
      <p className="mt-3 text-primary">Tech Stack:</p>
      <div className="gap-3 mt-3 flex-align-center">
        {project?.techstacks?.map((stack) => {
          return (
            <div className="relative group" key={stack.id}>
              <img
                src={stack.image}
                alt={stack.title}
                className="w-6 rounded-md sm:cursor-pointer"
              />
              <Tooltip content={stack.title} />
            </div>
          );
        })}
      </div>
      <div className="gap-3 mt-4 flex-center-between">
        <a
          href={project.github_link}
          target="_blank"
          className="gap-2 px-4 py-2 bg-black rounded-md hover:bg-black/70 flex-align-center hover:text-inherit"
          rel="noreferrer"
        >
          <FaGithub className="hidden sm:block" />
          <span>Source code</span>
        </a>
        <a
          href={project.live_demo_link}
          target="_blank"
          className="gap-2 px-4 py-2 rounded-md bg-primary hover:bg-primary/70 flex-align-center hover:text-inherit"
          rel="noreferrer"
        >
          <FaDesktop className="hidden sm:block" />
          <span>Live demo</span>
        </a>
        <button
          className="gap-2 px-4 py-2 bg-red-500 rounded-md hover:bg-red-500/70 flex-align-center hover:text-inherit"
          onClick={() => openModal(project.videoId)}
        >
          <FaPlay className="hidden sm:block" />
          <span>Watch demo</span>
        </button>
      </div>
    </div>
  );
};

export default ProjectDetails;

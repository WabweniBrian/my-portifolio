/* eslint-disable @next/next/no-img-element */

"use client";

import { useState } from "react";
import YoutubePlayer from "./youtube-palyer";
import ProjectDetails from "./project-details";

const Projects = ({ projects }: { projects: Project[] }) => {
  const [modal, setModal] = useState({ isOpen: false, videoId: "" });

  const openModal = (videoId: string) => {
    setModal((prevVal) => ({
      ...prevVal,
      isOpen: true,
      videoId,
    }));
  };
  const closeModal = () => {
    setModal((prevVal) => ({ ...prevVal, isOpen: false, videoId: "" }));
  };

  return (
    <section
      className="py-10 min-h-screen max-w-6xl mx-auto !w-[85%]"
      id="projects"
    >
      <div className="flex-center-center">
        <div className="gradient-tag !py-1">
          <span className="text-muted">Projects</span>
        </div>
      </div>
      <p className="mt-2 text-2xl text-center">These are some of my projects</p>
      <p className="mt-2 text-center">
        Since most of these apps/websites have multiple pages, I have included{" "}
        <br />
        video demos for each project. They showcase most features and <br />
        responsiveness of the website/web app
      </p>
      <YoutubePlayer modal={modal} closeModal={closeModal} />
      <div className="mt-5">
        {projects.map((project, i) => (
          <div key={project.id} className="my-52 relative">
            {i % 2 === 0 ? (
              <div className="flex-wrap gap-20 flex-center-center">
                <div className="flex-1 basis-[18rem] relative">
                  <img
                    src={project.previewImage}
                    alt={project.title}
                    className="w-full"
                  />
                  <h1 className="absolute text-9xl opacity-20 text-primary font-poppins -top-24 -z-10">
                    0{i + 1}
                  </h1>
                </div>
                <ProjectDetails project={project} openModal={openModal} index={i} />
              </div>
            ) : (
              <div className="flex-wrap gap-20 flex-center-center">
                <ProjectDetails project={project} openModal={openModal} index={i} />
                <div className="flex-1 basis-[18rem] relative">
                  <img
                    src={project.previewImage}
                    alt={project.title}
                    className="w-full"
                  />

                  <h1 className="absolute right-0 text-9xl opacity-20 text-primary font-poppins -top-24 -z-10">
                    0{i + 1}
                  </h1>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

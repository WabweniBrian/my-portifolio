/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { projects } from "../data/projects";
import ProjectDetails from "./ProjectDetails";
import YoutubePlayer from "./YoutubePlayer";

const Projects = () => {
  const [modal, setModal] = useState({ isOpen: false, videoId: "" });

  const openModal = (videoId) => {
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
        {projects.map(
          (
            {
              id,
              title,
              description,
              techStack,
              preview_image,
              github_link,
              live_demo_link,
              videoId,
            },
            i
          ) => (
            <div key={id} className="my-52">
              {i % 2 === 0 ? (
                <div className="flex-wrap gap-20 flex-center-center">
                  <div className="flex-1 basis-[18rem] relative">
                    <img src={preview_image} alt={title} className="w-full" />
                    {id === 3 && (
                      <>
                        <p className="mt-3 text-2xl font-semibold text-center text-[#fcb009]">
                          Check out more like the above:
                        </p>
                        <div className="gap-6 mt-3 flex-center-center more">
                          <a
                            href="https://car-management-dashboard.netlify.app/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              src="/images/projects/motiv.png"
                              alt=""
                              className="object-contain w-20 h-20 rounded"
                            />
                          </a>
                          <a
                            href="https://money-ex.netlify.app/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              src="/images/projects/money.png"
                              alt=""
                              className="object-contain w-20 h-20 rounded"
                            />
                          </a>
                        </div>
                      </>
                    )}
                    <h1 className="absolute text-9xl opacity-20 text-primary font-poppins -top-24 -z-10">
                      0{i + 1}
                    </h1>
                  </div>
                  <ProjectDetails
                    title={title}
                    description={description}
                    techStack={techStack}
                    github_link={github_link}
                    live_demo_link={live_demo_link}
                    videoId={videoId}
                    openModal={openModal}
                  />
                </div>
              ) : (
                <div className="flex-wrap gap-20 flex-center-center">
                  <ProjectDetails
                    title={title}
                    description={description}
                    techStack={techStack}
                    github_link={github_link}
                    live_demo_link={live_demo_link}
                    videoId={videoId}
                    openModal={openModal}
                  />
                  <div className="flex-1 basis-[18rem] relative">
                    <img src={preview_image} alt={title} className="w-full" />

                    <h1 className="absolute right-0 text-9xl opacity-20 text-primary font-poppins -top-24 -z-10">
                      0{i + 1}
                    </h1>
                  </div>
                </div>
              )}
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Projects;

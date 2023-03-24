/* eslint-disable @next/next/no-img-element */
import { projects } from "../data/projects";
import ProjectDetails from "./ProjectDetails";

const Projects = () => {
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
      <p className="text-center mt-2 text-2xl">These are some of my projects</p>
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
              video_demo_link,
            },
            i
          ) => (
            <div key={id} className="my-52">
              {i % 2 === 0 ? (
                <div className="flex-center-center flex-wrap gap-20">
                  <div className="flex-1 basis-[18rem] relative">
                    <img src={preview_image} alt={title} className="w-full" />
                    <h1 className="text-9xl absolute opacity-20 text-primary font-poppins -top-24 -z-10">
                      0{i + 1}
                    </h1>
                  </div>
                  <ProjectDetails
                    title={title}
                    description={description}
                    techStack={techStack}
                    github_link={github_link}
                    live_demo_link={live_demo_link}
                    video_demo_link={video_demo_link}
                  />
                </div>
              ) : (
                <div className="flex-center-center flex-wrap gap-20">
                  <ProjectDetails
                    title={title}
                    description={description}
                    techStack={techStack}
                    github_link={github_link}
                    live_demo_link={live_demo_link}
                    video_demo_link={video_demo_link}
                  />
                  <div className="flex-1 basis-[18rem] relative">
                    <img src={preview_image} alt={title} className="w-full" />
                    <h1 className="text-9xl absolute opacity-20 text-primary font-poppins -top-24 -z-10 right-0">
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

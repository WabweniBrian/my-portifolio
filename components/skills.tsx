/* eslint-disable @next/next/no-img-element */
import { skills } from "../data/skills";

const Skills = () => {
  return (
    <section
      className="pt-10 pb-28 min-h-screen !bg-cover !bg-no-repeat relative"
      id="skills"
      style={{
        background:
          "linear-gradient(rgba(8, 15, 13, 0.8), rgba(8, 15, 13, 0.8)), url('/images/hero-bg.png')",
      }}
    >
      <div className="max-w-6xl mx-auto !w-[85%]">
        <div className="flex-center-center">
          <div className="gradient-tag !py-1">
            <span className="text-muted">Skills</span>
          </div>
        </div>
        <p className="mt-2 text-2xl text-center">
          These are some of my skills and tech stack
        </p>
        <div className="mx-auto my-6 flex-center-center">
          <div className="relative h-auto before:absolute before:h-full before:w-[2px] before:bg-hover-bg before:left-1/2 before:-translate-x-1/2">
            <ul>
              {skills.map(({ id, name, image }) => (
                <li
                  key={id}
                  className="flex-align-center max-w-[150px] w-full my-2 gap-2 bg-secondary p-2 rounded-lg skill"
                >
                  <img src={image} alt={name} className="w-6 rounded-md" />
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-main-bg to-transparent" />
    </section>
  );
};

export default Skills;

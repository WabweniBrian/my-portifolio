/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { FaMouse } from "react-icons/fa";
import { FiChevronsDown } from "react-icons/fi";
import Tooltip from "./Tooltip";
const Hero = () => {
  return (
    <section
      className="pt-16 md:pt-2 min-h-screen flex-center-center flex-wrap gap-6 !bg-contain !bg-no-repeat relative max-w-6xl mx-auto !w-[85%]"
      id="home"
      style={{
        background: "url('/images/hero-bg-pattern.png')",
      }}
    >
      <div className="flex-1 basis-[25rem] text-center sm:text-left">
        <div className="bg-secondary px-5 py-1 rounded-lg w-fit">
          <span className="text-muted text-xl">Hi, I'm</span>
        </div>
        <h1 className="text-8xl md:text-9xl text-gradient font-bold my-4 md:my-1">
          BRIAN.
        </h1>
        <div className="flex justify-end">
          <div className="gradient-tag">
            <span className="text-muted text-xl">A Frontend Developer</span>
          </div>
        </div>
        <p className="mt-4">
          I create visually stunning, dynamic and responsive web applications
          and websites. I also translate designs to clean code using the latest
          tech stack.
          <span className="text-primary">
            {" "}
            I craft every pixel inch to its right position 😎
          </span>
        </p>
      </div>
      <div className="flex-1 basis-[25rem]">
        <img src="/images/hero-img.png" alt="Hero-Image" className="w-full" />
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 group">
        <div
          className="animate-bounce sm:cursor-pointer"
          onClick={() => window.scrollTo(0, window.innerHeight)}
        >
          <FiChevronsDown className="opacity-60 text-3xl" />
        </div>
        <Tooltip content={"click me"} />
      </div>
    </section>
  );
};

export default Hero;

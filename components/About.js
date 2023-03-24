/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
const About = () => {
  return (
    <section
      className="py-10 min-h-screen max-w-6xl mx-auto !w-[85%]"
      id="about"
    >
      <div className="flex-center-center">
        <div className="gradient-tag !py-1">
          <span className="text-muted">About</span>
        </div>
      </div>
      <div className="flex-center-center flex-wrap gap-6 mt-16 text-center sm:text-left">
        <div className="image flex-1 basis-[18rem]">
          <img
            src="/images/about-banner.png"
            alt="About Me Image"
            className="w-full"
          />
        </div>
        <div className="image flex-1 basis-[18rem]">
          <h1 className="text-2xl font-bold capitalize">
            need a creative product? <br /> i can help you
          </h1>
          <div className="border-l-4 border-primary pl-4 mt-3">
            <p className="text-left">
              As a frontend developer with a passion for creating visually
              stunning and highly responsive web applications, I am confident in
              my ability to add value to your business. With a keen eye for
              design and a deep understanding of frontend technologies, I have
              consistently delivered projects that not only meet, but exceed my
              clients' expectations. Whether it's a complex web application or a
              simple brochure website, I bring the same level of dedication and
              attention to detail to each and every project
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

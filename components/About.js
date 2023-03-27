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
      <div className="flex-wrap gap-6 mt-16 text-center flex-center-center sm:text-left">
        <div className="image flex-1 basis-[18rem]">
          <img
            src="/images/about.png"
            alt="About Me Image"
            className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full object-cover object-top mx-auto"
          />
        </div>
        <div className="image flex-1 basis-[18rem]">
          <h1 className="text-2xl font-bold capitalize">
            need a creative product? <br /> i can help you
          </h1>
          <div className="pl-4 mt-3 border-l-4 border-primary">
            <p className="text-left">
              As a frontend developer with a passion for creating visually
              stunning and highly responsive web applications, I am confident in
              my ability to add value to your business. With a keen eye for
              design and love for detailed work, I make sure each inch of a
              pixel is put to its right place. Whether it's a complex web
              application or a simple website, I bring the same level of
              dedication and attention to detail to each and every project.
            </p>
            <p className="text-left">I love this quote by Steve Jobs ❤️!</p>
            <div className="p-4 mt-2 ml-4 font-serif border-l-4 rounded-lg bg-primary/20 border-l-primary text-primary">
              <p>
                "Design is not just what it looks like and feels like. Design is
                how it works."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

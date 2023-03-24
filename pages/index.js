import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import LinkDots from "../components/LinkDots";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import SocialIcons from "../components/SocialIcons";

export default function Home() {
  return (
    <>
      <LinkDots />
      <SocialIcons />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

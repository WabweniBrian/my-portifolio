import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import LinkDots from "@/components/links-dots";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import SocialIcons from "@/components/social-icons";

export default function Home() {
  return (
    <>
      <Navbar />
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

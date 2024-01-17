import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import LinkDots from "@/components/links-dots";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import SocialIcons from "@/components/social-icons";

const getProjects = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/projects/portfolio`,
    { cache: "no-store" }
  );
  return res.json();
};

const getTechstacks = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/projects/techstacks`,
    { cache: "no-store" }
  );
  return res.json();
};

export default async function Home() {
  const projects: Project[] = await getProjects();
  const techstacks: Techstack[] = await getTechstacks();

  return (
    <>
      <LinkDots />
      <SocialIcons />
      <Hero />
      <About />
      <Skills skills={techstacks} />
      <Projects projects={projects} />
      <Contact />
      <Footer />
    </>
  );
}

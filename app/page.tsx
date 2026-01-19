import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Services from "@/components/services";
import Skills from "@/components/skills";
import SectionHeading from "@/components/ui/section-heading";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 pt-28 sm:pt-36">
      <Hero />
      <div className="w-20 h-1 bg-teal-500 rounded-full mb-28 hidden sm:block"></div>
      <About />
      <Skills />
      <Services />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}

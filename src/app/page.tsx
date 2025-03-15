import AboutSection from "@/components/AboutSection";
import Introduction from "@/components/Introduction";
import NavBar from "@/components/NavBar";
import ProjectSection from "@/components/ProjectSection";
import ServiceSection from "@/components/ServiceSection";
import TechnologySection from "@/components/TechnologySection";

export default function Home() {
  return (
  <main>
      <NavBar/>
      <Introduction/>
      <TechnologySection/>
      <ProjectSection/>
      <AboutSection/>
      <ServiceSection/>
  </main>
  );
}

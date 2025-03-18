import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import Introduction from "@/components/Introduction";
import NavBar from "@/components/NavBar";
import ProjectSection from "@/components/ProjectSection";
import ServiceSection from "@/components/ServiceSection";
import TechnologySection from "@/components/TechnologySection";

export default function Home() {
  return (
    <main>
      <NavBar>
        <li ><a href="#inicio" className="cursor-pointer font-semibold text-xs sm:text-base hover:bg-black/40 px-2 py-1 rounded-full duration-300" aria-label="button-navbar">Inicio</a></li>
        <li ><a href="#projetos" className="cursor-pointer font-semibold text-xs sm:text-base hover:bg-black/40 px-2 py-1 rounded-full duration-300">Projetos</a></li>
        <li><a href="#sobre" className="cursor-pointer font-semibold text-xs sm:text-base hover:bg-black/40 px-2 py-1 rounded-full duration-300">Sobre</a></li>
        <li><a href="#servicos" className="cursor-pointer font-semibold text-xs sm:text-base hover:bg-black/40 px-2 py-1 rounded-full duration-300">Serviços</a></li>
      </NavBar>
      <Introduction />
      <TechnologySection />
      <ProjectSection />
      <AboutSection />
      <ServiceSection />
      <Footer />
    </main>
  );
}

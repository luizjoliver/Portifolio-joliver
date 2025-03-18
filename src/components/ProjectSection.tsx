import ProjectItem, { ProjectItemType } from "./ProjectItem";
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "./ui/carousel";


export const arrayProjetos = [
  {
    id: 1,
    projetoUrl: 'https://api.github.com/repos/luizjoliver/Joao-e-Maria-Store/contents/project-info.json'
  },
  {
    id: 2,
    projetoUrl: 'https://api.github.com/repos/luizjoliverceub/Petzone/contents/project-info.json?ref=alter-pid-4'
  },
  {
    id: 3,
    projetoUrl: 'https://api.github.com/repos/luizjoliver/my-podcast-api/contents/project-info.json'
  },
];

export default async function ProjectSection() {

  async function fetchProjectData(url: string) {
    try {
      const token = process.env.GITHUB_TOKEN;
      const headers = {
        "Authorization": `Bearer ${token}`,

      };

      const response = await fetch(url, {
        headers,
        cache: 'force-cache'
      });
      if (!response.ok) {
        throw new Error(`Error fetching project data from ${url}`);
      }

      const data = await response.json();

      if (!data.content) {
        throw new Error(`No content found for project at ${url}`);
      }

      const decodedContent = Buffer.from(data.content, "base64").toString("utf-8");
      return JSON.parse(decodedContent);
    } catch (error) {
      console.error("Error fetching project data:", error);
      return null;
    }
  }

  const projetos: ProjectItemType[] = await Promise.all(arrayProjetos.map((projeto) => fetchProjectData(projeto.projetoUrl)));

  console.log(projetos);

  return (
    <section className="mt-40 w-full min-h-screen flex items-center justify-center px-4 sm:px-6" id="projetos">
      <div className="h-[90%] w-full lg:w-2/3 flex flex-col items-center justify-center gap-6 md:gap-10">
        <div className="w-full flex flex-col items-center gap-1 md:gap-2">
          <h3 className="text-2xl sm:text-3xl md:text-4xl text-white text-center">Meus Projetos</h3>
          <span className="text-lg sm:text-xl md:text-2xl italic text-white/40">My Projects</span>
        </div>
        
        <div className='h-full w-[300px] md:size-[90%] rounded-lg'>
          <Carousel className="w-full h-full p-2 flex flex-col items-center justify-center">
            <CarouselContent className="w-full flex-1"> {/* Adicione esta parte */}
              {projetos.map((projectItem) => (
                <ProjectItem ProjectItem={projectItem} key={projectItem.title} />
              ))}
            </CarouselContent>
            <div className="hidden sm:block">
              <CarouselPrevious className="size-8 md:size-10" />
              <CarouselNext className="size-8 md:size-10" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
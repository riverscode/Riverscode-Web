import Image from "next/image";
import { ProjectType } from "../types";

interface ProjectProps {
  project: ProjectType;
}

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="border-4 border-black rounded-md relative overflow-hidden">
      <div className={`absolute ${project.visibility == "public" ? "bg-orange-500" : "bg-gray-500"} top-4 -right-8 z-20 py-1 px-10 rotate-45`}>
        <p className={`text-white capitalize `}>{project.visibility}</p>
      </div>
      <Image src={project.image} alt={project.name} height={220} width={320} layout="fixed" />
      <div className="p-4">
        <h3 className="text-xl md:text-2xl font-bold text-left">
          {project.name}
        </h3>
        <p className="mt-2">{project.summary}</p>
        <div className="flex gap-3">
          {project.tech.map((t, index) =>

          (
            <div key={index} className="flex items-center justify-center transition-all duration-300  h-9 w-9 rounded mt-6"  >
              <Image src={`/assets/tecnologies/${t}.png`} alt="" width={60} height={60} />
            </div>
          )
          )}
        </div>
        <div className="flex justify-between items-center mt-4">
          <button className="px-3 py-1 rounded-md bg-purple-400 hover:bg-purple-600 text-white active:scale-90 transition-transform duration-200">Ver más</button>
          <div className=" flex justify-end">
            {project.github &&
              <a href={project.github}>
                <img src="/assets/redes/github.svg" alt="github" />
              </a>
            }
          </div>
        </div>

      </div>
    </div>
  )
}
export default ProjectCard
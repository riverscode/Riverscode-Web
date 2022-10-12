import Image from "next/image"
import { projectsData } from "../../constants"
import styles from "../../styles/style"
import { ProjectType } from "../../types"
import ProjectCard from "../ProjectCard"

const projects: ProjectType[] = projectsData

const Projects = () => {
  return (
    <section className={`${styles.section}`} id="projects">
      <h2 className="text-center font-bold text-3xl">
        Mis Proyectos
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {projects.map((project, index) => {
          return (<ProjectCard key={index} project={project} />)
        }
        )}
      </div>
    </section>
  )
}
export default Projects


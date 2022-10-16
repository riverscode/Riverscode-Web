import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import style from "../../styles/style"

const Projects = () => {
  return (
    <Layout>
      <>
        <Seo title="Blog - RiversCode" description="Los mejores articulos enfocados al desarrollo Web" image="sdfsdf" />
        <div className={`${style.section} mt-32 mt md:mt-44`}>Proyectos</div>
      </>
    </Layout>
  )
}
export default Projects
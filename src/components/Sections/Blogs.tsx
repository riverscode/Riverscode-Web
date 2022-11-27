import Image from "next/image";
import Link from "next/link";
import { formatDate } from "../../lib/formatDate";
import styles from "../../styles/style"
import { BlogType } from "../../types"
import BlogCard from "../BlogCard";
import LambdaTag from "../LambdaTag";

interface BlogsProps {
  blogs: BlogType[]
}

const Blogs: React.FC<BlogsProps> = ({blogs}) => {
  return (
    <section className={`${styles.section}`} id="projects">
      <h2 className="text-center font-bold text-3xl">
      Últimos artículos
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
        {blogs.slice(0,4).map((blog, index) => {
          return (<BlogCard key={index} {...blog} />)
        }
        )}
      </div>
      <div className="flex justify-center mt-6">
        <Link href="/blog">
          <a className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
            Ver más
          </a>
        </Link>
      </div>

    </section>
  )
}
export default Blogs
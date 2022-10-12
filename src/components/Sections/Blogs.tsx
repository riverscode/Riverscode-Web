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
        {blogs.slice(0,3).map((blog, index) => {
          return (<BlogCard key={index} {...blog} />)
        }
        )}
      </div>
    </section>
  )
}
export default Blogs
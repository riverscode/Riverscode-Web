import { useState } from "react";
import BlogCard from "./BlogCard";
import style from '../styles/style'
import { BlogType } from "../types";

interface BlogListProps {
  blogs: BlogType[]
}

const BlogList: React.FC<BlogListProps> = ({ blogs }) => {
  const [searchValue, setSearchValue] = useState("");

  const filteredBlogBlogs = blogs
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) =>
      frontMatter.title?.toLowerCase().includes(searchValue.toLowerCase())
    );
  return (
    <div className={`${style.section} mt-32 mt md:mt-44`}>
      <div className="flex items-center">
        <h2 className="text-xl md:text-3xl font-extrabold text-purple-500">
          Nuestros artículos{" "}
        </h2>
        <span className=" font-light text-md md:text-xl ml-1 md:ml-3">
          | {filteredBlogBlogs.length} disponibles
        </span>
      </div>
      <div className="h-10 md:h-16 mt-4 md:mt-6 relative rounded-md bordered items-center shadow-lg bg-gray-100 ">
        <input
          className="h-full px-3 md:px-6 py-1 rounded text-gray-800 w-full bg-transparent focus:outline-0 text-md md:text-xl "
          type="text"
          placeholder="Buscar por título"
          aria-label="Buscar por título"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 md:w-8 md:h-8 absolute top-3 md:top-4 right-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            className="stroke-teal-600 "
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-16 ">
        {!filteredBlogBlogs.length && "No hemos encontrado ningún Blog 🥺"}
        {filteredBlogBlogs.map(
          ({ title, publishedAt, tags, readingTime, slug, image }, index) => {
            return (
              <BlogCard
                key={slug}
                title={title}
                publishedAt={publishedAt}
                tags={tags}
                readingTime={readingTime}
                slug={slug}
                image={image}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default BlogList;

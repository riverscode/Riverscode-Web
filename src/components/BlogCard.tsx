import { formatDate } from "../lib/formatDate";
import LambdaTag from "../components/LambdaTag";
import Link from "next/link";
import Image from "next/image";
import { BlogType } from "../types"

const BlogCard: React.FC<BlogType> = (blog) => {
  const {
    title,
    publishedAt,
    readingTime,
    tags,
    slug,
    image
  } = blog
  return (
    <Link href={`/blog/${slug}`}>
      <div className=" overflow-hidden  w-full border-4 border-primary/50 shadow-md shadow-primary/20 rounded-md  hover:-translate-y-1 transition ease-out  duration-300 hover:scale-103 cursor-pointer hover:bg-primary/30 h-40">
        <div className="flex h-full">
          <div className="">
            <img
              className="w-12 object-fit sm:w-40 sm:object-cover h-full" 
              src={`/assets/${image}`}
              alt={title}
              />
          </div>
          <div className="flex flex-1 flex-col px-2 py-4">
            <div className="flex gap-x-2">
              {tags.map((tag, i) => {
                return <LambdaTag key={i} tag={tag}></LambdaTag>;
              })}
            </div>
            <h2 className="flex-1 text-lg md:text-2xl font-bold text-left mt-2">
              {title}
            </h2>
            <div className=" flex justify-between  items-start">
              <div className="flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 md:w-5 md:h-5"
                  viewBox="0 0 20 20"
                  fill="#000"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="ml-2 text-xs md:text-lg">{formatDate(publishedAt)}</p>
              </div>
              <div className="flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 md:w-5 md:h-5 "
                  viewBox="0 0 20 20"
                  fill="#000"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="ml-2 text-xs md:text-lg">{Math.floor(readingTime.minutes)} min</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
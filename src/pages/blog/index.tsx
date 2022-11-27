import React from "react";
import BlogList from "../../components/BlogList";
import Layout from "../../components/Layout";
import SEO from "../../components/Seo";
import { getFilesMetadata } from "../../lib/mdx";
import { BlogType } from "../../types";

type BlogProps = {
  blogs: BlogType[]
}

const blog: React.FC<BlogProps> = ({ blogs }) => {

  const filteredBlogs = blogs.filter((blog) => blog.status == "ready");

  // Ordenar blogs por fecha
  filteredBlogs.sort((a, b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });
  return (
    <Layout>
      <>
        <SEO title="Blog - RiversCode" description="Los mejores artículos enfocados al desarrollo Web" image="https://res.cloudinary.com/lambda-ingenier-a-e-innovaci-n/image/upload/v1641850100/lambda-ogimage_mbrwai.webp" />
        <BlogList blogs={filteredBlogs} />
      </>
    </Layout>
  );
};

export default blog;

export async function getStaticProps() {
  const blogs = await getFilesMetadata("posts");
  return {
    props: {
      blogs: blogs,
    },
  };
}
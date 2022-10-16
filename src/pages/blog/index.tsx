import React from "react";
import BlogList from "../../components/BlogList";
import Layout from "../../components/Layout";
import SEO from "../../components/Seo";
import { getFilesMetadata } from "../../lib/mdx";

type BlogProps = {
  blogs: []
}

const blog: React.FC<BlogProps> = ({ blogs }) => {
  return (
    <Layout>
      <>
        <SEO title="Blog - RiversCode" description="Los mejores articulos enfocados al desarrollo Web" image="sdfsdf" />
        <BlogList blogs={blogs} />
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
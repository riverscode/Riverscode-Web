import Layout from "../components/Layout";
import SEO from "../components/Seo";

import { Banner, Tecnologies, Projects } from "../components/Sections";
import Blogs from "../components/Sections/Blogs";
import { getFilesMetadata } from "../lib/mdx";
import { BlogType } from "../types";

export default function Home({blogs}: {blogs: BlogType[]}) {

  const filteredBlogs = blogs.filter((blog) => blog.status == "ready");

  // Ordenar blogs por fecha
  filteredBlogs.sort((a, b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });

  return (
    <Layout>
      <>
        <SEO title="RiversCode" description="Aprende desarrollo web con artículos" image="https://res.cloudinary.com/lambda-ingenier-a-e-innovaci-n/image/upload/v1641850100/lambda-ogimage_mbrwai.webp" />
        <main>
          <Banner />
          <Tecnologies />
          <Blogs blogs={filteredBlogs} />
          {/* <Projects /> */}
        </main>
      </>
    </Layout>
  );
}

export async function getStaticProps() {
  const blogs = await getFilesMetadata("posts");
  return {
    props: {
      blogs: blogs,
    },
  };
}

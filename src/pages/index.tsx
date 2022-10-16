import Layout from "../components/Layout";
import SEO from "../components/Seo";

import { Banner, Tecnologies, Projects } from "../components/Sections";
import Blogs from "../components/Sections/Blogs";
import { getFilesMetadata } from "../lib/mdx";
import { BlogType } from "../types";

export default function Home({blogs}: {blogs: BlogType[]}) {
  return (
    <Layout>
      <>
        <SEO title="RiversCode" description="Aprende desarrollo web con articulos" image="" />
        <main>
          <Banner />
          <Tecnologies />
          <Blogs blogs={blogs} />
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

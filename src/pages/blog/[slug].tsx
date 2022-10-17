import Layout from "../../components/Layout";
import { MDXBlogComponets } from "../../components/MDXBlogComponets";
import SEO from '../../components/Seo';
import { MDXRemote } from "next-mdx-remote";
import { getFiles, getFilesBySlug } from "../../lib/mdx";
import BlogHeader from "../../components/BlogHeader";
import { FacebookProvider, Comments } from "react-facebook";
import Link from "next/link";
import { GetStaticProps } from 'next'
import SharedPost from "../../components/SharePost";

interface BlogProps {
  source: any;
  frontMatter: {
    slug: string; 
    title: string;
    summary: string;  
    publishedAt: string;
    tags: []; 
    readingTime: { text: string}; 
    cover: string
  };
}
const BlogItem: React.FC<BlogProps> = ({ source, frontMatter }) => {
  const { slug, title, summary, publishedAt, tags, readingTime, cover  } = frontMatter;

  return (
    <>
      <Layout>
        <>
        <SEO
          title={`Blog RiversCode | ${title}`}
          image={cover}
          description={summary}
        />
        <div className="flex flex-col max-w-7xl mx-auto mt-12 md:mt-16">
          <div className="flex flex-col md:grid md:grid-cols-12 md:gap-12 mt-16">
            <div className="md:col-span-12 px-4 md:px-0">
              <BlogHeader
                title={title}
                publishedAt={publishedAt}
                tags={tags}
                readingTime={readingTime}
              />
              <div className="mt-6 md:mt-8 markdown-body">
                <MDXRemote {...source} components={MDXBlogComponets} />
              </div>
            </div>
          </div>
        </div>
        <div className="text-white px-6 mt-16">
          <SharedPost title={title} slug={slug} />
        </div>
        <div className="px-6 md:px-0 mt-16 bg-white py-16">
          <div className=" rounded-2xl  max-w-7xl mx-auto">
            <p className="text-3xl md:text-5xl text-center font-black mb-8">
              Déjame tus comentarios
            </p>
            <FacebookProvider appId="1090833335084068">
              <Comments
                href={`https://rivescode.me/blog/${slug}`}
                width="100%"
              />
            </FacebookProvider>
          </div>
        </div>
        
        </>
      </Layout>
    </>
  );
};

export default BlogItem;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { source, frontMatter } = await getFilesBySlug(params?.slug, "posts");
  return {
    props: {
      source,
      frontMatter,
    },
  };
}

export const getStaticPaths = async () => {
  const posts = await getFiles("posts");
  const paths = posts.map((post) => {
    return {
      params: {
        slug: post.replace(/\.mdx/, ""),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

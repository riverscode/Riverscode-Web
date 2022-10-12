import React from "react";
import Head from "next/head";

type SeoProps = {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  image: string;
  extraMeta?: [{ name: string; content: string }];

}

const Seo: React.FC<SeoProps> = ({title = "RiversCode", description, keywords="Desarrollo Web, React, Javascript", canonical = "https://riverscode.me", image, extraMeta}) => {

  const metaData = [
    {
      name: `description`,
      content: description,
    },
  
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: image,
    },
    {
      name: `twitter:creator`,
      content: "@Riverscode",
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
  ].concat(extraMeta || []);

  return (
    <Head>
      <title>{title}</title>
      <link rel="canonical" href={canonical} />
      <meta property="og:site_name" content="Lambda Ingeniería e Innovación" />
      <meta property="og:locale" content="es_PE" />
      <meta property="og:image" content={image} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="@RiversCode" />
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
    </Head>
  )
}

export default Seo;




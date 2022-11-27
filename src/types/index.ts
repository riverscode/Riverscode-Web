export type BlogType = {
  title: string;
  summary?: string;
  publishedAt: string;
  tags: string[];
  slug: string;
  readingTime: { text: string, minutes: number };
  image: string;
  status: string;
}

export type ProjectType = {
  name: string;
  summary: string;
  image: string;
  github?: string;
  demo?: string;
  tech: string[];
  visibility: string;
}



export interface BlogPost {
  id: number;
  title: string;
  cover_image: string;
  date: string;
  excerpt: string;
  blogUrl: string;
}

export interface BlogProps {
  posts: BlogPost[];
  seeMore?: boolean;
  isTitle?: boolean;
}

export const posts: BlogPost[] = [
  {
    id: 1,
    title: "Markup Language and HTML",
    cover_image: "https://via.placeholder.com/600x400",
    date: "Nov 22, 2023",
    excerpt:
      "This blog is about: What is Language? Language Type, What is Markup Language? What is does?",
    blogUrl: "https://eaysin-arafat.hashnode.dev/markup-language-and-html",
  },
];

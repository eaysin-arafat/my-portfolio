export interface BlogPost {
  id: number;
  frontmatter: {
    title: string;
    cover_image: string;
    date: string;
    excerpt: string;
  };
  slug?: string;
}

export interface BlogProps {
  posts: BlogPost[];
  seeMore?: boolean;
}

export const posts: BlogPost[] = [
  {
    id: 1,
    frontmatter: {
      title: "Post Title 1",
      cover_image: "https://via.placeholder.com/600x400",
      date: "2024-03-28",
      excerpt: "This is the excerpt for post 1.",
    },
    slug: "post-title-1",
  },
  {
    id: 1,
    frontmatter: {
      title: "Post Title 1",
      cover_image: "https://via.placeholder.com/600x400",
      date: "2024-03-28",
      excerpt: "This is the excerpt for post 1.",
    },
    slug: "post-title-1",
  },
  {
    id: 1,
    frontmatter: {
      title: "Post Title 1",
      cover_image: "https://via.placeholder.com/600x400",
      date: "2024-03-28",
      excerpt: "This is the excerpt for post 1.",
    },
    slug: "post-title-1",
  },
];

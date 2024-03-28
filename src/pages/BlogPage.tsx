import Blog from "../components/Blog";
import PageLayout from "../layout/PageLayout";
// import {HiOutlineExternalLink} from 'react-icons/hi'

const BlogPage = () => {
  return (
    <PageLayout className="h-screen">
      <Blog posts={posts} />
    </PageLayout>
  );
};

export default BlogPage;

const posts = [
  {
    frontmatter: {
      title: "Example Post 1",
      cover_image: "https://example.com/image1.jpg",
      date: "2024-03-27",
      excerpt: "This is an example excerpt for post 1.",
    },
    slug: "example-post-1",
  },
  {
    frontmatter: {
      title: "Example Post 2",
      cover_image: "https://example.com/image2.jpg",
      date: "2024-03-28",
      excerpt: "This is an example excerpt for post 2.",
    },
    slug: "example-post-2",
  },
];

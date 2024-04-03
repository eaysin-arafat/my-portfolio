import Blog from "../components/Blog";
import { BlogPost } from "../data/blog";
import useScrollToTop from "../hooks/useScrollToTop";
import PageLayout from "../layout/PageLayout";
// import {HiOutlineExternalLink} from 'react-icons/hi'

const BlogPage = ({ posts }: { posts: BlogPost[] }) => {
  useScrollToTop();

  return (
    <PageLayout className="min-h-screen">
      <Blog posts={posts} />
    </PageLayout>
  );
};

export default BlogPage;

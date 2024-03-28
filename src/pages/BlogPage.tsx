import Blog from "../components/Blog";
import PageLayout from "../layout/PageLayout";
// import {HiOutlineExternalLink} from 'react-icons/hi'

const BlogPage = ({ posts }) => {
  return (
    <PageLayout className="h-screen">
      <Blog posts={posts} />
    </PageLayout>
  );
};

export default BlogPage;

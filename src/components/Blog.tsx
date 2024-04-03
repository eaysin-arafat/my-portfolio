import { Link } from "react-router-dom";
import Post from "./Post";
import RootLayout from "../layout/RootLayout";
import { BlogProps, posts } from "../data/blog";

export default function Blog({ seeMore, isTitle }: BlogProps) {
  return (
    <RootLayout className="md:w-screen">
      {isTitle && <h1 className="pageTitle">Blog</h1>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
      {/* See More Button */}
      {seeMore && (
        <div className="text-center mt-8">
          <Link to="/blog" className="btn btn-primary">
            See More
          </Link>
        </div>
      )}
    </RootLayout>
  );
}

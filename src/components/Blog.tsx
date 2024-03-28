import Post from "./Post";
import RootLayout from "../layout/RootLayout";

export default function Blog({ posts }) {
  return (
    <RootLayout title="Blog">
      <h1 className="pageTitle">Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </RootLayout>
  );
}

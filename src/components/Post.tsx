import { Link } from "react-router-dom";

export default function Post({ post }) {
  return (
    <div className="w-full block overflow-hidden rounded-md bg-bgGrayColor px-7 py-7 shadow-xl">
      <h3 className="text-xl font-bold text-primaryColor">
        {post.frontmatter.title}
      </h3>
      <img className="pb-4" src={post.frontmatter.cover_image} alt="" />
      <div className="pb-4 text-grayColor text-sm">
        Posted on {post.frontmatter.date}
      </div>
      <p className="pb-4 text-grayColor text-whiteColor">
        {post.frontmatter.excerpt}
      </p>
      <Link to={`/blog/${post.slug}`} className="btn !px-4 !py-2">
        Read More
      </Link>
    </div>
  );
}

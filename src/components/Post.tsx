import { Link } from "react-router-dom";
import { BlogPost } from "../data/blog";

const Post = ({ post }: { post: BlogPost }) => {
  return (
    <div className="w-full block overflow-hidden rounded-md bg-bgGrayColor px-5 pt-2.5 pb-6 shadow-xl">
      <h3 className="text-xl font-bold text-primaryColor mb-2.5">
        {post?.title}
      </h3>
      <img className="pb-2" src={post?.cover_image} alt="" />
      <div className="pb-2 text-grayColor text-sm">Posted on {post?.date}</div>
      <p className="pb-4 text-whiteColor">{post?.excerpt}</p>
      <Link to={post?.blogUrl} className="btn !px-4 !py-2" target="_black">
        Read More
      </Link>
    </div>
  );
};

export default Post;

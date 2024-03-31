import { Link } from "react-router-dom";

const Blog = ({ post }) => {
  return (
    <Link to={`/${post.id}`}>
      <div className="p-6 rounded-lg bg-white my-4">
        <img
          src={post.image}
          className="max-w-[100%] mx-auto rounded-xl"
          alt="match"
        />
        <p className="my-2 text-2xl font-bold">{post.title}</p>
        <span className="text-xl">{post.time}</span>
      </div>
    </Link>
  );
};

export default Blog;

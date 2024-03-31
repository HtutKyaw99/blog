import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { doc, getDoc, query, where } from "firebase/firestore";
import { db } from "../firebase/config";
import { useEffect, useState } from "react";

const SingleBlog = () => {
  const [post, setPost] = useState();
  const { id } = useParams();
  const fetchSinglePost = async () => {
    const docRef = doc(db, "blogs", id);
    const docsnap = await getDoc(docRef);
    setPost(docsnap.data());
  };

  useEffect(() => {
    fetchSinglePost();
  }, []);

  return (
    <div className="mt-4 px-6">
      <Link to="/">
        <FaArrowLeft fontSize={28} className="cursor-pointer" />
      </Link>
      {post && (
        <>
          <img src={post.image} className="rounded-lg mt-4" alt="match image" />
          <h3 className="text-2xl mt-4 text-center">{post.title}</h3>
          <p className="mt-4 text-lg">{post.desc}</p>
        </>
      )}
    </div>
  );
};

export default SingleBlog;

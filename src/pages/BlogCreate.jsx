import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useReducer, useRef, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { db, storage } from "../firebase/config";
import { v4 } from "uuid";
import { addDoc, collection } from "firebase/firestore";

const BlogCreate = () => {
  const [image, setImage] = useState(null);

  const fileRef = useRef();

  const navigate = useNavigate();

  const [postInfo, setPostInfo] = useState({
    title: "",
    time: "",
    desc: "",
    image: "",
  });

  const handleInput = (e) => {
    setPostInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleImageUpload = async () => {
    if (!image || !postInfo.title || !postInfo.desc || !postInfo.time) return;

    const storageRef = ref(storage, `images/${image.name + v4()} `);
    uploadBytes(storageRef, image).then(() => {
      getDownloadURL(storageRef).then((url) => {
        const blogCollectionRef = collection(db, "blogs");
        addDoc(blogCollectionRef, {
          ...postInfo,
          image: url,
        });
      });
    });

    fileRef.current.value = null;
    setPostInfo({
      title: "",
      time: "",
      desc: "",
      image: "",
    });

    navigate("/");
  };

  return (
    <div className="px-6 mt-4 w-full ">
      <Link to="/">
        <FaArrowLeft fontSize={28} className="cursor-pointer" />
      </Link>
      <form>
        <div className="flex flex-col mt-4">
          <label className="text-2xl mb-2">Title</label>
          <input
            onChange={(e) => handleInput(e)}
            name="title"
            value={postInfo.title}
            className="border-none rounded-lg outline-none px-4 py-2"
            type="text"
          />
        </div>
        <div className="flex flex-col mt-4">
          <label className="text-2xl mb-2">Time</label>
          <input
            onChange={(e) => handleInput(e)}
            name="time"
            value={postInfo.time}
            className="border-none rounded-lg outline-none px-4 py-2"
            type="text"
          />
        </div>
        <div className="flex flex-col mt-2">
          <label className="text-2xl mb-2">Description</label>
          <textarea
            onChange={(e) => handleInput(e)}
            name="desc"
            value={postInfo.desc}
            className="border-none rounded-lg outline-none px-4 py-2"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <input
          ref={fileRef}
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          accept=".png,.jpg"
          className="mt-4 file:mr-4 file:border-none file:p-3 file:rounded-lg file:cursor-pointer file:bg-white"
        />
      </form>
      <button
        onClick={handleImageUpload}
        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg mx-auto"
      >
        Add Post
      </button>
    </div>
  );
};

export default BlogCreate;

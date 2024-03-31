import React from "react";
import Blog from "../components/Blog";
import NavBar from "../components/NavBar";
// import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";
// import { doc, onSnapshot } from "firebase/firestore";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import Footer from "../components/Footer";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const fetchPost = async () => {
    const q = query(collection(db, "blogs"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const cities = [];
      querySnapshot.forEach((doc) => {
        cities.push({ ...doc.data(), id: doc.id });

        // console.log(typeof doc.id);
      });
      setBlogs(cities);
    });
    // let temp = [];
    // const querySnapshot = await getDocs(collection(db, "blogs"));
    // querySnapshot.forEach((doc) => {
    //   temp.push({
    //     ...doc.data(),
    //     id: doc.id,
    //   });
    //   setBlogs(temp);
    // });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  console.log(blogs);

  return (
    <>
      <NavBar />
      <main className="mt-[80px] px-6">
        {blogs?.map((blog) => (
          <Blog key={blog.title} post={blog} />
        ))}
      </main>
      <Footer />
    </>
  );
};

export default Home;

import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import SingleBlog from "../pages/SingleBlog";
import BlogCreate from "../pages/BlogCreate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:id",
    element: <SingleBlog />,
  },
  {
    path: "/create",
    element: <BlogCreate />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;

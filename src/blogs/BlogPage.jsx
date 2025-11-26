// src/components/blogs/BlogPage.jsx
import React, { useEffect, useState } from "react";
import BlogList from "./BlogList";
import BlogDetails from "./BlogDetails";
import API from "../api"; // your axios instance

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlogId, setSelectedBlogId] = useState(null);

  // Fetch blogs from backend
  const fetchBlogs = async () => {
    try {
      const res = await API.get("/blogs");
      setBlogs(res.data.blogs);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Find selected blog
  const selectedBlog = blogs.find((b) => b._id === selectedBlogId);

  return (
    <>
      {selectedBlogId ? (
        <BlogDetails
          blog={selectedBlog}
          onBack={() => setSelectedBlogId(null)}
        />
      ) : (
        <BlogList blogs={blogs} onBlogClick={setSelectedBlogId} />
      )}
    </>
  );
};

export default BlogPage;





// // src/components/blogs/BlogPage.jsx
// import React, { useState } from "react";
// import BlogList from "./BlogList";
// import BlogDetails from "./BlogDetails";
// import blogsData from "./blogsData";

// const BlogPage = () => {
//   const [selectedBlogId, setSelectedBlogId] = useState(null);

//   const selectedBlog = blogsData.find((b) => b.id === selectedBlogId);

//   return (
//     <>
//       {selectedBlogId ? (
//         <BlogDetails blog={selectedBlog} onBack={() => setSelectedBlogId(null)} />
//       ) : (
//         <BlogList blogs={blogsData} onBlogClick={setSelectedBlogId} />
//       )}
//     </>
//   );
// };

// export default BlogPage;

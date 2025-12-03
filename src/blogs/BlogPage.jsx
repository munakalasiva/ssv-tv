import React, { useEffect, useState } from "react";
import BlogList from "./BlogList";
import API from "../api";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      const res = await API.get("/blogs");
      const apiBlogs = res.data.blogs || [];
      // Use the slug provided by backend directly
      setBlogs(apiBlogs);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setBlogs([]); // fallback empty array if API fails
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return <BlogList blogs={blogs} />;
};

export default BlogPage;






// import React, { useEffect, useState } from "react";
// import BlogList from "./BlogList";
// import API from "../api";
// import blogsData from "./blogsData";

// const generateSlug = (title) => {
//   return title
//     .toLowerCase()
//     .replace(/[^a-z0-9]+/g, '-')
//     .replace(/(^-|-$)/g, '');
// };

// const BlogPage = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchBlogs = async () => {
//     try {
//       const res = await API.get("/blogs");
//       const apiBlogs = res.data.blogs || [];
//       const blogsWithSlugs = apiBlogs.map(blog => ({
//         ...blog,
//         slug: blog.slug || generateSlug(blog.title)
//       }));
//       setBlogs(blogsWithSlugs);
//     } catch (error) {
//       console.error("Error fetching blogs:", error);
//       const staticBlogsWithSlugs = blogsData.map(blog => ({
//         ...blog,
//         slug: generateSlug(blog.title)
//       }));
//       setBlogs(staticBlogsWithSlugs);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
//       </div>
//     );
//   }

//   return <BlogList blogs={blogs} />;
// };

// export default BlogPage;

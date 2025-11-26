// src/components/blogs/BlogList.jsx
import React from "react";
import BlogCard from "./BlogCard";
import blogImg from "../assets/blog.jpg"

const BlogList = ({ blogs, onBlogClick }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">

      {/* Header */}

    <section
        className="relative w-full h-[280px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${blogImg})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
          TV Repair Blog
          </h1>
          <p className="text-lg md:text-xl">
      Expert tips, guides, and solutions for all your TV repair needs
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} onClick={() => onBlogClick(blog.id)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;

// src/components/blogs/BlogDetails.jsx
import React from "react";
import { Calendar, Tag, Facebook, Twitter, Linkedin, Share2, ArrowLeft } from "lucide-react";

const BlogDetails = ({ blog, onBack }) => {
  if (!blog) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Back Button */}
      <div className="bg-white border-b sticky top-0 z-10 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
          >
            <ArrowLeft size={20} /> Back to Blogs
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-96 overflow-hidden">
        <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 -mt-32 relative z-10">
        <article className="bg-white rounded-2xl shadow-2xl p-8">

          {/* Meta */}
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
              <Tag size={16} />
              {blog.category}
            </span>

            <span className="text-gray-500 flex items-center gap-2">
              <Calendar size={16} />
              {new Date(blog.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>

          {/* Excerpt */}
          <p className="text-xl text-gray-600 mb-8 border-l-4 border-blue-600 pl-6 italic">
            {blog.excerpt}
          </p>

          {/* Share */}
          <div className="flex items-center gap-4 mb-8 pb-8 border-b">
            <span className="text-gray-700 font-semibold">Share:</span>
            <button className="p-2 rounded-full bg-blue-600 text-white"><Facebook size={20} /></button>
            <button className="p-2 rounded-full bg-sky-500 text-white"><Twitter size={20} /></button>
            <button className="p-2 rounded-full bg-blue-700 text-white"><Linkedin size={20} /></button>
            <button className="p-2 rounded-full bg-gray-600 text-white"><Share2 size={20} /></button>
          </div>

          {/* Main Content */}
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </article>
      </div>
    </div>
  );
};

export default BlogDetails;

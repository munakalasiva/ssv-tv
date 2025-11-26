// src/components/blogs/BlogCard.jsx
import React from "react";
import { Calendar } from "lucide-react";

const BlogCard = ({ blog, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl 
                 transition-all duration-300 cursor-pointer transform hover:-translate-y-2 group"
    >
      <div className="relative overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />

        <div className="absolute top-4 left-4">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 
                           text-white px-4 py-1 rounded-full text-sm font-semibold">
            {blog.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            <Calendar size={16} />
            <span>
              {new Date(blog.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {blog.title}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>

        <button className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2 group-hover:gap-3 transition-all">
          Read More <span className="group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>
    </div>
  );
};

export default BlogCard;

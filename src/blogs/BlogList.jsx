import React from "react";
import BlogCard from "./BlogCard";
import blogImg from "../assets/blog.jpg";
import SEO, { generateBreadcrumbSchema } from "../components/SEO";

const BlogList = ({ blogs, onBlogClick }) => {
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://ssvelectronics.com';
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteUrl },
    { name: "Blogs", url: `${siteUrl}/blogs` }
  ]);

  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "SSV Electronics TV Repair Blog",
    "description": "Expert tips, guides, and solutions for all your TV repair needs",
    "url": `${siteUrl}/blogs`,
    "publisher": {
      "@type": "Organization",
      "name": "SSV Electronics"
    },
    "blogPost": blogs.map(blog => ({
      "@type": "BlogPosting",
      "headline": blog.title,
      "description": blog.excerpt,
      "datePublished": blog.date,
      "image": blog.image
    }))
  };

  return (
    <>
      <SEO
        title="TV Repair Blog | Expert Tips & Guides | SSV Electronics"
        description="Read expert tips, troubleshooting guides, and solutions for all your TV repair needs. Learn about LED TV problems, smart TV fixes, and more from SSV Electronics."
        keywords="TV repair blog, LED TV troubleshooting, smart TV tips, TV repair guide, TV problems solutions, Visakhapatnam TV repair"
        canonicalUrl="/blogs"
        schema={[breadcrumbSchema, blogListSchema]}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
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

        <div className="max-w-7xl mx-auto px-4 py-16">
          {blogs.length === 0 ? (
            <p className="text-center text-gray-500">No blog posts found.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <BlogCard 
                  key={blog._id || blog.id} 
                  blog={blog} 
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogList;

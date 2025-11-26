import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Calendar, Tag, Facebook, Twitter, Linkedin, Share2, ArrowLeft } from "lucide-react";
import SEO, { generateBlogPostSchema, generateBreadcrumbSchema } from "../components/SEO";
import API from "../api";
import blogsData from "./blogsData";

const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

const BlogDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await API.get("/blogs");
        const blogs = res.data.blogs || [];
        const foundBlog = blogs.find(b => 
          generateSlug(b.title) === slug || b.slug === slug || b._id === slug
        );
        if (foundBlog) {
          setBlog({ ...foundBlog, slug: generateSlug(foundBlog.title) });
        } else {
          const staticBlog = blogsData.find(b => generateSlug(b.title) === slug);
          if (staticBlog) {
            setBlog({ ...staticBlog, slug: generateSlug(staticBlog.title) });
          }
        }
      } catch (error) {
        const staticBlog = blogsData.find(b => generateSlug(b.title) === slug);
        if (staticBlog) {
          setBlog({ ...staticBlog, slug: generateSlug(staticBlog.title) });
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
        <Link to="/blogs" className="text-blue-600 hover:underline">
          Back to Blogs
        </Link>
      </div>
    );
  }

  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://ssvelectronics.com';
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteUrl },
    { name: "Blogs", url: `${siteUrl}/blogs` },
    { name: blog.title, url: `${siteUrl}/blog/${blog.slug}` }
  ]);

  const blogSchema = generateBlogPostSchema(blog, siteUrl);

  const combinedSchema = [breadcrumbSchema, blogSchema];

  const handleShare = (platform) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(blog.title);
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`
    };
    
    window.open(shareUrls[platform], '_blank', 'width=600,height=400');
  };

  return (
    <>
      <SEO
        title={`${blog.title} | SSV Electronics Blog`}
        description={blog.excerpt}
        keywords={`${blog.category}, TV repair, ${blog.title.split(' ').slice(0, 5).join(', ')}, Visakhapatnam`}
        canonicalUrl={`/blog/${blog.slug}`}
        ogImage={blog.image}
        ogType="article"
        schema={combinedSchema}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="bg-white border-b sticky top-0 z-10 shadow-sm">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <Link
              to="/blogs"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
            >
              <ArrowLeft size={20} /> Back to Blogs
            </Link>
          </div>
        </div>

        <div className="relative h-96 overflow-hidden">
          <img 
            src={blog.image} 
            alt={blog.title} 
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 -mt-32 relative z-10">
          <article className="bg-white rounded-2xl shadow-2xl p-8">
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

            <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>

            <p className="text-xl text-gray-600 mb-8 border-l-4 border-blue-600 pl-6 italic">
              {blog.excerpt}
            </p>

            <div className="flex items-center gap-4 mb-8 pb-8 border-b">
              <span className="text-gray-700 font-semibold">Share:</span>
              <button 
                onClick={() => handleShare('facebook')}
                className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                aria-label="Share on Facebook"
              >
                <Facebook size={20} />
              </button>
              <button 
                onClick={() => handleShare('twitter')}
                className="p-2 rounded-full bg-sky-500 text-white hover:bg-sky-600 transition-colors"
                aria-label="Share on Twitter"
              >
                <Twitter size={20} />
              </button>
              <button 
                onClick={() => handleShare('linkedin')}
                className="p-2 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-colors"
                aria-label="Share on LinkedIn"
              >
                <Linkedin size={20} />
              </button>
              <button 
                onClick={() => navigator.clipboard.writeText(window.location.href)}
                className="p-2 rounded-full bg-gray-600 text-white hover:bg-gray-700 transition-colors"
                aria-label="Copy link"
              >
                <Share2 size={20} />
              </button>
            </div>

            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </article>
        </div>
      </div>
    </>
  );
};

export default BlogDetailPage;

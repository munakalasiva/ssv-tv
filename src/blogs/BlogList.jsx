import React from "react";
import BlogCard from "./BlogCard";
import blogImg from "../assets/blog.jpg";
import SEO, { generateBreadcrumbSchema } from "../components/SEO";

const BlogList = ({ blogs, onBlogClick }) => {
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://ssvelectronicsvizag.com';
  
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
         keywords="
TV repair tips, Smart TV repair tips, LED TV troubleshooting guide, LCD TV troubleshooting, common TV problems and fixes, TV screen issues explained, TV display troubleshooting, TV backlight failure guide, TV motherboard issues guide, sound problem in TV fix, TV won’t turn on solutions, how to fix TV no picture, TV technical articles, TV repair blog Vizag, Smart TV guide Visakhapatnam, LED TV maintenance tips,
TV repair in Aganampudi, LED TV repair in PM Palem, Smart TV repair in Gambheeram, TV repair in Sontyam, TV repair in Vepagunta, TV repair in Narava, TV repair in Pedagantyada, LED TV repair in Chintagatla, TV repair in Pedda Rushikonda, TV repair in Bavikonda, TV repair in Endada, TV repair in Isukathota, TV repair in Pandurangapuram, TV repair in Waltair Uplands, TV repair in Kommadi, TV repair in Pothinamallayya Palem, TV repair in Boyapalem, TV repair in Yellapuvanipalem,
TV repair in Madhurawada, TV repair in Yendada, LED TV repair in Rushikonda, TV repair in Bheemili, LED TV repair in Kapuluppada, TV repair in Anandapuram, TV repair in Hanumanthavaka, TV repair in Madhavadhara, TV repair in Venkojipalem, TV repair in Siripuram, TV repair in Beach Road, TV repair in Lawson’s Bay Colony, TV repair in Kirlampudi Layout,
TV repair in Dabagardens, TV repair in Port Area, Smart TV repair in Satyam Junction, TV repair in Santhipuram, TV repair in Balayya Sastry Layout, TV repair in Chinna Waltair, LED TV repair in Railway New Colony, TV repair in HB Colony, TV repair in Allipuram, TV repair in One Town, TV repair in Two Town, TV repair in Three Town,
TV repair in Kurmannapalem, TV repair in Gopalapatnam, LED TV repair in Kancharapalem, TV repair in Gajuwaka, TV repair in Sheela Nagar, TV repair in Auto Nagar, TV repair in Gajuwaka Steel Plant, TV repair in Chinnamushidiwada, TV repair in Malkapuram, TV repair in Pendurthi,
TV repair in Akkayyapalem, TV repair in Maddilapalem, LED TV repair in MVP Colony, TV repair in Seethammadhara, TV repair in Dwaraka Nagar, TV repair in Asilmetta, TV repair in Jagadamba Junction, TV repair in NAD Junction, TV repair in NSTL, TV repair in BHPV,
TV repair in China Gantyada, TV repair in Gnanapuram, TV repair in Kurusura, TV repair in Kondayyapalem, TV repair in Relli Veedhi, Smart TV repair near Kothavalasa, TV repair in Tallavalasa, TV repair in Padmanabham, LED TV repair in Thimmapuram, TV repair in Devada,
TV service knowledge Vizag, TV repair tutorials Vizag, Smart TV problem-solving guides, LED TV educational blogs, TV repair case studies Vizag, best TV repair blog Vizag, TV service awareness articles, professional TV repair tips, expert TV service insights, TV knowledge hub Visakhapatnam
"
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

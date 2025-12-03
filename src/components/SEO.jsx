import { Helmet } from 'react-helmet-async';

const SEO = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  schema,
  noIndex = false,
}) => {
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://ssvelectronicsvizag.com';
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : (typeof window !== 'undefined' ? window.location.href : siteUrl);
  const defaultImage = `${siteUrl}/og-image.png`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:image" content={ogImage || defaultImage} />
      <meta property="og:site_name" content="SSV Electronics - TV Repair Services" />
      <meta property="og:locale" content="en_IN" />
      
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage || defaultImage} />
      
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "SSV Electronics - TV Repair Services",
  "description": "Professional TV repair services in Visakhapatnam. Expert technicians for all brands - Samsung, LG, Sony, Mi, and more.",
  "url": "https://ssvelectronicsvizag.com",
  "telephone": "+91-9291488856",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "49-1-18/3, Jagannadhapuram Jn., Main Road, Akkayyapalem",
    "addressLocality": "Visakhapatnam",
    "addressRegion": "Andhra Pradesh",
    "postalCode": "530016",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "17.7231",
    "longitude": "83.3013"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "20:00"
    }
  ],
  "priceRange": "$$",
  "image": "https://ssvelectronicsvizag.com/ssv-logo.png",
  "sameAs": [
    "https://www.facebook.com/profile.php?id=61584061136849",
    "https://www.instagram.com/ssvelectronicsvizag"
  ]
});

export const generateServiceSchema = (services) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "TV Repair",
  "provider": {
    "@type": "LocalBusiness",
    "name": "SSV Electronics"
  },
  "areaServed": {
    "@type": "City",
    "name": "Visakhapatnam"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "TV Repair Services",
    "itemListElement": services?.map((service, index) => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": service.title || `TV Repair Service ${index + 1}`
      }
    })) || []
  }
});

export const generateBlogPostSchema = (blog, siteUrl) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": blog.title,
  "description": blog.excerpt,
  "image": blog.image,
  "datePublished": blog.date,
  "dateModified": blog.date,
  "author": {
    "@type": "Organization",
    "name": "SSV Electronics"
  },
  "publisher": {
    "@type": "Organization",
    "name": "SSV Electronics",
    "logo": {
      "@type": "ImageObject",
      "url": `${siteUrl}/logo.png`
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `${siteUrl}/blog/${blog.slug || blog.id}`
  }
});

export const generateBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const generateFAQSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export default SEO;

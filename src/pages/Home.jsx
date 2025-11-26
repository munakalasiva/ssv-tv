import React from 'react';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiClock, FiTool,FiUsers, FiSettings, FiDollarSign,FiShield,FiPhone,FiMapPin, FiCheckCircle } from 'react-icons/fi';
import { Clock, Users, Settings, DollarSign, Sparkles,Phone, MapPin} from 'lucide-react';
import TestimonialCard from '../components/TestimonialCard';
import ssvvideo from "../assets/ssv_video.mp4";
import GalleryCard from "../components/GalleryCard"

// import ssvvideo from "../assets/ssv_video.mp4";
import ssvImg from "../assets/ssv.jpg"; 

import samsung from "../assets/samsung.png";
import lg from "../assets/lg_logo.png";
import sony from "../assets/Sony_logo.svg.png";
import mi from "../assets/mi_logo.png";
import panasonic from "../assets/panasonic_logo.png";
import bpl from "../assets/BPL_Logo.svg.png";
import oneplus from "../assets/oneplus-logo-png-transparent.png";
import vu from "../assets/Vu_Televisions.png";
import tcl from "../assets/tcl_logo.png"


//* gallery photos
// import gry1 from "../assets/IMG20251114114227.jpg"
// import gry2 from "../assets/IMG20251114114656.jpg"
// import gry3 from "../assets/IMG20251114114845.jpg"
// import gry5 from "../assets/IMG20251114120224.jpg"
// import gry4 from "../assets/IMG20251114114946.jpg"
// import gry6 from "../assets/IMG20251114115008.jpg"

import footer_ban from "../assets/footer_banner.png";

import warranty from "../assets/why_choose/warranty.png";
import doorstep from "../assets/why_choose/doorstep.png";
import fast_service from "../assets/why_choose/fast_service.png";
import parts from "../assets/why_choose/parts.png";
import price from "../assets/why_choose/price.png";
import technicians from "../assets/why_choose/technicians.png";

import Contact from "../components/Contact";
import API from "../api";

function Home() {


  const [galleryItems, setGalleryItems] = useState([]);

  // Fetch items from backend
  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await API.get("/gallery");
        setGalleryItems(res.data.data); // backend returns { success, data: [...] }
      } catch (error) {
        console.error("Gallery Fetch Error:", error);
      }
    };

    fetchGallery();
  }, []);

    const navigate = useNavigate();

    const handleBooking = () => {
         navigate("/booking")
  };


  const features = [
  {
    image: warranty,
    title: 'Warranty',
    description: 'We provide comprehensive warranty coverage on all repairs and replacement parts',
    color: "from-blue-500 via-blue-600 to-cyan-500",
    number: "01"
  },
  {
    image: doorstep,
    title: 'Doorstep Service',
    description: 'Convenient at-home repair service to save your time and effort',
    color: "from-purple-500 via-purple-600 to-pink-500",
    number: "02"
  },
  {
    image: technicians,
    title: 'Trained Technicians',
    description: 'Certified experts with years of experience in TV repairs',
    color: "from-orange-500 via-orange-600 to-red-500",
    number: "03"
  },
  {
    image: parts,
    title: 'Genuine Parts',
    description: 'Only authentic replacement parts used for lasting quality',
    color: "from-green-500 via-green-600 to-emerald-500",
    number: "04"
  },
  {
    image: price,
    title: 'Affordable Price',
    description: 'Competitive pricing with transparent quotes and no hidden charges',
    color: "from-pink-500 via-pink-600 to-rose-500",
    number: "05"
  },
  {
    image: fast_service,
    title: 'Fast Service',
    description: 'Same-day repair service available for most issues',
    color: "from-indigo-500 via-indigo-600 to-purple-500",
    number: "06"
  }
];

const brands = [
    { name: 'Samsung', logo:samsung },
    { name: 'LG', logo: lg },
    { name: 'Sony', logo: sony },
    { name: 'Mi', logo: mi },
    { name: 'Panasonic', logo: panasonic },
    { name: 'OnePlus', logo: oneplus },
    { name: 'Vu', logo: vu },
    { name: 'TCL', logo: tcl },
    {name:'bpl',logo:bpl}

  ];

  const duplicatedBrands = [...brands, ...brands];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      rating: 5,
      review: 'Excellent service! They fixed my Samsung TV within hours. Very professional and affordable.',
      location: 'Visakhapatnam',
    },
    {
      name: 'Priya kumari',
      rating: 5,
      review: 'Best TV repair service in Vizag. Quick response and genuine parts used. Highly recommended!',
      location: 'MVP Colony',
    },
    {
      name: 'Anil Reddy',
      rating: 5,
      review: 'My LG TV had a display issue and they fixed it perfectly. Great customer support!',
      location: 'Madhurawada',
    },
  ];

    const stats= [
    { value: '10+', label: 'Years Experience' },
    { value: '5000+', label: 'Happy Customers' },
    { value: '100%', label: 'Satisfaction Rate' },
    { value: '50+', label: 'Areas Covered' },
  ];

  //   const galleryItems = [
  //   {
  //     image: gry1,
  //     title: 'LED TV Screen Replacement',
  //     description: 'Professional screen replacement service for all LED TV brands'
  //   },
  //   {
  //     image: gry2,
  //     title: 'Smart TV Software Update',
  //     description: 'Firmware updates and smart TV troubleshooting'
  //   },
  //   {
  //     image:gry3,
  //     title: 'Power Supply Repair',
  //     description: 'Expert repair of TV power boards and components'
  //   },
  //   {
  //     image: gry4,
  //     title: 'HDMI Port Replacement',
  //     description: 'Fix damaged HDMI ports and connectivity issues'
  //   },
  //   {
  //     image: gry5,
  //     title: 'TV Mounting Service',
  //     description: 'Professional wall mounting and setup services'
  //   },
  //   {
  //     image: gry6,
  //     title: 'Home Theater Setup',
  //     description: 'Complete home entertainment system installation'
  //   }
  // ];

  return (
    <div className="min-h-screen">
      



<section className="w-full py-8 px-4 md:px-8 bg-white">
  <div className="container mx-auto">
    <div className="relative w-full min-h-[85vh] flex items-center overflow-hidden rounded-3xl">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover rounded-3xl"
      >
        <source src={ssvvideo} type="video/mp4" />
      </video>

      {/* Dark Overlay - Shiftwave Style */}
      <div className="absolute inset-0 bg-black/50 rounded-3xl"></div>

      {/* Content Container - Max Width 1250px */}
      <div className="relative z-10 w-full px-6 md:px-12 py-12 md:py-16">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      {/* Left Side - Text Content (Center-Left on Desktop) */}
      <motion.div 
        className="text-white text-center lg:text-left"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="font-bold mb-6 leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
          Expert TV Repairs with Reliable Warranty Support
        </h1>
        <p className="mb-8 md:mb-10 text-gray-100 leading-relaxed" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>
          Fast, affordable, and warranty-backed repair services for all TV brands — handled by certified professionals.
        </p>

        {/* Buttons - Stack on Mobile */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button
            onClick={handleBooking}
            className="bg-[#D71920] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-[#B01519] hover:scale-105 transition-all duration-300"
          >
            Book a Repair
          </button>
          <button
            onClick={() => navigate("/services")}
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#D71920] transition-all duration-300"
          >
            Our Services →
          </button>
        </div>
      </motion.div>

      {/* Right Side - Statistics Cards (Desktop Only) */}
      <div className="hidden lg:flex flex-col gap-4 items-end">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="w-full max-w-sm bg-[#D71920]/75 backdrop-blur-sm rounded-xl p-6 shadow-xl text-center hover:shadow-2xl hover:bg-[#D71920]/85 transition-all duration-300 hover:scale-105 border border-white/20"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
          >
            <h3 className="text-5xl font-bold text-white mb-2">
              {stat.value}
            </h3>
            <p className="text-white text-lg font-medium">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
    </div>
  </div>
  </div>

  <style>{`
    .container {
      max-width: 1250px;
      margin: 0 auto;
    }
    
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `}</style>
</section>

{/* Mobile Statistics Section - Below Hero */}
<section className="lg:hidden bg-white py-8 px-4">
  <div className="container mx-auto">
    <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="bg-[#D71920]/90 backdrop-blur-sm rounded-xl p-6 shadow-lg text-center border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <h3 className="text-4xl font-bold text-white mb-2">
            {stat.value}
          </h3>
          <p className="text-white text-sm font-medium">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>




    
       <>
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        @keyframes dash {
          to {
            stroke-dashoffset: -20;
          }
        }
        .animate-dash {
          animation: dash 1s linear infinite;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
        }
      `}</style>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#fbf1e0]">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="animate-scale-in">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 text-sm font-bold text-blue-700 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full border-2 border-blue-300 shadow-lg">
                <Sparkles className="w-4 h-4" />
                Premium TV Repair Service
              </span>
            </div>
            
      <h2 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
  Why Choose
  <span className="block mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
    Our Service?
  </span>
</h2>

            
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              We provide the best TV repair services with guaranteed satisfaction and excellence
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              const isLastInRow = (index + 1) % 3 === 0;
              
              return (
                <div
                  key={index}
                  className="relative flex flex-col items-center"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.15}s forwards`,
                    opacity: 0
                  }}
                >
                  {/* Connecting Arrow (hidden on last item of each row) */}
                  {!isLastInRow && (
                    <div className="hidden lg:block absolute top-15 -right-8 w-16 z-0">
                      <svg className="w-32 h-16 text-cyan-400" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path 
                          d="M5 25 Q 50 10, 95 25" 
                          stroke="currentColor" 
                          strokeWidth="3" 
                          strokeDasharray="5,5"
                          fill="none"
                          className="animate-dash"
                        />

                        
                        <path 
                          d="M85 20 L95 25 L85 30" 
                          stroke="currentColor" 
                          strokeWidth="3" 
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}

                  {/* Circular Image Container with Number Badge */}
                  <div 
                    className="relative mb-6 transition-transform duration-300 hover:scale-110 cursor-pointer"
                  >
                    {/* Number Badge */}
                    <div className="absolute -top-2 -left-2 z-20">
                      <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                        <span className="text-white font-bold text-lg">{feature.number}</span>
                      </div>
                    </div>

                    {/* Circular Image/Icon Container */}
                    <div className="relative">
                      {/* Dotted Border Circle */}
                      <div className="absolute inset-0 rounded-full border-4 border-dashed border-blue-300 animate-spin-slow"></div>
                      
                      {/* Main Circle */}
                   <div className={`relative w-40 h-40 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-2xl overflow-hidden border-8 border-white`}>
  <div className="absolute inset-0 bg-white opacity-20"></div>

  {/* Real Image */}
  <img 
    src={feature.image}
    alt={feature.title}
    className="relative z-10 w-24 h-24 object-cover rounded-full"
  />

  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} blur-2xl opacity-50`}></div>
</div>

                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center max-w-xs">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
      
       <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Brands We Service
          </h2>
          <p className="text-xl text-gray-600">
            Expert repair services for all major TV brands
          </p>
        </div>

        {/* Scrolling Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling Track */}
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll">
              {duplicatedBrands.map((brand, index) => (
<div 
  key={index}
  className="flex-shrink-0 mx-6 w-48 h-32 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center group hover:scale-105 border border-[#001F3F]/20 hover:border-[#001F3F]/40"
>



                  {/* Brand Logo */}
                  <div className="w-24 h-16 flex items-center justify-center mb-2">
                    <img 
                      src={brand.logo} 
                      alt={`${brand.name} logo`}
                      className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <span 
                      className="text-2xl font-bold text-gray-800 hidden"
                    >
                      {brand.name}
                    </span>
                  </div>
                  
                  {/* Brand Name */}
                  {/* <p className="text-sm font-semibold text-gray-600 group-hover:text-blue-600 transition-colors">
                    {brand.name}
                  </p> */}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500 font-medium">
            ✓ Authorized Service Center • ✓ Genuine Parts • ✓ Expert Technicians
          </p>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-192px * 12));
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#fff1db]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">What Our Customers Say</h2>
            <p className="section-subtitle">
              Real reviews from satisfied customers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

          {/* <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
         
            Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional repair work captured in action
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GalleryCard {...item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section> */}

     <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional repair work captured in action
          </p>
        </motion.div>

        {/* Show No Items */}
        {galleryItems.length === 0 && (
          <p className="text-center text-gray-500">No gallery items found.</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GalleryCard
                image={item.image}
                title={item.title}
                description={item.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>

 

      <section
  className="relative w-full h-[280px] bg-cover bg-center flex items-center justify-center"
  style={{ backgroundImage:  `url(${footer_ban})` }} // change to your image
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Content */}
  <div className="relative z-10 text-center text-white px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Ready to Fix Your TV?
      </h2>
      <p className="text-xl mb-8 text-blue-100">
        Get your TV repaired by certified technicians today
      </p>

      <button
        onClick={() => navigate('/booking')}
        className="bg-white text-[#093f74] px-8 py-4 rounded-full font-bold text-lg 
          hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
      >
        Book Your Repair
      </button>
    </motion.div>
  </div>
</section>

  <Contact/>

    </div>
  );
}

export default Home;

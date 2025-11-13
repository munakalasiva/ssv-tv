import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiClock, FiTool,FiUsers, FiSettings, FiDollarSign,FiShield,FiPhone,FiMapPin, FiCheckCircle } from 'react-icons/fi';
import { Clock, Users, Settings, DollarSign, Sparkles,Phone, MapPin} from 'lucide-react';
import TestimonialCard from '../components/TestimonialCard';
import ssvvideo from "../assets/ssv_video.mp4";

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

function Home() {
  const navigate = useNavigate();

    const handleBooking = () => {
         navigate("/booking")
  };

  const features = [
    {
      icon: Clock,
      title: 'Fast Service',
      description: 'Same-day repair service available for most issues',
      color: "from-blue-500 via-blue-600 to-cyan-500",
    },
    {
      icon: Users,
      title: 'Trained Technicians',
      description: 'Certified experts with years of experience',
      color: "from-purple-500 via-purple-600 to-pink-500",
    },
    {
      icon: Settings,
      title: 'Genuine Parts',
      description: 'Only authentic replacement parts used',
      color: "from-green-500 via-green-600 to-emerald-500",
    },
    {
      icon: DollarSign,
      title: 'Affordable Price',
      description: 'Competitive pricing with transparent quotes',
      color: "from-orange-500 via-orange-600 to-red-500",
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
      name: 'Priya Singh',
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

  return (
    <div className="min-h-screen">
      



<section className="relative w-full min-h-[90vh] flex items-center overflow-hidden">
  {/* 🎬 Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src={ssvvideo} type="video/mp4" />
  </video>

  {/* 🌓 Dark Overlay */}
  <div className="absolute inset-0 bg-black/30"></div>

  {/* 💬 Content */}
  <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      {/* Left Side Text */}
      <div className="text-white">
<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
  Expert TV Repairs with Reliable Warranty Support
</h1>
<p className="text-lg sm:text-xl md:text-2xl mb-10 text-blue-100">
  Fast, affordable, and warranty-backed repair services for all TV brands — handled by certified professionals.
</p>


        <button
          onClick={handleBooking}
          className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:bg-red-700 hover:scale-105 transition-all inline-flex items-center gap-2"
        >
          Book a Repair 
        </button>

                <button
          onClick={()=>navigate("/services")}
          className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:bg-red-700 hover:scale-105 transition-all inline-flex items-center gap-2 ml-5"
        >
          Our Services →
        </button>
      </div>

      {/* Right Side Cards */}
      <div className="flex flex-col gap-4 items-end text-center">
        {stats.map((feature, index) => (
<div
  key={index}
  className="w-full sm:w-72 md:w-80 rounded-lg p-6 shadow-xl transition-all cursor-pointer"
  style={{
    border: "1.5px solid var(--theme-red-dark)",
    background: "var(--theme-red-tnspt)",
    borderRadius: "8px",
    animation: `fadeInUp 0.5s ease-out ${0.3 + index * 0.1}s both`,
  }}
>
  <h3 className="text-4xl sm:text-5xl font-bold text-white mb-2">
    {feature.value}
  </h3>
  <p className="text-white text-base sm:text-lg font-normal">
    {feature.label}
  </p>
</div>



        ))}
      </div>
    </div>
  </div>

  {/* Fade to White Bottom Gradient */}
  {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div> */}

  {/* Fade Animation */}
  <style>{`
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






   
   <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">


        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              <span className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 text-sm font-bold text-blue-700 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full border-2 border-blue-300 shadow-lg">
                <Sparkles className="w-4 h-4" />
                Premium TV Repair Service
              </span>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Why Choose
              <span className="block mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Our Service?
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              We provide the best TV repair services with guaranteed satisfaction and excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 80
                  }}
                  whileHover={{ 
                    y: -12,
                    transition: { duration: 0.3, type: "spring", stiffness: 300 }
                  }}
                  className="group relative"
                >
                  {/* Main Card - Compact size */}
                  <div className="relative h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 border border-gray-100/50 overflow-hidden">
                    {/* Shimmer effect overlay */}
                    <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Gradient background on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center text-center">
                      {/* Icon with floating animation - Smaller size */}
                      <div className="relative mb-4">
                        <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 float-icon`}>
                          <IconComponent className="w-8 h-8 text-white" strokeWidth={2.5} />
                        </div>
                        {/* Glow effect behind icon */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-xl blur-xl opacity-0 group-hover:opacity-40 transition-all duration-500 pulse-glow`}></div>
                      </div>
                      
                      {/* Text content - More compact */}
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                        {feature.title}
                      </h3>
                      
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>

                    {/* Animated bottom accent bar */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left rounded-b-2xl`}></div>

                    {/* Corner decoration */}
                    <div className={`absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br ${feature.color} opacity-10 rounded-full transform group-hover:scale-150 transition-transform duration-700`}></div>
                  </div>
                </motion.div>
              );
            })}
          </div>


        </div>
      </section>



      
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
                  className="flex-shrink-0 mx-6 w-48 h-32 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center group hover:scale-105 border border-gray-100"
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

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
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

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
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
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Book Your Repair
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;

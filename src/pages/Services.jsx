
import React, { useEffect, useState } from "react";

import { motion } from 'framer-motion';
// import { Zap, Clock, Shield, MapPin } from 'lucide-react';
import { FiMonitor, FiSmartphone, FiZap, FiTool, FiVolume2, FiHelpCircle  } from 'react-icons/fi';
import ServiceCard from '../components/ServiceCard';
import service_banner from "../assets/services.png";

import { Shield, Home, Zap, Users,MapPin, Settings, DollarSign, Clock, Sparkles } from 'lucide-react';

import warranty from "../assets/why_choose/warranty.png";
import doorstep from "../assets/why_choose/doorstep.png";
import fast_service from "../assets/why_choose/fast_service.png";
import parts from "../assets/why_choose/parts.png";
import price from "../assets/why_choose/price.png";
import technicians from "../assets/why_choose/technicians.png";

import Contact from "../components/Contact";
import API from "../api"; 

function Services() {
  
  
  // 🔥 Fetching Services from Backend
  const [services, setServices] = useState([]);

  const fetchServices = async () => {
    try {
      const res = await API.get("/services");
      setServices(res.data?.data || []);  // safe fallback
    } catch (error) {
      console.error("Services Fetch Error:", error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);


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


  return (
    <div className="min-h-screen bg-gray-50">
   <section
  className="relative w-full h-[280px] bg-cover bg-center flex items-center justify-center"
  style={{ backgroundImage: `url(${service_banner})` }}
>
  <div className="absolute inset-0 bg-black/40"></div>

  <div className="relative z-10 text-center text-white px-4">
    <h1 className="text-4xl md:text-5xl font-bold mb-3">
    Our TV Repair Services
    </h1>
    <p className="text-lg md:text-xl">
  We provide fast, reliable and affordable TV repair solutions at your doorstep.
    </p>
  </div>
</section>


       <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">

          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          />

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.length === 0 ? (
              <p className="text-center col-span-3 text-gray-500">
                Loading services...
              </p>
            ) : (
              services.map((service, index) => (
                <motion.div
                  key={service._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    image={service.image}
                  />
                </motion.div>
              ))
            )}

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

   <Contact/> 
    

    </div>
  );
}

export default Services;



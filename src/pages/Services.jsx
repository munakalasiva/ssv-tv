import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Clock, Shield, MapPin } from 'lucide-react';
import { FiMonitor, FiSmartphone, FiZap, FiTool, FiVolume2, FiHelpCircle  } from 'react-icons/fi';
import ServiceCard from '../components/ServiceCard';

function Services() {
  const services = [
    {
      id: 1,
      title: 'LED / LCD TV Repair',
      description: 'Fixing all types of LED and LCD TV issues including power and display faults.',
      icon: FiMonitor,
      image: '',
    },
    {
      id: 2,
      title: 'Screen Replacement',
      description: 'Replace broken or damaged TV screens with genuine parts.',
      icon: FiSmartphone,
      image: '',
    },
    {
      id: 3,
      title: 'Power Issue Fix',
      description: 'Solving startup, no power, or auto-shutdown problems efficiently.',
      icon: FiZap,
      image: '',
    },
    {
      id: 4,
      title: 'Installation / Uninstallation',
      description: 'Professional wall-mounting, setup and removal services for all TV models.',
      icon: FiTool,
      image: '',
    },
    {
      id: 5,
      title: 'Sound / Display Problems',
      description: 'Repair distorted sound, color issues, or no-display conditions.',
      icon: FiVolume2,
      image: '',
    },
  {
    id: 6,
    title: 'Unknown Problems',
    description: 'Not sure what’s wrong with your TV? Our technicians perform complete diagnostics to identify and fix any hidden or complex issues.',
    icon: FiHelpCircle,
    image: '',
  },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-blue-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our TV Repair Services</h1>
            <p className="text-xl text-blue-100">
              We provide fast, reliable and affordable TV repair solutions at your doorstep.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </section>



          <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">


        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-blue-900 bg-blue-100 rounded-full">
              Premium Service
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Our Repair Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience excellence with every repair - we're committed to your satisfaction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Free Diagnosis",
                description: "We diagnose the issue at no cost before repair",
                color: "from-blue-500 to-blue-600",
                delay: 0.1
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Same Day Service",
                description: "Most repairs completed within 24 hours",
                color: "from-indigo-500 to-indigo-600",
                delay: 0.2
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Warranty Included",
                description: "All repairs come with service warranty",
                color: "from-purple-500 to-purple-600",
                delay: 0.3
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "Doorstep Service",
                description: "We come to your location for convenience",
                color: "from-pink-500 to-pink-600",
                delay: 0.4
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: feature.delay }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative"
              >
                <div className="relative h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                  
                  {/* Icon container */}
                  <div className={`relative mb-6 w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Decorative element */}
                  <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.color} w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl`}></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { number: "5000+", label: "Repairs Completed" },
              { number: "4.9", label: "Average Rating" },
              { number: "99%", label: "Customer Satisfaction" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <div key={index} className="p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-100">
                <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>  

    </div>
  );
}

export default Services;



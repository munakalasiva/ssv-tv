import { motion } from 'framer-motion';
import { FiAward, FiUsers, FiMapPin, FiClock } from 'react-icons/fi';
import storyImage from "../assets/ssv.jpg";

function About() {
  const stats = [
    { icon: FiClock, value: '10+', label: 'Years Experience' },
    { icon: FiUsers, value: '5000+', label: 'Happy Customers' },
    { icon: FiAward, value: '100%', label: 'Satisfaction Rate' },
    { icon: FiMapPin, value: '50+', label: 'Areas Covered' },
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl text-blue-100">
              Your trusted partner for TV repair services in Visakhapatnam
            </p>
          </motion.div>
        </div>
      </section>

       <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4 leading-relaxed" style={{ textAlign: 'justify' }}>
              Founded over a decade ago, TV Repair Services has been serving the people of Visakhapatnam and surrounding areas with dedication and expertise. What started as a small repair shop has grown into one of the most trusted names in TV repair services.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed" style={{ textAlign: 'justify' }}>
              Our team of certified technicians brings years of experience and technical knowledge to every repair job. We understand how important your TV is to your daily life, and we're committed to getting it back to you as quickly as possible.
            </p>
              <p className="text-gray-700 mb-4 leading-relaxed" style={{ textAlign: 'justify' }}>
              We believe that every repair is more than just fixing a device—it’s restoring a part of your daily life. Whether it’s a family movie night, a cricket match with friends, or your child’s favorite cartoon, we know how much those moments matter. That’s why we treat every job with urgency, precision, and care.
            </p>
            <p className="text-gray-700 leading-relaxed" style={{ textAlign: 'justify' }}>
              We pride ourselves on using only genuine parts, transparent pricing, and providing exceptional customer service. Our mission is simple: to deliver fast, reliable, and affordable TV repair solutions that exceed your expectations.
            </p>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <img
              src={storyImage}
              alt="Technician repairing TV"
              className="rounded-2xl shadow-lg w-full max-w-md lg:max-w-full h-auto object-cover"
              style={{ maxHeight: '480px' }}
            />
          </motion.div>

        </div>
      </div>
    </section>

    



<section className="py-20 px-6 sm:px-8 lg:px-12 bg-blue-950 text-white">
  <div className="max-w-7xl mx-auto text-center">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Numbers Speak</h2>
      <p className="text-gray-300 text-lg">
        Years of experience and thousands of satisfied customers
      </p>
    </motion.div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="p-6 rounded-xl bg-blue-900/50 border border-blue-700 hover:bg-blue-800/60 transition-all duration-300"
        >
          <stat.icon className="text-5xl text-blue-300 mx-auto mb-3" />
          <p className="text-4xl font-bold mb-1">{stat.value}</p>
          <p className="text-blue-200">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>



      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-blue-50 to-white">
  <div className="max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
        Service Areas
      </h2>
      <p className="text-gray-600 text-lg">
        We provide doorstep TV repair services across Visakhapatnam and surrounding areas
      </p>
    </motion.div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {[
        'MVP Colony',
        'Madhurawada',
        'Gajuwaka',
        'Dwaraka Nagar',
        'Siripuram',
        'NAD',
        'Beach Road',
        'Rushikonda',
        'Pendurthi',
        'Anakapalle',
        'Vizag City',
        'Surrounding Areas',
      ].map((area, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          className="border-l-4 border-blue-900 pl-4 py-3 text-left bg-gray-50 rounded-lg hover:bg-blue-50 hover:shadow hover:bg-blue-900 hover:text-white transition-all duration-300 cursor-pointer"
        >
          <p className="text-lg  font-semibold">{area}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


    </div>
  );
}

export default About;

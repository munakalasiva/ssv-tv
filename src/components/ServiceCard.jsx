import { motion } from 'framer-motion';

function ServiceCard({ title, description, image }) {
  const handleBooking = () => {
    console.log('Booking service:', title);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
      style={{ borderTop: '4px solid rgb(0, 31, 63)' }}
    >
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        {/* Dark Overlay on Hover */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed mb-6 h-20">
          {description}
        </p>

        {/* Action Button */}
        <motion.button
          onClick={handleBooking}
          className="w-full text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300"
          // style={{ backgroundColor: 'rgb(0, 31, 63)' }}
            style={{ backgroundColor: '#093f74' }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Book Now
        </motion.button>
      </div>

      {/* Hover Effect Line */}
      <div 
        className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500"
        style={{ backgroundColor: 'rgb(0, 31, 63)' }}
      ></div>
    </motion.div>
  );
}

export default ServiceCard;


// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';

// function ServiceCard({ icon: Icon, title, description, image }) {
//   const navigate = useNavigate();

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.5 }}
//       className="card relative overflow-hidden text-center hover:scale-105 transition-transform duration-300 group rounded-2xl p-4"
//     >

//       {/* ⭐ Hover Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl"></div>

//       {/* ⭐ Card Content (must be above overlay) */}
//       <div className="relative z-10">
//         {image ? (
//           <img
//             src={image}
//             alt={title}
//             className="w-full h-40 object-cover rounded-lg mb-4"
//           />
//         ) : (
//           <Icon className="text-5xl text-blue-900 mx-auto mb-4" />
//         )}
//         <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
//         <p className="text-gray-600 mb-4">{description}</p>
//         <button
//           onClick={() => navigate('/booking')}
//           className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-900 transition-all duration-300"
//         >
//           Book Now
//         </button>
//       </div>

//     </motion.div>
//   );
// }

// export default ServiceCard;

import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function ServiceCard({ icon: Icon, title, description, image }) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="card text-center hover:scale-105 transition-transform duration-300"
    >
      {image ? (
        <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg mb-4" />
      ) : (
        <Icon className="text-5xl text-blue-900 mx-auto mb-4" />
      )}
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <button
        onClick={() => navigate('/booking')}
        className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-900 transition-all duration-300"
      >
        Book Now
      </button>
    </motion.div>
  );
}

export default ServiceCard;

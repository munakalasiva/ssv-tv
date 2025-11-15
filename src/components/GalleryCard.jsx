import React from 'react';
import { motion } from 'framer-motion';

const GalleryCard = ({ image, title, description }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="aspect-w-16 aspect-h-12 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm text-gray-200">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard
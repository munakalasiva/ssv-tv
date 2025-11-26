import React from 'react';
import welcome from "../../assets/welcome-img.png";

const AdminWelcome = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">
        Welcome to Admin Panel
      </h2>

      <img 
        src={welcome} 
        alt="Welcome" 
        className="w-60 sm:w-72 md:w-80 animate-fadeIn"
      />
    </div>
  );
};

export default AdminWelcome;

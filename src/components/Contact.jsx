import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin, ThumbsUp, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-8" style={{ background: '#ffffff' }}>
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-0 rounded-2xl overflow-hidden shadow-2xl">
        {/* Left Contact Info Section */}
        <div className="lg:w-2/5 p-8 sm:p-12 text-white relative overflow-hidden" style={{ background: '#001F3F' }}>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -ml-32 -mb-32"></div>
          
          <div className="relative z-10">
            {/* Contact Sales */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-7 h-7 text-white" />
                <h3 className="text-2xl font-bold">Contact Sales</h3>
              </div>
              <div className="space-y-2 ml-10">
                <a href="tel:+919291488856" className="text-white hover:text-gray-200 transition-colors block text-lg">
                  +91 9291488856
                </a>
              </div>
            </div>

            <div className="border-t border-white border-opacity-30 my-8"></div>

            {/* Send Email */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-7 h-7 text-white" />
                <h3 className="text-2xl font-bold">Send Us an Email</h3>
              </div>
              <div className="ml-10 space-y-2">
                <a href="mailto:info@tvrepair.com" className="text-white hover:text-gray-200 transition-colors block text-lg">
                  info@tvrepair.com
                </a>
              </div>
            </div>

            <div className="border-t border-white border-opacity-30 my-8"></div>

            {/* Address */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-7 h-7 text-white" />
                <h3 className="text-2xl font-bold">Our Location</h3>
              </div>
              <div className="ml-10">
                <p className="text-white leading-relaxed text-lg">
                  49-1-18/3, Jagannadhapuram Jn., Main Road,<br />
                  Akkayyapalem, Visakhapatnam - 530016
                </p>
              </div>
            </div>

            <div className="border-t border-white border-opacity-30 my-8"></div>

            {/* Working Hours */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-7 h-7 text-white" />
                <h3 className="text-2xl font-bold">Working Hours</h3>
              </div>
              <div className="space-y-2 ml-10">
                <p className="text-white text-lg">Monday - Saturday: 9:00 AM - 8:00 PM</p>
                <p className="text-white text-lg">Sunday: Closed</p>
              </div>
            </div>

            <div className="border-t border-white border-opacity-30 my-8"></div>

         
          </div>
        </div>

        {/* Right Form Section */}
        <div className="lg:w-3/5 bg-white p-8 sm:p-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-900">
              Tell Us About Your Product
            </h2>
            <p className="text-lg text-gray-700 mb-8">
            We're Here To Help With All Your TV Repair Needs
            </p>

            <div className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors bg-transparent"
              />

              <input
                type="email"
                name="email"
                placeholder="Enter Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors bg-transparent"
              />

              <div className="flex gap-2">
                {/* <span className="flex items-center text-gray-600">+91 </span> */}
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 Enter Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  pattern="[0-9]{10}"
                  className="flex-1 px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors bg-transparent"
                />
              </div>

              <textarea
                name="message"
                placeholder="Message:"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors resize-none bg-transparent"
              ></textarea>

              <button
                onClick={handleSubmit}
                className="px-8 py-4 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
                style={{ backgroundColor: ' rgb(215, 25, 32)' }}
              >
                Submit your request
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
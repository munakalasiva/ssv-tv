import React, { useState } from 'react';
import { Phone, Mail, ThumbsUp, MapPin, Clock } from 'lucide-react';
import contactBanner from "../assets/contact_banner.png";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import API from "../api"; 

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

  // const handleSubmit = () => {
  //   console.log('Form submitted:', formData);
  //   alert('Message sent successfully! We will get back to you soon.');
  //   setFormData({ name: '', email: '', phone: '', message: '' });
  // };



const handleSubmit = async () => {
  if (!formData.name || !formData.email || !formData.message) {
    alert("Please fill all required fields!");
    return;
  }

  try {
    await API.post("/contacts", formData);

    alert("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  } catch (err) {
    console.error("Error submitting contact form:", err);
    alert("Something went wrong. Try again.");
  }
};


  return (

    <div>

   <section
  className="relative w-full h-[280px] bg-cover bg-center flex items-center justify-center"
  style={{ backgroundImage: `url(${contactBanner})` }}
>
  <div className="absolute inset-0 bg-black/40"></div>

  <div className="relative z-10 text-center text-white px-4">
    <h1 className="text-4xl md:text-5xl font-bold mb-3">
     Contact Us
    </h1>
    <p className="text-lg md:text-xl">
       Get in touch with us for any queries or support
    </p>
  </div>
</section>


  <div className="min-h-screen flex items-center justify-center p-4 sm:p-8" style={{ background: '#ffffff' }}>
     <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-0 rounded-2xl overflow-hidden shadow-2xl">
        {/* Left Contact Info Section */}
        <div className="lg:w-2/5 p-8 sm:p-12 text-white relative overflow-hidden" style={{ backgroundColor: '#001F3F' }}>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -ml-32 -mb-32"></div>
          
          <div className="relative z-10">
            {/* Contact Phone */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-7 h-7" style={{ color: '#D71920' }} />
                <h3 className="text-2xl font-bold">Contact Us</h3>
              </div>
              <div className="space-y-2 ml-10">
                <a href="tel:+919291488856" className="text-gray-200 hover:text-white transition-colors block">
                  +91 9291488856
                </a>
              </div>
            </div>

            <div className="border-t border-white border-opacity-20 my-8"></div>

            {/* Address */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-7 h-7" style={{ color: '#D71920' }} />
                <h3 className="text-2xl font-bold">Our Location</h3>
              </div>
              <div className="ml-10">
                <p className="text-gray-200 leading-relaxed">
                  49-1-18/3, Jagannadhapuram Jn., Main Road,<br />
                  Akkayyapalem, Visakhapatnam - 530016
                </p>
              </div>
            </div>

            <div className="border-t border-white border-opacity-20 my-8"></div>

            {/* Working Hours */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-7 h-7" style={{ color: '#D71920' }} />
                <h3 className="text-2xl font-bold">Working Hours</h3>
              </div>
              <div className="space-y-2 ml-10">
                <p className="text-gray-200">Monday - Saturday: 9:00 AM - 8:00 PM</p>
                <p className="text-gray-200">Sunday: Closed</p>
              </div>
            </div>

            <div className="border-t border-white border-opacity-20 my-8"></div>

            {/* Social Media */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <ThumbsUp className="w-7 h-7" style={{ color: '#D71920' }} />
                <h3 className="text-2xl font-bold">Connect With Us</h3>
              </div>
        

              <div className="flex gap-4 ml-10">
  <a
    href="https://wa.me/919291488856"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 
               flex items-center justify-center transition-all"
  >
    <FaWhatsapp className="w-5 h-5 text-black"/>
  </a>

  <a
    href="#"
    className="w-10 h-10 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 
               flex items-center justify-center transition-all"
  >
    <FaFacebookF className="w-5 h-5 text-black" />
  </a>

  <a
    href="#"
    className="w-10 h-10 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 
               flex items-center justify-center transition-all"
  >
    <FaInstagram className="w-5 h-5 text-black" />
  </a>

  <a
    href="#"
    className="w-10 h-10 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 
               flex items-center justify-center transition-all"
  >
    <FaYoutube className="w-5 h-5 text-black" />
  </a>
</div>

            </div>
          </div>

          {/* Map Pin Button */}
       <a 
  href="https://maps.app.goo.gl/8ZTwR4ZdQtBrKRZy8"
  target="_blank"
  rel="noopener noreferrer"
  className="absolute bottom-8 left-8 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
  style={{ backgroundColor: '#D71920' }}
>
  <MapPin className="w-7 h-7 text-white" />
</a>


        </div>

        {/* Right Form Section */}
        <div className="lg:w-3/5 bg-white p-8 sm:p-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: '#001F3F' }}>
              Get In Touch With Us
            </h2>
            <p className="text-xl sm:text-2xl font-semibold mb-8" style={{ color: '#001F3F' }}>
              We're Here To Help With All Your TV Repair Needs
            </p>

            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-gray-600 focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-gray-600 focus:outline-none transition-colors"
                />
              </div>

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number (10 digits)"
                value={formData.phone}
                onChange={handleChange}
                pattern="[0-9]{10}"
                className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-gray-600 focus:outline-none transition-colors"
              />

              <textarea
                name="message"
                placeholder="Your Message / Describe your TV issue"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-gray-600 focus:outline-none transition-colors resize-none"
              ></textarea>

              <button
                onClick={handleSubmit}
                className="px-8 py-4 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
                style={{ backgroundColor: '#D71920' }}
              >
                Send Message
              </button>
            </div>

            {/* Quick Contact Buttons */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="tel:+919291488856"
                className="flex items-center justify-center gap-3 px-6 py-4 border-2 rounded-lg hover:shadow-md transition-all"
                style={{ borderColor: '#001F3F', color: '#001F3F' }}
              >
                <Phone className="w-5 h-5" />
                <div className="text-left">
                  <p className="font-semibold text-sm">Call Us Now</p>
                  <p className="text-xs">+91 9291488856</p>
                </div>
              </a>

              <a
                href="https://wa.me/919291488856"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-4 rounded-lg text-white hover:shadow-md transition-all"
                style={{ backgroundColor: '#25D366' }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                <div className="text-left">
                  <p className="font-semibold text-sm">WhatsApp</p>
                  <p className="text-xs">Chat Instantly</p>
                </div>
              </a>
            </div>

            {/* Map Embed */}
            <div className="mt-8 rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.303601647918!2d83.29689417499355!3d17.730328383216513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39433b19e1769b%3A0xb17778e63a90a8fa!2sSSV%20Electronics%20-%20Samsung%20%7C%20LG%20%7C%20Sony%20LED%20%7C%20LCD%20%7C%20Plasma%20TV%20Repairs%20%26%20Servicing%20in%20Vizag!5e0!3m2!1sen!2sin!4v1763537330615!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SSV Electronics Location"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
 
  );
}


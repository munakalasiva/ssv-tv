import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import contactBg from "../assets/contactus.png";

import API from "../api"; 

function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    tvBrand: '',
    problemType: '',
    date: '',
    time: '',
    file: null,
  });
  const [submitted, setSubmitted] = useState(false);  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      file: e.target.files[0],
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Form Data:', formData);
  //   setSubmitted(true);
  //   setTimeout(() => {
  //     setSubmitted(false);
  //     setFormData({
  //       name: '',
  //       phone: '',
  //       address: '',
  //       tvBrand: '',
  //       problemType: '',
  //       date: '',
  //       time: '',
  //       file: null,
  //     });
  //   }, 3000);
  // };



const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const data = new FormData();
    data.append("name", formData.name);
    data.append("phone", formData.phone);
    data.append("address", formData.address);
    data.append("tvBrand", formData.tvBrand);
    data.append("problemType", formData.problemType);
    data.append("date", formData.date);
    data.append("time", formData.time);

    if (formData.file) {
      data.append("photo", formData.file);
    }

    await API.post("/bookings", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        address: "",
        tvBrand: "",
        problemType: "",
        date: "",
        time: "",
        file: null,
      });
    }, 3000);
  } catch (error) {
    console.error("Booking API Error:", error);
    alert("Something went wrong! Try again.");
  }
};



  return (
    <div className="min-h-screen bg-gray-50">
     
    <section
  className="relative w-full h-[280px] bg-cover bg-center flex items-center justify-center"
  style={{ backgroundImage: `url(${contactBg})` }}
>
  <div className="absolute inset-0 bg-black/40"></div>

  <div className="relative z-10 text-center text-white px-4">
    <h1 className="text-4xl md:text-5xl font-bold mb-3">
      Book a Repair
    </h1>
    <p className="text-lg md:text-xl">
      Fill out the form below and our team will contact you shortly
    </p>
  </div>
</section>




      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="card text-center py-12"
            >
              <FiCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Booking Submitted Successfully!
              </h2>
              <p className="text-gray-600">
                Thank you for choosing our service. Our team will contact you within 24 hours.
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="card"
            >
              <h2 className="text-3xl font-bold text-[#0A2540] mb-6 text-center">
                Repair Booking Form
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      pattern="[0-9]{10}"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="10-digit mobile number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address *
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    rows="3"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your complete address"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      TV Brand *
                    </label>
                    <select
                      name="tvBrand"
                      value={formData.tvBrand}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select Brand</option>
                      <option value="samsung">Samsung</option>
                      <option value="lg">LG</option>
                      <option value="sony">Sony</option>
                      <option value="mi">Mi</option>
                      <option value="panasonic">Panasonic</option>
                      <option value="oneplus">OnePlus</option>
                      <option value="vu">Vu</option>
                      <option value="tcl">TCL</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Problem Type *
                    </label>
                    <select
                      name="problemType"
                      value={formData.problemType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select Problem</option>
                      <option value="power">Power Issue</option>
                      <option value="display">Display Problem</option>
                      <option value="sound">Sound Issue</option>
                      <option value="screen">Screen Damage</option>
                      <option value="installation">Installation/Mounting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Time *
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select Time</option>
                      <option value="morning">Morning (9 AM - 12 PM)</option>
                      <option value="afternoon">Afternoon (12 PM - 3 PM)</option>
                      <option value="evening">Evening (3 PM - 6 PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Photo (Optional)
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                     name="photo" 
                    onChange={handleFileChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Upload a photo of the issue for better diagnosis
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#093f74] text-white px-3 py-4 rounded-full font-semibold text-lg hover:bg-[#b11823] transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Submit Booking Request
                </button>
              </form>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Booking;

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiXCircle, FiSearch } from 'react-icons/fi';

function Warranty() {
  const [warrantyId, setWarrantyId] = useState('');
  const [warrantyResult, setWarrantyResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState('');

  const brandUrls = {
    lg: 'https://www.lg.com/in/support/warranty',
    sony: 'https://www.sony.co.in/microsite/service/warranty.html',
    samsung: 'https://www.samsung.com/in/support/warranty/',
    mi: 'https://www.mi.com/in/service/repair/',
    panasonic: 'https://www.panasonic.com/in/support/service-center.html',
    oneplus: 'https://www.oneplus.in/support/service-center',
  };

  const mockWarrantyData = {
    warrantyId: 'WRN-TV-2025-0123',
    customerName: 'Ravi Kumar',
    tvBrand: 'Samsung',
    serviceDate: '2025-10-05',
    warrantyExpiry: '2026-10-05',
    status: 'Active',
  };

  const handleCheckWarranty = (e) => {
    e.preventDefault();
    if (!warrantyId.trim()) {
      alert('Please enter a warranty ID');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setWarrantyResult(mockWarrantyData);
      setLoading(false);
    }, 1000);
  };

  const handleBrandWarranty = () => {
    if (!selectedBrand) {
      alert('Please select a brand');
      return;
    }

    window.open(brandUrls[selectedBrand], '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-blue-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >

            <h1 className="text-4xl md:text-5xl font-bold mb-4">Warranty Services</h1>
            <p className="text-xl text-blue-100">
              Check your warranty status or access manufacturer warranty information
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="card"
            >
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Check Warranty for TV Repaired by Our Team
                </h2>
                <p className="text-gray-600">
                  If your TV was repaired by our technicians, enter your warranty ID below to check its validity and expiry date.
                </p>
              </div>

              <form onSubmit={handleCheckWarranty} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Warranty ID
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={warrantyId}
                      onChange={(e) => setWarrantyId(e.target.value)}
                      placeholder="Enter Warranty ID (e.g., WRN-TV-2025-0123)"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <FiSearch className="absolute right-3 top-3.5 text-gray-400" size={20} />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Checking...' : 'Check Warranty'}
                </button>
              </form>

              {warrantyResult && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className={`mt-6 p-6 rounded-lg ${
                    warrantyResult.status === 'Active'
                      ? 'bg-green-50 border-2 border-green-200'
                      : 'bg-red-50 border-2 border-red-200'
                  }`}
                >
                  <div className="flex items-center mb-4">
                    {warrantyResult.status === 'Active' ? (
                      <FiCheckCircle className="text-green-600 text-3xl mr-3" />
                    ) : (
                      <FiXCircle className="text-red-600 text-3xl mr-3" />
                    )}
                    <h3
                      className={`text-xl font-bold ${
                        warrantyResult.status === 'Active' ? 'text-green-800' : 'text-red-800'
                      }`}
                    >
                      Warranty {warrantyResult.status}
                    </h3>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Warranty ID:</span>
                      <span className="font-semibold text-gray-900">
                        {warrantyResult.warrantyId}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Customer Name:</span>
                      <span className="font-semibold text-gray-900">
                        {warrantyResult.customerName}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">TV Brand:</span>
                      <span className="font-semibold text-gray-900">
                        {warrantyResult.tvBrand}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Service Date:</span>
                      <span className="font-semibold text-gray-900">
                        {warrantyResult.serviceDate}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Warranty Expiry:</span>
                      <span className="font-semibold text-gray-900">
                        {warrantyResult.warrantyExpiry}
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="card"
            >
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Check Brand Warranty
                </h2>
                <p className="text-gray-600">
                  For official manufacturer warranties, choose your TV brand below and go to its warranty page.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Brand
                  </label>
                  <select
                    value={selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">-- Choose a Brand --</option>
                    <option value="lg">LG</option>
                    <option value="sony">Sony</option>
                    <option value="samsung">Samsung</option>
                    <option value="mi">Mi</option>
                    <option value="panasonic">Panasonic</option>
                    <option value="oneplus">OnePlus</option>
                  </select>
                </div>

                <button
                  onClick={handleBrandWarranty}
                  className="w-full bg-blue-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300"
                >
                  Go to Warranty Site
                </button>
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Benefits of Extended Warranty
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Extended coverage beyond manufacturer warranty</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Priority service and support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Protection against unexpected repair costs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Free annual maintenance checks</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      









    </div>
  );
}

export default Warranty;

import { useState } from "react";
import API from "../api";
import { motion } from "framer-motion";
import { FiCheckCircle, FiXCircle, FiSearch } from "react-icons/fi";
import warranty from "../assets/warranty.png";
import Contact from "../components/Contact";

import SEO, { generateBreadcrumbSchema } from "../components/SEO";

function Warranty() {
  const [warrantyId, setWarrantyId] = useState("");
  const [warrantyResult, setWarrantyResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState("");

  console.log(warrantyResult) ;
  const brandUrls = {
    lg: "https://www.lg.com/in/support/warranty",
    sony: "https://www.sony.co.in/microsite/service/warranty.html",
    samsung: "https://www.samsung.com/in/support/warranty/",
    mi: "https://www.mi.com/in/service/repair/",
    panasonic: "https://www.panasonic.com/in/support/service-center.html",
    oneplus: "https://www.oneplus.in/support/service-center",
  };

  // ================================
  //   REAL WARRANTY CHECK API
  // ================================
  const handleCheckWarranty = async (e) => {
    e.preventDefault();

    if (!warrantyId.trim()) {
      alert("Please enter a warranty ID");
      return;
    }

    setLoading(true);
    setWarrantyResult(null);

    try {
      const res = await API.get(`/warranty/${warrantyId}`);

      if (res.data.success) {
        setWarrantyResult(res.data.data);
      } else {
        alert("Warranty not found");
      }
    } catch (err) {
      alert("Warranty not found or invalid ID");
      console.error(err);
    }

    setLoading(false);
  };

  const handleBrandWarranty = () => {
    if (!selectedBrand) {
      alert("Please select a brand");
      return;
    }
    window.open(brandUrls[selectedBrand], "_blank");
  };

  // ================================
  //   SEO + BREADCRUMBS
  // ================================
  const siteUrl =
    typeof window !== "undefined"
      ? window.location.origin
      : "https://ssvelectronicsvizag.com";

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteUrl },
    { name: "Warranty", url: `${siteUrl}/warranty` },
  ]);

  return (
    <>
      <SEO
        title="TV Warranty Check | SSV Electronics Visakhapatnam"
        description="Instantly check your SSV Electronics TV repair warranty status. Also access Samsung, LG, Sony, Mi, Panasonic & OnePlus manufacturer warranty pages."
         keywords="
TV repair warranty, TV service warranty Vishakhapatnam, LED TV repair warranty, Smart TV repair warranty Vizag, LCD TV warranty support, TV repair guarantee Vizag, post repair warranty service, extended appliance warranty Vizag, guaranteed TV repair service, certified TV warranty service, doorstep warranty support,
TV repair in Siripuram, LED TV repair in Beach Road, TV repair in Lawson’s Bay Colony, Smart TV repair near Pedda Waltair, TV repair in Kirlampudi Layout, TV repair in Pandurangapuram, TV repair in Waltair Uplands, TV repair in MVP Colony, TV repair in Asilmetta, TV repair in Dwaraka Nagar, LED TV repair in Akkayyapalem, Smart TV repair in Seethammadhara, TV repair in Maddilapalem, TV repair in Jagadamba Junction, TV repair in Gajuwaka, TV repair in NAD Junction, TV repair in NSTL, TV repair in BHPV, LED TV repair in Sheela Nagar, TV repair in Kancharapalem, TV repair in Gopalapatnam, TV repair in Steel Plant Township, TV repair in Kurmannapalem, TV repair in Pendurthi, Smart TV repair near Duvvada, TV repair in Auto Nagar, TV repair in Chinnamushidiwada, LED TV repair in Malkapuram, TV repair in Sagar Nagar, LED TV repair in Hanumanthavaka, TV repair in Madhavadhara, TV repair in Venkojipalem, TV repair in Kommadi, TV repair in PM Palem, LED TV repair in Rushikonda, TV repair in Bheemili, LED TV repair in Yendada, TV repair in Anandapuram, LED TV repair in Kapuluppada, TV repair in Bavikonda, LED TV repair in Endada, LED TV repair in Thimmapuram, TV repair in Sontyam, TV repair in Paravada, TV repair near Achutapuram, TV repair in Aganampudi, TV repair in Lankelapalem, TV repair in Boyapalem,
TV repair in Railway New Colony, LED TV repair in HB Colony, TV repair in Allipuram, TV repair in One Town, TV repair in Two Town, LED TV repair in Three Town, TV repair in Port Area, TV repair in Dabagardens, TV repair near Satyam Junction, TV repair in Santhipuram, TV repair in Balayya Sastry Layout, TV repair in Chinna Waltair, TV repair in Pedda Rushikonda,
TV service center in Kurusura, TV repair in China Gantyada, TV repair in Gnanapuram, TV repair in Kondayyapalem, LED TV repair in Relli Veedhi, TV repair in Tallavalasa, TV repair in Devada, TV repair in Padmanabham, Smart TV repair near Kothavalasa, LED TV repair in Ukkunagaram,
TV warranty service Akkayyapalem, LED TV warranty Gajuwaka, Smart TV warranty Madhurawada, TV warranty Pendurthi, TV warranty Rushikonda, TV warranty Seethammadhara, TV warranty Yendada, TV warranty Bheemili, TV warranty Kapuluppada, TV warranty Kommadhi, TV warranty PM Palem,
TV repair guarantee Siripuram, LED warranty Pedda Waltair, Smart TV warranty Beach Road, TV repair guarantee Vizag, trusted TV repair warranty Visakhapatnam
"
        canonicalUrl="/warranty"
        schema={breadcrumbSchema}
      />

      <div className="min-h-screen bg-gray-50">
        <section
          className="relative w-full h-[280px] bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${warranty})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              Warranty Services
            </h1>
            <p className="text-lg md:text-xl">
              Check your warranty status or access manufacturer warranty
              information
            </p>
          </div>
        </section>

        {/* ======================== LEFT (API CHECK) ========================= */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#fbf1e0]">
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
                    If your TV was repaired by our technicians, enter your
                    warranty ID below.
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
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <FiSearch
                        className="absolute right-3 top-3.5 text-gray-400"
                        size={20}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#093f74] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#b11823] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Checking..." : "Check Warranty"}
                  </button>

                  <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Benefits of Warranty
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Instant warranty verification</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Know exact expiry date</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Avoid unexpected repair charges</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Faster customer support</span>
                      </li>
                    </ul>
                  </div>
                </form>

                {/* WARRANTY RESULT BOX */}
                {warrantyResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`mt-6 p-6 rounded-lg ${
                      warrantyResult.status === "Active"
                        ? "bg-green-50 border-2 border-green-200"
                        : "bg-red-50 border-2 border-red-200"
                    }`}
                  >
                    <div className="flex items-center mb-4">
                      {warrantyResult.status === "Active" ? (
                        <FiCheckCircle className="text-green-600 text-3xl mr-3" />
                      ) : (
                        <FiXCircle className="text-red-600 text-3xl mr-3" />
                      )}
                      <h3
                        className={`text-xl font-bold ${
                          warrantyResult.status === "Active"
                            ? "text-green-800"
                            : "text-red-800"
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
                          {warrantyResult.serviceDate?.slice(0, 10)}
                        </span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-gray-600">Warranty Expiry:</span>
                        <span className="font-semibold text-gray-900">
                          {warrantyResult.warrantyExpiry?.slice(0, 10)}
                        </span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-gray-600">Part Name:</span>
                        <span className="font-semibold text-gray-900">
                          {warrantyResult.partName}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>

              {/* ======================== RIGHT (BRAND WARRANTY) ========================= */}
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
                    Choose your TV brand and go to the official warranty page.
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
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    className="w-full bg-[#093f74] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#b11823] transition-all duration-300"
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
                      <span>Extended coverage</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Priority service</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Protection against repair costs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Free annual maintenance</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Contact />
      </div>
    </>
  );
}

export default Warranty;

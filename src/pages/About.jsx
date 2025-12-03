import { motion } from 'framer-motion';
import { FiAward, FiUsers, FiMapPin, FiClock } from 'react-icons/fi';
import shopImage from "../assets/ssv-shop.jpg";
import about from "../assets/about.png";
import Contact from "../components/Contact"
import SEO, { generateLocalBusinessSchema, generateBreadcrumbSchema } from "../components/SEO";

function About() {
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://ssvelectronicsvizag.com';
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteUrl },
    { name: "About Us", url: `${siteUrl}/about` }
  ]);
  const stats = [
    { icon: FiClock, value: '10+', label: 'Years Experience' },
    { icon: FiUsers, value: '5000+', label: 'Happy Customers' },
    { icon: FiAward, value: '100%', label: 'Satisfaction Rate' },
    { icon: FiMapPin, value: '50+', label: 'Areas Covered' },
  ];
  

  return (
    <>
      <SEO
        title="About Us | SSV Electronics - TV Repair Experts in Visakhapatnam"
        description="Learn about SSV Electronics - Visakhapatnam's trusted TV repair service with 10+ years experience, 5000+ happy customers, and certified technicians. Quality repairs with warranty."
         keywords="
TV repair experts Visakhapatnam, best TV repair technicians Vizag, experienced TV technicians, certified TV service engineers Vizag, trusted LED TV repair experts, Smart TV repair professionals Vizag, LCD TV specialists Visakhapatnam, top-rated TV service center Vizag, leading TV repair company Vizag, TV repair with 30 years experience,
TV repair in NAD Junction, TV repair in MVP Colony, TV repair in Siripuram, TV repair in Beach Road, TV repair in Kirlampudi Layout, TV repair in Pedda Waltair, TV repair in Pandurangapuram, TV repair in Waltair Uplands, LED TV repair in Asilmetta, TV repair in Dwaraka Nagar, TV repair in Jagadamba Junction, TV repair in Akkayyapalem, TV repair in Maddilapalem, TV repair in Seethammadhara, TV repair in Hanumanthavaka, TV repair in Maddilapalem, Smart TV repair in Rushikonda, TV repair in Yendada, TV repair in Bheemili, LED TV repair in Kapuluppada, TV repair in Anandapuram, TV repair in PM Palem, TV repair in Kommadi, TV repair in Madhurawada, TV repair in Pendurthi, TV repair in Gajuwaka, TV repair in Gajuwaka Steel Plant, TV repair in Kancharapalem, LED TV repair in Sheela Nagar, TV repair in Gopalapatnam, TV repair in Kurmannapalem, TV repair in Chinnamushidiwada, TV repair in Malkapuram, LED TV repair in Simhachalam, Smart TV repair in Auto Nagar,
TV repair in Pedagantyada, LED TV repair in Narava, Smart TV repair near Vepagunta, TV repair in Paravada, TV repair in Achutapuram, TV repair in Aganampudi, TV repair in Gambheeram, TV repair in Sontyam, LED TV repair in Lankelapalem, TV repair in Boyapalem, TV repair in Endada, TV repair in Thimmapuram, TV repair in Bavikonda,
LED TV repair in Railway New Colony, LCD TV repair in HB Colony, TV repair in Allipuram, TV repair in One Town, TV repair in Two Town, TV repair in Three Town, Smart TV repair in Port Area, TV repair in Dabagardens, TV repair in Santhipuram, TV repair near Satyam Junction, LED TV repair in Balayya Sastry Layout, TV repair in Chinna Waltair,
TV service center in Gnanapuram, TV repair in China Gantyada, TV repair in Kurusura, TV repair in Kondayyapalem, LED TV repair in Relli Veedhi, TV repair in Tallavalasa, TV repair in Padmanabham, TV repair in Devada, Smart TV repair near Kothavalasa, LED TV repair in Ukkunagaram,
experienced TV repair Akkayyapalem, trusted LED TV repair Gajuwaka, expert TV repair Madhurawada, certified TV repair Pendurthi, senior TV technicians Vizag, professional TV service Visakhapatnam, high-rated TV repair center Vizag, verified TV repair technicians Visakhapatnam
"
        canonicalUrl="/about"
        schema={[breadcrumbSchema, generateLocalBusinessSchema()]}
      />
      <div className="min-h-screen bg-gray-50">
        <section
          className="relative w-full h-[280px] bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${about})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              About Us
            </h1>
            <p className="text-lg md:text-xl">
              Your trusted partner for TV repair services in Visakhapatnam
            </p>
          </div>
        </section>



    
  <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8">
  Our{" "}
  <span className="bg-gradient-to-r from-[#D71920] to-blue-900 bg-clip-text text-transparent">
    Story
  </span>
</h2>

            
            <div className="space-y-5">
              <p className="text-base text-gray-700 leading-relaxed text-justify">
                Founded over a decade ago, TV Repair Services has been serving the people of Visakhapatnam and surrounding areas with dedication and expertise. What started as a small repair shop has grown into one of the most trusted names in TV repair services.
              </p>

              <p className="text-base text-gray-700 leading-relaxed text-justify">
                Our team of certified technicians brings years of experience and technical knowledge to every repair job. We understand how important your TV is to your daily life, and we're committed to getting it back to you as quickly as possible.
              </p>

              <p className="text-base text-gray-700 leading-relaxed text-justify">
                We believe that every repair is more than just fixing a device—it's restoring a part of your daily life. Whether it's a family movie night, a cricket match with friends, or your child's favorite cartoon, we know how much those moments matter. That's why we treat every job with urgency, precision, and care.
              </p>

              <p className="text-base text-gray-700 leading-relaxed text-justify">
                We pride ourselves on using only genuine parts, transparent pricing, and providing exceptional customer service. Our mission is simple: to deliver fast, reliable, and affordable TV repair solutions that exceed your expectations.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-20 blur-2xl"></div> */}
            <div className="relative">
              <img
                src={shopImage}
                alt="Technician repairing TV"
className="rounded-2xl shadow-2xl w-full h-auto object-cover border-4 border-white"

                style={{ maxHeight: '600px' }}
              />
            </div>
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
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 
                     shadow-[0_8px_25px_rgba(0,0,0,0.25)] hover:bg-white/20 transition-all"
        >
          <stat.icon className="text-5xl text-blue-300 mx-auto mb-3" />
          <p className="text-4xl font-bold mb-1">{stat.value}</p>
          <p className="text-blue-200">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>




      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-[#fbf1e0]">
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
  className="border-l-4 border-blue-900 pl-4 py-3 text-left bg-gray-50 rounded-lg 
shadow-[0_4px_12px_rgba(9,63,116,0.35)]
hover:bg-[#093f74] hover:text-white 
transition-all duration-300 cursor-pointer"

        >
          <p className="text-lg  font-semibold">{area}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

<Contact/>

    </div>
    </>
  );
}

export default About;

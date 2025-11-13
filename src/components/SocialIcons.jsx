import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

function SocialIcons() {
  const socialLinks = {
    facebook: 'https://facebook.com/ssvelectronics',
    instagram: 'https://instagram.com/ssvelectronics',
    whatsapp: {
      number: '919291488856',
      message: 'Hello! I need help with TV repair.'
    }
  };

  const handleWhatsApp = () => {
    const url = `https://wa.me/${socialLinks.whatsapp.number}?text=${encodeURIComponent(socialLinks.whatsapp.message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
      {/* Facebook */}
      <a
        href={socialLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#1877F2] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 hover:shadow-xl"
        aria-label="Follow us on Facebook"
      >
        <FaFacebook size={24} />
      </a>

      {/* Instagram */}
      <a
        href={socialLinks.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 hover:shadow-xl"
        aria-label="Follow us on Instagram"
      >
        <FaInstagram size={24} />
      </a>

      {/* WhatsApp */}
      <button
        onClick={handleWhatsApp}
        className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 hover:shadow-xl"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={24} />
      </button>
    </div>
  );
}

export default SocialIcons;

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import ssv_logo from "../assets/ssv_logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Warranty', path: '/warranty' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
<nav className="bg-[#0A2540] h-[100px] shadow-md sticky top-0 z-50 flex items-center">
  <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-10">
    <div className="flex justify-between items-center w-full">

      {/* ✅ Logo */}
      <Link to="/" className="flex items-center space-x-3">
        <img src={ssv_logo} alt="ssv_logo" className="h-[80px] w-auto" />
      </Link>

      {/* ✅ Desktop Links */}
      <div className="hidden md:flex items-center space-x-10">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`font-medium transition-colors duration-200 ${
              isActive(link.path)
                ? 'text-[#E63946]'
                : 'text-white hover:text-[#E63946]'
            }`}
          >
            {link.name}
          </Link>
        ))}

        <Link
          to="/booking"
          className="bg-[#E63946] text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300"
        >
          Book a Repair
        </Link>
      </div>

      {/* ✅ Mobile Menu Button */}
      <button
        onClick={() => setIsOpen((s) => !s)}
        className="md:hidden text-white focus:outline-none"
        aria-label="Toggle menu"
      >
        {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
      </button>
    </div>
  </div>

  {/* ✅ Mobile Menu */}
  {isOpen && (
    <div className="md:hidden bg-[#0A2540] border-t border-gray-700">
      <div className="px-6 pt-3 pb-5 space-y-2">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={() => setIsOpen(false)}
            className={`block py-2 font-medium transition-colors duration-200 ${
              isActive(link.path)
                ? 'text-[#FFD700]'
                : 'text-white hover:text-[#FFD700]'
            }`}
          >
            {link.name}
          </Link>
        ))}

        <Link
          to="/booking"
          onClick={() => setIsOpen(false)}
          className="block w-full text-center bg-[#E63946] text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 mt-4"
        >
          Book a Repair
        </Link>
      </div>
    </div>
  )}
</nav>



  );
}

export default Navbar;

import { Link } from "react-router-dom";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiMonitor,
} from "react-icons/fi";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-5">
              <FiMonitor className="text-blue-400 text-3xl" />
              <span className="text-xl font-semibold tracking-wide">
                TV Repair Services
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Fast, reliable, and affordable TV repair solutions at your doorstep. 
              Serving Vizag and surrounding areas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5 border-l-4 border-blue-500 pl-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: "Warranty", path: "/warranty" },
                { name: "About", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-blue-400 transition duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-5 border-l-4 border-blue-500 pl-3">
              Contact Info
            </h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start space-x-3">
                <FiMapPin className="text-blue-400 mt-1 flex-shrink-0" />
                <span>
                  49-1-18/3, Jagannadhapuram Jn., Main Road, Akkayyapalem, 
                  Visakhapatnam - 530016
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FiPhone className="text-blue-400 flex-shrink-0" />
                <span>+91 9291488856</span>
              </li>
              <li className="flex items-center space-x-3">
                <FiMail className="text-blue-400 flex-shrink-0" />
                <span>info@tvrepair.com</span>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold mb-5 border-l-4 border-blue-500 pl-3">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              {[
                { icon: <FiFacebook size={20} />, link: "#", label: "Facebook" },
                { icon: <FiTwitter size={20} />, link: "#", label: "Twitter" },
                { icon: <FiInstagram size={20} />, link: "#", label: "Instagram" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  aria-label={social.label}
                  className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} TV Repair Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

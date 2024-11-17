import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-700 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Us Section */}
        <div className="flex flex-col">
          <h3 className="font-bold text-lg mb-4">About FarmEasy</h3>
          <p className="text-sm text-gray-200">
            FarmEasy is a leading platform connecting farmers, merchants, and
            customers, offering fresh produce, farming equipment, and
            fertilizers to make agriculture more accessible.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col">
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-gray-300 hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-300 hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/search?category=farm-produce"
                className="text-gray-300 hover:text-white"
              >
                Farm Produce
              </Link>
            </li>
            <li>
              <Link
                to="/search?category=equipment"
                className="text-gray-300 hover:text-white"
              >
                Equipment
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-300 hover:text-white">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="flex flex-col">
          <h3 className="font-bold text-lg mb-4">Contact Us</h3>
          <p className="text-sm text-gray-200">
            123 Agriculture Road, Green Valley, India
          </p>
          <p className="text-sm text-gray-200">Email: info@farmeasy.com</p>
          <p className="text-sm text-gray-200">Phone: +91 9313202075</p>
        </div>

        {/* Newsletter Subscription Section */}
        <div className="flex flex-col">
          <h3 className="font-bold text-lg mb-4">
            Subscribe to our Newsletter
          </h3>
          <p className="text-sm text-gray-200 mb-2">
            Stay updated with the latest agricultural products and offers.
            Subscribe to our newsletter.
          </p>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded text-gray-700 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-gray-900 font-bold px-4 py-2 rounded hover:bg-yellow-500 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-gray-600 my-6"></div>

      {/* Social Media & Copyright Section */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            <FaLinkedin size={20} />
          </a>
        </div>

        {/* Copyright Information */}
        <div className="text-gray-300 text-sm">
          © {new Date().getFullYear()} FarmEasy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

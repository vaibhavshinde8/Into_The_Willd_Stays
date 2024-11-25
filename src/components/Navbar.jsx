import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/IntotheWildStaysLogo.png"; // Replace with the actual path to your logo

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-b from-[#000000] to-transparent transition-all font-ethereal duration-300 pt-8">
      <div className="mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Into the Wild Logo" className="h-32" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-gray-200 hover:text-primary px-3 py-2 text-lg transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/properties"
              className="text-gray-200 hover:text-primary px-3 py-2 text-lg transition duration-300"
            >
              Properties
            </Link>
            <Link
              to="/tours"
              className="text-gray-200 hover:text-primary px-3 py-2 text-lg transition duration-300"
            >
              Tours & Events
            </Link>
            <Link
              to="/blog"
              className="text-gray-200 hover:text-primary px-3 py-2 text-lg transition duration-300"
            >
              Blog
            </Link>
            <Link
              to="/about-us"
              className="text-gray-200 hover:text-primary px-3 py-2 text-lg transition duration-300"
            >
              About Us
            </Link>
            <Link
              to="/contact-us"
              className="text-gray-200 hover:text-primary px-3 py-2 text-lg transition duration-300"
            >
              Contact Us
            </Link>
            <Link
              to="/login"
              className="text-gray-200 hover:text-primary px-3 py-2 text-lg transition duration-300"
            >
            Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full text-gray-400 hover:text-primary hover:bg-gray-800"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute right-0 top-[60px] z-20 bg-gray-900 rounded-lg shadow-lg">
          <div className="px-4 py-4 space-y-2">
            <Link
              to="/"
              className="block text-gray-200 hover:text-primary px-3 py-2 rounded-md text-base font-medium transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/properties"
              className="block text-gray-200 hover:text-primary px-3 py-2 rounded-md text-base font-medium transition duration-300"
            >
              Properties
            </Link>
            <Link
              to="/tours"
              className="block text-gray-200 hover:text-primary px-3 py-2 rounded-md text-base font-medium transition duration-300"
            >
              Tour
            </Link>
            <Link
              to="/blog"
              className="block text-gray-200 hover:text-primary px-3 py-2 rounded-md text-base font-medium transition duration-300"
            >
              Blog
            </Link>
            <Link
              to="/about-us"
              className="block text-gray-200 hover:text-primary px-3 py-2 rounded-md text-base font-medium transition duration-300"
            >
              About Us
            </Link>
            <Link
              to="/contact-us"
              className="block text-gray-200 hover:text-primary px-3 py-2 rounded-md text-base font-medium transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

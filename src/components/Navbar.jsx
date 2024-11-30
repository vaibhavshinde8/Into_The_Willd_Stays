import { useState, useEffect } from "react";
import { Menu, X, User, Phone, Mail, Facebook, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../assets/IntotheWildStaysLogo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setUserData(null);
    setIsUserMenuOpen(false);
    navigate("/login");
  };

  // Check token and fetch user data
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      // Fetch user data
      axios
        .get("https://your-api-endpoint.com/user", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setUserData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          // Clear token if user data fetch fails
          localStorage.removeItem("token");
          setIsLoggedIn(false);
        });
    } else {
      setIsLoggedIn(false);
      setUserData(null);
    }
  }, []);

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-b from-black via-gray-900 to-transparent transition-all font-ethereal duration-300">
      <div className="bg-[#323232] text-[#ffffff] text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          {/* Left Side: Contact Info */}
          <div className="flex flex-col sm:flex-row items-center sm:space-x-6 space-y-2 sm:space-y-0 text-center sm:text-left">
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <div>
                <a href="tel:+919761966485" className="mr-2 hover:underline">
                  +919761966485
                </a>
                <a href="tel:+919958838557" className="hover:underline">
                  +919958838557
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={16} />
              <a
                href="mailto:intothewildstays@gmail.com"
                className="hover:text-[#F77706] transition-colors"
              >
                intothewildstays@gmail.com
              </a>
            </div>
          </div>

          {/* Right Side: Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=61557269590045"
              className="text-[#ffffff] hover:text-white hover:scale-110 duration-300 ease-in-out transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/intothewildstays/profilecard/?igsh=cGt4dTRvenNvZ25h"
              className="text-[#ffffff] hover:text-white hover:scale-110 duration-300 ease-in-out transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://wa.me/9761966485"
              className="text-[#ffffff] hover:text-white hover:scale-110 duration-300 ease-in-out transition-colors"
            >
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto pt-4 px-4 sm:px-6 lg:px-16">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Into the Wild Logo" className="h-32" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
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
              to="/user-profile"
              className="group flex items-center justify-center 
        bg-[#0F2642] text-white 
        px-4 py-2 
        rounded-lg 
        hover:bg-[#0F2642]/90 
        transition-all duration-300 
        shadow-md 
        hover:shadow-lg 
        focus:outline-none 
        focus:ring-2 
        focus:ring-[#0F2642]/50"
            >
              <User
                className="w-5 h-5 mr-2 
        group-hover:rotate-6 
        transition-transform duration-300"
              />
              <span className="font-extrabold">Profile</span>
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
        <div className="md:hidden absolute right-0 top-[60px] z-20 bg-gray-900 rounded-lg shadow-lg w-full">
          <div className="px-4 py-4 space-y-2">
            <Link
              to="/"
              className="block text-gray-200 hover:text-primary px-3 py-2 rounded-md text-base font-extrabold transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/properties"
              className="block text-gray-200 hover:text-primary px-3 py-2 rounded-md text-base font-extrabold transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Properties
            </Link>
            <Link
              to="/tours"
              className="block text-gray-200 hover:text-primary px-3 py-2 rounded-md text-base font-extrabold transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Tours & Events
            </Link>
            <Link
              to="/blog"
              className="block text-gray-200 hover:text-primary px-3 py-2 rounded-md text-base font-extrabold transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/about-us"
              className="block text-gray-200 hover:text-primary px-3 py-2 rounded-md text-base font-extrabold transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact-us"
              className="block text-gray-200 hover:text-primary px-3 py-2 rounded-md text-base font-extrabold transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              to="/user-profile"
              className="group flex items-center justify-center 
        bg-[#0F2642] text-white 
        px-4 py-2 
        rounded-lg 
        hover:bg-[#0F2642]/90 
        transition-all duration-300 
        shadow-md 
        hover:shadow-lg 
        focus:outline-none 
        focus:ring-2 
        focus:ring-[#0F2642]/50"
            >
              <User
                className="w-5 h-5 mr-2 
        group-hover:rotate-6 
        transition-transform duration-300"
              />
              <span className="font-extrabold">Profile</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

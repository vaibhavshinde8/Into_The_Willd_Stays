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
    <nav className="fixed w-full z-50 bg-gradient-to-b from-[#000000] to-transparent transition-all font-ethereal duration-300">
      <div className="bg-[#323232] text-[#ffffff] text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          {/* Left Side: Contact Info */}
          <div className="flex flex-col sm:flex-row items-center sm:space-x-6 space-y-2 sm:space-y-0 text-center sm:text-left">
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <span>+919761966485, +919958838557</span>
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
              href="https://wa.me/9958838557"
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

            {/* Conditional rendering for Login/User */}
            {!isLoggedIn ? (
              <Link
                to="/login"
                className="text-gray-200 hover:text-primary px-3 py-2 text-lg transition duration-300"
              >
                Login
              </Link>
            ) : (
              <div
                className="relative"
                onMouseEnter={() => setIsUserMenuOpen(true)}
                onMouseLeave={() => setIsUserMenuOpen(false)}
              >
                <User className="h-8 w-8 text-gray-200 cursor-pointer" />
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-gray-800 text-gray-200 rounded-md shadow-lg py-2 z-50">
                    <div className="px-4 py-2 border-b border-gray-700">
                      Hello, {userData?.name || "User"}
                    </div>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 hover:bg-gray-700 transition duration-300"
                    >
                      Profile
                    </Link>
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-gray-700 transition duration-300"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
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
              className="block text-gray-200 hover:text-primary px-3 py-2 rounded-md text-base font-medium transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/properties"
              className="block text-gray-200 hover:text-primary px-3 py-2 rounded-md text-base font-medium transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Properties
            </Link>
            <Link
              to="/tours"
              className="block text-gray-200 hover:text-primary px-3 py-2 rounded-md text-base font-medium transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Tours & Events
            </Link>
            <Link
              to="/blog"
              className="block text-gray-200 hover:text-primary px-3 py-2 rounded-md text-base font-medium transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/about-us"
              className="block text-gray-200 hover:text-primary px-3 py-2 rounded-md text-base font-medium transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact-us"
              className="block text-gray-200 hover:text-primary px-3 py-2 rounded-md text-base font-medium transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>

            {/* Conditional rendering for Login/User in Mobile view */}
            {!isLoggedIn ? (
              <Link
                to="/login"
                className="block text-gray-200 hover:text-primary px-3 py-2 rounded-md text-base font-medium transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            ) : (
              <div>
                <div className="px-3 py-2 text-gray-200">
                  Hello, {userData?.name || "User"}
                </div>
                <Link
                  to="/profile"
                  className="block text-gray-200 hover:text-primary px-3 py-2 rounded-md text-base font-medium transition duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Profile
                </Link>
                <button
                  className="block w-full text-left text-gray-200 hover:text-primary px-3 py-2 rounded-md text-base font-medium transition duration-300"
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

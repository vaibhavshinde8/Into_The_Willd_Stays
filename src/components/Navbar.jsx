import { useState, useEffect } from "react";
import { Menu, X, User } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";
import logo from "../assets/IntotheWildStaysLogo.png"; // Replace with the actual path to your logo

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
        });
    } else {
      setIsLoggedIn(false);
      setUserData(null);
    }
  }, []);

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

            {/* Conditional rendering for Login/User */}
            {!isLoggedIn ? (
              <Link
                to="/login"
                className="text-gray-200 hover:text-primary px-3 py-2 text-lg transition duration-300"
              >
                Login
              </Link>
            ) : (
              <div className="relative group">
                <User className="h-8 w-8 text-gray-200 cursor-pointer" />
                <div className="absolute hidden group-hover:block right-0 mt-2 bg-gray-800 text-gray-200 rounded-md shadow-lg py-2">
                  <div className="px-4 py-2">
                    Hello, {userData?.name || "User"}
                  </div>
                  <Link
                    to="/profile"
                    className="block px-4 py-2 hover:bg-gray-700"
                  >
                    Profile
                  </Link>
                  <button
                    className="block w-full text-left px-4 py-2 hover:bg-gray-700"
                    onClick={() => {
                      localStorage.removeItem("token");
                      setIsLoggedIn(false);
                    }}
                  >
                    Logout
                  </button>
                </div>
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
              Tours & Events
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

            {/* Conditional rendering for Login/User */}
            {!isLoggedIn ? (
              <Link
                to="/login"
                className="block text-gray-200 hover:text-primary px-3 py-2 rounded-md text-base font-medium transition duration-300"
              >
                Login
              </Link>
            ) : (
              <button
                className="block w-full text-left px-3 py-2 text-gray-200 hover:text-primary rounded-md text-base font-medium transition duration-300"
                onClick={() => {
                  localStorage.removeItem("token");
                  setIsLoggedIn(false);
                }}
              >
                User
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

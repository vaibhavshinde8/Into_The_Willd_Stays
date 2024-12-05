import { useState, useEffect } from "react";
import { Menu, X, User, Phone, Mail, Facebook, Instagram, Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/IntotheWildStaysLogo.png";
import emailjs from "emailjs-com";
import { motion, AnimatePresence } from "framer-motion";

// Modal Component for Property Listing Form
// eslint-disable-next-line react/prop-types
const PropertyListingModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "", 
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = "service_8b79wnu";
    const templateID = "template_434tezq";
    const publicKey = "FU4ThIFcvqAz_SSAm";

    emailjs.send(serviceID, templateID, formData, publicKey).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setSuccess(true);
        setIsSubmitting(false);
        setFormData({ name: "", email: "", phone: "", message: "" });
      },
      (error) => {
        console.error("FAILED...", error);
        setIsSubmitting(false);
      }
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">List Your Property</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={sendEmail} className="space-y-6">
          <div>
            <label htmlFor="name" className="block uppercase text-xs font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0F2642]"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block uppercase text-xs font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0F2642]"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block uppercase text-xs font-bold mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0F2642]"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label htmlFor="message" className="block uppercase text-xs font-bold mb-2">
              Property Details
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows="5"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0F2642]"
              placeholder="Describe your property"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#0F2642] text-white py-3 rounded hover:bg-[#0F2642]/90 transition duration-300 flex items-center justify-center space-x-2"
          >
            {isSubmitting ? "Sending..." : "Submit Property"}
            <Send className="w-4 h-4 ml-2" />
          </button>

          {success && (
            <p className="text-center text-green-600 mt-4">
              Message sent successfully
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isPropertyModalOpen, setIsPropertyModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`w-full z-50 bg-white shadow-md transition-all font-ethereal duration-300 fixed ${
        visible ? "top-0" : "-top-full"
      }`}
    >
      <div className="bg-gradient-to-r from-[#0F2642] to-[#0F2642] text-white text-sm sm:text-base">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          {/* Left Side: Contact Info */}
          <div className="flex flex-col sm:flex-row items-center sm:space-x-6 space-y-2 sm:space-y-0 text-center sm:text-left">
            <div className="flex items-center space-x-2">
              <Phone size={18} className="text-yellow-300" />
              <div>
                <a
                  href="tel:+919761966485"
                  className="mr-2 hover:text-yellow-300 transition-colors"
                >
                  +919761966485,
                </a>
                <a
                  href="tel:+919958838557"
                  className="hover:text-yellow-300 transition-colors"
                >
                  +919958838557
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={18} className="text-yellow-300" />
              <a
                href="mailto:intothewildstays@gmail.com"
                className="hover:text-yellow-300 transition-colors"
              >
                intothewildstays@gmail.com
              </a>
            </div>
          </div>

          {/* Right Side: Social Media Icons */}
          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com/profile.php?id=61557269590045"
              className="hover:text-yellow-300 hover:scale-110 duration-300 ease-in-out transition-all"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/intothewildstays/profilecard/?igsh=cGt4dTRvenNvZ25h"
              className="hover:text-yellow-300 hover:scale-110 duration-300 ease-in-out transition-all"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://wa.me/9761966485"
              className="hover:text-yellow-300 hover:scale-110 duration-300 ease-in-out transition-all"
            >
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto py-2 px-4 sm:px-6 lg:px-16">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <div className="relative group">
                <img
                  src={logo}
                  alt="Into the Wild Logo"
                  className="h-24 transition-transform duration-[4000ms] group-hover:rotate-[360deg]"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              to="/properties"
              className="text-gray-800 hover:text-[#0F2642] px-3 py-2 text-lg font-semibold transition duration-300"
            >
              Properties
            </Link>
            <Link
              to="/tours"
              className="text-gray-800 hover:text-[#0F2642] px-3 py-2 text-lg font-semibold transition duration-300"
            >
              Tours
            </Link>
            <Link
              to="/events"
              className="text-gray-800 hover:text-[#0F2642] px-3 py-2 text-lg font-semibold transition duration-300"
            >
              Events
            </Link>
            <Link
              to="/blog"
              className="text-gray-800 hover:text-[#0F2642] px-3 py-2 text-lg font-semibold transition duration-300"
            >
              Blog
            </Link>
            <Link
              to="/about-us"
              className="text-gray-800 hover:text-[#0F2642] px-3 py-2 text-lg font-semibold transition duration-300"
            >
              About Us
            </Link>
            <Link
              to="/contact-us"
              className="text-gray-800 hover:text-[#0F2642] px-3 py-2 text-lg font-semibold transition duration-300"
            >
              Contact Us
            </Link>

            <button
              onClick={() => setIsPropertyModalOpen(true)}
              className="text-[#0F2642] border-2 border-[#0F2642] hover:bg-[#0F2642] hover:text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300"
            >
              List Your Property
            </button>

            <Link
              to="/user-profile"
              className="group flex items-center justify-center 
              bg-[#0F2642] text-white 
              px-6 py-2.5
              rounded-full
              hover:bg-[#0F2642]/90
              transition-all duration-300 
              shadow-md 
              hover:shadow-lg"
            >
              <User
                className="w-5 h-5 mr-2 
                group-hover:rotate-6 
                transition-transform duration-300"
              />
              <span className="font-semibold">Profile</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full text-gray-600 hover:text-[#0F2642] hover:bg-gray-100"
            >
              {isOpen ? (
                <X className="h-8 w-8" />
              ) : (
                <Menu className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-[#0F2642] z-50 flex flex-col items-center justify-center"
          >
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 p-2 text-white hover:text-yellow-300"
            >
              <X className="h-8 w-8" />
            </button>

            <motion.div 
              className="flex flex-col items-center space-y-6 text-center"
              initial="closed"
              animate="open"
              variants={{
                open: {
                  transition: { staggerChildren: 0.1 }
                },
                closed: {
                  transition: { staggerChildren: 0.05, staggerDirection: -1 }
                }
              }}
            >
              {[
                { to: "/", text: "Home" },
                { to: "/properties", text: "Properties" },
                { to: "/tours", text: "Tours" },
                { to: "/events", text: "Events" },
                { to: "/blog", text: "Blog" },
                { to: "/about-us", text: "About Us" },
                { to: "/contact-us", text: "Contact Us" }
              ].map((link) => (
                <motion.div
                  key={link.to}
                  variants={{
                    open: { y: 0, opacity: 1 },
                    closed: { y: 20, opacity: 0 }
                  }}
                >
                  <Link
                    to={link.to}
                    className="text-white text-2xl font-semibold hover:text-yellow-300 transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.text}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                variants={{
                  open: { y: 0, opacity: 1 },
                  closed: { y: 20, opacity: 0 }
                }}
              >
                <button
                  onClick={() => {
                    setIsPropertyModalOpen(true);
                    setIsOpen(false);
                  }}
                  className="text-white border-2 border-white hover:bg-white hover:text-[#0F2642] px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300"
                >
                  List Your Property
                </button>
              </motion.div>

              <motion.div
                variants={{
                  open: { y: 0, opacity: 1 },
                  closed: { y: 20, opacity: 0 }
                }}
              >
                <Link
                  to="/user-profile"
                  className="flex items-center justify-center 
                  bg-white text-[#0F2642]
                  px-6 py-3
                  rounded-full
                  hover:bg-yellow-300
                  transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <User className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Profile</span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Property Listing Modal */}
      <PropertyListingModal
        isOpen={isPropertyModalOpen}
        onClose={() => setIsPropertyModalOpen(false)}
      />
    </nav>
  );
}

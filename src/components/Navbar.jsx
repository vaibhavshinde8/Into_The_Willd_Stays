import { useState, useEffect } from "react";
import { Menu, X, User, Phone, Mail, Facebook, Instagram, Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/IntotheWildStaysLogo.png";
import emailjs from "emailjs-com";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import {BASE_URL} from "../utils/baseurl";
import {toast} from "react-toastify";

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
  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (currentStep !== 3) {
      setCurrentStep(curr => curr + 1);
      return;
    }

    setIsSubmitting(true);
     try{
      const response = await axios.post(`${BASE_URL}/propertyListingQuery`, formData);
      console.log(response);
      toast.success("Property listing query sent successfully");
      setFormData({ name: "", email: "", phone: "", message: "" });
      onClose();
      setCurrentStep(1);
     }catch(error){
      console.error("Error sending property listing query", error);
      toast.error("Failed to send property listing query");
     }
     finally{
      setIsSubmitting(false);
     }

    // const serviceID = "service_8b79wnu";
    // const templateID = "template_434tezq";
    // const publicKey = "FU4ThIFcvqAz_SSAm";

    // emailjs.send(serviceID, templateID, formData, publicKey).then(
    //   (response) => {
    //     console.log("SUCCESS!", response.status, response.text);
    //     setSuccess(true);
    //     setIsSubmitting(false);
    //     setFormData({ name: "", email: "", phone: "", message: "" });
    //     setTimeout(() => onClose(), 2000);
    //   },
    //   (error) => {
    //     console.error("FAILED...", error);
    //     setIsSubmitting(false);
    //   }
    // );
  };

  if (!isOpen) return null;

  const steps = [
    {
      title: "Personal Details",
      icon: "👤"
    },
    {
      title: "Contact Info",
      icon: "📞"
    },
    {
      title: "Property Details",
      icon: "🏠"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0F2642] to-[#1a3b66] p-6 relative">
          <button 
            onClick={onClose} 
            className="absolute right-4 top-4 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <h2 className="text-3xl font-bold text-white mb-2">List Your Property</h2>
          <p className="text-white/80">Join our network of exclusive properties</p>
          
          {/* Progress Steps */}
          <div className="flex justify-between mt-6 relative">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center z-10">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xl
                  ${currentStep > index ? 'bg-green-500' : currentStep === index + 1 ? 'bg-yellow-400' : 'bg-white/30'}
                  transition-all duration-300`}>
                  {step.icon}
                </div>
                <span className="text-white/90 text-sm mt-2">{step.title}</span>
              </div>
            ))}
            {/* Progress Line */}
            <div className="absolute top-5 left-0 h-0.5 bg-white/30 w-full -z-0">
              <div 
                className="h-full bg-green-500 transition-all duration-500"
                style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0F2642] focus:border-transparent transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0F2642] focus:border-transparent transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0F2642] focus:border-transparent transition-all"
                    placeholder="+1 (555) 000-0000"
                    required
                  />
                </div>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Property Details</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0F2642] focus:border-transparent transition-all"
                    placeholder="Tell us about your property..."
                    required
                  ></textarea>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex justify-between pt-4">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={() => setCurrentStep(curr => curr - 1)}
                className="px-6 py-2 text-[#0F2642] border-2 border-[#0F2642] rounded-lg hover:bg-gray-50 transition-colors"
              >
                Previous
              </button>
            )}
            {currentStep < 3 ? (
              <button
                type="submit"
                className="ml-auto px-6 py-2 bg-[#0F2642] text-white rounded-lg hover:bg-[#0F2642]/90 transition-colors"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="ml-auto px-6 py-2 bg-[#0F2642] text-white rounded-lg hover:bg-[#0F2642]/90 transition-colors flex items-center"
              >
                {isSubmitting ? "Submitting..." : "Submit Property"}
                <Send className="w-4 h-4 ml-2" />
              </button>
            )}
          </div>

          {success && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-green-600 bg-green-50 p-4 rounded-lg"
            >
              Your property has been submitted successfully! We'll contact you soon.
            </motion.div>
          )}
        </form>
      </motion.div>
    </motion.div>
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

  const token = localStorage.getItem("token");

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
              {token ? (
                <span className="font-extrabold">Profile</span>
              ) : (
                <span className="font-extrabold">Login</span>
              )}
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
                  {token ? (
                    <>
                      <User className="w-5 h-5 mr-2" />
                      <span className="font-semibold">Profile</span>
                    </>
                  ) : (
                    <>
                      <User className="w-5 h-5 mr-2" />
                      <span className="font-semibold">Login</span>
                    </>
                  )}
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

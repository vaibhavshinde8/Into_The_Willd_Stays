import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaSearch,
 
} from "react-icons/fa";
import heroImage1 from "../assets/guestdiary/img-2.jpg";
import heroImage2 from "../assets/guestdiary/img-4.jpg";
import heroImage3 from "../assets/guestdiary/img-5.jpeg";

const images = [heroImage1, heroImage2, heroImage3];

const HomeHero = () => {
  const navigate = useNavigate();
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = () => {
    const searchParams = new URLSearchParams();

    navigate(`/properties?${searchParams.toString()}`);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Background ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
      </div>

      {/* Content Container */}
      <motion.div
        className="relative z-10 w-full max-w-6xl mx-auto px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Title */}
        <motion.h1
          className="text-3xl sm:text-5xl md:text-7xl font-bold text-white text-center mb-8 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="bg-gradient-to-r from-teal-300 to-emerald-500 bg-clip-text text-transparent">
            Into the Wild
          </span>{" "}
          Stays
        </motion.h1>

        {/* Search Section */}
        <motion.div
          className="bg-white/20 backdrop-blur-md rounded-3xl p-4 sm:p-6 md:p-4 shadow-2xl flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Slogan and Search Section */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-xl sm:text-2xl text-white font-medium mb-4 px-4">
              Discover Extraordinary Escapes: Where Adventure Meets Comfort
            </p>
          </motion.div>

          {/* Search Button */}
          <div className="flex justify-center">
            <button
              className="w-auto bg-gradient-to-r from-teal-500 to-emerald-600 text-white py-3 px-6 rounded-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              onClick={handleSearch}
            >
              <FaSearch />
              <span>Explore Our Properties</span>
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomeHero;

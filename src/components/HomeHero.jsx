import   { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaCalendar,
  // FaRocket,
} from "react-icons/fa";
import heroImage1 from "../assets/banner/b1.jpeg";
import heroImage2 from "../assets/banner/b2.jpeg";
import heroImage3 from "../assets/banner/b3.jpeg";
import heroImage4 from "../assets/banner/b3.jpeg";

const images = [heroImage1, heroImage4, heroImage3, heroImage2];
const locations = ["Dhanolti", "Goa", "Tehri", "Majuli"];

const HomeHero = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [searchParams, setSearchParams] = useState({
    location: "",
    checkIn: "",
    checkOut: "",
    adults: 1,
    children: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = () => {
    const params = new URLSearchParams();
    Object.entries(searchParams).forEach(([key, value]) => {
      if (value) params.append(key, value);
    });
    navigate(`/properties?${params.toString()}`);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="relative min-h-screen pt-64 flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Animated Background Overlay */}
      <div className="absolute inset-0 z-0 opacity-100">
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />
      </div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-white/5 opacity-50"></div>
      </div>

      {/* Content Container */}
      <motion.div
        className="relative z-10 w-full max-w-5xl mx-auto px-4 flex flex-col items-center justify-center flex-grow"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Hero Content */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-5xl md:text-6xl font-medium text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-300 font-bold to-emerald-300 bg-clip-text text-transparent">
              INTO THE WILD
            </span>
            <br />
            STAYS
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Embark on a journey of discovery with our curated travel
            experiences. Find your perfect escape, where every destination tells
            a story.
          </p>
        </motion.div>
      </motion.div>

      {/* Search Form - Updated with plain white background and larger padding */}
      <motion.div
        className="relative z-10 shadow-2xl "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="container mx-auto px-4 lg:px-8 py-16">
          {/* <h2 className="text-3xl text-white font-bold mb-8 text-center">
            Find Your Next Adventure
          </h2> */}

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 items-end">
            {/* Location */}
            <div className="md:col-span-1 col-span-2">
              <label className="block text-white mb-2 text-sm">Location</label>
              <select
                name="location"
                value={searchParams.location}
                onChange={handleInputChange}
                className="w-full h-[46px] px-4 py-3 bg-white border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" className="text-gray-500">
                  Select Location
                </option>
                {locations.map((loc) => (
                  <option key={loc} value={loc} className="text-gray-900">
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            {/* Check-in */}
            <div className="md:col-span-1">
              <label className="block text-white mb-2 text-sm">Check-in</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaCalendar className="text-gray-400" />
                </div>
                <input
                  type="date"
                  name="checkIn"
                  value={searchParams.checkIn}
                  onChange={handleInputChange}
                  className="w-full h-[46px] pl-10 pr-4 py-3 bg-white border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Check-out */}
            <div className="md:col-span-1">
              <label className="block text-white mb-2 text-sm">Check-out</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaCalendar className="text-gray-400" />
                </div>
                <input
                  type="date"
                  name="checkOut"
                  value={searchParams.checkOut}
                  onChange={handleInputChange}
                  className="w-full h-[46px] pl-10 pr-4 py-3 bg-white border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Adults */}
            <div className="md:col-span-1">
              <label className="block text-white mb-2 text-sm">Adults</label>
              <select
                name="adults"
                value={searchParams.adults}
                onChange={handleInputChange}
                className="w-full h-[46px] px-4 py-3 bg-white border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {[...Array(9)].map((_, i) => (
                  <option key={i + 1} value={i + 1} className="text-gray-900">
                    {i + 1} Adult{i > 0 ? "s" : ""}
                  </option>
                ))}
              </select>
            </div>

            {/* Children */}
            <div className="md:col-span-1">
              <label className="block text-white mb-2 text-sm">Children</label>
              <select
                name="children"
                value={searchParams.children}
                onChange={handleInputChange}
                className="w-full h-[46px] px-4 py-3 bg-white border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {[...Array(9)].map((_, i) => (
                  <option key={i} value={i} className="text-gray-900">
                    {i} Child{i !== 1 ? "ren" : ""}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Button */}
            <div className="md:col-span-1 col-span-2 flex items-end">
              <button
                onClick={handleSearch}
                className="w-full h-[50px] py-3 bg-[#0F2642] text-white border border-white
          hover:bg-[#0F2642]
          flex items-center justify-center space-x-3 
           "
              >
                <FaSearch />
                <span>Explore</span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 to-transparent"></div>
    </div>
  );
};

export default HomeHero;

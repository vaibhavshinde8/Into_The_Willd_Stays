import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaSearch, FaCalendar } from "react-icons/fa";
import heroImage1 from "../assets/guestdiary/img-2.jpg";
import heroImage2 from "../assets/banner/b1.jpeg";
import heroImage3 from "../assets/guestdiary/img-1.jpeg";
import heroImage4 from "../assets/banner/b4.jpeg";
import heroImage5 from "../assets/banner/b3.jpeg";
import React from 'react';

const images = [heroImage1, heroImage2, heroImage3, heroImage4, heroImage5];
const locations = ["Dhanolti", "Goa", "Tehri", "Majuli", "Rishikesh"];

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
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);


  const toggleGuestDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeGuestDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleGuestChange = (type, delta) => {
    setSearchParams((prev) => ({
      ...prev,
      [type]: Math.max(0, prev[type] + delta), // Prevents negative values
    }));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = () => {
    // Store search parameters in sessionStorage
    sessionStorage.setItem('searchParams', JSON.stringify(searchParams));

    navigate('/properties'); // Navigate without URL parameters
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="relative min-h-screen flex flex-col justify-between items-center overflow-hidden  md:pt-32" style={{ paddingBottom: "106px" }}>
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        {images?.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt={`Background ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
            transition={{ duration: 1.5 }}
          />
        ))}
        <div className="absolute inset-0  bg-black bg-opacity-60"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex-1 flex flex-col justify-center">
        {/* Hero Content */}
        <motion.div
          className="text-center space-y-8 mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-tight tracking-tight">
            <motion.span
              className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent inline-block"
              animate={{
                backgroundPosition: ["0%", "100%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              INTO THE WILD
            </motion.span>
            <br />
            <span className="drop-shadow-2xl">STAYS</span>
          </h1>
          <p className="text-lg md:text-2xl lg:text-3xl text-white max-w-3xl mx-auto leading-relaxed">
            Embark on a journey of discovery with our curated travel
            experiences. Find your perfect escape, where every destination tells
            a story.
          </p>
        </motion.div>

        {/* Search Form Container */}
        <motion.div
          className="relative w-full max-w-[100rem] mx-auto px-4 hidden md:block"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="bg-black/20 backdrop-blur-sm shadow-lg gap-4 rounded-lg border border-white/30 p-8">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6">
              {/* Location */}
              <div className="md:col-span-1 lg:w-40">
                <label className="block text-white mb-3 text-sm font-medium">
                  Location
                </label>
                <select
                  name="location"
                  value={searchParams.location}
                  onChange={handleInputChange}
                  className="w-full h-12 px-6 py-3 bg-white border border-white/30 text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-2xl transition-all duration-300 hover:bg-white"
                >
                  <option value="" className="text-gray-500">
                    Location
                  </option>
                  {locations?.map((loc) => (
                    <option key={loc} value={loc} className="text-gray-900">
                      {loc}
                    </option>
                  ))}
                </select>
              </div>

              {/* Check-in */}
              <div className="md:col-span-1 lg:w-40">
                <label className="block text-white mb-3 text-sm font-medium">
                  Check-in
                </label>
                <div className="relative">
                  <input
                    type="date"
                    name="checkIn"
                    value={searchParams.checkIn}
                    onChange={handleInputChange}
                    min={today} // Prevent past dates
                    placeholder="Select Check-in Date"
                    className="w-full h-12 px-4 bg-white border border-white/30 text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-2xl transition-all duration-300 hover:bg-white cursor-pointer"
                  />
                </div>
              </div>

              {/* Check-out */}
              <div className="md:col-span-1 lg:w-40">
                <label className="block text-white mb-3 text-sm font-medium">
                  Check-out
                </label>
                <div className="relative">
                  <input
                    type="date"
                    name="checkOut"
                    value={searchParams.checkOut}
                    onChange={handleInputChange}
                    min={searchParams.checkIn} // Prevent past dates and ensure check-out is after check-in
                    placeholder="Select Check-out Date"
                    className="w-full h-12 px-4 bg-white border border-white/30 text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-2xl transition-all duration-300 hover:bg-white cursor-pointer"
                  />
                </div>
              </div>

              {/* Adults */}
              <div className="relative w-full md:w-auto">
                {/* Dropdown Button */}
                <label className="block text-white mb-3 text-sm font-medium">
                  Guests
                </label>
                <button
                  onClick={toggleGuestDropdown}
                  className="w-full md:w-56 h-12 px-4 py-2 bg-white border border-gray-300 text-gray-900 rounded-lg text-left flex items-center justify-between hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <span className="text-sm w-full">
                    {`${searchParams.adults} Adult${searchParams.adults > 1 ? 's' : ''} and ${searchParams.children} Child${searchParams.children > 1 ? 'ren' : ''}`}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {/* Dropdown Content */}
                {isDropdownOpen && (
                  <div
                    className="absolute z-50 mt-2 w-full md:w-64 bg-white border border-gray-300 rounded-lg shadow-lg p-2"
                    style={{ position: "absolute", bottom: "auto" }} // Prevents clipping
                  >
                    {/* Adults */}
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <p className="text-gray-700 font-medium text-sm">Adults</p>
                      </div>
                      <div className="flex items-center">
                        <button
                          onClick={() => handleGuestChange("adults", -1)}
                          className="px-0.5 py-0.5 bg-gray-100 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50"
                          disabled={searchParams.adults <= 0}
                        >
                          −
                        </button>
                        <span className="mx-2 text-gray-900 text-sm">{searchParams.adults}</span>
                        <button
                          onClick={() => handleGuestChange("adults", 1)}
                          className="px-0.5 py-0.5 bg-gray-100 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-200"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Children */}
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <p className="text-gray-700 font-medium text-sm">Children</p>
                      </div>
                      <div className="flex items-center">
                        <button
                          onClick={() => handleGuestChange("children", -1)}
                          className="px-0.5 py-0.5 bg-gray-100 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50"
                          disabled={searchParams.children <= 0}
                        >
                          −
                        </button>
                        <span className="mx-2 text-gray-900 text-sm">{searchParams.children}</span>
                        <button
                          onClick={() => handleGuestChange("children", 1)}
                          className="px-0.5 py-0.5 bg-gray-100 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-200"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Done Button */}
                    <div className="mt-2">
                      <button
                        onClick={closeGuestDropdown}
                        className="w-full h-10 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium
            hover:from-cyan-600 hover:to-blue-600 transition-all duration-300
            flex items-center justify-center space-x-3 
            rounded-2xl shadow-lg hover:shadow-cyan-500/30"
                      >
                        Done
                      </button>
                    </div>
                  </div>
                )}
              </div>




              {/* Search Button */}
              <div className="md:col-span-1 lg:w-40 ml-16">
                <label className="block text-white mb-3 text-sm font-medium">
                  &nbsp;
                </label>
                <button
                  onClick={handleSearch}
                  className="w-full h-12 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium
                  hover:from-cyan-600 hover:to-blue-600 transition-all duration-300
                  flex items-center justify-center space-x-3 
                  rounded-2xl shadow-lg hover:shadow-cyan-500/30"
                >
                  <FaSearch className="text-lg" />
                  <span>Explore</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeHero;

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUsers,
} from "react-icons/fa";
import heroImage1 from "../assets/guestdiary/img-2.jpg";
import heroImage2 from "../assets/guestdiary/img-4.jpg";
import heroImage3 from "../assets/guestdiary/img-5.jpeg";

const images = [heroImage1, heroImage2, heroImage3];

const HomeHero = () => {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adultGuests, setAdultGuests] = useState(1);
  const [childGuests, setChildGuests] = useState(0);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
          className="bg-white/20 backdrop-blur-lg rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-end">
            {/* Location */}
            <div className="md:col-span-2 relative">
              <label className="text-white font-semibold mb-2 flex items-center">
                <FaMapMarkerAlt className="mr-2 text-teal-300" />
                Location
              </label>
              <div className="relative">
                <button
                  onClick={() => setShowLocationDropdown(!showLocationDropdown)}
                  className="w-full bg-white/10 text-white py-3 px-4 rounded-xl backdrop-blur-sm border border-white/20 text-left"
                >
                  {location || "Select Location"}
                </button>
                {showLocationDropdown && (
                  <div className="absolute mt-2 w-full bg-white rounded-xl shadow-lg z-20 overflow-hidden">
                    {["Beach", "Mountain", "City", "Desert", "Forest"].map(
                      (loc) => (
                        <div
                          key={loc}
                          className="px-4 py-2 hover:bg-teal-50 cursor-pointer"
                          onClick={() => {
                            setLocation(loc);
                            setShowLocationDropdown(false);
                          }}
                        >
                          {loc}
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Check-In */}
            <div className="md:col-span-1">
              <label className="text-white font-semibold mb-2 flex items-center">
                <FaCalendarAlt className="mr-2 text-teal-300" />
                Check In
              </label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-white/10 text-white py-3 px-4 rounded-xl backdrop-blur-sm border border-white/20"
              />
            </div>

            {/* Check-Out */}
            <div className="md:col-span-1">
              <label className="text-white font-semibold mb-2 flex items-center">
                <FaCalendarAlt className="mr-2 text-teal-300" />
                Check Out
              </label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-white/10 text-white py-3 px-4 rounded-xl backdrop-blur-sm border border-white/20"
              />
            </div>

            {/* Guests */}
            <div className="md:col-span-1">
              <label className="text-white font-semibold mb-2 flex items-center">
                <FaUsers className="mr-2 text-teal-300" />
                Guests
              </label>
              <div className="flex space-x-2">
                <div className="w-1/2">
                  <input
                    type="number"
                    min="1"
                    value={adultGuests}
                    onChange={(e) => setAdultGuests(Number(e.target.value))}
                    className="w-full bg-white/10 text-white py-3 px-4 rounded-xl backdrop-blur-sm border border-white/20 text-center"
                    placeholder="Adults"
                  />
                </div>
                <div className="w-1/2">
                  <input
                    type="number"
                    min="0"
                    value={childGuests}
                    onChange={(e) => setChildGuests(Number(e.target.value))}
                    className="w-full bg-white/10 text-white py-3 px-4 rounded-xl backdrop-blur-sm border border-white/20 text-center"
                    placeholder="Children"
                  />
                </div>
              </div>
            </div>

            {/* Search Button */}
            <div className="md:col-span-1 flex items-end">
              <button
                className="w-full bg-gradient-to-r from-teal-500 to-emerald-600 text-white py-3 px-6 rounded-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                onClick={() => {
                  alert(
                    `Searching: Location=${location}, Check In=${checkIn}, Check Out=${checkOut}, Adults=${adultGuests}, Children=${childGuests}`
                  );
                }}
              >
                <FaSearch />
                <span>Search</span>
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomeHero;

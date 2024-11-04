import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import heroImage1 from "../assets/homehero1.png"; // Replace with the actual path to your hero image 1
import heroImage2 from "../assets/homehero2.png"; // Replace with the actual path to your hero image 2
import heroImage3 from "../assets/homehero.png"; // Replace with the actual path to your hero image 3

const images = [heroImage1, heroImage2, heroImage3];

const HomeHero = () => {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adultGuests, setAdultGuests] = useState(1);
  const [childGuests, setChildGuests] = useState(0);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Change the background image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change every 5 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="relative flex items-center justify-center h-[100vh] bg-black overflow-hidden">
      {/* Background Image */}
      <img
        src={images[currentImageIndex]}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000" // Smooth transition effect
      />

      {/* Overlay and Content */}
      <motion.div
        className="relative flex items-center w-full h-full bg-black bg-opacity-40"
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="w-full flex flex-col items-center text-center px-4 space-y-12">
          {/* Heading */}
          <motion.h1
            className="text-6xl md:text-8xl mb-4 tracking-wide text-white leading-tight"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Into the Wild
          </motion.h1>

          {/* Search Section */}
          <motion.div
            className="bg-white bg-opacity-80 p-6 rounded-2xl shadow-lg flex justify-center space-x-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Location */}
            <div className="relative w-1/3">
              <label className="text-gray-700 font-semibold flex mb-1 text-sm">
                Location
              </label>
              <button
                className="w-full border border-gray-300 rounded-full p-2 text-left bg-white"
                onClick={() => setShowLocationDropdown(!showLocationDropdown)}
              >
                {location || "Select"}
              </button>
              {showLocationDropdown && (
                <div className="absolute mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-20">
                  {["Beach", "Mountain", "City", "Desert", "Forest"].map(
                    (loc) => (
                      <div
                        key={loc}
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-sm"
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

            {/* Check-In */}
            <div className="w-1/5">
              <label className="text-gray-700 font-semibold flex mb-1 text-sm">
                Check In
              </label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full border border-gray-300 rounded-full p-2"
              />
            </div>

            {/* Check-Out */}
            <div className="w-1/5">
              <label className="text-gray-700 font-semibold flex mb-1 text-sm">
                Check Out
              </label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full border border-gray-300 rounded-full p-2"
              />
            </div>

            {/* Adults */}
            <div className="w-1/5">
              <label className="text-gray-700 font-semibold flex mb-1 text-sm">
                Adults
              </label>
              <input
                type="number"
                min="1"
                value={adultGuests}
                onChange={(e) => setAdultGuests(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-full p-2"
              />
            </div>

            {/* Children */}
            <div className="w-1/5">
              <label className="text-gray-700 font-semibold flex mb-1 text-sm">
                Children
              </label>
              <input
                type="number"
                min="0"
                value={childGuests}
                onChange={(e) => setChildGuests(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-full p-2"
              />
            </div>
          </motion.div>

          {/* Search Button */}
          <button
            className="bg-gradient-to-r from-[#F77706] to-[#FF9A3E] text-white font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300 ease-out"
            onClick={() => {
              alert(
                `Searching: Location=${location}, Check In=${checkIn}, Check Out=${checkOut}, Adults=${adultGuests}, Children=${childGuests}`
              );
            }}
          >
            <div className="flex items-center justify-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 animate-pulse"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M9 5a7 7 0 016 3.287M4.75 19.287a7 7 0 0110.5 0M6 17v.01M18 17v.01"
                />
              </svg>
              <span>Search</span>
            </div>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeHero;

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
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="relative flex items-center justify-center h-screen bg-gradient-to-b from-blue-900 to-gray-800 overflow-hidden">
      {/* Background Image */}
      <img
        src={images[currentImageIndex]}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-80 transition-opacity duration-1000"
      />

      {/* Overlay and Content */}
      <motion.div
        className="relative flex items-center w-full h-full bg-black bg-opacity-50"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="w-full flex flex-col items-center text-center px-4 space-y-8">
          {/* Heading */}
          <motion.h1
            className="text-8xl sm:text-8xl md:text-8xl font-bold font-primaryF mb-4 tracking-wider text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Into the Wild Stays
          </motion.h1>

          {/* Search Section (Hidden on small screens) */}
          {window.innerWidth >= 768 && (
            <motion.div
              className="hidden md:flex bg-white bg-opacity-20 p-6 rounded-lg shadow-2xl justify-center space-x-4 w-full max-w-5xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {/* Location */}
              <div className="relative w-1/4">
                <label className="text-white font-semibold mb-1 text-sm block">
                  Location
                </label>
                <button
                  className="w-full border border-gray-300 rounded-full p-2 bg-white text-gray-800 shadow-sm hover:shadow-md transition-all"
                  onClick={() => setShowLocationDropdown(!showLocationDropdown)}
                >
                  {location || "Select a location"}
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
                <label className="text-white font-semibold mb-1 text-sm block">
                  Check In
                </label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full border border-gray-300 rounded-full p-2 shadow-sm focus:ring-2 focus:ring-blue-300"
                />
              </div>

              {/* Check-Out */}
              <div className="w-1/5">
                <label className="text-white font-semibold mb-1 text-sm block">
                  Check Out
                </label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full border border-gray-300 rounded-full p-2 shadow-sm focus:ring-2 focus:ring-blue-300"
                />
              </div>

              {/* Adults */}
              <div className="w-1/6">
                <label className="text-white font-semibold mb-1 text-sm block">
                  Adults
                </label>
                <input
                  type="number"
                  min="1"
                  value={adultGuests}
                  onChange={(e) => setAdultGuests(Number(e.target.value))}
                  className="w-full border border-gray-300 rounded-full p-2 shadow-sm"
                />
              </div>

              {/* Children */}
              <div className="w-1/6">
                <label className="text-white font-semibold mb-1 text-sm block">
                  Children
                </label>
                <input
                  type="number"
                  min="0"
                  value={childGuests}
                  onChange={(e) => setChildGuests(Number(e.target.value))}
                  className="w-full border border-gray-300 rounded-full p-2 shadow-sm"
                />
              </div>
              <button
                className="bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300 ease-out mt-4"
                onClick={() => {
                  alert(
                    `Searching: Location=${location}, Check In=${checkIn}, Check Out=${checkOut}, Adults=${adultGuests}, Children=${childGuests}`
                  );
                }}
              >
                <div className="flex items-center justify-center space-x-2">
                  <span>Search</span>
                </div>
              </button>
            </motion.div>
          )}

          {/* Search Button */}
        </div>
      </motion.div>
    </div>
  );
};

export default HomeHero;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaSearch, FaCalendar } from "react-icons/fa";
import heroImage1 from "../assets/guestdiary/img-2.jpg";
import heroImage2 from "../assets/banner/b1.jpeg";
import heroImage3 from "../assets/guestdiary/img-1.jpeg";
import heroImage4 from "../assets/banner/b4.jpeg";
import heroImage5 from "../assets/banner/b3.jpeg";

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
    <div className="relative min-h-screen flex flex-col justify-between items-center overflow-hidden py-16 md:pt-32">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        {images.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt={`Background ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
            transition={{ duration: 1.5 }}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
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
              className="bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent inline-block"
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
          <p className="text-lg md:text-2xl lg:text-3xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
            Embark on a journey of discovery with our curated travel
            experiences. Find your perfect escape, where every destination tells
            a story.
          </p>
        </motion.div>

        {/* Search Form Container */}
        <motion.div
          className="relative w-full max-w-7xl mx-auto px-4 hidden md:block"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="bg-black/20 backdrop-blur-sm shadow-lg rounded-lg border border-white/30 p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6">
              {/* Location */}
              <div className="md:col-span-1">
                <label className="block text-white mb-2 text-sm font-medium">
                  Location
                </label>
                <select
                  name="location"
                  value={searchParams.location}
                  onChange={handleInputChange}
                  className="w-full h-[46px] px-4 py-3 bg-white border border-white/30 text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-2xl transition-all duration-300 hover:bg-white"
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
                <label className="block text-white mb-2 text-sm font-medium">
                  Check-in
                </label>
                <div
                  className="relative cursor-pointer group"
                  onClick={() =>
                    document.getElementById("check-in-date").showPicker()
                  }
                >
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaCalendar className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                  </div>
                  <input
                    id="check-in-date"
                    type="date"
                    name="checkIn"
                    value={searchParams.checkIn}
                    onChange={handleInputChange}
                    className="w-full h-[46px] pl-10 pr-4 py-3 bg-white border border-white/30 text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-2xl transition-all duration-300 hover:bg-white cursor-pointer"
                  />
                </div>
              </div>

              {/* Check-out */}
              <div className="md:col-span-1">
                <label className="block text-white mb-2 text-sm font-medium">
                  Check-out
                </label>
                <div
                  className="relative cursor-pointer group"
                  onClick={() =>
                    document.getElementById("check-out-date").showPicker()
                  }
                >
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaCalendar className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                  </div>
                  <input
                    id="check-out-date"
                    type="date"
                    name="checkOut"
                    value={searchParams.checkOut}
                    onChange={handleInputChange}
                    className="w-full h-[46px] pl-10 pr-4 py-3 bg-white border border-white/30 text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-2xl transition-all duration-300 hover:bg-white cursor-pointer"
                  />
                </div>
              </div>

              {/* Adults */}
              <div className="md:col-span-1">
                <label className="block text-white mb-2 text-sm font-medium">
                  Adults
                </label>
                <select
                  name="adults"
                  value={searchParams.adults}
                  onChange={handleInputChange}
                  className="w-full h-[46px] px-4 py-3 bg-white border border-white/30 text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-2xl transition-all duration-300 hover:bg-white"
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
                <label className="block text-white mb-2 text-sm font-medium">
                  Children
                </label>
                <select
                  name="children"
                  value={searchParams.children}
                  onChange={handleInputChange}
                  className="w-full h-[46px] px-4 py-3 bg-white border border-white/30 text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-2xl transition-all duration-300 hover:bg-white"
                >
                  {[...Array(9)].map((_, i) => (
                    <option key={i} value={i} className="text-gray-900">
                      {i} Child{i !== 1 ? "ren" : ""}
                    </option>
                  ))}
                </select>
              </div>

              {/* Search Button */}
              <div className="md:col-span-1">
                <label className="block text-white mb-2 text-sm font-medium">
                  &nbsp;
                </label>
                <button
                  onClick={handleSearch}
                  className="w-full h-[46px] bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium
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

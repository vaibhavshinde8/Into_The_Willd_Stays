import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaCompass, FaGlobe } from "react-icons/fa";

import Image1 from "../assets/itw/MG8666.jpg";
import Image2 from "../assets/goa/goa-ggl.jpg";
import Image3 from "../assets/pineandtails/Screenshot47.png";
import Image4 from "../assets/majuli/Property Photo/18PM.jpeg";

const locations = [
  {
    name: "Dhanolti",
    imgUrl: Image1,
    route: "/exploremoreitw",
    description: "Serene mountain retreat nestled in the Himalayas",
    temperature: "15°C",
    elevation: "2,200m",
  },
  {
    name: "Goa",
    imgUrl: Image2,
    route: "/exploremoresas",
    description: "Vibrant coastal paradise with pristine beaches",
    temperature: "28°C",
    elevation: "Sea Level",
  },
  {
    name: "Tehri",
    imgUrl: Image3,
    route: "/exploremorepnt",
    description: "Scenic hill station with breathtaking landscapes",
    temperature: "20°C",
    elevation: "1,600m",
  },
  {
    name: "Majuli",
    imgUrl: Image4,
    route: "/exploremoremnm",
    description: "Unique river island with rich cultural heritage",
    temperature: "25°C",
    elevation: "90m",
  },
];

const LocationSection = () => {
  const navigate = useNavigate();
  const [activeLocation, setActiveLocation] = useState(null);

  const handleLocationHover = (location) => {
    setActiveLocation(location);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-800 py-16 px-4 md:px-16 relative overflow-hidden lg:px-32">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-white/5 opacity-50"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h1
          className="text-4xl md:text-6xl text-white font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Explore
          </span>{" "}
          Extraordinary Destinations
        </motion.h1>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={location.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              className="relative group"
              onMouseEnter={() => handleLocationHover(location)}
              onMouseLeave={() => setActiveLocation(null)}
            >
              <div
                className="cursor-pointer transform transition-all duration-300 
                hover:scale-105 relative overflow-hidden rounded-2xl 
                border-2 border-transparent hover:border-cyan-400"
                onClick={() => navigate(location.route)}
              >
                {/* Location Image */}
                <div className="relative">
                  <img
                    src={location.imgUrl}
                    alt={location.name}
                    className="w-full h-64 object-cover rounded-t-2xl brightness-75 group-hover:brightness-100 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-75"></div>
                </div>

                {/* Location Details */}
                <div className="p-6 bg-white/10 backdrop-blur-xl">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-white">
                      {location.name}
                    </h2>
                    <FaMapMarkerAlt className="text-cyan-400 text-2xl" />
                  </div>
                  <p className="text-gray-300 mb-4">{location.description}</p>

                  <div className="flex justify-between text-white">
                    <div className="flex items-center space-x-2">
                      <FaGlobe className="text-emerald-400" />
                      <span>{location.elevation}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaCompass className="text-cyan-400" />
                      <span>{location.temperature}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Active Location Details */}
        {activeLocation && (
          <motion.div
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 
            bg-white/20 backdrop-blur-xl rounded-2xl p-6 shadow-2xl 
            border border-white/10 max-w-md w-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              {activeLocation.name} Details
            </h3>
            <p className="text-gray-300 mb-4">{activeLocation.description}</p>
            <div className="flex justify-between">
              <div>
                <p className="text-cyan-400 font-semibold">Elevation</p>
                <p className="text-white">{activeLocation.elevation}</p>
              </div>
              <div>
                <p className="text-emerald-400 font-semibold">Temperature</p>
                <p className="text-white">{activeLocation.temperature}</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default LocationSection;

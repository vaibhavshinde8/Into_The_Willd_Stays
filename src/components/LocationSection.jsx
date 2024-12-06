<<<<<<< HEAD
=======
import { useNavigate } from "react-router-dom";
import { useState } from "react";
>>>>>>> 4f5ef2a1208cb73c1e3d93190baa6acc42ce2c08
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
    description: "Serene mountain retreat nestled in the Himalayas",
    temperature: "15°C",
    elevation: "2,200m",
  },
  {
    name: "Goa",
    imgUrl: Image2,
    description: "Vibrant coastal paradise with pristine beaches",
    temperature: "28°C",
    elevation: "Sea Level",
  },
  {
    name: "Tehri",
    imgUrl: Image3,
    description: "Scenic hill station with breathtaking landscapes",
    temperature: "20°C",
    elevation: "1,600m",
  },
  {
    name: "Majuli",
    imgUrl: Image4,
    description: "Unique river island with rich cultural heritage",
    temperature: "25°C",
    elevation: "90m",
  },
];

const LocationSection = () => {
<<<<<<< HEAD
=======
  const navigate = useNavigate();
  const [activeLocation, setActiveLocation] = useState(null);

>>>>>>> 4f5ef2a1208cb73c1e3d93190baa6acc42ce2c08
  return (
    <div className=" text-black bg-gradient-to-br from-blue-100 to-cyan-100 py-16 px-4 md:px-16 relative overflow-hidden lg:px-32">
      <div className="absolute inset-0 backdrop-blur-sm bg-white/30 rounded-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl md:text-6xl text-black font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-gradient-to-r from-cyan-800 to-emerald-800 bg-clip-text text-transparent">
            Explore
          </span>{" "}
          Extraordinary Destinations
        </motion.h1>

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
            >
              <div className="relative w-64 h-64 mx-auto">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/50">
                  <img
                    src={location.imgUrl}
                    alt={location.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-8 left-0 right-0 text-center">
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                      {location.name}
                    </h3>
                  </div>
                </div>

                {/* Hover Details */}
                <div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-72 p-4 bg-white/90 backdrop-blur-md rounded-xl 
                  shadow-xl opacity-0 group-hover:opacity-100 group-hover:-translate-y-20 transition-all duration-300 pointer-events-none"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-xl font-bold text-gray-800">
                      {location.name}
                    </h2>
                    <FaMapMarkerAlt className="text-cyan-800 text-xl" />
                  </div>
                  <p className="text-gray-700 text-sm mb-3">
                    {location.description}
                  </p>

                  <div className="flex justify-between text-gray-700 text-sm">
                    <div className="flex items-center space-x-2">
                      <FaGlobe className="text-emerald-800" />
                      <span>{location.elevation}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaCompass className="text-cyan-800" />
                      <span>{location.temperature}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationSection;

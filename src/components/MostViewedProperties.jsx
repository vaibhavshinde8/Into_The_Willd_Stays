import { useState } from "react";
import { MapPin, Filter, Compass, Layers, Globe } from "lucide-react";
import PropertiesCard from "./PropertiesCard";
import { motion } from "framer-motion";


const MostViewedProperties = () => {
  const [selectedLocation, setSelectedLocation] = useState("All");
  const locationsProp = ["All", "Dhanolti", "Tehri", "Majuli", "Goa"];

  return (
    <section
      id="property-most"
      className="min-h-screen bg-gradient-to-r from-gray-300 via-white to-gray-200  text-black py-16 overflow-hidden lg:px-32"
    >
      <div className="container mx-auto px-4 relative">
        {/* Decorative Overlay Elements */}
        {/* <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10  blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10  blur-3xl"></div>
        </div> */}

        {/* Header Section */}
        <div className="text-center mb-16 relative z-10">
          <motion.h1
            className="text-4xl md:text-6xl text-black font-bold mb-12 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-cyan-800 to-emerald-800 bg-clip-text text-transparent">
              Explore
            </span>{" "}
            Properties
          </motion.h1>
          {/* <p className="text-xl text-gray-800 max-w-2xl mx-auto">
            Uncover extraordinary destinations that redefine travel experiences
          </p> */}
        </div>

        {/* Main Content Container */}
        <div className="relative z-10">
          <div className="max-w-6xl mx-auto  backdrop-blur-xl">
            {/* Header */}
            {/* <div className="flex items-center justify-between p-6 border-b border-gray-700/30">
              <div className="flex items-center space-x-4 text-black">
                <Compass className="w-8 h-8" />
                <span className="text-xl font-semibold">Destinations</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-800">
                <Layers className="w-6 h-6" />
                <span className="text-sm uppercase tracking-wider">
                  Curated Selection
                </span>
              </div>
            </div> */}

            {/* Location Filter */}
            <div className="p-6">
              <div className="flex flex-wrap gap-3 justify-center mb-8">
                {locationsProp.map((location) => (
                  <button
                    key={location}
                    className={`
                      px-6 py-3  text-sm  uppercase tracking-wider transition-all duration-300 
                      ${
                        selectedLocation === location
                          ? "bg-[#0F2642] text-white shadow-xl font-extrabold underline underline-offset-2 transform -translate-y-1"
                          : "bg-gray-700/30 text-gray-800 hover:bg-gray-700/50"
                      }
                    `}
                    onClick={() => setSelectedLocation(location)}
                  >
                    {location}
                  </button>
                ))}
              </div>

              {/* Properties Card Section */}
              <div className="mt-8">
                <PropertiesCard selectedLocation={selectedLocation} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MostViewedProperties;

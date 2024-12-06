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
      className="min-h-screen bg-gradient-to-br from-blue-100 to-cyan-100 text-black py-16 overflow-hidden lg:px-32 relative"
    >
      <div className="absolute inset-0 backdrop-blur-sm bg-white/30 rounded-3xl"></div>

      <div className="container mx-auto relative">
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
        </div>

        {/* Main Content Container */}
        <div className="relative z-10">
          <div className=" mx-auto ">
            {/* Location Filter */}
            <div className="p-8">
              <div className="flex flex-wrap gap-4 justify-center mb-8">
                {locationsProp.map((location) => (
                  <motion.button
                    key={location}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`
                      px-8 py-3 text-sm font-semibold uppercase tracking-wider transition-all duration-300 
                      rounded-full shadow-md hover:shadow-xl
                      ${
                        selectedLocation === location
                          ? "bg-[#0F2642] text-white font-extrabold transform -translate-y-1 border-2 border-white/50"
                          : "bg-white/90 text-gray-800 hover:bg-[#0F2642] hover:text-white border border-gray-200"
                      }
                    `}
                    onClick={() => setSelectedLocation(location)}
                  >
                    {location}
                  </motion.button>
                ))}
              </div>

              {/* Properties Card Section */}
              <div className="mt-12 bg-white/50 p-6 rounded-2xl">
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

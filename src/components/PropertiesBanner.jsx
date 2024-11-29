import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Layers, MapPin, Compass, ArrowRight } from "lucide-react";
import Image1 from "../assets/tourbanner.jpg";

const PropertiesBanner = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.pageYOffset;
        parallaxRef.current.style.transform = `translateY(${
          scrollPosition * 0.5
        }px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-gray-300 via-white to-gray-200 overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${Image1})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          filter: "brightness(0.7)",
          transform: "scale(1.1)",
        }}
      />

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/60 to-teal-700/60 z-10"></div> */}

      {/* Content Container */}
      <div className="relative z-20 min-h-screen flex items-center">
        <div className="container mx-auto px-4 lg:px-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-white"
            >
              <div className="flex items-center space-x-4 mb-4">
                <Layers className="w-12 h-12 text-emerald-800" />
                <h1 className="text-5xl font-bold text-black">
                  Into The Wild <br />
                  Stays
                </h1>
              </div>

              <p className="text-xl text-gray-800 max-w-xl leading-relaxed">
                Embark on a journey where luxury meets wilderness. Discover
                extraordinary destinations that promise unforgettable
                experiences and breathtaking landscapes.
              </p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <a
                  href="/properties"
                  className="flex items-center space-x-3 px-8 py-4 
                    bg-emerald-800 text-white 
                    
                    shadow-lg 
                    hover:bg-emerald9600 
                    transition-all 
                    duration-300 
                    group"
                >
                  <span>Explore Properties</span>
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </motion.div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden md:block"
            >
              <div className=" overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <img
                  src={Image1}
                  alt="Into The Wild Stays"
                  className="w-full h-[500px] object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-10 w-32 h-32 bg-emerald-500/30 blur-2xl"
      />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-10 right-10 w-48 h-48 bg-teal-500/30 blur-2xl"
      />
    </div>
  );
};

export default PropertiesBanner;

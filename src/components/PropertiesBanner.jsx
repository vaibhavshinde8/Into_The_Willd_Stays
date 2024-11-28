import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Layers, MapPin, Compass } from "lucide-react";
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
    <div className="relative min-h-[80vh] bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          ref={parallaxRef}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            // backgroundImage: `url(${Image1})`,
            filter: "brightness(0.6) contrast(1.2)",
            backgroundAttachment: "fixed",
          }}
        />
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] opacity-70 mix-blend-overlay"></div>

        {/* Animated Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0,
              }}
              animate={{
                x: [
                  Math.random() * window.innerWidth,
                  Math.random() * window.innerWidth,
                  Math.random() * window.innerWidth,
                ],
                y: [
                  Math.random() * window.innerHeight,
                  Math.random() * window.innerHeight,
                  Math.random() * window.innerHeight,
                ],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="absolute w-1 h-1 rounded-full bg-white/30"
            />
          ))}
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-center min-h-[80vh] px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full bg-black/30 backdrop-blur-xl rounded-3xl border border-white/10 p-12 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <Layers className="w-12 h-12 text-cyan-400" />
                  <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                    Into The Wild Stays
                  </h1>
                </div>
                <p className="text-xl text-gray-300 mb-6">
                  Discover extraordinary destinations where nature meets luxury.
                  Every stay is an adventure waiting to unfold.
                </p>
              </motion.div>

              {/* CTA Button with Advanced Styling */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <a
                  href="/properties"
                  className="flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 group"
                >
                  <Compass className="w-6 h-6 transform group-hover:rotate-45 transition-transform" />
                  <span>Explore Properties</span>
                  <MapPin className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </motion.div>
            </div>

            {/* Visual Decoration */}
            <div className="hidden md:flex items-center justify-center">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="w-64 h-64 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full blur-2xl opacity-30"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesBanner;

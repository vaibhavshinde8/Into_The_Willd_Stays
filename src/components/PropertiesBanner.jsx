import { useRef, useEffect } from "react";
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
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden lg:px-32 rounded-3xl">
      {/* Background Image with Parallax Effect */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 z-0 rounded-3xl"
        style={{
          backgroundImage: `url(${Image1})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          filter: "brightness(0.8)",
          transform: "scale(1.1)",
        }}
      />

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-[#0F2642]/70 to-[#0F2642]/50 z-10 rounded-3xl backdrop-blur-sm"></div> */}

      {/* Content Container */}
      <div className="relative z-20 min-h-screen flex items-center">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 text-black backdrop-blur-md bg-white/10 p-8 rounded-3xl border border-white/20"
            >
              <div className="flex items-center space-x-4 mb-4">
                <Layers className="w-14 h-14 text-black" />
                <h1 className="text-5xl md:text-6xl font-bold text-black">
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
                    bg-[#0F2642] text-white 
                    rounded-full
                    shadow-lg 
                    hover:bg-[#0F2642]/90
                    transition-all 
                    duration-300 
                    group
                    border border-white/20"
                >
                  <span className="font-semibold">Explore Properties</span>
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
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
              <div className="rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 border-4 border-white/30">
                <img
                  src={Image1}
                  alt="Into The Wild Stays"
                  className="w-full h-[600px] object-cover hover:scale-110 transition-transform duration-500"
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
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-10 w-40 h-40 bg-[#0F2642]/30 blur-3xl rounded-full"
      />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-10 right-10 w-56 h-56 bg-[#0F2642]/30 blur-3xl rounded-full"
      />
    </div>
  );
};

export default PropertiesBanner;

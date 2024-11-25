import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Quote } from "lucide-react";
import guestExp from "../assets/Video-14~2.mp4";

const GuestExperience = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.15;
    }
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Story Section */}
          <motion.div
            className="bg-gradient-to-br from-[#091F3C] to-[#43A181] rounded-3xl p-8 shadow-2xl"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center mb-6">
              <Quote className="text-teal-300 mr-4" size={48} />
              <h1 className="text-4xl font-bold text-white tracking-tight">
                Our <span className="text-teal-300">Story</span>
              </h1>
            </div>
            <p className="text-lg text-gray-100 leading-relaxed space-y-4">
              Welcome to Into the Wild Stays, where we offer more than just
              accommodations. We create memorable escapes in nature's embrace.
              Nestled in serene, offbeat locations, our boutique homestays and
              cottages provide the perfect blend of comfort, tranquility, and
              adventure.
            </p>
            <p className="text-lg text-gray-100 leading-relaxed mt-4">
              Our philosophy revolves around crafting personalized experiences
              that connect guests with the beauty of the wilderness. With
              heartfelt hospitality and thoughtful service, we ensure every stay
              feels like a home away from home.
            </p>
            <div className="mt-6 border-t border-white/20 pt-4">
              <span className="text-sm italic text-teal-200">
                Come, escape the chaos, and immerse yourself in the
                unforgettable charm of Into the Wild Stays!
              </span>
            </div>
          </motion.div>

          {/* Video Section */}
          <motion.div
            className="relative group overflow-hidden rounded-3xl shadow-2xl"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <video
              ref={videoRef}
              className="w-full h-[70vh] object-cover transition-transform duration-300 group-hover:scale-105"
              src={guestExp}
              controls
              autoPlay
              muted
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="bg-white/30 backdrop-blur-sm p-4 rounded-full">
                <Play className="text-white" size={48} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default GuestExperience;

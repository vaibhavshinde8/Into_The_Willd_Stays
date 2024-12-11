import { useEffect, useRef, useState } from "react";
import { Play, Pause, ChevronRight, ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";

import guestExp1 from "../assets/Video-14~2.mp4";
import guestExp2 from "../assets/guest-exp.mp4";
import guestExp3 from "../assets/Video-822~2.mp4";

const GuestExperience = () => {
  const videoRefs = useRef([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const videos = [
    { src: guestExp1, title: "Wilderness Retreat" },
    { src: guestExp3, title: "Serene Landscapes" },
    { src: guestExp2, title: "Adventure Moments" },
  ];

  const handleTimeUpdate = (e) => {
    const progress = (e.target.currentTime / e.target.duration) * 100;
    setProgress(progress);
  };

  useEffect(() => {
    videoRefs.current.forEach((videoRef) => {
      if (videoRef) {
        videoRef.volume = 0.15;
        videoRef.addEventListener("timeupdate", handleTimeUpdate);
      }
    });

    return () => {
      videoRefs.current.forEach((videoRef) => {
        if (videoRef) {
          videoRef.removeEventListener("timeupdate", handleTimeUpdate);
        }
      });
    };
  }, []);

  const togglePlay = () => {
    const currentVideo = videoRefs.current[currentVideoIndex];
    if (currentVideo) {
      if (isPlaying) currentVideo.pause();
      else currentVideo.play();
      setIsPlaying(!isPlaying);
    }
  };

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
    setIsPlaying(false);
    setProgress(0);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length);
    setIsPlaying(false);
    setProgress(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-cyan-50 py-24 px-4 md:px-16 relative overflow-hidden lg:px-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-30" />

      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-20"
      >
        <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
          Our <span className="text-gray-800">Story</span>
        </span>
      </motion.h1>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-stretch">
        {/* Content Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-xl p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50"
        >
          <div className="space-y-10 text-gray-800 h-full flex flex-col justify-between">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Welcome to Into the Wild Stays
              </h2>
              <p className="text-xl leading-relaxed text-gray-600">
                We offer more than just accommodations. We create memorable
                escapes in nature&apos;s embrace. Nestled in serene, offbeat
                locations, our boutique homestays and cottages provide the
                perfect blend of comfort, tranquility, and adventure.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-xl leading-relaxed text-gray-600">
                Our philosophy revolves around crafting personalized experiences
                that connect guests with the beauty of the wilderness. With
                heartfelt hospitality and thoughtful service, we ensure every
                stay feels like a home away from home.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-xl leading-relaxed font-medium text-teal-600 italic">
                Come, escape the chaos, and immerse yourself in the
                unforgettable charm of Into the Wild Stays!
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Video Player Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative w-full h-[600px] md:h-[700px] rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group"
        >
          <div className="h-full">
            <video
              ref={(el) => {
                videoRefs.current[currentVideoIndex] = el;
              }}
              src={videos[currentVideoIndex].src}
              className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
              onEnded={nextVideo}
            />

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-2 bg-black/30 backdrop-blur-sm">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
                className="h-full bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400"
              />
            </div>

            {/* Video Controls */}
            <div className="absolute inset-0 flex items-center justify-between p-8 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevVideo}
                className="bg-white/90 text-gray-800 p-4 rounded-full hover:bg-white transition-all duration-300 shadow-lg"
              >
                <ChevronLeft size={24} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={togglePlay}
                className="bg-white/90 text-gray-800 p-6 rounded-full hover:bg-white transition-all duration-300 shadow-lg"
              >
                {isPlaying ? (
                  <Pause size={36} className="text-teal-600" />
                ) : (
                  <Play size={36} className="text-teal-600 ml-1" />
                )}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextVideo}
                className="bg-white/90 text-gray-800 p-4 rounded-full hover:bg-white transition-all duration-300 shadow-lg"
              >
                <ChevronRight size={24} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GuestExperience;

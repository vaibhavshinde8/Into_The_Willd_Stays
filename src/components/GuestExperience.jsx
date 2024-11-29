import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  ChevronRight,
  ChevronLeft,
  Compass,
  MapPin,
  Wifi,
} from "lucide-react";

// Import your videos
import guestExp1 from "../assets/Video-14~2.mp4";
import guestExp2 from "../assets/guest-exp.mp4";
import guestExp3 from "../assets/Video-822~2.mp4";

const GuestExperience = () => {
  const videoRefs = useRef([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  // Array of video sources
  const videos = [
    { src: guestExp1, title: "Wilderness Retreat" },
    { src: guestExp3, title: "Serene Landscapes" },
    { src: guestExp2, title: "Adventure Moments" },
  ];

  // Progress tracking
  const handleTimeUpdate = (e) => {
    const progress = (e.target.currentTime / e.target.duration) * 100;
    setProgress(progress);
  };

  // Set initial volume and event listeners
  useEffect(() => {
    videoRefs.current.forEach((videoRef, index) => {
      if (videoRef) {
        videoRef.volume = 0.15;
        videoRef.addEventListener("timeupdate", handleTimeUpdate);
        videoRef.pause();
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

  // Handle video play/pause
  const togglePlay = () => {
    const currentVideo = videoRefs.current[currentVideoIndex];
    if (currentVideo) {
      if (isPlaying) {
        currentVideo.pause();
      } else {
        currentVideo.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Navigate to next video
  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
    setIsPlaying(false);
    setProgress(0);
  };

  // Navigate to previous video
  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length);
    setIsPlaying(false);
    setProgress(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white overflow-hidden lg:px-32">
      {/* Futuristic Story Section and Video Section Side by Side */}
      <div className="container mx-auto px-4 py-16 grid lg:grid-cols-2 gap-8">
        {/* Futuristic Story Section */}
        <div className="max-w-5xl mx-auto bg-gray-800/50 backdrop-blur-xl  rounded-3xl overflow-hidden shadow-2xl border border-gray-700/50">
          <div className="relative bg-gradient-to-r from-cyan-600/30  to-blue-600/30 p-12 text-center">
            <div className="absolute top-4 left-4 text-cyan-400 opacity-50">
              <Compass className="w-12 h-12" />
            </div>
            <div className="absolute bottom-4 right-4 text-cyan-400 opacity-50">
              <MapPin className="w-12 h-12" />
            </div>

            <h2 className="text-5xl font-semibold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
              Our Story
            </h2>

            <div className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-200 space-y-6">
              <p className="relative before:absolute before:-left-6 before:top-1 before:w-4 before:h-4 before:bg-cyan-500 before:rounded-full">
                Welcome to Into the Wild Stays, where we offer more than just
                accommodations. We create memorable escapes in nature's embrace.
                Nestled in serene, offbeat locations, our boutique homestays and
                cottages provide the perfect blend of comfort, tranquility, and
                adventure.
              </p>
              <p className="relative before:absolute before:-left-6 before:top-1 before:w-4 before:h-4 before:bg-blue-500 before:rounded-full">
                Our philosophy revolves around crafting personalized experiences
                that connect guests with the beauty of the wilderness. With
                heartfelt hospitality and thoughtful service, we ensure every
                stay feels like a home away from home.
              </p>
              <p className="relative before:absolute before:-left-6 before:top-1 before:w-4 before:h-4 before:bg-cyan-500 before:rounded-full">
                Come, escape the chaos, and immerse yourself in the
                unforgettable charm of Into the Wild Stays!
              </p>
            </div>
          </div>
        </div>

        {/* Futuristic Video Section */}
        <section className="max-w-6xl mx-auto px-4 relative p-8">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl border-2 border-cyan-800/30">
            <AnimatePresence mode="wait">
              {videos.map(
                (video, index) =>
                  index === currentVideoIndex && (
                    <motion.div
                      key={video.src}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5 }}
                      className="relative"
                    >
                      <video
                        ref={(el) => {
                          videoRefs.current[index] = el;
                        }}
                        src={video.src}
                        className="w-full h-[70vh] object-cover"
                        onEnded={nextVideo}
                      />

                      {/* Futuristic Progress Bar */}
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-700">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-500 to-blue-600"
                          style={{ width: `${progress}%` }}
                        />
                      </div>

                      {/* Video Title Overlay */}
                      {/* <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center space-x-2">
                        <Wifi className="w-5 h-5 text-cyan-400" />
                        <span className="text-white font-medium">
                          {video.title}
                        </span>
                      </div> */}
                    </motion.div>
                  )
              )}
            </AnimatePresence>

            {/* Futuristic Video Controls */}
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <button
                onClick={prevVideo}
                className="bg-black/40 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/60 transition group"
              >
                <ChevronLeft
                  size={24}
                  className="group-hover:scale-110 transition"
                />
              </button>
              <button
                onClick={togglePlay}
                className="bg-black/40 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/60 transition group"
              >
                {isPlaying ? (
                  <Pause
                    size={24}
                    className="text-cyan-400 group-hover:scale-110 transition"
                  />
                ) : (
                  <Play
                    size={24}
                    className="text-cyan-400 group-hover:scale-110 transition"
                  />
                )}
              </button>
              <button
                onClick={nextVideo}
                className="bg-black/40 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/60 transition group"
              >
                <ChevronRight
                  size={24}
                  className="group-hover:scale-110 transition"
                />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GuestExperience;

import  { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Play, Pause, ChevronRight, ChevronLeft } from "lucide-react";

import guestExp1 from "../assets/Video-14~2.mp4";
import guestExp2 from "../assets/guest-exp.mp4";
import guestExp3 from "../assets/Video-822~2.mp4";

const GuestExperience = () => {
  const containerRef = useRef(null);
  const videoRefs = useRef([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0.1, 0.5], [0.6, 1.0]);
  const height = useTransform(scrollYProgress, [0, 0.5], ["10vh", "70vh"]);

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
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-r from-gray-300 via-white to-gray-200 p-4 lg:px-32 "
    >
      <motion.h1
        className="text-4xl md:text-6xl text-black font-bold  text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="bg-gradient-to-r from-cyan-800 to-emerald-800 bg-clip-text text-transparent">
          Our
        </span>{" "}
        Story
      </motion.h1>
      <div className="container mx-auto px-4 py-16 grid lg:grid-cols-2 gap-8">
        <motion.div
          style={{ scale, height }}
          className="relative overflow-hidden rounded-lg shadow-2xl border-2 border-cyan-800/30"
        >
          <AnimatePresence mode="wait">
            {videos.map(
              (video, index) =>
                index === currentVideoIndex && (
                  <motion.div
                    key={video.src}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="relative w-full h-full"
                  >
                    <video
                      ref={(el) => {
                        videoRefs.current[index] = el;
                      }}
                      src={video.src}
                      className="w-full h-full object-cover"
                      onEnded={nextVideo}
                    />

                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-700">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-600"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>

          <div className="absolute inset-0 flex items-center justify-between p-4">
            <button
              onClick={prevVideo}
              className="bg-black/40 backdrop-blur-sm text-black p-3 rounded-full hover:bg-black/60 transition group"
            >
              <ChevronLeft
                size={24}
                className="group-hover:scale-110 transition"
              />
            </button>
            <button
              onClick={togglePlay}
              className="bg-black/40 backdrop-blur-sm text-black p-3 rounded-full hover:bg-black/60 transition group"
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
              className="bg-black/40 backdrop-blur-sm text-black p-3 rounded-full hover:bg-black/60 transition group"
            >
              <ChevronRight
                size={24}
                className="group-hover:scale-110 transition"
              />
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative px-4 lg:px-8  h-[70vh] p-6 rounded-lg">
            <div className="max-w-4xl mx-auto text-lg leading-relaxed bg-amber-50 p-2 lg:p-8 rounded-lg  text-gray-800 space-y-6">
              <p className="relative">
                {/* <span className="font-extrabold text-2xl text-emerald-800">
                  &gt;{" "}
                </span> */}
                <span className="font-light">
                  <span className="font-bold text-3xl"> Welcome</span> to{" "}
                  <span className="text-emerald-900 text-2xl">Into the Wild Stays</span>, where we offer more than
                  just accommodations. We create memorable escapes in nature's
                  embrace. Nestled in serene, offbeat locations, our boutique
                  homestays and cottages provide the perfect blend of comfort,
                  tranquility, and adventure.
                </span>
              </p>
              <p className="relative">
                {/* <span className="font-extrabold text-2xl text-emerald-800">
                  &gt;{" "}
                </span> */}

                <span className="font-light">
                  Our philosophy revolves around crafting personalized
                  experiences that connect guests with the beauty of the
                  wilderness. With heartfelt hospitality and thoughtful service,
                  we ensure every stay feels like a home away from home.
                </span>
              </p>
              <p className="relative">
                {/* <span className="font-extrabold text-2xl text-emerald-800">
                  &gt;{" "}
                </span> */}

                <span className="font-light">
                  Come, escape the chaos, and immerse yourself in the
                  unforgettable charm of Into the Wild Stays!
                </span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GuestExperience;

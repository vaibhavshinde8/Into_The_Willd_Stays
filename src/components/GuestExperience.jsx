import  { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Quote, ChevronRight, ChevronLeft } from "lucide-react";

// Import your videos
import guestExp1 from "../assets/Video-14~2.mp4";
import guestExp2 from "../assets/guest-exp.mp4"; // Add your second video
import guestExp3 from "../assets/Video-822~2.mp4"; // Add your third video


const GuestExperience = () => {
  const videoRefs = useRef([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Array of video sources
  const videos = [
    { src: guestExp1, title: "Wilderness Retreat" },
    { src: guestExp3, title: "Serene Landscapes" },
    { src: guestExp2, title: "Adventure Moments" },
  ];

  // Set initial volume when component mounts
  useEffect(() => {
    videoRefs.current.forEach((videoRef) => {
      if (videoRef) {
        videoRef.volume = 0.15;
        videoRef.pause();
      }
    });
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
  };

  // Navigate to previous video
  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length);
    setIsPlaying(false);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Story Section */}
      <section className="mb-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
        <div className="max-w-3xl mx-auto text-lg leading-relaxed">
          <p className="mb-4">
            Welcome to Into the Wild Stays, where we offer more than just
            accommodations. We create memorable escapes in nature's embrace.
            Nestled in serene, offbeat locations, our boutique homestays and
            cottages provide the perfect blend of comfort, tranquility, and
            adventure.
          </p>
          <p className="mb-4">
            Our philosophy revolves around crafting personalized experiences
            that connect guests with the beauty of the wilderness. With
            heartfelt hospitality and thoughtful service, we ensure every stay
            feels like a home away from home.
          </p>
          <p>
            Come, escape the chaos, and immerse yourself in the unforgettable
            charm of Into the Wild Stays!
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="relative max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <AnimatePresence mode="wait">
            {videos.map(
              (video, index) =>
                index === currentVideoIndex && (
                  <motion.div
                    key={video.src}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    <video
                      ref={(el) => {
                        videoRefs.current[index] = el;
                      }}
                      src={video.src}
                      className="w-full h-[70vh]"
                      onEnded={nextVideo}
                    />
                    <div className="absolute  bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded">
                      {video.title}
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>

          {/* Video Controls */}
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <button
              onClick={prevVideo}
              className="bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={togglePlay}
              className="bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition"
            >
              {isPlaying ? (
                <Quote size={24} className="fill-white" />
              ) : (
                <Play size={24} className="fill-white" />
              )}
            </button>
            <button
              onClick={nextVideo}
              className="bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GuestExperience;

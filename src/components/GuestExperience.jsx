import { useEffect, useRef, useState } from "react";
import { Play, Pause, ChevronRight, ChevronLeft } from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-r from-gray-300 via-white to-gray-200 py-12 px-4 md:px-8 lg:px-16">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12">
        <span className="bg-gradient-to-r from-cyan-800 to-emerald-800 bg-clip-text text-transparent">
          Our <span className="text-black">Story</span>
        </span>
      </h1>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-stretch">
        {/* Content Section */}
        <div className="bg-white/90 p-8 md:p-10 rounded-3xl shadow-sm backdrop-blur-sm border border-gray-100 hover:shadow-md transition-all duration-300">
          <div className="space-y-8 text-gray-800 h-full flex flex-col justify-between">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-900 to-emerald-700 bg-clip-text text-transparent mb-6">
                Welcome <span className="text-2xl text-black">to</span> Into the
                Wild Stays
              </h2>
              <p className="text-lg leading-relaxed">
                We offer more than just accommodations. We create memorable
                escapes in nature&apos;s embrace. Nestled in serene, offbeat
                locations, our boutique homestays and cottages provide the
                perfect blend of comfort, tranquility, and adventure.
              </p>
            </div>

            <div>
              <p className="text-lg leading-relaxed">
                Our philosophy revolves around crafting personalized experiences
                that connect guests with the beauty of the wilderness. With
                heartfelt hospitality and thoughtful service, we ensure every
                stay feels like a home away from home.
              </p>
            </div>

            <div>
              <p className="text-lg leading-relaxed font-medium text-emerald-800 italic">
                Come, escape the chaos, and immerse yourself in the
                unforgettable charm of Into the Wild Stays!
              </p>
            </div>
          </div>
        </div>

        {/* Video Player Section */}
        <div className="relative w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(8,_112,_184,_0.15)] border-2 border-cyan-800/20 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.25)] transition-all duration-300">
          <div className="h-full">
            <video
              ref={(el) => {
                videoRefs.current[currentVideoIndex] = el;
              }}
              src={videos[currentVideoIndex].src}
              className="w-full h-full object-cover"
              onEnded={nextVideo}
            />

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-2 bg-black/50 backdrop-blur-sm">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-500"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Video Controls */}
            <div className="absolute inset-0 flex items-center justify-between p-6 bg-gradient-to-t from-black/40 to-transparent">
              <button
                onClick={prevVideo}
                className="bg-white/95 text-gray-800 p-4 rounded-full hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={togglePlay}
                className="bg-white/95 text-gray-800 p-5 rounded-full hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg"
              >
                {isPlaying ? (
                  <Pause size={32} className="text-cyan-600" />
                ) : (
                  <Play size={32} className="text-cyan-600" />
                )}
              </button>

              <button
                onClick={nextVideo}
                className="bg-white/95 text-gray-800 p-4 rounded-full hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestExperience;

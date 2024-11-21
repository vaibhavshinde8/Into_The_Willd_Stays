import { useEffect, useRef } from "react";
import guestExp from "../assets/guest-exp.mp4";

const GuestExperience = () => {
  const videoRef = useRef(null)

  useEffect(() => {
    videoRef ? videoRef.current.volume = 0.15 : ''
  }, [])

  return (
    <div className="bg-white min-h-[100vh] py-4 lg:px-32">
      <div className="my-12 mx-4">
        <div className="flex flex-col-reverse lg:flex-row gap-8 justify-around items-center text-center">
          <div className="flex flex-col gap-6 p-8 bg-gradient-to-r from-[#091F3C] to-[#43A181] rounded-2xl shadow-xl lg:w-[50vw]  text-white">
            <h1 className="text-4xl font-bold tracking-tight">
              Our <span className="text-[#43A181]">Story</span>
            </h1>
            <h4 className="lg:text-lg text-gray-100 leading-relaxed">
              Welcome to Into the Wild Stays, At Into the Wild Stays, we strive
              to offer more than just accommodations; we create memorable
              escapes in nature’s embrace. Nestled in serene, offbeat locations,
              our boutique homestays and cottages provide the perfect blend of
              comfort, tranquility, and adventure. Our philosophy revolves
              around crafting personalized experiences that connect our guests
              with the beauty of the wilderness. With heartfelt hospitality and
              thoughtful service, we ensure every stay feels like a home away
              from home. Come, escape the chaos, and immerse yourself in the
              unforgettable charm of *Into the Wild Stays!
            </h4>
          </div>
          <div className="shadow-2xl rounded-xl overflow-hidden">
            <video
              ref={videoRef}
              className="lg:w-[550px] lg:h-[500px] h-[380px] w-[390px] object-cover"
              src={guestExp}
              controls
              autoPlay
              muted
              volume={0.3}
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestExperience;

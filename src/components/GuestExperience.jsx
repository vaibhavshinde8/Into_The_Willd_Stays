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
          <div className="flex flex-col gap-6 p-8 bg-gradient-to-r from-[#091F3C] to-[#43A181] rounded-2xl shadow-xl lg:w-[550px] lg:h-[380px] text-white">
            <h1 className="text-4xl font-bold tracking-tight">
              Guest <span className="text-[#43A181]">Experience</span>
            </h1>
            <h4 className="lg:text-lg text-gray-100 leading-relaxed">
              At Sundays Forever, our primary goal is to provide our guests with
              an exceptional experience that they will cherish forever. We
              understand that luxury is not just about lavish amenities but also
              about the feeling of being pampered and cared for. Our team is
              dedicated to tailoring every aspect of their stay, including
              personalized services and bespoke experiences. We pride ourselves
              on creating memories that last a lifetime.
            </h4>
          </div>
          <div className="shadow-2xl rounded-xl overflow-hidden">
            <video ref={videoRef} className="lg:w-[550px] lg:h-[500px] h-[380px] w-[390px] object-cover" src={guestExp} controls autoPlay muted volume={.3}></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestExperience;

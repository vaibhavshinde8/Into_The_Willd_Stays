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
            Into The Wilds Stays was the perfect escape from city life. The views of the majestic Himalayas right from our room were breathtaking. The staff was incredibly warm and attentive, making us feel at home. We loved the bonfire under the starlit sky, surrounded by the sounds of nature. If you’re looking for tranquility and an authentic Himalayan experience, this place is a must-visit!
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

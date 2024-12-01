import { motion } from "framer-motion";

import Image2 from "../assets/itw_rep/itwrep_page-0008.jpg";

import ImageA from "../assets/team/AkashCoowner.jpg";
import ImageV from "../assets/team/VikkyCoowner.jpg";
import ImageD from "../assets/team/DeepakRanaMountainGuide.jpg";
import ImageVa from "../assets/team/VasuMusicArtist.jpg";
import ImageVe from "../assets/team/VeerOutdoorinstructor.jpg";
import Imageanshi from "../assets/team/AnshiArt&Craftinstructor.jpg";
import Imagearvind from "../assets/team/ArvindSeniorMountaineer.jpg";
import Imageastha from "../assets/team/AsthaDovalCyclist.jpg";
import Imageraghav from "../assets/team/RaghavCycling Instructor.jpg";
import Imagesonam from "../assets/team/SonamRanaKayakinstructor.jpg";
import Imageunk from "../assets/team/unk.jpg";

import Image3 from "../assets/itw_rep/itwrep_page-0009.jpg";
import Image4 from "../assets/itw_rep/itwrep_page-0010.jpg";
import Image5 from "../assets/itw_rep/itwrep_page-0011.jpg";
import Image6 from "../assets/itw_rep/itwrep_page-0012.jpg";
import Image7 from "../assets/itw_rep/itwrep_page-0013.jpg";

const AboutUs = () => {
  return (
    <div className="min-h-[100vh]">
      <div className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.trvl-media.com/lodging/109000000/108380000/108370800/108370765/28b3dc50.jpg?impolicy=resizecrop&rw=1200&ra=fit')] bg-cover bg-center bg-fixed transform scale-105">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 to-gray-900/60" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative h-full max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-center"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent">
              About Us
            </span>
            {/* <br />
            Us */}
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mb-8">
            Meet the Experts Turning Journeys into Joys.
          </p>
        </motion.div>
      </div>

      <div className="bg-white min-h-[100vh] py-4 lg:px-32">
        <div className="my-12 mx-4">
          <div className="flex flex-col-reverse lg:flex-row gap-8 justify-around items-center text-center">
            <div className="flex flex-col gap-6 p-8 bg-gradient-to-r from-[#091F3C] to-[#43A181] shadow-xl lg:w-[50vw] text-white">
              <h1 className="text-4xl font-bold tracking-tight">
                Our <span className="text-[#43A181]">Story</span>
              </h1>
              <p className="lg:text-lg text-gray-100 leading-relaxed">
                Welcome to Into the Wild Stays, At Into the Wild Stays, we
                strive to offer more than just accommodations; we create
                memorable escapes in nature's embrace. Nestled in serene,
                offbeat locations, our boutique homestays and cottages provide
                the perfect blend of comfort, tranquility, and adventure. Our
                philosophy revolves around crafting personalized experiences
                that connect our guests with the beauty of the wilderness. With
                heartfelt hospitality and thoughtful service, we ensure every
                stay feels like a home away from home. Come, escape the chaos,
                and immerse yourself in the unforgettable charm of *Into the
                Wild Stays!
              </p>
            </div>

            <div className="shadow-2xl overflow-hidden">
              <img
                src={Image2}
                alt="Founder"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-8 lg:px-32">
       <motion.h1
          className="text-4xl md:text-6xl text-black font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-gradient-to-r from-cyan-800 to-emerald-800 bg-clip-text text-transparent">
            Why
          </span>{" "}
          Our Homestay?
        </motion.h1>
        {/* <h1 className="text-3xl font-bold my-4">Why Choose Us</h1> */}
        <div className="flex flex-wrap justify-around gap-6 mt-6">
          {[
            {
              title: "Live Amidst Nature",
              description:
                "Experience nature in its fullest glory to refresh yourself.",
              icon: (
                <svg
                  className="w-10 h-10 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z" />
                </svg>
              ),
            },
            {
              title: "Heritage Homestay",
              description:
                "Experience the charm of Kerala heritage preserved through the ages.",
              icon: (
                <svg
                  className="w-10 h-10 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 12h4v8h8v-8h4L12 2z" />
                </svg>
              ),
            },
            {
              title: "Family Friendly",
              description:
                "The calm and comfortable environment will make your family feel at home.",
              icon: (
                <svg
                  className="w-10 h-10 text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 4a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                </svg>
              ),
            },
          ].map((reason, index) => (
            <div
              key={index}
              className="max-w-xs p-4 bg-gray-800 shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="flex justify-center mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold text-teal-200">
                {reason.title}
              </h3>
              <p className="text-gray-300 mt-2">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#1b1b1b] py-12 shadow-xl">
        <h2 className="text-center text-teal-400 text-lg font-semibold">
          Meet Our Team
        </h2>
        <h1 className="text-center text-3xl font-bold text-white mb-8">
          Our Team
        </h1>
        <div className="flex flex-wrap justify-center gap-8 lg:px-48">
          {[
            {
              name: "Aakash ",
              role: " Co-Owner",
              img: ImageA,
            },
            {
              name: "Vikky",
              role: "Co-Owner",
              img: ImageV,
            },
            {
              name: "Deepak Rana",
              role: "Mountain Guide ",
              img: ImageD,
            },
            {
              name: "Vasu",
              role: "Music Artist",
              img: ImageVa,
            },
            {
              name: "veer",
              role: "Outdoor Instructor",
              img: ImageVe,
            },
            {
              name: "Anshi ",
              role: " Art & Craft Instructor",
              img: Imageanshi,
            },
            {
              name: "Arvind",
              role: "Senior Mountaineer",
              img: Imagearvind,
            },
            {
              name: "Astha Doval",
              role: "Cyclist ",
              img: Imageastha,
            },
            {
              name: "Raghav",
              role: "Cycling Instructor",
              img: Imageraghav,
            },
            {
              name: "Sonam Rana",
              role: "Kayak Instructor",
              img: Imagesonam,
            },
            {
              name: "unk",
              role: "unk",
              img: Imageunk,
            },
          ].map((member, index) => (
            <div
              key={index}
              className="text-center mb-8 p-4 bg-[#111111] shadow-lg"
            >
              <div className="w-48 h-48 bg-gray-300 mb-4 mx-auto overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-white">
                {member.name}
              </h3>
              <p className="text-teal-400">{member.role}</p>
            </div>
          ))}
        </div>
        <div className="shadow-2xl overflow-hidden lg:p-8 bg-white">
          <img
            src={Image3}
            alt="Founder"
            className="w-full h-full object-cover lg:p-8 bg-white"
          />
        </div>
        <div className="shadow-2xl overflow-hidden lg:p-8 bg-white">
          <img
            src={Image4}
            alt="Founder"
            className="w-full h-full object-cover lg:p-8 bg-white"
          />
        </div>
        <div className="shadow-2xl overflow-hidden lg:p-8 bg-white">
          <img
            src={Image5}
            alt="Founder"
            className="w-full h-full object-cover lg:p-8 bg-white"
          />
        </div>
        <div className="shadow-2xl overflow-hidden lg:p-8 bg-white">
          <img
            src={Image6}
            alt="Founder"
            className="w-full h-full object-cover lg:p-8 bg-white"
          />
        </div>
        <div className="shadow-2xl overflow-hidden lg:p-8 bg-white">
          <img
            src={Image7}
            alt="Founder"
            className="w-full h-full object-cover lg:p-8 bg-white"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

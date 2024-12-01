import { useState } from "react";
import { Quote, Globe, Star, Link as LinkIcon } from "lucide-react";
import Image2 from "../assets/guestdiary/img-1.jpeg";
import Image3 from "../assets/guestdiary/img-2.jpg";
import Image4 from "../assets/guestdiary/img-3.jpeg";
import { motion } from "framer-motion";


const testData = [
  {
    type: "review",
    name: "Tushar Bhagwane",
    review:
      "I had a fantastic stay at this hotel! The rooms were spacious, clean, and well-equipped. The staff were incredibly friendly and went above and beyond.",
    location: "Dhanaulti, Uttarakhand",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjVxxwRteERrs8ChY1SwQcY-cczJTbr37ZC34xirdvxZ1V02hV0=w75-h75-p-rp-mo-br100",
  },
  {
    type: "image",
    imgSrc: Image2,
    caption: "Take a deep breath and find peace among the peaks",
  },
  {
    type: "review",
    name: "Hrishabh Vashishtha",
    review:
      "Into the Wild is an absolute gem! The interiors are cozy, the location is stunning, and the peaceful surroundings make it a perfect retreat.",
    location: "Dhanaulti, Uttarakhand",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjVVWoTorW_xMCcGxT-K1pMEkyr6BiZRst_xtZZ4nATKp6PVafjl=w75-h75-p-rp-mo-ba2-br100",
  },
  {
    type: "image",
    imgSrc: Image3,
    caption: "Mountain views that will take your breath away",
  },
  {
    type: "review",
    name: "Manish Rathore",
    review:
      "Amazing stay at Into the Wild! Spacious cottage, stunning views, and delicious food. The staff was friendly and accommodating.",
    location: "Dhanaulti, Uttarakhand",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjWAyMr0qVH4_8n21vsJraxjHqz_wEyldxnY2MHklO0JqjjGCfsw=w75-h75-p-rp-mo-br100",
  },
  {
    type: "image",
    imgSrc: Image4,
    caption: "Serene moments in the mountains",
  },
  
];

const GalleryAndReviews = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredContent =
    activeFilter === "all"
      ? testData
      : testData.filter((item) => item.type === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-300 via-white to-gray-200 text-black py-16 relative overflow-hidden lg:px-32">
      {/* Decorative Background Elements */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-800/10 -full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-800/10 -full blur-3xl"></div>
      </div> */}

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center space-x-4 mb-6">
          <motion.h1
          className="text-4xl md:text-6xl text-black font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-gradient-to-r from-cyan-800 to-emerald-800 bg-clip-text text-transparent">
            Guest
          </span>{" "}
        Testimonials
        </motion.h1>
          {/* <p className="text-xl text-gray-800 max-w-2xl mx-auto">
            Authentic moments and memories from our travelers
          </p> */}
        </div>

        {/* Filter Section */}
        <div className="flex justify-center mb-12 space-x-4">
          {["all", "image", "review"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`
                px-6 py-3  uppercase tracking-wider transition-all duration-300
                ${
                  activeFilter === filter
                    ? "bg-[#0F2642] font-extrabold underline underline-offset-2  text-white shadow-xl"
                    : "bg-gray-700/30 text-white hover:bg-gray-700/50"
                }
              `}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden shadow-2xl border border-gray-700/50 bg-gray-800/50 backdrop-blur-xl"
            >
              {item.type === "image" ? (
                <div className="relative overflow-hidden">
                  <img
                    src={item.imgSrc}
                    alt={item.caption || `Gallery item ${index + 1}`}
                    className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {item.caption && (
                    <div className="absolute inset-0  bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                      <p className="text-gray-100 text-lg font-medium">
                        {item.caption}
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="p-8 space-y-4 h-full flex flex-col">
                  <div className="flex items-center justify-between">
                    <Quote className="w-8 h-8 text-cyan-800" />
                    <div className="flex space-x-1 text-yellow-400">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-16 h-16 -full object-cover border-2 border-cyan-400"
                    />
                    <div>
                      <p className="text-xl font-semibold text-gray-100">
                        {item.name}
                      </p>
                      <p className="text-gray-300 text-sm">{item.location}</p>
                    </div>
                  </div>
                  <p className="italic text-gray-100 text-lg flex-grow">
                    "{item.review}"
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <LinkIcon className="w-5 h-5 text-gray-100" />
                    <span className="text-sm text-gray-100">Verified Stay</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default GalleryAndReviews;

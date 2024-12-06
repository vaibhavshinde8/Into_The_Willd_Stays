import { useState } from "react";
import { Quote, Star, Link as LinkIcon } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-cyan-100 py-20 relative overflow-hidden lg:px-32">
      <div className="absolute inset-0 backdrop-blur-md bg-white/40"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-cyan-800 to-emerald-800 bg-clip-text text-transparent">
              Guest <span className="text-black">Diary</span>
            </span>
          </motion.h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover what our guests have to say about their memorable
            experiences with us
          </p>
        </div>

        <div className="flex justify-center mb-16 space-x-6">
          {["all", "image", "review"].map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`
                px-8 py-3 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-300
                ${
                  activeFilter === filter
                    ? "bg-[#0F2642] text-white shadow-lg transform -translate-y-1"
                    : "bg-white/80 text-gray-700 hover:bg-[#0F2642] hover:text-white border border-[#0F2642]/20"
                }
              `}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredContent.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {item.type === "image" ? (
                <div className="relative overflow-hidden rounded-3xl h-[450px]">
                  <img
                    src={item.imgSrc}
                    alt={item.caption || `Gallery item ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white text-xl font-semibold leading-relaxed">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-8 h-[450px] flex flex-col bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-xl rounded-3xl border-2 border-[#0F2642]/10 hover:border-[#0F2642]/30 transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <Quote className="w-12 h-12 text-[#0F2642] opacity-80" />
                    <div className="flex space-x-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                  </div>

                  <p className="italic text-gray-700 text-lg flex-grow leading-relaxed mb-6">
                    &ldquo;{item.review}&rdquo;
                  </p>

                  <div className="mt-auto">
                    <div className="flex items-center space-x-4 mb-4">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-16 h-16 rounded-full object-cover ring-4 ring-[#0F2642]/10 shadow-lg"
                      />
                      <div>
                        <p className="text-xl font-semibold text-gray-800">
                          {item.name}
                        </p>
                        <div className="flex items-center text-[#0F2642] text-sm mt-1">
                          <LinkIcon className="w-4 h-4 mr-2" />
                          {item.location}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-[#0F2642]/10">
                      <span className="text-sm font-medium text-[#0F2642] flex items-center">
                        <LinkIcon className="w-4 h-4 mr-2" />
                        Verified Stay
                      </span>
                      <span className="text-sm text-gray-500">
                        {new Date().toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryAndReviews;

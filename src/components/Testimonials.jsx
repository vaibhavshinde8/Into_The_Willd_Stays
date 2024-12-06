import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Star, Quote, Play, Pause } from "lucide-react";
import { motion } from "framer-motion";
import VideoTestimonial1 from "../assets/testimon-v-main1.mp4";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testData = [
  {
    name: "Achyut Pandey",
    review:
      "Beautiful place to spend time with family and friends. Spacious cottages and a blissful valley view from the watchtower. Highly recommended!",
    address: "Dhanaulti, Uttarakhand",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjUiPYj94ra9LMSK_zdaPBiWGKgJ4tiRClMczHtXnkUHZZ8KlkDt=w75-h75-p-rp-mo-br100",
    rating: 5,
  },
  {
    name: "Arvind Nagar",
    review:
      "The location and view are worth every penny. Wonderful hospitality, and Uncle ji took great care of us like family. Will definitely come back soon!",
    address: "Dhanaulti, Uttarakhand",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjXcVgO6RVm6QTkIEvCG4fDM4693d-jm2kS5Eji3CbgzhzcTVZLy=w75-h75-p-rp-mo-ba2-br100",
    rating: 5,
  },
  {
    name: "Shivam Mishra",
    review:
      "Amazing stay with stunning views from the windows. The food, especially honey chilli potatoes and momos, was delicious. Highly recommended!",
    address: "Dhanaulti, Uttarakhand",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjVtHJlom4jAmFJh851wQLMKq_OWJHGUSw7S8qRq9SLF_pPd5oq2=w75-h75-p-rp-mo-br100",
    rating: 5,
  },
  {
    name: "Anjali Sharma",
    review:
      "A very beautiful and cozy cottage with an amazing mountain view. Perfect for a hill station staycation!",
    address: "Dhanaulti, Uttarakhand",
    img: "https://lh3.googleusercontent.com/a/ACg8ocJ8AxiaJuwlIiaehLvnIF99LgA7h-U99sgupo9LNOEKOmlGqg=w75-h75-p-rp-mo-br100",
    rating: 5,
  },
  {
    name: "Rajat Sharma",
    review:
      "Located near Eco Park, this stay is vibrant and spacious. Modern cottages with a close-to-nature feel. Loved the hospitality and food!",
    address: "Dhanaulti, Uttarakhand",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjWfhfXkPNVUNWGSMayOR9RqYcyoEH8iKKWKAtHxLbqAzpNDbJ85Ow=w75-h75-p-rp-mo-ba2-br100",
    rating: 5,
  },
  {
    name: "Msc Bill",
    review:
      "Dhanaulti is beautiful, and Into the Wild homestay is the best place to stay. Amazing rooms and services!",
    address: "Dhanaulti, Uttarakhand",
    img: "https://lh3.googleusercontent.com/a/ACg8ocJFqMHTOoRlhOUZiHy71cfy-oExqTTSauzFrHgX2S5kqC6g5Q=w75-h75-p-rp-mo-br100",
    rating: 5,
  },
];

const Testimonials = () => {
  const swiperRef = useRef(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 py-20 px-6 rounded-3xl">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-gradient-to-r from-cyan-800 to-emerald-800 bg-clip-text text-transparent">
            What
          </span>{" "}
          Our Guest say
        </motion.h1>

        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1.5, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
          }}
          className="pb-12"
        >
          {testData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col border border-[#0F2642]/10">
                <Quote className="text-[#0F2642]/20 mb-6" size={40} />

                <div className="flex flex-col items-center mb-6">
                  <img
                    src={testimonial.img}
                    alt={`${testimonial.name}'s profile`}
                    className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-[#0F2642]/10 shadow-md"
                  />
                  <h3 className="text-xl font-semibold text-[#0F2642]">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{testimonial.address}</p>
                  <div className="flex space-x-1 text-[#0F2642] mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>

                <p className="text-center text-gray-700 italic flex-grow leading-relaxed">
                  &ldquo;{testimonial.review}&rdquo;
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-24">
          <div className="max-w-4xl mx-auto relative rounded-3xl overflow-hidden shadow-2xl group">
            <video
              ref={videoRef}
              className="w-full aspect-video object-cover"
              src={VideoTestimonial1}
            />
            <div
              className="absolute inset-0 flex items-center justify-center cursor-pointer bg-[#0F2642]/10 group-hover:bg-[#0F2642]/20 transition-all duration-300"
              onClick={toggleVideo}
            >
              <div
                className={`w-20 h-20 rounded-full bg-[#0F2642]/80 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#0F2642] ${
                  isPlaying ? "opacity-0 group-hover:opacity-100" : ""
                }`}
              >
                {isPlaying ? (
                  <Pause className="w-10 h-10 text-white" />
                ) : (
                  <Play className="w-10 h-10 text-white ml-1" />
                )}
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0F2642]/90 to-transparent">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

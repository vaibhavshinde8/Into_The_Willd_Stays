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
    <div className="bg-gradient-to-r from-blue-100 via-cyan-100 to-emerald-100 py-24 px-8 rounded-3xl">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-20 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-gradient-to-r from-cyan-800 to-emerald-800 bg-clip-text text-transparent">
            Guest
          </span>{" "}
          Experience
        </motion.h1>

        {/* <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1.5, spaceBetween: 30 },
            768: { slidesPerView: 2, spaceBetween: 40 },
            1024: { slidesPerView: 3, spaceBetween: 50 },
          }}
          className="pb-16"
        >
          {testData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col border border-white/50">
                <Quote className="text-emerald-600/30 mb-8" size={48} />

                <div className="flex flex-col items-center mb-8">
                  <div className="relative mb-6">
                    <img
                      src={testimonial.img}
                      alt={`${testimonial.name}'s profile`}
                      className="w-24 h-24 rounded-full object-cover border-4 border-emerald-100 shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-emerald-500 rounded-full p-2 shadow-lg">
                      <Star
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-emerald-600 font-medium mb-3">
                    {testimonial.address}
                  </p>
                  <div className="flex space-x-1.5 text-yellow-500">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} fill="currentColor" />
                    ))}
                  </div>
                </div>

                <p className="text-center text-gray-700 text-lg italic flex-grow leading-relaxed font-medium">
                  &ldquo;{testimonial.review}&rdquo;
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper> */}

        <div className="mt-32">
          <div className="max-w-5xl mx-auto relative rounded-[2rem] overflow-hidden shadow-2xl group">
            <video
              ref={videoRef}
              className="w-full aspect-video object-cover"
              src={VideoTestimonial1}
            />
            <div
              className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/20 group-hover:bg-black/30 transition-all duration-500"
              onClick={toggleVideo}
            >
              <div
                className={`w-24 h-24 rounded-full bg-emerald-600/90 backdrop-blur-md flex items-center justify-center transition-all duration-500 hover:scale-110 hover:bg-emerald-600 ${
                  isPlaying ? "opacity-0 group-hover:opacity-100" : ""
                }`}
              >
                {isPlaying ? (
                  <Pause className="w-12 h-12 text-white" />
                ) : (
                  <Play className="w-12 h-12 text-white ml-2" />
                )}
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

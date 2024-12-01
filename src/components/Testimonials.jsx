import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCreative } from "swiper/modules";
import { Star, ArrowLeftCircle, ArrowRightCircle, Quote } from "lucide-react";
import { motion } from "framer-motion";


import "swiper/css";
import "swiper/css/effect-creative";

const testData = [
  // {
  //   name: "Tushar Bhagwane",
  //   review:
  //     "I had a fantastic stay at this hotel! The rooms were spacious, clean, and well-equipped. The staff were incredibly friendly and went above and beyond. Highly recommended for a relaxing and enjoyable stay!",
  //   address: "Dhanaulti, Uttarakhand",
  //   img: "https://lh3.googleusercontent.com/a-/ALV-UjVxxwRteERrs8ChY1SwQcY-cczJTbr37ZC34xirdvxZ1V02hV0=w75-h75-p-rp-mo-br100",
  //   rating: 5,
  // },
  // {
  //   name: "Hrishabh Vashishtha",
  //   review:
  //     "Into the Wild is an absolute gem! The interiors are cozy, the location is stunning, and the peaceful surroundings make it a perfect retreat. Truly refreshing and rejuvenating.",
  //   address: "Dhanaulti, Uttarakhand",
  //   img: "https://lh3.googleusercontent.com/a-/ALV-UjVVWoTorW_xMCcGxT-K1pMEkyr6BiZRst_xtZZ4nATKp6PVafjl=w75-h75-p-rp-mo-ba2-br100",
  //   rating: 5,
  // },
  // {
  //   name: "Manish Rathore",
  //   review:
  //     "Amazing stay at Into the Wild! Spacious cottage, stunning views, and delicious food. The staff was friendly and accommodating. A perfect nature getaway!",
  //   address: "Dhanaulti, Uttarakhand",
  //   img: "https://lh3.googleusercontent.com/a-/ALV-UjWAyMr0qVH4_8n21vsJraxjHqz_wEyldxnY2MHklO0JqjjGCfsw=w75-h75-p-rp-mo-br100",
  //   rating: 5,
  // },
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
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.swiper.slideNext();
  };

  return (
    <div className="relative bg-gradient-to-r from-gray-300 via-white to-gray-200 py-16 overflow-hidden text-black">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute text-black rounded-full animate-pulse"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 4 + 2}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Section Title */}
      <div className="relative z-10 text-center mb-12">
        <motion.h1
          className="text-4xl md:text-6xl text-black font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-gradient-to-r from-cyan-800 to-emerald-800 bg-clip-text text-transparent">
            What
          </span>{" "}
          Our Guest Say
        </motion.h1>
      </div>

      {/* Navigation Controls */}
      <div className="absolute top-1/2 transform -translate-y-1/2 z-20 w-full flex justify-between px-4">
        <button
          onClick={handlePrev}
          className="text-black hover:text-white transition-all focus:outline-none"
          aria-label="Previous testimonial"
        >
          <ArrowLeftCircle size={40} />
        </button>
        <button
          onClick={handleNext}
          className="text-black hover:text-white transition-all focus:outline-none"
          aria-label="Next testimonial"
        >
          <ArrowRightCircle size={40} />
        </button>
      </div>

      {/* Testimonials Slider */}
      <Swiper
        ref={swiperRef}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className} text-black hover:text-black/60"></span>`;
          },
        }}
        modules={[Pagination, EffectCreative]}
        className="mySwiper"
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
        breakpoints={{
          640: { slidesPerView: 1.5, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 40 },
        }}
      >
        {testData.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div
              className={`
              relative  p-8 transition-all duration-500 h-full
              ${
                index === activeSlide
                  ? "bg-black scale-105 shadow-xl"
                  : "bg-gray-800 opacity-70 scale-95"
              }
            `}
            >
              <Quote
                className="absolute top-4 left-4 text-primary/20"
                size={48}
              />

              {/* Profile Section */}
              <div className="flex flex-col items-center mb-6 relative z-10">
                <div className="relative mb-4">
                  <img
                    src={testimonial.img}
                    alt={`${testimonial.name}'s profile`}
                    className="w-20 h-20 rounded-full object-cover border-2 border-primary"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-100 mb-1">
                  {testimonial.name}
                </h3>

                <div className="flex space-x-1 text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>

              {/* Review Text */}
              <p className="text-gray-100 text-center text-sm italic min-h-[100px] flex items-center justify-center">
                "{testimonial.review}"
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;

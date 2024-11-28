import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCreative } from "swiper/modules";
import { Stars, ArrowLeftCircle, ArrowRightCircle, Quote } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-creative";

const testData = [
  {
    name: "Tushar Bhagwane",
    review:
      "I had a fantastic stay at this hotel! The rooms were spacious, clean, and well-equipped. The staff were incredibly friendly and went above and beyond. Highly recommended for a relaxing and enjoyable stay!",
    address: "Dhanaulti, Uttarakhand",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjVxxwRteERrs8ChY1SwQcY-cczJTbr37ZC34xirdvxZ1V02hV0=w75-h75-p-rp-mo-br100",
  },
  {
    name: "Hrishabh Vashishtha",
    review:
      "Into the Wild is an absolute gem! The interiors are cozy, the location is stunning, and the peaceful surroundings make it a perfect retreat. Truly refreshing and rejuvenating.",
    address: "Dhanaulti, Uttarakhand",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjVVWoTorW_xMCcGxT-K1pMEkyr6BiZRst_xtZZ4nATKp6PVafjl=w75-h75-p-rp-mo-ba2-br100",
  },
  {
    name: "Manish Rathore",
    review:
      "Amazing stay at Into the Wild! Spacious cottage, stunning views, and delicious food. The staff was friendly and accommodating. A perfect nature getaway!",
    address: "Dhanaulti, Uttarakhand",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjWAyMr0qVH4_8n21vsJraxjHqz_wEyldxnY2MHklO0JqjjGCfsw=w75-h75-p-rp-mo-br100",
  },
  {
    name: "Achyut Pandey",
    review:
      "Beautiful place to spend time with family and friends. Spacious cottages and a blissful valley view from the watchtower. Highly recommended!",
    address: "Dhanaulti, Uttarakhand",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjUiPYj94ra9LMSK_zdaPBiWGKgJ4tiRClMczHtXnkUHZZ8KlkDt=w75-h75-p-rp-mo-br100",
  },
  {
    name: "Arvind Nagar",
    review:
      "The location and view are worth every penny. Wonderful hospitality, and Uncle ji took great care of us like family. Will definitely come back soon!",
    address: "Dhanaulti, Uttarakhand",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjXcVgO6RVm6QTkIEvCG4fDM4693d-jm2kS5Eji3CbgzhzcTVZLy=w75-h75-p-rp-mo-ba2-br100",
  },
  {
    name: "Shivam Mishra",
    review:
      "Amazing stay with stunning views from the windows. The food, especially honey chilli potatoes and momos, was delicious. Highly recommended!",
    address: "Dhanaulti, Uttarakhand",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjVtHJlom4jAmFJh851wQLMKq_OWJHGUSw7S8qRq9SLF_pPd5oq2=w75-h75-p-rp-mo-br100",
  },
  {
    name: "Anjali Sharma",
    review:
      "A very beautiful and cozy cottage with an amazing mountain view. Perfect for a hill station staycation!",
    address: "Dhanaulti, Uttarakhand",
    img: "https://lh3.googleusercontent.com/a/ACg8ocJ8AxiaJuwlIiaehLvnIF99LgA7h-U99sgupo9LNOEKOmlGqg=w75-h75-p-rp-mo-br100",
  },
  {
    name: "Rajat Sharma",
    review:
      "Located near Eco Park, this stay is vibrant and spacious. Modern cottages with a close-to-nature feel. Loved the hospitality and food!",
    address: "Dhanaulti, Uttarakhand",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjWfhfXkPNVUNWGSMayOR9RqYcyoEH8iKKWKAtHxLbqAzpNDbJ85Ow=w75-h75-p-rp-mo-ba2-br100",
  },
  {
    name: "Msc Bill",
    review:
      "Dhanaulti is beautiful, and Into the Wild homestay is the best place to stay. Amazing rooms and services!",
    address: "Dhanaulti, Uttarakhand",
    img: "https://lh3.googleusercontent.com/a/ACg8ocJFqMHTOoRlhOUZiHy71cfy-oExqTTSauzFrHgX2S5kqC6g5Q=w75-h75-p-rp-mo-br100",
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
    <div className="relative bg-gradient-to-br from-[#121212] to-[#1e1e2e] py-16 overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/10 rounded-full animate-pulse"
            style={{
              width: `${Math.random() * 10}px`,
              height: `${Math.random() * 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Section Title */}
      <div className="relative z-10 text-center mb-12">
        <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
          Testimonials
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Authentic stories from travelers who discovered their perfect retreat
        </p>
      </div>

      {/* Navigation Controls */}
      <div className="absolute top-1/2 transform -translate-y-1/2 z-20 w-full flex justify-between px-8">
        <button
          onClick={handlePrev}
          className="text-white/50 hover:text-white transition-all"
        >
          <ArrowLeftCircle size={48} />
        </button>
        <button
          onClick={handleNext}
          className="text-white/50 hover:text-white transition-all"
        >
          <ArrowRightCircle size={48} />
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
        slidesPerView={1.5}
        spaceBetween={30}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className} bg-white/30 hover:bg-white/60"></span>`;
          },
        }}
        modules={[Pagination, EffectCreative]}
        className="mySwiper"
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
        breakpoints={{
          640: { slidesPerView: 1.5, spaceBetween: 30 },
          768: { slidesPerView: 2, spaceBetween: 40 },
          1024: { slidesPerView: 3, spaceBetween: 50 },
        }}
      >
        {testData.map((testimon, index) => (
          <SwiperSlide key={index}>
            <div
              className={`
              relative rounded-2xl p-8 transition-all duration-500 
              ${
                index === activeSlide
                  ? "bg-[#2a2a3f] scale-105 shadow-2xl"
                  : "bg-[#1e1e2e] opacity-70 scale-95"
              }
            `}
            >
              <Quote
                className="absolute top-4 left-4 text-blue-400/20"
                size={64}
              />

              {/* Profile Section */}
              <div className="flex flex-col items-center mb-6">
                <div className="relative mb-4">
                  <img
                    src={testimon.img}
                    alt={`${testimon.name}'s profile`}
                    className="w-32 h-32 rounded-full object-cover border-4 border-blue-500/30 ring-4 ring-blue-500/20"
                  />
                  <div className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-1">
                    <Stars size={20} fill="currentColor" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-blue-200 mb-2">
                  {testimon.name}
                </h2>
                <div className="flex space-x-1 text-yellow-400 mb-4">
                  {[...Array(testimon.rating)].map((_, i) => (
                    <Stars key={i} size={24} fill="currentColor" />
                  ))}
                </div>
              </div>

              {/* Review Text */}
              <p className="text-gray-300 text-center italic text-base min-h-[120px] flex items-center justify-center">
                "{testimon.review}"
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;

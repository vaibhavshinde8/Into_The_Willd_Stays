import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import vid from "../assets/guest-exp.mp4"; 
import vid2 from "../assets/Video-822~2.mp4"; 

import "./TestiSwiper.css";

const testData = [
  {
    name: "Tushar Bhagwane",
    review:
      "I had a fantastic stay at this hotel! The rooms were spacious, clean, and well-equipped. The staff were incredibly friendly and went above and beyond. Highly recommended for a relaxing and enjoyable stay!",
    address: "Dhanaulti, Uttarakhand",
    img: "https://sundaysforever-bucket.s3.ap-south-1.amazonaws.com/1678346878480.jpeg",
  },
  {
    name: "Hrishabh Vashishtha",
    review:
      "Into the Wild is an absolute gem! The interiors are cozy, the location is stunning, and the peaceful surroundings make it a perfect retreat. Truly refreshing and rejuvenating.",
    address: "Dhanaulti, Uttarakhand",
    img: "https://sundaysforever-bucket.s3.ap-south-1.amazonaws.com/1678346878480.jpeg",
  },
  {
    name: "Manish Rathore",
    review:
      "Amazing stay at Into the Wild! Spacious cottage, stunning views, and delicious food. The staff was friendly and accommodating. A perfect nature getaway!",
    address: "Dhanaulti, Uttarakhand",
    img: "https://sundaysforever-bucket.s3.ap-south-1.amazonaws.com/1678346878480.jpeg",
  },
  {
    name: "Achyut Pandey",
    review:
      "Beautiful place to spend time with family and friends. Spacious cottages and a blissful valley view from the watchtower. Highly recommended!",
    address: "Dhanaulti, Uttarakhand",
    img: "https://sundaysforever-bucket.s3.ap-south-1.amazonaws.com/1678346878480.jpeg",
  },
  {
    name: "Arvind Nagar",
    review:
      "The location and view are worth every penny. Wonderful hospitality, and Uncle ji took great care of us like family. Will definitely come back soon!",
    address: "Dhanaulti, Uttarakhand",
    img: "https://sundaysforever-bucket.s3.ap-south-1.amazonaws.com/1678346878480.jpeg",
  },
  {
    name: "Shivam Mishra",
    review:
      "Amazing stay with stunning views from the windows. The food, especially honey chilli potatoes and momos, was delicious. Highly recommended!",
    address: "Dhanaulti, Uttarakhand",
    img: "https://sundaysforever-bucket.s3.ap-south-1.amazonaws.com/1678346878480.jpeg",
  },
  {
    name: "Anjali Sharma",
    review:
      "A very beautiful and cozy cottage with an amazing mountain view. Perfect for a hill station staycation!",
    address: "Dhanaulti, Uttarakhand",
    img: "https://sundaysforever-bucket.s3.ap-south-1.amazonaws.com/1678346878480.jpeg",
  },
  {
    name: "Rajat Sharma",
    review:
      "Located near Eco Park, this stay is vibrant and spacious. Modern cottages with a close-to-nature feel. Loved the hospitality and food!",
    address: "Dhanaulti, Uttarakhand",
    img: "https://sundaysforever-bucket.s3.ap-south-1.amazonaws.com/1678346878480.jpeg",
  },
  {
    name: "Msc Bill",
    review:
      "Dhanaulti is beautiful, and Into the Wild homestay is the best place to stay. Amazing rooms and services!",
    address: "Dhanaulti, Uttarakhand",
    img: "https://sundaysforever-bucket.s3.ap-south-1.amazonaws.com/1678346878480.jpeg",
  },
  {
    name: "Vasu Agarwal",
    review:
      "What an amazing experience! The cottages and mesmerizing views made the New Year celebration unforgettable. Delicious food and professional staff!",
    address: "Dhanaulti, Uttarakhand",
    img: "https://sundaysforever-bucket.s3.ap-south-1.amazonaws.com/1678346878480.jpeg",
  },
];

const Testimonials = () => {
  return (
    <div className="py-12 bg-gray-100">
      {/* Section Title */}
      <h1 className="text-4xl font-bold text-center text-[#F77706] mb-8">
        Google Reviews
      </h1>

      {/* Swiper for Reviews */}
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {testData.map((testimon, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col h-[25vh] items-center bg-white p-4 shadow-md rounded-lg border border-gray-200">
        

              {/* Review Text */}
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600 italic">
                  {testimon.review}
                </p>
                <h2 className="text-lg font-semibold text-gray-800 mt-2">
                  {testimon.name}
                </h2>
                {/* <p className="text-xs text-gray-500">{testimon.address}</p> */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Video Section */}
      <div className="container mt-8 gap-4 px-4 flex justify-center items-center">
        <div className=" h-[70vh] rounded-lg shadow-lg overflow-hidden">
          <video
            className="lg:w-[550px] lg:h-[500px] h-[380px] w-[390px] object-cover"
            controls
            autoPlay
            muted
            src={vid}
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <div className=" h-[70vh] rounded-lg shadow-lg overflow-hidden">
          <video
            className="lg:w-[550px] lg:h-[500px] h-[380px] w-[390px] object-cover"
            controls
            autoPlay
            muted
            src={vid2}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

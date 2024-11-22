import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import vid from "../assets/guest-exp.mp4"; 
import vid2 from "../assets/Video-822~2.mp4"; 

import "./TestiSwiper.css";

const testData = [
  {
    name: "Aarav Mehta",
    review:
      "The cottage is nestled in a serene location with a spectacular view. My family enjoyed the cozy ambiance and the barbecue evening was a delightful experience. The staff went above and beyond to make our stay comfortable.",
    address: "Mall Road, Manali",
    img: "https://sundaysforever-bucket.s3.ap-south-1.amazonaws.com/1678346878480.jpeg",
  },
  {
    name: "Priya Sharma",
    review:
      "A charming little hideaway in the heart of Barlow’s Ganj. The rooms were clean, and the food was delicious. The staff’s warm hospitality added a special touch to our vacation.",
    address: "Mall Road, Manali",
    img: "https://sundaysforever-bucket.s3.ap-south-1.amazonaws.com/1678346878480.jpeg",
  },
  {
    name: "Rohan Verma",
    review:
      "This cottage is perfect for a peaceful getaway. The location is fantastic, and the arranged bonfire made the evenings magical. Kudos to the staff for their attentive service and great food!",
    address: "Mall Road, Manali",
    img: "https://sundaysforever-bucket.s3.ap-south-1.amazonaws.com/1678346878480.jpeg",
  },
  {
    name: "Ananya Gupta",
    review:
      "Tucked away in a scenic spot, this cottage exceeded our expectations. The rooms were cozy, and the barbecue dinner was a highlight. The staff was courteous and ensured our stay was memorable.",
    address: "Mall Road, Manali",
    img: "https://sundaysforever-bucket.s3.ap-south-1.amazonaws.com/1678346878480.jpeg",
  },
  {
    name: "Karan Singh",
    review:
      "A fantastic place to unwind with family. The cottage’s location is unbeatable, and the service was impeccable. The food, especially the barbecue, was simply amazing. Highly recommend this spot!",
    address: "Mall Road, Manali",
    img: "https://sundaysforever-bucket.s3.ap-south-1.amazonaws.com/1678346878480.jpeg",
  },
  {
    name: "Meera Nair",
    review:
      "We had a wonderful time at this charming cottage. The surroundings were beautiful, and the staff’s hospitality made it even better. The food was top-notch, and the barbecue night was an unforgettable experience.",
    address: "Mall Road, Manali",
    img: "https://sundaysforever-bucket.s3.ap-south-1.amazonaws.com/1678346878480.jpeg",
  },
  {
    name: "Aditya Patel",
    review:
      "This cozy cottage was the perfect escape from the city. The barbecue evening was well-organized, and the staff’s friendly demeanor made our stay even more enjoyable. Will definitely visit again!",
    address: "Mall Road, Manali",
    img: "https://sundaysforever-bucket.s3.ap-south-1.amazonaws.com/1678346878480.jpeg",
  },
  {
    name: "Isha Kapoor",
    review:
      "An absolutely delightful place to stay. The cottage is well-maintained, and the barbecue evening was a highlight of our trip. The staff’s efforts to make us feel at home were truly appreciated.",
    address: "Mall Road, Manali",
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
            <div className="flex flex-col items-center bg-white p-4 shadow-md rounded-lg border border-gray-200">
              {/* Reviewer Image */}
              {/* <img
                className="w-16 h-16 rounded-full border-2 border-[#F77706] shadow-sm"
                src={testimon.img}
                alt={testimon.name}
              /> */}

              {/* Review Text */}
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600 italic">
                  {testimon.review}
                </p>
                <h2 className="text-lg font-semibold text-gray-800 mt-2">
                  {testimon.name}
                </h2>
                <p className="text-xs text-gray-500">{testimon.address}</p>
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

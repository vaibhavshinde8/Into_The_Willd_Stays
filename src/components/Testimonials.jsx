import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import "./TestiSwiper.css";

const testData = [
  {
    name: "Malti Singh",
    review:
      "This is little cottage tucked in the midst of Barlow’s ganj is cute, neat and comfortable. I went there with my family and we had a lot of fun especially with the arranged barbecue. The staff is very friendly and cooks amazing food.",
    address: "Mall Road, Manali",
    img: "https://sundaysforever-bucket.s3.ap-south-1.amazonaws.com/1678346878480.jpeg",
  },
  {
    name: "Shruti Kapoor",
    review:
      "This is little cottage tucked in the midst of Barlow’s ganj is cute, neat and comfortable. I went there with my family and we had a lot of fun especially with the arranged barbecue. The staff is very friendly and cooks amazing food.",
    address: "Mall Road, Manali",
    img: "https://sundaysforever-bucket.s3.ap-south-1.amazonaws.com/1678346878480.jpeg",
  },
  {
    name: "Shruti Kapoor",
    review:
      "This is little cottage tucked in the midst of Barlow’s ganj is cute, neat and comfortable. I went there with my family and we had a lot of fun especially with the arranged barbecue. The staff is very friendly and cooks amazing food.",
    address: "Mall Road, Manali",
    img: "https://sundaysforever-bucket.s3.ap-south-1.amazonaws.com/1678346878480.jpeg",
  },
  {
    name: "Shruti Kapoor",
    review:
      "This is little cottage tucked in the midst of Barlow’s ganj is cute, neat and comfortable. I went there with my family and we had a lot of fun especially with the arranged barbecue. The staff is very friendly and cooks amazing food.",
    address: "Mall Road, Manali",
    img: "https://sundaysforever-bucket.s3.ap-south-1.amazonaws.com/1678346878480.jpeg",
  },
  {
    name: "Shruti Kapoor",
    review:
      "This is little cottage tucked in the midst of Barlow’s ganj is cute, neat and comfortable. I went there with my family and we had a lot of fun especially with the arranged barbecue. The staff is very friendly and cooks amazing food.",
    address: "Mall Road, Manali",
    img: "https://sundaysforever-bucket.s3.ap-south-1.amazonaws.com/1678346878480.jpeg",
  },
  {
    name: "Shruti Kapoor",
    review:
      "This is little cottage tucked in the midst of Barlow’s ganj is cute, neat and comfortable. I went there with my family and we had a lot of fun especially with the arranged barbecue. The staff is very friendly and cooks amazing food.",
    address: "Mall Road, Manali",
    img: "https://sundaysforever-bucket.s3.ap-south-1.amazonaws.com/1678346878480.jpeg",
  },
  // Add other data here...
];

const Testimonials = () => {
  return (
    <div className="   py-12">
      <h1 className="text-4xl text-white lg:text-5xl font-bold mb-6 text-center pb-12">
        <span className="text-[#F77706]">Testimonials</span>
      </h1>
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
            spaceBetween: 40,
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
            <div className="flex flex-col items-center px-4 py-10 bg-gradient-to-b from-green-200 to-green-400 text-black rounded-lg shadow-lg">
              <img
                className="w-[130px] h-[130px] rounded-[50%] border-4 border-dashed border-[#43A181] shadow-lg"
                src={testimon.img}
                alt={testimon.name}
              />
              <div className="flex flex-col gap-2 mt-4">
                <p className="text-base text-[#091F3C]">{testimon.review}</p>
                <h1 className="text-xl font-bold text-primary">
                  {testimon.name}
                </h1>
                <h2 className="text-sm text-[#091F3C]">{testimon.address}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;

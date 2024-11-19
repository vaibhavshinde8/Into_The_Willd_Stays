import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

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
            <div className="flex flex-col items-center px-4 py-10 bg-gradient-to-b from-green-200 to-green-400 text-black rounded-lg shadow-lg min-h-[40vh]">
              {/* <img
                className="w-[130px] h-[130px] rounded-[50%] border-4 border-dashed border-[#43A181] shadow-lg"
                src={testimon.img}
                alt={testimon.name}
              /> */}
              <div className="flex flex-col gap-2 mt-4">
                <p className="text-base text-[#091F3C]">{testimon.review}</p>
                <h1 className="text-xl font-bold text-primary">
                  {testimon.name}
                </h1>
                {/* <h2 className="text-sm text-[#091F3C]">{testimon.address}</h2> */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;

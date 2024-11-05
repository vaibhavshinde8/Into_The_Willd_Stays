import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import "./TestiSwiper.css";

const testData = [
    {
        name: "Malti Singh",
        review: 'This is little cottage tucked in the midst of Barlow’s ganj is cute, neat and comfortable. I went there with my family and we had a lot of fun especially with the arranged barbecue. The staff is very friendly and cooks amazing food.',
        address: 'Mall Road, Manali',
        img: 'https://sundaysforever-bucket.s3.ap-south-1.amazonaws.com/1678346878480.jpeg'
    },
    {
        name: "Shruti Kapoor",
        review: 'This is little cottage tucked in the midst of Barlow’s ganj is cute, neat and comfortable. I went there with my family and we had a lot of fun especially with the arranged barbecue. The staff is very friendly and cooks amazing food.',
        address: 'Mall Road, Manali',
        img: 'https://sundaysforever-bucket.s3.ap-south-1.amazonaws.com/1678346878480.jpeg'
    },
    {
        name: "Micheal Singh",
        review: 'This is little cottage tucked in the midst of Barlow’s ganj is cute, neat and comfortable. I went there with my family and we had a lot of fun especially with the arranged barbecue. The staff is very friendly and cooks amazing food.',
        address: 'Mall Road, Manali',
        img: 'https://sundaysforever-bucket.s3.ap-south-1.amazonaws.com/1678346878480.jpeg'
    },
    {
        name: "Alex Clark",
        review: 'This is little cottage tucked in the midst of Barlow’s ganj is cute, neat and comfortable. I went there with my family and we had a lot of fun especially with the arranged barbecue. The staff is very friendly and cooks amazing food.',
        address: 'Mall Road, Manali',
        img: 'https://sundaysforever-bucket.s3.ap-south-1.amazonaws.com/1678346878480.jpeg'
    },
    {
        name: "Rohan Bhatia",
        review: 'This is little cottage tucked in the midst of Barlow’s ganj is cute, neat and comfortable. I went there with my family and we had a lot of fun especially with the arranged barbecue. The staff is very friendly and cooks amazing food.',
        address: 'Mall Road, Manali',
        img: 'https://sundaysforever-bucket.s3.ap-south-1.amazonaws.com/1678346878480.jpeg'
    },
    {
        name: "Sonam Mehta",
        review: 'This is little cottage tucked in the midst of Barlow’s ganj is cute, neat and comfortable. I went there with my family and we had a lot of fun especially with the arranged barbecue. The staff is very friendly and cooks amazing food.',
        address: 'Mall Road, Manali',
        img: 'https://sundaysforever-bucket.s3.ap-south-1.amazonaws.com/1678346878480.jpeg'
    },
    {
        name: "Sakshi Singh",
        review: 'This is little cottage tucked in the midst of Barlow’s ganj is cute, neat and comfortable. I went there with my family and we had a lot of fun especially with the arranged barbecue. The staff is very friendly and cooks amazing food.',
        address: 'Mall Road, Manali',
        img: 'https://sundaysforever-bucket.s3.ap-south-1.amazonaws.com/1678346878480.jpeg'
    },
]

const Testimonials = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 via-gray-800 to-blue-900">
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
        className="mySwiper "
      >
        {testData.map((testimon) => (
          <SwiperSlide>
            <div className="flex flex-col items-center px-4 py-10 bg-gradient-to-b from-[#012258] to-[#000000] text-white rounded-lg ">
              <img
                className="w-[130px] h-[130px] rounded-[50%]"
                src={testimon.img}
                alt=""
              />
              <div className="flex flex-col gap-2">
                <p>{testimon.review}</p>
                <h1 className="text-xl font-bold text-[#F77706]">
                  {testimon.name}
                </h1>
                <h2>{testimon.address}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Testimonials
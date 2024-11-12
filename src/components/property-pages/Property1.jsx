import React from "react";
import {
  CircleParking,
  CookingPot,
  MapPinned,
  Soup,
  TicketsPlane,
} from "lucide-react";
import { FaWheelchair, FaSmokingBan, FaConciergeBell, FaUmbrella } from "react-icons/fa";
import { MdPets, MdLocalTaxi } from "react-icons/md";
import { BiSwim , BiWifi, BiRestaurant} from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Property1Img from "../../assets/homehero1.png";
import Property2Img from "../../assets/homehero2.png";
import Property3Img from "../../assets/homehero.png";
import Testimonials from "../Testimonials.jsx";

const Property1 = () => {
  const images = [Property1Img, Property2Img, Property3Img];

  return (
    <div className="lg:mx-28 my-12">
      <div className="flex flex-col gap-2 items-start">
        <h1 className="lg:text-4xl text-xl font-bold">
          Rishikesh Riverside Retreat
        </h1>
        <h2 className="flex gap-2 lg:text-lg">
          <MapPinned /> Mall Road Rishikesh
        </h2>
      </div>

      <div className="mt-5 lg:flex lg:gap-8 justify-around">
        <div className="lg:w-[700px] lg:h-[400px] h-[300px] w-full">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop
            className="w-full h-full"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`Property image ${index + 1}`}
                  className="object-cover w-full h-full rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden lg:flex flex-col gap-4 items-start border-2 p-4">
          <h1 className="text-2xl">Reviews by Our Clients</h1>
          <div className="flex flex-col gap-6">
            <div className="flex gap-16 justify-between border-2 p-2 items-center">
              <h1 className="text-xl">Facilities</h1>
              <h2 className="text-xl bg-blue-700 p-2 rounded-lg">9.4</h2>
            </div>
            <div className="flex gap-16 justify-between border-2 p-2 items-center">
              <h1 className="text-xl">Staff</h1>
              <span className="text-xl bg-blue-700 p-2 rounded-lg">9.8</span>
            </div>
            <div>
              <iframe
                className="w-[400px] h-[200px] rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3440.2820180231606!2d78.23708687502547!3d30.428106300292047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908df71bc0af0cd%3A0x1ef9ca2fc507b5cc!2sInto%20The%20Wild%20Stays!5e0!3m2!1sen!2sin!4v1730969960183!5m2!1sen!2sin"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mt-4">
  <h2 className="flex gap-2 items-center border-2 p-3 rounded-lg">
    <CookingPot /> Superb breakfast
  </h2>
  <h2 className="flex gap-2 items-center border-2 p-3 rounded-lg">
    <BiSwim /> Outdoor Swimming pool
  </h2>
  <h2 className="flex gap-2 items-center border-2 p-3 rounded-lg">
    <Soup /> 2 Restaurants
  </h2>
  <h2 className="flex gap-2 items-center border-2 p-3 rounded-lg">
    <CircleParking /> Free onsite parking
  </h2>
  <h2 className="flex gap-2 items-center border-2 p-3 rounded-lg">
    <TicketsPlane /> Airport Shuttle
  </h2>
  <h2 className="flex gap-2 items-center border-2 p-3 rounded-lg">
    <BiSwim /> Spa & Wellness Center
  </h2>
  <h2 className="flex gap-2 items-center border-2 p-3 rounded-lg">
    <CookingPot /> Gourmet Dining Experience
  </h2>
  <h2 className="flex gap-2 items-center border-2 p-3 rounded-lg">
    <CircleParking /> Valet Parking
  </h2>
  <h2 className="flex gap-2 items-center border-2 p-3 rounded-lg">
    <TicketsPlane /> Travel Desk Assistance
  </h2>
  <h2 className="flex gap-2 items-center border-2 p-3 rounded-lg">
    <Soup /> 24/7 Room Service
  </h2>
  <h2 className="flex gap-2 items-center border-2 p-3 rounded-lg">
    <CookingPot /> Farm-to-Table Dining
  </h2>
  {/* Additional amenities */}
  <h2 className="flex gap-2 items-center border-2 p-3 rounded-lg">
    <BiWifi /> High-Speed Internet Access
  </h2>
  <h2 className="flex gap-2 items-center border-2 p-3 rounded-lg">
    <FaWheelchair /> Wheelchair Accessibility
  </h2>
  <h2 className="flex gap-2 items-center border-2 p-3 rounded-lg">
    <FaSmokingBan /> Smoking-Free Property
  </h2>
  <h2 className="flex gap-2 items-center border-2 p-3 rounded-lg">
    <BiRestaurant /> Outdoor Dining Area
  </h2>
  <h2 className="flex gap-2 items-center border-2 p-3 rounded-lg">
    <MdPets /> Pet-Friendly Accommodation
  </h2>
  <h2 className="flex gap-2 items-center border-2 p-3 rounded-lg">
    <FaConciergeBell /> Concierge Service
  </h2>
  <h2 className="flex gap-2 items-center border-2 p-3 rounded-lg">
    <MdLocalTaxi /> Shuttle Service
  </h2>
  <h2 className="flex gap-2 items-center border-2 p-3 rounded-lg">
    <FaUmbrella /> Poolside Bar
  </h2>
</div>



      <div className="flex flex-col gap-4 mt-8">
        <h1 className="text-xl font-bold">
          Get the celebrity treatment with world-class service at Rishikesh
          Riverside Retreat
        </h1>
        <p>
          Built in 1903, Maidens Hotel showcases 19th century colonial charm
          and architecture. It has an outdoor pool, fitness centre and features
          a coffee shop which extends into a charming, open courtyard. Modern
          rooms include a flat-screen satellite TV. Free WiFi is available in
          the rooms of the property.
        </p>
        <p>
          Air-conditioned rooms feature a minibar and free bottled water.
          Private bathroom includes a shower and free toiletries.
        </p>
        <p>
          Just 200 metres from Civil Line Metro station, Maidens Hotel New
          Delhi is 2.5 km from The Red Fort monuments and Chandni Chowk
          (market). New Delhi Airport is about a 1-hour drive from the hotel.
        </p>
      </div>

      <div>
        <Testimonials />
      </div>
    </div>
  );
};

export default Property1;

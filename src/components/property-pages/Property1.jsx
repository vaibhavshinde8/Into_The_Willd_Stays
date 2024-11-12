import React from "react";
import {
  CircleParking,
  CookingPot,
  MapPinned,
  Soup,
  TicketsPlane,
} from "lucide-react";
import Property1Img from "../../assets/homehero1.png";
import { BiSwim } from "react-icons/bi";
import Testimonials from "../Testimonials.jsx";

const Property1 = () => {
  return (
    <div className="lg:mx-28 my-12 ">
      <div className="flex flex-col gap-2 items-start">
        <h1 className="lg:text-4xl text-xl font-bold">
          Rishikesh Riverside Retreat
        </h1>
        <h2 className="flex gap-2 lg:text-lg">
          <MapPinned /> Mall Road Rishikesh
        </h2>
      </div>
      <div className="mt-5 lg:flex lg:gap-8 justify-around">
        <div>
          <img
            className="lg:w-[700px] lg:h-[400px] h-[300px] w-full"
            src={Property1Img}
            alt=""
          />
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
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 mt-4">
          <h2 className="flex gap-2 items-center border-2 p-3 rounded-lg">
            <CookingPot /> Superb breakfast
          </h2>
          <h2 className="flex gap-2 items-center border-2 p-3 rounded-lg">
            <BiSwim className="text-3xl"/> Outdoor Swimming pool
          </h2>
          <h2 className="flex gap-2 items-center border-2 p-3 rounded-lg">
            <Soup /> 2 Restaurents
          </h2>
          <h2 className="flex gap-2 items-center border-2 p-3 rounded-lg">
            <CircleParking /> Free onsite parking
          </h2>
          <h2 className="flex gap-2 items-center border-2 p-3 rounded-lg">
            <TicketsPlane /> Airport Shuttle
          </h2>
        </div>
        <div className="flex justify-start items-start text-start flex-col gap-4 mt-8">
          <h1 className="text-xl font-bold">
            Get the celebrity treatment with world-class service at Rishikesh Riverside Retreat
          </h1>
          <p>
            Built in 1903, Maidens Hotel showcases 19th century colonial charm
            and architecture. It has an outdoor pool, fitness centre and
            features a coffee shop which extends into a charming, open
            courtyard. Modern rooms include a flat-screen satellite TV. Free
            WiFi is available in the rooms of the property.
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
      </div>
      <div>
        <Testimonials/>
      </div>
    </div>
  );
};

export default Property1;

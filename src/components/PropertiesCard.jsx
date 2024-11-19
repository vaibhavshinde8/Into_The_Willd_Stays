import PropTypes from "prop-types";
// import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineBedroomParent, MdOutlineBathroom } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

import { IoPeople } from "react-icons/io5";
// import Image1 from "../assets/homehero1.png";

import Image1 from "../assets/itw/IMG-20240530-WA0015.jpg";
import Image2 from "../assets/goa/goa1.jpg";
import Image3 from "../assets/pineandtails/pnt1.jpg";
import Image4 from "../assets/Sun and Sand Goa/Property Photo and videos/WhatsApp Image 2024-11-11 at 8.34.51 PM.jpeg";

import { Link } from "react-router-dom";

const properties = [
  {
    imgURL: Image1,
    name: "Pines And Tales",
    description:
      "Stay Type;- 4BHK private pool, Seaview Villa, Porvorim North Goa.",
    location: "Tehri",
    rating: 4.7,
    reviews: 30,
    price: 1750,
    bedroom: 5,
    // bathroom: 2,
    guest: 12,
    exploremoreRoute: "/exploremorepnt",
  },
  {
    imgURL: Image2,
    name: "Into the wilds",
    description:
      "Stay in a charming hilltop cottage with breathtaking views of Mussoorie's misty mountains and serene surroundings.",
    location: "Dhanoti",
    rating: 4.6,
    reviews: 50,
    price: 1000,
    bedroom: 4,
    // bathroom: 0,
    guest: 24,
    exploremoreRoute: "/exploremoreitw",
  },
  {
    imgURL: Image3,
    name: "Me:nam Homestay",
    description:
      "A tranquil retreat located in the lush green valleys of Dehradun, perfect for unwinding and enjoying the scenic beauty.",
    location: "Majuli",
    rating: 4.8,
    reviews: 40,
    price: 3500,
    // bedroom: 5,
    // bathroom: 3,
    guest: 30,
    exploremoreRoute: "/exploremorepmnm",
  },
  {
    imgURL: Image4,
    name: "Sun and Sand Villa",
    description:
      "A tranquil retreat located in the lush green valleys of Dehradun, perfect for unwinding and enjoying the scenic beauty.",
    location: "Goa",
    rating: 4.8,
    reviews: 40,
    price: 1200,
    // bedroom: 5,
    // bathroom: 3,
    guest: 10,
    exploremoreRoute: "/exploremoresas",
  },
];

const PropertiesCard = ({ selectedLocation = "All" }) => {
  const filteredProperties =
    selectedLocation === "All"
      ? properties
      : properties.filter((property) => property.location === selectedLocation);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8 mx-4 sm:mx-0 max-w-6xl ">
      {filteredProperties.map((property) => (
        <div
          key={property.name}
          className="relative bg-white text-gray-900 rounded-lg shadow-lg border border-gray-200 hover:shadow-2xl transform transition-all duration-300 hover:scale-105 overflow-hidden"
        >
          {/* Image Section */}
          <div className="relative">
            <img
              className="rounded-t-lg h-72 w-full object-cover transition-transform transform hover:scale-105 duration-300"
              src={property.imgURL}
              alt={property.name}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-t-lg opacity-60"></div>
          </div>

          {/* Property Details Section */}
          <div className="p-6 space-y-4">
            <h2 className="font-bold text-[#091F3C] text-2xl">
              {property.name}
            </h2>
            <div className="flex flex-wrap space-x-2 mb-4 justify-center sm:justify-start">
              {/* <span className="bg-[#43A181] rounded-full px-3 py-1 text-sm text-white font-semibold">
                      {property.location.city}, {property.location.state}
                    </span> */}
              <span className="flex items-center bg-[#43A181] rounded-full px-3 py-1 text-sm text-white font-semibold">
                <FaMapMarkerAlt className="mr-1" />{" "}
                {/* Add the location icon */}
                {property.location}
              </span>
            </div>

            <div className="flex gap-2 mt-4 text-gray-600 text-sm">
              <div className="flex items-center gap-1">
                <MdOutlineBedroomParent />
                {property.bedroom} Bedroom{property.bedroom > 1 ? "s" : ""}
              </div>
              <div className="flex items-center gap-1">
                <MdOutlineBathroom />
                {property.bathroom} Bathroom{property.bathroom > 1 ? "s" : ""}
              </div>
              <div className="flex items-center gap-1">
                <IoPeople />
                {property.guest} Guest{property.guest > 1 ? "s" : ""}
              </div>
            </div>

            <div className="flex items-center justify-between mt-4">
              <h4 className="text-lg font-semibold text-gray-800">
                From ₹
                <span className="text-[#43A181] font-bold">
                  {property.price}
                </span>
                /Night
              </h4>
              <span className="text-sm text-gray-400">(per person)</span>
            </div>
          </div>

          {/* Price and Booking Section */}
          <div className="flex items-center justify-between px-6 py-4 bg-[#091F3C] rounded-b-lg text-white">
            <Link
              to={property.exploremoreRoute}
              className="px-4 py-2 border border-white rounded-full hover:bg-white hover:text-[#43A181] transition-colors duration-300 font-medium"
            >
              Explore More
            </Link>
            <button className="bg-white text-[#091F3C] px-4 py-2 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300">
              Book Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

// Add prop validation
PropertiesCard.propTypes = {
  selectedLocation: PropTypes.string,
};

export default PropertiesCard;

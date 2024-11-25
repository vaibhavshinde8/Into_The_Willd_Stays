import React from 'react';
import PropTypes from 'prop-types';
import { MdOutlineBedroomParent, MdOutlineBathroom } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { Link } from "react-router-dom";

// Import images (keep your existing imports)
import Image1 from "../assets/itw/IMG-20240530-WA0015.jpg";
import Image2 from "../assets/pineandtails/pnt1.jpg";
import Image3 from "../assets/majuli/majuli1.jpeg";
import Image4 from "../assets/SunandSandGoa/52PM.jpeg";

const properties = [
  {
    imgURL: Image1,
    name: "Into the wilds stays",
    description: "Stay in a charming hilltop cottage with breathtaking views of Mussoorie's misty mountains and serene surroundings.",
    location: "Dhanolti",
    rating: 4.6,
    reviews: 50,
    price: 1000,
    bedroom: 4,
    guest: 24,
    exploremoreRoute: "/exploremoreitw",
  },
  {
    imgURL: Image2,
    name: "ITW: Pines And Tails",
    description: "Stay Type:- 4BHK private pool, Seaview Villa, Porvorim North Goa.",
    location: "Tehri",
    rating: 4.7,
    reviews: 30,
    price: 1750,
    bedroom: 5,
    guest: 12,
    exploremoreRoute: "/exploremorepnt",
  },
  {
    imgURL: Image3,
    name: "ITW: Me:nam Homestay",
    description: "A tranquil retreat located in the lush green valleys of Dehradun, perfect for unwinding and enjoying the scenic beauty.",
    location: "Majuli",
    rating: 4.8,
    reviews: 40,
    price: 3500,
    guest: 30,
    exploremoreRoute: "/exploremoremnm",
  },
  {
    imgURL: Image4,
    name: "ITW: Sun and Sand Villa",
    description: "A tranquil retreat located in the lush green valleys of Dehradun, perfect for unwinding and enjoying the scenic beauty.",
    location: "Goa",
    rating: 4.8,
    reviews: 40,
    price: 1200,
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {filteredProperties.map((property, index) => (
        <div 
          key={index} 
          className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
        >
          {/* Image Section */}
          <div className="relative h-64 w-full">
            <img 
              src={property.imgURL} 
              alt={property.name} 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-white/75 px-3 py-1 rounded-full flex items-center">
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-gray-800">{property.rating}</span>
              <span className="text-gray-500 ml-2">({property.reviews} reviews)</span>
            </div>
          </div>

          {/* Property Details Section */}
          <div className="p-5">
            <h2 className="text-xl font-bold mb-2 text-gray-800">{property.name}</h2>
            <p className="text-gray-600 mb-4 line-clamp-2">{property.description}</p>

            <div className="flex items-center text-gray-700 mb-3">
              <FaMapMarkerAlt className="mr-2 text-[#43A181]" />
              <span>{property.location}</span>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-4 text-sm">
              <div className="flex items-center">
                <MdOutlineBedroomParent className="mr-1 text-[#43A181]" />
                <span>{property.bedroom} Bedroom{property.bedroom > 1 ? 's' : ''}</span>
              </div>
              <div className="flex items-center">
                <IoPeople className="mr-1 text-[#43A181]" />
                <span>{property.guest} Guest{property.guest > 1 ? 's' : ''}</span>
              </div>
            </div>

            {/* Price and Booking Section */}
            <div className="flex justify-between items-center">
              <div>
                <span className="text-xl font-bold text-[#43A181]">₹{property.price}</span>
                <span className="text-sm text-gray-500">/night</span>
              </div>
              <Link 
                to={property.exploremoreRoute} 
                onClick={() => window.scrollTo(0, 0)}
                className="px-4 py-2 bg-[#43A181] text-white rounded-full hover:bg-[#2D7E63] transition"
              >
                Explore More
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

PropertiesCard.propTypes = {
  selectedLocation: PropTypes.string,
};

export default PropertiesCard;
import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
  MdOutlineBedroomParent,
  MdOutlineBathroom,
  MdExplore,
} from "react-icons/md";
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
    name: "Into The Wild Stays",
    description:
      "Stay in a charming hilltop cottage with breathtaking views of Mussoorie's misty mountains and serene surroundings.",
    location: "Dhanolti",
    rating: 4.6,
    reviews: 50,
    price: 4000,
    bedroom: 4,
    guest: 24,
    exploremoreRoute: "/exploremoreitw",
    tags: ["Mountain", "Scenic", "Luxury"],
  },
  {
    imgURL: Image2,
    name: "ITW: Pines And Tails",
    description:
      "Stay Type;- 4BHK private pool, Seaview Villa, Porvorim North Goa.",
    location: "Tehri",
    rating: 4.7,
    reviews: 30,
    price: 3500,
    bedroom: 5,
    guest: 12,
    exploremoreRoute: "/exploremorepnt",
    tags: ["Pool", "Seaview", "Modern"],
  },
  {
    imgURL: Image3,
    name: "ITW: Me:nam Homestay",
    description:
      "A tranquil retreat located in the lush green valleys of Dehradun, perfect for unwinding and enjoying the scenic beauty.",
    location: "Majuli",
    rating: 4.8,
    reviews: 40,
    price: 3500,
    guest: 30,
    exploremoreRoute: "/exploremoremnm",
    tags: ["Eco", "Green", "Tranquil"],
  },
  {
    imgURL: Image4,
    name: "ITW: Sun and Sand Villa",
    description:
      "A tranquil retreat located in the lush green valleys of Dehradun, perfect for unwinding and enjoying the scenic beauty.",
    location: "Goa",
    rating: 4.8,
    reviews: 40,
    price: "11000-16000",
    guest: 10,
    exploremoreRoute: "/exploremoresas",
    tags: ["Luxury", "Beach", "Premium"],
  },
];

const PropertiesCard = ({ selectedLocation = "All" }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const filteredProperties =
    selectedLocation === "All"
      ? properties
      : properties.filter((property) => property.location === selectedLocation);

  return (
    <div className="min-h-screen  ">
      <div className="container mx-auto">
        <h1 className="text-4xl font-extralight text-center text-gray-800 mb-12 tracking-wide">
          Discover Your <span className="text-emerald-600">Next Adventure</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProperties.map((property, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                type: "spring",
                stiffness: 50,
              }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative group"
            >
              <div
                className={`
                absolute inset-0 
                ${
                  hoveredCard === index
                    ? "bg-black/30 backdrop-blur-sm"
                    : "bg-transparent"
                }
                transition-all duration-300 
                                flex items-center justify-center
              `}
              >
                {hoveredCard === index && (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-center"
                  >
                    <Link
                      to={property.exploremoreRoute}
                      className="
                        px-6 py-3 
                        bg-[#0F2642]
                        text-white 
                         
                        flex items-center 
                        space-x-2 
                        hover:bg-emerald-600
                        transition-all
                        duration-300
                        mx-auto
                      "
                    >
                      <MdExplore className="mr-2" />
                      Explore More
                    </Link>
                  </motion.div>
                )}
              </div>

              <div
                className={`
                bg-white 
                
                overflow-hidden 
                shadow-lg 
                border-2 
                ${
                  hoveredCard === index
                    ? "border-emerald-500"
                    : "border-transparent"
                }
                transition-all 
                duration-300
                transform 
                ${hoveredCard === index ? "scale-105" : "scale-100"}
              `}
              >
                {/* Image Section */}
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src={property.imgURL}
                    alt={property.name}
                    className={`
                      absolute 
                      inset-0 
                      w-full 
                      h-full 
                      object-cover 
                      transition-transform 
                      duration-300 
                      ${
                        hoveredCard === index
                          ? "scale-110 brightness-50"
                          : "scale-100 brightness-100"
                      }
                    `}
                  />
                  <div className="absolute top-4 right-4 bg-black/40 px-3 py-1  flex items-center">
                    <span className="text-emerald-400 mr-1">★</span>
                    <span className="text-white">{property.rating}</span>
                    <span className="text-gray-200 ml-2">
                      ({property.reviews})
                    </span>
                  </div>
                </div>

                {/* Property Details Section */}
                <div className="p-6 text-gray-800">
                  <h2 className="text-2xl font-bold mb-3 text-emerald-600">
                    {property.name}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {property.description}
                  </p>

                  <div className="flex items-center mb-4">
                    <FaMapMarkerAlt className="mr-2 text-emerald-500" />
                    <span className="text-gray-700">{property.location}</span>
                  </div>

                  <div className="flex justify-between mb-4">
                    <div className="flex items-center">
                      <MdOutlineBedroomParent className="mr-1 text-emerald-500" />
                      <span className="text-gray-700">
                        {property.bedroom} Bedroom
                        {property.bedroom > 1 ? "s" : ""}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <IoPeople className="mr-1 text-emerald-500" />
                      <span className="text-gray-700">
                        {property.guest} Guest{property.guest > 1 ? "s" : ""}
                      </span>
                    </div>
                  </div>

                  {/* Tags and Price Section */}
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-xl font-bold text-emerald-600">
                        ₹{property.price}
                      </span>
                      <span className="text-sm text-gray-500 ml-1">/night</span>
                    </div>

                    <Link
                      to={property.exploremoreRoute}
                      onClick={() => window.scrollTo(0, 0)}
                      className="px-4 py-2 bg-[#0F2642] text-white  hover:bg-emerald-800 transition"
                    >
                      Explore More
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

PropertiesCard.propTypes = {
  selectedLocation: PropTypes.string,
};

export default PropertiesCard;

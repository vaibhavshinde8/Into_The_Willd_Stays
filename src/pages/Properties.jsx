import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaBed, FaUsers, FaStar } from "react-icons/fa";

import SidebarFilter from "../components/SidebarFilter";
import Image1 from "../assets/itw/IMG-20240530-WA0015.jpg";
import Image2 from "../assets/pineandtails/pnt1.jpg";
import Image3 from "../assets/majuli/majuli1.jpeg";
import Image4 from "../assets/SunandSandGoa/52PM.jpeg";
import BookingButton from "../components/BookingButton";

import TourBanner from "../components/TourBanner";

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
    bedroom: 5,

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
    bedroom: 5,
    guest: 10,
    price: "11000-16000",
    exploremoreRoute: "/exploremoresas",
    tags: ["Luxury", "Beach", "Premium"],
  },
];

const Properties = () => {
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleFilterChange = ({ location }) => {
    let filtered = properties;

    if (location) {
      filtered = filtered.filter(
        (property) => property.location.toLowerCase() === location.toLowerCase()
      );
    }

    setFilteredProperties(filtered);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.trvl-media.com/lodging/109000000/108380000/108370800/108370765/28b3dc50.jpg?impolicy=resizecrop&rw=1200&ra=fit')] bg-cover bg-center bg-fixed transform scale-105">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 to-gray-900/60" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative h-full max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-center"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent">
              Discover
            </span>
            <br />
            Your Perfect Stay
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mb-8">
            Explore our handpicked collection of stunning properties in
            spectacular locations
          </p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-1/4">
            <div className="sticky top-24">
              <SidebarFilter
                onFilterChange={handleFilterChange}
                properties={properties}
              />
            </div>
          </div>

          {/* Properties List */}
          <motion.div
            className="w-full lg:w-3/4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="grid gap-8">
              {filteredProperties.map((property, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative bg-white  overflow-hidden shadow-md transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex flex-col md:flex-row h-full">
                    {/* Image Section */}
                    <div className="md:w-2/5 relative overflow-hidden h-64 md:h-auto">
                      <img
                        src={property.imgURL}
                        alt={property.name}
                        className="w-full h-[50vh] object-cover transition-transform duration-700 hover:scale-110"
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 ">
                        <div className="flex items-center space-x-1">
                          <FaStar className="text-yellow-500" />
                          <span className="font-semibold">
                            {property.rating}
                          </span>
                          <span className="text-sm text-gray-600">
                            ({property.reviews})
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 p-6 flex flex-col justify-between">
                      <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-3">
                          {property.name}
                        </h2>
                        <p className="text-gray-600 mb-4">
                          {property.description}
                        </p>

                        <div className="flex flex-wrap gap-3 mb-4">
                          <span className="flex items-center space-x-2 bg-teal-50 text-teal-700 px-3 py-1  text-sm">
                            <FaMapMarkerAlt className="text-teal-500" />
                            <span>{property.location}</span>
                          </span>
                          <span className="flex items-center space-x-2 bg-blue-50 text-blue-700 px-3 py-1  text-sm">
                            <FaBed className="text-blue-500" />
                            <span>{property.bedroom} Cottages</span>
                          </span>
                          <span className="flex items-center space-x-2 bg-purple-50 text-purple-700 px-3 py-1  text-sm">
                            <FaUsers className="text-purple-500" />
                            <span>{property.guest} Guests</span>
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex flex-col">
                          <span className="text-3xl font-bold text-gray-900">
                            ₹{property.price}
                          </span>
                          <span className="text-sm text-gray-500">
                            per night / Cottage
                          </span>
                        </div>

                        <div className="flex space-x-3">
                          <Link
                            to={property.exploremoreRoute}
                            onClick={() => window.scrollTo(0, 0)}
                            className="px-6 my-4 py-2  text-black bg-gray-100  hover:bg-teal-100 transition-colors"
                          >
                            Details
                          </Link>
                          <BookingButton property={property} />
                          {/* <button className="px-6 py-2 bg-[#43A181] text-white rounded-full hover:bg-[#358268] transition-colors">
                            Book now
                          </button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <TourBanner />
    </div>
  );
};

export default Properties;

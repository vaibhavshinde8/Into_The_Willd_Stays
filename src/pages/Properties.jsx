import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaBed, FaUsers, FaStar } from "react-icons/fa";
import SidebarFilter from "../components/SidebarFilter";
import BookingButton from "../components/BookingButton";
import TourBanner from "../components/TourBanner";
import axios from "axios";
import { BASE_URL } from "../utils/baseurl";

const PropertyShimmer = () => (
  <div className="bg-white shadow-md animate-pulse">
    <div className="flex flex-col md:flex-row h-full">
      <div className="md:w-2/5 h-64 md:h-auto bg-gray-200"></div>
      <div className="flex-1 p-6">
        <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-full mb-3"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6 mb-4"></div>
        <div className="flex gap-3 mb-4">
          <div className="h-8 bg-gray-200 rounded w-24"></div>
          <div className="h-8 bg-gray-200 rounded w-24"></div>
          <div className="h-8 bg-gray-200 rounded w-24"></div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="h-10 bg-gray-200 rounded w-32"></div>
          <div className="h-10 bg-gray-200 rounded w-48"></div>
        </div>
      </div>
    </div>
  </div>
);

const Properties = () => {
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(`${BASE_URL}/properties/getProperties`);
        setProperties(res.data.properties);
        setFilteredProperties(res.data.properties);
      } catch (error) {
        console.error('Error fetching properties:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProperties();
  }, []);

  const handleFilterChange = ({ location }) => {
    let filtered = properties;

    if (location) {
      filtered = filtered.filter(
        (property) => property.location.toLowerCase() === location.toLowerCase()
      );
    }

    setFilteredProperties(filtered);
  };
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <div className="relative h-[80vh] overflow-hidden ">
        <div className="absolute  inset-0 bg-[url('https://images.trvl-media.com/lodging/109000000/108380000/108370800/108370765/28b3dc50.jpg?impolicy=resizecrop&rw=1200&ra=fit')] bg-cover bg-center bg-fixed transform scale-105">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 to-gray-900/60" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative h-full max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-center"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 ">
            <span className="bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent ">
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
              {isLoading ? (
                // Show 3 shimmer effects while loading
                [...Array(3)].map((_, index) => (
                  <PropertyShimmer key={index} />
                ))
              ) : (
                // Show actual properties when loaded
                filteredProperties.map((property, index) => (
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
                          src={property.images[0]}
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
                            {property?.description?.length > 250 
                              ? `${property.description.substring(0, 250)}...` 
                              : property?.description}
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
                              to={`/property/${property._id}`}
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
                ))
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <TourBanner />
    </div>
  );
};

export default Properties;

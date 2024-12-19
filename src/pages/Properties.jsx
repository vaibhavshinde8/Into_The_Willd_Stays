import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaBed, FaUsers, FaStar, FaSearch, FaCalendar } from "react-icons/fa";
import SidebarFilter from "../components/SidebarFilter";
import BookingButton from "../components/BookingButton";
import TourBanner from "../components/TourBanner";
import axios from "axios";
import { BASE_URL } from "../utils/baseurl";

const PropertyShimmer = () => (
  <div className="bg-white shadow-md animate-pulse rounded-lg">
    <div className="flex flex-col md:flex-row h-full">
      <div className="md:w-2/5 h-64 md:h-auto bg-gray-200 rounded-l-lg"></div>
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

const locations = ["Dhanolti", "Goa", "Tehri", "Majuli","Rishikesh"];

const Properties = () => {
  const navigate = useNavigate();
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useState({
    location: "",
    checkIn: "",
    checkOut: "",
    adults: 1,
    children: 0,
  });

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

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams);
    const location = urlParams.get('location') || "";
    const checkIn = urlParams.get('checkIn') || "";
    const checkOut = urlParams.get('checkOut') || "";
    const adults = urlParams.get('adults') ? parseInt(urlParams.get('adults')) : 1;
    const children = urlParams.get('children') ? parseInt(urlParams.get('children')) : 0;
    setSearchParams({ location, checkIn, checkOut, adults, children });
    
    if (location) {
      handleFilterChange({ location: location });
    }
  }, [properties]);

  const handleSearch = () => {
    const params = new URLSearchParams();
    Object.entries(searchParams).forEach(([key, value]) => {
      if (value) params.append(key, value);
    });
    navigate(`/properties?${params.toString()}`);
    handleFilterChange({ location: searchParams.location }); // Filter when Explore button is clicked
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
      <div className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.trvl-media.com/lodging/109000000/108380000/108370800/108370765/28b3dc50.jpg?impolicy=resizecrop&rw=1200&ra=fit')] bg-cover bg-center bg-fixed transform scale-105">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 to-gray-900/60" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative h-full max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-center"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
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

      {/* Search Form */}
      <motion.div
        className="relative z-10 shadow-2xl rounded-3xl -mt-24 mb-16 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="container mx-auto px-4 lg:px-8 py-8 rounded-3xl bg-white/90 backdrop-blur-md">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 items-end">
            {/* Location */}
            <div className="md:col-span-1 col-span-2">
              <label className="block text-gray-700 mb-2 text-sm">Location</label>
              <select
                name="location"
                value={searchParams.location}
                onChange={handleInputChange}
                className="w-full h-[46px] px-4 py-3 bg-white border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-3xl"
              >
                <option value="" className="text-gray-500">
                  Select Location
                </option>
                {locations.map((loc) => (
                  <option key={loc} value={loc} className="text-gray-900">
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            {/* Check-in */}
            <div className="md:col-span-1">
              <label className="block text-gray-700 mb-2 text-sm">Check-in</label>
              <div className="relative cursor-pointer" onClick={() => document.getElementById('check-in-date').showPicker()}>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaCalendar className="text-gray-400" />
                </div>
                <input
                  id="check-in-date"
                  type="date"
                  name="checkIn"
                  value={searchParams.checkIn}
                  onChange={handleInputChange}
                  className="w-full h-[46px] pl-10 pr-4 py-3 bg-white border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-3xl cursor-pointer"
                />
                <div className="absolute inset-0" onClick={() => document.getElementById('check-in-date').showPicker()}></div>
              </div>
            </div>

            {/* Check-out */}
            <div className="md:col-span-1">
              <label className="block text-gray-700 mb-2 text-sm">Check-out</label>
              <div className="relative cursor-pointer" onClick={() => document.getElementById('check-out-date').showPicker()}>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaCalendar className="text-gray-400" />
                </div>
                <input
                  id="check-out-date"
                  type="date"
                  name="checkOut"
                  value={searchParams.checkOut}
                  onChange={handleInputChange}
                  className="w-full h-[46px] pl-10 pr-4 py-3 bg-white border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-3xl cursor-pointer"
                />
                <div className="absolute inset-0" onClick={() => document.getElementById('check-out-date').showPicker()}></div>
              </div>
            </div>

            {/* Adults */}
            <div className="md:col-span-1">
              <label className="block text-gray-700 mb-2 text-sm">Adults</label>
              <select
                name="adults"
                value={searchParams.adults}
                onChange={handleInputChange}
                className="w-full h-[46px] px-4 py-3 bg-white border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-3xl"
              >
                {[...Array(9)].map((_, i) => (
                  <option key={i + 1} value={i + 1} className="text-gray-900">
                    {i + 1} Adult{i > 0 ? "s" : ""}
                  </option>
                ))}
              </select>
            </div>

            {/* Children */}
            <div className="md:col-span-1">
              <label className="block text-gray-700 mb-2 text-sm">Children</label>
              <select
                name="children"
                value={searchParams.children}
                onChange={handleInputChange}
                className="w-full h-[46px] px-4 py-3 bg-white border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-3xl"
              >
                {[...Array(9)].map((_, i) => (
                  <option key={i} value={i} className="text-gray-900">
                    {i} Child{i !== 1 ? "ren" : ""}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Button */}
            <div className="md:col-span-1 col-span-2 flex items-end">
              <button
                onClick={handleSearch}
                className="w-full h-[50px] py-3 bg-[#0F2642] text-white border border-white
                hover:bg-[#0F2642]
                flex items-center justify-center space-x-3 
                rounded-3xl"
              >
                <FaSearch />
                <span>Explore</span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>

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
            <div className="grid gap-6 md:gap-8">
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
                    className="relative bg-white overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl rounded-lg border border-gray-200"
                  >
                    <div className="flex flex-col md:flex-row h-full">
                      {/* Image Section */}
                      <div className="md:w-2/5 relative overflow-hidden h-64 md:h-auto">
                        <img
                          src={property.images[0]}
                          alt={property.name}
                          className="w-full h-[50vh] object-cover transition-transform duration-700 hover:scale-110 rounded-t-lg md:rounded-l-lg"
                        />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg shadow-md">
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
                            <span className="flex items-center space-x-2 bg-teal-50 text-teal-700 px-3 py-1 rounded-lg text-sm">
                              <FaMapMarkerAlt className="text-teal-500" />
                              <span>{property.location}</span>
                            </span>
                            <span className="flex items-center space-x-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-sm">
                              <FaBed className="text-blue-500" />
                              <span>{property.bedroom} Cottages</span>
                            </span>
                            <span className="flex items-center space-x-2 bg-purple-50 text-purple-700 px-3 py-1 rounded-lg text-sm">
                              <FaUsers className="text-purple-500" />
                              <span>{property.guest} Guests</span>
                            </span>
                          </div>
                        </div>

                        {/* Price and Button Section */}
                        <div className="flex flex-col md:flex-row items-center justify-between mt-4">
                          <div className="flex flex-col mb-4 md:mb-0 md:w-1/2">
                            <span className="text-3xl font-bold text-gray-900">
                              ₹{property.price}
                            </span>
                            <span className="text-sm text-gray-500">
                              per night / Cottage
                            </span>
                          </div>

                          <div className="flex flex-col space-y-3 md:w-1/2">
                            <BookingButton property={property} />
                          </div>
                            <Link
                              to={`/property/${property._id}`}
                              onClick={() => window.scrollTo(0, 0)}
                              className="px-6 py-2 text-black bg-gray-100 hover:bg-teal-100 transition-colors rounded-lg text-center"
                            >
                              Details
                            </Link>
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

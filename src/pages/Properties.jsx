import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaBed,
  FaUsers,
  FaStar,
  FaSearch,
  FaCalendar,
} from "react-icons/fa";
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

const locations = ["Dhanolti", "Goa", "Tehri", "Majuli", "Rishikesh"];

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
        console.error("Error fetching properties:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProperties();
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams);
    const location = urlParams.get("location") || "";
    const checkIn = urlParams.get("checkIn") || "";
    const checkOut = urlParams.get("checkOut") || "";
    const adults = urlParams.get("adults")
      ? parseInt(urlParams.get("adults"))
      : 1;
    const children = urlParams.get("children")
      ? parseInt(urlParams.get("children"))
      : 0;

    // Check if parameters are stored in sessionStorage
    const storedParams = sessionStorage.getItem("searchParams");
    console.log(storedParams);
    if (storedParams) {
      const { location, checkIn, checkOut, adults, children } =
        JSON.parse(storedParams);
      setSearchParams({ location, checkIn, checkOut, adults, children });
      if (location) {
        handleFilterChange({ location: location });
      }
    } else {
      navigate("/properties", { replace: true });
    }
  }, [properties]);
  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.removeItem("searchParams");
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
  const handleSearch = () => {
    const params = new URLSearchParams();
    Object.entries(searchParams).forEach(([key, value]) => {
      if (value) params.append(key, value);
    });
    handleFilterChange({ location: searchParams.location }); // Filter when Explore button is clicked
  };

  const handleFilterChange = ({ location }) => {
    let filtered = properties;
    console.log(location);
    console.log(filtered);
    if (location) {
      filtered = filtered.filter(
        (property) => property.location.toLowerCase() === location.toLowerCase()
      );
    }
    console.log(filtered);
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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleGuestDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const closeGuestDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.trvl-media.com/lodging/109000000/108380000/108370800/108370765/28b3dc50.jpg?impolicy=resizecrop&rw=1200&ra=fit')] bg-cover bg-center bg-fixed transform scale-105">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/100 to-gray-900/60" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative h-full max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-center"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-300 to-cyan-100 bg-clip-text text-transparent">
              Discover
              <br />
              <span className="text-white/60">Your Perfect Stay</span>
            </span>
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
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-2 items-end">
            {/* Location */}
            <div className="md:col-span-1 col-span-2">
              <label className="block text-gray-700 mb-2 text-sm">
                Location
              </label>
              <select
                name="location"
                value={searchParams.location}
                onChange={handleInputChange}
                className="w-full h-[46px] px-4 py-3 bg-white border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-3xl"
              >
                <option value="" className="text-gray-500">
                  Select Location
                </option>
                {locations?.map((loc) => (
                  <option key={loc} value={loc} className="text-gray-900">
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            {/* Check-in */}
            <div className="md:col-span-1">
              <label className="block text-gray-700 mb-2 text-sm">
                Check-in
              </label>
              <div
                className="relative cursor-pointer"
                onClick={() =>
                  document.getElementById("check-in-date").showPicker()
                }
              >
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaCalendar className="text-gray-400" />
                </div>
                <input
                  id="check-in-date"
                  type="date"
                  name="checkIn"
                  value={searchParams.checkIn}
                  onChange={handleInputChange}
                  min={today} // Prevent past dates
                  className="w-full h-[46px] pl-10 pr-4 py-3 bg-white border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-3xl cursor-pointer"
                />
                <div
                  className="absolute inset-0"
                  onClick={() =>
                    document.getElementById("check-in-date").showPicker()
                  }
                ></div>
              </div>
            </div>

            {/* Check-out */}
            <div className="md:col-span-1">
              <label className="block text-gray-700 mb-2 text-sm">
                Check-out
              </label>
              <div
                className="relative cursor-pointer"
                onClick={() =>
                  document.getElementById("check-out-date").showPicker()
                }
              >
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaCalendar className="text-gray-400" />
                </div>
                <input
                  id="check-out-date"
                  type="date"
                  name="checkOut"
                  value={searchParams.checkOut}
                  onChange={handleInputChange}
                  min={searchParams.checkIn || today} // Prevent past dates and ensure check-out is after check-in
                  className="w-full h-[46px] pl-10 pr-4 py-3 bg-white border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-3xl cursor-pointer"
                />
                <div
                  className="absolute inset-0"
                  onClick={() =>
                    document.getElementById("check-out-date").showPicker()
                  }
                ></div>
              </div>
            </div>

            {/* Adults */}
            <div className="md:col-span-1 w-full">
              <label className="block text-gray-700 mb-2 text-sm ">Guests</label>
              <div className="relative">
                {/* Dropdown Button */}
                <button
                  onClick={toggleGuestDropdown}
                  className="w-full md:w-56 h-12 px-4 py-2 bg-white border border-gray-300 text-gray-900 rounded-lg text-left flex items-center justify-between hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-3xl"
                >
                  <span className="text-sm w-full">
                    {`${searchParams.adults} Adult${searchParams.adults > 1 ? "s" : ""
                      } and ${searchParams.children} Child${searchParams.children > 1 ? "ren" : ""
                      }`}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {/* Dropdown Content */}
                {isDropdownOpen && (
                  <div
                    className="absolute z-50 mt-2 w-full md:w-64 bg-white border border-gray-300 rounded-lg shadow-lg p-2"
                    style={{ position: "absolute", bottom: "auto" }} // Prevents clipping
                  >
                    {/* Adults */}
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <p className="text-gray-700 font-medium text-sm">
                          Adults
                        </p>
                      </div>
                      <div className="flex items-center">
                        <button
                          onClick={() =>
                            handleInputChange({
                              target: {
                                name: "adults",
                                value: searchParams.adults - 1,
                              },
                            })
                          }
                          className="px-0.5 py-0.5 bg-gray-100 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50"
                          disabled={searchParams.adults <= 0}
                        >
                          −
                        </button>
                        <span className="mx-2 text-gray-900 text-sm">
                          {searchParams.adults}
                        </span>
                        <button
                          onClick={() =>
                            handleInputChange({
                              target: {
                                name: "adults",
                                value: searchParams.adults + 1,
                              },
                            })
                          }
                          className="px-0.5 py-0.5 bg-gray-100 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-200"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Children */}
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <p className="text-gray-700 font-medium text-sm">
                          Children
                        </p>
                      </div>
                      <div className="flex items-center">
                        <button
                          onClick={() =>
                            handleInputChange({
                              target: {
                                name: "children",
                                value: searchParams.children - 1,
                              },
                            })
                          }
                          className="px-0.5 py-0.5 bg-gray-100 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50"
                          disabled={searchParams.children <= 0}
                        >
                          −
                        </button>
                        <span className="mx-2 text-gray-900 text-sm">
                          {searchParams.children}
                        </span>
                        <button
                          onClick={() =>
                            handleInputChange({
                              target: {
                                name: "children",
                                value: searchParams.children + 1,
                              },
                            })
                          }
                          className="px-0.5 py-0.5 bg-gray-100 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-200"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Done Button */}
                    <div className="mt-2">
                      <button
                        onClick={closeGuestDropdown}
                        className="w-full h-[50px] py-3 bg-[#0F2642] text-white border border-white
                hover:bg-[#0F2642]
                flex items-center justify-center space-x-3 
                rounded-3xl"
                      >
                        Done
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Search Button */}
            <div className="md:col-span-1 col-span-1 flex items-end ">
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
  <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
    {/* Sidebar */}
    <div className="w-full lg:w-1/4">
      <div className="lg:sticky lg:top-24">
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
      <div className="grid gap-4 sm:gap-6 md:gap-8">
        {isLoading
          ? [...Array(3)]?.map((_, index) => <PropertyShimmer key={index} />)
          : filteredProperties?.map((property, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative bg-white overflow-hidden shadow-md sm:shadow-lg transform transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-xl sm:hover:shadow-2xl rounded-lg border border-gray-200"
              >
                <Link to={`/property/${property._id}`}>
                  <div className="flex flex-col md:flex-row h-full">
                    {/* Image Section */}
                    <div className="md:w-2/5 relative overflow-hidden h-48 sm:h-56 md:h-64 lg:h-[55vh]">
                      <img
                        src={property.images[0]}
                        alt={property.name}
<<<<<<< HEAD
                        className="w-full h-full object-cover md:mt-4  lg:mt-0 transition-transform duration-700 hover:scale-110 md:rounded-l-lg"
=======
                        className="w-full h-full object-cover  transition-transform duration-700 hover:scale-110 md:rounded-tl-lg"
>>>>>>> 269028f379877ef55c9146220578af2d6f57dd88
                      />
                      <div className="absolute top-3 left-3 sm:top-4  sm:left-4 bg-white/90 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-md sm:rounded-lg shadow-sm sm:shadow-md">
                        <div className="flex items-center space-x-1 text-sm sm:text-base">
                          <FaStar className="text-yellow-500" />
                          <span className="font-semibold">
                            {property.rating}
                          </span>
                          <span className="text-xs sm:text-sm text-gray-600">
                            ({property.reviews})
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between">
                      <div>
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">
                          {property.name}
                        </h2>
                        <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                          {property?.description?.length > 200
                            ? `${property.description.substring(0, 200)}...`
                            : property?.description}
                        </p>

                        <div className="flex flex-wrap gap-2 sm:gap-3 mb-3 sm:mb-4">
                          <span className="flex items-center space-x-1 sm:space-x-2 bg-teal-50 text-teal-700 px-2 sm:px-3 py-1 rounded-md sm:rounded-lg text-xs sm:text-sm">
                            <FaMapMarkerAlt className="text-teal-500 flex-shrink-0" />
                            <span>{property.location}</span>
                          </span>
                          <span className="flex items-center space-x-1 sm:space-x-2 bg-blue-50 text-blue-700 px-2 sm:px-3 py-1 rounded-md sm:rounded-lg text-xs sm:text-sm">
                            <FaBed className="text-blue-500 flex-shrink-0" />
                            <span>{property.bedroom} {property?.cottage ? "Cottages" : "Rooms"}</span>
                          </span>
                          <span className="flex items-center space-x-1 sm:space-x-2 bg-purple-50 text-purple-700 px-2 sm:px-3 py-1 rounded-md sm:rounded-lg text-xs sm:text-sm">
                            <FaUsers className="text-purple-500 flex-shrink-0" />
                            <span>{property.guest} Guests</span>
                          </span>
                        </div>
                      </div>

                      {/* Price and Button Section */}
                      <div className="flex  items-start sm:items-center md:flex-row  justify-between mt-3 sm:mt-4">
                        <div className="flex flex-col ps-4 sm:ps-0  sm:mb-0 md:w-1/2">
                          <span className="text-2xl sm:text-3xl font-bold text-gray-900">
                            ₹{property.price}
                          </span>
                          <span className="text-xs sm:text-sm text-gray-500">
                            per night / {property?.cottage ? "Cottage" : "Room"}
                          </span>
                        </div>

                        <div className="flex items-center justify-end  w-full h-full sm:w-auto space-y-2 sm:space-y-3">
                          <BookingButton property={property} />
                          <Link
                            to={`/property/${property._id}`}
                            style={{marginTop:"0px"}}
                            onClick={() => window.scrollTo(0, 0)}
                            className="hidden px-4 mb-8 mt-0 pt-[0.75rem] pb-[0.75rem] sm:pt-[0.6rem] sm:pb-[0.6rem]  sm:px-6  text-sm sm:text-base font-semibold bg-gradient-to-r from-blue-300 to-cyan-300 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 rounded-lg text-center"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
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

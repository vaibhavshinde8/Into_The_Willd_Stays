import { useState, useEffect } from "react";
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
import axios from "axios";
import { BASE_URL } from "../utils/baseurl";

// Add this new component at the top of the file
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

// const propertiesData = [
//   {
//     images: ['../assets/itw/IMG-20240530-WA0015.jpg', '../assets/itw/IMG-20240530-WA0017.jpg', '../assets/itw/IMG-20240530-WA0014.jpg', '../assets/itw/IMG-20240530-WA0019.jpg'],
//     name: "Into The Wild Stays",
//     checkInDate: "2024-12-01",
//     checkOutDate: "2024-12-03",
//     description:
//       "Stay in a charming hilltop cottage with breathtaking views of Mussoorie's misty mountains and serene surroundings.",
//     location: "Dhanolti",
//     rating: 4.6,
//     reviews: 50,
//     price: 4000,
//     bedroom: 4,
//     guest: 24,
//     tags: ["Mountain", "Scenic", "Luxury"],
//     faqs : [
//       {
//         question: "Is Driver and/or House-Help accommodation available?",
//         answer:
//           "Driver accommodation depends upon the first come first serve basis. It is available at nominal charges. A small room or bunk bed with dinner and breakfast will be provided just nearby the property.",
//       },
//       {
//         question: "Is parking available onsite or nearby?",
//         answer:
//           "Free open parking is available onsite adjacent to our Cafe. There is ample car parking for 6-7 cars at the site.",
//       },
//       {
//         question: "Is the property suitable for a day picnic?",
//         answer:
//           "Yes, the home has a garden/lawn area within the premises that could be used for outdoor picnic activities. Meals will be provided on-site at an additional charge per person, per meal. Please note that the maximum capacity for an overnight stay is 4 people.",
//       },
//       {
//         question: "Is the property pet-friendly?",
//         answer:
//           "We're happy to welcome your furry friends at Into the Wild Stays! Please bring a pet bed along, as pets aren't allowed on guest beds or any linen. Enjoy a comfortable stay for you and your pet in the heart of nature!",
//       },
//     ],
//     bookingPolicies: [
//       "Check in: 1 PM check out: 11 AM",
//       "Guests are requested to shut the windows and doors during the evening as the property may be prone to insects and bugs.",
//       "Guests are not allowed to spill food or drinks over the upholstery or they will be charged at checkout.",
//       "Please be mindful and keep the noise to a minimum after 10 PM.",
//       "Passport, Aadhar, Driving License, and Govt. ID are accepted as ID proof(s).",
//       "The property allows private parties or events.",
//     ],
//     cancellationPolicy: [
//       "Cancellation 12 days prior to arrival: 15% will be charged.",
//       "Cancellation 7 days prior to arrival: 50% will be charged.",
//       "Cancellation less than a week: Full retention would be applicable.",
//       "Credit/Debit card cancellations will be charged 5% extra.",
//       "Cancellation policy for long weekends and special days: Cancellation 7 days prior to arrival: 50% will be charged.",
//       "Cancellation less than a week: Full retention would be applicable.",
//     ],
//     amenities:[
//       "Essentials",
//       "Towels and toiletries",
//       "Add-on experience",
//       "Private entrance",
//       "Serene location.",
//       "Pet friendly",
//       "In-house chef/caretaker ",
//       "Cozy linens",
//       "Bluetooth sound system ",
//       "Wi-Fi ",
//       "Private cottage ",
//       "Garden",
//       "Breakfast",
//     ]
//   },
//   {
//     images: ['../assets/pineandtails/IMG_6555.jpg', '../assets/pineandtails/IMG_6567.jpg', '../assets/pineandtails/IMG_6590.jpg', '../assets/pineandtails/IMG_6598.jpg'],
//     name: "ITW: Pines And Tails",
//     description:
//       "Stay Type;- 4BHK private pool, Seaview Villa, Porvorim North Goa.",
//     location: "Tehri",
//     rating: 4.7,
//     reviews: 30,
//     price: 3500,
//     bedroom: 5,
//     guest: 12,
//     tags: ["Pool", "Seaview", "Modern"],
//     faqs :[
//       {
//         question: "Is Driver and/or House-Help accommodation available?",
//         answer:
//           "Driver accommodation depends upon the first come first serve basis. It is available at nominal charges. A small room or bunk bed with dinner and breakfast will be provided just nearby the property.",
//       },
//       {
//         question: "Is parking available onsite or nearby?",
//         answer:
//           "Free open parking is available onsite adjacent to our cafe. There is ample car parking for 6-7 cars at the site.",
//       },
//       {
//         question: "Is the property suitable for a day picnic?",
//         answer:
//           "Yes, the home has a garden/lawn area within the premises that could be used for outdoor picnic activities. Meals will be provided on-site at an additional charge per person, per meal. Note that the maximum capacity for an overnight stay is 12 people.",
//       },
//       {
//         question: "Is the property pet-friendly?",
//         answer:
//           "We’re happy to welcome your furry friends at the villa! Please bring a pet bed along, as pets aren’t allowed on guest beds or any linen.",
//       },
//     ],
//     bookingPolicies: [
//       "Check in: 1 PM check out: 11 AM",
//       "Guests are requested to shut the windows and doors during the evening as the property may be prone to insects and bugs.",
//       "Guests are not allowed to spill food or drinks over the upholstery or they will be charged at checkout.",
//       "Please be mindful and keep the noise to a minimum after 10 PM.",
//       "Passport, Aadhar, Driving License, and Govt. ID are accepted as ID proof(s).",
//       "The property allows private parties or events.",
//     ],
//     cancellationPolicy: [
//       "Cancellation 12 days prior to arrival: 15% will be charged.",
//       "Cancellation 7 days prior to arrival: 50% will be charged.",
//       "Cancellation less than a week: Full retention would be applicable.",
//       "Credit/Debit card cancellations will be charged 5% extra.",
//     ],
//     amenities: [
//       "Essentials",
//       "Towels and toiletries",
//       "Add-on experience",
//       "Private entrance",
//       "Serene location.",
//       "Pet friendly",
//       "In-house chef/caretaker ",
//       "Cozy linens",
//       "Bluetooth sound system ",
//       "Wi-Fi ",
//       "Private cottage ",
//       "Garden",
//       "Breakfast",
//     ],
//   },
//   {
//     images: ['../assets/majuli/majuli1.jpeg', '../assets/majuli/majuli2.jpeg', '../assets/majuli/majuli3.jpeg', '../assets/majuli/majuli4.jpeg'],
//     name: "ITW: Me:nam Homestay",
//     description:
//       "A tranquil retreat located in the lush green valleys of Dehradun, perfect for unwinding and enjoying the scenic beauty.",
//     location: "Majuli",
//     rating: 4.8,
//     reviews: 40,
//     price: 3500,
//     bedroom: 5,
//     guest: 30,
//     tags: ["Eco", "Green", "Tranquil"],
//     faqs :[
//       {
//         question: "Is Driver and/or House-Help accommodation available?",
//         answer:
//           "Driver accommodation depends upon the first come first serve basis. It is available at nominal charges. A small room or bunk bed with dinner and breakfast will be provided just nearby the property.",
//       },
//       {
//         question: "Is parking available onsite or nearby?",
//         answer:
//           "Free parking is available onsite. There is ample car parking for 4-5 cars at the site.",
//       },
//       {
//         question: "Is the Property suitable for a day picnic?",
//         answer:
//           "Yes, the home has a garden/lawn area within the premises that could be used for outdoor picnic activities. Meals will be provided on-site at an additional charge (per person, per meal).",
//       },
//       {
//         question: "Is property pet friendly?",
//         answer:
//           "We're happy to welcome your furry friends at Me:nam Homestay! Please bring a pet bed along, as pets aren't allowed on guest beds or any linen. Enjoy a comfortable stay for you and your pet in the heart of nature!",
//       },
//     ],
//     bookingPolicies: [
//       "Check in: 1 PM check out: 11 AM",
//       "Guests are requested to shut the windows and doors during the evening as the property may be prone to insects and bugs.",
//       "Guests are not allowed to spill food or drinks over the upholstery or they will be charged at checkout.",
//       "Please be mindful and keep the noise to a minimum after 10 PM.",
//       "Passport, Aadhar, Driving License, and Govt. ID are accepted as ID proof(s).",
//       "The property allows private parties or events.",
//     ],
//     cancellationPolicy: [
//       "Cancellation 12 days prior to arrival date: 15% will be charged.",
//   "Cancellation 07 days prior to arrival date: 50% will be charged.",
//   "Cancellation less than a week: Full retention would be applicable.",
//   "Credit/Debit card cancellations will be charged 5% extra.",
//   "Cancellation policy for long weekends and special days: Cancellation 07 days prior to arrival date: 50% will be charged. Cancellation less than a week: Full retention would be applicable.",
//     ],
//     amenities: [
//       "Essentials",
//   "Towels and toiletries",
//   "Add-on experience",
//   "Private entrance",
//   "Serene location.",
//   "Pet friendly",
//   "In-house chef/caretaker ",
//   "Cozy linens",
//   "Bluetooth sound system ",
//   "Wi-Fi ",
//   "Private cottage ",
//       "Garden",
//       "Breakfast",
//     ],
//   },
//   {
//     images: ['../assets/SunandSandGoa/52PM.jpeg', '../assets/SunandSandGoa/52PM2.jpeg', '../assets/SunandSandGoa/52PM3.jpeg', '../assets/SunandSandGoa/52PM4.jpeg'],
//     name: "ITW: Sun and Sand Villa",
//     description:
//       "A tranquil retreat located in the lush green valleys of Dehradun, perfect for unwinding and enjoying the scenic beauty.",
//     location: "Goa",
//     rating: 4.8,
//     reviews: 40,
//     bedroom: 5,
//     guest: 10,
//     price: 11000,
//     tags: ["Luxury", "Beach", "Premium"],
//     faqs :[
//       {
//         question:
//           "Can I book only one or two rooms, or do I need to book the entire Home?",
//         answer:
//           "No, you cannot book just one room. You would need to book the entire cottage.",
//       },
//       {
//         question: "Is parking available onsite or nearby?",
//         answer: "Free parking is available onsite for up to 2 cars.",
//       },
//       {
//         question: "Is the Property suitable for a day picnic?",
//         answer:
//           "Yes, the home has a garden/lawn area within the premises that could be used for outdoor picnic activities. Meals will be provided on site at an additional charge (per person, per meal). Please note that the maximum capacity for an overnight stay is 4 people.",
//       },
//       {
//         question: "Is property pet friendly?",
//         answer:
//           "We’re happy to welcome your furry friends at the Villa! Please bring a pet bed along, as pets aren’t allowed on guest beds or any linen. Enjoy a comfortable stay for you and your pet in the heart of nature!",
//       },
//     ],
//     bookingPolicies: [
//       "Check in: 1 PM check out: 11 AM",
//       "Guests are requested to shut the windows and doors during the evening as the property may be prone to insects and bugs.",
//       "Guests are not allowed to spill food or drinks over the upholstery or they will be charged at checkout.",
//       "Please be mindful and keep the noise to a minimum after 10 PM.",
//       "Passport, Aadhar, Driving License, and Govt. ID are accepted as ID proof(s).",
//       "The property allows private parties or events.",
//     ]
//     ,
//     cancellationPolicy: [
//       "Cancellation 12 days prior to arrival date: 15% will be charged.",
//       "Cancellation 07 days prior to arrival date: 50% will be charged.",
//       "Cancellation less than a week: Full retention would be applicable.",
//       "Credit/Debit card cancellations will be charged 5% extra.",
//       "Cancellation policy for long weekends and special days: Cancellation 07 days prior to arrival date: 50% will be charged. Cancellation less than a week: Full retention would be applicable.",
//     ],
//     amenities: [
//       "Essentials",
//       "Towels and toiletries",
//       "Add-on experience",
//       "Private entrance",
//       "Serene location.",
//       "Pet friendly",
//       "In-house chef/caretaker ",
//       "Cozy linens",
//       "Bluetooth sound system ",
//       "Wi-Fi ",
//       "Private cottage ",
//       "Garden",
//       "Breakfast",
//     ],
//   },
// ];

const Properties = () => {
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log(isLoading);
  console.log(properties);
  console.log(filteredProperties);

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

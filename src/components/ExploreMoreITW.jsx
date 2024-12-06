import { useState, useEffect } from "react";
import { FaArrowAltCircleDown, FaArrowAltCircleUp, FaMapMarkerAlt, FaBed, FaWifi, FaRupeeSign, FaQuestionCircle, FaBook, FaTimesCircle, FaHome, FaUsers, FaUserFriends } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import BookingButton from "./BookingButton";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/baseurl";

const ExploreMoreITW = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const res = await axios.get(
          `${BASE_URL}/properties/getPropertyById/${id}`
        );
        setProperty(res.data.property);
      } finally {
        setLoading(false);
      }
    };
    fetchProperty();
  }, [id]);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-yellow-100/50 px-4 sm:px-8 lg:px-32 py-48 sm:py-20 lg:py-40">
        <div className="animate-pulse space-y-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12">
            <div className="w-full lg:w-1/2">
              <div className="h-12 bg-gray-200 rounded-lg mb-4"></div>
              <div className="h-8 bg-gray-200 rounded-lg mb-4 w-3/4"></div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded w-4/6"></div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square bg-gray-200 rounded-lg"></div>
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-24 bg-gray-200 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-blue-100/50 px-4 sm:px-8 lg:px-32 py-44"
    >
      {/* Main Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="h-[450px] overflow-hidden rounded-xl shadow-lg"
        >
          <img
            src={property?.images[0]}
            alt="Main property view"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </motion.div>
        <div className="grid grid-cols-2 gap-6">
          {property?.images.slice(1, 5).map((image, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="h-[210px] overflow-hidden rounded-xl shadow-md"
            >
              <img
                src={image}
                alt={`Property view ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Property Info Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column - Property Details */}
        <div className="lg:col-span-2">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
            <div>
              <h1 className="text-5xl font-extrabold mb-4 text-gray-800">
                {property?.name}
              </h1>
              <p className="text-gray-600 mb-8 flex items-center gap-2">
                <FaMapMarkerAlt className="text-red-500" />
                {property?.location}
              </p>
            </div>

            {/* Booking Card for Mobile/Tablet */}
            <div className="lg:hidden mb-8">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-2 mb-2">
                    <FaRupeeSign className="text-green-500 text-2xl" />
                    <span className="text-3xl font-bold">{property?.price}</span>
                  </div>
                  <span className="text-gray-500 font-medium mb-4">per night</span>
                  <BookingButton property={property} />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Property Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <FaHome className="text-blue-500 text-xl" />
                <h3 className="font-semibold">Cottages</h3>
              </div>
              <p className="text-gray-700">{property?.bedroom} Cottages</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <FaUserFriends className="text-blue-500 text-xl" />
                <h3 className="font-semibold">Guest Capacity</h3>
              </div>
              <p className="text-gray-700">
                {property?.guestCapacity} persons per cottage
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <FaUsers className="text-blue-500 text-xl" />
                <h3 className="font-semibold">Maximum Capacity</h3>
              </div>
              <p className="text-gray-700">
                {property?.maximumCapacity} persons
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl lg:col-span-3">
              <div className="flex items-center gap-3 mb-2">
                <FaMapMarkerAlt className="text-blue-500 text-xl" />
                <h3 className="font-semibold">Address</h3>
              </div>
              <p className="text-gray-700">{property?.address}</p>
            </div>
          </div>

          <div className="prose max-w-none text-lg mb-12">
            <p>{property?.description}</p>
          </div>

          {/* Amenities Grid */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <FaWifi className="text-blue-500" />
              Amenities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {property?.amenities.map((amenity, idx) => (
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  key={idx}
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl shadow-sm hover:bg-gray-100 transition-all duration-300"
                >
                  <FaBed className="text-blue-500" />
                  <span className="font-medium">{amenity}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Booking Card (Desktop) */}
        <div className="hidden lg:block lg:col-span-1">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-white p-6 rounded-xl shadow-lg sticky top-24"
          >
            <div className="flex flex-col items-center mb-6">
              <div className="flex items-center gap-2 mb-2">
                <FaRupeeSign className="text-green-500 text-2xl" />
                <span className="text-3xl font-bold">{property?.price}</span>
              </div>
              <span className="text-gray-500 font-medium mb-4">per night</span>
              <BookingButton property={property} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Location Section */}
      <div className="mt-12 mb-8 bg-white rounded-xl shadow-sm p-6">
        <a
          href={property?.locationlink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-lg text-blue-500 hover:text-blue-600 transition-all duration-300 hover:translate-x-1"
        >
          <FaMapMarkerAlt />
          View on Google Maps
        </a>
      </div>

      {/* Policies Section */}
      <div className="mt-16 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <FaBook className="text-blue-500" />
            Booking Policies
          </h2>
          <ul className="list-none space-y-3">
            {property?.bookingPolicies.map((policy, idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-700">
                <span className="text-blue-500 mt-1">•</span>
                {policy}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <FaTimesCircle className="text-red-500" />
            Cancellation Policy
          </h2>
          <ul className="list-none space-y-3">
            {property?.cancellationPolicy.map((policy, idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-700">
                <span className="text-red-500 mt-1">•</span>
                {policy}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* FAQs Accordion */}
      <div className="mt-16 mb-12">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <FaQuestionCircle className="text-blue-500" />
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {property?.faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={false}
              className="border rounded-xl overflow-hidden shadow-sm"
            >
              <div
                className="flex justify-between items-center p-5 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                onClick={() => toggleFaq(idx)}
              >
                <h3 className="font-semibold text-lg">{faq.question}</h3>
                {openIndex === idx ? (
                  <FaArrowAltCircleUp className="text-blue-500 text-xl" />
                ) : (
                  <FaArrowAltCircleDown className="text-gray-400 text-xl" />
                )}
              </div>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 bg-white">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ExploreMoreITW;

import { useState, useEffect } from "react";
// import { MapPin, Mountain } from "lucide-react"; 
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";
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
        const res = await axios.get(`${BASE_URL}/properties/getPropertyById/${id}`);
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
      <div className="min-h-screen bg-yellow-100/50 px-4 sm:px-6 lg:px-32 py-48 sm:py-20 lg:py-40">
        <div className="animate-pulse space-y-8">
          {/* Hero Section Skeleton */}
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
            
            {/* Gallery Skeleton */}
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square bg-gray-200 rounded-lg"></div>
                ))}
              </div>
            </div>
          </div>

          {/* Property Details Skeleton */}
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
    <div className="min-h-screen bg-yellow-100/50 px-4 sm:px-6 lg:px-32 py-48 sm:py-20 lg:py-40 text-black">
      <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12">
        {/* Hero Section */}
        <div className="w-full lg:w-1/2">
          <div className="mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight tracking-tight">
              Into The Wild:
              <br />
              <span className="text-green-700">Premium Cottages</span> near Eco
              Park Dhanolti
            </h1>

            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-base sm:text-xl text-gray-700 font-medium">
                {property?.location}, Mussoorie
              </span>
            </div>
          </div>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8">
            Discover our premium cottages nestled near Mussoorie in one of the
            most serene locations close to Delhi NCR. Experience breathtaking
            valley views, fresh snowfall, and unmatched tranquility—a perfect
            weekend escape from the city.
          </p>

          <div className="flex justify-start">
            {/* <a
              href="#booking"
              className="px-4 py-2 sm:px-6 sm:py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
            >
              Book Now
            </a> */}
            <BookingButton property={property} />
          </div>
        </div>

        {/* Gallery Section */}
        <div className="w-full lg:w-1/2">
          <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
            {property?.images.map((image, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden  shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={image}
                  alt={`Gallery image ${image}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Property Details */}
      <div className="mt-12 sm:mt-16 bg-opacity-15 backdrop-blur-lg p-4 sm:p-6 md:p-8 mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800 border-b border-gray-300 pb-4">
          Property Details
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <div className="bg-gray-100/50 p-4 rounded-lg shadow-sm flex items-center">
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 4h1m4 0h1m-6 3v-16"
                />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-700">Cottages</p>
              <p className="text-gray-600">{property?.bedroom} Cottages</p>
            </div>
          </div>

          <div className="bg-gray-100/50 p-4 rounded-lg shadow-sm flex items-center">
            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-700">Guest Capacity</p>
              <p className="text-gray-600">
                {property?.guest} persons per cottage
              </p>
            </div>
          </div>

          <div className="bg-gray-100/50 p-4 rounded-lg shadow-sm flex items-center">
            <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-700">Maximum Capacity</p>
              <p className="text-gray-600">{property?.guest} persons</p>
            </div>
          </div>

          <div className="bg-gray-100/50 p-4 rounded-lg shadow-sm flex items-center">
            <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-yellow-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-700">Price Per Cottage</p>
              <p className="text-gray-600">₹{property?.price}</p>
            </div>
          </div>

          <div className="bg-gray-100/50 p-4 rounded-lg shadow-sm flex items-center">
            <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-700">Location</p>
              <a
                href="https://maps.app.goo.gl/GMdoxWp7mQPrUSF5A"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View on Google Maps
              </a>
            </div>
          </div>

          <div className="bg-gray-100/50 p-4 rounded-lg shadow-sm flex items-center">
            <div className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 4h1m4 0h1m-6 3v-16"
                />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-700">Address</p>
              <p className="text-gray-600">
                {/* Into The Wild Stays near Eco Park */}
                {property?.location}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Amenities Section */}
      <div className="mt-12 sm:mt-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
          Amenities
        </h2>
        <div className="bg-white bg-opacity-10 backdrop-blur-lg p-6 sm:p-8 rounded-lg shadow-xl">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {property?.amenities.map((amenity, index) => (
              <li
                key={index}
                className="text-black flex items-center space-x-2"
              >
                <span className="inline-block w-2.5 h-2.5 bg-teal-400 rounded-full"></span>
                <span className="text-sm sm:text-base">{amenity}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="mt-12 sm:mt-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
          FAQs
        </h2>
        <div className="space-y-4 sm:space-y-6">
          {property?.faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-lg p-4 sm:p-6 rounded-lg shadow-xl cursor-pointer transition-all duration-300 hover:shadow-2xl"
              onClick={() => toggleFaq(index)}
            >
              <div className="flex justify-between items-center">
                <span className="text-base sm:text-lg font-medium">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <FaArrowAltCircleUp className="text-base sm:text-xl" />
                ) : (
                  <FaArrowAltCircleDown className="text-base sm:text-xl" />
                )}
              </div>
              {openIndex === index && (
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-black">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Booking Policies Section */}
      <div className="mt-12 sm:mt-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
          Booking Policies
        </h2>
        <div className="bg-white bg-opacity-10 backdrop-blur-lg p-6 sm:p-8 rounded-lg shadow-xl">
          <ul className="list-disc ml-4 sm:ml-6 space-y-2 sm:space-y-3">
            {property?.bookingPolicies.map((policy, index) => (
              <li key={index} className="text-black text-sm sm:text-base">
                {policy}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Cancellation Policy Section */}
      <div className="mt-12 sm:mt-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
          Cancellation Policy
        </h2>
        <div className="bg-white bg-opacity-10 backdrop-blur-lg p-6 sm:p-8 rounded-lg shadow-xl">
          <ul className="list-disc ml-4 sm:ml-6 space-y-2 sm:space-y-3">
            {property?.cancellationPolicy.map((policy, index) => (
              <li key={index} className="text-black text-sm sm:text-base">
                {policy}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExploreMoreITW;

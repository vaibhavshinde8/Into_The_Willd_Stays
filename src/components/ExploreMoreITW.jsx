import { useState, useEffect } from "react";
import {
  FaArrowAltCircleDown,
  FaArrowAltCircleUp,
  FaMapMarkerAlt,
  FaBed,
  FaRupeeSign,
  FaQuestionCircle,
  FaTimesCircle,
  FaHome,
  FaUsers,
  FaUserFriends,
} from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
import { FcRules } from "react-icons/fc";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { motion, AnimatePresence } from "framer-motion";
import BookingButton from "./BookingButton";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/baseurl";

//hello

const ExploreMoreITW = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeButton, setActiveButton] = useState(null);
  const [selectedCheckInDate, setSelectedCheckInDate] = useState(
    new Date("2025-01-10")
  );
  const [selectedCheckOutDate, setSelectedCheckOutDate] = useState(
    new Date("2025-01-10")
  );
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const { id } = useParams();

  const buttons = [
    { id: "amenities", label: "Amenities" },
    { id: "location", label: "Location" },
    { id: "policies", label: "Policies" },
    { id: "faqs", label: "FAQ" },
    { id: "Review", label: "Review" },
  ];

  const guestSummary = `${adults} Adult${
    adults > 1 ? "s" : ""
  } and ${children} Child${children > 1 ? "ren" : ""}`;
  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const res = await axios.get(
          `${BASE_URL}/properties/getPropertyById/${id}`
        );

        console.log(res.data);

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
                {[1, 2, 3, 4]?.map((i) => (
                  <div
                    key={i}
                    className="aspect-square bg-gray-200 rounded-lg"
                  ></div>
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6]?.map((i) => (
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
      className="min-h-screen bg-slate-100/50 px-4 sm:px-8 lg:px-14 py-44 scroll-smooth"
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
          {property?.images.slice(1, 5)?.map((image, idx) => (
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
              <h1 className="lg:text-5xl md:text-3xl text-2xl font-extrabold mb-4 text-gray-800">
                {property?.name}
              </h1>
              <p className="text-gray-600 mb-8 flex items-center gap-2">
                <FaMapMarkerAlt className="text-red-500" />
                {property?.location}
              </p>
            </div>

            <div className="lg:hidden mb-8 w-full">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                className="bg-white  h-[auto] border sticky top-28 border-gray-100 rounded-2xl 
                w-full max-w-md mx-auto 
                p-6 space-y-6 
                shadow-xl ring-1 ring-gray-100"
              >
                {/* Price and Booking Button Row */}
                <div className="flex justify-between items-center">
                  {/* Price Header */}
                  <div className="text-center">
                    <div className="flex justify-center items-center gap-1">
                      <span className="text-3xl font-bold text-neutral-800">
                        From
                      </span>
                      <FaRupeeSign className="text-neutral-600 text-2xl" />
                      <span className="text-3xl font-bold text-neutral-800">
                        {property.price}
                      </span>
                      <b className="text-gray-400 text-sm">/Night</b>
                    </div>
                    {/* <p className="text-neutral-500 text-sm mt-1">per night</p> */}
                  </div>
                </div>

                {/* Booking Details */}
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                      }}
                      className="date_card"
                    >
                      <h3 className="text-lg font-semibold">Check In</h3>
                      <DatePicker
                        selected={selectedCheckInDate}
                        onChange={(date) => setSelectedCheckInDate(date)}
                        dateFormat="dd MMM yyyy"
                        className="hidden1 border rounded p-2 w-full text-[#112641] font-semibold"
                      />
                    </motion.div>

                    {/* Check-Out */}
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                      }}
                      className="date_card"
                    >
                      <h3 className="text-lg font-semibold">Check Out</h3>
                      <DatePicker
                        selected={selectedCheckOutDate}
                        onChange={(date) => setSelectedCheckOutDate(date)}
                        dateFormat="dd MMM yyyy"
                        className="hidden1 border rounded p-2 w-full text-[#112641] font-semibold"
                      />
                    </motion.div>
                  </div>

                  {/* Guests */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    className="date_card"
                  >
                    <h3 className="text-lg font-semibold">Guest</h3>
                    <input
                      type="text"
                      placeholder="Guest"
                      value={guestSummary}
                      className="border rounded p-2 w-full text-[#112641] font-semibold"
                      readOnly
                    />
                    <div className="bg-white shadow-lg mt-2 p-4 rounded">
                      <ul>
                        {/* Adults Section */}
                        <li className="flex items-center justify-between mb-4">
                          <div>
                            <p className="font-semibold mb-0">Adults</p>
                            <p className="text-sm mb-0">12+</p>
                          </div>
                          <div className="quantity-box flex items-center gap-2">
                            <button
                              className="border  px-3 py-1 rounded"
                              onClick={() =>
                                setAdults((prev) => Math.max(1, prev - 1))
                              } // Minimum 1 adult
                            >
                              -
                            </button>
                            <span>{adults}</span>
                            <button
                              className="border px-3 py-1 rounded"
                              onClick={() => setAdults((prev) => prev + 1)}
                            >
                              +
                            </button>
                          </div>
                        </li>

                        {/* Children Section */}
                        <li className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold mb-0">Children</p>
                            <p className="text-sm mb-0">6-11</p>
                          </div>
                          <div className="quantity-box flex items-center gap-2">
                            <button
                              className="border px-3 py-1 rounded"
                              onClick={() =>
                                setChildren((prev) => Math.max(0, prev - 1))
                              } // Minimum 0 children
                            >
                              -
                            </button>
                            <span>{children}</span>
                            <button
                              className="border px-3 py-1 rounded"
                              onClick={() => setChildren((prev) => prev + 1)}
                            >
                              +
                            </button>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                </div>
                {/* Booking Button */}
                <div>
                  <button
                    type="button"
                    className="w-full py-3 bg-[#112641] text-white 
                       rounded-xl hover:bg-white hover:text-[#112641] hover:border-[#112641] hover:border
                       transition-colors duration-300 
                       font-medium tracking-wide"
                  >
                    Check Availability
                  </button>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="w-full flex  sticky top-44 sm:top-28 z-40 gap-2 sm:gap-8 py-4 mb-4">
            {buttons.map((button) => (
              <a
                key={button.id}
                href={`#${button.id}`}
                onClick={() => setActiveButton(button.id)}
                className={`py-2 rounded font-semibold flex-auto drop-shadow-lg flex items-center justify-center px-1 sm:px-4 transition duration-300 ${
                  activeButton === button.id
                    ? "bg-[#163257] text-white"
                    : "bg-white text-gray-600"
                }`}
              >
                {button.label}
              </a>
            ))}
          </div>

          {/* Property Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white shadow-md p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <FaHome className="text-blue-500 text-xl" />
                <h3 className="font-semibold">Cottages</h3>
              </div>
              <p className="text-gray-700">{property?.bedroom} Cottages</p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <FaUserFriends className="text-blue-500 text-xl" />
                <h3 className="font-semibold">Guest Capacity</h3>
              </div>
              <p className="text-gray-700">
                {property?.guestCapacity} persons per cottage
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <FaUsers className="text-blue-500 text-xl" />
                <h3 className="font-semibold">Maximum Capacity</h3>
              </div>
              <p className="text-gray-700">
                {property?.maximumCapacity} persons
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-xl lg:col-span-3">
              <div className="flex items-center gap-3 mb-2">
                <FaMapMarkerAlt className="text-blue-500 text-xl" />
                <h3 className="font-semibold">Address</h3>
              </div>
              <p className="text-gray-700">{property?.address}</p>
            </div>
          </div>

          <div className="prose max-w-none flex flex-col gap-2 mb-12 shadow-md rounded-xl p-3">
            <h2 className="text-lg font-semibold">Description</h2>
            <p className="text-md">{property?.description}</p>
          </div>

          {/* Amenities Grid */}
          <div id="amenities" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <FaBed className="text-blue-500" />
              Amenities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {property?.amenities?.map((amenity, idx) => (
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  key={idx}
                  className="flex items-center gap-3 p-4 bg-white  rounded-xl shadow-md hover:bg-gray-100 transition-all duration-300"
                >
                  <IoMdSunny className="text-blue-500" />
                  <span className="font-medium">{amenity}</span>
                </motion.div>
              ))}
            </div>
          </div>
          {/* Location Section */}
          <div
            id="location"
            className="mt-12 mb-8 bg-white rounded-xl shadow-md p-6"
          >
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
          <div
            id="policies"
            className="mt-16 grid md:grid-cols-2 gap-12 bg-white rounded-xl shadow-md p-8"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <FcRules className="text-blue-500" />
                Booking Policies
              </h2>
              <ul className="list-none space-y-3">
                {property?.bookingPolicies?.map((policy, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-gray-700"
                  >
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
                {property?.cancellationPolicy?.map((policy, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <span className="text-red-500 mt-1">•</span>
                    {policy}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* FAQs Accordion */}
          <div id="faqs" className="mt-16 mb-12">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <FaQuestionCircle className="text-blue-500" />
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {property?.faqs?.map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={false}
                  className="border rounded-xl overflow-hidden shadow-md bg-white"
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

          {/* Feedback section */}

          <div
            className="w-full h-[auto] flex flex-col items-start"
            id="Review"
          >
            <h1 className="text-3xl font-bold mb-8 flex items-center justify-start ">
              <span>
                <i class="fa-solid fa-comment text-blue-500 me-4 "></i>{" "}
              </span>
              Feedback Section
            </h1>

            <div className="flex flex-col sm:flex-row items-center gap-4  w-full">
              <div className=" flex-auto  bg-white p-6 rounded-xl shadow-md border border-gray-200">
                {/* User Info */}
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src="https://img.freepik.com/free-photo/confident-handsome-guy-looking-camera_114579-79335.jpg?t=st=1736512295~exp=1736515895~hmac=e34c5fb64d2dbf6fffd1a4b32b83638c99ea4f093018f2afa29ee2522a440fbd&w=740"
                    alt="User Avatar"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      John Doe
                    </h3>
                    <p className="text-sm text-gray-500">2 days ago</p>
                  </div>
                </div>

                {/* Feedback Content */}
                <p className="text-gray-700 mb-4">
                  “This is one of the best services I've ever used! The team was
                  very professional, and the overall experience was amazing.
                  Highly recommended!”
                </p>

                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-500 text-xl">
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <div className=" flex-auto  bg-white p-6 rounded-xl shadow-md border border-gray-200">
                {/* User Info */}
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src="https://img.freepik.com/free-photo/regretful-young-handsome-man-looking-camera-isolated-white-background_141793-132015.jpg?semt=ais_hybrid"
                    alt="User Avatar"
                    className="w-12 h-12 rounded-full object-cover "
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Piter charl
                    </h3>
                    <p className="text-sm text-gray-500">4 days ago</p>
                  </div>
                </div>

                {/* Feedback Content */}
                <p className="text-gray-700 mb-4">
                  “This is one of the best services I've ever used! The team was
                  very professional, and the overall experience was amazing.
                  Highly recommended!”
                </p>

                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-500 text-xl">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Booking Card (Desktop) */}
        <div className="hidden lg:block  lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
            className="bg-white  h-[auto] border sticky top-28 border-gray-100 rounded-2xl 
                w-full max-w-md mx-auto 
                p-6 space-y-6 
                shadow-xl ring-1 ring-gray-100"
          >
            {/* Price and Booking Button Row */}
            <div className="flex justify-between items-center">
              {/* Price Header */}
              <div className="text-center">
                <div className="flex justify-center items-center gap-1">
                  <span className="text-3xl font-bold text-neutral-800">
                    From
                  </span>
                  <FaRupeeSign className="text-neutral-600 text-2xl" />
                  <span className="text-3xl font-bold text-neutral-800">
                    {property.price}
                  </span>
                  <b className="text-gray-400 text-sm">/Night</b>
                </div>
                {/* <p className="text-neutral-500 text-sm mt-1">per night</p> */}
              </div>
            </div>

            {/* Booking Details */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ type: "spring", stiffness: 100, damping: 15 }}
                  className="date_card"
                >
                  <h3 className="text-lg font-semibold">Check In</h3>
                  <DatePicker
                    selected={selectedCheckInDate}
                    onChange={(date) => setSelectedCheckInDate(date)}
                    dateFormat="dd MMM yyyy"
                    className="hidden1 border rounded p-2 w-full text-[#112641] font-semibold"
                  />
                </motion.div>

                {/* Check-Out */}
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ type: "spring", stiffness: 100, damping: 15 }}
                  className="date_card"
                >
                  <h3 className="text-lg font-semibold">Check Out</h3>
                  <DatePicker
                    selected={selectedCheckOutDate}
                    onChange={(date) => setSelectedCheckOutDate(date)}
                    dateFormat="dd MMM yyyy"
                    className="hidden1 border rounded p-2 w-full text-[#112641] font-semibold"
                  />
                </motion.div>
              </div>

              {/* Guests */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                className="date_card"
              >
                <h3 className="text-lg font-semibold">Guest</h3>
                <input
                  type="text"
                  placeholder="Guest"
                  value={guestSummary}
                  className="border rounded p-2 w-full text-[#112641] font-semibold"
                  readOnly
                />
                <div className="bg-white shadow-lg mt-2 p-4 rounded">
                  <ul>
                    {/* Adults Section */}
                    <li className="flex items-center justify-between mb-4">
                      <div>
                        <p className="font-semibold mb-0">Adults</p>
                        <p className="text-sm mb-0">12+</p>
                      </div>
                      <div className="quantity-box flex items-center gap-2">
                        <button
                          className="border  px-3 py-1 rounded"
                          onClick={() =>
                            setAdults((prev) => Math.max(1, prev - 1))
                          } // Minimum 1 adult
                        >
                          -
                        </button>
                        <span>{adults}</span>
                        <button
                          className="border px-3 py-1 rounded"
                          onClick={() => setAdults((prev) => prev + 1)}
                        >
                          +
                        </button>
                      </div>
                    </li>

                    {/* Children Section */}
                    <li className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold mb-0">Children</p>
                        <p className="text-sm mb-0">6-11</p>
                      </div>
                      <div className="quantity-box flex items-center gap-2">
                        <button
                          className="border px-3 py-1 rounded"
                          onClick={() =>
                            setChildren((prev) => Math.max(0, prev - 1))
                          } // Minimum 0 children
                        >
                          -
                        </button>
                        <span>{children}</span>
                        <button
                          className="border px-3 py-1 rounded"
                          onClick={() => setChildren((prev) => prev + 1)}
                        >
                          +
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
            {/* Booking Button */}
            <div>
              <button
                type="button"
                className="w-full py-3 bg-[#112641] text-white 
                       rounded-xl hover:bg-white hover:text-[#112641] hover:border-[#112641] hover:border
                       transition-colors duration-300 
                       font-medium tracking-wide"
              >
                Check Availability
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExploreMoreITW;

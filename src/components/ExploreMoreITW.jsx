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
import "./exploreMoreITW.css";

//hello

const ExploreMoreITW = () => {

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeButton, setActiveButton] = useState(null);
  const [selectedCheckInDate, setSelectedCheckInDate] = useState(new Date());
  const [selectedCheckOutDate, setSelectedCheckOutDate] = useState(new Date());
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const { id } = useParams();
  const [openIndex, setOpenIndex] = useState(null); // For FAQs
  const [activeSection, setActiveSection] = useState("amenities"); // Track active section
console.log("property",property);
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const buttons = [
    { id: "amenities", label: "Amenities" },
    { id: "location", label: "Location" },
    { id: "policies", label: "Policies" },
    { id: "faqs", label: "FAQ" },
    { id: "Review", label: "Review" },
  ];

  
  const reviews = {
    IntoTheWildStays : [
      {
        id: 1,
        name: "Manjula Singh",
        date: "2 days ago",
        avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUUygNmvjTkufn8yf6am1WuEmi0ovqTcXdeiejFFYZthSbZbzn84Q=w54-h54-p-rp-mo-ba2-br100",
        feedback: `“My stay here was nothing short of magical! The place we stayed at was surrounded by breathtaking mountains, offering serene views that made the experience unforgettable. One of the highlights was witnessing a spectacular sunrise, which felt like nature’s masterpiece.
    
    The hospitality provided by the owner Akash was truly exceptional – he was so warm, accommodating, and attentive that it felt like home. He went above and beyond to ensure our comfort and made our stay even more special.”`,
        rating: 5,
      },
      {
        id: 2,
        name: "Tushar Bhagwane",
        date: "4 days ago",
        avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWx0zD4XwMxOPsGqweH7fI_8W4dvCaHP_tswI4G0yQCJXYkoD-F=w54-h54-p-rp-mo-br100",
        feedback: `“I had a fantastic stay at this hotel! The rooms were spacious, clean, and well-equipped with everything I needed for a comfortable visit. The staff were incredibly friendly and went above and beyond to ensure I had a great experience. The location is perfect, with easy access to popular attractions, restaurants, and transportation. The breakfast was delicious with a wide variety of options. I would definitely recommend this hotel to anyone looking for a relaxing and enjoyable stay.”`,
        rating: 5,
      }
    ],
    ITWTapovanRiseCottages : [
      {
        id: 1,
        name: "Shweta Jha",
        date: "3 weeks ago",
        avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVJMTqVydZnsZ3-wUaW1eJzC1kDLaOQDMZ75zAe9x-0KWGSU7iW=w36-h36-p-rp-mo-br100",
        feedback: `“Great location, beautiful surrounding atmosphere, great staff. Lovely  and great first impression of this cottage . Everything about the hotel was exceptional. It was clean, stylish, roomy with excellent service….. Food was good and great value for money and service was attentive and efficient. Room itself was well equipped and comfortable. I was very pleased with my stay. I hope to be back for a longer visit soon…

Thanks  a lot deepak ji for everything.🙏🏻😊❤️

.would like to recommend this to many of my friends and relatives….”`,
        rating: 5,
      },
      {
        id: 2,
        name: "Hritu Sharma",
        date: "a month ago",
        avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWxIduVycbNc0Sq02qHQmsMcAoU0-6AU4BMYuGBJttWA8lZI1Nr8g=w36-h36-p-rp-mo-br100",
        feedback: `“Best & Budget friendly place to stay in Rishikesh with the feel of camping, bone fire, music and all other activities.

Walk-in from main road and very safe place. Owner and all staff's behaviour is so nice and humble.

Rooms and open area is well cleaned and very peaceful place and mountain view.”`,
        rating: 5,
      }
    ],
    ITWMastanaMusafir : [
      {
        id: 1,
        name: "Aadi Raina",
        date: "a monthb ago",
        avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVA_eucprNOoafs8A8sEhBaVQ4uKLAtZ1wV2PPlAjIu0N1qmt3u=w36-h36-p-rp-mo-br100",
        feedback: `“i had a fantastic stay! the staff were incredibly friendly.  Everything about the place was exceptional. It was clean, stylish, roomy with excellent service. Food was good and great value for money and service was attentive and efficient. Room itself was well equipped and comfortable. Highly recommended. ❤️”`,
        rating: 5,
      },
      {
        id: 2,
        name: "Olivier Guillard",
        date: "3 month ago",
        avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUMCa3moxmQtqs4d0MBExw6HcX1gcr-upY6GwSMX9PGAFAd1V5Mxw=w36-h36-p-rp-mo-ba5-br100",
        feedback: `“This was one of the best paneer butter masala I've ever had, I strongly recommend. I also ordered fried vegetables, papad and parathas.”`,
        rating: 5,
      }
    ],

    
   
  }

  const propertyNameForReview = property?.name?.replaceAll(" ", "") || ""
  console.log(propertyNameForReview)
  const guestSummary = `${adults} Adult${adults > 1 ? "s" : ""
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
      className="min-h-screen bg-white/70 px-4 sm:px-8 lg:px-14 py-44 scroll-smooth"
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
                        minDate={new Date()}
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
                        minDate={selectedCheckInDate || new Date()}
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
                    Book Now
                  </button>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="w-full flex sticky overflow-x-scroll top-44 sm:top-28  gap-4  sm:gap-8 py-4 mb-4 no-scrollbar">
            {buttons.map((button) => (
              <a
                key={button.id}
                href={`#${button.id}`}
                onClick={() => setActiveButton(button.id)}
                className={`py-2  rounded font-semibold flex-auto  flex items-center justify-center px-4 transition duration-300 ${activeButton === button.id
                  ? "bg-[#163257] text-white"
                  : "bg-white text-gray-800"
                  }`}
              >
                {button.label}
              </a>
            ))}
          </div>

          {/* Property Details Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white shadow-md px-2 sm:px-6 sm:py-6 py-3 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <FaHome className="text-blue-500  hidden sm:block text-xl" />
                <h3 className="font-semibold text-sm ">Cottages</h3>
              </div>
              <p className="text-gray-700 text-sm ">
                {property?.bedroom} Cottages
              </p>
            </div>
            <div className="bg-white shadow-md px-2 sm:px-6 sm:py-6 py-3 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <FaUserFriends className="text-blue-500  hidden sm:block text-xl" />
                <h3 className="font-semibold text-sm">Guest Capacity</h3>
              </div>
              <p className="text-gray-700 text-sm">
                {property?.guestCapacity} persons per cottage
              </p>
            </div>
            <div className="bg-white shadow-md  px-2 sm:px-6  sm:py-6 py-3 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <FaUsers className="text-blue-500 text-xl hidden sm:block" />
                <h3 className="font-semibold text-sm">Maximum Capacity</h3>
              </div>
              <p className="text-gray-700 text-sm">
                {property?.maximumCapacity} persons
              </p>
            </div>
            <div className="bg-white shadow-md  px-2 sm:px-6 sm:py-6 py-3 rounded-xl lg:col-span-3">
              <div className="flex items-center gap-3 mb-2">
                <FaMapMarkerAlt className="text-blue-500  text-xl hidden sm:block" />
                <h3 className="font-semibold text-sm">Address</h3>
              </div>
              <p className="text-gray-700 text-sm">{property?.address}</p>
            </div>
          </div>

          <div className="prose max-w-none flex flex-col gap-2 mb-12 shadow-md rounded-xl p-3">
            <h2 className="text-lg font-semibold">Description</h2>
            <p className="text-sm sm:text-md">{property?.description}</p>
          </div>

          {/* Amenities Grid */}
          <div id="amenities" className="mb-12 ">
            <h2 className=" text-2xl ms-4 sm:ms-0  font-bold mb-6 flex items-center gap-3">
              <FaBed className="hidden  sm:block text-blue-500" />
              Amenities
            </h2>
            <div className="grid mt-48 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {property?.amenities?.map((amenity, idx) => (
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  key={idx}
                  className="paddingY-320 flex items-center gap-3 px-4  py-3 sm:py-4 bg-white  rounded-xl shadow-md hover:bg-gray-100 transition-all duration-300"
                >
                  <IoMdSunny className="text-blue-500 hidden-before-320" />
                  <p className="text-xs sm:text-md font-semibold ">{amenity}</p>
                </motion.div>
              ))}
            </div>
          </div>
          {/* Location Section */}
          <div
            id="location"
            className=" mb-8 bg-white rounded-xl shadow-md p-6"
          >
            <a

              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-48 items-center gap-2 text-lg text-blue-500 hover:text-blue-600 transition-all duration-300 hover:translate-x-1"
            >
              <FaMapMarkerAlt />
              {property?.address}
            </a>
          </div>

          {/* Policies Section */}
          <div
            id="policies"
            className=" grid md:grid-cols-2 gap-12 bg-white rounded-xl shadow-md py-8 px-4 sm:px-8"

          >
            <div >
              <h2 className="text-2xl ms-4 sm:ms-0  font-bold mb-6 flex items-center gap-3 mt-48">
                <FcRules className=" hidden sm:block text-blue-500" />
                Booking Policies
              </h2>
              <ul className="list-none space-y-3 ">
                {property?.bookingPolicies?.map((policy, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-gray-700 text-sm sm:text-md "
                  >
                    <span className="text-blue-500 mt-1">•</span>
                    {policy}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl  ms-4 sm:ms-0 font-bold mb-6 flex items-center gap-3 mt-48">
                <FaTimesCircle className="hidden sm:block text-red-500" />
                Cancellation Policy
              </h2>
              <ul className="list-none space-y-3 ">
                {property?.cancellationPolicy?.map((policy, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-gray-700 text-sm sm:text-md"
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
            <h2 className="text-2xl ms-4 sm:ms-0 font-bold mb-8 flex items-center gap-3 ">


            </h2>
            <div className="space-y-4 mt-48">
              {property?.faqs?.map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={false}
                  className="border rounded-xl overflow-hidden shadow-md bg-white"
                >
                  <div
                    className="flex justify-between gap-2 items-center p-5 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                    onClick={() => toggleFaq(idx)}
                  >
                    <h3 className="font-semibold text-sm sm:text-lg  ">
                      {faq.question}
                    </h3>
                    {openIndex === idx ? (
                      <FaArrowAltCircleUp className="text-blue-500 text-xl w-8" />
                    ) : (
                      <FaArrowAltCircleDown className="text-gray-400 text-xl w-8" />
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
                          <p className="text-gray-700 text-sm sm:text-md">
                            {faq.answer}
                          </p>
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
            className="w-full h-[auto] flex flex-col items-start "
            id="Review"
          >
            <h1 className=" text-2xl  ms-4 sm:ms-0 font-bold mb-8 flex items-center justify-start mt-48 ">
              <span>
                <i className="fa-solid fa-comment hidden sm:block text-blue-500 me-4 "></i>{" "}
              </span>
              Feedback Section
            </h1>

            <div className="flex flex-col sm:flex-row items-start gap-4 sm:h-[380px]  ">
              {reviews[propertyNameForReview]?.map((review)=>  <div className=" flex-auto  bg-white p-6 rounded-xl shadow-md border border-gray-200 sm:w-[50%] w-full  h-full">
                {/* User Info */}
                <div className="flex items-center space-x-4 mb-4 h-[10%]">
                  <img
                    src={review.avatar}
                    alt="User Avatar"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 ">
                      {review.name}
                    </h3>
                    <p className="text-sm text-gray-500">{review.data}</p>
                  </div>
                </div>

                {/* Feedback Content */}
                <p className="text-gray-700 mb-4 text-sm sm:text-md text-justify sm:text-left h-[70%]">
                {review.feedback}
                </p>

                {/* Rating */}
                <div className="flex items-center space-x-1 h-[20%]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-500 text-xl">
                      ★
                    </span>
                  ))}
                </div>
              </div>)}
              
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
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-2xl font-bold text-gray-800">
                  {property.price}
                </span>
                <b className="text-gray-400 text-sm">/Night</b>
                <span className="line-through text-gray-500 text-sm">
                  INR {property.price * 120 / 100}
                </span>
                <span className="bg-green-100 text-green-600 text-xs font-medium px-2 py-1 rounded">
                  SAVE INR {property.price * 120 / 100 - property.price}
                </span>
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
                    minDate={new Date()}
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
                    minDate={selectedCheckInDate || new Date()}
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
              <BookingButton property={property} />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExploreMoreITW;

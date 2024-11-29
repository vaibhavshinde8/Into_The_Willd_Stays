import { useState,useEffect } from "react";
  import { motion } from "framer-motion";

import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";
import img1 from "../assets/pineandtails/IMG_6555.jpg";
import img2 from "../assets/pineandtails/IMG_6567.jpg";
import img3 from "../assets/pineandtails/IMG_6590.jpg";
import img4 from "../assets/pineandtails/IMG_6598.jpg";
import { MapPin, Mountain } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10,
    },
  },
};

const handleBookNow = () => {
  // You can replace this with actual booking logic
  // For now, it will scroll to the top or open a booking modal
  window.scrollTo({ top: 0, behavior: "smooth" });
  // Alternatively, you could trigger a booking modal
  // openBookingModal();
};

// Data for Gallery, FAQs, Policies, and Amenities
const galleryImages = [img1, img2, img3, img4];

const propertyDetails = {
  rooms: 5,
  guestCapacity: "2 persons per room",
  maxCapacity: 12,
  pricePerRoom: "₹3500",
  totalPriceFor12: "₹13,500",
  stayType: "5BHK Valley View Private Villa",
  location: "8CWX+WR2, New Tehri, Nawagarh, Uttarakhand 249001",
  address: "Pine Tales, Sursingdhar New Tehri",
};

const faqs = [
  {
    question: "Is Driver and/or House-Help accommodation available?",
    answer:
      "Driver accommodation depends upon the first come first serve basis. It is available at nominal charges. A small room or bunk bed with dinner and breakfast will be provided just nearby the property.",
  },
  {
    question: "Is parking available onsite or nearby?",
    answer:
      "Free open parking is available onsite adjacent to our cafe. There is ample car parking for 6-7 cars at the site.",
  },
  {
    question: "Is the property suitable for a day picnic?",
    answer:
      "Yes, the home has a garden/lawn area within the premises that could be used for outdoor picnic activities. Meals will be provided on-site at an additional charge per person, per meal. Note that the maximum capacity for an overnight stay is 12 people.",
  },
  {
    question: "Is the property pet-friendly?",
    answer:
      "We’re happy to welcome your furry friends at the villa! Please bring a pet bed along, as pets aren’t allowed on guest beds or any linen.",
  },
];

const bookingPolicies = [
  "Check in: 1 PM check out: 11 AM",
  "Guests are requested to shut the windows and doors during the evening as the property may be prone to insects and bugs.",
  "Guests are not allowed to spill food or drinks over the upholstery or they will be charged at checkout.",
  "Please be mindful and keep the noise to a minimum after 10 PM.",
  "Passport, Aadhar, Driving License, and Govt. ID are accepted as ID proof(s).",
  "The property allows private parties or events.",
];

const cancellationPolicy = [
  "Cancellation 12 days prior to arrival: 15% will be charged.",
  "Cancellation 7 days prior to arrival: 50% will be charged.",
  "Cancellation less than a week: Full retention would be applicable.",
  "Credit/Debit card cancellations will be charged 5% extra.",
];

const amenities = [
  "Essentials",
  "Towels and toiletries",
  "Add-on experience",
  "Private entrance",
  "Serene location.",
  "Pet friendly",
  "In-house chef/caretaker ",
  "Cozy linens",
  "Bluetooth sound system ",
  "Wi-Fi ",
  "Private cottage ",
  "Garden",
  "Breakfast",
];

const ExploreMorePNT = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };













 useEffect(() => {
   window.scrollTo(0, 0); // Scrolls to the top
 }, []);









  return (
    <div className="min-h-screen bg-gradient-to-br from-[#091F3C] to-[#3C8D99] px-6 lg:px-32 py-40 text-white">
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 10,
        }}
        onClick={handleBookNow}
        className="fixed bottom-6 right-6 z-50 bg-white text-green-900  
                 px-6 py-3 rounded-full shadow-2xl 
                 hover:bg-white transition-colors duration-300 
                 flex items-center space-x-2
                 "
        style={{
          boxShadow: "0 10px 25px rgba(0, 255, 0, 0.3)",
          backdropFilter: "blur(10px)",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2"
        >
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
        Book Now
      </motion.button>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex items-center justify-center w-full px-4"
      >
        <motion.div
          variants={containerVariants}
          className="flex items-center justify-center text-4xl font-bold tracking-wide mb-6 text-green-800 bg-green-50 p-6 rounded-xl shadow-lg border-2 border-green-100 max-w-2xl w-full"
        >
          <motion.div variants={itemVariants} className="flex items-center">
            <MapPin
              className="mr-4 text-green-600 transition-transform hover:scale-110"
              size={48}
            />
            <span className="text-center flex-grow">location: Tehri</span>
            <Mountain
              className="ml-4 text-green-600 transition-transform hover:scale-110"
              size={48}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Header Section */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl font-bold tracking-wide mb-6"
      >
        Pine Tales: A 5BHK Valley View Private Villa
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-lg max-w-3xl mx-auto mb-12"
      >
        Nestled near the serene Tehri Dam in Uttarakhand, Pine Tales Villa is a
        private mountain retreat, perfect for families and friends. Offering
        breathtaking valley views, our villa is designed for those seeking a
        cozy escape in nature.
      </motion.p>

      {/* Gallery Section */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="object-cover w-full h-64 transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Property Details */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-lg mb-16 shadow-xl"
      >
        <h2 className="text-2xl font-semibold text-center mb-4">
          Property Details
        </h2>
        <ul className="list-disc ml-6 space-y-3">
          <li>Number of Rooms: {propertyDetails.rooms}</li>
          <li>Guest Capacity: {propertyDetails.guestCapacity}</li>
          <li>Maximum Capacity: {propertyDetails.maxCapacity} persons</li>
          <li>Price Per Room: {propertyDetails.pricePerRoom}</li>
          <li>Total Price for 12 Persons: {propertyDetails.totalPriceFor12}</li>
          <li>Stay Type: {propertyDetails.stayType}</li>
          <li>Location: {propertyDetails.location}</li>
          <li>Address: {propertyDetails.address}</li>
        </ul>
      </motion.div>

      {/* FAQs */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-center mb-8">FAQs</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg shadow-xl cursor-pointer"
              onClick={() => toggleFaq(index)}
            >
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <FaArrowAltCircleUp className="text-xl" />
                ) : (
                  <FaArrowAltCircleDown className="text-xl" />
                )}
              </div>
              {openIndex === index && (
                <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 text-gray-300"
                >
                  {faq.answer}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Booking Policies */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-center mb-8">
          Booking Policies
        </h2>
        <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-lg shadow-xl">
          <ul className="list-disc ml-6 space-y-3">
            {bookingPolicies.map((policy, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-gray-300"
              >
                {policy}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Cancellation Policy */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-center mb-8">
          Cancellation Policy
        </h2>
        <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-lg shadow-xl">
          <ul className="list-disc ml-6 space-y-3">
            {cancellationPolicy.map((policy, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-gray-300"
              >
                {policy}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Amenities */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-center mb-8">Amenities</h2>
        <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-lg shadow-xl">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {amenities.map((amenity, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-gray-300 flex items-center space-x-2"
              >
                <span className="inline-block w-2.5 h-2.5 bg-teal-400 rounded-full"></span>
                <span>{amenity}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default ExploreMorePNT;

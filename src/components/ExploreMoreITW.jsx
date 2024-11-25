import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";
import img1 from "../assets/itw/IMG-20240530-WA0002.jpg";
import img2 from "../assets/itw/IMG-20240530-WA0017.jpg";
import img3 from "../assets/itw/IMG-20240530-WA0014.jpg";
import img4 from "../assets/itw/IMG-20240530-WA0019.jpg";

const galleryImages = [img1, img2, img3, img4];


const faqs = [
  {
    question: "Is Driver and/or House-Help accommodation available?",
    answer:
      "Driver accommodation depends upon the first come first serve basis. It is available at nominal charges. A small room or bunk bed with dinner and breakfast will be provided just nearby the property.",
  },
  {
    question: "Is parking available onsite or nearby?",
    answer:
      "Free open parking is available onsite adjacent to our Cafe. There is ample car parking for 6-7 cars at the site.",
  },
  {
    question: "Is the property suitable for a day picnic?",
    answer:
      "Yes, the home has a garden/lawn area within the premises that could be used for outdoor picnic activities. Meals will be provided on-site at an additional charge per person, per meal. Please note that the maximum capacity for an overnight stay is 4 people.",
  },
  {
    question: "Is the property pet-friendly?",
    answer:
      "We’re happy to welcome your furry friends at Into the Wild Stays! Please bring a pet bed along, as pets aren’t allowed on guest beds or any linen. Enjoy a comfortable stay for you and your pet in the heart of nature!",
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
  "Cancellation policy for long weekends and special days: Cancellation 7 days prior to arrival: 50% will be charged.",
  "Cancellation less than a week: Full retention would be applicable.",
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

const ExploreMoreITW = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#091F3C] to-[#3C8D99] px-6 lg:px-32 py-40 text-white">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl font-bold tracking-wide mb-6"
      >
        Into The Wild: Premium Cottages near Eco Park Dhanolti
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-lg max-w-3xl mx-auto mb-12"
      >
        Welcome to our premium cottages in Dhanolti, nestled near Mussoorie in
        one of the most serene locations close to Delhi NCR. Experience
        breathtaking valley views, fresh snowfall, and unmatched tranquility—a
        perfect weekend escape from the city. Embrace nature&apos;s beauty and
        relax in the comfort of our thoughtfully designed cottages, crafted for
        a peaceful and memorable getaway.
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
          <li>Cottages: 4 Cottages</li>
          <li>Guest Capacity: 4 persons per cottage</li>
          <li>Maximum Capacity: 24 persons</li>
          <li>Price Per Cottage: ₹4000</li>
          <li>
            Location:{" "}
            <a
              href="https://maps.app.goo.gl/GMdoxWp7mQPrUSF5A"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 underline"
            >
              View on Google Maps
            </a>
          </li>
          <li>Address: Into The Wild Stays near Eco Park Dhanolti</li>
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
      {/* Additional Sections (Booking Policies, Cancellation, Amenities) */}{" "}
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
      {/* Repeat Similar Patterns */}
    </div>
  );
};

export default ExploreMoreITW;

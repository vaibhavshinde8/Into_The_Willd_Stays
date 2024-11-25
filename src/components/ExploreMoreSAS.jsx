import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";
import img1 from "../assets/SunandSandGoa/50PM.jpeg";
import img2 from "../assets/SunandSandGoa/51PM.jpeg";
import img3 from "../assets/SunandSandGoa/53PM.jpeg";
import img4 from "../assets/SunandSandGoa/52PM.jpeg";

const galleryImages = [img1, img2, img3, img4];

const faqs = [
  {
    question:
      "Can I book only one or two rooms, or do I need to book the entire Home?",
    answer:
      "No, you cannot book just one room. You would need to book the entire cottage.",
  },
  {
    question: "Is parking available onsite or nearby?",
    answer: "Free parking is available onsite for up to 2 cars.",
  },
  {
    question: "Is the Property suitable for a day picnic?",
    answer:
      "Yes, the home has a garden/lawn area within the premises that could be used for outdoor picnic activities. Meals will be provided on site at an additional charge (per person, per meal). Please note that the maximum capacity for an overnight stay is 4 people.",
  },
  {
    question: "Is property pet friendly?",
    answer:
      "We’re happy to welcome your furry friends at the Villa! Please bring a pet bed along, as pets aren’t allowed on guest beds or any linen. Enjoy a comfortable stay for you and your pet in the heart of nature!",
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

const refundAndReschedulingPolicy = [
  "Refunds would be processed in 14 working days.",
  "Booking can be rescheduled till 15 days prior to arrival date depending upon availability.",
  "₹1000 plus applicable taxes will be charged for rescheduling.",
  "Rescheduling can only be done for the same property.",
  "If the tariff on the rescheduled date is higher than the initial booking date, the difference is payable.",
];

const thingsToKnow = [
  "The full payment must be made for your booking to be confirmed.",
  "Only guests accounted for are allowed at the property.",
  "Any damage to the property caused by guests will be charged as per the actual cost of repair or replacement.",
  "Any commercial activity is strictly prohibited.",
  "Guests are requested to treat the home with care.",
  "Consider this as a homestay in the mountains, not a typical hotel stay.",
];

const cancellationPolicy = [
  "Cancellation 12 days prior to arrival date: 15% will be charged.",
  "Cancellation 07 days prior to arrival date: 50% will be charged.",
  "Cancellation less than a week: Full retention would be applicable.",
  "Credit/Debit card cancellations will be charged 5% extra.",
  "Cancellation policy for long weekends and special days: Cancellation 07 days prior to arrival date: 50% will be charged. Cancellation less than a week: Full retention would be applicable.",
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

const ExploreMoreSAS = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };





  return (
    <div className="min-h-screen bg-gradient-to-br from-[#091F3C] to-[#3C8D99] px-6 lg:px-32 py-40 text-white">
      {/* Hero Section */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl font-bold tracking-wide mb-6"
      >
        Sunrise Alpine Stay: Premium Cottages in the Heart of Nature
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-lg max-w-3xl mx-auto mb-12"
      >
        Welcome to Sunrise Alpine Stay, where luxury meets nature. Experience our premium cottages set against breathtaking mountain vistas, offering the perfect blend of comfort and natural beauty. Each stay is crafted to provide an unforgettable escape from city life.
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
        <h2 className="text-2xl font-semibold text-center mb-4">Property Details</h2>
        <ul className="list-disc ml-6 space-y-3">
          <li>Cottages: 6 Premium Cottages</li>
          <li>Guest Capacity: 4 persons per cottage</li>
          <li>Maximum Capacity: 24 persons</li>
          <li>Price Per Cottage: ₹5000</li>
          <li>
            Location:{" "}
            <a href="#" className="text-blue-300 underline">View on Google Maps</a>
          </li>
          <li>Address: Sunrise Alpine Stay, Mountain View Road</li>
        </ul>
      </motion.div>

      {/* Amenities Section */}
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

      {/* FAQs Section */}
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
        <h2 className="text-3xl font-bold text-center mb-8">Booking Policies</h2>
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
        <h2 className="text-3xl font-bold text-center mb-8">Cancellation Policy</h2>
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

      {/* Refund and Rescheduling Policy */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-center mb-8">Refund and Rescheduling Policy</h2>
        <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-lg shadow-xl">
          <ul className="space-y-4 text-lg">
            {refundAndReschedulingPolicy.map((policy, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, translateY: 10 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex items-start gap-3"
              >
                <span className="w-4 h-4 bg-blue-500 rounded-full flex-shrink-0"></span>
                <span className="text-gray-300">{policy}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Things to Know */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-center mb-8">Things to Know</h2>
        <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-lg shadow-xl">
          <ul className="space-y-4 text-lg">
            {thingsToKnow.map((thing, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, translateY: 10 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex items-start gap-3"
              >
                <span className="w-4 h-4 bg-green-500 rounded-full flex-shrink-0"></span>
                <span className="text-gray-300">{thing}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default ExploreMoreSAS;
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";
import img1 from "../assets/majuli/Property Photo/464947394_1576137619699668_5411537306352967985_n.jpg";
import img2 from "../assets/majuli/Property Photo/AF1QipMCIOWRYWt_LgfarzWPyC_3M2qtDYOsgVoPLCpu=s387-k-no.jfif";
import img3 from "../assets/majuli/Property Photo/58PM.jpeg";
import img4 from "../assets/majuli/Property Photo/18PM.jpeg";
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
      "Free parking is available onsite. There is ample car parking for 4-5 cars at the site.",
  },
  {
    question: "Is the Property suitable for a day picnic?",
    answer:
      "Yes, the home has a garden/lawn area within the premises that could be used for outdoor picnic activities. Meals will be provided on-site at an additional charge (per person, per meal).",
  },
  {
    question: "Is property pet friendly?",
    answer:
      "We’re happy to welcome your furry friends at Me:nam Homestay! Please bring a pet bed along, as pets aren’t allowed on guest beds or any linen. Enjoy a comfortable stay for you and your pet in the heart of nature!",
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

const ExploreMoreMNM = () => {
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
            <span className="text-center flex-grow">location: Majuli</span>
            <Mountain
              className="ml-4 text-green-600 transition-transform hover:scale-110"
              size={48}
            />
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl font-bold tracking-wide mb-6"
      >
        Me:nam Homestay (Majuli)
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-lg max-w-3xl mx-auto mb-12"
      >
        Welcome to Me:nam Homestay, nestled on Majuli Island, the world's
        largest river island and a cultural treasure in Assam. Run by the owner
        herself, this homestay offers a warm, local touch, giving guests an
        unforgettable experience. From meeting locals to exploring traditional
        crafts and customs, Me:nam Homestay is your gateway to the authentic
        heart of Majuli—an island rich in natural beauty, vibrant festivals, and
        deep-rooted traditions.
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
          <li>Stay Type: HomeStay</li>
          <li>Max Capacity: 30 persons</li>
          <li>Price: ₹3500 per night</li>
          <li>
            Location:{" "}
            <a
              href="https://www.google.com/maps/place/Me:nam+Homestay+(Majuli)"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 underline"
            >
              View on Google Maps
            </a>
          </li>
          <li>
            Address: Jengrai Chapori Rd, Kesaikhua gaon, Moghua Chuk, Assam
            785105
          </li>
        </ul>
      </motion.div>

      {/* Things to Do Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-lg mb-16 shadow-xl"
      >
        <h2 className="text-2xl font-semibold text-center mb-4">
          Things to Do at Me:nam Homestay
        </h2>
        <ul className="list-disc ml-6 space-y-3">
          <li>Boating: Glide along the serene Brahmaputra River.</li>
          <li>
            Mask Making: Discover Majuli's traditional art of handmade masks.
          </li>
          <li>
            Pottery Village: Visit local artisans crafting pottery by hand.
          </li>
          <li>Apong Making: Learn to make Apong, Assam's unique rice beer.</li>
          <li>
            Weaving: Watch intricate weaving techniques by local craftsmen.
          </li>
          <li>
            Village Walk: Stroll through picturesque villages, meeting locals
            and experiencing daily life.
          </li>
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

export default ExploreMoreMNM;

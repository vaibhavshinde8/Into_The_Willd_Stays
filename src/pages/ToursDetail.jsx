import { useParams } from "react-router-dom";
import { MapPin, Clock, Phone, Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import toursData from "../data/tours.json";
import { useEffect, useState } from "react";
import ContactForm from "../components/ContactForm";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../index.css";
// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

const ToursDetail = () => {
  const { id } = useParams();
  const tour = toursData.tours.find((t) => t.id === parseInt(id));
  const [showContactForm, setShowContactForm] = useState(false);
  const [expandedDay, setExpandedDay] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedDay(expandedDay === index ? null : index);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (!tour) {
    return <div>Tour not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-teal-50/30 to-blue-50/30">
      {/* Hero Section */}
      <div className="relative h-[90vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={tour.imageUrl}
            alt={tour.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F2642]/40 via-[#0F2642]/60 to-[#0F2642]/80" />
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            {tour.name}
          </motion.h1>
          <div className="flex flex-wrap justify-center gap-6 text-gray-200 mb-8">
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span>{tour.location}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span>{tour.duration}</span>
            </div>
            <div className="flex items-center text-teal-400 font-semibold">
              Rs. {tour.price} per person
            </div>
          </div>
          <motion.button
            onClick={() => setShowContactForm(true)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
            }}
            className="relative group bg-gradient-to-r from-teal-500 via-teal-400 to-emerald-400 
                     text-white px-10 py-5 rounded-2xl text-lg font-medium
                     shadow-[0_10px_20px_rgba(0,0,0,0.1)] 
                     hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]
                     transition-all duration-500 overflow-hidden
                     border border-white/20 backdrop-blur-sm"
          >
            <span className="relative z-10 flex items-center justify-center gap-2 group-hover:translate-x-1 transition-transform duration-500">
              Talk to our Experts
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <div
              className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 
                          translate-x-[-100%] group-hover:translate-x-[100%] 
                          transition-transform duration-1000"
            />
          </motion.button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 p-6 max-w-screen-lg mx-auto bg-gray-50 shadow-lg rounded-lg">
        {/* Main Image */}
        <div className="relative col-span-2 rounded-lg overflow-hidden shadow-md">
          <img
            src="https://png.pngtree.com/background/20230805/original/pngtree-view-from-pahalgam-valley-in-kashmir-india-india-kashmir-pahalgam-valley-picture-image_4440140.jpg"
            alt="Main Image"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 right-2 justify-center bg-black bg-opacity-25 rounded-lg transition-opacity duration-300 hover:bg-opacity-50">
            <span className="text-white text-lg font-semibold ">
              Explore Beauty
            </span>
          </div>
        </div>

        {/* Smaller Images */}
        <div className="grid grid-cols-2 gap-3">
          <div className="relative h-70 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src="https://png.pngtree.com/background/20230805/original/pngtree-a-snowy-mountain-adorned-in-pahalgam-valley-located-in-kashmir-india-picture-image_4440125.jpg"
              alt="Destinations"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 right-2 justify-center bg-black bg-opacity-25 transition-opacity duration-300 hover:bg-opacity-50">
              <span className="text-white text-sm font-medium">
                Destinations
              </span>
            </div>
          </div>

          <div className="relative h-60 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src="https://png.pngtree.com/background/20230805/original/pngtree-mountain-in-pahalgam-valley-kashmir-travel-india-resort-photo-picture-image_4440110.jpg"
              alt="Stays"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 right-2 justify-center bg-black bg-opacity-25 transition-opacity duration-300 hover:bg-opacity-50">
              <span className="text-white text-sm font-medium">Stays</span>
            </div>
          </div>

          <div className="relative h-60 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src="https://png.pngtree.com/background/20230805/original/pngtree-mountain-in-pahalgam-valley-kashmir-travel-india-resort-photo-picture-image_4440110.jpg"
              alt="Activity & Sightseeing"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 right-2 justify-center bg-black bg-opacity-25 transition-opacity duration-300 hover:bg-opacity-50">
              <span className="text-white text-sm font-medium">Activity</span>
            </div>
          </div>

          <div className="relative h-60 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src="https://png.pngtree.com/background/20230401/original/pngtree-view-from-chitkul-village-in-sangla-valley-vector-picture-image_2229375.jpg"
              alt="View All Images"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 right-2 justify-center bg-black bg-opacity-25 transition-opacity duration-300 hover:bg-opacity-50">
              <span className="text-white text-sm font-medium">
                View All Images
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Connect to Expert Button */}
      <div className="bg-white/80 backdrop-blur-sm py-8">
        {/* <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.button
              onClick={() => setShowContactForm(true)}
              whileHover={{ scale: 1.05 }}
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Connect to an Expert
            </motion.button>
          </motion.div>
        </div> */}
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-10 py-16 mr-20 ">
        <div className="space-y-16">
          <div className="flex">
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg w-3/5">
              <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center uppercase">
                Trip Highlights
              </h1>
              {tour.highlights?.map((item, index) => (
                <h2
                  key={index}
                  className=" text-gray-600 mb-3 pl-4 border-l-4 border-blue-500"
                >
                  {item}
                </h2>
              ))}
            </div>
            <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md ml-4 sticky top-20">
              {/* Header Section */}
              <h2 className="text-lg font-semibold text-gray-800">
                {tour.location}
              </h2>
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-2xl font-bold text-gray-800">
                  INR {tour.price}
                </span>
                <span className="line-through text-gray-500 text-sm">
                  INR 15,998
                </span>
                <span className="bg-green-100 text-green-600 text-xs font-medium px-2 py-1 rounded">
                  SAVE INR 1,999
                </span>
              </div>

              {/* Form */}
              <form className="space-y-4 mt-6">
                {/* Full Name */}
                <div>
                  <input
                    type="text"
                    placeholder="Full Name*"
                    className="w-full border border-gray-300 rounded-md p-3 text-sm focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    placeholder="Email*"
                    className="w-full border border-gray-300 rounded-md p-3 text-sm focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                {/* Phone */}
                <div className="flex space-x-2">
                  <select className="w-1/4 border border-gray-300 rounded-md p-3 text-sm focus:ring-orange-500 focus:border-orange-500">
                    <option value="+91">+91</option>
                    {/* Add more country codes here */}
                  </select>
                  <input
                    type="text"
                    placeholder="Your Phone*"
                    className="w-3/4 border border-gray-300 rounded-md p-3 text-sm focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                {/* Travel Date & Traveller Count */}
                <div className="flex space-x-2">
                  <input
                    type="date"
                    placeholder="Travel Date*"
                    className="w-1/2 border border-gray-300 rounded-md p-3 text-sm focus:ring-orange-500 focus:border-orange-500"
                  />
                  <input
                    type="number"
                    placeholder="Traveller Count*"
                    className="w-1/2 border border-gray-300 rounded-md p-3 text-sm focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                {/* Message */}
                <div>
                  <textarea
                    placeholder="Message..."
                    className="w-full border border-gray-300 rounded-md p-3 text-sm focus:ring-orange-500 focus:border-orange-500"
                    rows="3"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full group bg-gradient-to-r from-teal-500 via-teal-400 to-emerald-400 
                     text-white px-4 py-2 rounded-2xl text-lg font-medium
                     shadow-[0_10px_20px_rgba(0,0,0,0.1)] 
                     hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]
                     transition-all duration-500 overflow-hidden
                     border border-white/20 backdrop-blur-sm"
                >
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>

          <section>
            <div></div>
            <div className="space-y-6 w-3/5">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center uppercase">
                Itinerary
              </h2>
              {tour.itinerary?.map((item, index) => (
                <div key={index}>
                  {/* Display combinedDays images with Swiper */}
                  <div className="mb-4">
                    {item.combinedDays && item.combinedDays.length > 0 && (
                      <Swiper
                        spaceBetween={20}
                        effect={"fade"}
                        navigation={true}
                        pagination={{
                          clickable: true,
                        }}
                        autoplay={{
                          delay: 3000, // Slide duration in milliseconds
                          disableOnInteraction: false, // Keeps autoplay running even after user interaction
                        }}
                        modules={[EffectFade, Navigation, Pagination, Autoplay]} // Include Autoplay module
                        className="mySwiper h-[150px] sm:h-[250px] rounded-lg"
                      >
                        {item.combinedDays.map((image, imgIndex) => (
                          <SwiperSlide key={imgIndex}>
                            <img
                              className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                              src={image}
                              alt={`Combined Day Image ${imgIndex + 1}`}
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    )}
                  </div>

                  {/* Render days with toggleAccordion */}
                  {item.days.map((day, dayIndex) => (
                    <div
                      key={dayIndex}
                      className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 mb-4"
                    >
                      {/* Accordion Header */}
                      <div
                        className="flex items-center justify-between cursor-pointer"
                        onClick={() => toggleAccordion(`${index}-${dayIndex}`)}
                      >
                        <h3 className=" text-[#0F2642] ">{day.day}</h3>
                        <span
                          className={`transform transition-transform duration-300 ${
                            expandedDay === `${index}-${dayIndex}`
                              ? "rotate-180"
                              : ""
                          }`}
                        >
                          ⌄
                        </span>
                      </div>

                      {/* Accordion Content */}
                      {expandedDay === `${index}-${dayIndex}` && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4"
                        >
                          {/* Description */}
                          <div className="text-sm sm:text-lg leading-relaxed text-gray-800 mb-4 bg-gray-50 p-3 sm:p-4 rounded-lg shadow-inner">
                            {Array.isArray(day.description) ? (
                              <ul className="space-y-2 sm:space-y-3 text-[#0F2642]">
                                {day.description.map((desc, descIndex) => (
                                  <li
                                    key={descIndex}
                                    className="flex items-start text-sm sm:text-base  leading-normal"
                                  >
                                    {/* Custom Icon */}
                                    <span className="mr-2 sm:mr-3 flex-shrink-0 text-blue-500">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                        className="w-4 h-4 sm:w-5 sm:h-5"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          d="M8.146 11.854a.5.5 0 0 1-.708-.708L10.293 8 7.438 5.146a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3z"
                                        />
                                      </svg>
                                    </span>
                                    {/* Description Text */}
                                    <span>{desc}</span>
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <p className="text-sm sm:text-base md:text-lg text-[#0F2642] leading-normal">
                                {day.description}
                              </p>
                            )}
                          </div>

                          {/* Swiper Images */}
                          <Swiper
                            spaceBetween={20}
                            effect={"fade"}
                            navigation={true}
                            pagination={{
                              clickable: true,
                            }}
                            autoplay={{
                              delay: 3000,
                              disableOnInteraction: false,
                            }}
                            modules={[
                              EffectFade,
                              Navigation,
                              Pagination,
                              Autoplay,
                            ]}
                            className="mySwiper h-[150px] sm:h-[250px] rounded-lg"
                          >
                            {Object.values(day.images).map(
                              (image, imgIndex) => (
                                <SwiperSlide key={imgIndex}>
                                  <img
                                    className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                                    src={image}
                                    alt={`Day ${dayIndex + 1} Image ${
                                      imgIndex + 1
                                    }`}
                                  />
                                </SwiperSlide>
                              )
                            )}
                          </Swiper>
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </section>

          {/* Inclusions & Exclusions */}
          <div className="grid md:grid-cols-2 gap-12">
            <section>
              <h2 className="text-3xl font-bold text-[#0F2642] mb-8">
                Inclusions
              </h2>
              <div className="space-y-4">
                {tour.inclusions?.map((item, index) => (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    key={index}
                    className="flex items-center space-x-3 bg-teal-50/50 backdrop-blur-sm p-4 rounded-xl"
                  >
                    <span className="h-3 w-3 rounded-full bg-teal-500 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-[#0F2642] mb-8">
                Exclusions
              </h2>
              <div className="space-y-4">
                {tour.exclusions?.map((item, index) => (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    key={index}
                    className="flex items-center space-x-3 bg-red-50/50 backdrop-blur-sm p-4 rounded-xl"
                  >
                    <span className="h-3 w-3 rounded-full bg-red-400 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          {/* Connect to Expert Button */}
          {/* <section className="text-center">
            <motion.button
              onClick={() => setShowContactForm(true)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Connect to an Expert
            </motion.button>
          </section> */}

          {/* Contact Methods */}
          <section>
            <h2 className="text-3xl font-bold text-[#0F2642] mb-8">
              Contact Methods
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a
                href={`tel:${tour.contact_methods?.phone}`}
                className="flex items-center space-x-4 bg-blue-50/80 backdrop-blur-sm p-6 rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <Phone className="w-6 h-6 text-blue-600" />
                <span className="text-lg text-gray-700">
                  {tour.contact_methods?.phone || "Not available"}
                </span>
              </a>
              <a
                href={`mailto:${tour.contact_methods?.email}`}
                className="flex items-center space-x-4 bg-purple-50/80 backdrop-blur-sm p-6 rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <Mail className="w-6 h-6 text-purple-600" />
                <span className="text-lg text-gray-700">
                  {tour.contact_methods?.email || "Not available"}
                </span>
              </a>
              {/* <a
                href={`https://wa.me/${tour.contact_methods?.whatsapp}`}
                className="flex items-center space-x-4 bg-green-50/80 backdrop-blur-sm p-6 rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <MessageCircle className="w-6 h-6 text-green-600" />
                <span className="text-lg text-gray-700">
                  {tour.contact_methods?.whatsapp
                    ? `${tour.contact_methods?.whatsapp}`
                    : "Not available"}
                </span>
              </a> */}
            </div>
          </section>

          {/* Rules & Policy */}
          <section>
            <h2 className="text-3xl font-bold text-[#0F2642] mb-8">
              Rules & Policy
            </h2>
            <div className="grid gap-4">
              {tour.rules_and_policy?.map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  key={index}
                  className="flex items-center space-x-4 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md"
                >
                  <span className="h-3 w-3 rounded-full bg-[#0F2642] flex-shrink-0" />
                  <span className="text-lg text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Add ContactForm Modal */}
      <ContactForm
        isOpen={showContactForm}
        onClose={() => setShowContactForm(false)}
        isTour={true}
      />
    </div>
  );
};

export default ToursDetail;

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
import { EffectFade, Navigation, Pagination } from "swiper/modules";

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
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="space-y-16">

          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center uppercase">Trip Highlights</h1>
            {
              tour.highlights?.map((item, index) => (
                <h2
                  key={index}
                  className="text-lg text-gray-600 mb-3 pl-4 border-l-4 border-blue-500"
                >
                  {item}
                </h2>
              ))
            }
          </div>


          {/* Itinerary */}
          <section>
            <h2 className="text-3xl font-bold text-[#0F2642] mb-8 text-center">
              Itinerary
            </h2>
            <div>

            </div>
            <div className="space-y-6">
              {tour.itinerary?.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {/* Accordion Header */}
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleAccordion(index)}
                  >
                    <h3 className="font-bold text-[#0F2642] text-xl">
                      {item.day}
                    </h3>
                    <span
                      className={`transform transition-transform duration-300 ${expandedDay === index ? "rotate-180" : ""}`}
                    >
                      ⌄
                    </span>
                  </div>

                  {/* Accordion Content */}
                  {expandedDay === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4"
                    >
                      <p className="text-lg leading-relaxed text-gray-700 mb-4">
                        {item.description}
                      </p>

                      <Swiper
                        spaceBetween={30}
                        effect={"fade"}
                        navigation={true}
                        pagination={{
                          clickable: true,
                        }}
                        modules={[EffectFade, Navigation, Pagination]}
                        className="mySwiper h-[400px] rounded-lg"
                      >
                        {/* Dynamically render images from the itinerary JSON */}
                        {Object.values(item.images).map((image, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                    src={image}
                    alt={`Day ${index + 1} Image ${idx + 1}`}
                  />
                </SwiperSlide>
              ))}
                      </Swiper>
                    </motion.div>
                  )}
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
              <a
                href={`https://wa.me/${tour.contact_methods?.whatsapp}`}
                className="flex items-center space-x-4 bg-green-50/80 backdrop-blur-sm p-6 rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <MessageCircle className="w-6 h-6 text-green-600" />
                <span className="text-lg text-gray-700">
                  {tour.contact_methods?.whatsapp
                    ? `${tour.contact_methods?.whatsapp}`
                    : "Not available"}
                </span>
              </a>
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

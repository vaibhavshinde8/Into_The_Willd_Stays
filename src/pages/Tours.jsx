import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  MapPin,
  Clock,
  DollarSign,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";
import toursData from "../assets/tours.json";
import BookingButton from "../components/BookingButton";

// Modal Component
const Modal = ({ isOpen, onClose, tour }) => {
  if (!isOpen || !tour) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 w-full max-w-3xl h-[80vh] overflow-y-auto text-wrap transition-all duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-3xl text-white bg-black px-4 py-2 border"
          aria-label="Close modal"
        >
          ×
        </button>
        <h2 className="text-2xl font-semibold mb-4">{tour.name}</h2>
        <div className="space-y-4">
          <section>
            <h4 className="text-xl font-semibold text-[#091F3C] mb-4">
              Itinerary
            </h4>
            <div className="space-y-2 text-gray-600">
              {tour.itinerary.map((item, index) => (
                <div key={index} className="mb-4">
                  <h5 className="font-bold text-lg">{item.day}</h5>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h4 className="text-xl font-semibold text-[#091F3C] mb-4">
              Inclusions
            </h4>
            <ul className="space-y-2 text-gray-600">
              {tour.inclusions.map((item, index) => (
                <li key={index} className="mb-2 flex items-start">
                  <span className="h-2 w-2 mt-2 mr-2 bg-[#43A181]" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h4 className="text-xl font-semibold text-[#091F3C] mb-4">
              Exclusions
            </h4>
            <ul className="space-y-2 text-gray-600">
              {tour.exclusions.map((item, index) => (
                <li key={index} className="mb-2 flex items-start">
                  <span className="h-2 w-2 mt-2 mr-2 bg-[#43A181]" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h4 className="text-xl font-semibold text-[#091F3C] mb-4">
              Contact Methods
            </h4>
            <div className="space-y-3 text-gray-600">
              <a
                href={`tel:${tour.contact_methods?.phone}`}
                className="flex items-center hover:text-[#43A181] transition-colors"
              >
                <Phone className="w-5 h-5 mr-3" />
                {tour.contact_methods?.phone || "Not available"}
              </a>
              <a
                href={`mailto:${tour.contact_methods?.email}`}
                className="flex items-center hover:text-[#43A181] transition-colors"
              >
                <Mail className="w-5 h-5 mr-3" />
                {tour.contact_methods?.email || "Not available"}
              </a>
              <a
                href={`https://wa.me/${tour.contact_methods?.whatsapp}`}
                className="flex items-center hover:text-[#43A181] transition-colors"
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                {tour.contact_methods?.whatsapp
                  ? `+${tour.contact_methods?.whatsapp}`
                  : "Not available"}
              </a>
            </div>
          </section>

          <section>
            <h4 className="text-xl font-semibold text-[#091F3C] mb-4">
              Rules & Policy
            </h4>
            <ul className="space-y-2 text-gray-600">
              {tour.rules_and_policy.map((item, index) => (
                <li key={index} className="mb-2 flex items-start">
                  <span className="h-2 w-2 mt-2 mr-2 bg-[#43A181]" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

const Tours = () => {
  const [tours, setTours] = useState([]);
  const [selectedTour, setSelectedTour] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setTours(toursData.tours);
  }, []);

  const openModal = (tour) => {
    setSelectedTour(tour);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTour(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pb-32">
      <div className="relative min-h-[70vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('https://images.trvl-media.com/lodging/109000000/108380000/108370800/108370765/28b3dc50.jpg?impolicy=resizecrop&rw=1200&ra=fit')] bg-cover bg-center bg-fixed transform scale-105">
          <div className="absolute inset-0 bg-gradient-to-b from-[#091F3C]/30 to-[#091F3C]/90 backdrop-blur-sm" />
        </div>

        {/* Content Section */}
        <div className="relative min-h-[60vh] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Section Heading */}
            <h1 className="relative inline-block">
              <span className="absolute -inset-1 w-full h-full bg-gradient-to-r from-[#43A181] to-[#43A181]/80 -skew-y-3 transform origin-top-right"></span>
              <span className="relative text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight">
                Tours
              </span>
            </h1>

            {/* Decorative Divider */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "100%" }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-8 h-1 bg-gradient-to-r from-[#43A181] to-transparent max-w-[200px] mx-auto"
            />
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20">
        {tours.map((tour) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            key={tour.id}
            className="bg-white overflow-hidden shadow-lg border border-gray-100 hover:border-[#43A181] transition-all duration-300"
          >
            <div className="relative group">
              <img
                src={tour.imageUrl}
                alt={tour.name}
                className="w-full h-[60vh] object-cover brightness-90 group-hover:brightness-100 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#091F3C] to-transparent opacity-70" />
              <div className="absolute bottom-0 p-6 w-full">
                <h3 className="text-3xl font-bold text-white mb-2">
                  {tour.name}
                </h3>
                <div className="flex flex-wrap gap-4 text-white">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {tour.location}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {tour.duration}
                  </div>
                  <div className="flex items-center">
                    Rs. {tour.price} per person
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center bg-gray-50 p-4 border-t border-gray-100">
              <button
                onClick={() => openModal(tour)}
                className="bg-[#43A181] text-white px-6 py-2 text-lg hover:bg-[#367d57] transition-all duration-300"
              >
                View Details
              </button>
              <BookingButton tour={tour} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} tour={selectedTour} />
    </div>
  );
};

export default Tours;

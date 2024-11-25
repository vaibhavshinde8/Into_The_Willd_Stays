import React, { useEffect, useState } from "react";
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

const Tours = () => {
  const [tours, setTours] = useState([]);
  const [expandedTour, setExpandedTour] = useState(null);

  useEffect(() => {
    setTours(toursData.tours);
  }, []);

  const renderList = (data) => {
    if (!data || data.length === 0)
      return <p className="text-gray-400 italic">No data available</p>;
    return data.map((item, index) => (
      <motion.li
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
        key={index}
        className="mb-2 flex items-start"
      >
        <span className="h-2 w-2 mt-2 mr-2 bg-[#43A181] rounded-full" />
        {item}
      </motion.li>
    ));
  };

  const renderItinerary = (itinerary) => {
    if (!itinerary || itinerary.length === 0)
      return <p className="text-gray-400 italic">No itinerary available</p>;

    return itinerary.map((item, index) => (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        key={index}
        className="mb-4 relative pl-8 border-l-2 border-[#43A181]"
      >
        <div className="absolute left-0 -translate-x-1/2 w-4 h-4 bg-[#43A181] rounded-full" />
        <h5 className="font-bold text-lg text-[#091F3C]">{item.day}</h5>
        <p className="text-gray-600">{item.description}</p>
      </motion.div>
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-32 lg:py-32 ">
      <div className="relative min-h-[60vh] bg-gray-50 ">
        <div className=" bg-[url('https://images.trvl-media.com/lodging/109000000/108380000/108370800/108370765/28b3dc50.jpg?impolicy=resizecrop&rw=1200&ra=fit')] absolute inset-0 bg-cover bg-center bg-fixed">
          <div className="absolute inset-0 bg-gradient-to-b from-[#091F3C]/50 to-[#091F3C]/80" />
        </div>

        <div className="relative min-h-[60vh] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="relative inline-block">
              <span className="absolute -inset-1 w-full h-full bg-gradient-to-r from-[#43A181] to-[#43A181]/80 -skew-y-3 transform origin-top-right"></span>
              <span className="relative text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight">
                Tours
              </span>
            </h1>

            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "100%" }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-8 h-1 bg-gradient-to-r from-[#43A181] to-transparent max-w-[200px] mx-auto"
            />
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-8 py-20">
        {tours.map((tour) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            key={tour.id}
            className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:border-[#43A181] transition-all duration-300"
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
                    <span>{tour.location || "Location not available"}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{tour.duration || "Duration not available"}</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="w-4 h-4 mr-2" />
                    <span className="text-[#43A181] font-semibold">
                      {tour.cost || "Cost information not available"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8">
              <motion.div
                initial={false}
                animate={{ height: expandedTour === tour.id ? "auto" : "0" }}
                className="overflow-hidden"
              >
                <div className="space-y-8">
                  <section>
                    <h4 className="text-xl font-semibold text-[#091F3C] mb-4">
                      Itinerary
                    </h4>
                    <div className="space-y-2 text-gray-600">
                      {renderItinerary(tour.itinerary)}
                    </div>
                  </section>

                  <section>
                    <h4 className="text-xl font-semibold text-[#091F3C] mb-4">
                      Inclusions
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      {renderList(tour.inclusions)}
                    </ul>
                  </section>

                  <section>
                    <h4 className="text-xl font-semibold text-[#091F3C] mb-4">
                      Exclusions
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      {renderList(tour.exclusions)}
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
                      {renderList(tour.rules_and_policy)}
                    </ul>
                  </section>
                </div>
              </motion.div>

              <button
                onClick={() =>
                  setExpandedTour(expandedTour === tour.id ? null : tour.id)
                }
                className="mt-8 w-full flex items-center justify-center gap-2 py-4 px-6 bg-[#091F3C] hover:bg-[#43A181] text-white rounded-lg transition-colors duration-300"
              >
                <span>
                  {expandedTour === tour.id ? "Show Less" : "Show More"}
                </span>
                <motion.div
                  animate={{ rotate: expandedTour === tour.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Tours;

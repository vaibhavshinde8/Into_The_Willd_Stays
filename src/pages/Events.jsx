import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail, MessageCircle, X, Send } from "lucide-react";
import emailjs from "emailjs-com";

// Banner Images
import Banner1 from "../assets/Outdoorevents/schoolcampbanner.png";
import Banner2 from "../assets/Outdoorevents/dadnibanner.png";

// Gallery Images 
import Gallery1 from "../assets/Outdoorevents/oe1.jpeg";
import Gallery2 from "../assets/Outdoorevents/oe2.jpeg";
import Gallery3 from "../assets/Outdoorevents/oe3.jpeg";
import Gallery4 from "../assets/Outdoorevents/oe4.jpeg";
import Gallery5 from "../assets/Outdoorevents/oe5.jpeg";
import Gallery6 from "../assets/Outdoorevents/oe6.jpeg";
import Gallery7 from "../assets/Outdoorevents/oe7.jpeg";
import Gallery8 from "../assets/Outdoorevents/oe8.jpeg";
import Gallery9 from "../assets/Outdoorevents/oe9.jpeg";
import Gallery10 from "../assets/Outdoorevents/oe10.jpeg";
import Gallery11 from "../assets/Outdoorevents/oe11.jpeg";
import Gallery12 from "../assets/Outdoorevents/oe12.jpeg";
import Gallery13 from "../assets/Outdoorevents/oe13.jpeg";
import Gallery14 from "../assets/Outdoorevents/oe14.jpeg";

// Contact Modal Component
const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = "service_8b79wnu";
    const templateID = "template_434tezq";
    const publicKey = "FU4ThIFcvqAz_SSAm";

    emailjs.send(serviceID, templateID, formData, publicKey).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setSuccess(true);
        setIsSubmitting(false);
        setFormData({ name: "", email: "", phone: "", message: "" });
      },
      (error) => {
        console.error("FAILED...", error);
        setIsSubmitting(false);
      }
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 overflow-y-auto">
      <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-gray-100 p-2 hover:bg-gray-200 transition"
        >
          <X className="w-6 h-6 text-gray-700" />
        </button>

        <div className="grid grid-cols-1 border border-black">
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-6 uppercase tracking-tight">
              Talk to us
            </h2>
            <form onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="name" className="block uppercase text-xs font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-black focus:outline-none focus:ring-1 focus:ring-black"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block uppercase text-xs font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-black focus:outline-none focus:ring-1 focus:ring-black"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block uppercase text-xs font-bold mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-black focus:outline-none focus:ring-1 focus:ring-black"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="message" className="block uppercase text-xs font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  className="w-full px-3 py-2 border border-black focus:outline-none focus:ring-1 focus:ring-black"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full border border-black py-3 uppercase text-sm font-bold hover:bg-black hover:text-white transition duration-300 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="w-4 h-4 ml-2" />
              </button>

              {success && (
                <p className="text-center mt-4 uppercase text-xs">
                  Message sent successfully
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// Event Modal Component
const EventModal = ({ isOpen, onClose, event }) => {
  if (!isOpen || !event) return null;

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
        <h2 className="text-2xl font-semibold mb-4">{event.name}</h2>
        <div className="space-y-4">
          <section>
            <h4 className="text-xl font-semibold text-[#091F3C] mb-4">
              Event Details
            </h4>
            <div className="space-y-2 text-gray-600">
              <p className="text-lg p-4">{event.description}</p>
            </div>
          </section>

          <section>
            <h4 className="text-xl font-semibold text-[#091F3C] mb-4">
              Activities
            </h4>
            <ul className="space-y-2 text-gray-600">
              {event.activities.map((item, index) => (
                <li key={index} className="mb-2 flex items-start text-lg">
                  <span className="h-2 w-2 mt-2 mr-2 bg-[#43A181]" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h4 className="text-xl font-semibold text-[#091F3C] mb-4">
              Package Details
            </h4>
            <ul className="space-y-2 text-gray-600">
              {event.packageDetails.map((item, index) => (
                <li key={index} className="mb-2 flex items-start text-lg">
                  <span className="h-2 w-2 mt-2 mr-2 bg-[#43A181]" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h4 className="text-xl font-semibold text-[#091F3C] mb-4">
              Contact Information
            </h4>
            <div className="space-y-3 text-gray-600 text-lg">
              <a href="tel:+919761966485" className="flex items-center hover:text-[#43A181] transition-colors">
                <Phone className="w-5 h-5 mr-3" />
                +91 97619 66485
              </a>
              <a href="mailto:intothewildstays@gmail.com" className="flex items-center hover:text-[#43A181] transition-colors">
                <Mail className="w-5 h-5 mr-3" />
                intothewildstays@gmail.com
              </a>
              <a href="https://wa.me/9761966485" className="flex items-center hover:text-[#43A181] transition-colors">
                <MessageCircle className="w-5 h-5 mr-3" />
                WhatsApp
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

const Events = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const sampleEvents = [
      {
        id: 1,
        name: "School Camp",
        location: "Rishikesh, Uttarakhand",
        duration: "2 Days, 1 Night",
        price: "6000",
        imageUrl: Banner1,
        description: "An immersive outdoor experience designed to expose youth to nature, build character, and develop essential life skills.",
        activities: [
          "Yoga & Zumba Workshop",
          "Camping & Hiking Workshop",
          "Art Workshop",
          "Music Session and Bonfire",
          "Projector Movie Night",
          "Treasure Hunt and Fun Activities"
        ],
        packageDetails: [
          "All meals included",
          "Professional instructors",
          "Safety equipment provided",
          "Accommodation in tents",
          "First aid facilities"
        ],
        galleryImages: [Gallery1, Gallery2, Gallery3, Gallery4, Gallery5, Gallery6, Gallery7]
      },
      {
        id: 2,
        name: "Dad & I",
        location: "Rishikesh, Uttarakhand",
        duration: "2 Days, 1 Night",
        price: "6000",
        imageUrl: Banner2,
        description: "A unique 2-day event that brings dads and children closer through outdoor adventures, team-building activities, and memorable experiences.",
        activities: [
          "Camping & Trekking Workshop",
          "Cycling Workshop",
          "Yoga & Running Workshop",
          "Team Bonding Activities",
          "Live Music and Bonfire"
        ],
        packageDetails: [
          "2N/3D - 6000rs per pair (Dad & Child)",
          "3000 extra for another child",
          "Includes stay, meals, workshops, and activities"
        ],
        galleryImages: [Gallery8, Gallery9, Gallery10, Gallery11, Gallery12, Gallery13, Gallery14]
      }
    ];

    setEvents(sampleEvents);
  }, []);

  const openModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pb-32">
      <div className="relative h-[70vh] overflow-hidden pt-8">
        <div className="absolute inset-0 bg-[url('https://images.trvl-media.com/lodging/109000000/108380000/108370800/108370765/28b3dc50.jpg?impolicy=resizecrop&rw=1200&ra=fit')] bg-cover bg-center bg-fixed transform scale-105">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 to-gray-900/60" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative h-full max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-center"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent">
              Outdoor Events
            </span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mb-8">
            Create Unforgettable Memories in Nature
          </p>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20">
        {events.map((event) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            key={event.id}
            className="bg-white overflow-hidden p-4 shadow-lg border border-gray-100 hover:border-[#43A181] transition-all duration-300"
          >
            <div className="relative group">
              <img
                src={event.imageUrl}
                alt={event.name}
                className="w-full h-[60vh] object-cover brightness-90 group-hover:brightness-100 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#091F3C] to-transparent opacity-70" />
              <div className="absolute bottom-0 p-6 w-full">
                <h3 className="text-3xl font-bold text-white mb-2">
                  {event.name}
                </h3>
                <div className="flex flex-wrap gap-4 text-white">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {event.location}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {event.duration}
                  </div>
                  <div className="flex items-center">
                    Rs. {event.price} per person
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center bg-gray-50 p-4 border-t border-gray-100">
              <button
                onClick={() => openModal(event)}
                className="bg-[#43A181] text-white px-6 py-2 text-lg hover:bg-[#367d57] transition-all duration-300 mr-4"
              >
                View Details
              </button>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="bg-[#0F2642] text-white px-6 py-2 text-lg hover:bg-[#0a1b2f] transition-all duration-300"
              >
                Talk to us
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modals */}
      <EventModal
        isOpen={isModalOpen}
        onClose={closeModal}
        event={selectedEvent}
      />
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
};

export default Events;
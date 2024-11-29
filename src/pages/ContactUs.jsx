import { useState } from "react";
import { Mails, Navigation, PhoneCall, Send } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

import TourBanner from "../components/TourBanner";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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

    const serviceID = "your_service_id";
    const templateID = "your_template_id";
    const publicKey = "your_public_key";

    emailjs.send(serviceID, templateID, formData, publicKey).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setSuccess(true);
        setIsSubmitting(false);
        setFormData({ name: "", email: "", message: "" });
      },
      (error) => {
        console.error("FAILED...", error);
        setIsSubmitting(false);
      }
    );
  };

  return (
    <div className="bg-gradient-to-r from-gray-300 via-white to-gray-200 text-black">
      <div id="contact-us">
        {/* Hero Section */}
        <div className="relative min-h-[70vh] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 bg-[url('https://images.trvl-media.com/lodging/109000000/108380000/108370800/108370765/28b3dc50.jpg?impolicy=resizecrop&rw=1200&ra=fit')] bg-cover bg-center bg-fixed transform scale-105">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0F2642]/70 to-[#0F2642]/90 backdrop-blur-sm" />
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
                <span className="absolute -inset-1 w-full h-full bg-gradient-to-r  from-[#43A181] to-[#43A181]/80  -skew-y-3 transform origin-top-right"></span>
                <span className="relative text-4xl md:text-5xl lg:text-7xl text-white font-bold tracking-tight">
                  Contact Us
                </span>
              </h1>

              {/* Decorative Divider */}
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "100%" }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mt-8 h-1 bg-gradient-to-r from-white to-transparent max-w-[200px] mx-auto"
              />
            </motion.div>
          </div>
        </div>

        {/* Contact Form */}
        <div
          id="contact-form"
          className="lg:mx-16 my-16 mx-4 flex flex-col justify-center lg:flex-row gap-8"
        >
          {/* Contact Form */}
          <div className="flex flex-col justify-center items-center lg:items-start ">
            <h1 className="text-2xl font-bold">Have any questions?</h1>
            <h2 className="text-lg text-center lg:text-left mt-2">
              Call us to book a meetup or send us an email for services.
            </h2>
            <form
              className="flex flex-col gap-4 mt-6 w-full lg:w-[450px]"
              onSubmit={sendEmail}
            >
              <div className="flex flex-col">
                <label className="text-lg font-medium" htmlFor="name">
                  Name
                </label>
                <input
                  className="bg-white/10 border border-black/20 bg-gray-200 p-4 px-4 py-2 text-black placeholder-white/50 focus:outline-none focus:border-white/50"
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="text-lg font-medium" htmlFor="email">
                  Email
                </label>
                <input
                  className="bg-white/10 border border-black/20 bg-gray-200 p-4 px-4 py-2 text-black placeholder-white/50 focus:outline-none focus:border-white/50"
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="text-lg font-medium" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="bg-white/10 border border-black/20 bg-gray-200 p-4 px-4 py-2 text-black placeholder-white/50 focus:outline-none focus:border-white/50"
                  name="message"
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <button
                className="bg-white/10 border border-black/20 bg-gray-200 p-4 lg:py-2 py-1 px-8 text-xl text-black flex items-center justify-center gap-2 hover:bg-white/20 transition-all ease-in-out"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send"} <Send size={20} />
              </button>
              {success && (
                <p className="text-green-400 mt-4">
                  Message sent successfully!
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-4 lg:mx-16">
          {/* Location Card */}
          <div className="bg-white/10 border border-black/20 bg-gray-200 p-6">
            <div className="flex items-center justify-center border border-black/20 bg-gray-200 p-4  mb-4">
              <Navigation size={40} />
            </div>
            <h2 className="text-2xl font-semibold text-center mb-2">
              Location
            </h2>
            <p className="text-lg text-center">
              IntoTheWildsStays, House no-4 Mussoorie Dhanaulti Road, Village
              Nali Kala, Dehradun-248001 Uttarakhand
            </p>
          </div>

          {/* Call Us Card */}
          <div className="bg-white/10 border border-black/20 bg-gray-200 p-4 p-6">
            <div className="flex items-center justify-center border border-black/20 bg-gray-200 p-4 p-3 mb-4">
              <PhoneCall size={40} />
            </div>
            <h2 className="text-2xl font-semibold text-center mb-2">
              Call Us Anytime
            </h2>
            <p className="text-lg text-center">
              <a href="tel:+919761966485">+91-9761966485</a>
              <br />
              <a href="tel:+919958838557">+91-9958838557</a>
            </p>
          </div>

          {/* Email Us Card */}
          <div className="bg-white/10 border border-black/20 bg-gray-200 p-4 p-6">
            <div className="flex items-center justify-center border border-black/20 bg-gray-200 p-4 p-3 mb-4">
              <Mails size={40} />
            </div>
            <h2 className="text-2xl font-semibold text-center mb-2">
              Email Us
            </h2>
            <p className="text-lg text-center">
              <a href="mailto:intothewilds@gmail.com">
                intothewildstays@outlook.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Tour Banner div */}
      <div>
        <TourBanner />
      </div>
    </div>
  );
};

export default ContactUs;

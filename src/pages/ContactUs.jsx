import { Mails, Navigation, PhoneCall, Send } from "lucide-react";
import { motion } from "framer-motion";

import TourBanner from "../components/TourBanner";

const ContactUs = () => {
  return (
    <div className="pt-32">
      <div id="contact-us ">
        {/* Hero Section */}

        <div className="relative min-h-[60vh] bg-gray-50">
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
                 Contact Us
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

        {/* Contact Form */}
        <div
          id="contact-form"
          className="lg:mx-16 my-16 mx-4 flex flex-col justify-center lg:flex-row gap-8"
        >
          {/* Google Map */}
          <div className="flex justify-center items-center">
            <iframe
              className="w-full lg:w-[600px] h-[450px] rounded-lg shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3440.2820180231606!2d78.23708687502547!3d30.428106300292047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908df71bc0af0cd%3A0x1ef9ca2fc507b5cc!2sInto%20The%20Wild%20Stays!5e0!3m2!1sen!2sin!4v1730969960183!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div className="flex flex-col justify-center items-center lg:items-start">
            <h1 className="text-2xl font-bold text-secondry">
              Have any questions?
            </h1>
            <h2 className="text-lg text-center lg:text-left mt-2">
              Call us to book a meetup or send us an email for services.
            </h2>
            <form className="flex flex-col gap-4 mt-6 w-full lg:w-[450px]">
              <div className="flex flex-col">
                <label className="text-lg font-medium" htmlFor="name">
                  Name
                </label>
                <input
                  className="border-2 px-4 py-2 rounded-md"
                  type="text"
                  name="name"
                  id="name"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-lg font-medium" htmlFor="email">
                  Email
                </label>
                <input
                  className="border-2 px-4 py-2 rounded-md"
                  type="email"
                  name="email"
                  id="email"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-lg font-medium" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="border-2 px-4 py-2 rounded-md"
                  name="message"
                  id="message"
                  rows="5"
                ></textarea>
              </div>
              <button className="bg-gradient-to-r from-green-200 to-green-400 border-2 lg:py-2 py-1 px-8 rounded-md text-xl text-white flex items-center justify-center gap-2 hover:shadow-xl transition-all ease-in-out">
                Send <Send size={20} />
              </button>
            </form>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-4 lg:mx-16">
          {/* Location Card */}
          <div className="bg-gradient-to-b from-green-200 to-green-400 p-6 rounded-lg shadow-lg  ">
            <div className="flex items-center justify-center bg-white rounded-full p-3 mb-4 shadow-md ">
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
          <div className="bg-gradient-to-b from-green-200 to-green-400 p-6 rounded-lg shadow-lg  ">
            <div className="flex items-center justify-center bg-white rounded-full p-3 mb-4 shadow-md ">
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
          <div className="bg-gradient-to-b from-green-200 to-green-400 p-6 rounded-lg shadow-lg  ">
            <div className="flex items-center justify-center bg-white rounded-full p-3 mb-4 shadow-md ">
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

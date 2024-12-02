import { useState } from "react";
import { Mails, Navigation, PhoneCall, Send } from "lucide-react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";


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

    const serviceID = "service_8b79wnu";
    const templateID = "template_434tezq";
    const publicKey = "FU4ThIFcvqAz_SSAm";

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
    <div className="min-h-screen bg-white">
      <div className="relative h-[70vh] overflow-hidden">
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
              Contact Us
            </span>
            {/* <br />
            Us */}
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mb-8">
          Let's start a conversation
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 border border-black">
          {/* Information Card Section */}
          <div className="border-b lg:border-b-0 lg:border-r border-black p-8">
            <h2 className="text-3xl font-bold mb-6 uppercase tracking-tight">
              Contact Information
            </h2>
            <div className="space-y-6">
              {/* Location */}
              <div className="flex items-start space-x-4 border-b border-black pb-4">
                <Navigation className="w-6 h-6 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Location</h3>
                  <p className="text-sm">
                    IntoTheWildsStays, House no-4 Mussoorie Dhanaulti Road,
                    Village Nali Kala, Dehradun-248001 Uttarakhand
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4 border-b border-black pb-4">
                <PhoneCall className="w-6 h-6 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-sm">
                    <a href="tel:+919761966485">+91-9761966485</a>
                    <br />
                    <a href="tel:+919958838557">+91-9958838557</a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <Mails className="w-6 h-6 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-sm">
                    <a href="mailto:intothewildstays@outlook.com">
                      intothewildstays@outlook.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-6 uppercase tracking-tight">
              Send a Message
            </h2>
            <form onSubmit={sendEmail} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block uppercase text-xs font-bold mb-2"
                >
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
                <label
                  htmlFor="email"
                  className="block uppercase text-xs font-bold mb-2"
                >
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
                <label
                  htmlFor="message"
                  className="block uppercase text-xs font-bold mb-2"
                >
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

export default ContactUs;

import { useState, useEffect } from "react";
import { Mails, Navigation, PhoneCall, Send } from "lucide-react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import axios from "axios";  
import {toast} from "react-toastify";
import {BASE_URL} from "../utils/baseurl";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "", 
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sendEmail = async(e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try{
      const response = await axios.post(`${BASE_URL}/contact`, formData);
      console.log(response);
      toast.success("Message sent successfully");
      setFormData({ name: "", email: "", phone: "", message: "" });
    }catch(error){
      console.error("FAILED...", error);
      toast.error("Message failed to send");
      setIsSubmitting(false);
    }
    finally{
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-buildings-during-sunset-41375-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-full flex flex-col items-center justify-center text-center px-4"
        >
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            Let's Connect
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            We're here to help turn your travel dreams into reality
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1 space-y-8"
          >
            {/* Location Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-teal-500 rounded-lg">
                  <Navigation className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Visit Us</h3>
              </div>
              <p className="text-gray-600">
                IntoTheWildsStays, House no-4 Mussoorie Dhanaulti Road,
                Village Nali Kala, Dehradun-248001 Uttarakhand
              </p>
            </div>

            {/* Phone Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-blue-500 rounded-lg">
                  <PhoneCall className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Call Us</h3>
              </div>
              <div className="space-y-2">
                <a href="tel:+919761966485" className="block text-gray-600 hover:text-blue-500">+91-9761966485</a>
                <a href="tel:+919958838557" className="block text-gray-600 hover:text-blue-500">+91-9958838557</a>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-purple-500 rounded-lg">
                  <Mails className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Email Us</h3>
              </div>
              <a href="mailto:intothewildstays@outlook.com" className="text-gray-600 hover:text-purple-500">
                intothewildstays@outlook.com
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
            <form onSubmit={sendEmail} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Tell us what you're looking for..."
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white py-4 px-8 rounded-lg font-medium hover:opacity-90 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </motion.button>

              {success && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-green-600 font-medium"
                >
                  Message sent successfully!
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

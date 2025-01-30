import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroImage4 from "../assets/banner/b4.jpeg";

const ListYourProperties = () => {
  return (
    <section className="relative py-0  bg-gradient-to-r from-blue-100 via-cyan-100 to-emerald-100 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-slate-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-30" />

      <div className="container mx-auto px-6 lg:px-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:w-1/2 space-y-10"
          >
            <div className="space-y-6 ml-4 md:ml-0 text-center">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 bg-teal-100/50 text-teal-700 font-semibold tracking-wider rounded-full"
              >
                BECOME A HOST
              </motion.span>
              <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-[#0F2642] to-teal-600 bg-clip-text text-transparent">
                List Your Property With Us
              </h2>
            </div>
            <p className="text-xl bg-gray-100 hover:shadow-md p-4 rounded-3xl text-gray-900 leading-relaxed font-normal">
              Join our exclusive network of property owners and connect with
              thousands of travelers seeking unique stays. We provide
              comprehensive support to help you manage your property efficiently
              and maximize your rental income.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mx-10">
              {[
                {
                  title: "Global Reach",
                  desc: "Connect with travelers worldwide",
                  icon: "🌍",
                },
                {
                  title: "Expert Support",
                  desc: "Professional management assistance",
                  icon: "👥",
                },
                {
                  title: "Smart Pricing",
                  desc: "Competitive commission structure",
                  icon: "💰",
                },
                {
                  title: "Easy Management",
                  desc: "Intuitive host dashboard",
                  icon: "⚡",
                },
              ]?.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-100 from-blue-50 to-cyan-50 p-6 text-center rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-white/50 max-w-[250px] "
                >
                  <span className="text-2xl mb-3 block">{benefit.icon}</span>
                  <h3 className="font-bold text-base text-[#0F2642] mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-900 font-normal text-sm">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/contact-us"
                className="inline-flex items-center mx-10 px-10 py-5 bg-gradient-to-r from-[#0F2642] to-teal-700 text-white rounded-2xl hover:shadow-2xl transition-all duration-500 shadow-lg text-lg font-medium group mb-10"
              >
                Contact Us Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 ml-3 group-hover:translate-x-2 transition-transform duration-300"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:w-1/2"
          >
            <div className="relative mb-10">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-indigo-500 transform rotate-6 rounded-[2rem] blur-sm" />
              <motion.img
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5 }}
                src={heroImage4}
                alt="Luxury property"
                className="relative rounded-[2rem] shadow-2xl w-full h-[700px] object-cover hover:shadow-3xl transition-all duration-500"
              />
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ListYourProperties;
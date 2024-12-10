import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ListYourProperties = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-teal-50/30 to-blue-50/30 lg:py-32">
      <div className="container mx-auto px-12 lg:px-32 ">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 space-y-8"
          >
            <div className="space-y-4">
              <span className="text-teal-600 font-medium tracking-wider">BECOME A HOST</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0F2642]">
                List Your Property With Us
              </h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Join our exclusive network of property owners and connect with thousands of travelers seeking unique stays. 
              We provide comprehensive support to help you manage your property efficiently and maximize your rental income.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: 'Global Reach',
                  desc: 'Connect with travelers worldwide'
                },
                {
                  title: 'Expert Support',
                  desc: 'Professional management assistance'
                },
                {
                  title: 'Smart Pricing',
                  desc: 'Competitive commission structure'
                },
                {
                  title: 'Easy Management',
                  desc: 'Intuitive host dashboard'
                }
              ].map((benefit, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <h3 className="font-semibold text-[#0F2642] mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
            <Link
              to="/contact-us"
              className="inline-flex items-center px-8 py-4 bg-[#0F2642] text-white rounded-xl hover:bg-[#0F2642]/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
             Contact Us Now !
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 transform rotate-6 rounded-3xl" />
              <img
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Luxury property"
                className="relative rounded-3xl shadow-xl w-full h-[600px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ListYourProperties;
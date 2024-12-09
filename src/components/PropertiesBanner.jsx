import { motion } from "framer-motion";
import { Layers, ArrowRight } from "lucide-react";
import Image1 from "../assets/tourbanner.jpg";

const PropertiesBanner = () => {
  return (
    <div className="relative h-[50vh] bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden lg:px-32 ">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 "
        style={{
          backgroundImage: `url(${Image1})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          filter: "brightness(0.8)",
        }}
      />

      {/* Content Container */}
      <div className="relative z-20 min-h-[50vh] flex items-center">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6 bg-white/10 p-8 rounded-3xl backdrop-blur-md"
            >
              <div className="flex items-center gap-4">
                <Layers className="w-12 h-12 text-black" />
                <h1 className="text-4xl font-bold text-black">
                  Into The Wild Stays
                </h1>
              </div>

              <p className="text-lg text-gray-800">
                Discover extraordinary destinations that promise unforgettable
                experiences and breathtaking landscapes.
              </p>

              <motion.div whileHover={{ scale: 1.05 }}>
                <a
                  href="/properties"
                  className="inline-flex items-center px-6 py-3 
                    bg-[#0F2642] text-white 
                    rounded-full
                    hover:bg-[#0F2642]/90
                    transition-all"
                >
                  <span>Explore Properties</span>
                  <ArrowRight className="ml-2" />
                </a>
              </motion.div>
            </motion.div>

            {/* Image Section */}
            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="hidden md:block"
            >
              <div className="rounded-3xl overflow-hidden">
                <img
                  src={Image1}
                  alt="Into The Wild Stays"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesBanner;

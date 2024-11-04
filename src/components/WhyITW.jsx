import { motion } from "framer-motion"; 
import Image1 from "../assets/homehero1.png";
import Image2 from "../assets/homehero2.png";
import Image3 from "../assets/homehero.png";

const WhyITW = () => {
  const data = [
    {
      image: Image1,
      altText: "Trusted Brand",
      title: "Trusted Brand",
      description:
        "India's Favourite Homestays Awards - Eco-Friendly Homestay of the Year 2022.",
    },
    {
      image: Image2,
      altText: "Bespoke Hospitality",
      title: "Bespoke Hospitality",
      description: "Personalized service to make your stay memorable.",
    },
    {
      image: Image3,
      altText: "High quality linens & toiletries",
      title: "High-Quality Linens & Toiletries",
      description:
        "Enjoy premium quality linens and toiletries during your stay.",
    },
  ];

  return (
    <motion.div
      className="bg-gradient-to-r from-[#01173F] via-[#012258] to-[#02367D] p-8 shadow-md min-h-screen py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }} // Fade in effect for the entire section
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center sm:text-left">
        Why <span className="text-[#F77706]">Into The Wild?</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            initial={{ scale: 0.8, opacity: 0 }} // Initial state for each card
            animate={{ scale: 1, opacity: 1 }} // Final state for each card
            transition={{ duration: 0.3, delay: index * 0.1 }} // Delay for staggered animation
          >
            <img
              src={item.image}
              alt={item.altText}
              className="w-full h-40 sm:h-52 md:h-64 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-semibold mt-4 text-[#012258] px-4">
              {item.title}
            </h3>
            <p className="text-sm md:text-base text-[#012258] mt-2 px-4 pb-4">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default WhyITW;

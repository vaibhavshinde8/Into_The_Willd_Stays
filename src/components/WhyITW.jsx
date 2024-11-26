import { motion } from "framer-motion";
import Image1 from "../assets/IntotheWildStaysLogo.png";
import Image2 from "../assets/goa/goa1.jpg";
import Image4 from "../assets/pineandtails/pnt1.jpg";

const WhyITW = () => {
  const data = [
    {
      image: Image1,
      altText: "Trusted Brand",
      title: "Trusted Brand",
      description: "India's Favourite Homestays  Eco-Friendly Homestay.",
    },
    {
      image: Image2,
      altText: "Bespoke Hospitality",
      title: "Bespoke Hospitality",
      description: "Personalized service to make your stay memorable.",
    },

    {
      image: Image4,
      altText: "High quality linens & toiletries",
      title: "High-Quality Linens & Toiletries",
      description:
        "Enjoy premium quality linens and toiletries during your stay.",
    },
  ];

  return (
    <motion.div
      className=" p-8 lg:px-32 shadow-md min-h-screen py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }} // Fade in effect for the entire section
    >
      <h1 className="text-4xl text-black lg:text-5xl font-extrabold mb-6 text-center pb-12">
        Why <span className="text-[#F77706]">Into The Wilds?</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

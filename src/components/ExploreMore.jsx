import { useState } from "react";
import TourCard from "./TourCard";
import Image1 from "../assets/homehero2.png"; // Replace with actual path to the placeholder image
import Amenities from './Amenities';
import Property1 from "./property-pages/Property1";
import { FaPlus, FaMinus, FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";
import BookingPolicies from "./BookingPolicies";

const cafes = [
  {
    title: "Guatavita and Salt Cathedral",
    description:
      "A scenic tour exploring the enchanting Guatavita lake and historic Salt Cathedral.",
    image: Image1,
  },
  {
    title: "Private Bogota City Tour + Monserrate",
    description:
      "An exclusive tour covering Bogota's highlights including Monserrate mountain.",
    image: Image1,
  },
  {
    title: "La Candelaria and Museums",
    description: "Discover Bogota’s cultural gems on this private city tour.",
    image: Image1,
  },
];

const temples = [
  {
    title: "Sun Temple Tour",
    description:
      "Visit the ancient Sun Temple and learn about its historical significance.",
    image: Image1,
  },
  {
    title: "Temple of the Sacred Heart",
    description:
      "A full-day tour to explore the magnificent Sacred Heart Temple.",
    image: Image1,
  },
  {
    title: "Guided Temple Visit",
    description:
      "A comprehensive tour offering historical insights into ancient temples.",
    image: Image1,
  },
];

const adventures = [
  {
    title: "Mountain Trek Adventure",
    description:
      "A thrilling mountain trek offering breathtaking views and a challenging hike.",
    image: Image1,
  },
  {
    title: "River Rafting Expedition",
    description:
      "Experience the rush of river rafting in beautiful surroundings.",
    image: Image1,
  },
  {
    title: "Paragliding over Valleys",
    description:
      "Soar over stunning valleys in this unforgettable paragliding experience.",
    image: Image1,
  },
];

// FAQ data
const faqs = [
  { question: "Does Hotel Sundays Forever Slice of Heaven offer any business services?", answer: "Yes, we offer a variety of business services including meeting rooms, WiFi, and conference facilities." },
  { question: "Does Hotel Sundays Forever Slice of Heaven have free parking facility?", answer: "Yes, free parking is available for all guests." },
  { question: "What are the popular attractions nearby Sundays Forever Slice of Heaven Hotel?", answer: "Popular attractions include the Central Park, Riverfront Walks, and City Museum." },
  { question: "Does Hotel Sundays Forever Slice of Heaven have a restaurant?", answer: "Yes, our hotel features an on-site restaurant serving international cuisine." },
  { question: "Is bathtub available in the rooms of Hotel Sundays Forever Slice of Heaven?", answer: "Yes, our premium rooms feature bathtubs for your comfort." },
  { question: "Does Hotel Sundays Forever Slice of Heaven have any swimming pool?", answer: "Yes, we have an outdoor swimming pool." },
  { question: "What are some popular amenities available in hotel Sundays Forever Slice of Heaven?", answer: "Some amenities include free WiFi, fitness center, bar, room service, and 24-hour front desk." },
  { question: "Does Hotel Sundays Forever Slice of Heaven have any parking facility?", answer: "Yes, we provide ample parking space for all our guests." },
  { question: "Is it possible to host events?", answer: "Yes, we have event spaces suitable for weddings, parties, and corporate events." },
  { question: "Can I reserve the place for shoots?", answer: "Yes, you can book our facilities for photo and video shoots." },
  { question: "What is the kitchen equipped with?", answer: "The kitchen is equipped with basic appliances like a refrigerator, microwave, stove, and cooking utensils." },
  { question: "Will I be asked for my ID?", answer: "Yes, we require a valid ID for check-in." },
  { question: "Are unmarried couples allowed to stay here?", answer: "Yes, unmarried couples are welcome to stay at our hotel." },
];

const ExploreMore = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close the FAQ if clicked again
    } else {
      setOpenIndex(index); // Open the clicked FAQ
    }
  };

  return (
    <div className="container w-[100vw] min-h-[100vh] px-4 py-32 text-center">
      <Amenities />
      <h1 className="text-4xl font-extrabold text-[#091F3C] my-6">
        Rishikesh Is Great For
      </h1>

      {/* Cultural Cafes Section */}
      <h2 className="text-2xl font-semibold text-[#3C8D99] mb-4">
        Cultural Cafes
      </h2>
      <div className="flex flex-wrap justify-center gap-6 mb-8">
        {cafes.map((cafe, index) => (
          <TourCard key={`cafe-${index}`} {...cafe} />
        ))}
      </div>

      {/* Temples Section */}
      <h2 className="text-2xl font-semibold text-[#3C8D99] mb-4 mt-10">
        Temples
      </h2>
      <div className="flex flex-wrap justify-center gap-6 mb-8">
        {temples.map((temple, index) => (
          <TourCard key={`temple-${index}`} {...temple} />
        ))}
      </div>

      {/* Adventures Section */}
      <h2 className="text-2xl font-semibold text-[#3C8D99] mb-4 mt-10">
        Adventures
      </h2>
      <div className="flex flex-wrap justify-center gap-6 mb-8">
        {adventures.map((adventure, index) => (
          <TourCard key={`adventure-${index}`} {...adventure} />
        ))}
      </div>

      {/* FAQs Section */}
      <h2 className="text-2xl font-semibold text-[#3C8D99] mb-6 mt-10">
        Frequently Asked Questions
      </h2>
      <div className="space-y-6 mb-8 max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={`faq-${index}`}
            className="p-4 border rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out"
          >
            <div
              onClick={() => toggleFaq(index)}
              className="cursor-pointer flex items-center justify-between text-xl font-semibold text-[#091F3C] hover:text-[#3C8D99] transition-all duration-200 ease-in-out"
            >
              <span>{faq.question}</span>
              <span>
                {openIndex === index ? (
                  <FaArrowAltCircleUp size={20} />
                ) : (
                  <FaArrowAltCircleDown size={20} />
                )}
              </span>
            </div>
            <div
              className={`mt-3 transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-screen" : "max-h-0 overflow-hidden"
              }`}
            >
              {openIndex === index && (
                <p className="text-gray-600 mt-2">{faq.answer}</p>
              )}
            </div>
          </div>
        ))}
      </div>
      <BookingPolicies />
    </div>
  );
};

export default ExploreMore;

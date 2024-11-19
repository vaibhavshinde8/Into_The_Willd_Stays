import { useState } from "react";
import TourCard from "./TourCard";
import Image1 from "../assets/homehero2.png"; // Replace with actual path to the placeholder image
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";

const faqs = [
  {
    question: "Is Driver and/or House-Help accommodation available?",
    answer:
      "Driver accommodation depends upon the first come first serve basis. It is available at nominal charges. A small room or bunk bed with dinner and breakfast will be provided just nearby the property.",
  },
  {
    question: "Is parking available onsite or nearby?",
    answer:
      "Free open parking is available onsite adjacent to our cafe. There is ample car parking for 6-7 cars at the site.",
  },
  {
    question: "Is the property suitable for a day picnic?",
    answer:
      "Yes, the home has a garden/lawn area within the premises that could be used for outdoor picnic activities. Meals will be provided on-site at an additional charge per person, per meal. Note that the maximum capacity for an overnight stay is 12 people.",
  },
  {
    question: "Is the property pet-friendly?",
    answer:
      "We’re happy to welcome your furry friends at the villa! Please bring a pet bed along, as pets aren’t allowed on guest beds or any linen.",
  },
];

const bookingPolicies = [
  "Check-in: 2 PM; Check-out: 10 AM.",
  "Guests are requested to shut the windows and doors during the evening as the property may be prone to insects and bugs.",
  "Guests are not allowed to spill food or drinks over the upholstery or they will be charged at checkout.",
  "Please be mindful and keep the noise to a minimum after 10 PM.",
  "Passport, Aadhar, Driving License, and Govt. ID are accepted as ID proof(s).",
  "The property allows private parties or events.",
];

const cancellationPolicy = [
  "Cancellation 12 days prior to arrival: 15% will be charged.",
  "Cancellation 7 days prior to arrival: 50% will be charged.",
  "Cancellation less than a week: Full retention would be applicable.",
  "Credit/Debit card cancellations will be charged 5% extra.",
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
      <h1 className="text-4xl font-extrabold text-[#091F3C] my-6">
        Pine Tales: A 5BHK Valley View Private Villa
      </h1>
      <p className="text-lg font-medium text-gray-600 mb-8">
        Nestled near the serene Tehri Dam in Uttarakhand, Pine Tales Villa is a
        private mountain retreat, perfect for families and friends. Offering
        breathtaking valley views, our villa is designed for those seeking a
        cozy escape in nature.
      </p>
      <div className="text-left space-y-6 mb-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-[#3C8D99]">Property Details</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Number of Rooms: 5</li>
          <li>Guest Capacity: 2 persons per room</li>
          <li>Maximum Capacity: 12 persons</li>
          <li>Price Per Room: ₹3500</li>
          <li>Total Price for 12 Persons: ₹13,500</li>
          <li>Stay Type: 5BHK Valley View Private Villa</li>
          <li>Location: 8CWX+WR2, New Tehri, Nawagarh, Uttarakhand 249001</li>
          <li>Address: Pine Tales, Sursingdhar New Tehri</li>
        </ul>
      </div>

      <div className="text-left space-y-6 mb-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-[#3C8D99]">Amenities</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Free Wi-Fi</li>
          <li>24-hour Front Desk</li>
          <li>Room Service</li>
          <li>Barbecue Facilities</li>
          <li>Private Garden/Lawn Area</li>
        </ul>
      </div>

      {/* FAQs Section */}
      <h2 className="text-2xl font-bold text-[#3C8D99] mb-6">FAQs</h2>
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

      {/* Booking Policies Section */}
      <h2 className="text-2xl font-bold text-[#3C8D99] mb-4">
        Booking Policies
      </h2>
      <ul className="list-disc ml-6 mb-8 space-y-2 text-left max-w-3xl mx-auto">
        {bookingPolicies.map((policy, index) => (
          <li key={`policy-${index}`}>{policy}</li>
        ))}
      </ul>

      {/* Cancellation Policy Section */}
      <h2 className="text-2xl font-bold text-[#3C8D99] mb-4">
        Cancellation and Refund Policy
      </h2>
      <ul className="list-disc ml-6 space-y-2 text-left max-w-3xl mx-auto">
        {cancellationPolicy.map((policy, index) => (
          <li key={`cancel-${index}`}>{policy}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExploreMore;

import { useState } from "react";
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";
import img1 from "../assets/Sun and Sand Goa/Property Photo and videos/50PM.jpeg";
import img2 from "../assets/Sun and Sand Goa/Property Photo and videos/51PM.jpeg";
import img3 from "../assets/Sun and Sand Goa/Property Photo and videos/53PM.jpeg";
import img4 from "../assets/Sun and Sand Goa/Property Photo and videos/52PM.jpeg";

const galleryImages = [img1, img2, img3, img4];

const faqs = [
  {
    question:
      "Can I book only one or two rooms, or do I need to book the entire Home?",
    answer:
      "No, you cannot book just one room. You would need to book the entire cottage.",
  },
  {
    question: "Is parking available onsite or nearby?",
    answer: "Free parking is available onsite for up to 2 cars.",
  },
  {
    question: "Is the Property suitable for a day picnic?",
    answer:
      "Yes, the home has a garden/lawn area within the premises that could be used for outdoor picnic activities. Meals will be provided on site at an additional charge (per person, per meal). Please note that the maximum capacity for an overnight stay is 4 people.",
  },
  {
    question: "Is property pet friendly?",
    answer:
      "We’re happy to welcome your furry friends at the Villa! Please bring a pet bed along, as pets aren’t allowed on guest beds or any linen. Enjoy a comfortable stay for you and your pet in the heart of nature!",
  },
];

const bookingPolicies = [
  "Check in: 1 PM check out: 11 AM",
  "Guests are requested to shut the windows and doors during the evening as the property may be prone to insects and bugs.",
  "Guests are not allowed to spill food or drinks over the upholstery or they will be charged at checkout.",
  "Please be mindful and keep the noise to a minimum after 10 PM.",
  "Passport, Aadhar, Driving License, and Govt. ID are accepted as ID proof(s).",
  "The property allows private parties or events.",
];

const refundAndReschedulingPolicy = [
  "Refunds would be processed in 14 working days.",
  "Booking can be rescheduled till 15 days prior to arrival date depending upon availability.",
  "₹1000 plus applicable taxes will be charged for rescheduling.",
  "Rescheduling can only be done for the same property.",
  "If the tariff on the rescheduled date is higher than the initial booking date, the difference is payable.",
];

const thingsToKnow = [
  "The full payment must be made for your booking to be confirmed.",
  "Only guests accounted for are allowed at the property.",
  "Any damage to the property caused by guests will be charged as per the actual cost of repair or replacement.",
  "Any commercial activity is strictly prohibited.",
  "Guests are requested to treat the home with care.",
  "Consider this as a homestay in the mountains, not a typical hotel stay.",
];

const cancellationPolicy = [
  "Cancellation 12 days prior to arrival date: 15% will be charged.",
  "Cancellation 07 days prior to arrival date: 50% will be charged.",
  "Cancellation less than a week: Full retention would be applicable.",
  "Credit/Debit card cancellations will be charged 5% extra.",
  "Cancellation policy for long weekends and special days: Cancellation 07 days prior to arrival date: 50% will be charged. Cancellation less than a week: Full retention would be applicable.",
];

const amenities = [
  "Essentials",
  "Towels and toiletries",
  "Add-on experience",
  "Private entrance",
  "Serene location.",
  "Pet friendly",
  "In-house chef/caretaker ",
  "Cozy linens",
  "Bluetooth sound system ",
  "Wi-Fi ",
  "Private cottage ",
  "Garden",
  "Breakfast",
];

const ExploreMoreSAS = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="container w-full min-h-screen px-4 py-16 bg-gray-50 text-center">
      <h1 className="text-5xl font-bold text-[#091F3C] my-6">
        Sun and Sand Villa
      </h1>
      <p className="text-lg font-medium text-gray-600 mb-12 max-w-4xl mx-auto">
        Escape to luxury at this beautiful 4BHK private pool villa, offering
        stunning sea views in Porvorim, North Goa. This villa is perfect for a
        serene getaway with family and friends, combining privacy with elegance.
        Relax by the pool, enjoy the picturesque views, and indulge in the
        ultimate comfort.
      </p>
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-[#3C8D99] mb-6">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="h-48 bg-cover bg-center rounded-lg shadow-lg"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ))}
        </div>
      </div>

      {/* Property Details Section */}
      <div className="text-left space-y-6 mb-12 max-w-3xl mx-auto bg-white shadow-lg p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-[#3C8D99]">Property Details</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Stay Type: 4BHK Private Pool, Seaview Villa</li>
          <li>Max Capacity: 10 persons</li>
          <li>Price: ₹11,000 - ₹16,000 per night</li>
          <li>
            Location:{" "}
            <a
              href="https://www.google.com/maps/place/Apartment+F102/@15.5100589,73.7715592,17z/data=!4m9!3m8!1s0x3bbfc1ba99de5c45:0xe691091bef6ce833!5m2!4m1!1i2!8m2!3d15.5100537!4d73.7741341!16s%2Fg%2F11sfpgzts2?entry=ttu&amp;g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              View on Google Maps
            </a>
          </li>
          <li>Address: Sun N Sand, F102 Monarch Palm, Candolim, Goa 403519</li>
        </ul>
      </div>

      {/* Things to Do Section */}
      <div className="text-left space-y-6 mb-12 max-w-3xl mx-auto bg-white shadow-lg p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-[#3C8D99]">
          Things to Do at the Villa
        </h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Enjoy the private swimming pool with stunning sea views.</li>
          <li>Relax in the spacious garden/lawn area.</li>
          <li>Host a private event or gathering by the poolside.</li>
          <li>Explore the nearby Candolim beach and local markets.</li>
          <li>
            Take a scenic drive to explore Goa’s vibrant culture and heritage.
          </li>
        </ul>
      </div>

      {/* FAQs Section */}
      <h2 className="text-3xl font-bold text-[#3C8D99] mb-6">FAQs</h2>
      <div className="space-y-6 mb-12 max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={`faq-${index}`}
            className="p-4 border rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out bg-white"
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
      <h2 className="text-3xl font-bold text-[#3C8D99] mb-6">
        Booking Policies
      </h2>
      <ul className="list-disc ml-6 mb-12 space-y-2 text-left max-w-3xl mx-auto bg-white shadow-lg p-6 rounded-lg">
        {bookingPolicies.map((policy, index) => (
          <li key={`policy-${index}`}>{policy}</li>
        ))}
      </ul>

      {/* Refund & Rescheduling Policy Section */}
      <h2 className="text-3xl font-bold text-[#3C8D99] mb-6">
        Refund & Rescheduling Policy
      </h2>
      <ul className="list-disc ml-6 mb-12 space-y-2 text-left max-w-3xl mx-auto bg-white shadow-lg p-6 rounded-lg">
        {refundAndReschedulingPolicy.map((policy, index) => (
          <li key={`refund-policy-${index}`}>{policy}</li>
        ))}
      </ul>

      {/* Cancellation Policy Section */}
      <h2 className="text-3xl font-bold text-[#3C8D99] mb-6">
        Cancellation Policy
      </h2>
      <ul className="list-disc ml-6 mb-12 space-y-2 text-left max-w-3xl mx-auto bg-white shadow-lg p-6 rounded-lg">
        {cancellationPolicy.map((policy, index) => (
          <li key={`cancellation-policy-${index}`}>{policy}</li>
        ))}
      </ul>

      {/* Things You Need to Know Section */}
      <h2 className="text-3xl font-bold text-[#3C8D99] mb-6">
        Things You Need to Know
      </h2>
      <ul className="list-disc ml-6 mb-12 space-y-2 text-left max-w-3xl mx-auto bg-white shadow-lg p-6 rounded-lg">
        {thingsToKnow.map((item, index) => (
          <li key={`thing-to-know-${index}`}>{item}</li>
        ))}
      </ul>

      {/* Amenities Section */}
      <h2 className="text-3xl font-bold text-[#3C8D99] mb-6">Amenities</h2>
      <ul className="list-disc ml-6 mb-12 space-y-2 text-left max-w-3xl mx-auto bg-white shadow-lg p-6 rounded-lg">
        {amenities.map((amenity, index) => (
          <li key={`amenity-${index}`}>{amenity}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExploreMoreSAS;

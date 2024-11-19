import { useState } from "react";
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
      "Free parking is available onsite. There is ample car parking for 4-5 cars at the site.",
  },
  {
    question: "Is the Property suitable for a day picnic?",
    answer:
      "Yes, the home has a garden/lawn area within the premises that could be used for outdoor picnic activities. Meals will be provided on-site at an additional charge (per person, per meal).",
  },
  {
    question: "Is property pet friendly?",
    answer:
      "We’re happy to welcome your furry friends at Me:nam Homestay! Please bring a pet bed along, as pets aren’t allowed on guest beds or any linen. Enjoy a comfortable stay for you and your pet in the heart of nature!",
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
  "Cancellation 12 days prior to arrival date: 15% will be charged.",
  "Cancellation 07 days prior to arrival date: 50% will be charged.",
  "Cancellation less than a week: Full retention would be applicable.",
  "Credit/Debit card cancellations will be charged 5% extra.",
  "Cancellation policy for long weekends and special days: Cancellation 07 days prior to arrival date: 50% will be charged. Cancellation less than a week: Full retention would be applicable.",
];

const amenities = [
  "House Rules",
  "Full payment must be made for your booking to be confirmed.",
  "Only guests accounted for are allowed at the property.",
  "Any damage to the property caused by guests will be charged as per the actual cost of repair or replacement.",
  "Commercial activity is strictly prohibited.",
  "Guests are requested to treat the home with care.",
  "Consider this as a homestay in the mountains, not a typical hotel stay.",
];
const galleryImages = [
  "../assets/image1.jpg", // Replace with actual paths to your images
  "../assets/image2.jpg",
  "../assets/image3.jpg",
  "../assets/image4.jpg",
];

const ExploreMoreMNM = () => {
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
        Me:nam Homestay (Majuli)
      </h1>
      <p className="text-lg font-medium text-gray-600 mb-12 max-w-4xl mx-auto">
        Welcome to Me:nam Homestay, nestled on Majuli Island, the world’s
        largest river island and a cultural treasure in Assam. Run by the owner
        herself, this homestay offers a warm, local touch, giving guests an
        unforgettable experience. From meeting locals to exploring traditional
        crafts and customs, Me:nam Homestay is your gateway to the authentic
        heart of Majuli—an island rich in natural beauty, vibrant festivals, and
        deep-rooted traditions.
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
          <li>Stay Type: HomeStay</li>
          <li>Max Capacity: 30 persons</li>
          <li>Price: ₹3500 per night</li>
          <li>
            Location:{" "}
            <a
              href="https://www.google.com/maps/place/Me:nam+Homestay+(Majuli)/@27.0602567,94.2634877,19z/data=!4m6!3m5!1s0x3746d37af305cd35:0xdcb446aaa197a5d8!8m2!3d27.0602567!4d94.2639478!16s%2Fg%2F11k4rvzf23?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              View on Google Maps
            </a>
          </li>
          <li>
            Address: Jengrai Chapori Rd, Kesaikhua gaon, Moghua Chuk, Assam
            785105
          </li>
        </ul>
      </div>

      {/* Things to Do Section */}
      <div className="text-left space-y-6 mb-12 max-w-3xl mx-auto bg-white shadow-lg p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-[#3C8D99]">
          Things to Do at Me:nam Homestay
        </h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Boating: Glide along the serene Brahmaputra River.</li>
          <li>
            Mask Making: Discover Majuli’s traditional art of handmade masks.
          </li>
          <li>
            Pottery Village: Visit local artisans crafting pottery by hand.
          </li>
          <li>Apong Making: Learn to make Apong, Assam’s unique rice beer.</li>
          <li>
            Weaving: Watch intricate weaving techniques by local craftsmen.
          </li>
          <li>
            Village Walk: Stroll through picturesque villages, meeting locals
            and experiencing daily life.
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

      {/* Cancellation Policy Section */}
      <h2 className="text-3xl font-bold text-[#3C8D99] mb-6">
        Cancellation and Refund Policy
      </h2>
      <ul className="list-disc ml-6 space-y-2 text-left max-w-3xl mx-auto bg-white shadow-lg p-6 rounded-lg">
        {cancellationPolicy.map((policy, index) => (
          <li key={`cancel-${index}`}>{policy}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExploreMoreMNM;

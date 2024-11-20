import React, { useState } from "react";
import valleyOfFlowersData from "./Valley_of_Flowers.json"; // Assuming the JSON file is in the same directory

const ValleyOfFlowers = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { trip_name, valley_of_flowers } = valleyOfFlowersData;
  const {
    title,
    subtitle,
    contact_number,
    content,
    complete_guide,
    location,
    how_to_get_there,
    trip_highlights,
    itinerary,
    basic_information,
    best_time_to_visit,
    things_to_carry,
    inclusions,
    exclusions,
    payment_methods,
  } = valley_of_flowers;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="valley-of-flowers-tour">
      <div className="container mx-auto px-4 py-8">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-4">{trip_name}</h2>
        <h3 className="text-xl text-center text-gray-600 italic">{subtitle}</h3>

        {/* Contact */}
        <p className="text-center text-gray-800 mt-2">
          <strong>Contact:</strong> {contact_number}
        </p>

        {/* Tour Card */}
        <div className="mt-8 bg-white shadow-md rounded-lg p-6">
          {/* Basic Info */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <button
              onClick={toggleExpand}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              {isExpanded ? "▲ Collapse Details" : "▼ More Details"}
            </button>
          </div>

          {/* Expandable Content */}
          {isExpanded && (
            <div className="tour-details mt-4 space-y-6">
              {/* Highlights */}
              <div>
                <h4 className="text-xl font-semibold mb-2">Trip Highlights</h4>
                <ul className="list-disc ml-6 text-gray-800">
                  {trip_highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>

              {/* Itinerary */}
              <div>
                <h4 className="text-xl font-semibold mb-2">Travel Itinerary</h4>
                <ul className="list-none text-gray-800">
                  {itinerary.map((day, index) => (
                    <li key={index} className="mb-2">
                      <strong>{day.day}:</strong> {day.description}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Best Time to Visit */}
              <div>
                <h4 className="text-xl font-semibold mb-2">
                  Best Time to Visit
                </h4>
                <ul className="list-disc ml-6 text-gray-800">
                  {Object.keys(best_time_to_visit).map((month, index) => (
                    <li key={index}>
                      <strong>
                        {month.charAt(0).toUpperCase() + month.slice(1)}:
                      </strong>{" "}
                      {best_time_to_visit[month]}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Things to Carry */}
              <div>
                <h4 className="text-xl font-semibold mb-2">Things to Carry</h4>
                <ul className="list-disc ml-6 text-gray-800">
                  {things_to_carry.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Inclusions */}
              <div>
                <h4 className="text-xl font-semibold mb-2">Inclusions</h4>
                <ul className="list-disc ml-6 text-gray-800">
                  {inclusions.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              <div>
                <h4 className="text-xl font-semibold mb-2">Exclusions</h4>
                <ul className="list-disc ml-6 text-gray-800">
                  {exclusions.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Payment Methods */}
              <div>
                <h4 className="text-xl font-semibold mb-2">Payment Methods</h4>
                <p className="text-gray-800">
                  <strong>Price Per Person:</strong>{" "}
                  {payment_methods.price_per_person}
                </p>
                <p className="text-gray-800">
                  <strong>Account Name:</strong> {payment_methods.account_name}
                </p>
                <p className="text-gray-800">
                  <strong>Account Number:</strong>{" "}
                  {payment_methods.account_number}
                </p>
                <p className="text-gray-800">
                  <strong>IFSC Code:</strong> {payment_methods.ifsc_code}
                </p>
                <p className="text-gray-800">
                  <strong>WhatsApp:</strong> {payment_methods.whatsapp_number}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ValleyOfFlowers;

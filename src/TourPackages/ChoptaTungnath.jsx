import  { useState } from "react";
import choptaTungnathData from "./Chopta_Tungnath.json"; // Assuming the JSON file is in the same directory

const ChoptaTungnath = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const {
    trip_name,
    contact,
    short_itinerary,
    detailed_itinerary,
    inclusions,
    exclusions,
    prices,
    booking_process,
  } = choptaTungnathData;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className=" p-6 ">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-6">
          {trip_name} Package
        </h2>

        {/* Tour Card */}
        <div className="tour-card bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Basic Info */}
          <div className="tour-card-header bg-blue-600 text-white p-6">
            <h3 className="text-xl font-semibold">{trip_name}</h3>
            <p className="mt-2 ">
              <strong>Contact:</strong> {contact}
            </p>
            <button
              onClick={toggleExpand}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
            >
              {isExpanded ? "▲ Collapse" : "▼ More Details"}
            </button>
          </div>

          {/* Expandable Content */}
          {isExpanded && (
            <div className="tour-card-body p-6">
              {/* Short Itinerary */}
              <div className="short-itinerary mb-6">
                <h4 className="text-xl font-semibold text-indigo-700">
                  Short Itinerary:
                </h4>
                <ul className="list-disc pl-6 mt-2">
                  {Object.keys(short_itinerary).map((key, index) => (
                    <li key={index} className="text-gray-700">
                      <strong>{key.replace("_", " ")}:</strong>{" "}
                      {short_itinerary[key]}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Detailed Itinerary */}
              <div className="detailed-itinerary mb-6">
                <h4 className="text-xl font-semibold text-indigo-700">
                  Detailed Itinerary:
                </h4>
                {Object.keys(detailed_itinerary).map((key, index) => (
                  <div key={index} className="mb-4">
                    <h5 className="text-lg font-semibold text-gray-800">
                      {detailed_itinerary[key].title}
                    </h5>
                    <p className="text-gray-700 mt-1">
                      {detailed_itinerary[key].description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Inclusions */}
              <div className="inclusions mb-6">
                <h4 className="text-xl font-semibold text-indigo-700">
                  Inclusions:
                </h4>
                <ul className="list-disc pl-6 mt-2">
                  {inclusions.map((item, index) => (
                    <li key={index} className="text-gray-700">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              <div className="exclusions mb-6">
                <h4 className="text-xl font-semibold text-indigo-700">
                  Exclusions:
                </h4>
                <ul className="list-disc pl-6 mt-2">
                  {exclusions.map((item, index) => (
                    <li key={index} className="text-gray-700">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Prices */}
              <div className="prices mb-6">
                <h4 className="text-xl font-semibold text-indigo-700">
                  Prices:
                </h4>
                <ul className="mt-2">
                  {Object.keys(prices).map((type, index) => (
                    <li key={index} className="text-gray-700">
                      <strong>{type.replace("_", " ")}:</strong>{" "}
                      {prices[type].price_per_person} <br />
                      <strong>GST:</strong> {prices[type].gst}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Booking Process */}
              <div className="booking-process mb-6">
                <h4 className="text-xl font-semibold text-indigo-700">
                  Booking Process:
                </h4>
                <p className="text-gray-700 mt-2">
                  <strong>Reservation Fee:</strong>{" "}
                  {booking_process.reservation_fee}
                </p>
                <p className="text-gray-700 mt-2">
                  <strong>Balance Payment:</strong>{" "}
                  {booking_process.balance_payment}
                </p>

                <h5 className="text-lg font-semibold text-gray-800 mt-4">
                  Payment Methods:
                </h5>
                <ul className="mt-2">
                  <li className="text-gray-700">
                    <strong>UPI Transfer:</strong>{" "}
                    {booking_process.payment_methods.upi_transfer}
                  </li>
                  <li className="text-gray-700">
                    <strong>Account Details:</strong>
                    <ul className="list-inside list-disc mt-2">
                      <li className="text-gray-700">
                        <strong>Account Name:</strong>{" "}
                        {
                          booking_process.payment_methods.account_details
                            .account_name
                        }
                      </li>
                      <li className="text-gray-700">
                        <strong>Account Number:</strong>{" "}
                        {
                          booking_process.payment_methods.account_details
                            .account_number
                        }
                      </li>
                      <li className="text-gray-700">
                        <strong>IFSC:</strong>{" "}
                        {booking_process.payment_methods.account_details.ifsc}
                      </li>
                    </ul>
                  </li>
                  <li className="text-gray-700">
                    <strong>Contact Number:</strong>{" "}
                    {booking_process.payment_methods.contact_number}
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChoptaTungnath;

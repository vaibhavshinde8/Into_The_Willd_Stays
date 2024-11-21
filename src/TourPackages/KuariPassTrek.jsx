import  { useState } from "react";
import kauriPassData from "./kuari_pass_trek.json"; // Assuming the JSON file is in the same directory

const KauriPassTrek = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const {
    trip_name,
    contact,
    duration,
    itinerary,
    inclusions,
    exclusions,
    price_per_person,
    payment_methods,
  } = kauriPassData;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className=" p-6 ">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-6">{trip_name}</h2>

        {/* Tour Card */}
        <div className="tour-card bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Basic Info */}
          <div className="tour-card-header bg-blue-600 text-white p-6">
            <h3 className="text-xl font-semibold mb-2">{trip_name}</h3>
            <p>
              <strong>Contact:</strong> {contact}
            </p>
            <p>
              <strong>Duration:</strong> {duration}
            </p>
            <button
              onClick={toggleExpand}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
            >
              {isExpanded ? "▲ Collapse Details" : "▼ More Details"}
            </button>
          </div>

          {/* Expandable Content */}
          {isExpanded && (
            <div>
              {/* Itinerary */}
              <div className="mb-4">
                <h4 className="text-lg font-bold mb-2">Itinerary:</h4>
                {Object.keys(itinerary).map((day, index) => (
                  <div key={index} className="mb-2">
                    <h5 className="font-semibold">{itinerary[day].title}</h5>
                    <p>
                      <strong>Distance:</strong>{" "}
                      {itinerary[day].trek_distance || "N/A"}
                    </p>
                    <p>
                      <strong>Duration:</strong>{" "}
                      {itinerary[day].duration || "N/A"}
                    </p>
                    <p>
                      <strong>Elevation:</strong>{" "}
                      {itinerary[day].elevation || "N/A"}
                    </p>
                    <p>{itinerary[day].description}</p>
                  </div>
                ))}
              </div>

              {/* Inclusions */}
              <div className="mb-4">
                <h4 className="text-lg font-bold mb-2">Inclusions:</h4>
                <ul className="list-disc pl-6">
                  {inclusions.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              <div className="mb-4">
                <h4 className="text-lg font-bold mb-2">Exclusions:</h4>
                <ul className="list-disc pl-6">
                  {exclusions.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Prices */}
              <div className="mb-4">
                <h4 className="text-lg font-bold mb-2">Price:</h4>
                <p>
                  <strong>Price Per Person:</strong> {price_per_person}
                </p>
              </div>

              {/* Payment Methods */}
              <div className="mb-4">
                <h4 className="text-lg font-bold mb-2">Payment Methods:</h4>
                <ul>
                  <li>
                    <strong>UPI Transfer:</strong>{" "}
                    {payment_methods.upi_transfer}
                  </li>
                  <li>
                    <strong>Bank Transfer:</strong>
                    <ul className="list-disc pl-6">
                      <li>
                        <strong>Account Name:</strong>{" "}
                        {payment_methods.bank_transfer.account_name}
                      </li>
                      <li>
                        <strong>Account Number:</strong>{" "}
                        {payment_methods.bank_transfer.account_number}
                      </li>
                      <li>
                        <strong>IFSC:</strong>{" "}
                        {payment_methods.bank_transfer.ifsc_code}
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>WhatsApp Contact:</strong>{" "}
                    {payment_methods.whatsapp_contact}
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

export default KauriPassTrek;

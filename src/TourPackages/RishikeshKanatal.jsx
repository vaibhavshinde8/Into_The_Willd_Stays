import React, { useState } from "react";
import rishikeshKanatalData from "./rishikeshkanatal.json"; // Assuming the JSON file is in the same directory

const RishikeshKanatal = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { trip_name, duration, price, itinerary, policies } =
    rishikeshKanatalData;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="rishikesh-kanatal-tour py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Title and Duration */}
        <h2 className="text-2xl font-bold text-center mb-4">
          {trip_name} Package
        </h2>
        <p className="text-lg text-center text-gray-600 mb-6">{duration}</p>

        {/* Tour Card */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          {/* Price Breakdown */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Price Details</h3>
            <p>
              <strong>Total Per Person:</strong> ₹{price.total_per_person}
              {price.excluding_transport && <span> (Excluding Transport)</span>}
            </p>
            <ul className="list-disc list-inside mt-2">
              {Object.keys(price.breakdown).map((location, index) => (
                <li key={index}>
                  <strong>
                    {location.charAt(0).toUpperCase() + location.slice(1)}:
                  </strong>{" "}
                  ₹{price.breakdown[location].total}
                  {price.breakdown[location].camping && (
                    <>
                      <br />
                      <strong>Camping:</strong> ₹
                      {price.breakdown[location].camping}
                    </>
                  )}
                  {price.breakdown[location].rafting && (
                    <>
                      <br />
                      <strong>Rafting:</strong> ₹
                      {price.breakdown[location].rafting}
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Expandable Content */}
          <button
            onClick={toggleExpand}
            className="block w-full text-center bg-blue-500 text-white py-2 px-4 rounded-lg mb-4"
          >
            {isExpanded ? "Collapse Details ▲" : "More Details ▼"}
          </button>
          {isExpanded && (
            <div className="details">
              {/* Itinerary */}
              <div className="itinerary mb-6">
                <h4 className="text-xl font-semibold">Itinerary</h4>
                {itinerary.map((day, index) => (
                  <div key={index} className="mt-4">
                    <h5 className="text-lg font-bold">
                      {day.day} - {day.location}
                    </h5>
                    {day.date && (
                      <p>
                        <strong>Date:</strong> {day.date}
                      </p>
                    )}
                    {day.stay && (
                      <p>
                        <strong>Stay:</strong> {day.stay.type} (Sharing:{" "}
                        {day.stay.sharing})
                        {day.stay.features && (
                          <ul className="list-disc list-inside ml-4">
                            {day.stay.features.map((feature, idx) => (
                              <li key={idx}>{feature}</li>
                            ))}
                          </ul>
                        )}
                      </p>
                    )}
                    {day.activities && (
                      <div className="mt-2">
                        <strong>Activities:</strong>
                        <ul className="list-disc list-inside">
                          {day.activities.map((activity, idx) => (
                            <li key={idx}>
                              {activity.name} ({activity.distance} at{" "}
                              {activity.location})
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {day.food && (
                      <div className="mt-2">
                        <strong>Food:</strong>
                        <ul className="list-disc list-inside">
                          {day.food.included_meals.map((meal, idx) => (
                            <li key={idx}>{meal}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {day.addons && day.addons.music && (
                      <p>
                        <strong>Music:</strong> Allowed until{" "}
                        {day.addons.music.allowed_until}.
                        {day.addons.music.note && (
                          <span> {day.addons.music.note}</span>
                        )}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Policies */}
              <div className="policies">
                <h4 className="text-xl font-semibold">Policies</h4>
                <ul className="list-disc list-inside">
                  <li>{policies.music_restrictions}</li>
                  <li>Heater Charge: ₹{policies.heater_charge}</li>
                  <li>{policies.damage_policy}</li>
                  <li>{policies.GST}</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RishikeshKanatal;

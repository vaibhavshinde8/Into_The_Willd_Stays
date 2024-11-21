import { useState } from "react";
import rishikeshKanatalData from "./rishikeshkanatal.json";

const RishikeshKanatal = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { trip_name, duration, price, itinerary, policies } =
    rishikeshKanatalData;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className=" p-6 ">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-6">{trip_name}</h2>

        <div className="tour-card bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Header Section */}
          <div className="tour-card-header bg-blue-600 text-white p-6">
            <h2 className="text-3xl font-bold mb-2 ">{trip_name}</h2>
            <p className="text-lg  font-medium">{duration}</p>
          </div>
          <div className="bg-blue-600 p-4">
            <button
              onClick={toggleExpand}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
            >
              {isExpanded ? "Collapse Details ▲" : "More Details ▼"}
            </button>
          </div>
          {/* Expandable Content */}
          <div className="p-auto ">
            {isExpanded && (
              <div className="mt-6">
                {/* Itinerary Section */}
                <div className="mb-6">
                  {/* Price Section */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">
                      Price Details
                    </h3>
                    <p className="mb-2 text-gray-600">
                      <strong>Total Per Person:</strong> ₹
                      {price.total_per_person}
                      {price.excluding_transport && (
                        <span> (Excluding Transport)</span>
                      )}
                    </p>
                    <ul className="list-disc list-inside text-gray-600">
                      {Object.keys(price.breakdown).map((location, index) => (
                        <li key={index}>
                          <strong>
                            {location.charAt(0).toUpperCase() +
                              location.slice(1)}
                            :
                          </strong>{" "}
                          ₹{price.breakdown[location].total}
                          {price.breakdown[location].camping && (
                            <>
                              <br />
                              <span className="pl-4">
                                Camping: ₹{price.breakdown[location].camping}
                              </span>
                            </>
                          )}
                          {price.breakdown[location].rafting && (
                            <>
                              <br />
                              <span className="pl-4">
                                Rafting: ₹{price.breakdown[location].rafting}
                              </span>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <h4 className="text-xl font-semibold text-gray-700 mb-4">
                    Itinerary
                  </h4>

                  {itinerary.map((day, index) => (
                    <div key={index} className="mb-4">
                      <h5 className="text-lg font-bold text-gray-800">
                        {day.day} - {day.location}
                      </h5>
                      {day.date && (
                        <p className="text-gray-600">
                          <strong>Date:</strong> {day.date}
                        </p>
                      )}
                      {day.stay && (
                        <p className="text-gray-600">
                          <strong>Stay:</strong> {day.stay.type} (Sharing:{" "}
                          {day.stay.sharing})
                          {day.stay.features && (
                            <ul className="list-disc list-inside ml-6 mt-2">
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
                          <ul className="list-disc list-inside ml-6">
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
                          <ul className="list-disc list-inside ml-6">
                            {day.food.included_meals.map((meal, idx) => (
                              <li key={idx}>{meal}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Policies Section */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-700 mb-4">
                    Policies
                  </h4>
                  <ul className="list-disc list-inside text-gray-600">
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
      </div>
    </div>
  );
};

export default RishikeshKanatal;

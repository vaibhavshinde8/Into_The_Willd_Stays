import React, { useState } from "react";
import spitiValleyData from "./Spiti_Valley.json"; // Assuming the JSON file is in the same directory

const SpitiValley = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const {
    trip_name,
    duration,
    contact,
    itinerary,
    trip_highlights,
    inclusions,
    exclusions,
  } = spitiValleyData;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="spiti-valley-tour py-10">
      <div className="container mx-auto px-4">
        {/* Title and Contact */}
        <h2 className="text-3xl font-bold text-center mb-4">{trip_name}</h2>
        <p className="text-center text-gray-600 mb-6">
          <strong>Duration:</strong> {duration} &nbsp;|&nbsp;{" "}
          <strong>Contact:</strong> {contact}
        </p>

        {/* Expandable Tour Details */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          {/* Expand/Collapse Button */}
          <button
            onClick={toggleExpand}
            className="text-blue-500 underline mb-4"
          >
            {isExpanded ? "▲ Collapse Details" : "▼ View Full Details"}
          </button>

          {/* Details */}
          {isExpanded && (
            <div>
              {/* Itinerary */}
              <div className="itinerary mb-6">
                <h3 className="text-xl font-semibold mb-2">Itinerary:</h3>
                <ul className="list-disc pl-5">
                  {itinerary.map((day, index) => (
                    <li key={index} className="mb-4">
                      <strong>{day.day}:</strong> {day.route}
                      <p className="text-sm text-gray-700 mt-1">
                        {day.details && (
                          <>
                            <strong>Distance:</strong> {day.details.distance} |{" "}
                            <strong>Duration:</strong> {day.details.duration}{" "}
                            <br />
                            <strong>Description:</strong>{" "}
                            {day.details.description} <br />
                            <strong>Stay:</strong> {day.details.stay}
                          </>
                        )}
                        {day.activities && (
                          <>
                            <strong>Activities:</strong>{" "}
                            {day.activities.join(", ")}
                          </>
                        )}
                        {day.stops && (
                          <>
                            <strong>Stops:</strong> {day.stops.join(", ")}
                          </>
                        )}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Highlights */}
              <div className="trip-highlights mb-6">
                <h3 className="text-xl font-semibold mb-2">Trip Highlights:</h3>
                <ul className="list-disc pl-5">
                  {trip_highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>

              {/* Inclusions */}
              <div className="inclusions mb-6">
                <h3 className="text-xl font-semibold mb-2">Inclusions:</h3>
                <ul className="list-disc pl-5">
                  {inclusions.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              <div className="exclusions">
                <h3 className="text-xl font-semibold mb-2">Exclusions:</h3>
                <ul className="list-disc pl-5">
                  {exclusions.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SpitiValley;

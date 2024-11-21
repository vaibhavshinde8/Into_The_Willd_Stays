// ChardhamTour.js
import { useState } from "react";
import chardhamData from "./chardham.json"; // Assuming the JSON file is in the same directory

const ChardhamTour = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { packageDetails, itinerary, inclusions, exclusions, importantNotes } =
    chardhamData;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div  className=" p-6 ">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-6">
          Chardham Yatra Package
        </h2>

        {/* Tour Card */}
        <div className="tour-card bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Basic Info */}
          <div className="tour-card-header bg-blue-600 text-white p-6">
            <h3 className="text-2xl font-semibold">{packageDetails.name}</h3>
            <p className="mt-2">
              <strong>Contact:</strong> {packageDetails.contactNumber}
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
            <div className="tour-card-body p-6 bg-gray-50">
              <div className="children-policy mb-4">
                <h4 className="text-xl font-semibold text-blue-600">
                  Children Policy:
                </h4>
                <ul className="list-disc pl-5">
                  <li>
                    <strong>Below 5 Years:</strong>{" "}
                    {packageDetails.childrenPolicy.below5Years}
                  </li>
                  <li>
                    <strong>5 to 10 Years:</strong>{" "}
                    {packageDetails.childrenPolicy["5to10Years"]}
                  </li>
                  <li>
                    <strong>Above 10 Years:</strong>{" "}
                    {packageDetails.childrenPolicy["above10Years"]}
                  </li>
                  <li>
                    <strong>Age Proof Required:</strong>{" "}
                    {packageDetails.childrenPolicy.ageProofRequired}
                  </li>
                </ul>
              </div>

              <h4 className="text-xl font-semibold text-blue-600 mb-2">
                Trip Cost:
              </h4>
              <p>
                <strong>Per Person (Deluxe with KIA):</strong>{" "}
                {packageDetails.tripCost.deluxe.perPaxWithKIA}
              </p>
              <p>
                <strong>Per Person (Deluxe with MAP):</strong>{" "}
                {packageDetails.tripCost.deluxe.perPaxWithMAP}
              </p>

              {/* Itinerary */}
              <div className="itinerary mb-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">
                  Itinerary
                </h3>
                <ul>
                  {itinerary.map((day, index) => (
                    <li key={index} className="mb-6">
                      <h4 className="text-lg font-semibold">
                        Day {day.day}: {day.from} to {day.to}
                      </h4>
                      <p>
                        <strong>Distance:</strong> {day.distance} -{" "}
                        <strong>Duration:</strong> {day.duration}
                      </p>
                      <p>
                        <strong>Activities:</strong> {day.activities}
                      </p>
                      {day.sightseeing && (
                        <div className="mt-2">
                          <strong>Sightseeing:</strong>
                          <ul className="list-disc pl-5">
                            {day.sightseeing.map((place, i) => (
                              <li key={i}>{place}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      <p>
                        <strong>Meals:</strong> {day.meals}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Inclusions */}
              <div className="inclusions mb-4">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  Inclusions
                </h3>
                <ul className="list-disc pl-5">
                  {inclusions.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              <div className="exclusions mb-4">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  Exclusions
                </h3>
                <ul className="list-disc pl-5">
                  {exclusions.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Important Notes */}
              <div className="important-notes">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  Important Notes
                </h3>
                <ul className="list-disc pl-5">
                  {importantNotes.map((note, index) => (
                    <li key={index}>{note}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChardhamTour;

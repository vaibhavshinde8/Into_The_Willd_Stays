import { useState } from "react";
import kedarnathData from "./Kedarnath_Dham.json"; // Assuming the JSON file is in the same directory

const Kedarnath = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const {
    trip: {
      title,
      duration,
      departure_location,
      contact,
      overview,
      trip_highlights,
      short_itinerary,
      detailed_itinerary,
      inclusions,
      exclusions,
      pricing,
      booking,
    },
  } = kedarnathData;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className=" p-6 ">
      <div className="container">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-6">{title} Package</h2>

        {/* Tour Card */}
        <div className="tour-card bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Basic Info */}
          <div className="tour-card-header bg-blue-600 text-white p-6">
            <h3 className="text-3xl font-semibold  mb-6">
              {title} - {duration}
            </h3>
            <p>
              <strong>Departure Location:</strong> {departure_location}
            </p>
            <p>
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
            <div className="tour-card-body">
              {/* Overview */}
              <div className="overview">
                <h4>Overview:</h4>
                <p>{overview}</p>
              </div>

              {/* Trip Highlights */}
              <div className="trip-highlights">
                <h4>Trip Highlights:</h4>
                <ul>
                  {trip_highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>

              {/* Short Itinerary */}
              <div className="short-itinerary">
                <h4>Short Itinerary:</h4>
                <ul>
                  {short_itinerary.map((item, index) => (
                    <li key={index}>
                      <strong>Day {item.day}:</strong> {item.description}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Detailed Itinerary */}
              <div className="detailed-itinerary">
                <h4>Detailed Itinerary:</h4>
                {detailed_itinerary.map((item, index) => (
                  <div key={index}>
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>

              {/* Inclusions */}
              <div className="inclusions">
                <h4>Inclusions:</h4>
                <ul>
                  {inclusions.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              <div className="exclusions">
                <h4>Exclusions:</h4>
                <ul>
                  {exclusions.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Pricing */}
              <div className="pricing">
                <h4>Pricing:</h4>
                <ul>
                  <li>
                    <strong>Triple/Quad Sharing:</strong>{" "}
                    {pricing.triple_quad_sharing.price_per_person} <br />
                    <strong>GST:</strong> {pricing.triple_quad_sharing.gst}
                  </li>
                </ul>
              </div>

              {/* Booking Process */}
              <div className="booking-process">
                <h4>Booking Process:</h4>
                <p>{booking.booking_process}</p>

                <h5>Payment Methods:</h5>
                <ul>
                  <li>
                    <strong>UPI Transfer:</strong>{" "}
                    {booking.payment_details.UPI_transfer}
                  </li>
                  <li>
                    <strong>Account Transfer:</strong>
                    <ul>
                      <li>
                        <strong>Account Name:</strong>{" "}
                        {booking.payment_details.account_transfer.account_name}
                      </li>
                      <li>
                        <strong>Account Number:</strong>{" "}
                        {
                          booking.payment_details.account_transfer
                            .account_number
                        }
                      </li>
                      <li>
                        <strong>IFSC:</strong>{" "}
                        {booking.payment_details.account_transfer.IFSC}
                      </li>
                    </ul>
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

export default Kedarnath;

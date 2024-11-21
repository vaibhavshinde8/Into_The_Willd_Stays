import  { useState } from "react";
import dhanaultiData from "./dhanaulti.json"; // Assuming the JSON file is in the same directory

const Dhanaulti = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const {
    organization,
    location,
    registration_number,
    contact_details,
    stay_option,
    meal_options,
    activities,
    additional_services,
  } = dhanaultiData;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className=" p-6 ">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-6">
          {organization} - {location} Stay
        </h2>

        {/* Tour Card */}
        <div className="tour-card bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Basic Info */}
          <div className="tour-card-header bg-blue-600 text-white p-6">
            <h3 className="text-2xl font-bold">{organization}</h3>
            <p className="mt-2 text-lg">
              <strong>Location:</strong> {location}
            </p>
            <p className="mt-2 text-sm text-gray-600">
              <strong>Registration Number:</strong> {registration_number}
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
              {/* Contact Details */}
              <div className="contact-details mb-6">
                <h4 className="text-xl font-semibold">Contact Details:</h4>
                <p>
                  <strong>Phone:</strong> {contact_details.phone}
                </p>
                <p>
                  <strong>Website:</strong>{" "}
                  <a
                    href={`https://${contact_details.website}`}
                    className="text-blue-500"
                  >
                    {contact_details.website}
                  </a>
                </p>
                <p>
                  <strong>Address:</strong> {contact_details.address}
                </p>
                <p>
                  <strong>Google Reviews:</strong>{" "}
                  <a
                    href={`https://www.google.com/search?q=${contact_details.google_reviews}`}
                    className="text-blue-500"
                  >
                    {contact_details.google_reviews}
                  </a>
                </p>
                <p>
                  <strong>Social Media:</strong> {contact_details.social_media}
                </p>
              </div>

              {/* Stay Option */}
              <div className="stay-option mb-6">
                <h4 className="text-xl font-semibold">Stay Option:</h4>
                <p>
                  <strong>Type:</strong> {stay_option.type}
                </p>
                <p>
                  <strong>Sharing:</strong> {stay_option.sharing}
                </p>
                <p>
                  <strong>Price per person per night:</strong> ₹
                  {stay_option.price_per_person_per_night}
                </p>
              </div>

              {/* Payment Policy */}
              <div className="payment-policy mb-6">
                <h4 className="text-xl font-semibold">Payment Policy:</h4>
                <ul>
                  <li>
                    <strong>Advance Payment:</strong>{" "}
                    {stay_option.payment_policy.advance_payment}
                  </li>
                  <li>
                    <strong>Full Payment Deadline:</strong>{" "}
                    {stay_option.payment_policy.full_payment_deadline}
                  </li>
                  <li>
                    <strong>Immediate Full Payment:</strong>{" "}
                    {stay_option.payment_policy.immediate_full_payment}
                  </li>
                  <li>
                    <strong>GST:</strong> {stay_option.payment_policy.GST}
                  </li>
                </ul>
              </div>

              {/* Rules */}
              <div className="rules mb-6">
                <h4 className="text-xl font-semibold">Rules:</h4>
                <ul>
                  <li>
                    <strong>Music Restrictions:</strong>{" "}
                    {stay_option.rules.music_restrictions}
                  </li>
                  <li>
                    <strong>Damage Policy:</strong>{" "}
                    {stay_option.rules.damage_policy}
                  </li>
                  <li>
                    <strong>Bonfire Policy:</strong>{" "}
                    {stay_option.rules.bonfire_policy}
                  </li>
                  <li>
                    <strong>Heater Charge:</strong> ₹
                    {stay_option.rules.heater_charge}
                  </li>
                </ul>
              </div>

              {/* Meal Options */}
              <div className="meal-options mb-6">
                <h4 className="text-xl font-semibold">Meal Options:</h4>
                <p>
                  <strong>Included Meals:</strong> {meal_options.included_meals}
                </p>
                <div>
                  <strong>Breakfast Options:</strong>
                  <ul className="list-disc pl-6">
                    {meal_options.breakfast_options.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <strong>Lunch Menu:</strong>
                  <ul className="list-disc pl-6">
                    {meal_options.lunch_menu.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <strong>Dinner Menu:</strong>
                  <ul className="list-disc pl-6">
                    {meal_options.dinner_menu.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm text-gray-500">{meal_options.note}</p>
              </div>

              {/* Activities */}
              <div className="activities mb-6">
                <h4 className="text-xl font-semibold">Activities:</h4>
                <h5 className="font-semibold">Day 1:</h5>
                <ul className="list-disc pl-6">
                  <li>
                    <strong>Morning:</strong> {activities.day_1.morning}
                  </li>
                  <li>
                    <strong>Afternoon:</strong>{" "}
                    {activities.day_1.afternoon.join(", ")}
                  </li>
                  <li>
                    <strong>Evening:</strong>{" "}
                    {activities.day_1.evening.join(", ")}
                  </li>
                </ul>
                <h5 className="font-semibold mt-4">Day 2:</h5>
                <ul className="list-disc pl-6">
                  <li>
                    <strong>Morning to Evening:</strong>{" "}
                    {activities.day_2.morning_to_evening.join(", ")}
                  </li>
                </ul>
                <h5 className="font-semibold mt-4">Additional Activities:</h5>
                <ul className="list-disc pl-6">
                  {activities.additional_activities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Additional Services */}
              <div className="additional-services mb-6">
                <h4 className="text-xl font-semibold">Additional Services:</h4>
                <ul>
                  <li>
                    <strong>Transport:</strong> {additional_services.transport}
                  </li>
                  <li>
                    <strong>Bonfire:</strong> {additional_services.bonfire}
                  </li>
                  <li>
                    <strong>Addons:</strong> {additional_services.addons}
                  </li>
                  <li>
                    <strong>Heater:</strong> ₹{additional_services.heater}
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

export default Dhanaulti;

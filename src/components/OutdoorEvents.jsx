import  { useState } from "react";
import { X } from "lucide-react";
import BookingButton from "./BookingButton";

const EventModal = ({
  isOpen,
  onClose,
  title,
  details,
  activities,
  packageDetails,
  placeholderImages,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 overflow-y-auto">
      <div className="bg-white  w-full max-w-4xl max-h-[90vh] overflow-y-auto relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-gray-100  p-2 hover:bg-gray-200 transition"
        >
          <X className="w-6 h-6 text-gray-700" />
        </button>

        <div className="p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">{title}</h2>

          {/* Event Details */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-4">Event Description</h3>
            <p className="mb-4 text-gray-700">{details}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Activities */}
            <div>
              <h4 className="text-xl font-semibold mb-3">Activities</h4>
              <ul className="list-disc pl-5 space-y-2">
                {activities.map((activity, index) => (
                  <li key={index} className="text-gray-700">
                    {activity}
                  </li>
                ))}
              </ul>
            </div>

            {/* Package Details */}
            <div>
              <h4 className="text-xl font-semibold mb-3">
                Package Information
              </h4>
              {packageDetails && (
                <div className="bg-gray-100 p-4 ">
                  {packageDetails.map((detail, index) => (
                    <p key={index} className="mb-2 text-gray-700">
                      {detail}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Placeholder Images */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {placeholderImages.map((_, index) => (
              <img
                key={index}
                src={`https://via.placeholder.com/300x400?text=Activity+${
                  index + 1
                }`}
                alt={`Placeholder ${index + 1}`}
                className="w-full h-60 object-cover "
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const EventCard = ({
  title,
  subtitle,
  details,
  activities,
  packageDetails,
  placeholderImages,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="lg:px-32">
      <div className="bg-white shadow-lg  overflow-hidden transform transition-all hover:scale-105 ">
        {/* Card Header with Image */}
        <div className="relative h-64 md:h-80 bg-gray-200 flex items-center justify-center">
          <img
            src="https://via.placeholder.com/800x600"
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="relative z-10 text-center text-white px-4">
            <h2 className="text-3xl font-bold mb-2">{title}</h2>
            <p className="text-xl font-light">{subtitle}</p>
          </div>
        </div>

        {/* Details Button */}
        <div className="flex flex-col justify-center items-center sm:flex-row gap-4 p-4 bg-gray-50">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 my-4 py-2  text-black bg-gray-200  hover:bg-teal-100 transition-colors"
          >
            View Event Details
          </button>
          <BookingButton className="flex-1" />
        </div>
      </div>

      <EventModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        details={details}
        activities={activities}
        packageDetails={packageDetails}
        placeholderImages={placeholderImages}
      />
    </div>
  );
};

const OutdoorEventsCards = () => {
  const schoolCampDetails = {
    title: "School Camp",
    subtitle: "WORKSHOP | CAMPING | OUTDOOR ACTIVITIES",
    details:
      "An immersive outdoor experience designed to expose youth to nature, build character, and develop essential life skills through carefully crafted activities.",
    activities: [
      "Yoga & Zumba Workshop",
      "Camping & Hiking Workshop",
      "Art Workshop",
      "Music Session and Bonfire",
      "Projector Movie Night",
      "Treasure Hunt and Fun Activities",
    ],
    packageDetails: [
      "Contact: +91 99588 38557 | +91 9761966485",
      "Focuses on safety, personality development, and outdoor learning",
    ],
    placeholderImages: [1, 2, 3, 4],
  };

  const dadAndIDetails = {
    title: "Dad & I",
    subtitle: "BE A HERO OF YOUR KIDS",
    details:
      "A unique 2-day event that brings dads and children closer through outdoor adventures, team-building activities, and memorable experiences.",
    activities: [
      "Camping & Trekking Workshop",
      "Cycling Workshop",
      "Yoga & Running Workshop",
      "Team Bonding Activities",
      "Live Music and Bonfire",
    ],
    packageDetails: [
      "2N/3D - 6000rs per pair (Dad & Child)",
      "3000 extra for another child",
      "Includes stay, meals, workshops, and activities",
    ],
    placeholderImages: [1, 2, 3, 4],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-12 text-center text-gray-800">
        Outdoor Events
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        <EventCard {...schoolCampDetails} />
        <EventCard {...dadAndIDetails} />
      </div>
    </div>
  );
};

export default OutdoorEventsCards;

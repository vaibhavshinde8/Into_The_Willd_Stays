import React, { useState } from "react";

const TabContent = ({
  title,
  children,

}) => (
  <div className="bg-white shadow-md rounded-lg p-6">
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    {children}
  </div>
);

const OutdoorEvents = () => {
  const [activeTab, setActiveTab] = useState("school-camp");

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Events </h1>
      <h2 className="text-2xl font-semibold mb-4">School Outdoor Events</h2>

      <div className="mb-4">
        <button
          className={`px-4 py-2 mr-2 rounded-t-lg ${
            activeTab === "school-camp"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("school-camp")}
        >
          School Camp
        </button>
        <button
          className={`px-4 py-2 rounded-t-lg ${
            activeTab === "dad-and-i" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("dad-and-i")}
        >
          Dad & I
        </button>
      </div>

      {activeTab === "school-camp" && (
        <TabContent title="School Camp">
          <p className="mb-4">WORKSHOP | CAMPING | OUTDOOR ACTIVITIES</p>
          <div className="mb-4">
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <p>+91 99588 38557 | +91 9761966485</p>
          </div>
          <div className="mb-4">
            <h4 className="text-lg font-semibold mb-2">Our Objectives</h4>
            <ul className="list-disc pl-5">
              <li>To expose youth to nature, hardships, and hazards</li>
              <li>
                Build personality, character, confidence, and courage through
                outdoor programs
              </li>
              <li>
                Ensure the highest safety and professional standards in all
                activities
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="text-lg font-semibold mb-2">Core Values</h4>
            <ul className="list-disc pl-5">
              <li>Safety and Professional Excellence</li>
              <li>Society and Participation</li>
              <li>Achieve Excellence</li>
              <li>Innovations</li>
              <li>Embrace Diversity</li>
              <li>Integrity</li>
              <li>Environmental Sustainability</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Activities</h4>
            <ul className="list-disc pl-5">
              <li>Yoga & Zumba Workshop</li>
              <li>Camping & Hiking Workshop</li>
              <li>Art Workshop</li>
              <li>Music Session and Bonfire</li>
              <li>Projector Movie Night</li>
              <li>Treasure Hunt and Fun Activities</li>
            </ul>
          </div>
        </TabContent>
      )}

      {activeTab === "dad-and-i" && (
        <TabContent title="Dad & I">
          <p className="mb-4">BE A HERO OF YOUR KIDS</p>
          <p className="mb-4">
            Dads who love getting kids outside are a great source of
            inspiration. This 2-day event at our camping site includes stay,
            food, outdoor activities like hiking, trail walking, and some
            adventure activities.
          </p>
          <div className="mb-4">
            <h4 className="text-lg font-semibold mb-2">Event Includes</h4>
            <ul className="list-disc pl-5">
              <li>Camping & Trekking Workshop</li>
              <li>Cycling Workshop</li>
              <li>Yoga & Running Workshop</li>
              <li>Team Bonding Activities</li>
              <li>Live Music and Bonfire</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Package Details</h4>
            <p>2N/3D - 6000rs per pair (Dad & Child)</p>
            <p>3000 extra for another child</p>
            <ul className="list-disc pl-5">
              <li>2 night stay in camps (Alpine tent set-up)</li>
              <li>All meals included</li>
              <li>3 workshops, Hiking, sports activities</li>
              <li>Special Live music with bonfire</li>
            </ul>
          </div>
        </TabContent>
      )}
    </div>
  );
};

export default OutdoorEvents;

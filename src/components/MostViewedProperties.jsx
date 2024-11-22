import { useState } from "react";
import PropertiesCard from "./PropertiesCard";

const MostViewedProperties = () => {
  const [selectedLocation, setSelectedLocation] = useState("All");
  const locationsProp = ["All", "Dhanolti","Tehri",  "Majuli", "Goa"];

  return (
    <section
      id="property-most"
      className="min-h-[100vh] lg:px-32 bg-[#FFFFFF] text-[#091F3C] py-12"
    >
      <div className="mx-2">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-center pb-12">
          Most Viewed <span className="text-[#43A181]">Properties</span>
        </h1>
        <div>
          <div className="flex flex-wrap gap-2 lg:gap-4 justify-center mb-4">
            {locationsProp.map((location) => (
              <button
                key={location}
                className={`text-lg lg:text-xl font-semibold px-4 py-2 rounded transition-all duration-300 ease-in-out ${
                  selectedLocation === location
                    ? "text-[#FFFFFF] border-b-4 border-[#43A181] bg-[#091F3C] shadow-lg"
                    : "text-[#091F3C] hover:bg-[#43A181] hover:text-white"
                }`}
                onClick={() => setSelectedLocation(location)}
              >
                {location}
              </button>
            ))}
          </div>
          <div>
            <PropertiesCard selectedLocation={selectedLocation} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MostViewedProperties;

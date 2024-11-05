import { useState } from "react";
import Properties from "../components/Properties";

const MostViewedProperties = () => {
  const [selectedLocation, setSelectedLocation] = useState("All");
  const locationsProp = ["All", "Goa", "Mussourie", "Dehradun", "Manali"];

  return (
    <section
      id="property-most"
      className="min-h-[100vh] bg-gradient-to-r from-blue-900 via-gray-800 to-blue-900 text-white py-12"
    >
      <div className="mx-2 lg:mx-24">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-center pb-12">
          Most Viewed <span className="text-[#F77706]">Properties</span>
        </h1>
        <div>
          <div className="flex flex-wrap gap-2 lg:gap-4 justify-center mb-4">
            {locationsProp.map((property) => (
              <button
                key={property}
                className={`text-lg lg:text-xl font-semibold px-4 py-2 rounded transition-all duration-300 ease-in-out ${
                  selectedLocation === property
                    ? "text-[#F77706] border-b-4 border-[#F77706] bg-[#000000] shadow-lg"
                    : "text-white hover:bg-[#F77706] hover:text-black"
                }`}
                onClick={() => setSelectedLocation(property)}
              >
                {property}
              </button>
            ))}
          </div>
          <div>
            <Properties selectedLocation={selectedLocation} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MostViewedProperties;

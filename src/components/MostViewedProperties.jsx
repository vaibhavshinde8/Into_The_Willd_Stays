import { useState } from "react";
import { MapPin, Filter } from "lucide-react";
import PropertiesCard from "./PropertiesCard";

const MostViewedProperties = () => {
  const [selectedLocation, setSelectedLocation] = useState("All");
  const locationsProp = ["All", "Dhanolti", "Tehri", "Majuli", "Goa"];

  return (
    <section
      id="property-most"
      className="min-h-screen bg-gradient-to-br from-white to-teal-50 text-[#091F3C] py-16"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#091F3C] to-[#43A181]">
            Most Viewed Properties
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the most popular destinations and properties that travelers
            love
          </p>
        </div>

        <div className="bg-white shadow-2xl rounded-2xl p-6 lg:p-10">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2 text-[#43A181]">
              <MapPin className="w-6 h-6" />
              <span className="text-lg font-semibold">Destinations</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Filter className="w-5 h-5" />
              <span className="text-sm">Filter</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {locationsProp.map((location) => (
              <button
                key={location}
                className={`
                  px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 
                  ${
                    selectedLocation === location
                      ? "bg-[#43A181] text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-[#43A181]/10"
                  }
                `}
                onClick={() => setSelectedLocation(location)}
              >
                {location}
              </button>
            ))}
          </div>

          <div className="mt-4">
            <PropertiesCard selectedLocation={selectedLocation} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MostViewedProperties;

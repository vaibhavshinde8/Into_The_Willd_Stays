import { useState } from "react";
import PropTypes from "prop-types";
import { MapPin } from "lucide-react"; // Added for location icon

const SidebarFilter = ({ onFilterChange, properties }) => {
  const [selectedLocation, setSelectedLocation] = useState("");

  const handleLocationClick = (location) => {
    const updatedLocation = selectedLocation === location ? "" : location;
    setSelectedLocation(updatedLocation);
    onFilterChange({ location: updatedLocation });
  };

  const locations = Array.from(
    new Set(properties.map((property) => property.location))
  ).sort(); // Sort locations alphabetically

  return (
    <div className="sidebar-filter p-6 bg-white rounded-lg shadow-lg w-full sm:w-72 sticky top-4">
      <div className="border-b pb-4 mb-6">
        <h3 className="text-xl font-semibold text-black mb-2">Filters</h3>
        <p className="text-gray-700 text-sm">Refine your search by location</p>
      </div>

      {/* Location Filter Section */}
      <div className="filter-location">
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="h-5 w-5 text-gray-600" />
          <h4 className="text-black font-medium">Location</h4>
        </div>

        <div className="flex flex-col gap-2">
          {locations.map((city, index) => (
            <button
              key={index}
              onClick={() => handleLocationClick(city)}
              className={`
                w-full text-left px-4 py-2.5 
                transition-all duration-200 ease-in-out
                hover:bg-gray-100 rounded-lg
                ${
                  selectedLocation === city
                    ? "bg-gray-800 text-white hover:bg-gray-700"
                    : "bg-gray-200 text-gray-700"
                }
                flex items-center justify-between
                group
              `}
            >
              <span className="text-sm font-medium">{city}</span>
              {selectedLocation === city && (
                <span className="h-2 w-2 rounded-full bg-white"></span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Filters Summary */}
      {selectedLocation && (
        <div className="mt-6 pt-6 border-t">
          <h4 className="text-sm font-medium text-gray-700 mb-3">
            Active Filters
          </h4>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-800 text-white">
              {selectedLocation}
              <button
                onClick={() => handleLocationClick(selectedLocation)}
                className="ml-2 hover:text-gray-300"
              >
                ×
              </button>
            </span>
          </div>
        </div>
      )}

      {/* Reset Filters */}
      {selectedLocation && (
        <button
          onClick={() => {
            setSelectedLocation("");
            onFilterChange({ location: "" });
          }}
          className="mt-4 text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1 rounded-md"
        >
          Reset all filters
        </button>
      )}
    </div>
  );
};

SidebarFilter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  properties: PropTypes.arrayOf(
    PropTypes.shape({
      location: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SidebarFilter;

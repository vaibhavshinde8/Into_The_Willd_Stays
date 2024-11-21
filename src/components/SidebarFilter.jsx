import { useState } from "react";
import PropTypes from "prop-types";

const SidebarFilter = ({ onFilterChange, properties }) => {
  const [selectedLocation, setSelectedLocation] = useState("");

  const handleLocationClick = (location) => {
    const updatedLocation = selectedLocation === location ? "" : location; // Toggle selection
    setSelectedLocation(updatedLocation);
    onFilterChange({ location: updatedLocation });
  };

  const locations = Array.from(
    new Set(properties.map((property) => property.location))
  );

  return (
    <div className="sidebar-filter p-4 bg-white rounded-lg shadow-md w-64">
      <p className="text-gray-600 text-sm mb-6">
        Filter properties by location.
      </p>

      {/* Filter by Location */}
      <div className="filter-location mb-6">
        <h4 className="text-gray-700 font-medium mb-2">Location</h4>
        <div className="flex flex-wrap gap-4">
          {locations.map((city, index) => (
            <button
              key={index}
              onClick={() => handleLocationClick(city)}
              className={`${
                selectedLocation === city
                  ? "bg-gray-800 text-white"
                  : "bg-gray-200 text-gray-800"
              } px-4 py-2 rounded transition duration-150`}
            >
              {city}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

SidebarFilter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  properties: PropTypes.array.isRequired,
};

export default SidebarFilter;

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import PropTypes from "prop-types";

const SidebarFilter = ({ onFilterChange, properties }) => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 40000]);

  SidebarFilter.propTypes = {
    onFilterChange: PropTypes.func.isRequired,
    properties: PropTypes.array.isRequired,
  };

  const handleLocationChange = (e) => {
    const location = e.target.value;
    setSelectedLocation(location);
    onFilterChange({ location, price: selectedPriceRange });
  };

  const handlePriceRangeChange = (range) => {
    setSelectedPriceRange(range);
    onFilterChange({ location: selectedLocation, price: range });
  };

  const priceRanges = [
    { label: "All Prices", range: [0, 40000] },
    { label: "₹0 - ₹18000", range: [0, 18000] },
    { label: "₹18000 - ₹30000", range: [18000, 30000] },
    { label: "₹30000 - ₹40000", range: [30000, 40000] },
  ];

  const locations = Array.from(
    new Set(properties.map((property) => property.location))
  );

  return (
    <div className="sidebar-filter p-4 bg-white rounded-lg shadow-md w-64">
      
      <p className="text-gray-600 text-sm mb-6">
        Filter properties by location and price range.
      </p>
      {/* Filter by Location */}
      <div className="filter-location mb-6">
        <h4 className="text-gray-700 font-medium mb-2">Location</h4>
        <select
          value={selectedLocation}
          onChange={handleLocationChange}
          className="w-full px-3 py-2 border rounded text-gray-800"
        >
          <option value="">All Locations</option>
          {locations.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
        <FaChevronDown className="absolute right-4 top-12 text-gray-500" />
      </div>
      {/* Filter by Price */}
      <div className="filter-price mb-6">
        <h4 className="text-gray-700 font-medium mb-2">Price Range</h4>
        <div className="flex flex-col space-y-2 mb-4">
          {priceRanges.map(({ label, range }) => (
            <button
              key={label}
              onClick={() => handlePriceRangeChange(range)}
              className={`${
                selectedPriceRange[0] === range[0] &&
                selectedPriceRange[1] === range[1]
                  ? "bg-gray-800 text-white"
                  : "bg-gray-200 text-gray-800"
              } px-4 py-2 rounded transition duration-150`}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="flex items-center justify-between text-gray-800">
          <span className="font-medium">
            Price: ₹{selectedPriceRange[0]} - ₹{selectedPriceRange[1]}
          </span>
          <BsFillPersonFill className="text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default SidebarFilter;

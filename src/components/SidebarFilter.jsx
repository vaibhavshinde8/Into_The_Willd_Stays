import { useState } from "react";
import { FaChevronDown } from "react-icons/fa"; // For a dropdown arrow icon
import { BsFillPersonFill } from "react-icons/bs"; // For a person icon in the price filter
import PropTypes from "prop-types"; // Import PropTypes for props validation

const SidebarFilter = ({ onFilterChange }) => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 150]); // Default to the first price range

  SidebarFilter.propTypes = {
    onFilterChange: PropTypes.func.isRequired,
  };

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
    onFilterChange({ location: e.target.value, price: selectedPriceRange });
  };

  const handlePriceRangeChange = (range) => {
    setSelectedPriceRange(range);
    onFilterChange({ location: selectedLocation, price: range });
  };

  return (
    <div className="sidebar-filter p-6 bg-gradient-to-r from-[#43A181] to-[#3C8D99] rounded-3xl shadow-2xl border border-[#E1E1E1] transform hover:scale-105 transition-all ease-in-out duration-300">
      <h3 className="text-3xl font-semibold text-white mb-6 tracking-tight">
        <span className="bg-[#091F3C] text-white px-4 py-2 rounded-lg">
          Filters
        </span>
      </h3>

      {/* Filter by Location */}
      <div className="filter-location mb-8">
        <h4 className="font-medium text-white mb-2">Location</h4>
        <select
          value={selectedLocation}
          onChange={handleLocationChange}
          className="w-full px-5 py-3 bg-[#F0F0F0] text-[#091F3C] border border-[#E1E1E1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#43A181] transition duration-300 ease-in-out"
        >
          <option value="">All Locations</option>
          <option value="Rishikesh">Rishikesh</option>
          <option value="Mussoorie">Mussoorie</option>
          <option value="Dehradun">Dehradun</option>
        </select>
        <FaChevronDown className="absolute right-4 top-12 text-[#43A181] opacity-70 transition duration-300 ease-in-out" />
      </div>

      {/* Filter by Price */}
      <div className="filter-price mb-8">
        <h4 className="font-medium text-white mb-2">Price Range</h4>
        <div className="flex flex-col space-y-3 mb-4">
          {/* flex-col for column layout */}
          <button
            onClick={() => handlePriceRangeChange([0, 500])} // Option for all prices
            className={`${
              selectedPriceRange[0] === 0 && selectedPriceRange[1] === 500
                ? "bg-[#091F3C] text-white"
                : "bg-[#E1E1E1] text-[#091F3C]"
            } px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105`}
          >
            All Prices
          </button>
          <button
            onClick={() => handlePriceRangeChange([0, 150])}
            className={`${
              selectedPriceRange[0] === 0 && selectedPriceRange[1] === 150
                ? "bg-[#091F3C] text-white"
                : "bg-[#E1E1E1] text-[#091F3C]"
            } px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105`}
          >
            ₹0 - ₹150
          </button>
          <button
            onClick={() => handlePriceRangeChange([150, 300])}
            className={`${
              selectedPriceRange[0] === 150 && selectedPriceRange[1] === 300
                ? "bg-[#091F3C] text-white"
                : "bg-[#E1E1E1] text-[#091F3C]"
            } px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105`}
          >
            ₹150 - ₹300
          </button>
          <button
            onClick={() => handlePriceRangeChange([300, 500])}
            className={`${
              selectedPriceRange[0] === 300 && selectedPriceRange[1] === 500
                ? "bg-[#091F3C] text-white"
                : "bg-[#E1E1E1] text-[#091F3C]"
            } px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105`}
          >
            ₹300 - ₹500
          </button>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-white font-medium">
            Price: ₹{selectedPriceRange[0]} - ₹{selectedPriceRange[1]}
          </span>
          <BsFillPersonFill className="text-[#43A181] ml-2" />
        </div>
      </div>

      {/* Apply Button */}
      <button
        onClick={() =>
          onFilterChange({
            location: selectedLocation,
            price: selectedPriceRange,
          })
        }
        className="w-full py-3 mt-6 text-white bg-[#091F3C] rounded-full hover:bg-[#43A181] transition duration-300 ease-in-out transform hover:scale-105"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default SidebarFilter;

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa"; // For a dropdown arrow icon
import { BsFillPersonFill } from "react-icons/bs"; // For a person icon in the price filter
import PropTypes from "prop-types"; // Import PropTypes for props validation

const SidebarFilter = ({ onFilterChange, properties }) => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 18000]); // Default to the first price range

  SidebarFilter.propTypes = {
    onFilterChange: PropTypes.func.isRequired,
    properties: PropTypes.array.isRequired, // Ensure that properties is passed as an array
  };

  const handleLocationChange = (e) => {
    const selectedLocation = e.target.value;
    setSelectedLocation(selectedLocation);
    onFilterChange({ location: selectedLocation, price: selectedPriceRange });
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

  // Extract unique locations from properties
  const locations =
    properties && properties.length > 0
      ? [...new Set(properties.map((property) => property.location.city))]
      : [];

  return (
    <div className="sidebar-filter p-6 bg-gradient-to-r from-[#43A181] to-[#3C8D99] rounded-3xl shadow-2xl border border-[#E1E1E1] ">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-[#091F3C] mb-4">
        Checkout Our <span className="text-[#ffffff]">Properties</span>
      </h2>
      <p className="mb-8 text-[#091F3C] text-sm sm:text-base">
        Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo,
        rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur,
        aptent.
      </p>

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
          {/* Render price range buttons dynamically */}
          {priceRanges.map(({ label, range }) => (
            <button
              key={label}
              onClick={() => handlePriceRangeChange(range)}
              className={`${
                selectedPriceRange[0] === range[0] &&
                selectedPriceRange[1] === range[1]
                  ? "bg-[#091F3C] text-white"
                  : "bg-[#E1E1E1] text-[#091F3C]"
              } px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105`}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-white font-medium">
            Price: ₹{selectedPriceRange[0]} - ₹{selectedPriceRange[1]}
          </span>
          <BsFillPersonFill className="text-[#43A181] ml-2" />
        </div>
      </div>
    </div>
  );
};

export default SidebarFilter;

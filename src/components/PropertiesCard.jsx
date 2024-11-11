import PropTypes from "prop-types";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineBedroomParent, MdOutlineBathroom } from "react-icons/md";
import { IoPeople } from "react-icons/io5";
import Image1 from "../assets/homehero1.png";

// Use the updated properties data provided
const properties = [
  {
    imgURL: Image1,
    name: "Rishikesh Riverside Retreat",
    description:
      "A peaceful riverside stay in the heart of Rishikesh, surrounded by nature. Ideal for spiritual seekers and adventure lovers alike.",
    location: "Rishikesh",
    rating: 4.7,
    reviews: 30,
    price: 18000,
    bedroom: 4,
    bathroom: 2,
    guest: 6,
    exploremoreRoute: "/exploremore",
  },
  {
    imgURL: Image1,
    name: "Mussoorie Hilltop Haven",
    description:
      "Stay in a charming hilltop cottage with breathtaking views of Mussoorie's misty mountains and serene surroundings.",
    location: "Mussoorie",
    rating: 4.6,
    reviews: 50,
    price: 30000,
    bedroom: 3,
    bathroom: 2,
    guest: 4,
    exploremoreRoute: "/exploremore",
  },
  {
    imgURL: Image1,
    name: "Dehradun Valley Escape",
    description:
      "A tranquil retreat located in the lush green valleys of Dehradun, perfect for unwinding and enjoying the scenic beauty.",
    location: "Dehradun",
    rating: 4.8,
    reviews: 40,
    price: 40000,
    bedroom: 5,
    bathroom: 3,
    guest: 8,
    exploremoreRoute: "/exploremore",
  },
];

const PropertiesCard = ({ selectedLocation = "All" }) => {
  const filteredProperties =
    selectedLocation === "All"
      ? properties
      : properties.filter((property) => property.location === selectedLocation);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-6">
      {filteredProperties.map((property) => (
        <div
          className="relative bg-[#091F3C] text-white rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-3 duration-300 overflow-hidden"
          key={property.name}
        >
          <div className="relative">
            <img
              className="rounded-t-lg h-72 w-full object-cover transition-transform transform hover:scale-105 duration-300"
              src={property.imgURL}
              alt={property.name}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#00000099] to-transparent rounded-t-lg"></div>
          </div>
          <div className="p-4">
            <h2 className="font-bold text-[#43A181] lg:text-xl">
              {property.name}
            </h2>
            <h3 className="flex gap-1 items-center text-#161616 mt-1">
              <span className="text-primary">
                <IoLocationOutline />
              </span>
              {property.location}
            </h3>
            <div className="hidden lg:flex gap-2 mt-4 text-sm">
              <h2 className="flex items-center gap-1 border-r-2 border-primary pr-2">
                <MdOutlineBedroomParent />
                {property.bedroom} Bedrooms
              </h2>
              <h2 className="flex items-center gap-1 border-r-2 border-primary pr-2">
                <MdOutlineBathroom />
                {property.bathroom} Bathrooms
              </h2>
              <h2 className="flex items-center gap-1">
                <IoPeople />
                {property.guest} Guests
              </h2>
            </div>
          </div>
          <div className="p-4 flex items-center justify-between bg-gradient-to-b from-green-500 to-green-800 rounded-b-lg">
            <h4 className="text-lg">
              From Rs.{" "}
              <span className="text-[#43A181] font-bold">{property.price}</span>
              /Night
            </h4>
            <button className="border-2 border-primary text-primary px-4 py-1 rounded-lg font-bold hover:bg-primary hover:text-white transition-colors duration-300">
              Book Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

// Add prop validation
PropertiesCard.propTypes = {
  selectedLocation: PropTypes.string,
};

export default PropertiesCard;

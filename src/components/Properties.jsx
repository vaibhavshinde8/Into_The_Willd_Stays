import PropTypes from "prop-types";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineBedroomParent, MdOutlineBathroom } from "react-icons/md";
import { IoPeople } from "react-icons/io5";
import Image1 from "../assets/homehero1.png";

const propertiesData = [
  {
    name: "Royal Cottage Villa",
    imgURL: Image1,
    price: 18000,
    location: "Dehradun",
    bedroom: 4,
    bathroom: 2,
    guest: 6,
  },
  {
    name: "The Lalit Rooms & Spa",
    imgURL: Image1,
    price: 17000,
    location: "Mussourie",
    bedroom: 4,
    bathroom: 2,
    guest: 6,
  },
  {
    name: "Blue Heaven Paradise",
    imgURL: Image1,
    price: 15000,
    location: "Goa",
    bedroom: 4,
    bathroom: 2,
    guest: 6,
  },
  {
    name: "Ritz Carton & Resorts",
    imgURL: Image1,
    price: 115000,
    location: "Goa",
    bedroom: 4,
    bathroom: 2,
    guest: 6,
  },
];

const Properties = ({ selectedLocation = "All" }) => {
  const filteredProperty =
    selectedLocation === "All"
      ? propertiesData
      : propertiesData.filter((data) => data.location === selectedLocation);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 my-6">
      {filteredProperty.map((places) => (
        <div
          className="relative bg-[#012258] text-white rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-3 duration-300 overflow-hidden"
          key={places.name}
        >
          <div className="relative">
            <img
              className="rounded-t-lg h-72 w-full object-cover transition-transform transform hover:scale-105 duration-300"
              src={places.imgURL}
              alt={places.name}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#00000099] to-transparent rounded-t-lg"></div>
          </div>
          <div className="p-4">
            <h2 className="font-bold text-[#F77706] lg:text-xl">
              {places.name}
            </h2>
            <h3 className="flex gap-1 items-center text-white mt-1">
              <span className="text-[#F77706]">
                <IoLocationOutline />
              </span>
              {places.location}
            </h3>
            <div className="hidden lg:flex gap-2 mt-4 text-sm">
              <h2 className="flex items-center gap-1 border-r-2 border-white pr-2">
                <MdOutlineBedroomParent />
                {places.bedroom} Bedrooms
              </h2>
              <h2 className="flex items-center gap-1 border-r-2 border-white pr-2">
                <MdOutlineBathroom />
                {places.bathroom} Bathrooms
              </h2>
              <h2 className="flex items-center gap-1">
                <IoPeople />
                {places.guest} Guests
              </h2>
            </div>
          </div>
          <div className="p-4 flex items-center justify-between bg-gradient-to-b from-[#012258] to-[#000000] rounded-b-lg">
            <h4 className="text-lg">
              From Rs.{" "}
              <span className="text-[#F77706] font-bold">{places.price}</span>
              /Night
            </h4>
            <button className="border-2 border-[#F77706] text-[#F77706] px-4 py-1 rounded-lg font-bold hover:bg-[#F77706] hover:text-[#FFFFFF] transition-colors duration-300">
              Book Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

// Add prop validation
Properties.propTypes = {
  selectedLocation: PropTypes.string,
};

export default Properties;

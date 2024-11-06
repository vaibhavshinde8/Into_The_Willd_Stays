import { useState } from "react";
import SidebarFilter from "../components/SidebarFilter"; // Import the SidebarFilter
import Image1 from "../assets/homehero.png";

const properties = [
  {
    hotel: {
      img: Image1,
      name: "Rishikesh Riverside Retreat",
      description:
        "A peaceful riverside stay in the heart of Rishikesh, surrounded by nature. Ideal for spiritual seekers and adventure lovers alike.",
      location: {
        city: "Rishikesh",
        state: "Uttarakhand",
        country: "India",
      },
      rating: 4.7,
      reviews: 30,
      price: " ₹220",
    },
  },
  {
    hotel: {
      img: Image1,
      name: "Mussoorie Hilltop Haven",
      description:
        "Stay in a charming hilltop cottage with breathtaking views of Mussoorie's misty mountains and serene surroundings.",
      location: {
        city: "Mussoorie",
        state: "Uttarakhand",
        country: "India",
      },
      rating: 4.6,
      reviews: 50,
      price: " ₹300",
    },
  },
  {
    hotel: {
      img: Image1,
      name: "Dehradun Valley Escape",
      description:
        "A tranquil retreat located in the lush green valleys of Dehradun, perfect for unwinding and enjoying the scenic beauty.",
      location: {
        city: "Dehradun",
        state: "Uttarakhand",
        country: "India",
      },
      rating: 4.8,
      reviews: 40,
      price: " ₹400",
    },
  },
];

const Properties = () => {
  const [filteredProperties, setFilteredProperties] = useState(properties);

  const handleFilterChange = ({ location, price }) => {
    let filtered = properties;

    // Filter by Location
    if (location) {
      filtered = filtered.filter(
        (property) =>
          property.hotel.location.city.toLowerCase() === location.toLowerCase()
      );
    }

    // Filter by Price
    filtered = filtered.filter((property) => {
      const priceValue = parseInt(property.hotel.price.replace(" ₹", ""));
      return priceValue >= price[0] && priceValue <= price[1];
    });

    setFilteredProperties(filtered);
  };

  return (
    <div className="flex gap-8 py-32 px-8 bg-white">
      {/* Sidebar */}
      <div className="w-1/4">
        <SidebarFilter onFilterChange={handleFilterChange} />
      </div>

      {/* Properties List */}
      <div className="w-3/4 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-[#091F3C] mb-4">
          Checkout Our <span className="text-[#43A181]">Properties</span>
        </h2>
        <p className="mb-8 text-[#091F3C]">
          Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo,
          rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur,
          aptent.
        </p>

        <ul className="flex flex-col gap-6">
          {filteredProperties.map((property, index) => (
            <li
              key={index}
              className="flex flex-col sm:flex-row bg-white border border-[#091F3C] rounded-lg shadow-lg overflow-hidden"
            >
              {/* First section (Image) */}
              <div className="flex-shrink-0 w-full sm:w-[30%]">
                <img
                  src={property.hotel.img}
                  alt={property.hotel.name}
                  className="object-cover h-72 w-full"
                />
              </div>

              {/* Second section (Details) */}
              <div className="flex-grow p-4 w-full sm:w-[40%] flex flex-col justify-between items-center">
                <h2 className="text-xl sm:text-2xl font-bold text-[#091F3C] mb-2">
                  {property.hotel.name}
                </h2>
                <p className="text-[#000000] mb-4">
                  {property.hotel.description}
                </p>
                <div className="flex flex-wrap space-x-2 mb-4">
                  <span className="bg-[#43A181] rounded-full px-3 py-1 text-sm text-white font-semibold">
                    {property.hotel.location.city},{" "}
                    {property.hotel.location.state}
                  </span>
                  <span className="bg-[#43A181] rounded-full px-3 py-1 text-sm text-white font-semibold">
                    {property.hotel.location.country}
                  </span>
                </div>
              </div>

              {/* Third section (Reviews & Price) */}
              <div className="flex-shrink-0 w-full sm:w-[30%] p-4 py-8 bg-[#091F3C] text-white flex flex-col items-center">
                <div className="flex flex-col items-center mb-2">
                  <span>({property.hotel.reviews} reviews)</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={
                          i < Math.round(property.hotel.rating)
                            ? "text-yellow-400"
                            : "text-gray-400"
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-3xl sm:text-4xl font-bold mb-1">
                  {property.hotel.price}
                </div>
                <span className="text-sm">/ per person</span>
                <button className="mt-4 px-4 py-2 border border-white rounded-full hover:bg-[#43A181] hover:text-white transition whitespace-nowrap">
                  Book now!
                </button>
              </div>
            </li>
          ))}
        </ul>

        <button className="mt-8 px-6 py-3 bg-[#43A181] text-white rounded-md hover:bg-[#091F3C] hover:text-white transition-colors">
          View All Properties
        </button>
      </div>
    </div>
  );
};

export default Properties;

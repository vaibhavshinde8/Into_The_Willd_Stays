import Image1 from "../assets/homehero1.png";

const properties = [
  {
    img: Image1,
    title: "Experience The Great Holiday On Beach",
    description:
      "Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores, est aliquet porttitor! Eaque, cras, aspernatur.",
    duration: "7D/6N",
    pax: "10",
    location: "Malaysia",
    reviews: 25,
    price: "$750",
  },
  {
    img: Image1,
    title: "Summer Holiday To The Oxolotan River",
    description:
      "Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores, est aliquet porttitor! Eaque, cras, aspernatur.",
    duration: "7D/6N",
    pax: "10",
    location: "Malaysia",
    reviews: 20,
    price: "$520",
  },
  {
    img: Image1,
    title: "Santorini Island's Weekend Vacation",
    description:
      "Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores, est aliquet porttitor! Eaque, cras, aspernatur.",
    duration: "7D/6N",
    pax: "10",
    location: "Malaysia",
    reviews: 40,
    price: "$660",
  },
];

const Properties = () => {
  return (
    <div className="py-32 bg-gradient-to-r from-blue-900 via-gray-800 to-blue-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-white mb-4">
          Checkout Our <span className="text-[#F77706]"> Properties </span>
        </h2>
        <p className="mb-8 text-white">
          Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo,
          rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur,
          aptent.
        </p>

        <ul className="flex flex-col gap-6 ">
          {properties.map((property, index) => (
            <li
              key={index}
              className="flex bg-gradient-to-r from-[#1E3A8A] to-[#001F4D] rounded-lg shadow-lg overflow-hidden"
            >
              {/* fisrt section */}
              <div className=" flex flex-row justify-between">
                <div>
                  <img
                    src={property.img}
                    alt={property.title}
                    className="object-cover h-72 w-72"
                  />
                </div>
                {/* second section */}
                <div className="p-8 flex flex-col items-center h-full ">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {property.title}
                  </h2>
                  <p className="text-gray-200 mb-4">{property.description}</p>
                  <div className="flex  space-x-4">
                    <span className="bg-gray-100 rounded-full px-3 py-1 text-sm text-[#012258] font-semibold">
                      {property.duration}
                    </span>
                    <span className="bg-gray-100 rounded-full px-3 py-1 text-sm text-[#012258] font-semibold">
                      pax: {property.pax}
                    </span>
                    <span className="bg-gray-100 rounded-full px-3 py-1 text-sm text-[#012258] font-semibold">
                      {property.location}
                    </span>
                  </div>
                </div>
                {/* third section */}
                <div className="mt-6 bg-[#F77706] text-white rounded-lg p-4 flex flex-col items-center">
                  <div className="flex items-center space-x-2 mb-2">
                    <span>({property.reviews} reviews)</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={
                            i < Math.round(property.reviews / 5)
                              ? "text-yellow-400"
                              : "text-gray-400"
                          }
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-4xl font-bold mb-1">
                    {property.price}
                  </div>
                  <span className="text-sm">/ per person</span>
                  <button className="mt-4 px-4 py-2 border border-white rounded-full hover:bg-white hover:text-[#012258] transition">
                    BOOK NOW
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <button className="mt-8 px-6 py-3 bg-[#F77706] text-white rounded-md hover:bg-white hover:text-[#012258] transition-colors">
          View All Properties
        </button>
      </div>
    </div>
  );
};

export default Properties;

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
    <section className="properties py-12" id="properties">
      <div className="container mx-auto px-4">
        <p className="section-subtitle text-center text-gray-500">
          Popular Properties
        </p>

        <h2 className="h2 section-title text-3xl font-bold text-center mb-6">
          Checkout Our Properties
        </h2>

        <p className="section-text text-center mb-12">
          Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo,
          rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur,
          aptent.
        </p>

        <ul className="properties-list flex flex-col gap-6 mb-12">
          {properties.map((property, index) => (
            <li
              key={index}
              className="property-card border border-gray-300 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 ease-in-out"
            >
              <div className="flex flex-col sm:flex-row">
                <figure className="card-banner sm:w-1/3">
                  <img
                    src={property.img}
                    alt={property.title}
                    className="w-full h-48 sm:h-full object-cover"
                    loading="lazy"
                  />
                </figure>

                <div className="card-content p-4 sm:w-2/3 flex flex-col justify-between">
                  <div>
                    <h3 className="h3 card-title text-xl font-semibold mb-2">
                      {property.title}
                    </h3>
                    <p className="card-text text-gray-600 mb-4">
                      {property.description}
                    </p>

                    <ul className="card-meta-list flex flex-wrap justify-between mb-4">
                      <li className="card-meta-item flex items-center">
                        <ion-icon name="time" className="mr-2"></ion-icon>
                        <p className="text">{property.duration}</p>
                      </li>
                      <li className="card-meta-item flex items-center">
                        <ion-icon name="people" className="mr-2"></ion-icon>
                        <p className="text">pax: {property.pax}</p>
                      </li>
                      <li className="card-meta-item flex items-center">
                        <ion-icon name="location" className="mr-2"></ion-icon>
                        <p className="text">{property.location}</p>
                      </li>
                    </ul>
                  </div>

                  <div className="card-price border-t border-gray-300 pt-4">
                    <div className="wrapper flex justify-between items-center mb-2">
                      <p className="reviews text-gray-500">
                        ({property.reviews} reviews)
                      </p>
                      <div className="card-rating flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <ion-icon
                            key={i}
                            name="star"
                            className="text-yellow-500"
                          ></ion-icon>
                        ))}
                      </div>
                    </div>

                    <p className="price text-2xl font-bold">
                      {property.price}
                      <span className="text-gray-500"> / per person</span>
                    </p>

                    <button className="btn btn-secondary mt-4 w-full py-2 bg-[#F77706] text-white font-semibold rounded hover:bg-[#F59E00] transition duration-300">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <button className="btn btn-primary mt-4 w-full py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-300">
          View All Properties
        </button>
      </div>
    </section>
  );
};

export default Properties;

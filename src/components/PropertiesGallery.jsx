import PropTypes from "prop-types"; // Import PropTypes for props validation

const PropertiesGallery = ({ images }) => {
  return (
    <div className="properties-gallery p-6 bg-gradient-to-r from-[#43A181] to-[#3C8D99] rounded-3xl shadow-xl">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-[#091F3C] mb-6 text-center">
        Explore Our <span className="text-[#ffffff]">Properties</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg"
          >
            <img
              src={img.url}
              alt={img.alt}
              className="w-full h-full object-cover transition-all duration-300 ease-in-out transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <span className="text-white text-xl font-semibold">
                {img.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

PropertiesGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PropertiesGallery;

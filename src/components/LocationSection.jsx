import Image1 from "../assets/homehero1.png";

const locations = [
  {
    name: "Dehradun",
    imgUrl: Image1,
  },
  {
    name: "Goa",
    imgUrl: Image1,
  },
  {
    name: "Mussourie",
    imgUrl: Image1,
  },
];

const LocationSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 via-gray-800 to-blue-900 pt-8 pb-12 lg:px-32">
      <div className="lg:mx-24">
        <h1 className="text-4xl text-white lg:text-5xl font-bold mb-6 text-center pb-12">
          Browse By <span className="text-[#F77706]">Location</span>
        </h1>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-12">
          {locations.map((place, index) => (
            <div
              key={index}
              className="w-[160px] h-[160px] lg:w-[220px] lg:h-[220px] rounded-full border-4 border-dashed border-gray-400 hover:shadow-2xl hover:border-[#F77706] transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
            >
              <div className="rounded-full overflow-hidden p-1 relative bg-gradient-to-br from-[#1E40AF] to-[#6366F1] w-full h-full flex items-center justify-center">
                <img
                  className="object-cover w-full h-full rounded-full"
                  src={place.imgUrl}
                  alt={place.name}
                />
                <div className="absolute inset-0 flex items-end justify-center bg-black/20 rounded-full">
                  <p className="w-full py-2 text-center text-white text-lg font-semibold">
                    {place.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationSection;

import locBG from "../assets/location-bg.png";
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
    <div
      // id="browse-by-location"
      className="bg-gradient-to-r from-blue-200 via-blue-600 to-blue-200 pt-8 pb-12"
    >
      <div className="lg:mx-24">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-center pb-12  ">
          Browse By <span className="text-[#F77706]">Location</span>
        </h1>
        <div className="flex flex-wrap justify-center gap-6 lg:gap-12">
          {locations.map((place, index) => (
            <div
              key={index}
              className="w-[160px] lg:w-[220px] rounded-lg border-4 border-dashed border-gray-400 hover:shadow-2xl hover:border-[#F77706] transition duration-300 ease-in-out transform hover:scale-105"
            >
              <div className="rounded-lg overflow-hidden p-1 relative bg-gradient-to-br from-[#1E40AF] to-[#6366F1]">
                <img
                  className="object-cover w-full h-full rounded-lg"
                  src={place.imgUrl}
                  alt={place.name}
                />
                <div
                  className="flex rounded-full absolute left-0 bottom-0 text-center w-full h-full justify-center items-end bg-no-repeat bg-center text-white text-lg font-semibold"
                  // style={{
                  //   backgroundImage: `url(${locBG})`,
                  //   backgroundSize: "cover",
                  // }}
                >
                  <p className="bg-black/60 w-full py-2 rounded-b-lg">
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

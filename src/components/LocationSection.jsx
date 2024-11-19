import Image1 from "../assets/itw/IMG-20240530-WA0015.jpg";
import Image2 from "../assets/goa/goa1.jpg"
import Image3 from "../assets/pineandtails/pnt1.jpg";

const locations = [
  {
    name: "Dehradun",
    imgUrl: Image1,
  },
  {
    name: "Goa",
    imgUrl: Image2,
  },
  {
    name: "tehri",
    imgUrl: Image3,
  },
];

const LocationSection = () => {
  return (
    <div className="bg-white pt-8 pb-12 lg:px-32">
      <div className="lg:mx-24">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-center text-[#091F3C] pb-12">
          Browse By <span className="text-[#43A181]">Location</span>
        </h1>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-12">
          {locations.map((place, index) => (
            <div
              key={index}
              className="w-[160px] h-[160px] lg:w-[220px] lg:h-[220px] rounded-full border-4 border-dashed border-[#091F3C] hover:shadow-2xl hover:border-[#43A181] transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
            >
              <div className="rounded-full overflow-hidden p-1 relative bg-gradient-to-br from-[#43A181] to-[#091F3C] w-full h-full flex items-center justify-center">
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

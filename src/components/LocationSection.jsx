import { useNavigate } from "react-router-dom";
import Image1 from "../assets/itw/MG8666.jpg";
import Image2 from "../assets/goa/goa-ggl.jpg";
import Image3 from "../assets/pineandtails/Screenshot47.png";
import Image4 from "../assets/majuli/Property Photo/18PM.jpeg";

const locations = [
  {
    name: "Dhanolti",
    imgUrl: Image1,
    route: "/exploremoreitw",
  },
  {
    name: "Goa",
    imgUrl: Image2,
    route: "/exploremoresas",
  },
  {
    name: "Tehri",
    imgUrl: Image3,
    route: "/exploremorepnt",
  },
  {
    name: "Majuli",
    imgUrl: Image4,
    route: "/exploremoremnm",
  },
];

const LocationSection = () => {
  const navigate = useNavigate();

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
              className="w-[160px] h-[160px] lg:w-[220px] lg:h-[220px] rounded-full border-4 border-dashed border-[#091F3C] hover:shadow-2xl hover:border-[#43A181] transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center cursor-pointer"
              onClick={() => navigate(place.route)}
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

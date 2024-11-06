import Image1 from "../assets/homehero.png";

const TourBanner = () => {
  return (
    <div className="py-8 text-white">
      <div
        style={{ backgroundImage: `url(${Image1})`  }}
        className="flex flex-col  gap-2 lg:gap-6 items-start lg:mx-16 mx-4 lg:py-12 py-8 px-4 lg:pl-20 bg-fixed bg-cover bg-center  rounded-lg"
      >
        <h1 className="lg:text-4xl text-xl font-bold text-white ">
          Welcome to Our Tours Package
        </h1>
        <h2 className="text-lg lg:text-2xl text-white">
          Join our community to explore the best packages, All in{" "}
          <span className="text-[#F77706] font-extrabold">
            IntoTheWildsStays
          </span>
        </h2>
        <a
          href="/tours"
          className="px-4 py-2 lg:px-16 hover:bg-[#091F3C] font-bold rounded-lg bg-[#43A181] text-white transition duration-300 ease-in"
        >
          Explore more
        </a>
      </div>
    </div>
  );
};

export default TourBanner;

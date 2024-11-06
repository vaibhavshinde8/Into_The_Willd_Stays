import Image1 from "../assets/homehero.png";

const PropertiesBanner = () => {
  return (
    <div className="py-8 text-white">
      <div
        style={{ backgroundImage: `url(${Image1})` }}
        className="flex flex-col gap-6 lg:gap-8 items-start lg:mx-16 mx-4 lg:py-16 py-10 px-6 lg:pl-20 bg-fixed bg-cover bg-center rounded-lg shadow-lg backdrop-blur-md"
      >
        <h1 className="lg:text-5xl text-3xl font-extrabold text-white tracking-wide leading-tight text-shadow-md">
          Welcome to Our Properties
        </h1>
        <h2 className="text-lg lg:text-2xl text-white mb-4 font-semibold opacity-80">
          Explore the best stays and experience luxury, All in{" "}
          <span className="text-[#F77706] font-extrabold text-shadow-lg">
            IntoTheWildsStays
          </span>
        </h2>
        <a
          href="/properties"
          className="px-6 py-3 lg:px-16 hover:bg-[#091F3C] font-semibold rounded-full bg-gradient-to-r from-[#43A181] to-[#009db5] text-white transition duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg"
        >
          Explore Properties
        </a>
      </div>
    </div>
  );
};

export default PropertiesBanner;

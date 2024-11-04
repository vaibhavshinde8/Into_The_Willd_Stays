import locBG from "../assets/location-bg.png";

const locations = [
  {
    name: "Dehradun",
    imgUrl:
      "https://sundaysforever-bucket.s3.ap-south-1.amazonaws.com/1676269352574.jpeg",
  },
  {
    name: "Goa",
    imgUrl:
      "https://sundaysforever-bucket.s3.ap-south-1.amazonaws.com/1676269352574.jpeg",
  },
  {
    name: "Mussourie",
    imgUrl:
      "https://sundaysforever-bucket.s3.ap-south-1.amazonaws.com/1676269352574.jpeg",
  },
];

const LocationSection = () => {
  return (
    <section id="browse-by-location" className="bg-blue-50 pt-2 pb-8">
      <div className="lg:mx-24">
        <h1 className="text-4xl font-bold my-6">
          Browse By <span className="text-primary">Location</span>
        </h1>
        <div className="flex gap-2 lg:gap-8">
          {locations.map((place, index) => (
            <div
              key={index}
              className="w-[150px] lg:w-[200px] rounded-[50%] border-2 border-dashed border-black"
            >
              <div className="rounded-[50%] overflow-hidden p-1 relative">
                <img
                  className="object-cover rounded-[50%]"
                  src={place.imgUrl}
                  alt={place.name}
                />
                <div
                  className="flex bg-no-repeat rounded-[50%] absolute left-0 bottom-[3px] text-center w-[100%] h-[100%] justify-center items-end bg-center"
                  style={{
                    backgroundImage: `url(${locBG})`,
                    backgroundSize: "100%",
                  }}
                >
                  <p>{place.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationSection;

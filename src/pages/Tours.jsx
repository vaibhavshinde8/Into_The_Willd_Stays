import { BedDouble, Boxes, Plane } from "lucide-react";

const packages = [
  {
    name: "Jewels Of Egypt - Cairo",
    imgURL:
      "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3766/Picturesque%20view%20of%20snow-covered%20hills%20in%20Gulmarg.jpeg?crop=259:168&downsize=259:168",
    des1: "3N Cairo",
    des2: "3N River",
    des3: "2N Hurghada",
    flight: 2,
    hotel: 4,
    activities: 8,
    price: 210000,
  },
  {
    name: "Jewels Of Egypt - Cairo",
    imgURL:
      "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3766/Picturesque%20view%20of%20snow-covered%20hills%20in%20Gulmarg.jpeg?crop=259:168&downsize=259:168",
    des1: "3N Cairo",
    des2: "3N River",
    des3: "2N Hurghada",
    flight: 2,
    hotel: 4,
    activities: 8,
    price: 210000,
  },
  {
    name: "Jewels Of Egypt - Cairo",
    imgURL:
      "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3766/Picturesque%20view%20of%20snow-covered%20hills%20in%20Gulmarg.jpeg?crop=259:168&downsize=259:168",
    des1: "3N Cairo",
    des2: "3N River",
    des3: "2N Hurghada",
    flight: 2,
    hotel: 4,
    activities: 8,
    price: 210000,
  },
  {
    name: "Jewels Of Egypt - Cairo",
    imgURL:
      "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3766/Picturesque%20view%20of%20snow-covered%20hills%20in%20Gulmarg.jpeg?crop=259:168&downsize=259:168",
    des1: "3N Cairo",
    des2: "3N River",
    des3: "2N Hurghada",
    flight: 2,
    hotel: 4,
    activities: 8,
    price: 210000,
  },
  {
    name: "Jewels Of Egypt - Cairo",
    imgURL:
      "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3766/Picturesque%20view%20of%20snow-covered%20hills%20in%20Gulmarg.jpeg?crop=259:168&downsize=259:168",
    des1: "3N Cairo",
    des2: "3N River",
    des3: "2N Hurghada",
    flight: 2,
    hotel: 4,
    activities: 8,
    price: 210000,
  },
];
const Tours = () => {
  return (
    <div className="bg-gradient-to-r from-green-100 to-green-200">
      <div className="lg:pt-24 pt-32 text-white ">
        <div className='bg-[url("https://sundaysforever.com/static/media/Barlowscottageimg14.9e6859ced0b73fc2614d.jpg")] bg-cover bg-center bg-fixed lg:py-24 py-16 flex flex-col items-center lg:gap-6 gap-4'>
          <h1 className="lg:text-7xl text-4xl before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-[#091F3C] relative inline-block">
            <span className="relative font-primaryF">Welcome To our Tour Packages</span>
          </h1>
          <h3 className="lg:text-6xl text-2xl text-center font-primaryF before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-[#091F3C] relative inline-block">
            <span className="relative font-primaryF">Here we provide the topmost featured Tour plans.</span>
          </h3>
        </div>
      </div>
      <section id="trending-loc" className="py-8 lg:px-32 mx-2 mt-12 text-black">
        <div>
          <div className="ml-2 flex flex-col gap-2 lg:gap-4">
            <h1 className="text-2xl font-bold lg:text-4xl"><span className="text-secondry font-bold">Top</span> Trending Destinations</h1>
            <h3 className="lg:text-2xl">Explore the hottest travel spots around the globe.</h3>
          </div>
          <div className="grid grid-cols-3 gap-4 lg:gap-0 lg:grid-cols-5 justify-center mt-8">
            <div className="flex flex-col items-center gap-2 hover:scale-105 hover:text-secondry transition duration-300 ease-in cursor-pointer">
              <img className="w-48 h-48 object-cover rounded-xl" src="https://media.easemytrip.com/media/Deal/DL638119942080443457/SightSeeing/SightSeeingVA75On.jpg" alt="" />
              <h1 className="text-xl font-bold">Europe</h1>
            </div>
            <div className="flex flex-col items-center gap-2 hover:scale-105 hover:text-secondry transition duration-300 ease-in cursor-pointer">
              <img className="w-48 h-48 object-cover rounded-xl" src="https://media.easemytrip.com/media/Deal/DL637368468102333885/SightSeeing/SightSeeingvjlMBK.jpg" alt="" />
              <h1 className="text-xl font-bold">Dubai</h1>
            </div>
            <div className="flex flex-col items-center gap-2 hover:scale-105 hover:text-secondry transition duration-300 ease-in cursor-pointer">
              <img className="w-48 h-48 object-cover rounded-xl" src="https://media.easemytrip.com/media/Deal/DL638358400913851278/SightSeeing/SightSeeingHahHXG.jpg" alt="" />
              <h1 className="text-xl font-bold">Andaman</h1>
            </div>
            <div className="flex flex-col items-center gap-2 hover:scale-105 hover:text-secondry transition duration-300 ease-in cursor-pointer">
              <img className="w-48 h-48 object-cover rounded-xl" src="https://media.easemytrip.com/media/Deal/DL638091404735824102/SightSeeing/SightSeeingKnIUMg.jpg" alt="" />
              <h1 className="text-xl font-bold">Australia</h1>
            </div>
            <div className="flex flex-col items-center gap-2 hover:scale-105 hover:text-secondry transition duration-300 ease-in cursor-pointer">
              <img className="w-48 h-48 object-cover rounded-xl" src="https://media.easemytrip.com/media/Deal/DL638345495967417412/SightSeeing/SightSeeingvBYqJa.jpg" alt="" />
              <h1 className="text-xl font-bold">Spain</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 lg:px-32 mx-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {packages.map((tourpack) => (
            <div
              className="relative bg-gradient-to-b from-green-200 to-green-400 text-white rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-3 duration-300 overflow-hidden"
              key={tourpack.name}
            >
              <div className="relative">
                <img
                  className="rounded-t-lg h-72 w-full object-cover transition-transform transform hover:scale-105 duration-300"
                  src={tourpack.imgURL}
                  alt={tourpack.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00000099] to-transparent rounded-t-lg"></div>
              </div>
              <div className="p-4 flex flex-col gap-3">
                <h2 className="font-bold text-primary lg:text-xl">
                  {tourpack.name}
                </h2>
                <div className="flex gap-2">
                  <h3 className="border-r-2 border-primary pr-2">
                    {tourpack.des1}
                  </h3>
                  <h3 className="border-r-2 border-primary pr-2">
                    {tourpack.des2}
                  </h3>
                  <h3 className="border-r-2 border-primary pr-2">
                    {tourpack.des3}
                  </h3>
                </div>
                <div className="flex gap-4">
                  <h3 className="flex gap-1 items-center text-white mt-1">
                    <span className="text-primary">
                      <Plane />
                    </span>
                    {tourpack.flight} Flights
                  </h3>
                  <h3 className="flex gap-1 items-center">
                    <span className="text-primary">
                      <BedDouble />
                    </span>
                    {tourpack.hotel} Hotel
                  </h3>
                  <h3 className="flex gap-1 items-center">
                    <span className="text-primary">
                      <Boxes />
                    </span>
                    {tourpack.activities}+ Activities
                  </h3>
                </div>
              </div>
              <div className="p-4 flex items-center justify-between bg-gradient-to-b from-green-400 to-green-900 rounded-b-lg">
                <h4 className="text-lg">
                  From Rs.{" "}
                  <span className="text-primary font-bold">
                    {tourpack.price}
                  </span>
                </h4>
                <button className="border-2 border-primary text-primary px-4 py-1 rounded-lg font-bold hover:bg-primary hover:text-[#FFFFFF] transition-colors duration-300">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Tours;

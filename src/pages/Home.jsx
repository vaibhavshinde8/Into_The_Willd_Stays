import React, { useState } from "react";
import locBG from "../assets/location-bg.png";
import Properties from "../components/Properties";


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

const Home = () => {
  const [selectedLocation, setSelectedLocation] = useState('All')

  const locationsProp = ['All', 'Goa', 'Mussourie', 'Dehradun', 'Manali']
  return (
    <>
      <section id="browse-by-location" className="bg-blue-50 pt-2 pb-8">
        <div className="lg:mx-24">
          <h1 className="text-4xl font-bold my-6">
            Browse By <span className="text-primary">Location</span>
          </h1>
          <div className="flex gap-2 lg:gap-8">
            {locations.map((place) => (
              <div className="w-[150px] lg:w-[200px] rounded-[50%] border-2 border-dashed border-black">
                <div className="rounded-[50%] overflow-hidden p-1 relative">
                  <img
                    className=" object-cover rounded-[50%]"
                    src={place.imgUrl}
                    alt=""
                  />
                  <div
                    className="flex bg-no-repeat rounded-[50%] absolute left-0 bottom-[3px] text-center w-[100%] h-[100%] justify-center items-end bg-center"
                    style={{
                      backgroundImage: `url(${locBG})`,
                      backgroundSize: "100%",
                    }}
                  >
                    <p className="">{place.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="guest-exp">
        <div className="my-12 mx-2">
          <div className="flex flex-col-reverse lg:flex-row gap-4 justify-around items-center text-center">
            <div className="flex flex-col gap-4 bg-blue-100 p-8 lg:ml-16 rounded-lg lg:w-[550px] lg:h-[350px] justify-center">
              <h1 className="text-4xl font-bold">Guest <span className="text-primary">Experience</span></h1>
              <h4 className="lg:text-lg">
                At Sundays Forever, our primary goal is to provide our guests
                with an exceptional experience that they will cherish forever.
                We understand that luxury is not just about lavish amenities,
                but also about the feeling of being pampered and cared for. Our
                team is dedicated to tailoring every aspect of their stay to
                their preferences, including personalized services and bespoke
                experiences. We are committed to elevating the guest experience
                to new heights and take pride in creating memories that last a
                lifetime.
              </h4>
            </div>
            <div>
              <iframe className="lg:w-[630px] lg:h-[500px] rounded-lg"
                width="400"
                height="315"
                src="https://www.youtube.com/embed/bx-cd1TL3BY?si=H3e2THm1emot4sEI"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section id="property-most">
        <div className="mx-2 lg:mx-24">
          <h1 className="text-4xl">Most Viewed <span className="text-primary">Properties</span></h1>
          <div>
            <div className="flex gap-2 my-2 lg:my-4 lg:gap-4">
              {locationsProp.map((property) => (
                <button className={`text-xl lg:text-2xl font-medium transition duration-400 ease-in-out ${selectedLocation === property ? 'text-primary border-b-2 border-primary' : 'bg-white'}`} key={property} onClick={() => setSelectedLocation(property)} >{property}</button>
              ))}
            </div>
            <div>
            <Properties selectedLocation={selectedLocation}/>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

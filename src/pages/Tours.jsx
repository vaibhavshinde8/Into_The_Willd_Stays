import { BedDouble, Boxes, Plane } from "lucide-react";
import React from 'react';
import cambodia from "../assets/cambodia.png";
// import egypt from "../assets/egypt.jpg";
import jamaica from "../assets/jamaica.png";
// import jordan from "../assets/jordan.jpg";
import morocco from "../assets/morocco.png";
<<<<<<< HEAD
import { Swiper, SwiperSlide } from "swiper/react";
import Chardham from '../TourPackages/Chardham.json';
import Chopta from '../TourPackages/Chopta_Tungnath.json'
=======
// import { Swiper, SwiperSlide } from "swiper/react";

>>>>>>> 06d01029f36954444850ea27bf98a2d28af59a6f
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import '../components/TestiSwiper.css';
// import { Autoplay, Pagination } from "swiper/modules";

const packages = [
  {
    "name": "Chopta Tungnath",
    "imgURL": "https://example.com/chopta-tungnath-image.jpg",
    "des1": "1N Chopta (Overnight Journey)",
    "des2": "1N Tungnath (Trek to Chandrashila)",
    "des3": "1N Deoriatal (Trek & Exploration)",
    "flight": 0,
    "hotel": 4,
    "activities": 5,
    "price": 6499
  }  
  ,
  {
    "name": "CHARDHAM Yatra Package from Haridwar",
    "imgURL": "https://example.com/path/to/your/image.jpg", 
    "des1": "2N Barkot",
    "des2": "1N Uttarkashi",
    "des3": "1N Guptkashi",
    "flight": 0,
    "hotel": 4,
    "activities": 10,
    "price": 132000,
    "contactNumber": "+91-9761966485",
    "childrenPolicy": {
      "below5Years": "Complimentary",
      "5to10Years": "Without extra bed, meals cost important to pay",
      "above10Years": "With extra bed sharing room, charge extra bed with meals",
      "ageProofRequired": "Yes, carry the age proof for verification"
    },
    "tripCost": {
      "passengerCount": 4,
      "deluxe": {
        "perPaxWithKIA": "Rs. 33,000",
        "perPaxWithMAP": "Rs. 33,000"
      }
    },
    "deluxeHotelAccommodation": [
      {
        "location": "Barkot",
        "nightsStay": 2,
        "hotels": [
          "Hotel R.D Residency",
          "Hotel Parkash",
          "Hotel Buddhi",
          "Hotel Archna"
        ]
      },
      {
        "location": "Srinagar/Joshimath",
        "nightsStay": 1,
        "hotels": [
          "Hotel Aasirvaad",
          "Hotel Krishna",
          "Hotel Dev Ganga",
          "Kamla Cottage",
          "Hotel Devansh"
        ]
      },
      {
        "location": "Uttarkashi/Harshil",
        "nightsStay": 1,
        "hotels": [
          "Hotel Mount View",
          "Namami Ganga",
          "Dev Bhoomi",
          "Hotel Ganga Puttar",
          "Hotel Avtar"
        ]
      },
      {
        "location": "Guptkashi/Chopta",
        "nightsStay": 2,
        "hotels": [
          "Hotel Prabhakar",
          "Hotel Radhey Krishna",
          "Badri Valley Inn"
        ]
      },
      {
        "location": "Badrinath/Joshimath",
        "nightsStay": 3,
        "hotels": [
          "Hotel Valley In",
          "Annexy"
        ]
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "from": "Haridwar",
        "to": "Barkot",
        "distance": "179Kms",
        "duration": "6-7 hrs",
        "activities": "Arrive Haridwar and drive to Barkot. Check-in to hotel/camp and relax.",
        "meals": "Dinner"
      },
      {
        "day": 2,
        "from": "Barkot",
        "to": "Yamunotri",
        "distance": "34Kms by road",
        "activities": "Drive to Jankichatti/Phoolchatti, trek to Yamunotri. Perform pooja, bath in Jamunabai-kund, return to Barkot.",
        "meals": "Breakfast, Dinner",
        "sightseeing": [
          "Yamunotri Temple",
          "Surya Kund",
          "Divya-Shila"
        ]
      },
      {
        "day": 3,
        "from": "Barkot",
        "to": "Uttarkashi",
        "distance": "104Kms",
        "duration": "3 hrs",
        "activities": "Drive to Maneri. Visit Vishwanath Temple.",
        "meals": "Breakfast, Dinner",
        "sightseeing": [
          "Vishwanath Temple",
          "Panchanan Mahadev",
          "Shiv Guffa"
        ]
      },
      {
        "day": 4,
        "from": "Uttarkashi",
        "to": "Gangotri",
        "distance": "82Kms",
        "duration": "2 hrs",
        "activities": "Drive to Gangotri. Visit Gangotri Temple and Submerged Shivling.",
        "meals": "Breakfast, Dinner",
        "sightseeing": [
          "Gangotri Temple",
          "Submerged Shivling",
          "Kedar Ganga Sangam"
        ]
      },
      {
        "day": 5,
        "from": "Uttarkashi",
        "to": "Guptkashi",
        "distance": "214Kms",
        "duration": "7-8 hrs",
        "activities": "Drive to Guptkashi. Visit Ardh Narishwar Temple.",
        "meals": "Breakfast, Dinner",
        "sightseeing": [
          "Ardh Narishwar Temple"
        ]
      },
      {
        "day": 6,
        "from": "Guptkashi",
        "to": "Kedarnath",
        "distance": "30Kms drive, 20Kms Trek one side",
        "activities": "Drive to Sonprayag. Trek to Kedarnath, visit Kedarnath Temple.",
        "meals": "Breakfast",
        "sightseeing": [
          "Gauri Kund",
          "Kedarnath Temple",
          "JagadGuru Adi Shankaracharya"
        ]
      },
      {
        "day": 7,
        "from": "Kedarnath",
        "to": "Sonprayag",
        "activities": "Trek down from Kedarnath to Sonprayag. Drive to Chopta.",
        "meals": "Dinner"
      },
      {
        "day": 8,
        "from": "Chopta",
        "to": "Joshimath",
        "distance": "186Kms",
        "duration": "6-7 hrs",
        "activities": "Drive to Pandukeshwar and check-in to hotel.",
        "meals": "Breakfast, Dinner"
      },
      {
        "day": 9,
        "from": "Joshimath",
        "to": "Badrinath",
        "distance": "164Kms",
        "duration": "7 hrs",
        "activities": "Drive to Badrinath. Visit Badrinath Temple and nearby attractions.",
        "meals": "Breakfast, Dinner",
        "sightseeing": [
          "Badrinath Temple",
          "TaptKund",
          "NaradKund",
          "BrahamaKapal",
          "Mana Village",
          "Sarasvati River",
          "Bhim Pool"
        ]
      },
      {
        "day": 10,
        "from": "Srinagar",
        "to": "Haridwar",
        "distance": "137Kms",
        "duration": "6-7 hrs",
        "activities": "Drive to Rishikesh and then to Haridwar for departure.",
        "meals": "Breakfast"
      }
    ],
    "exclusions": [
      "Air Fare / Train Fare",
      "Personal Expenses like laundry, telephone calls, tips, liquor, boating & joy rides",
      "Additional sightseeing or usage of vehicle not mentioned in the itinerary",
      "Monuments entrance fees",
      "Surcharge if applicable",
      "Any cost arising due to natural calamities like landslides, road blocks",
      "Room Heater charges as per the hotel"
    ],
    "inclusions": [
      "Neat, clean, hygienic accommodation on double/quad sharing",
      "All breakfast & dinner (mix of north and south Indian menu)",
      "Surface transportation by Dezire, Bolero, Innova, Tempo Traveller, and Mini Bus",
      "All interstate taxes, permits, parking, road tax, toll taxes, and fuel charges",
      "All government applicable taxes and service charges"
    ],
    "importantNotes": [
      "Carry original Voter ID/Passport, Aadhar Card for all travelers",
      "For booking helicopter tickets, provide weight, age, name, and Aadhar card",
      "Base category of rooms in all hotels",
      "Hotels are subject to availability",
      "Due to hills area and long journey, morning starting time should be 8 am",
      "Carry winter clothes for Kedarnath, Badrinath, and Yamunotri",
      "Carry action shoes for Yatra and raincoat",
      "Cash is important for local services like Dolly Palky and Horse"
    ]
  },  
];

const hiddenGems = [
  {
    title: "Enchanting",
    name: "Jamaica Holiday Package",
    price: 125000,
    imgUrls: jamaica,
  },
  {
    title: "Discovering",
    name: "Jordan Holiday Package",
    price: 125000,
    imgUrls: cambodia,
  },
  {
    title: "Amazing Destination",
    name: "Morocco Holiday Package",
    price: 125000,
    imgUrls: morocco,
  },
  {
    title: "Pyramids Solace",
    name: "Egypt Holiday Package",
    price: 125000,
    imgUrls: jamaica,
  },
  {
    title: "Enchanting",
    name: "Cambodia Holiday Package",
    price: 125000,
    imgUrls: cambodia,
  },
  
];
const Tours = () => {
  const togglePackageDetails = (index) => {
    if (activePackage === index) {
      setActivePackage(null); // Close the details if the same package is clicked again
    } else {
      setActivePackage(index); // Open the details of the clicked package
    }
  };

  const [activePackage, setActivePackage] = React.useState(null);
  return (
    <div className="">
      <div className="lg:pt-24 pt-32 text-white ">
        <div className='bg-[url("https://sundaysforever.com/static/media/Barlowscottageimg14.9e6859ced0b73fc2614d.jpg")] bg-cover bg-center bg-fixed lg:py-24 py-16 flex flex-col items-center lg:gap-6 gap-4'>
          <h1 className="lg:text-7xl text-4xl before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-gradient-to-r from-green-500 to-green-700 relative inline-block">
            <span className="relative font-primaryF">
              Welcome To our Tour Packages
            </span>
          </h1>
          <h3 className="lg:text-6xl text-2xl text-center font-primaryF before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-gradient-to-r from-green-500 to-green-700 relative inline-block">
            <span className="relative font-primaryF">
              Here we provide the topmost featured Tour plans.
            </span>
          </h3>
        </div>
      </div>
      <section
        id="trending-loc"
        className="py-8 lg:px-32 mx-2 mt-12 text-black"
      >
        <div>
          <div className="ml-2 flex flex-col gap-2 lg:gap-4">
            <h1 className="text-2xl font-bold lg:text-4xl">
              <span className="text-secondry font-bold">Top</span> Trending
              Destinations
            </h1>
            <h3 className="lg:text-2xl">
              Explore the hottest travel spots around the globe.
            </h3>
          </div>
          <div className="grid grid-cols-3 gap-4 lg:gap-0 lg:grid-cols-5 justify-center mt-8">
            <div className="flex flex-col items-center gap-2 hover:scale-105 hover:text-secondry transition duration-300 ease-in cursor-pointer">
              <img
                className="w-48 h-48 object-cover rounded-xl"
                src="https://media.easemytrip.com/media/Deal/DL638119942080443457/SightSeeing/SightSeeingVA75On.jpg"
                alt=""
              />
              <h1 className="text-xl font-bold">Europe</h1>
            </div>
            <div className="flex flex-col items-center gap-2 hover:scale-105 hover:text-secondry transition duration-300 ease-in cursor-pointer">
              <img
                className="w-48 h-48 object-cover rounded-xl"
                src="https://media.easemytrip.com/media/Deal/DL637368468102333885/SightSeeing/SightSeeingvjlMBK.jpg"
                alt=""
              />
              <h1 className="text-xl font-bold">Dubai</h1>
            </div>
            <div className="flex flex-col items-center gap-2 hover:scale-105 hover:text-secondry transition duration-300 ease-in cursor-pointer">
              <img
                className="w-48 h-48 object-cover rounded-xl"
                src="https://media.easemytrip.com/media/Deal/DL638358400913851278/SightSeeing/SightSeeingHahHXG.jpg"
                alt=""
              />
              <h1 className="text-xl font-bold">Andaman</h1>
            </div>
            <div className="flex flex-col items-center gap-2 hover:scale-105 hover:text-secondry transition duration-300 ease-in cursor-pointer">
              <img
                className="w-48 h-48 object-cover rounded-xl"
                src="https://media.easemytrip.com/media/Deal/DL638091404735824102/SightSeeing/SightSeeingKnIUMg.jpg"
                alt=""
              />
              <h1 className="text-xl font-bold">Australia</h1>
            </div>
            <div className="flex flex-col items-center gap-2 hover:scale-105 hover:text-secondry transition duration-300 ease-in cursor-pointer">
              <img
                className="w-48 h-48 object-cover rounded-xl"
                src="https://media.easemytrip.com/media/Deal/DL638345495967417412/SightSeeing/SightSeeingvBYqJa.jpg"
                alt=""
              />
              <h1 className="text-xl font-bold">Spain</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 lg:px-32 mx-2">
  <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
    {packages.map((pkg, index) => (
      <div
        key={index}
        className="relative bg-gradient-to-b from-green-200 to-green-400 text-white rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-3 duration-300 overflow-hidden"
      >
        <div className="relative">
          <img
            className="rounded-t-lg h-72 w-full object-cover transition-transform transform hover:scale-105 duration-300"
            src={pkg.imgURL}
            alt={pkg.name}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#00000099] to-transparent rounded-t-lg"></div>
        </div>

        <div className="p-4 flex flex-col gap-3">
          <h2 className="font-bold text-primary lg:text-xl">{pkg.name}</h2>

          {/* Toggle Button (Arrow) */}
          <button
            className="mt-4 text-primary font-bold flex items-center gap-2"
            onClick={() => togglePackageDetails(index)}
          >
            {activePackage === index ? (
              <>
                <span>&#9650;</span> {/* Up arrow (▲) */}
              </>
            ) : (
              <>
                <span>&#9660;</span> {/* Down arrow (▼) */}
              </>
            )}
          </button>

          {/* Conditionally Render Extra Info */}
          {activePackage === index && (
            <div className="mt-4">
              <div className="flex gap-2">
                <h3 className="border-r-2 border-primary pr-2">{pkg.des1}</h3>
                <h3 className="border-r-2 border-primary pr-2">{pkg.des2}</h3>
                <h3 className="border-r-2 border-primary pr-2">{pkg.des3}</h3>
              </div>
              <div className="flex gap-4">
                <h3 className="flex gap-1 items-center text-white mt-1">
                  <span className="text-primary"><Plane /></span> {pkg.flight} Flights
                </h3>
                <h3 className="flex gap-1 items-center">
                  <span className="text-primary"><BedDouble /></span> {pkg.hotel} Hotel
                </h3>
                <h3 className="flex gap-1 items-center">
                  <span className="text-primary"><Boxes /></span> {pkg.activities}+ Activities
                </h3>
              </div>
              <h4 className="text-lg">
                From Rs.{" "}
                <span className="text-primary font-bold">{pkg.price}</span>
              </h4>
              <button className="border-2 border-primary text-primary px-4 py-1 rounded-lg font-bold hover:bg-primary hover:text-[#FFFFFF] transition-colors duration-300">
                Book Now
              </button>
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
</section>


      <section id="tour-slider" className="py-8">
        {/* <div className="lg:mx-40 mx-2 flex flex-col gap-2">
          <h1 className="lg:text-4xl text-2xl font-bold"><span className="text-blue-700 font-bold">Explore</span> The Hidden Gems</h1>
          <h2 className="lg:text-xl text-lg">Tap into the untapped tourist spots for amazing vacations.</h2>
        </div> */}
        {/* <div className="lg:w-[80%] lg:mx-auto">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper rounded-lg !pt-3 lg:!pt-5"
          >
            {/* {hiddenGems.map((val) => (
              <SwiperSlide className="rounded-lg">
                <div className="rounded-lg text-white">
                  <img
                    className="w-[100%] h-[350px] object-cover rounded-lg before:content before:w-full before:h-full "
                    src={val.imgUrls}
                    alt={val.name}
                  />
                  <div className="absolute lg:bottom-10 bottom-8 left-3 lg:left-8 flex flex-col items-center gap-4">
                    <h2 className="lg:text-5xl text-3xl before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-gradient-to-r before:from-blue-700 before:to-blue-950 relative inline-block">
                      <span className="relative font-primaryF">
                        {val.title}
                      </span>
                    </h2>
                    <h1 className="lg:text-4xl text-2xl font-bold before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-gradient-to-r before:from-blue-700 before:to-blue-950 relative inline-block">
                      <span className="relative">{val.name}</span>
                    </h1>
                    <h3 className="lg:text-2xl text-sm before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-gradient-to-r before:from-blue-700 before:to-blue-950 relative inline-block">
                      <span className="relative">
                        Starting From Rs.{val.price}
                      </span>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))} */}

           
          {/* </Swiper> */}
        {/* </div>  */}
      </section>
    </div>
  );
};

export default Tours; 
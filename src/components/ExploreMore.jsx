// ExploreMore.jsx
import TourCard from "./TourCard";
import Image1 from "../assets/homehero2.png"; // Replace with actual path to the placeholder image

const cafes = [
  {
    title: "Guatavita and Salt Cathedral - Group tour and daily departure",
    rating: 377,
    price: "₹9,485",
    image: Image1,
  },
  {
    title: "Private Tour City Tour Bogota + Monserrate (+5Hrs)",
    rating: 599,
    price: "₹5,171",
    image: Image1,
  },
  {
    title: "La Candelaria, Monserrate and Museums Bogotá Private City Tour",
    rating: 1071,
    price: "₹5,777",
    image: Image1,
  },
];

const temples = [
  {
    title: "Sun Temple Tour",
    rating: 289,
    price: "₹8,400",
    image: Image1,
  },
  {
    title: "Temple of the Sacred Heart - Full Day Tour",
    rating: 325,
    price: "₹7,950",
    image: Image1,
  },
  {
    title: "Guided Temple Visit with Historical Insights",
    rating: 450,
    price: "₹6,200",
    image: Image1,
  },
];

const adventures = [
  {
    title: "Mountain Trek Adventure",
    rating: 522,
    price: "₹10,000",
    image: Image1,
  },
  {
    title: "River Rafting Expedition",
    rating: 400,
    price: "₹9,200",
    image: Image1,
  },
  {
    title: "Paragliding over Valleys",
    rating: 320,
    price: "₹15,000",
    image: Image1,
  },
];

const ExploreMore = () => (
  <div className="container bg-gradient-to-r from-[#43A181] via-[#ffffff] to-[#43A181] w-[100vw] min-h-[100vh] px-4 py-32 text-center ">
    <h1 className="text-4xl font-extrabold text-[#091F3C] my-6">
      Rishikesh Is Great For
    </h1>

    {/* Cultural Cafes Section */}
    <h2 className="text-2xl font-semibold text-[#3C8D99] mb-4">
      Cultural Cafes
    </h2>
    <div className="flex flex-wrap justify-center gap-6 mb-8">
      {cafes.map((cafe, index) => (
        <TourCard key={`cafe-${index}`} {...cafe} />
      ))}
    </div>

    {/* Temples Section */}
    <h2 className="text-2xl font-semibold text-[#3C8D99] mb-4 mt-10">
      Temples
    </h2>
    <div className="flex flex-wrap justify-center gap-6 mb-8">
      {temples.map((temple, index) => (
        <TourCard key={`temple-${index}`} {...temple} />
      ))}
    </div>

    {/* Adventures Section */}
    <h2 className="text-2xl font-semibold text-[#3C8D99] mb-4 mt-10">
      Adventures
    </h2>
    <div className="flex flex-wrap justify-center gap-6 mb-8">
      {adventures.map((adventure, index) => (
        <TourCard key={`adventure-${index}`} {...adventure} />
      ))}
    </div>
  </div>
);

export default ExploreMore;

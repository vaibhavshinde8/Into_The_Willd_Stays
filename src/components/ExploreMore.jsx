// ExploreMore.jsx
import TourCard from "./TourCard";
import Image1 from "../assets/homehero2.png"; // Replace with actual path to the placeholder image
import Amenities from './Amenities';
import Property1 from "./property-pages/Property1";

const cafes = [
  {
    title: "Guatavita and Salt Cathedral",
    description:
      "A scenic tour exploring the enchanting Guatavita lake and historic Salt Cathedral.",
    image: Image1,
  },
  {
    title: "Private Bogota City Tour + Monserrate",
    description:
      "An exclusive tour covering Bogota's highlights including Monserrate mountain.",
    image: Image1,
  },
  {
    title: "La Candelaria and Museums",
    description: "Discover Bogota’s cultural gems on this private city tour.",
    image: Image1,
  },
];

const temples = [
  {
    title: "Sun Temple Tour",
    description:
      "Visit the ancient Sun Temple and learn about its historical significance.",
    image: Image1,
  },
  {
    title: "Temple of the Sacred Heart",
    description:
      "A full-day tour to explore the magnificent Sacred Heart Temple.",
    image: Image1,
  },
  {
    title: "Guided Temple Visit",
    description:
      "A comprehensive tour offering historical insights into ancient temples.",
    image: Image1,
  },
];

const adventures = [
  {
    title: "Mountain Trek Adventure",
    description:
      "A thrilling mountain trek offering breathtaking views and a challenging hike.",
    image: Image1,
  },
  {
    title: "River Rafting Expedition",
    description:
      "Experience the rush of river rafting in beautiful surroundings.",
    image: Image1,
  },
  {
    title: "Paragliding over Valleys",
    description:
      "Soar over stunning valleys in this unforgettable paragliding experience.",
    image: Image1,
  },
];


const ExploreMore = () => (
  <div className="container  w-[100vw] min-h-[100vh] px-4 py-32 text-center ">
  <Amenities/>
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

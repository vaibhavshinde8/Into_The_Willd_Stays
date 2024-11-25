import { createContext, useContext } from "react";
import Image1 from "../assets/itw/IMG-20240530-WA0015.jpg";
import Image2 from "../assets/pineandtails/pnt1.jpg"; 
import Image3 from "../assets/majuli/majuli1.jpeg";
import Image4 from "../assets/SunandSandGoa/52PM.jpeg";

const AppContext = createContext();




  export const AppProvider = ({ children }) => {

   const blogs = [
     {
       id: 1,
       title: "Exploring the Wilderness: Into the Wild's Unique Stays",
       category: "Travel Guide",
       date: "22 Nov",
       image: Image3 ,
       content: [
         "Into the Wild offers a unique blend of luxury and adventure through its exclusive properties. Nestled in nature’s lap, these accommodations redefine travel experiences by bringing travelers closer to the wilderness while ensuring modern comforts.",
         "Properties like our serene stays in Rishikesh provide breathtaking views of the Ganges, offering a spiritual escape with the charm of riverside living. Whether you seek solitude or adventure, our carefully curated locations cater to every traveler’s needs.",
         "Experience activities like yoga retreats, rafting, and mountain treks, while relaxing in tastefully designed interiors that connect you to the local culture.",
       ],
     },
     {
       id: 2,
       title: "Top Attractions Around Into the Wild's Properties",
       category: "Travel Tips",
       date: "21 Nov",
       image: Image4,
       content: [
         "Exploring the surroundings of Into the Wild’s properties is an adventure in itself. In Rishikesh, immerse yourself in the thrill of river rafting, explore iconic landmarks like Laxman Jhula, or enjoy the serene Ganga Aarti at Triveni Ghat.",
         "Mussoorie, also known as 'The Queen of Hills,' boasts scenic spots like Kempty Falls and Gun Hill, perfect for nature lovers and photographers alike. The nearby Dehradun properties offer easy access to the city's rich heritage, including the famous Robber's Cave and Sahastradhara.",
         "Our stays are thoughtfully located to offer a balance of peace and proximity to popular attractions, making them perfect for explorers and families alike.",
       ],
     },
     {
       id: 3,
       title: "Why Choose Into the Wild for Your Next Getaway",
       category: "Travel Inspiration",
       date: "20 Nov",
       image: Image2,
       content: [
         "Into the Wild isn’t just a destination; it’s an experience. Our properties combine the charm of nature with unmatched hospitality to create unforgettable memories for every traveler.",
         "Choose us for our meticulously maintained properties, each offering unique features like eco-friendly design, locally sourced decor, and proximity to nature’s wonders. Whether it’s the calming vibes of Mussoorie’s misty hills or the adventurous spirit of Rishikesh, our stays offer something for everyone.",
         "With seamless booking, personalized service, and an emphasis on sustainability, we ensure that your getaway with Into the Wild is one to cherish.",
       ],
     },
   ];

    

    return (
      <AppContext.Provider value={{ blogs }}>{children}</AppContext.Provider>
    );
  };

export const useAppContext = () => useContext(AppContext);

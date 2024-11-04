import HomeHero from "../components/HomeHero";
import LocationSection from "../components/LocationSection";
import GuestExperience from "../components/GuestExperience";
import MostViewedProperties from "../components/MostViewedProperties";
import WhyITW from './../components/WhyITW';

const Home = () => {
  return (
    <>
      <HomeHero />
      <LocationSection />
      <GuestExperience />
      <MostViewedProperties />
      <WhyITW/>
    </>
  );
};

export default Home;

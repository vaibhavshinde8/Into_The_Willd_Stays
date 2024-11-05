import HomeHero from "../components/HomeHero";
import LocationSection from "../components/LocationSection";
import GuestExperience from "../components/GuestExperience";
import MostViewedProperties from "../components/MostViewedProperties";
import WhyITW from './../components/WhyITW';
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <>
      <HomeHero />
      <LocationSection />
      <GuestExperience />
      <MostViewedProperties />
      <WhyITW/>
      <Testimonials/>
    </>
  );
};

export default Home;

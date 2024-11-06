import HomeHero from "../components/HomeHero";
import LocationSection from "../components/LocationSection";
import GuestExperience from "../components/GuestExperience";
import MostViewedProperties from "../components/MostViewedProperties";
import WhyITW from './../components/WhyITW';
import GalleryAndReviews from "../components/GalleryAndReviews";
import Testimonials from "../components/Testimonials";
import PropertiesBanner from './../components/PropertiesBanner';

const Home = () => {
  return (
    <>
      <HomeHero />
      <LocationSection />
      <GuestExperience />
      <MostViewedProperties />
      <GalleryAndReviews/>
      <WhyITW/>
      <Testimonials/>
      <PropertiesBanner/>
    </>
  );
};

export default Home;

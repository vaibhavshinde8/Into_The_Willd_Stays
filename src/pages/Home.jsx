import HomeHero from "../components/HomeHero";
import LocationSection from "../components/LocationSection";
import GuestExperience from "../components/GuestExperience";
import MostViewedProperties from "../components/MostViewedProperties";
import GalleryAndReviews from "../components/GalleryAndReviews";
import Testimonials from "../components/Testimonials";
import PropertiesBanner from "./../components/PropertiesBanner";
import InstagramGallery from "../components/InstagramGallery";
import BlogSection from "../components/BlogSection";

const Home = () => {
  return (
    <>
      <HomeHero />
      <LocationSection />
      <GuestExperience />
      <MostViewedProperties />
      <GalleryAndReviews />
      <InstagramGallery />
      <Testimonials />
      <BlogSection/>
      <PropertiesBanner />
    </>
  );
};

export default Home;

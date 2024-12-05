import { useEffect } from "react";
import HomeHero from "../components/HomeHero";
import LocationSection from "../components/LocationSection";
import GuestExperience from "../components/GuestExperience";
import MostViewedProperties from "../components/MostViewedProperties";
import GalleryAndReviews from "../components/GalleryAndReviews";
import Testimonials from "../components/Testimonials";
import PropertiesBanner from "./../components/PropertiesBanner";
import InstagramGallery from "../components/InstagramGallery";
import BlogSection from "../components/BlogSection";
import { googleSignup } from '../api';
import { toast } from 'react-toastify';
const Home = () => {
  useEffect(() => {
    const token=localStorage.getItem("token");
    if (window.google && !token) {
      window.google.accounts.id.initialize({
        client_id: "134448973901-5i5v9air5pmirrcelodj5uhqoo707ccb.apps.googleusercontent.com",
        callback: async (response) => {
          try {
            const res = await googleSignup(response);
            toast.success(res.data.message);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            window.location.reload(); 
          } catch (error) {
            toast.error("Login failed.");
          }
        },
      });
      window.google.accounts.id.prompt(); 
    }
  }, []); 
  return (
    <>
      <HomeHero />
      <LocationSection />
      <GuestExperience />
      <MostViewedProperties />
      <GalleryAndReviews />
      <Testimonials />
      <BlogSection/>
      <InstagramGallery />
      <PropertiesBanner />
    </>
  );
};

export default Home;

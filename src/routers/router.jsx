import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Properties from "../pages/Properties"; // Make sure this path is correct
import Tours from "../pages/Tours";
// import ExploreMore from '../components/ExploreMore';
// import Amenities from "./../components/Amenities";
import ContactUs from "../pages/ContactUs";
import AboutUs from "./../pages/AboutUs";
import Blog from "../pages/Blog";
import Login from "./../components/Login";
import Register from "./../components/Register";
import AdminPanel from "./../Admin/AdminPanel";
// import ExploreMorePNT from "./../components/ExploreMorePNT";
import ExploreMoreITW from "./../components/ExploreMoreITW";
// import ExploreMoreMNM from "./../components/ExploreMoreMNM";
// import ExploreMoreSAS from "./../components/ExploreMoreSAS";
import { BlogPost } from "./../components/BlogPost";
import UserProfile from './../components/UserProfile';
import Events from "../pages/Events";
import EventDetail from "../pages/EventDetail";
import ToursDetail from "../pages/ToursDetail";

const blogs = [];

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/properties", // New route for the Properties page
        element: <Properties />,
      },
      {
        path: "/tours",
        element: <Tours />,
      },
      {
        path: "/tours/:id",
        element: <ToursDetail />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/property/:id",
        element: <ExploreMoreITW />,
      },
      // {
      //   path: "/amenities",
      //   element: <Amenities />,
      // },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/admin",
        element: <AdminPanel />,
      },
      {
        path: "/user-profile",
        element: <UserProfile />,
      },
      {
        path: "/blog/:id",
        element: <BlogPost blogs={blogs} />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/events/:id",
        element: <EventDetail />
      },
    ],
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Properties from "../pages/Properties"; // Make sure this path is correct
import Tours from "../pages/Tours";
import ExploreMore from '../components/ExploreMore';
import Amenities from './../components/Amenities';

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
        path: "/exploremore",
        element: <ExploreMore />,
      },
      {
        path: "/amenities",
        element: <Amenities />,
      },
    ],
  },
]);

export default router;

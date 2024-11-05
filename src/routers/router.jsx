import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Properties from "../pages/Properties"; // Make sure this path is correct

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
    ],
  },
]);

export default router;

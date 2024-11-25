import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </AppProvider>
  );
}

export default App;

import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AppProvider } from "./context/AppContext";
import FloatingWhatsappIcon from "./components/FloatingWhatsappIcon";

function App() {
  return (
    <AppProvider>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
      <FloatingWhatsappIcon/>
    </AppProvider>
  );
}

export default App;

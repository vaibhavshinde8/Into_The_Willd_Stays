import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AppProvider } from "./context/AppContext";
import FloatingWhatsappIcon from "./components/FloatingWhatsappIcon";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <AppProvider>
      <GoogleOAuthProvider clientId="583840559736-ahcbg2qkaqtmcl34tg8f1m5b1fip0nb3.apps.googleusercontent.com">
        <Navbar />
        <div>
          <Outlet />
        </div>
        <Footer />
      </GoogleOAuthProvider>
      <FloatingWhatsappIcon />
    </AppProvider>
  );
}

export default App;

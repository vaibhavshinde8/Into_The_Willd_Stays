import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AppProvider } from "./context/AppContext";
import FloatingWhatsappIcon from "./components/FloatingWhatsappIcon";
import { GoogleOAuthProvider} from '@react-oauth/google';


function App() {
  return (
    <AppProvider>
      <GoogleOAuthProvider clientId="134448973901-5i5v9air5pmirrcelodj5uhqoo707ccb.apps.googleusercontent.com">
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
      </GoogleOAuthProvider>
      <FloatingWhatsappIcon/>
    </AppProvider>
  );
}

export default App;

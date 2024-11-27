import { Facebook, Instagram, Phone, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const TopHeader = () => {
  return (
    <div className="bg-[#000000] text-[#D1D1D1] text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
        {/* Left Side: Contact Info */}
        <div className="flex flex-col sm:flex-row items-center sm:space-x-6 space-y-2 sm:space-y-0 text-center sm:text-left">
          <div className="flex items-center space-x-2">
            <Phone size={16} />
            <span>+919761966485, +919958838557</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail size={16} />
            <a
              href="mailto:intothewildstays@gmail.com"
              className="hover:text-[#F77706] transition-colors"
            >
              intothewildstays@gmail.com
            </a>
          </div>
        </div>

        {/* Right Side: Social Media Icons */}
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com/profile.php?id=61557269590045"
            className="text-[#F77706] hover:text-white hover:scale-110 duration-300 ease-in-out transition-colors"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://www.instagram.com/intothewildstays/profilecard/?igsh=cGt4dTRvenNvZ25h"
            className="text-[#E4405F] hover:text-white hover:scale-110 duration-300 ease-in-out transition-colors"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://wa.me/9958838557"
            className="text-[#166924] hover:text-white hover:scale-110 duration-300 ease-in-out transition-colors"
          >
            <FaWhatsapp size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;

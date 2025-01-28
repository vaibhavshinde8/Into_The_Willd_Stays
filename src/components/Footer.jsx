import {
  Facebook,
  // Twitter,
  Instagram,
  Phone,
  Mail,
  MapPin,
  CreditCard,
  Shield,
  Clock,
} from "lucide-react";
import footerImg from "../assets/footer-img.png";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const instagramGradient = {
    background:
      "linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45)",
  };
  return (
    <footer className="bg-[#000000] text-[#D1D1D1]">
      {/* Main Footer Content */}
      <div className="relative lg:bottom-[13px] bottom-1">
        <img className="invert object-cover" src={footerImg} alt="" />
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              IntoTheWildsStays
            </h3>
            <p className="text-sm mb-4">
              Experience luxury and comfort at our premium locations. <br />
              Book your perfect stay with us today.
            </p>
            <div className="flex space-x-4 items-center">
              <a
                href="https://www.facebook.com/profile.php?id=61557269590045"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#214eca] hover:text-[#214eca] hover:scale-110 duration-300 ease-in-out transition-colors"
              >
                <img width="30" height="30" src="https://img.icons8.com/tiny-color/50/facebook-new.png" alt="facebook-new"/>
              </a>
              {/* <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1DA1F2] hover:text-white hover:scale-110 duration-300 ease-in-out transition-colors"
              >
                <Twitter size={25} />
              </a> */}

              <div
                className="w-8 h-8 rounded-full shadow-lg transition-transform hover:scale-105 flex items-center justify-center"
                style={instagramGradient}
              >
                <a
                  href="https://www.instagram.com/intothewildstays/profilecard/?igsh=cGt4dTRvenNvZ25h"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <Instagram size={22} />
                </a>
              </div>
              <a
                href="https://wa.me/9761966485"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1c9e18] hover:text-[#1c9e18] hover:scale-110 duration-300 ease-in-out transition-colors"
              >
               <img width="36" height="36" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp--v1"/>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/blog"
                  className="hover:text-[#F77706] transition-colors"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="/about-us"
                  className="hover:text-[#F77706] transition-colors"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="/contact-us"
                  className="hover:text-[#F77706] transition-colors"
                >
                  Contact Us
                </a>
              </li>
              {/* <li>
                <a href="#" className="hover:text-[#F77706] transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#F77706] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#F77706] transition-colors">
                  Terms of Service
                </a>
              </li> */}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <Phone size={16} />
                  <a href="tel:+919761966485" className="mr-2 hover:underline">
                    +91 97619 66485,
                  </a>
                  <a href="tel:+919958838557" className="hover:underline">
                    +91 99588 38557
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} />
                <a href="mailto:intothewildstays@gmail.com">
                  intothewildstays@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={16} />
                <a
                  href="https://maps.app.goo.gl/CYRuJceg1CpEw5nR7"
                  target="_blank"
                >
                  <span>
                    Into The Wild Stays
                    <br />
                    near Eco Park Dhanolti
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div>
            <h3 className="text-white md:text-white text-lg font-semibold mb-4">
              Why Choose Us
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center space-x-3">
                <CreditCard size={16} />
                <span>Secure Payment Options</span>
              </li>
              <li className="flex items-center space-x-3">
                <Shield size={16} />
                <span>Best Price Guarantee</span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock size={16} />
                <span>24/7 Customer Support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1E2A47]">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm">
              © 2025 IntoTheWildsStays. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-[#F77706]">
              Designed and Developed by House Of Marktech
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

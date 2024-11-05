import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
  CreditCard,
  Shield,
  Clock,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              LuxStay Hotels
            </h3>
            <p className="text-sm mb-4">
              Experience luxury and comfort at our premium locations worldwide.
              Book your perfect stay with us today.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin size={20} />
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
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>

              <li>
                {" "}
                <a href="#" className="hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center space-x-3">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} />
                <span>bookings@luxstay.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={16} />
                <span>
                  123 Luxury Ave, Suite 100
                  <br />
                  New York, NY 10001
                </span>
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
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
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm">
              © 2024 LuxStay Hotels. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              Designed and Developed by House Of Marktech
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useTheme } from "../context/ThemeContext";
import { Facebook, Instagram, Mail, MapPin } from "lucide-react";
import logo from "../assets/logo.jpg"; // Replace with your actual logo

const Footer = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const bg = isDark ? "bg-zinc-950" : "bg-gray-100";
  const text = isDark ? "text-gray-300" : "text-gray-700";
  const heading = isDark ? "text-white" : "text-black";

  return (
    <footer className={`w-full ${bg} ${text} py-12 px-6`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo + Intro */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="TT Customs Logo"
              className="w-10 h-10 rounded-full"
            />
            <span className="text-xl font-bold uppercase text-red-600">
              TT Customs
            </span>
          </div>
          <p className="text-sm">
            Premium products and services for your automotive needs — from
            performance upgrades to sleek customizations.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className={`text-lg font-semibold mb-3 ${heading}`}>
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-red-600 transition">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-red-600 transition">
              <a href="#">Products</a>
            </li>
            <li className="hover:text-red-600 transition">
              <a href="#">Services</a>
            </li>
            <li className="hover:text-red-600 transition">
              <a href="#">Bookings</a>
            </li>
            <li className="hover:text-red-600 transition">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className={`text-lg font-semibold mb-3 ${heading}`}>
            Get In Touch
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-red-600" />
              support@ttcustoms.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-red-600" />
              Manchester, UK
            </li>
            <li className="flex items-center gap-3 mt-2">
              <a href="#" className="hover:text-red-600 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-red-600 transition">
                <Facebook className="w-5 h-5" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t mt-10 pt-6 text-xs text-center text-gray-500">
        © {new Date().getFullYear()} TT Customs. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

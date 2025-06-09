import { useState } from "react";
import { Menu, X, Home, Package, Wrench, LayoutDashboard } from "lucide-react";
import ThemeToggle from "./ui/ThemeToggle";
import { useTheme } from "../context/ThemeContext";
import logo from "../assets/TT_CUSTOMS_LOGO.jpg";
import { motion, AnimatePresence } from "framer-motion";

// Fake auth status (replace with real logic later)
const isAuthenticated = false;

const navLinks = [
  { label: "Home", href: "/", icon: <Home className="w-4 h-4" /> },
  {
    label: "Products",
    href: "/products",
    icon: <Package className="w-4 h-4" />,
  },
  {
    label: "Services",
    href: "/services",
    icon: <Wrench className="w-4 h-4" />,
  },
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: <LayoutDashboard className="w-4 h-4" />,
    authOnly: true,
  },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const bgColor = isDark ? "bg-zinc-900" : "bg-white";
  const textColor = isDark ? "text-white" : "text-black";
  const hoverColor = isDark ? "hover:text-blue-400" : "hover:text-red-600";

  return (
    <header
      className={`shadow-md transition-colors duration-300 ${bgColor} ${textColor}`}
    >
      {/* Top bar container */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Left: Logo and Brand */}
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-xl font-bold tracking-wider uppercase">
            Top-Tier <span className="text-red-600">Customs</span>
          </span>
        </div>

        {/* Center: Nav Links */}
        <nav className="hidden md:flex flex-1 justify-center space-x-6 items-center">
          {navLinks.map((link) => {
            if (link.authOnly && !isAuthenticated) return null;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`flex items-center gap-2 text-sm font-medium transition-colors ${hoverColor}`}
              >
                {link.icon}
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right: Theme Toggle */}
        <div className="hidden md:block ml-auto">
          <ThemeToggle />
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden ml-2"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className={`md:hidden overflow-hidden px-4 pb-4 border-t ${bgColor} ${textColor}`}
          >
            {navLinks.map((link) => {
              if (link.authOnly && !isAuthenticated) return null;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-2 py-2 text-sm border-b border-zinc-200 transition-colors ${hoverColor}`}
                >
                  {link.icon}
                  {link.label}
                </a>
              );
            })}
            <div className="mt-4">
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

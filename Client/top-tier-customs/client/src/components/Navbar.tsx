// // import { useState } from "react";
// // import { Menu, X, Home, Package, Wrench, LayoutDashboard } from "lucide-react";
// // import ThemeToggle from "./ui/ThemeToggle";
// // import { useTheme } from "../context/ThemeContext";
// // import logo from "../assets/logo.jpg";
// // import { motion, AnimatePresence } from "framer-motion";

// // // Replace this with your actual auth logic
// // const isAuthenticated = false;

// // const navLinks = [
// //   { label: "Home", href: "/", icon: <Home className="w-4 h-4" /> },
// //   {
// //     label: "Products",
// //     href: "/products",
// //     icon: <Package className="w-4 h-4" />,
// //   },
// //   {
// //     label: "Services",
// //     href: "/services",
// //     icon: <Wrench className="w-4 h-4" />,
// //   },
// //   {
// //     label: "Dashboard",
// //     href: "/dashboard",
// //     icon: <LayoutDashboard className="w-4 h-4" />,
// //     authOnly: true,
// //   },
// // ];

// // const Navbar = () => {
// //   const [mobileOpen, setMobileOpen] = useState(false);
// //   const { theme } = useTheme();
// //   const isDark = theme === "dark";

// //   const bgColor = isDark ? "bg-zinc-900 text-white" : "bg-white text-black";
// //   const hoverColor = isDark ? "hover:text-blue-400" : "hover:text-red-600";

// //   return (
// //     <motion.header
// //       className={`shadow-md transition-colors duration-300 ${bgColor}`}
// //       initial={{ opacity: 0, y: -24 }}
// //       animate={{ opacity: 1, y: 0 }}
// //       transition={{ duration: 0.5, ease: "easeOut" }}
// //     >
// //       {/* Top bar container */}
// //       <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
// //         {/* Left: Logo and Brand */}
// //         <div className="flex items-center space-x-3">
// //           <img
// //             src={logo}
// //             alt="Logo"
// //             className="w-10 h-10 rounded-full object-cover"
// //           />
// //           <span className="text-xl font-bold tracking-wider uppercase">
// //             Top-Tier <span className="text-red-600">Customs</span>
// //           </span>
// //         </div>

// //         {/* Center: Nav Links (Desktop) */}
// //         <nav className="hidden md:flex flex-1 justify-center space-x-6 items-center">
// //           {navLinks.map((link) => {
// //             if (link.authOnly && !isAuthenticated) return null;
// //             return (
// //               <a
// //                 key={link.href}
// //                 href={link.href}
// //                 className={`flex items-center gap-2 text-sm font-medium transition-colors ${hoverColor}`}
// //               >
// //                 {link.icon}
// //                 {link.label}
// //               </a>
// //             );
// //           })}
// //         </nav>

// //         {/* Right: Theme Toggle */}
// //         <div className="hidden md:block ml-auto">
// //           <ThemeToggle />
// //         </div>

// //         {/* Mobile Menu Button */}
// //         <button
// //           onClick={() => setMobileOpen(!mobileOpen)}
// //           className="md:hidden ml-2"
// //         >
// //           {mobileOpen ? <X size={24} /> : <Menu size={24} />}
// //         </button>
// //       </div>

// //       {/* Mobile Menu Dropdown */}
// //       <AnimatePresence>
// //         {mobileOpen && (
// //           <motion.div
// //             initial={{ height: 0 }}
// //             animate={{ height: "auto" }}
// //             exit={{ height: 0 }}
// //             className={`md:hidden overflow-hidden px-4 pb-4 border-t ${bgColor}`}
// //           >
// //             {navLinks.map((link) => {
// //               if (link.authOnly && !isAuthenticated) return null;
// //               return (
// //                 <a
// //                   key={link.href}
// //                   href={link.href}
// //                   className={`flex items-center gap-2 py-2 text-sm border-b border-zinc-200 transition-colors ${hoverColor}`}
// //                 >
// //                   {link.icon}
// //                   {link.label}
// //                 </a>
// //               );
// //             })}
// //             <div className="mt-4">
// //               <ThemeToggle />
// //             </div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </motion.header>
// //   );
// // };

// // export default Navbar;

// // import { useState, useEffect } from "react";
// // import { Link, useLocation, useNavigate } from "react-router-dom";
// // import { Menu, X, Sun, Moon, ShoppingCart, User, LogOut } from "lucide-react";
// // import logo from "../assets/logo.jpg";
// // import { useTheme } from "../context/ThemeContext";
// // import { useCart } from "../context/CartContext";
// // import { useAuth } from "../context/AuthContext";

// // const Navbar = () => {
// //   const [menuOpen, setMenuOpen] = useState(false);
// //   const location = useLocation();
// //   const navigate = useNavigate();

// //   const { theme, toggleTheme } = useTheme();
// //   const { toggleCart, cart } = useCart();

// //   // const [isAuthenticated, setIsAuthenticated] = useState(false);

// //   const { user, logout } = useAuth();

// //   useEffect(() => {
// //     setMenuOpen(false);
// //   }, [location.pathname]);

// //   return (
// //     <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/60 backdrop-blur-xs border-b border-zinc-300 dark:border-zinc-700 transition-all">
// //       <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
// //         {/* Left - Logo & Name */}
// //         <div className="flex items-center gap-2">
// //           <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
// //           <Link
// //             to="/"
// //             className="text-xl font-extrabold tracking-widest text-black dark:text-white"
// //           >
// //             TOP-TIER CUSTOMS
// //           </Link>
// //         </div>

// //         {/* Center - Nav Links */}
// //         <ul className="hidden md:flex gap-6 items-center font-semibold text-sm uppercase text-zinc-800 dark:text-zinc-200">
// //           <li>
// //             <Link
// //               to="/"
// //               className={`hover:text-red-500 transition ${
// //                 location.pathname === "/" ? "text-red-500" : ""
// //               }`}
// //             >
// //               Home
// //             </Link>
// //           </li>
// //           <li>
// //             <Link
// //               to="/products"
// //               className={`hover:text-red-500 transition ${
// //                 location.pathname === "/products" ? "text-red-500" : ""
// //               }`}
// //             >
// //               Products
// //             </Link>
// //           </li>
// //           <li>
// //             <Link
// //               to="/services"
// //               className={`hover:text-red-500 transition ${
// //                 location.pathname === "/services" ? "text-red-500" : ""
// //               }`}
// //             >
// //               Services
// //             </Link>
// //           </li>
// //           <li>
// //             <Link
// //               to="/about"
// //               className={`hover:text-red-500 transition ${
// //                 location.pathname === "/about" ? "text-red-500" : ""
// //               }`}
// //             >
// //               About
// //             </Link>
// //           </li>
// //           <li>
// //             <Link
// //               to="/testimonials"
// //               className={`hover:text-red-500 transition ${
// //                 location.pathname === "/testimonials" ? "text-red-500" : ""
// //               }`}
// //             >
// //               Testimonials
// //             </Link>
// //           </li>
// //           {user && (
// //             <li>
// //               <Link
// //                 to="/dashboard"
// //                 className={`hover:text-red-500 transition ${
// //                   location.pathname === "/dashboard" ? "text-red-500" : ""
// //                 }`}
// //               >
// //                 Dashboard
// //               </Link>
// //             </li>
// //           )}
// //         </ul>

// //         {/* Right - Cart + Theme Toggle + Mobile Menu */}
// //         <div className="flex items-center gap-4">
// //           {/* Cart Icon */}
// //           {user && (
// //             <button
// //               onClick={toggleCart}
// //               className="relative p-2 rounded-full border border-emerald-500 hover:border-rose-500 transition"
// //               title="View Cart"
// //             >
// //               <ShoppingCart className="w-5 h-5" />
// //               {cart.length > 0 && (
// //                 <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
// //                   {cart.length}
// //                 </span>
// //               )}
// //             </button>
// //           )}

// //           {/* Theme Toggle */}
// //           <button
// //             onClick={toggleTheme}
// //             className="p-2 rounded-full border border-amber-500 hover:border-rose-500 transition"
// //             title="Toggle Theme"
// //           >
// //             {theme === "dark" ? (
// //               <Sun className="w-4 h-4 text-yellow-300" />
// //             ) : (
// //               <Moon className="w-4 h-4 text-gray-800" />
// //             )}
// //           </button>

// //           {/* Auth Button */}
// //           {user ? (
// //             <button
// //               onClick={() => logout()}
// //               className="p-2 border border-rose-500 rounded-full hover:bg-rose-500 transition-all"
// //             >
// //               <LogOut className="w-4 h-4 text-rose-500 hover:text-zinc-100 transition-all" />
// //             </button>
// //           ) : (
// //             <button
// //               onClick={() => navigate("/login")}
// //               className="p-2 rounded-full border border-gray-400 hover:border-sky-500 transition"
// //             >
// //               <User className="w-4 h-4 text-sky-500" />
// //             </button>
// //           )}

// //           {/* Hamburger */}
// //           <button
// //             className="md:hidden focus:outline-none"
// //             onClick={() => setMenuOpen(!menuOpen)}
// //           >
// //             {menuOpen ? (
// //               <X className="w-6 h-6" />
// //             ) : (
// //               <Menu className="w-6 h-6" />
// //             )}
// //           </button>
// //         </div>
// //       </nav>

// //       {/* Mobile Menu */}
// //       {menuOpen && (
// //         <div className="md:hidden bg-white dark:bg-black px-6 py-4 border-t border-zinc-200 dark:border-zinc-700">
// //           <ul className="flex flex-col gap-4 text-sm font-semibold text-zinc-800 dark:text-zinc-200">
// //             <li>
// //               <Link to="/" onClick={() => setMenuOpen(false)}>
// //                 Home
// //               </Link>
// //             </li>
// //             <li>
// //               <Link to="/products" onClick={() => setMenuOpen(false)}>
// //                 Products
// //               </Link>
// //             </li>
// //             <li>
// //               <Link to="/services" onClick={() => setMenuOpen(false)}>
// //                 Services
// //               </Link>
// //             </li>
// //             <li>
// //               <Link to="/about" onClick={() => setMenuOpen(false)}>
// //                 About
// //               </Link>
// //             </li>
// //             <li>
// //               <Link to="/testimonials" onClick={() => setMenuOpen(false)}>
// //                 Testimonials
// //               </Link>
// //             </li>
// //             {user && (
// //               <li>
// //                 <Link to="/dashboard" onClick={() => setMenuOpen(false)}>
// //                   Dashboard
// //                 </Link>
// //               </li>
// //             )}
// //           </ul>
// //         </div>
// //       )}
// //     </header>
// //   );
// // };

// // export default Navbar;

// import { useState, useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import {
//   Menu,
//   X,
//   Sun,
//   Moon,
//   ShoppingCart,
//   User,
//   LogOut,
//   Home,
//   Package,
//   Wrench,
//   Info,
//   Users,
//   LayoutDashboard,
// } from "lucide-react";
// import logo from "../assets/logo.jpg";
// import { useTheme } from "../context/ThemeContext";
// import { useCart } from "../context/CartContext";
// import { useAuth } from "../context/AuthContext";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();

//   const { theme, toggleTheme } = useTheme();
//   const { toggleCart, cart } = useCart();
//   const { user, logout } = useAuth();

//   useEffect(() => {
//     setMenuOpen(false);
//   }, [location.pathname]);

//   const navLinks = [
//     { label: "Home", href: "/", icon: <Home className="w-5 h-5" /> },
//     {
//       label: "Products",
//       href: "/products",
//       icon: <Package className="w-5 h-5" />,
//     },
//     {
//       label: "Services",
//       href: "/services",
//       icon: <Wrench className="w-5 h-5" />,
//     },
//     { label: "About", href: "/about", icon: <Info className="w-5 h-5" /> },
//     {
//       label: "Testimonials",
//       href: "/testimonials",
//       icon: <Users className="w-5 h-5" />,
//     },
//     user && {
//       label: "Dashboard",
//       href: "/dashboard",
//       icon: <LayoutDashboard className="w-5 h-5" />,
//     },
//   ].filter(Boolean);

//   return (
//     <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/60 backdrop-blur-xs border-b border-zinc-300 dark:border-zinc-700 transition-all">
//       <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
//         {/* Left - Logo & Name */}
//         <div className="flex items-center gap-2">
//           <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
//           <Link
//             to="/"
//             className="text-xl font-extrabold tracking-widest text-black dark:text-white"
//           >
//             TOP-TIER CUSTOMS
//           </Link>
//         </div>

//         {/* Center - Nav Links (Desktop) */}
//         <ul className="hidden md:flex gap-6 items-center font-semibold text-sm uppercase text-zinc-800 dark:text-zinc-200">
//           {navLinks.map(({ label, href, icon }) => (
//             <li key={href}>
//               <Link
//                 to={href}
//                 className={`flex items-center gap-2 hover:text-red-500 transition ${
//                   location.pathname === href ? "text-red-500" : ""
//                 }`}
//               >
//                 {icon}
//                 <span className="hidden md:inline">{label}</span>
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* Right - Icons */}
//         <div className="flex items-center gap-4">
//           {user && (
//             <button
//               onClick={toggleCart}
//               className="relative p-2 rounded-full border border-emerald-500 hover:border-rose-500 transition"
//               title="View Cart"
//             >
//               <ShoppingCart className="w-4 h-4" />
//               {cart.length > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
//                   {cart.length}
//                 </span>
//               )}
//             </button>
//           )}
//           <button
//             onClick={toggleTheme}
//             className="p-2 rounded-full border border-amber-500 hover:border-rose-500 transition"
//             title="Toggle Theme"
//           >
//             {theme === "dark" ? (
//               <Sun className="w-4 h-4 text-yellow-300" />
//             ) : (
//               <Moon className="w-4 h-4 text-gray-800" />
//             )}
//           </button>

//           {user ? (
//             <button
//               onClick={() => logout()}
//               className="p-2 border border-rose-500 rounded-full hover:bg-rose-500 transition-all"
//             >
//               <LogOut className="w-4 h-4 text-rose-500 hover:text-zinc-100 transition-all" />
//             </button>
//           ) : (
//             <button
//               onClick={() => navigate("/login")}
//               className="p-2 rounded-full border border-gray-400 hover:border-sky-500 transition"
//             >
//               <User className="w-4 h-4 text-sky-500" />
//             </button>
//           )}

//           {/* Mobile Hamburger */}
//           <button
//             className="md:hidden focus:outline-none"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             {menuOpen ? (
//               <X className="w-6 h-6" />
//             ) : (
//               <Menu className="w-6 h-6" />
//             )}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-white dark:bg-black px-6 py-4 border-t border-zinc-200 dark:border-zinc-700">
//           <ul className="flex flex-col gap-4 text-sm font-semibold text-zinc-800 dark:text-zinc-200">
//             {navLinks.map(({ label, href, icon }) => (
//               <li key={href}>
//                 <Link
//                   to={href}
//                   onClick={() => setMenuOpen(false)}
//                   className="flex items-center gap-2"
//                 >
//                   {icon}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;

import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  Sun,
  Moon,
  ShoppingCart,
  User,
  LogOut,
  Home,
  Package,
  Wrench,
  Info,
  Users,
  LayoutDashboard,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.jpg";
import { useTheme } from "../context/ThemeContext";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const { theme, toggleTheme } = useTheme();
  const { toggleCart, cart } = useCart();
  const { user, logout } = useAuth();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: "Home", href: "/", icon: <Home className="w-5 h-5" /> },
    {
      label: "Products",
      href: "/products",
      icon: <Package className="w-5 h-5" />,
    },
    {
      label: "Services",
      href: "/services",
      icon: <Wrench className="w-5 h-5" />,
    },
    { label: "About", href: "/about", icon: <Info className="w-5 h-5" /> },
    {
      label: "Testimonials",
      href: "/testimonials",
      icon: <Users className="w-5 h-5" />,
    },
    user && {
      label: "Dashboard",
      href: "/dashboard",
      icon: <LayoutDashboard className="w-5 h-5" />,
    },
  ].filter(Boolean);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/60 backdrop-blur-xs border-b border-zinc-300 dark:border-zinc-700 transition-all">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo & Name */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
          <Link
            to="/"
            className="text-xl font-extrabold tracking-widest text-black dark:text-white"
          >
            TOP-TIER CUSTOMS
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-6 items-center font-semibold text-sm uppercase text-zinc-800 dark:text-zinc-200">
          {navLinks.map(({ label, href, icon }) => (
            <li key={href}>
              <Link
                to={href}
                className={`flex items-center gap-2 hover:text-red-500 transition ${
                  location.pathname === href ? "text-red-500" : ""
                }`}
              >
                {icon}
                <span>{label}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          {user && (
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleCart}
              className="relative p-2 rounded-full border border-emerald-500 hover:border-rose-500 transition"
              title="View Cart"
            >
              <ShoppingCart className="w-5 h-5" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cart.length}
                </span>
              )}
            </motion.button>
          )}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2 rounded-full border border-amber-500 hover:border-rose-500 transition"
            title="Toggle Theme"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-yellow-300" />
            ) : (
              <Moon className="w-4 h-4 text-gray-800" />
            )}
          </motion.button>
          {user ? (
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => logout()}
              className="p-2 border border-rose-500 rounded-full hover:bg-rose-500 transition-all"
            >
              <LogOut className="w-4 h-4 text-rose-500 hover:text-zinc-100 transition-all" />
            </motion.button>
          ) : (
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate("/login")}
              className="p-2 rounded-full border border-gray-400 hover:border-sky-500 transition"
            >
              <User className="w-4 h-4 text-sky-500" />
            </motion.button>
          )}

          {/* Hamburger */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className={`md:hidden ${
              theme === "dark"
                ? "bg-black text-zinc-800 border-zinc-700"
                : "bg-white text-zinc-900"
            } px-6 py-4 border-t border-zinc-200`}
          >
            <ul
              className={`flex flex-col gap-4 text-sm font-semibold ${
                theme === "dark" ? "text-zinc-700" : "text-zinc-900"
              }`}
            >
              {navLinks.map(({ label, href, icon }) => (
                <li key={href}>
                  <Link
                    to={href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center gap-2 ${
                      location.pathname === href && "text-red-500"
                    } hover:text-red-500 transition`}
                  >
                    {icon}
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

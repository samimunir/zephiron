import logo from "../assets/logo.png";
import {
  Home,
  ShoppingBag,
  Users,
  Circle,
  Bolt,
  LayoutDashboard,
} from "lucide-react";
import ThemeToggle from "./ui/ThemeToggle";
import { useTheme } from "../context/Theme";
import Logout from "./ui/Logout";
import Cart from "./ui/Cart";
import { useLocation, useNavigate } from "react-router-dom";

const navItems = [
  {
    id: 0,
    label: "Home",
    href: "/",
    icon: <Home className="w-6 h-6" />,
  },
  {
    id: 1,
    label: "Catalog",
    href: "/catalog",
    icon: <ShoppingBag className="w-6 h-6" />,
  },
  {
    id: 2,
    label: "Testimonials",
    href: "/testimonials",
    icon: <Users className="w-6 h-6" />,
  },
  {
    id: 3,
    label: "Support",
    href: "/support",
    icon: <Circle className="w-6 h-6" />,
  },
  {
    id: 4,
    label: "Contact",
    href: "/contact",
    icon: <Bolt className="w-6 h-6" />,
  },
];

// const authItems = [];

const Navbar = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const isAuthenticated = true;

  const location = useLocation();
  const navigate = useNavigate();

  return (
    <main
      className={`w-full px-8 py-4 shadow-2xl ${
        isDark ? "bg-zinc-900 text-zinc-200" : "bg-zinc-200 text-zinc-900"
      }`}
    >
      <nav className="flex items-center justify-between">
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-4 cursor-pointer"
        >
          <img src={logo} alt="Logo" className="w-16 h-16 rounded-full" />
          <h1 className="text-5xl font-semibold">MaraveX</h1>
        </div>
        <div className="flex items-center gap-8">
          {navItems.map((navItem) => (
            <div
              onClick={() => navigate(`${navItem.href}`)}
              className={`flex items-center gap-2 text-xl font-semibold uppercase hover:text-indigo-500 transition-all cursor-default ${
                location.pathname === navItem.href && "text-indigo-500"
              }`}
            >
              <p>{navItem.icon}</p>
              <p>{navItem.label}</p>
            </div>
          ))}
          {isAuthenticated && (
            <div
              onClick={() => navigate("/dashboard")}
              className={`flex items-center gap-2 text-xl font-semibold uppercase hover:text-indigo-500 transition-all cursor-default ${
                location.pathname === "/dashboard" && "text-indigo-500"
              }`}
            >
              <p>
                <LayoutDashboard className="w-6 h-6" />
              </p>
              <p>Dashboard</p>
            </div>
          )}
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          {isAuthenticated && (
            <div className="flex items-center gap-4">
              <Cart />
              <p className="font-semibold">Sami M.</p>
              <Logout type="icon" />
            </div>
          )}
        </div>
      </nav>
    </main>
  );
};

export default Navbar;

import { type ReactNode } from "react";
import Navbar from "./Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "../context/ThemeContext";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { theme } = useTheme(); // <- ✅ use the theme
  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-zinc-900 text-white" : "bg-white text-black"
      }`}
    >
      <Navbar />
      <main className="p-6">{children}</main>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Layout;

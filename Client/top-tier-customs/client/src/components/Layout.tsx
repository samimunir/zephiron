import { type ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "../context/ThemeContext";
import ScrollProgressBar from "./ui/ScrollProgressBar";

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
      <ScrollProgressBar />
      <Navbar />
      <main className="">{children}</main>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme={isDark ? "dark" : "light"}
      />
      <Footer />
    </div>
  );
};

export default Layout;

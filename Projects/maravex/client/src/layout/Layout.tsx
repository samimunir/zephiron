import { type ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import ScrollBar from "../components/ui/ScrollBar";
import Navbar from "../components/Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main>
      <ScrollBar />
      <Navbar />
      <section>{children}</section>
      <ToastContainer position="top-right" autoClose={3000} />
    </main>
  );
};

export default Layout;

import { type ReactNode } from "react";
import { ToastContainer } from "react-toastify";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main>
      <section>{children}</section>
      <ToastContainer position="top-right" autoClose={3000} />
    </main>
  );
};

export default Layout;

import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import ServicesPage from "./pages/ServicesPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import BookingModal from "./components/BookingModal";
import CartDrawer from "./components/CartDrawer";
import Protected from "./components/Protected";
import UserDashboardPage from "./pages/UserDashboardPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/dashboard"
          element={
            <Protected>
              <UserDashboardPage />
            </Protected>
          }
        />
      </Routes>
      <BookingModal />
      <CartDrawer />
    </Layout>
  );
}

export default App;

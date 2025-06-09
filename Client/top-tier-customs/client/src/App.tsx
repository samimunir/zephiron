import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </Layout>
  );
}

export default App;

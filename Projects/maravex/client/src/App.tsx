import Layout from "./layout/Layout";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/catalog" element={<h1>MARAVEX - CATALOG</h1>} />
      </Routes>
    </Layout>
  );
};

export default App;

import Layout from "./layout/Layout";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<h1>MARAVEX - HOME</h1>} />
        <Route path="/catalog" element={<h1>MARAVEX - CATALOG</h1>} />
      </Routes>
    </Layout>
  );
};

export default App;

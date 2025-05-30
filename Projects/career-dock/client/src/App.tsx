import { Routes, Route } from "react-router-dom";

import MainContainer from "./components/MainContainer";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Protected from "./components/Protected";
import DashboardPage from "./pages/DashboardPage";
import CreatePage from "./pages/CreatePage";

const App = () => {
  return (
    <MainContainer>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/dashboard"
          element={
            <Protected>
              <DashboardPage />
            </Protected>
          }
        />
        <Route
          path="/create"
          element={
            <Protected>
              <CreatePage />
            </Protected>
          }
        />
      </Routes>
    </MainContainer>
  );
};

export default App;

import { Routes, Route } from "react-router-dom";

import MainContainer from "./components/MainContainer";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Protected from "./components/Protected";
import DashboardPage from "./pages/DashboardPage";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <MainContainer>
      <Navbar />
      <ToastContainer position="top-right" />
      <Routes>
        <Route path="/" element={<LandingPage />} />
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
          path="/record/create"
          element={
            <Protected>
              <CreatePage />
            </Protected>
          }
        />
        <Route
          path="/record/edit/:id"
          element={
            <Protected>
              <EditPage />
            </Protected>
          }
        />
      </Routes>
    </MainContainer>
  );
};

export default App;

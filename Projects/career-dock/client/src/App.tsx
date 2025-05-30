import { Routes, Route } from "react-router-dom";

import MainContainer from "./components/MainContainer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <MainContainer>
      <Navbar />
      <Routes></Routes>
    </MainContainer>
  );
};

export default App;

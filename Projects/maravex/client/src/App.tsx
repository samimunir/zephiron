import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <main className="w-full h-[100vh] flex justify-center items-center">
      <h1 className="text-5xl font-bold text-zinc-950 uppercase">maravex</h1>
      <Routes>
        <Route path="/" element={<p>INDEX PAGE</p>} />
      </Routes>
    </main>
  );
};

export default App;
